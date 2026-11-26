import { ICONS } from './icons';

export const OWNER_STATS_KEY = 'dr-owner-stats';
const OWNER_STATS_CACHE_KEY = 'dr-es21-dl-cache-v2';
const CACHE_TTL_MS = 60_000;
const RELEASES_API_URL = 'https://api.github.com/repos/darkrabbitkr-oss/eyeshield21/releases?per_page=100';

export interface OwnerAssetCount {
  label: string;
  name: string;
  count: number;
  humanCount: number;
}

export interface OwnerReleaseStats {
  tag: string;
  publishedAt: string;
  total: number;
  humanTotal: number;
  botTotal: number;
  botSweepPerAsset: number;
  assets: OwnerAssetCount[];
}

export interface OwnerDownloadStats {
  total: number;
  humanTotal: number;
  botTotal: number;
  byPlatform: {
    winSetup: number;
    winPortable: number;
    macDmg: number;
    androidApk: number;
    other: number;
  };
  humanByPlatform: {
    winSetup: number;
    winPortable: number;
    macDmg: number;
    androidApk: number;
    other: number;
  };
  releases: OwnerReleaseStats[];
  fetchedAt: number;
}

function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function classifyAssetLabel(name: string): string {
  const lower = name.toLowerCase();
  if (lower.includes('-setup-') && lower.endsWith('.exe')) return 'Win 설치형';
  if (lower.includes('-portable-') && lower.endsWith('.exe')) return 'Win 포터블';
  if (lower.endsWith('.dmg')) return 'macOS DMG';
  if (lower.endsWith('.apk')) return 'Android APK';
  return name;
}

export function initOwnerStatsFlag(): boolean {
  try {
    const url = new URL(window.location.href);
    const param = url.searchParams.get('stats');
    if (param === '1' || param === 'true') {
      localStorage.setItem(OWNER_STATS_KEY, '1');
      url.searchParams.delete('stats');
      window.history.replaceState({}, '', url.pathname + url.search + url.hash);
    } else if (param === '0' || param === 'false') {
      localStorage.removeItem(OWNER_STATS_KEY);
      url.searchParams.delete('stats');
      window.history.replaceState({}, '', url.pathname + url.search + url.hash);
    }
    return localStorage.getItem(OWNER_STATS_KEY) === '1';
  } catch {
    return false;
  }
}

export function setOwnerStatsFlag(enabled: boolean): void {
  try {
    if (enabled) {
      localStorage.setItem(OWNER_STATS_KEY, '1');
    } else {
      localStorage.removeItem(OWNER_STATS_KEY);
    }
  } catch {
    // ignore storage failures
  }
}

export function isOwnerStatsEnabled(): boolean {
  try {
    return localStorage.getItem(OWNER_STATS_KEY) === '1';
  } catch {
    return false;
  }
}

export async function fetchReleaseDownloadStats(force = false): Promise<OwnerDownloadStats> {
  if (!force) {
    try {
      const raw = sessionStorage.getItem(OWNER_STATS_CACHE_KEY);
      if (raw) {
        const cached = JSON.parse(raw) as OwnerDownloadStats;
        if (cached && typeof cached.fetchedAt === 'number' && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
          return cached;
        }
      }
    } catch {
      // ignore invalid cache
    }
  }

  const res = await fetch(RELEASES_API_URL, {
    headers: { Accept: 'application/vnd.github+json' },
  });
  if (!res.ok) {
    throw new Error(`GitHub API HTTP ${res.status}`);
  }
  const json = (await res.json()) as Array<{
    tag_name?: string;
    published_at?: string;
    assets?: Array<{ name?: string; download_count?: number }>;
  }>;

  const byPlatform = {
    winSetup: 0,
    winPortable: 0,
    macDmg: 0,
    androidApk: 0,
    other: 0,
  };
  const humanByPlatform = {
    winSetup: 0,
    winPortable: 0,
    macDmg: 0,
    androidApk: 0,
    other: 0,
  };
  let total = 0;
  let humanTotal = 0;
  let botTotal = 0;

  const releases: OwnerReleaseStats[] = (Array.isArray(json) ? json : []).map((rel) => {
    const tag = String(rel.tag_name ?? '');
    const publishedAt = rel.published_at ? rel.published_at.slice(0, 10) : '';
    const rawAssets = Array.isArray(rel.assets) ? rel.assets : [];
    const rawCounts = rawAssets.map((a) => Number(a.download_count ?? 0) || 0);
    // Automated GitHub release scanners sweep all multi-platform binaries in a release uniformly (+1 each).
    const botSweepPerAsset = rawCounts.length >= 2 ? Math.min(...rawCounts) : 0;

    let relTotal = 0;
    let relHumanTotal = 0;
    let relBotTotal = 0;

    const assets: OwnerAssetCount[] = rawAssets.map((asset) => {
      const name = String(asset.name ?? '');
      const count = Number(asset.download_count ?? 0) || 0;
      const humanCount = Math.max(0, count - botSweepPerAsset);
      const botCount = count - humanCount;

      relTotal += count;
      relHumanTotal += humanCount;
      relBotTotal += botCount;
      total += count;
      humanTotal += humanCount;
      botTotal += botCount;

      const lower = name.toLowerCase();
      if (lower.includes('-setup-') && lower.endsWith('.exe')) {
        byPlatform.winSetup += count;
        humanByPlatform.winSetup += humanCount;
      } else if (lower.includes('-portable-') && lower.endsWith('.exe')) {
        byPlatform.winPortable += count;
        humanByPlatform.winPortable += humanCount;
      } else if (lower.endsWith('.dmg')) {
        byPlatform.macDmg += count;
        humanByPlatform.macDmg += humanCount;
      } else if (lower.endsWith('.apk')) {
        byPlatform.androidApk += count;
        humanByPlatform.androidApk += humanCount;
      } else {
        byPlatform.other += count;
        humanByPlatform.other += humanCount;
      }
      return {
        label: classifyAssetLabel(name),
        name,
        count,
        humanCount,
      };
    });
    return {
      tag,
      publishedAt,
      total: relTotal,
      humanTotal: relHumanTotal,
      botTotal: relBotTotal,
      botSweepPerAsset,
      assets,
    };
  });

  const stats: OwnerDownloadStats = {
    total,
    humanTotal,
    botTotal,
    byPlatform,
    humanByPlatform,
    releases,
    fetchedAt: Date.now(),
  };

  try {
    sessionStorage.setItem(OWNER_STATS_CACHE_KEY, JSON.stringify(stats));
  } catch {
    // ignore cache write failures
  }

  return stats;
}

function formatTime(ts: number): string {
  try {
    return new Date(ts).toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  } catch {
    return '';
  }
}

export async function renderOwnerStatsPanel(
  container: HTMLElement,
  pillSlot: HTMLElement | null,
  onHide: () => void,
  force = false,
): Promise<void> {
  container.hidden = false;
  container.innerHTML = `
    <div class="owner-stats-head">
      <div>
        <span class="pill pill-gold">OWNER STATS · 비공개 뷰</span>
        <h3 class="owner-stats-title">실시간 누적 다운로드 현황</h3>
      </div>
      <div class="owner-stats-actions">
        <button class="btn-chip btn-chip-secondary" id="owner-stats-hide" type="button">숨기기</button>
      </div>
    </div>
    <p class="owner-stats-status">GitHub 릴리스 다운로드 집계를 불러오는 중...</p>
  `;
  container.querySelector('#owner-stats-hide')?.addEventListener('click', onHide);

  try {
    const stats = await fetchReleaseDownloadStats(force);
    if (!isOwnerStatsEnabled()) return;

    if (pillSlot) {
      pillSlot.textContent = `실유저 다운로드 ${stats.humanTotal.toLocaleString('ko-KR')}회 (원본 ${stats.total.toLocaleString('ko-KR')})`;
      pillSlot.hidden = false;
    }

    container.innerHTML = `
      <div class="owner-stats-head">
        <div>
          <span class="pill pill-gold">OWNER STATS · 본인 브라우저 전용 (Alt+Shift+D)</span>
          <h3 class="owner-stats-title">실시간 누적 다운로드 현황 (일괄 봇 스캔 차감)</h3>
          <p class="owner-stats-meta">GitHub Releases 실측 · 4개 OS 일괄 크롤링(min 공통분 -${stats.botTotal.toLocaleString('ko-KR')}회) 제외 실유저 추정 · 갱신 ${escapeHtml(formatTime(stats.fetchedAt))}</p>
        </div>
        <div class="owner-stats-actions">
          <button class="btn-chip" id="owner-stats-refresh" type="button">${ICONS.download(13)}<span>새로고침</span></button>
          <button class="btn-chip btn-chip-secondary" id="owner-stats-hide" type="button">숨기기</button>
        </div>
      </div>

      <div class="owner-kpi-grid">
        <div class="owner-kpi-cell owner-kpi-total">
          <span class="spec-label">실유저 추정 누적</span>
          <strong class="owner-kpi-val tabular">${stats.humanTotal.toLocaleString('ko-KR')}회</strong>
          <span class="owner-kpi-sub tabular">원본 ${stats.total.toLocaleString('ko-KR')}회 · 봇 -${stats.botTotal.toLocaleString('ko-KR')}</span>
        </div>
        <div class="owner-kpi-cell">
          <span class="spec-label">Win 설치형</span>
          <strong class="owner-kpi-val tabular">${stats.humanByPlatform.winSetup.toLocaleString('ko-KR')}</strong>
          <span class="owner-kpi-sub tabular">원본 ${stats.byPlatform.winSetup.toLocaleString('ko-KR')}</span>
        </div>
        <div class="owner-kpi-cell">
          <span class="spec-label">Win 포터블</span>
          <strong class="owner-kpi-val tabular">${stats.humanByPlatform.winPortable.toLocaleString('ko-KR')}</strong>
          <span class="owner-kpi-sub tabular">원본 ${stats.byPlatform.winPortable.toLocaleString('ko-KR')}</span>
        </div>
        <div class="owner-kpi-cell">
          <span class="spec-label">macOS DMG</span>
          <strong class="owner-kpi-val tabular">${stats.humanByPlatform.macDmg.toLocaleString('ko-KR')}</strong>
          <span class="owner-kpi-sub tabular">원본 ${stats.byPlatform.macDmg.toLocaleString('ko-KR')}</span>
        </div>
        <div class="owner-kpi-cell">
          <span class="spec-label">Android APK</span>
          <strong class="owner-kpi-val tabular">${stats.humanByPlatform.androidApk.toLocaleString('ko-KR')}</strong>
          <span class="owner-kpi-sub tabular">원본 ${stats.byPlatform.androidApk.toLocaleString('ko-KR')}</span>
        </div>
      </div>

      <div class="owner-release-breakdown">
        ${stats.releases
          .map(
            (rel) => `
          <div class="owner-rel-row${rel.humanTotal > 0 ? ' owner-rel-row-active' : ''}">
            <div class="owner-rel-head">
              <strong class="tabular">${escapeHtml(rel.tag)}</strong>
              <span class="owner-rel-total${rel.humanTotal === 0 ? ' owner-rel-total-zero' : ''} tabular">실유저 ${rel.humanTotal.toLocaleString('ko-KR')}회</span>
              <span class="owner-rel-raw tabular">(원본 ${rel.total.toLocaleString('ko-KR')} · 봇 -${rel.botTotal.toLocaleString('ko-KR')})</span>
            </div>
            <div class="owner-rel-chips">
              ${rel.assets
                .map(
                  (a) =>
                    `<span class="owner-asset-chip${a.humanCount > 0 ? ' owner-asset-chip-human' : ''} tabular" title="${escapeHtml(a.name)} (GitHub 원본 ${a.count}회, 일괄 봇스캔 -${rel.botSweepPerAsset}회)">${escapeHtml(a.label)} <b>${a.humanCount.toLocaleString('ko-KR')}</b><small>(원본 ${a.count.toLocaleString('ko-KR')})</small></span>`,
                )
                .join('')}
            </div>
          </div>
        `,
          )
          .join('')}
      </div>
    `;

    container.querySelector('#owner-stats-refresh')?.addEventListener('click', () => {
      void renderOwnerStatsPanel(container, pillSlot, onHide, true);
    });
    container.querySelector('#owner-stats-hide')?.addEventListener('click', onHide);
  } catch (err) {
    const msg = err instanceof Error ? err.message : '요청 실패';
    container.innerHTML = `
      <div class="owner-stats-head">
        <div>
          <span class="pill pill-gold">OWNER STATS · 본인 브라우저 전용</span>
          <h3 class="owner-stats-title">다운로드 통계를 불러오지 못했습니다</h3>
          <p class="owner-stats-meta">${escapeHtml(msg)} (잠시 후 새로고침해 주세요)</p>
        </div>
        <div class="owner-stats-actions">
          <button class="btn-chip" id="owner-stats-refresh" type="button">새로고침</button>
          <button class="btn-chip btn-chip-secondary" id="owner-stats-hide" type="button">숨기기</button>
        </div>
      </div>
    `;
    container.querySelector('#owner-stats-refresh')?.addEventListener('click', () => {
      void renderOwnerStatsPanel(container, pillSlot, onHide, true);
    });
    container.querySelector('#owner-stats-hide')?.addEventListener('click', onHide);
  }
}
