export interface PortalVideo {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  aspect: '16/9' | '9/16';
  tag: string;
  /** Local preview MP4 (works completely offline). */
  localSrc: string;
  /** Optional YouTube video ID (e.g. "dQw4w9WgXcQ"). When set, embeds youtube-nocookie instead of local MP4. */
  youtubeId?: string;
  poster: string;
  publishedAt: string;
}

export interface PortalActionLink {
  label: string;
  href: string;
  downloadFilename?: string;
  external?: boolean;
}

export interface PortalEdition {
  id: string;
  platformKey: 'windows' | 'macos' | 'android' | 'web';
  platformLabel: string;
  badge: string;
  title: string;
  version: string;
  sizeText: string;
  summary: string;
  image: string;
  actionLabel: string;
  actionHref: string;
  downloadFilename?: string;
  secondaryAction?: PortalActionLink;
  external: boolean;
  requirement: string;
}

export interface PortalPreviewShot {
  id: string;
  title: string;
  caption: string;
  image: string;
}

export interface PortalReleaseDownload {
  label: string;
  href: string;
  filename: string;
  primary?: boolean;
}

export interface PortalRelease {
  version: string;
  date: string;
  isLatest: boolean;
  platform: string;
  sizeText: string;
  downloads: PortalReleaseDownload[];
  highlights: string[];
}

export interface PortalFaq {
  question: string;
  answer: string;
}

export const PORTAL_META = {
  gameTitle: '아이실드 21 : 택티컬 풋볼 매니저',
  shortTitle: '아이실드 21',
  heroHeadline: '0.1초를 꺾는 광속의 필드.',
  heroDescription:
    '11 vs 11 실시간 미식축구 조작과 대원씨아이 정발판 고증 필살기 111종 컷인, FC 온라인식 6키 직관 조작, 완전판 15챕터(★45), 2,000km 데스마치 서바이벌, 42팀 871명 시즌 커리어를 한 번에 담았습니다.',
  latestVersion: 'v0.3.0',
  dmgDirectUrl:
    'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.0/Eyeshield21-TacticalManager-0.3.0-arm64.dmg',
  dmgFilename: 'Eyeshield21-TacticalManager-0.3.0-arm64.dmg',
  winSetupUrl:
    'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.0/Eyeshield21-TacticalManager-Setup-0.3.0-x64.exe',
  winSetupFilename: 'Eyeshield21-TacticalManager-Setup-0.3.0-x64.exe',
  apkDirectUrl:
    'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.0/Eyeshield21-TacticalManager-0.3.0-android.apk',
  apkFilename: 'Eyeshield21-TacticalManager-0.3.0-android.apk',
  gatekeeperCmd: 'xattr -cr "/Applications/EYESHIELD 21.app"',
  legalNotice:
    '비공식 팬메이드 프로젝트 · Eyeshield 21 © Riichiro Inagaki, Yusuke Murata / Shueisha',
};

/**
 * 유튜브 업로드 후 `youtubeId`만 입력하면(예: youtubeId: 'QGyBzfS-se0')
 * 로컬 영상 대신 유튜브 플레이어로 자동 전환됩니다.
 */
export const PORTAL_VIDEOS: PortalVideo[] = [
  {
    id: 'trailer-1080p',
    title: '공식 개발 트레일러 (16:9 풀HD)',
    subtitle: '논스톱 11 vs 11 실플레이 · 데빌 배트 고스트 · 데빌 4 디멘션 컷인 · 크리스마스 볼 터치다운',
    duration: '00:31',
    aspect: '16/9',
    tag: '대표 트레일러',
    localSrc: './media/trailer_31s_1080p.mp4',
    youtubeId: '3Z5S5-ZPR2E',
    poster: './media/poster_opening.jpg',
    publishedAt: '2026. 11. 25.',
  },
  {
    id: 'trailer-shorts',
    title: '유튜브 쇼츠 세로 프리뷰 (9:16)',
    subtitle: '모바일 쇼츠 비율에 맞춰 아이실드 21 서체 타이틀과 실시간 컷인을 압축 편집한 세로 영상',
    duration: '00:31',
    aspect: '9/16',
    tag: '쇼츠 버전',
    localSrc: './media/trailer_31s_shorts.mp4',
    youtubeId: '4JkZkwlExxA',
    poster: './media/shot_cutin_d4d.jpg',
    publishedAt: '2026. 11. 25.',
  },
  {
    id: 'shorts-01-controls',
    title: '쇼츠 01 · 실시간 11 vs 11 조작 완전 가이드',
    subtitle: 'WASD+Space 광속 돌파, [1·2·3] 타깃 패스, 포구 후 YAC 전환, 골라인 터치다운 규칙 해설',
    duration: '00:23',
    aspect: '9/16',
    tag: '조작 가이드',
    localSrc: './media/shorts_01_controls.mp4',
    youtubeId: 'M9V0SXmyxPk',
    poster: './media/poster_shorts_01.jpg',
    publishedAt: '2026. 11. 25.',
  },
  {
    id: 'shorts-02-specials',
    title: '쇼츠 02 · 원작 정발판 필살기 한글 컷인 106종',
    subtitle: '데빌 배트 고스트 · 데빌 레이저 불릿 · 트라이던트 태클 · 신속의 임펄스 · 데빌 4 디멘션 해설',
    duration: '00:25',
    aspect: '9/16',
    tag: '필살기 도감',
    localSrc: './media/shorts_02_specials.mp4',
    youtubeId: 'mzYPSBvSbwo',
    poster: './media/poster_shorts_02.jpg',
    publishedAt: '2026. 11. 25.',
  },
  {
    id: 'shorts-03-story-manager',
    title: '쇼츠 03 · 9챕터 스토리 & 42팀 871명 감독 커리어',
    subtitle: '봄 도쿄대회~유스 월드컵 9챕터, 42팀 871명 로스터, 훈련·플레이북 및 3년 다이너스티 해설',
    duration: '00:23',
    aspect: '9/16',
    tag: '스토리·감독',
    localSrc: './media/shorts_03_story_manager.mp4',
    youtubeId: '_nxQRk0fkFg',
    poster: './media/poster_shorts_03.jpg',
    publishedAt: '2026. 11. 25.',
  },
];

export const PORTAL_EDITIONS: PortalEdition[] = [
  {
    id: 'windows-exe',
    platformKey: 'windows',
    platformLabel: 'Windows EXE',
    badge: 'WINDOWS 64-BIT',
    title: 'Windows 설치형 · 포터블 (.exe)',
    version: 'v0.3.0',
    sizeText: 'Setup 130 MB · Portable 119 MB',
    summary: 'Windows PC용 NSIS 설치 파일과 무설치 포터블 실행 파일 2종을 바로 다운로드할 수 있습니다.',
    image: './media/shot_gameplay.jpg',
    actionLabel: '설치형 받기',
    actionHref:
      'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.0/Eyeshield21-TacticalManager-Setup-0.3.0-x64.exe',
    downloadFilename: 'Eyeshield21-TacticalManager-Setup-0.3.0-x64.exe',
    secondaryAction: {
      label: '포터블 받기',
      href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.0/Eyeshield21-TacticalManager-Portable-0.3.0-x64.exe',
      downloadFilename: 'Eyeshield21-TacticalManager-Portable-0.3.0-x64.exe',
    },
    external: false,
    requirement: 'Windows 10 / 11 (x64)',
  },
  {
    id: 'macos-dmg',
    platformKey: 'macos',
    platformLabel: 'macOS DMG',
    badge: 'MACOS APPLE SILICON',
    title: 'macOS 설치용 앱 (DMG)',
    version: 'v0.3.0',
    sizeText: '130 MB',
    summary: '오프라인 폰트와 BGM, 111종 필살기 컷인이 모두 내장된 macOS(M1~M4) 전용 단독 설치 패키지입니다.',
    image: './media/shot_cutin_d4d.jpg',
    actionLabel: 'DMG 받기',
    actionHref:
      'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.0/Eyeshield21-TacticalManager-0.3.0-arm64.dmg',
    downloadFilename: 'Eyeshield21-TacticalManager-0.3.0-arm64.dmg',
    external: false,
    requirement: 'macOS 12+ (Apple Silicon)',
  },
  {
    id: 'android-apk',
    platformKey: 'android',
    platformLabel: 'Android APK',
    badge: 'ANDROID MOBILE',
    title: 'Android 모바일 앱 (.apk)',
    version: 'v0.3.0',
    sizeText: '18 MB',
    summary: '가로 모드 고정 화면에 가상 조이스틱·필살기·패스 버튼 및 햅틱 진동이 활성되는 서명 APK입니다.',
    image: './media/shot_cutin_ghost.jpg',
    actionLabel: 'APK 받기',
    actionHref:
      'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.0/Eyeshield21-TacticalManager-0.3.0-android.apk',
    downloadFilename: 'Eyeshield21-TacticalManager-0.3.0-android.apk',
    external: false,
    requirement: 'Android 7.0+ (서명 APK)',
  },
  {
    id: 'web-build',
    platformKey: 'web',
    platformLabel: 'Web 브라우저',
    badge: 'WEB PREVIEW',
    title: '웹 브라우저 실시간 플레이',
    version: 'v0.3.0',
    sizeText: '즉시 실행',
    summary: '설치 과정 없이 모바일 세로/가로·태블릿·PC 브라우저 어디서나 FC 온라인식 6키 조작과 3단계 타격감 연출을 즉시 플레이할 수 있습니다.',
    image: './media/shot_td.jpg',
    actionLabel: '웹으로 실행',
    actionHref: './play/',
    external: true,
    requirement: 'Chrome · Safari · Edge · 모바일 지원',
  },
];

export const PORTAL_PREVIEWS: PortalPreviewShot[] = [
  {
    id: 'cutin-d4d',
    title: '성야의 오의 · 데빌 4 디멘션',
    caption: '원작 정발판 표기 그대로 구현된 세나의 백스텝 가속 오의와 도트+원작 컷인 연출',
    image: './media/shot_cutin_d4d.jpg',
  },
  {
    id: 'cutin-ghost',
    title: '광속 돌파 · 데빌 배트 고스트',
    caption: '0.1초 타이밍을 가르는 잔상 돌파와 111종 원작 필살기 한글 컷인 시스템',
    image: './media/shot_cutin_ghost.jpg',
  },
  {
    id: 'gameplay-11v11',
    title: '11 vs 11 실시간 전술 필드',
    caption: 'FC 온라인식 6키(↑↓←→ + Q·W·E·A·S·D) 직관 조작과 방향키 지향 원버튼 패스, HD-2D 고시인성 카메라의 즉각적인 손맛',
    image: './media/shot_gameplay.jpg',
  },
  {
    id: 'snowy-td',
    title: '크리스마스 볼 · 기적의 터치다운',
    caption: '눈 내리는 경기장 위에서 터지는 역전 러싱과 60야드 매그넘 킥 연출',
    image: './media/shot_td.jpg',
  },
  {
    id: 'canon-story',
    title: '원작 고증 스토리 15챕터 (★45)',
    caption: '코이가하마·조쿠토·태양·아미노·쿄신·반도·와세다 EX까지 정발 고증 15챕터와 챕터별 ★3 챌린지 수록',
    image: './media/hero_story_pixel.png',
  },
  {
    id: 'key-visual',
    title: '데이몬 데빌 배츠 키비주얼',
    caption: '원작 감성을 픽셀 스타일로 다듬은 메인 타이틀 화면과 팀 로스터 포털',
    image: './media/shot_start.jpg',
  },
];

export const PORTAL_RELEASES: PortalRelease[] = [
  {
    version: 'v0.3.0',
    date: '2026. 11. 25.',
    isLatest: true,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: 'EXE 130 MB / DMG 131 MB / APK 18 MB',
    downloads: [
      {
        label: 'macOS DMG',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.0/Eyeshield21-TacticalManager-0.3.0-arm64.dmg',
        filename: 'Eyeshield21-TacticalManager-0.3.0-arm64.dmg',
        primary: true,
      },
      {
        label: 'Win 설치형',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.0/Eyeshield21-TacticalManager-Setup-0.3.0-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Setup-0.3.0-x64.exe',
      },
      {
        label: 'Win 포터블',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.0/Eyeshield21-TacticalManager-Portable-0.3.0-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Portable-0.3.0-x64.exe',
      },
      {
        label: 'Android APK',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.0/Eyeshield21-TacticalManager-0.3.0-android.apk',
        filename: 'Eyeshield21-TacticalManager-0.3.0-android.apk',
      },
    ],
    highlights: [
      '3단계 히트스톱(Hit-stop) · 트라우마 카메라 셰이크 · 게임패드 듀얼 럼블 & 모바일 진동 도입: 강태클·색·펌블·인터셉트·격돌 승리 순간 45~85ms 정지 타격감과 만화 임팩트 링, 입력 버퍼링, 흔들림/진동 설정 추가',
      '전수 코드 감사 P1 11건 · P2 28건 완결 수정: 2점 컨버전 실패 즉시 종료, 세이프티 프리킥·미스 FG 스팟·하프타임 타임아웃 리셋, 패드/터치 입력 디바이스 분리로 6키 패스 간섭 완전 제거, 패드 리매핑 시 키보드 6키 유지',
      '패스 리스크 & 스탯 정밀화: 압박 롤아웃 딥볼·더블 커버리지 인터셉트 확률 및 유저 수비수 공중 경합 개방, 패스 캐치 후 전진 야드(YAC) 패서·리시버 동시 반영 및 리턴/턴오버 TD 분리 집계',
      '필살기 맥락 가용성 HUD & 세이브 보호: 킥전용/패스전용/공중볼 필살기 맥락 표시·오발동 차단, 전 화면 키 안내 20곳 동적 통일, 쿠키 차단 브라우저 안전 실행 및 데스마치·다이너스티 중도이탈 패배 처리',
    ],
  },
  {
    version: 'v0.2.3',
    date: '2026. 11. 25.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: '이전 업데이트',
    downloads: [],
    highlights: [
      'FC 온라인식 6키(↑↓←→ + Q·W·E·A·S·D) 기본 조작 도입: 숫자키 없이 방향키로 지향하는 원버튼 패스(S 짧은/총알 · W 로빙), D 태클/불러시/파워드라이브/다이브, E 질주, A 추천 필살기, Q+방향키 비기 슬롯 1~4번 & Q+S/W/D/E 심화 전술 조합 지원',
      '대원씨아이 정발판 전수 고증 감수 반영 & 필살기 111종 확장: 정발 팀명(태양 스핑크스 등)·선수명·대사·반도전 스코어(24-23)·무사시 복귀 시점 교정 및 18개 팀 공식 마스코트 한글명·만화 컷 격돌 연출(영문 스크림 말풍선·테이코쿠 황금+화이트 리터칭) 적용',
      '콘고 아곤 0.11초 신속의 임펄스 초반응 시스템 및 상대 저급 필살기 실시간 카피(모방 발동) AI·컷인 구현',
      'HD-2D 인게임 시인성 전면 개편: 비조작 선수 디밍 대비 강화, 내 조작 선수 1P 골드 비콘·진행 화살표, 볼캐리어 BALL 배지, 패스 타겟 지향선 하이라이트 및 비공식 팬게임 권리 고지 스플래시 추가',
    ],
  },
  {
    version: 'v0.2.2',
    date: '2026. 11. 25.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: '이전 업데이트',
    downloads: [],
    highlights: [
      '기본 조작 체계를 방향키(↑↓←→) 이동 + 알파벳(Z/X/C/V/Q 등) 스킬·전술 전용 키로 개편',
      '환경 설정 → [조작 키 · 게임패드 설정]에서 프리셋(방향키 기본 · 방향키+ASDF · WASD) 및 키보드 개별 키 자유 리매핑(충돌 자동 스왑·자동 저장) 추가',
      'Xbox/DualSense 게임패드 버튼·어깨버튼 조합(LB+A/B/X/Y)·L-스틱/십자키 이동 방식 및 감도(데드존) 커스터마이징 지원',
    ],
  },
  {
    version: 'v0.2.1',
    date: '2026. 11. 25.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: '이전 업데이트',
    downloads: [],
    highlights: [
      '전 플랫폼 화면 비율·반응형 전면 개선: 모바일 세로 전용 하단 터치 컨트롤 덱, Android APK/모바일 가로(390~430px 높이) 2열 타이틀·풀스크린 매치 최적화',
      '코인토스·작전선택·일시정지·경기종료 팝업 및 스코어보드/하단 스킬바 모바일 잘림·줄바꿈 오류 완전 해결',
      'Windows/macOS 데스크톱 앱 화면 해상도 자동 맞춤(workAreaSize 기준) 및 홈페이지 최신 버전 단일 다운로드 정리',
    ],
  },
  {
    version: 'v0.2.0',
    date: '2026. 11. 25.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: '이전 업데이트',
    downloads: [],
    highlights: [
      '스토리 캠페인 완전판 15챕터 확장(조쿠토·타이요·아미노·쿄신·반도·와세다 EX 추가) & 챕터별 ★3 마스터리(총 ★45)',
      '클러치 명승부 시나리오 12종(S/A/B 랭크 평가) + 매일 시드가 바뀌는 일일 전술 챌린지 & 연속 출석 스트릭',
      '엔드게임 로그라이크 [2,000km 데스마치 서바이벌]: 42팀 연전, 매 5스테이지 보스, 컨디션 이월 & 3택1 보급 특전 8종',
      '106종 필살기 수집 도감(경기 발동 시 자동 등록) + 전체 업적 30종 + 감독 커리어 심화(1:1 비기 전수 멘토링·인박스 이벤트 15종 추가·영구결번 명예의 전당·유스 월드컵 올스타 초청전)',
    ],
  },
  {
    version: 'v0.1.5',
    date: '2026. 11. 25.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: '이전 업데이트',
    downloads: [],
    highlights: [
      'Windows/macOS/Android/Web 전 빌드 내장 실시간 업데이트 확인(UpdateChecker): 타이틀 진입 시 자동 확인 + [업데이트 확인] 메뉴 1클릭 수동 확인',
      '새 버전 출시 시 상단 알림 배너와 OS별 맞춤 설치 파일(DMG/EXE/APK) 직접 다운로드 연결 지원',
      'macOS/Windows 앱 상단 메뉴바(도움말 → 업데이트 확인...) 네이티브 업데이트 체크 다이얼로그 추가',
    ],
  },
  {
    version: 'v0.1.4',
    date: '2026. 11. 25.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: '이전 업데이트',
    downloads: [],
    highlights: [
      '리턴 플레이(킥오프·온사이드·펀트·인터셉트·펌블) 1st & 10 보장, 엔드존 인터셉트 터치백, Q1/Q3 0초 득점 후 킥오프 등 미식축구 룰 6건 정교화',
      '커버 3·커버 4·존 블리츠 존 뎁스 보정, 포켓 패스러시 3.2초 점진 붕괴, 플리 플리커·크라이스트 크로스·플레이액션 AI 동작 개선',
      '감독 모드(COACH_SIM) 키보드 Z/X/C/V·Q 필살기 활성화 및 킥오프 버튼 2-탭/홀드 차징 조작감 개선',
    ],
  },
  {
    version: 'v0.1.3',
    date: '2026. 11. 25.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: '이전 업데이트',
    downloads: [],
    highlights: [
      '원작 아이실드 21·NFL 실전 공격·트릭 전술 9종(플리 플리커·훅 앤 래더·데빌 드래곤플라이·크라이스트 크로스·헤일 데빌 메리 등)과 수비 전술 6종(커버 3·커버 4·존 블리츠·오죠 더블 A·에이스 스파이·범프 앤 런) 추가',
      '프리-스냅 제트 모션(M 키 / 화면 버튼)으로 스냅 전 수비 맨투맨·존 판독 지원',
      '작전판 카테고리 필터 탭(전체/런/패스/트릭·특수, 수비 탭) UI 개편',
    ],
  },
  {
    version: 'v0.1.2',
    date: '2026. 11. 25.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: '이전 업데이트',
    downloads: [],
    highlights: [
      '실제 4.2초 대시 감각에 맞춰 기본 이동·패스 전개 속도를 전반적으로 하향 및 밸런스 재조정 (0.78x)',
      '필살기 카테고리별 고유 동작·VFX 분리 (데빌 4 디멘션 백스텝 후 전방 컷백, 패스·에어리얼·라인맨·차지·블리츠 구분)',
      '아군·상대 AI 모두 상황 판단에 따라 컨텍스트 필살기를 능동 발동하고 웹 포털 내 즉시 플레이(./play/) 지원',
    ],
  },
  {
    version: 'v0.1.1',
    date: '2026. 11. 25.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: 'EXE 130 MB / APK 18 MB',
    downloads: [],
    highlights: [
      '대원씨아이 정발판 기준 필살기 명칭 교정 (데빌 4 디멘션, 제왕의 차지, 무중력 런, 스파이더 포이즌)',
      'KBO 다이아고딕 Bold & Paperlogy Bold 오프라인 폰트 내장 및 이탤릭 컷인 타이틀 업그레이드',
      'Windows x64(Setup/Portable .exe) 및 Android 가로 모드 터치(.apk) 멀티 플랫폼 패키징 추가',
    ],
  },
  {
    version: 'v0.1.0',
    date: '2026. 11. 24.',
    isLatest: false,
    platform: 'macOS ARM64 DMG',
    sizeText: '130 MB',
    downloads: [],
    highlights: [
      'Electron 45 + 커스텀 es21:// 프로토콜 기반 첫 macOS 설치용 DMG 패키지 출시',
      '세나 #21 도트 리터칭 앱 아이콘, 오리지널 BGM·효과음, 원작 스토리 9챕터 수록',
    ],
  },
];

export const PORTAL_FAQS: PortalFaq[] = [
  {
    question: 'macOS에서 "손상된 앱" 또는 확인되지 않은 개발자 경고가 뜰 때',
    answer:
      '개인 빌드(Ad-hoc 서명)로 배포되어 Apple 공증 전에는 보안 경고가 뜰 수 있습니다. Applications 폴더로 옮긴 뒤 터미널에서 아래 명령어를 한 번 실행하면 바로 열립니다.',
  },
  {
    question: '기본 경기 조작키가 궁금해요',
    answer:
      '기본 프리셋은 FC 온라인식 6키(오른손 ↑↓←→ 이동·패스 방향 지향 + 왼손 Q·W·E·A·S·D)입니다. E는 전력 질주(홀드)·타겟 순환(탭), S는 스냅·방향키 지향 짧은/총알 패스·수비 커서 전환, W는 로빙 패스·볼 보호·제트 모션, D는 다이브 태클·라인맨 불러시/파워드라이브·다이브 돌파, A는 상황 추천 필살기·플레이 좌우 반전이며, Q+방향키(←↑→↓)로 비기 슬롯 1~4번, Q+S/W/D/E로 하드카운트·오더블·타임아웃(패스버리기)·라인맨 전환이 나갑니다. 환경 설정 → 조작 키 · 게임패드 설정에서 클래식 프리셋(방향키+ZXCV · 방향키+ASDF · WASD), 개별 키 및 Xbox/DualSense 패드도 자유롭게 바꿀 수 있습니다.',
  },
  {
    question: 'Windows SmartScreen 또는 Android 앱 설치 경고가 뜰 때',
    answer:
      '개인 개발자 서명 빌드이므로 Windows에서는 "추가 정보 → 실행", Android에서는 설정에서 "출처를 알 수 없는 앱 설치 허용"을 켜면 정상적으로 설치 및 실행됩니다.',
  },
];
