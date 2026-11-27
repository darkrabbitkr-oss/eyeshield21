import { ICONS } from './icons';

const BOARD_REPO = 'darkrabbitkr-oss/eyeshield21';
const ISSUES_API_URL = `https://api.github.com/repos/${BOARD_REPO}/issues?state=all&per_page=30`;
const ISSUES_NEW_URL = `https://github.com/${BOARD_REPO}/issues/new`;
const ISSUES_LIST_URL = `https://github.com/${BOARD_REPO}/issues`;
const YOUTUBE_COMMENT_URL = 'https://youtu.be/pjWFmug5nX4';
const CACHE_KEY = 'dr-es21-board-cache-v1';
const CACHE_TTL_MS = 60_000;

export type BoardCategory = 'notice' | 'bug' | 'typo' | 'feature' | 'feedback';
export type ComposerCategory = Exclude<BoardCategory, 'notice'>;
export type BoardFilter = 'all' | ComposerCategory;

interface BoardComment {
  id: number;
  author: string;
  createdAt: string;
  body: string;
}

interface BoardIssue {
  id: number;
  number: number;
  title: string;
  body: string;
  state: 'open' | 'closed';
  category: BoardCategory;
  author: string;
  createdAt: string;
  comments: number;
  commentsUrl: string;
  htmlUrl: string;
}

interface BoardCachePayload {
  fetchedAt: number;
  issues: BoardIssue[];
}

interface CategoryConfig {
  label: string;
  badgeClass: string;
  prefix?: string;
  titlePlaceholder?: string;
  bodyPlaceholder?: string;
}

const CATEGORY_META: Record<BoardCategory, CategoryConfig> = {
  notice: {
    label: '공지',
    badgeClass: 'board-badge-notice',
  },
  bug: {
    label: '버그 제보',
    badgeClass: 'board-badge-bug',
    prefix: '[버그]',
    titlePlaceholder: '예: 4쿼터 종료 직전 패스 후 진행이 멈춤',
    bodyPlaceholder: '발생한 상황, 재현 순서, 사용 중인 기기/환경을 자세히 적어주세요.',
  },
  typo: {
    label: '오타 · 고증',
    badgeClass: 'board-badge-typo',
    prefix: '[오타/고증]',
    titlePlaceholder: '예: 원작 필살기 이름 또는 팀 로스터 오타 제보',
    bodyPlaceholder: '오타가 보이는 화면 위치와 올바른 표기를 알려주세요.',
  },
  feature: {
    label: '업데이트 희망',
    badgeClass: 'board-badge-feature',
    prefix: '[업데이트 희망]',
    titlePlaceholder: '예: 새 작전 플레이 추가 또는 편의 기능 제안',
    bodyPlaceholder: '추가되길 원하는 기능, 전술, 밸런스 의견을 적어주세요.',
  },
  feedback: {
    label: '자유 의견',
    badgeClass: 'board-badge-feedback',
    prefix: '[의견]',
    titlePlaceholder: '예: 플레이 소감 및 전체적인 의견',
    bodyPlaceholder: '게임을 즐기며 느낀 점이나 응원의 메시지를 남겨주세요.',
  },
};

const COMPOSER_CATEGORIES: ComposerCategory[] = ['bug', 'typo', 'feature', 'feedback'];

function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatMultiline(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return '<span class="board-empty-inline">작성된 본문 내용이 없습니다.</span>';
  return escapeHtml(trimmed).replace(/\r?\n/g, '<br />');
}

function formatAuthor(login: string): string {
  if (login === 'darkrabbitkr-oss') return 'Darkrabbit (개발자)';
  return login || '익명';
}

function formatDate(iso: string): string {
  if (!iso) return '';
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) return iso.slice(0, 10);
  return `${m[1]}. ${m[2]}. ${m[3]}.`;
}

function detectCategory(labels: Array<{ name?: string }> | undefined): BoardCategory {
  const names = new Set(
    (Array.isArray(labels) ? labels : [])
      .map((l) => String(l?.name ?? '').trim().toLowerCase())
      .filter(Boolean),
  );
  if (names.has('notice')) return 'notice';
  if (names.has('bug')) return 'bug';
  if (names.has('typo')) return 'typo';
  if (names.has('feature')) return 'feature';
  return 'feedback';
}

function sortBoardIssues(issues: BoardIssue[]): BoardIssue[] {
  return [...issues].sort((a, b) => {
    const aNotice = a.category === 'notice' ? 0 : 1;
    const bNotice = b.category === 'notice' ? 0 : 1;
    if (aNotice !== bNotice) return aNotice - bNotice;

    const aState = a.state === 'open' ? 0 : 1;
    const bState = b.state === 'open' ? 0 : 1;
    if (aState !== bState) return aState - bState;

    return b.number - a.number;
  });
}

async function fetchBoardIssues(force = false): Promise<BoardIssue[]> {
  if (!force) {
    try {
      const raw = sessionStorage.getItem(CACHE_KEY);
      if (raw) {
        const cached = JSON.parse(raw) as BoardCachePayload;
        if (
          cached &&
          typeof cached.fetchedAt === 'number' &&
          Array.isArray(cached.issues) &&
          Date.now() - cached.fetchedAt < CACHE_TTL_MS
        ) {
          return sortBoardIssues(cached.issues);
        }
      }
    } catch {
      // ignore invalid sessionStorage cache
    }
  }

  const res = await fetch(ISSUES_API_URL, {
    headers: { Accept: 'application/vnd.github+json' },
  });
  if (!res.ok) {
    throw new Error(`GitHub Issues API HTTP ${res.status}`);
  }

  const json = (await res.json()) as Array<{
    id?: number;
    number?: number;
    title?: string;
    body?: string | null;
    state?: string;
    labels?: Array<{ name?: string }>;
    user?: { login?: string } | null;
    created_at?: string;
    comments?: number;
    comments_url?: string;
    html_url?: string;
    pull_request?: unknown;
  }>;

  const issues: BoardIssue[] = (Array.isArray(json) ? json : [])
    .filter((item) => !item.pull_request && typeof item.number === 'number')
    .map((item) => ({
      id: Number(item.id ?? 0),
      number: Number(item.number ?? 0),
      title: String(item.title ?? ''),
      body: String(item.body ?? ''),
      state: item.state === 'closed' ? 'closed' : 'open',
      category: detectCategory(item.labels),
      author: String(item.user?.login ?? ''),
      createdAt: String(item.created_at ?? ''),
      comments: Number(item.comments ?? 0) || 0,
      commentsUrl: String(item.comments_url ?? ''),
      htmlUrl: String(item.html_url ?? ISSUES_LIST_URL),
    }));

  const sorted = sortBoardIssues(issues);
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ fetchedAt: Date.now(), issues: sorted }));
  } catch {
    // ignore storage quota
  }
  return sorted;
}

async function fetchIssueComments(commentsUrl: string): Promise<BoardComment[]> {
  if (!commentsUrl) return [];
  const res = await fetch(commentsUrl, {
    headers: { Accept: 'application/vnd.github+json' },
  });
  if (!res.ok) {
    throw new Error(`Comments HTTP ${res.status}`);
  }
  const json = (await res.json()) as Array<{
    id?: number;
    user?: { login?: string } | null;
    created_at?: string;
    body?: string;
  }>;
  return (Array.isArray(json) ? json : []).map((c) => ({
    id: Number(c.id ?? 0),
    author: String(c.user?.login ?? ''),
    createdAt: String(c.created_at ?? ''),
    body: String(c.body ?? ''),
  }));
}

export function buildIssueNewUrl(params: {
  category: ComposerCategory;
  platform: string;
  latestVersion: string;
  title: string;
  body: string;
}): string {
  const meta = CATEGORY_META[params.category];
  const cleanTitle = params.title.trim();
  const prefixedTitle =
    cleanTitle.startsWith('[') || !meta.prefix ? cleanTitle : `${meta.prefix} ${cleanTitle}`;
  const cleanBody = params.body.trim();
  const formattedBody = [
    `- 카테고리: ${meta.label}`,
    `- 실행 환경: ${params.platform}`,
    `- 게임 버전: ${params.latestVersion}`,
    '',
    '### 상세 내용',
    cleanBody || '(내용을 입력해 주세요)',
  ].join('\n');

  const query = new URLSearchParams({
    labels: params.category,
    title: prefixedTitle,
    body: formattedBody,
  });
  return `${ISSUES_NEW_URL}?${query.toString()}`;
}

export function mountFeedbackBoard(container: HTMLElement, latestVersion: string): void {
  let issues: BoardIssue[] = [];
  let loading = true;
  let loadError: string | null = null;
  let activeFilter: BoardFilter = 'all';
  let activeCategory: ComposerCategory = 'bug';
  const expandedNumbers = new Set<number>();
  const commentsCache = new Map<number, BoardComment[]>();
  const commentsLoading = new Set<number>();
  const commentsErrors = new Map<number, string>();

  container.innerHTML = `
    <div class="section-header">
      <div>
        <h2 class="section-title">제보 · 의견 게시판</h2>
        <p class="section-desc">버그·오타 제보, 원작 고증 수정, 업데이트 희망 사항을 자유롭게 남겨주세요. 등록된 글과 반영 상태가 실시간으로 표시됩니다.</p>
      </div>
      <div class="board-header-actions">
        <button class="btn-chip btn-chip-secondary" id="board-refresh-btn" type="button">
          ${ICONS.refresh(14)}
          <span>새로고침</span>
        </button>
        <a class="btn-chip btn-chip-secondary" href="${ISSUES_LIST_URL}" target="_blank" rel="noopener noreferrer">
          <span>GitHub 전체 보기</span>
          ${ICONS.external(13)}
        </a>
      </div>
    </div>

    <div class="board-grid">
      <div class="board-feed-col">
        <div class="filter-pills" id="board-filters" role="group" aria-label="게시판 카테고리 필터"></div>
        <div class="board-status-banner" id="board-status-banner" hidden></div>
        <div class="board-post-list" id="board-post-list" aria-live="polite"></div>
      </div>

      <aside class="board-composer-col" aria-label="새 제보 작성">
        <div class="board-composer-head">
          <h3>새 제보 · 의견 쓰기</h3>
          <p>작성 후 아래 버튼을 누르면 입력한 내용이 그대로 채워진 GitHub 등록 화면이 열립니다.</p>
        </div>

        <form id="board-composer-form" class="board-form" novalidate>
          <div class="board-field">
            <span class="board-label">카테고리</span>
            <div class="board-cat-pills" id="board-composer-cats" role="radiogroup" aria-label="제보 카테고리 선택">
              ${COMPOSER_CATEGORIES.map(
                (cat, idx) => `
                  <button
                    type="button"
                    class="board-cat-btn ${idx === 0 ? 'is-active' : ''}"
                    data-cat="${cat}"
                    role="radio"
                    aria-checked="${idx === 0 ? 'true' : 'false'}"
                  >
                    ${CATEGORY_META[cat].label}
                  </button>
                `,
              ).join('')}
            </div>
          </div>

          <div class="board-field">
            <label class="board-label" for="board-platform">실행 환경 <span class="tabular">(${escapeHtml(latestVersion)})</span></label>
            <select id="board-platform" class="board-input board-select">
              <option value="Web (브라우저)">Web (브라우저)</option>
              <option value="Windows (EXE)">Windows (EXE)</option>
              <option value="macOS (DMG)">macOS (DMG)</option>
              <option value="Android (APK)">Android (APK)</option>
              <option value="기타 / 공통">기타 / 공통</option>
            </select>
          </div>

          <div class="board-field">
            <label class="board-label" for="board-title">제목</label>
            <input
              id="board-title"
              class="board-input"
              type="text"
              maxlength="100"
              required
              placeholder="${escapeHtml(CATEGORY_META.bug.titlePlaceholder ?? '')}"
            />
          </div>

          <div class="board-field">
            <label class="board-label" for="board-body">상세 내용</label>
            <textarea
              id="board-body"
              class="board-input board-textarea"
              rows="5"
              maxlength="2000"
              placeholder="${escapeHtml(CATEGORY_META.bug.bodyPlaceholder ?? '')}"
            ></textarea>
          </div>

          <p class="board-form-error" id="board-form-error" role="alert" hidden></p>

          <button class="btn-primary board-submit-btn" type="submit">
            ${ICONS.messageSquare(16)}
            <span>GitHub에 글 등록하기</span>
            ${ICONS.external(14)}
          </button>
        </form>

        <div class="board-alt-box">
          <strong>GitHub 계정이 없으신가요?</strong>
          <p>로그인 없이 공식 유튜브 영상 댓글로 제보하셔도 확인 후 게임에 반영합니다.</p>
          <a class="btn-chip btn-chip-secondary" href="${YOUTUBE_COMMENT_URL}" target="_blank" rel="noopener noreferrer">
            <span>유튜브 댓글로 제보하기 (@Darkrabbit-kr)</span>
            ${ICONS.external(13)}
          </a>
        </div>
      </aside>
    </div>
  `;

  const filtersEl = container.querySelector<HTMLElement>('#board-filters');
  const statusBannerEl = container.querySelector<HTMLElement>('#board-status-banner');
  const listEl = container.querySelector<HTMLElement>('#board-post-list');
  const refreshBtn = container.querySelector<HTMLButtonElement>('#board-refresh-btn');
  const formEl = container.querySelector<HTMLFormElement>('#board-composer-form');
  const platformEl = container.querySelector<HTMLSelectElement>('#board-platform');
  const titleEl = container.querySelector<HTMLInputElement>('#board-title');
  const bodyEl = container.querySelector<HTMLTextAreaElement>('#board-body');
  const errorEl = container.querySelector<HTMLElement>('#board-form-error');
  const catBtns = [...container.querySelectorAll<HTMLButtonElement>('#board-composer-cats .board-cat-btn')];

  function countForFilter(filter: BoardFilter): number {
    if (filter === 'all') return issues.length;
    return issues.filter((item) => item.category === filter).length;
  }

  function renderFilters(): void {
    if (!filtersEl) return;
    const filterDefs: Array<{ key: BoardFilter; label: string }> = [
      { key: 'all', label: '전체' },
      { key: 'bug', label: '버그 제보' },
      { key: 'typo', label: '오타 · 고증' },
      { key: 'feature', label: '업데이트 희망' },
      { key: 'feedback', label: '자유 의견' },
    ];
    filtersEl.innerHTML = filterDefs
      .map(
        (f) => `
          <button
            type="button"
            class="filter-btn ${activeFilter === f.key ? 'is-active' : ''}"
            data-board-filter="${f.key}"
          >
            ${f.label} <span class="tabular">${countForFilter(f.key)}</span>
          </button>
        `,
      )
      .join('');
  }

  function renderCommentsHtml(issue: BoardIssue): string {
    if (issue.comments === 0) return '';
    if (commentsLoading.has(issue.number)) {
      return '<div class="board-comments-state">댓글을 불러오는 중...</div>';
    }
    const err = commentsErrors.get(issue.number);
    if (err) {
      return `<div class="board-comments-state">댓글을 불러오지 못했습니다 (${escapeHtml(err)}). GitHub에서 직접 확인해 주세요.</div>`;
    }
    const items = commentsCache.get(issue.number);
    if (!items || items.length === 0) return '';
    return `
      <div class="board-comments-list">
        <div class="board-comments-heading tabular">댓글 ${items.length}</div>
        ${items
          .map(
            (c) => `
              <div class="board-comment-item">
                <div class="board-comment-meta">
                  <strong>${escapeHtml(formatAuthor(c.author))}</strong>
                  <span class="tabular">${escapeHtml(formatDate(c.createdAt))}</span>
                </div>
                <div class="board-comment-body">${formatMultiline(c.body)}</div>
              </div>
            `,
          )
          .join('')}
      </div>
    `;
  }

  function renderList(): void {
    if (!listEl || !statusBannerEl) return;

    if (loadError) {
      statusBannerEl.hidden = false;
      statusBannerEl.innerHTML = `
        <span>게시글 목록을 불러오는 중 일시적인 오류가 발생했습니다 (${escapeHtml(loadError)}).</span>
        <a href="${ISSUES_LIST_URL}" target="_blank" rel="noopener noreferrer">GitHub에서 직접 보기</a>
      `;
    } else {
      statusBannerEl.hidden = true;
      statusBannerEl.innerHTML = '';
    }

    if (loading) {
      listEl.innerHTML = `
        <div class="board-empty-card">
          <span>게시판 글을 불러오는 중입니다...</span>
        </div>
      `;
      return;
    }

    const visible =
      activeFilter === 'all' ? issues : issues.filter((item) => item.category === activeFilter);

    if (visible.length === 0) {
      listEl.innerHTML = `
        <div class="board-empty-card">
          <strong>${activeFilter === 'all' ? '등록된 글이 아직 없습니다.' : '선택한 카테고리에 등록된 글이 아직 없습니다.'}</strong>
          <p>오른쪽 작성 양식에서 첫 번째 제보나 의견을 남겨보세요!</p>
        </div>
      `;
      return;
    }

    listEl.innerHTML = visible
      .map((issue) => {
        const catMeta = CATEGORY_META[issue.category];
        const isExpanded = expandedNumbers.has(issue.number);
        const stateLabel =
          issue.category === 'notice'
            ? issue.state === 'closed'
              ? '보관 공지'
              : '필독 공지'
            : issue.state === 'closed'
              ? '반영 완료'
              : '접수 중';
        const stateClass =
          issue.state === 'closed'
            ? 'board-state-closed'
            : issue.category === 'notice'
              ? 'board-state-notice'
              : 'board-state-open';

        return `
          <article class="board-post ${issue.category === 'notice' ? 'is-notice' : ''}" data-issue-number="${issue.number}">
            <button
              type="button"
              class="board-post-head"
              data-toggle-issue="${issue.number}"
              aria-expanded="${isExpanded ? 'true' : 'false'}"
            >
              <div class="board-post-main">
                <div class="board-post-badges">
                  <span class="board-badge ${catMeta.badgeClass}">${catMeta.label}</span>
                  <span class="board-state ${stateClass}">${stateLabel}</span>
                  <span class="board-issue-num tabular">#${issue.number}</span>
                </div>
                <h3 class="board-post-title">${escapeHtml(issue.title)}</h3>
                <div class="board-post-meta">
                  <span>${escapeHtml(formatAuthor(issue.author))}</span>
                  <span aria-hidden="true">·</span>
                  <span class="tabular">${escapeHtml(formatDate(issue.createdAt))}</span>
                  <span aria-hidden="true">·</span>
                  <span class="tabular">댓글 ${issue.comments}</span>
                </div>
              </div>
              <span class="board-chevron ${isExpanded ? 'is-open' : ''}">${ICONS.chevronDown(16)}</span>
            </button>
            <div class="board-post-body" ${isExpanded ? '' : 'hidden'}>
              <div class="board-post-content">${formatMultiline(issue.body)}</div>
              ${renderCommentsHtml(issue)}
              <div class="board-post-actions">
                <a class="btn-chip btn-chip-secondary" href="${escapeHtml(issue.htmlUrl)}" target="_blank" rel="noopener noreferrer">
                  <span>GitHub에서 댓글 달기</span>
                  ${ICONS.external(13)}
                </a>
              </div>
            </div>
          </article>
        `;
      })
      .join('');
  }

  async function ensureCommentsLoaded(issue: BoardIssue): Promise<void> {
    if (issue.comments === 0 || commentsCache.has(issue.number) || commentsLoading.has(issue.number)) {
      return;
    }
    commentsLoading.add(issue.number);
    commentsErrors.delete(issue.number);
    renderList();
    try {
      const loaded = await fetchIssueComments(issue.commentsUrl);
      commentsCache.set(issue.number, loaded);
    } catch (err) {
      commentsErrors.set(issue.number, err instanceof Error ? err.message : '요청 오류');
    } finally {
      commentsLoading.delete(issue.number);
      renderList();
    }
  }

  async function loadIssues(force = false): Promise<void> {
    loading = true;
    loadError = null;
    if (refreshBtn) refreshBtn.disabled = true;
    renderFilters();
    renderList();

    try {
      issues = await fetchBoardIssues(force);
    } catch (err) {
      loadError = err instanceof Error ? err.message : '네트워크 오류';
      issues = [];
    } finally {
      loading = false;
      if (refreshBtn) refreshBtn.disabled = false;
      renderFilters();
      renderList();
    }
  }

  filtersEl?.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-board-filter]');
    if (!btn) return;
    activeFilter = (btn.dataset.boardFilter as BoardFilter) || 'all';
    renderFilters();
    renderList();
  });

  listEl?.addEventListener('click', (e) => {
    const toggleBtn = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-toggle-issue]');
    if (!toggleBtn) return;
    const num = Number(toggleBtn.dataset.toggleIssue);
    if (!Number.isFinite(num)) return;
    if (expandedNumbers.has(num)) {
      expandedNumbers.delete(num);
      renderList();
    } else {
      expandedNumbers.add(num);
      renderList();
      const targetIssue = issues.find((item) => item.number === num);
      if (targetIssue) {
        void ensureCommentsLoaded(targetIssue);
      }
    }
  });

  refreshBtn?.addEventListener('click', () => {
    commentsCache.clear();
    void loadIssues(true);
  });

  catBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat as ComposerCategory | undefined;
      if (!cat) return;
      activeCategory = cat;
      catBtns.forEach((b) => {
        const selected = b === btn;
        b.classList.toggle('is-active', selected);
        b.setAttribute('aria-checked', selected ? 'true' : 'false');
      });
      const meta = CATEGORY_META[cat];
      if (titleEl && meta.titlePlaceholder) titleEl.placeholder = meta.titlePlaceholder;
      if (bodyEl && meta.bodyPlaceholder) bodyEl.placeholder = meta.bodyPlaceholder;
    });
  });

  formEl?.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleVal = titleEl?.value.trim() ?? '';
    const bodyVal = bodyEl?.value.trim() ?? '';
    const platformVal = platformEl?.value ?? 'Web (브라우저)';

    if (!titleVal) {
      if (errorEl) {
        errorEl.hidden = false;
        errorEl.textContent = '제목을 한 줄 이상 입력해 주세요.';
      }
      titleEl?.focus();
      return;
    }

    if (errorEl) {
      errorEl.hidden = true;
      errorEl.textContent = '';
    }

    const issueUrl = buildIssueNewUrl({
      category: activeCategory,
      platform: platformVal,
      latestVersion,
      title: titleVal,
      body: bodyVal,
    });
    formEl.dataset.lastIssueUrl = issueUrl;
    window.open(issueUrl, '_blank', 'noopener,noreferrer');
  });

  void loadIssues(false);
}
