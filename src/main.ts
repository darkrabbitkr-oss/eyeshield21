import {
  PORTAL_EDITIONS,
  PORTAL_FAQS,
  PORTAL_META,
  PORTAL_PREVIEWS,
  PORTAL_RELEASES,
  PORTAL_SYSTEMS,
  PORTAL_VIDEOS,
  type PortalVideo,
} from './data/portalData';
import { mountFeedbackBoard } from './feedbackBoard';
import { ICONS } from './icons';
import {
  initOwnerStatsFlag,
  isOwnerStatsEnabled,
  renderOwnerStatsPanel,
  setOwnerStatsFlag,
} from './ownerStats';

type ThemeMode = 'dark' | 'light';
type PlatformFilter = 'all' | 'windows' | 'macos' | 'android' | 'web';

const THEME_KEY = 'es21-portal-theme';

function loadInitialTheme(): ThemeMode {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // ignore storage errors
  }
  return 'dark';
}

function buildYoutubeEmbedIframe(youtubeId: string, title: string, autoplay = false): string {
  const params = new URLSearchParams({
    rel: '0',
    playsinline: '1',
  });
  if (autoplay) params.set('autoplay', '1');
  return `<iframe src="https://www.youtube.com/embed/${youtubeId}?${params.toString()}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}

function youtubeWatchUrl(video: PortalVideo): string {
  if (!video.youtubeId) return '';
  return video.aspect === '9/16'
    ? `https://www.youtube.com/shorts/${video.youtubeId}`
    : `https://youtu.be/${video.youtubeId}`;
}

function renderVideoPlayerHtml(video: PortalVideo): string {
  if (video.youtubeId) {
    return buildYoutubeEmbedIframe(video.youtubeId, video.title, false);
  }
  return `<video controls preload="metadata" poster="${video.poster}" src="${video.localSrc}"></video>`;
}

function editionIcon(key: string): string {
  if (key === 'windows' || key === 'macos') return ICONS.monitor(15);
  if (key === 'android') return ICONS.smartphone(15);
  if (key === 'web') return ICONS.globe(15);
  return ICONS.cube(15);
}

function detectPrimaryDownload(): { label: string; href: string; filename: string } {
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  if (/Android/i.test(ua)) {
    return {
      label: 'Android APK 받기',
      href: PORTAL_META.apkDirectUrl,
      filename: PORTAL_META.apkFilename,
    };
  }
  if (/Windows|Win64|WOW64/i.test(ua)) {
    return {
      label: 'Windows EXE 받기',
      href: PORTAL_META.winSetupUrl,
      filename: PORTAL_META.winSetupFilename,
    };
  }
  return {
    label: 'macOS DMG 받기',
    href: PORTAL_META.dmgDirectUrl,
    filename: PORTAL_META.dmgFilename,
  };
}

function renderChipLink(
  label: string,
  href: string,
  opts: { downloadFilename?: string; external?: boolean; secondary?: boolean } = {},
): string {
  const cls = opts.secondary ? 'btn-chip btn-chip-secondary' : 'btn-chip';
  if (opts.downloadFilename) {
    return `<a class="${cls}" href="${href}" download="${opts.downloadFilename}">${ICONS.download(13)}<span>${label}</span></a>`;
  }
  const attrs = opts.external ? 'target="_blank" rel="noopener noreferrer"' : '';
  return `<a class="${cls}" href="${href}" ${attrs}><span>${label}</span>${ICONS.external(13)}</a>`;
}

function mount(): void {
  const root = document.getElementById('app');
  if (!root) return;

  let currentTheme: ThemeMode = loadInitialTheme();
  let activeVideoId = PORTAL_VIDEOS[0].id;
  let activeFilter: PlatformFilter = 'all';
  let activeLightboxIdx: number | null = null;
  let drawerOpen = false;
  let copiedCmd = false;
  const primaryDl = detectPrimaryDownload();

  document.documentElement.setAttribute('data-theme', currentTheme);

  root.innerHTML = `
    <header class="mobile-bar">
      <a class="mobile-brand" href="#discover">
        <img src="./media/icon.png" alt="아이실드 21 아이콘" />
        <span>${PORTAL_META.shortTitle}</span>
      </a>
      <div class="mobile-actions">
        <button class="icon-btn" id="mobile-theme-btn" type="button" aria-label="테마 전환">
          ${currentTheme === 'dark' ? ICONS.sun(17) : ICONS.moon(17)}
        </button>
        <button class="icon-btn" id="mobile-menu-btn" type="button" aria-label="메뉴 열기">
          ${ICONS.menu(19)}
        </button>
      </div>
    </header>

    <div class="portal-shell">
      <aside class="sidebar" id="portal-sidebar" aria-label="주요 탐색">
        <a class="brand-lockup" href="#discover">
          <img class="brand-icon" src="./media/icon.png" alt="아이실드 21 앱 아이콘" />
          <div class="brand-copy">
            <span class="brand-name">${PORTAL_META.shortTitle}</span>
            <span class="brand-tag">택티컬 풋볼 매니저</span>
          </div>
        </a>

        <nav class="nav-group" id="sidebar-nav">
          <a class="nav-link is-active" href="#discover" data-nav="discover">${ICONS.home(17)}<span>홈 · 소개</span></a>
          <a class="nav-link" href="#systems" data-nav="systems">${ICONS.cube(17)}<span>핵심 시스템</span></a>
          <a class="nav-link" href="#controls" data-nav="controls">${ICONS.gamepad(17)}<span>조작 가이드</span></a>
          <a class="nav-link" href="#videos" data-nav="videos">${ICONS.film(17)}<span>영상관</span></a>
          <a class="nav-link" href="#editions" data-nav="editions">${ICONS.monitor(17)}<span>플랫폼</span></a>
          <a class="nav-link" href="#preview" data-nav="preview">${ICONS.grid(17)}<span>미리보기</span></a>
          <a class="nav-link" href="#downloads" data-nav="downloads">${ICONS.download(17)}<span>다운로드</span></a>
          <a class="nav-link" href="#board" data-nav="board">${ICONS.messageSquare(17)}<span>제보 · 게시판</span></a>
        </nav>

        <div class="sidebar-spacer"></div>

        <div class="sidebar-actions">
          <a class="repo-link" href="https://darkrabbitkr-oss.github.io/">
            <span class="theme-btn-left">${ICONS.globe(15)}<span>Darkrabbit 게임 목록</span></span>
            ${ICONS.arrowRight(14)}
          </a>
          <button class="theme-btn" id="theme-toggle-btn" type="button">
            <span class="theme-btn-left">
              <span id="theme-icon-slot">${currentTheme === 'dark' ? ICONS.moon(16) : ICONS.sun(16)}</span>
              <span id="theme-label-slot">${currentTheme === 'dark' ? '다크 스타디움' : '라이트 데이'}</span>
            </span>
            <span class="pill tabular">${PORTAL_META.latestVersion}</span>
          </button>
        </div>
      </aside>

      <main class="main-content" id="main-content">
        <section id="discover" class="page-section">
          <div class="hero-card">
            <img class="hero-bg-pixel" src="./media/bg_eyeshield21_pixel.png" alt="데이몬 데빌 배츠 픽셀 키비주얼" />
            <div class="hero-scrim"></div>
            <div class="hero-inner">
              <img class="hero-logo-img" src="./media/logo_eyeshield21_emblem.png" alt="아이실드 21 로고" />
              <h1 class="hero-title">${PORTAL_META.heroHeadline}</h1>
              <p class="hero-copy">${PORTAL_META.heroDescription}</p>
              <div class="hero-cta-row">
                <a class="btn-primary" href="./play/" target="_blank" rel="noopener noreferrer">
                  ${ICONS.playSolid(14)}
                  <span>웹에서 바로 플레이</span>
                </a>
                <button class="btn-secondary" id="open-hero-trailer" type="button">
                  ${ICONS.film(15)}
                  <span>소개 영상 · 00:31</span>
                </button>
                <a class="btn-secondary" href="#controls">
                  ${ICONS.gamepad(16)}
                  <span>5키 조작 가이드</span>
                </a>
              </div>
            </div>
          </div>

          <div class="app-strip">
            <div class="app-strip-top">
              <div class="app-identity">
                <img class="app-icon-lg" src="./media/icon.png" alt="아이실드 21 아이콘" />
                <div class="app-title-stack">
                  <h2>${PORTAL_META.gameTitle}</h2>
                  <div class="app-meta-line">
                    <span class="pill pill-crimson tabular">${PORTAL_META.latestVersion}</span>
                    <span class="pill pill-gold tabular" id="owner-total-pill" hidden></span>
                    <span>실시간 미식축구 전술 팬게임 · 전술 이해도 6성향 AI · 정발 리마스터 112종 컷인</span>
                  </div>
                </div>
              </div>
              <a class="btn-primary" href="${primaryDl.href}" download="${primaryDl.filename}">
                ${ICONS.download(16)}
                <span>${primaryDl.label}</span>
              </a>
            </div>

            <div class="specs-bar">
              <div class="spec-cell">
                <span class="spec-label">로스터 · 전술 AI</span>
                <span class="spec-value tabular">42팀 · 871명 (6성향 IQ)</span>
              </div>
              <div class="spec-cell">
                <span class="spec-label">사쿠가 필살기 컷인</span>
                <span class="spec-value tabular">정발 리마스터 112종</span>
              </div>
              <div class="spec-cell">
                <span class="spec-label">만화 스토리 · 사운드</span>
                <span class="spec-value tabular">개편 15챕터 · 9곡 BGM</span>
              </div>
              <div class="spec-cell">
                <span class="spec-label">지원 환경 · 기본 조작</span>
                <span class="spec-value">Win · Mac · APK · Web (5키)</span>
              </div>
            </div>
          </div>
        </section>

        <section id="systems" class="page-section">
          <div class="section-header">
            <div>
              <h2 class="section-title">핵심 시스템 · 5대 게임 모드</h2>
              <p class="section-desc">캐릭터마다 다른 두뇌 회전부터 대원 정발 리마스터 112종 컷인, 9곡 스포츠 록 BGM, 15챕터 만화 스토리와 42팀 감독 커리어까지 최신 빌드의 주요 특징입니다.</p>
            </div>
            <a class="btn-chip" href="#downloads">
              <span>${PORTAL_META.latestVersion} 패치 내역</span>${ICONS.arrowRight(13)}
            </a>
          </div>

          <div class="ctrl-pillar-grid">
            ${PORTAL_SYSTEMS.map((sys) => {
              const pillCls =
                sys.pillTone === 'crimson'
                  ? 'pill pill-crimson'
                  : sys.pillTone === 'gold'
                    ? 'pill pill-gold'
                    : 'pill';
              return `
                <article class="ctrl-pillar-card">
                  <div class="ctrl-pillar-head">
                    <span class="${pillCls}">${sys.pillLabel}</span>
                    <h3>${sys.title}</h3>
                  </div>
                  <p>${sys.description}</p>
                </article>
              `;
            }).join('')}
          </div>
        </section>

        <section id="controls" class="page-section">
          <div class="section-header">
            <div>
              <h2 class="section-title">초직관 5키 조작 가이드</h2>
              <p class="section-desc">복잡한 단축키 암기 없이 왼손 5키(Q · E · A · S · D)와 오른손 방향키만으로 공격·수비·필살기 4종을 모두 다룹니다.</p>
            </div>
            <a class="btn-chip" href="./play/" target="_blank" rel="noopener noreferrer">
              <span>웹에서 바로 체험</span>${ICONS.external(13)}
            </a>
          </div>

          <div class="ctrl-guide-deck">
            <div class="ctrl-keycap-board" aria-label="기본 키보드 배치도">
              <div class="ctrl-hand-col">
                <span class="ctrl-hand-label">왼손 5키 (Q · E · A · S · D)</span>
                <div class="keycap-rows">
                  <div class="keycap-row">
                    <div class="keycap-unit is-gold">
                      <kbd>Q</kbd>
                      <span>캐릭터·타겟 변경</span>
                    </div>
                    <div class="keycap-unit is-muted" title="기존 사용자용 모션/로빙 보조">
                      <kbd>W</kbd>
                      <span>모션 보조</span>
                    </div>
                    <div class="keycap-unit is-cobalt">
                      <kbd>E</kbd>
                      <span>달리기 + 조합</span>
                    </div>
                  </div>
                  <div class="keycap-row keycap-row-shift">
                    <div class="keycap-unit is-crimson">
                      <kbd>A</kbd>
                      <span>필살기 · 반전</span>
                    </div>
                    <div class="keycap-unit is-emerald">
                      <kbd>S</kbd>
                      <span>스냅 · 패스</span>
                    </div>
                    <div class="keycap-unit is-orange">
                      <kbd>D</kbd>
                      <span>돌파 · 태클</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="ctrl-hand-col">
                <span class="ctrl-hand-label">오른손 방향키 (이동 · 지향 · 비기 1~4번)</span>
                <div class="arrow-cluster">
                  <div class="arrow-top">
                    <div class="keycap-unit is-arrow"><kbd>↑</kbd><span>A+↑ 비기 2</span></div>
                  </div>
                  <div class="arrow-bottom">
                    <div class="keycap-unit is-arrow"><kbd>←</kbd><span>A+← 비기 1</span></div>
                    <div class="keycap-unit is-arrow"><kbd>↓</kbd><span>A+↓ 궁극기 4</span></div>
                    <div class="keycap-unit is-arrow"><kbd>→</kbd><span>A+→ 비기 3</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="ctrl-pillar-grid">
              <article class="ctrl-pillar-card">
                <div class="ctrl-pillar-head">
                  <span class="pill pill-gold">1버튼 즉시 반응</span>
                  <h3><kbd>Q</kbd> 캐릭터 · 타겟 변경</h3>
                </div>
                <p>딜레이 없이 누르는 즉시 조종 캐릭터와 타겟이 바뀝니다. 공격 스냅 전에는 <strong>QB → 세나(RB) → 몬타(WR1) → 쿠리타(C/OL)</strong> 순으로 직접 조종할 선수를 고를 수 있고, 수비 시에는 공과 가장 가까운 수비수로 즉시 전환됩니다.</p>
              </article>

              <article class="ctrl-pillar-card">
                <div class="ctrl-pillar-head">
                  <span class="pill pill-crimson">방향키 멀티 비기</span>
                  <h3><kbd>A</kbd> + <kbd>← ↑ → ↓</kbd> 필살기 1~4</h3>
                </div>
                <p><kbd>A</kbd>만 가볍게 누르면 현재 상황에 맞는 추천 필살기(스냅 전에는 포메이션 반전)가 나가며, <kbd>A</kbd>를 누른 채 방향키 <kbd>←</kbd><kbd>↑</kbd><kbd>→</kbd><kbd>↓</kbd>를 누르면 이동 흔들림 없이 장착된 비기 1~4번을 직접 골라 터뜨립니다.</p>
              </article>

              <article class="ctrl-pillar-card">
                <div class="ctrl-pillar-head">
                  <span class="pill">자연스러운 달리기 변형</span>
                  <h3><kbd>E</kbd> 달리기 중 조합 액션</h3>
                </div>
                <p>평소 <kbd>E</kbd>를 누르고 달리던 손 모양 그대로 다른 키를 누르면 심화 기술로 변합니다: <kbd>E+S</kbd> 로빙패스·볼보호·하드카운트, <kbd>E+D</kbd> 전력다이브·전력태클·공버리기·타임아웃, <kbd>E+Q</kbd> 라인맨(OL/DL) 직행, <kbd>E+A</kbd> 오더블.</p>
              </article>
            </div>

            <div class="ctrl-side-compare">
              <div class="ctrl-side-box is-offense">
                <div class="ctrl-side-title">
                  <span class="pill pill-gold">⚡ 공격 (OFFENSE)</span>
                  <strong>패스 · 광속 돌파 · 콜 포 패스</strong>
                </div>
                <ul class="ctrl-kv-list">
                  <li><span>스냅 전 캐릭터 직접 선택 / 인플레이 타겟 순환</span><span><kbd>Q</kbd></span></li>
                  <li><span>스냅 · 방향키 지향 패스(홀드=총알) · 백토스 · 패스요청</span><span><kbd>S</kbd></span></li>
                  <li><span>달리며 S = 로빙 롱패스(QB) · 볼보호/슬라이드 · 하드카운트</span><span><kbd>E+S</kbd></span></li>
                  <li><span>돌파 · 태클 격파(연타) · 점프캐치 · 펌프페이크</span><span><kbd>D</kbd></span></li>
                  <li><span>달리며 D = 전력 다이브 돌파 · 공 버리기(QB) · 타임아웃</span><span><kbd>E+D</kbd></span></li>
                  <li><span>공격 라인맨(쿠리타 등 OL) 직행 전환 / 오더블</span><span><kbd>E+Q</kbd> <kbd>E+A</kbd></span></li>
                </ul>
              </div>

              <div class="ctrl-side-box is-defense">
                <div class="ctrl-side-title">
                  <span class="pill pill-crimson">🛡 수비 (DEFENSE)</span>
                  <strong>커서 전환 · 스트립 태클 · 인터셉트</strong>
                </div>
                <ul class="ctrl-kv-list">
                  <li><span>공과 가장 가까운 수비 캐릭터 즉시 변경 (<kbd>S</kbd> 동일 지원)</span><span><kbd>Q</kbd></span></li>
                  <li><span>전력 추격 · 각도 차단 달리기 (홀드)</span><span><kbd>E</kbd></span></li>
                  <li><span>다이브 태클 · 볼 스트립 · 점프 인터셉트 · 헛! 점프</span><span><kbd>D</kbd></span></li>
                  <li><span>달리며 D = 장거리 전력 다이브 태클 · 타임아웃(아이스 키커)</span><span><kbd>E+D</kbd></span></li>
                  <li><span>수비 라인맨(가오우 등 DL) 패스러셔 직행 전환</span><span><kbd>E+Q</kbd> <kbd>E+S</kbd></span></li>
                  <li><span>추천 수비 필살기(스냅 전 반전) / 수비 비기 1~4번</span><span><kbd>A</kbd> <kbd>A+←↑→↓</kbd></span></li>
                </ul>
              </div>
            </div>

            <div class="ctrl-pad-footnote">
              <span><strong>게임패드 &amp; 모바일 완벽 지원:</strong> Xbox / DualSense 패드 자동 인식 및 개별 리매핑 지원 · 모바일/태블릿에서는 가상 조이스틱 방향 유지 + <code>필살·방향</code> 버튼 탭으로 비기 1~4번을 동일하게 발동할 수 있습니다. (환경 설정에서 클래식 방향키·WASD 프리셋도 언제든 선택 가능)</span>
            </div>
          </div>
        </section>

        <section id="videos" class="page-section">
          <div class="section-header">
            <div>
              <h2 class="section-title">트레일러 · 개발 영상관</h2>
              <p class="section-desc">나레이션 없이 실제 경기, 컷인, 오리지널 사운드로 편집한 개발 영상을 바로 감상하세요.</p>
            </div>
          </div>

          <div class="theater-grid">
            <div class="theater-stage">
              <div class="theater-viewport" id="theater-viewport"></div>
              <div class="theater-caption">
                <div>
                  <div class="theater-caption-title" id="theater-title"></div>
                  <div class="theater-caption-sub" id="theater-sub"></div>
                </div>
                <div class="theater-caption-actions">
                  <span class="pill tabular" id="theater-badge"></span>
                  <a class="btn-chip btn-chip-secondary" id="theater-yt-link" href="#" target="_blank" rel="noopener" hidden>
                    <span>YouTube에서 보기</span>${ICONS.external(13)}
                  </a>
                </div>
              </div>
            </div>

            <div class="playlist-col" id="video-playlist"></div>
          </div>
        </section>

        <section id="editions" class="page-section">
          <div class="section-header">
            <div>
              <h2 class="section-title">실행 환경별 배포</h2>
              <p class="section-desc">Windows, macOS, Android 설치 파일을 페이지 이동 없이 바로 내려받거나 웹 브라우저에서 실행하세요.</p>
            </div>
            <div class="filter-pills" id="edition-filters" role="group" aria-label="플랫폼 필터">
              <button class="filter-btn is-active" data-filter="all" type="button">전체 <span class="tabular">4</span></button>
              <button class="filter-btn" data-filter="windows" type="button">Windows</button>
              <button class="filter-btn" data-filter="macos" type="button">macOS</button>
              <button class="filter-btn" data-filter="android" type="button">Android</button>
              <button class="filter-btn" data-filter="web" type="button">Web</button>
            </div>
          </div>

          <div class="editions-grid" id="editions-grid"></div>
        </section>

        <section id="preview" class="page-section">
          <div class="section-header">
            <div>
              <h2 class="section-title">인게임 스크린샷 미리보기</h2>
              <p class="section-desc">클릭하면 큰 화면으로 실게임 장면을 자세히 살펴볼 수 있습니다.</p>
            </div>
          </div>

          <div class="gallery-grid" id="preview-grid"></div>
        </section>

        <section id="downloads" class="page-section">
          <div class="section-header">
            <div>
              <h2 class="section-title">다운로드 및 버전 내역</h2>
              <p class="section-desc">원하는 플랫폼 버튼을 누르면 즉시 파일이 다운로드되며, macOS 보안 해제 가이드를 함께 제공합니다.</p>
            </div>
          </div>

          <div class="owner-stats-panel" id="owner-stats-panel" hidden></div>

          <div class="releases-list" id="releases-list"></div>

          <div class="gatekeeper-box">
            <div>
              <div class="spec-label">macOS 최초 실행 시 보안 경고 해제 명령어</div>
              <div class="gatekeeper-code">${PORTAL_META.gatekeeperCmd}</div>
            </div>
            <button class="btn-copy" id="copy-gatekeeper-btn" type="button">
              <span id="copy-icon-slot">${ICONS.copy(15)}</span>
              <span id="copy-label-slot">명령어 복사</span>
            </button>
          </div>

          <div class="faq-list" id="faq-list"></div>
        </section>

        <section id="board" class="page-section">
          <div id="feedback-board-root"></div>
        </section>

        <footer class="portal-footer">
          <span>${PORTAL_META.legalNotice}</span>
          <a href="#downloads">최신 빌드 ${PORTAL_META.latestVersion}</a>
        </footer>
      </main>
    </div>

    <div class="modal-backdrop" id="trailer-modal" hidden role="dialog" aria-modal="true" aria-labelledby="modal-trailer-title">
      <div class="modal-panel">
        <div class="modal-bar">
          <span class="modal-bar-title" id="modal-trailer-title">아이실드 21 공식 소개 영상 · 00:31</span>
          <button class="modal-close" id="close-trailer-modal" type="button" aria-label="영상 닫기">${ICONS.close(18)}</button>
        </div>
        <div class="modal-video-wrap" id="modal-video-wrap"></div>
      </div>
    </div>

    <div class="modal-backdrop" id="lightbox-modal" hidden role="dialog" aria-modal="true" aria-labelledby="lightbox-title">
      <div class="modal-panel">
        <div class="modal-bar">
          <span class="modal-bar-title" id="lightbox-title">미리보기</span>
          <button class="modal-close" id="close-lightbox-modal" type="button" aria-label="미리보기 닫기">${ICONS.close(18)}</button>
        </div>
        <div class="lightbox-stage">
          <img id="lightbox-img" src="./media/shot_cutin_d4d.jpg" alt="성야의 오의 · 데빌 4 디멘션" />
          <div class="lightbox-foot">
            <div>
              <div class="theater-caption-title" id="lightbox-cap-title"></div>
              <div class="theater-caption-sub" id="lightbox-cap-desc"></div>
            </div>
            <div class="lightbox-nav">
              <button class="lightbox-btn" id="lightbox-prev" type="button" aria-label="이전 이미지">${ICONS.arrowLeft(17)}</button>
              <button class="lightbox-btn" id="lightbox-next" type="button" aria-label="다음 이미지">${ICONS.arrowRight(17)}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  function renderTheater(): void {
    const vid = PORTAL_VIDEOS.find((v) => v.id === activeVideoId) || PORTAL_VIDEOS[0];
    const vp = document.getElementById('theater-viewport');
    const titleEl = document.getElementById('theater-title');
    const subEl = document.getElementById('theater-sub');
    const badgeEl = document.getElementById('theater-badge');
    const ytLink = document.getElementById('theater-yt-link') as HTMLAnchorElement | null;
    const listEl = document.getElementById('video-playlist');
    if (!vp || !titleEl || !subEl || !badgeEl || !listEl) return;

    vp.classList.toggle('is-vertical', vid.aspect === '9/16' && !vid.youtubeId);
    vp.innerHTML = renderVideoPlayerHtml(vid);
    titleEl.textContent = vid.title;
    subEl.textContent = vid.subtitle;
    badgeEl.textContent = `${vid.aspect} · ${vid.duration}`;
    if (ytLink) {
      if (vid.youtubeId) {
        ytLink.href = youtubeWatchUrl(vid);
        ytLink.hidden = false;
      } else {
        ytLink.hidden = true;
      }
    }

    listEl.innerHTML =
      PORTAL_VIDEOS.map(
        (item) => `
      <button class="video-item ${item.id === vid.id ? 'is-selected' : ''}" data-video-id="${item.id}" type="button">
        <div class="video-thumb-wrap">
          <img src="${item.poster}" alt="${item.title}" />
          <span class="video-dur-badge tabular">${item.duration}</span>
        </div>
        <div class="video-item-meta">
          <h3>${item.title}</h3>
          <p>${item.subtitle}</p>
        </div>
      </button>
    `,
      ).join('') +
      `
      <div class="playlist-note">
        <strong>개발 영상 업데이트:</strong> 실제 경기 플레이, 원작 필살기 컷인, 신규 빌드 프리뷰 영상이 순차적으로 추가됩니다.
      </div>
    `;

    listEl.querySelectorAll<HTMLButtonElement>('[data-video-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextId = btn.dataset.videoId;
        if (nextId && nextId !== activeVideoId) {
          activeVideoId = nextId;
          renderTheater();
        }
      });
    });
  }

  function renderEditions(): void {
    const grid = document.getElementById('editions-grid');
    if (!grid) return;
    const rows =
      activeFilter === 'all'
        ? PORTAL_EDITIONS
        : PORTAL_EDITIONS.filter((e) => e.platformKey === activeFilter);

    grid.innerHTML = rows
      .map(
        (ed) => `
      <article class="edition-card">
        <div class="edition-media">
          <img src="${ed.image}" alt="${ed.title}" />
          <div class="edition-media-scrim"></div>
          <span class="edition-media-tag">${editionIcon(ed.platformKey)}<span>${ed.platformLabel} · ${ed.version}</span></span>
        </div>
        <div class="edition-body">
          <h3>${ed.title}</h3>
          <p>${ed.summary}</p>
          <div class="edition-foot">
            <span class="edition-req">${ed.requirement} · ${ed.sizeText}</span>
            <div class="edition-actions">
              ${renderChipLink(ed.actionLabel, ed.actionHref, {
                downloadFilename: ed.downloadFilename,
                external: ed.external,
              })}
              ${
                ed.secondaryAction
                  ? renderChipLink(ed.secondaryAction.label, ed.secondaryAction.href, {
                      downloadFilename: ed.secondaryAction.downloadFilename,
                      external: ed.secondaryAction.external,
                      secondary: true,
                    })
                  : ''
              }
            </div>
          </div>
        </div>
      </article>
    `,
      )
      .join('');
  }

  function renderGallery(): void {
    const grid = document.getElementById('preview-grid');
    if (!grid) return;
    grid.innerHTML = PORTAL_PREVIEWS.map(
      (shot, idx) => `
      <button class="shot-card" type="button" data-shot-idx="${idx}">
        <div class="shot-thumb">
          <img src="${shot.image}" alt="${shot.title}" loading="lazy" />
        </div>
        <div class="shot-meta">
          <h3>${shot.title}</h3>
          <p>${shot.caption}</p>
        </div>
      </button>
    `,
    ).join('');

    grid.querySelectorAll<HTMLButtonElement>('[data-shot-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const i = Number(btn.dataset.shotIdx ?? '0');
        openLightbox(i);
      });
    });
  }

  function renderReleasesAndFaq(): void {
    const relEl = document.getElementById('releases-list');
    const faqEl = document.getElementById('faq-list');
    if (relEl && PORTAL_RELEASES.length > 0) {
      const latest = PORTAL_RELEASES[0];
      const past = PORTAL_RELEASES.slice(1);
      relEl.innerHTML = `
        <article class="release-row release-latest">
          <div class="release-head">
            <div class="release-title-group">
              <span class="release-ver tabular">${latest.version}</span>
              <span class="pill pill-crimson">최신 · 권장 다운로드</span>
              <span class="release-sub tabular">${latest.platform} · ${latest.sizeText} · ${latest.date}</span>
            </div>
            <div class="release-downloads">
              ${latest.downloads
                .map((dl) =>
                  renderChipLink(dl.label, dl.href, {
                    downloadFilename: dl.filename,
                    secondary: !dl.primary,
                  }),
                )
                .join('')}
            </div>
          </div>
          <ul class="release-notes">
            ${latest.highlights.map((h) => `<li>${h}</li>`).join('')}
          </ul>
        </article>
        ${
          past.length > 0
            ? `
          <details class="past-releases-details">
            <summary>
              <span>이전 업데이트 변경 이력 보기 (${past.length}개 버전)</span>
              ${ICONS.chevronDown(15)}
            </summary>
            <div class="past-releases-list">
              ${past
                .map(
                  (rel) => `
                <article class="past-release-row">
                  <div class="release-title-group">
                    <span class="release-ver tabular">${rel.version}</span>
                    <span class="release-sub tabular">${rel.date}</span>
                  </div>
                  <ul class="release-notes">
                    ${rel.highlights.map((h) => `<li>${h}</li>`).join('')}
                  </ul>
                </article>
              `,
                )
                .join('')}
            </div>
          </details>
        `
            : ''
        }
      `;
    }
    if (faqEl) {
      faqEl.innerHTML = PORTAL_FAQS.map(
        (fq, i) => `
        <details class="faq-item" ${i === 0 ? 'open' : ''}>
          <summary>
            <span>${fq.question}</span>
            ${ICONS.chevronDown(16)}
          </summary>
          <div class="faq-body">${fq.answer}</div>
        </details>
      `,
      ).join('');
    }
  }

  function applyTheme(next: ThemeMode): void {
    currentTheme = next;
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // ignore
    }
    const iconSlot = document.getElementById('theme-icon-slot');
    const labelSlot = document.getElementById('theme-label-slot');
    const mobTheme = document.getElementById('mobile-theme-btn');
    if (iconSlot) iconSlot.innerHTML = next === 'dark' ? ICONS.moon(16) : ICONS.sun(16);
    if (labelSlot) labelSlot.textContent = next === 'dark' ? '다크 스타디움' : '라이트 데이';
    if (mobTheme) mobTheme.innerHTML = next === 'dark' ? ICONS.sun(17) : ICONS.moon(17);
  }

  function openTrailerModal(): void {
    const modal = document.getElementById('trailer-modal');
    const wrap = document.getElementById('modal-video-wrap');
    if (!modal || !wrap) return;
    const heroVid = PORTAL_VIDEOS[0];
    if (heroVid.youtubeId) {
      wrap.innerHTML = buildYoutubeEmbedIframe(heroVid.youtubeId, heroVid.title, true);
    } else {
      wrap.innerHTML = `<video controls autoplay playsinline src="${heroVid.localSrc}" poster="${heroVid.poster}"></video>`;
    }
    modal.hidden = false;
  }

  function closeTrailerModal(): void {
    const modal = document.getElementById('trailer-modal');
    const wrap = document.getElementById('modal-video-wrap');
    if (!modal || !wrap) return;
    modal.hidden = true;
    wrap.innerHTML = '';
  }

  function openLightbox(idx: number): void {
    const modal = document.getElementById('lightbox-modal');
    const imgEl = document.getElementById('lightbox-img') as HTMLImageElement | null;
    const capTitle = document.getElementById('lightbox-cap-title');
    const capDesc = document.getElementById('lightbox-cap-desc');
    const barTitle = document.getElementById('lightbox-title');
    if (!modal || !imgEl || !capTitle || !capDesc || !barTitle) return;

    const total = PORTAL_PREVIEWS.length;
    const safeIdx = ((idx % total) + total) % total;
    activeLightboxIdx = safeIdx;
    const shot = PORTAL_PREVIEWS[safeIdx];
    imgEl.src = shot.image;
    imgEl.alt = shot.title;
    barTitle.textContent = `${safeIdx + 1} / ${total} · ${shot.title}`;
    capTitle.textContent = shot.title;
    capDesc.textContent = shot.caption;
    modal.hidden = false;
  }

  function closeLightbox(): void {
    const modal = document.getElementById('lightbox-modal');
    if (modal) modal.hidden = true;
    activeLightboxIdx = null;
  }

  // Bind controls
  document.getElementById('theme-toggle-btn')?.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
  document.getElementById('mobile-theme-btn')?.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  const sidebar = document.getElementById('portal-sidebar');
  document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
    drawerOpen = !drawerOpen;
    sidebar?.classList.toggle('is-open', drawerOpen);
  });
  document.querySelectorAll('#sidebar-nav .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      drawerOpen = false;
      sidebar?.classList.remove('is-open');
    });
  });

  document.getElementById('open-hero-trailer')?.addEventListener('click', openTrailerModal);
  document.getElementById('close-trailer-modal')?.addEventListener('click', closeTrailerModal);
  document.getElementById('trailer-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeTrailerModal();
  });

  document.getElementById('close-lightbox-modal')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  });
  document.getElementById('lightbox-prev')?.addEventListener('click', () => {
    if (activeLightboxIdx !== null) openLightbox(activeLightboxIdx - 1);
  });
  document.getElementById('lightbox-next')?.addEventListener('click', () => {
    if (activeLightboxIdx !== null) openLightbox(activeLightboxIdx + 1);
  });

  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.shiftKey && (e.key === 'D' || e.key === 'd')) {
      e.preventDefault();
      toggleOwnerStats();
      return;
    }
    if (e.key === 'Escape') {
      closeTrailerModal();
      closeLightbox();
    } else if (activeLightboxIdx !== null && e.key === 'ArrowLeft') {
      openLightbox(activeLightboxIdx - 1);
    } else if (activeLightboxIdx !== null && e.key === 'ArrowRight') {
      openLightbox(activeLightboxIdx + 1);
    }
  });

  document.querySelectorAll<HTMLButtonElement>('#edition-filters .filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const f = (btn.dataset.filter ?? 'all') as PlatformFilter;
      activeFilter = f;
      document.querySelectorAll('#edition-filters .filter-btn').forEach((b) => {
        b.classList.toggle('is-active', b === btn);
      });
      renderEditions();
    });
  });

  document.getElementById('copy-gatekeeper-btn')?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(PORTAL_META.gatekeeperCmd);
      copiedCmd = true;
      const ic = document.getElementById('copy-icon-slot');
      const lbl = document.getElementById('copy-label-slot');
      if (ic) ic.innerHTML = ICONS.check(15);
      if (lbl) lbl.textContent = '복사 완료';
      setTimeout(() => {
        if (!copiedCmd) return;
        copiedCmd = false;
        if (ic) ic.innerHTML = ICONS.copy(15);
        if (lbl) lbl.textContent = '명령어 복사';
      }, 2000);
    } catch {
      // ignore clipboard block
    }
  });

  // Scroll spy for sidebar active indicator
  const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('#sidebar-nav .nav-link')];
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((a) => a.classList.toggle('is-active', a.dataset.nav === id));
        }
      }
    },
    { rootMargin: '-22% 0px -65% 0px', threshold: 0.05 },
  );
  ['discover', 'systems', 'controls', 'videos', 'editions', 'preview', 'downloads', 'board'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  const ownerPanelEl = document.getElementById('owner-stats-panel');
  const ownerPillEl = document.getElementById('owner-total-pill');

  function hideOwnerStats(): void {
    setOwnerStatsFlag(false);
    if (ownerPanelEl) {
      ownerPanelEl.hidden = true;
      ownerPanelEl.innerHTML = '';
    }
    if (ownerPillEl) {
      ownerPillEl.hidden = true;
      ownerPillEl.textContent = '';
    }
  }

  function showOwnerStats(force = false): void {
    if (!ownerPanelEl) return;
    setOwnerStatsFlag(true);
    void renderOwnerStatsPanel(ownerPanelEl, ownerPillEl, hideOwnerStats, force);
  }

  function toggleOwnerStats(): void {
    if (isOwnerStatsEnabled()) {
      hideOwnerStats();
    } else {
      showOwnerStats(true);
    }
  }

  renderTheater();
  renderEditions();
  renderGallery();
  renderReleasesAndFaq();

  const boardRoot = document.getElementById('feedback-board-root');
  if (boardRoot) {
    mountFeedbackBoard(boardRoot, PORTAL_META.latestVersion);
  }

  if (initOwnerStatsFlag()) {
    showOwnerStats(false);
  }
}

mount();
