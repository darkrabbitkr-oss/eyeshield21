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
    '11 vs 11 실시간 미식축구 조작과 원작 정발판 필살기 106종 컷인, 9챕터 스토리, 42팀 871명 감독 커리어를 한 번에 담았습니다.',
  latestVersion: 'v0.1.5',
  dmgDirectUrl:
    'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.5/Eyeshield21-TacticalManager-0.1.5-arm64.dmg',
  dmgFilename: 'Eyeshield21-TacticalManager-0.1.5-arm64.dmg',
  winSetupUrl:
    'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.5/Eyeshield21-TacticalManager-Setup-0.1.5-x64.exe',
  winSetupFilename: 'Eyeshield21-TacticalManager-Setup-0.1.5-x64.exe',
  apkDirectUrl:
    'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.5/Eyeshield21-TacticalManager-0.1.5-android.apk',
  apkFilename: 'Eyeshield21-TacticalManager-0.1.5-android.apk',
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
    version: 'v0.1.5',
    sizeText: 'Setup 130 MB · Portable 119 MB',
    summary: 'Windows PC용 NSIS 설치 파일과 무설치 포터블 실행 파일 2종을 바로 다운로드할 수 있습니다.',
    image: './media/shot_gameplay.jpg',
    actionLabel: '설치형 받기',
    actionHref:
      'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.5/Eyeshield21-TacticalManager-Setup-0.1.5-x64.exe',
    downloadFilename: 'Eyeshield21-TacticalManager-Setup-0.1.5-x64.exe',
    secondaryAction: {
      label: '포터블 받기',
      href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.5/Eyeshield21-TacticalManager-Portable-0.1.5-x64.exe',
      downloadFilename: 'Eyeshield21-TacticalManager-Portable-0.1.5-x64.exe',
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
    version: 'v0.1.5',
    sizeText: '130 MB',
    summary: '오프라인 폰트와 BGM, 106종 컷인이 모두 내장된 macOS(M1~M4) 전용 단독 설치 패키지입니다.',
    image: './media/shot_cutin_d4d.jpg',
    actionLabel: 'DMG 받기',
    actionHref:
      'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.5/Eyeshield21-TacticalManager-0.1.5-arm64.dmg',
    downloadFilename: 'Eyeshield21-TacticalManager-0.1.5-arm64.dmg',
    external: false,
    requirement: 'macOS 12+ (Apple Silicon)',
  },
  {
    id: 'android-apk',
    platformKey: 'android',
    platformLabel: 'Android APK',
    badge: 'ANDROID MOBILE',
    title: 'Android 모바일 앱 (.apk)',
    version: 'v0.1.5',
    sizeText: '18 MB',
    summary: '가로 모드 고정 화면에 가상 조이스틱·필살기·패스 버튼이 자동 활성되는 서명 APK입니다.',
    image: './media/shot_cutin_ghost.jpg',
    actionLabel: 'APK 받기',
    actionHref:
      'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.5/Eyeshield21-TacticalManager-0.1.5-android.apk',
    downloadFilename: 'Eyeshield21-TacticalManager-0.1.5-android.apk',
    external: false,
    requirement: 'Android 7.0+ (서명 APK)',
  },
  {
    id: 'web-build',
    platformKey: 'web',
    platformLabel: 'Web 브라우저',
    badge: 'WEB PREVIEW',
    title: '웹 브라우저 실시간 플레이',
    version: 'v0.1.5',
    sizeText: '즉시 실행',
    summary: '설치 과정 없이 웹 브라우저에서 바로 11 vs 11 매치와 감독 모드를 플레이할 수 있습니다.',
    image: './media/shot_td.jpg',
    actionLabel: '웹으로 실행',
    actionHref: './play/',
    external: true,
    requirement: 'Chrome · Safari · Edge',
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
    caption: '0.1초 타이밍을 가르는 잔상 돌파와 106종 원작 필살기 한글 컷인 시스템',
    image: './media/shot_cutin_ghost.jpg',
  },
  {
    id: 'gameplay-11v11',
    title: '11 vs 11 실시간 전술 필드',
    caption: 'WASD 직접 조작과 패스 버튼 [1/2/3], Z/X/C/V 필살기 슬롯의 즉각적인 손맛',
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
    title: '원작 고증 스토리 9챕터',
    caption: '봄 도쿄대회 코이가하마전부터 오죠·세이부·신류지·하쿠슈·테이코쿠까지 원작 9챕터 수록',
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
    version: 'v0.1.5',
    date: '2026. 11. 25.',
    isLatest: true,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: 'EXE 130 MB / DMG 130 MB / APK 18 MB',
    downloads: [
      {
        label: 'macOS DMG',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.5/Eyeshield21-TacticalManager-0.1.5-arm64.dmg',
        filename: 'Eyeshield21-TacticalManager-0.1.5-arm64.dmg',
        primary: true,
      },
      {
        label: 'Win 설치형',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.5/Eyeshield21-TacticalManager-Setup-0.1.5-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Setup-0.1.5-x64.exe',
      },
      {
        label: 'Win 포터블',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.5/Eyeshield21-TacticalManager-Portable-0.1.5-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Portable-0.1.5-x64.exe',
      },
      {
        label: 'Android APK',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.5/Eyeshield21-TacticalManager-0.1.5-android.apk',
        filename: 'Eyeshield21-TacticalManager-0.1.5-android.apk',
      },
    ],
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
    sizeText: 'EXE 130 MB / DMG 130 MB / APK 18 MB',
    downloads: [
      {
        label: 'macOS DMG',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.4/Eyeshield21-TacticalManager-0.1.4-arm64.dmg',
        filename: 'Eyeshield21-TacticalManager-0.1.4-arm64.dmg',
        primary: true,
      },
      {
        label: 'Win 설치형',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.4/Eyeshield21-TacticalManager-Setup-0.1.4-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Setup-0.1.4-x64.exe',
      },
      {
        label: 'Win 포터블',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.4/Eyeshield21-TacticalManager-Portable-0.1.4-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Portable-0.1.4-x64.exe',
      },
      {
        label: 'Android APK',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.4/Eyeshield21-TacticalManager-0.1.4-android.apk',
        filename: 'Eyeshield21-TacticalManager-0.1.4-android.apk',
      },
    ],
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
    sizeText: 'EXE 130 MB / DMG 130 MB / APK 18 MB',
    downloads: [
      {
        label: 'macOS DMG',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.3/Eyeshield21-TacticalManager-0.1.3-arm64.dmg',
        filename: 'Eyeshield21-TacticalManager-0.1.3-arm64.dmg',
        primary: true,
      },
      {
        label: 'Win 설치형',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.3/Eyeshield21-TacticalManager-Setup-0.1.3-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Setup-0.1.3-x64.exe',
      },
      {
        label: 'Win 포터블',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.3/Eyeshield21-TacticalManager-Portable-0.1.3-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Portable-0.1.3-x64.exe',
      },
      {
        label: 'Android APK',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.3/Eyeshield21-TacticalManager-0.1.3-android.apk',
        filename: 'Eyeshield21-TacticalManager-0.1.3-android.apk',
      },
    ],
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
    sizeText: 'EXE 130 MB / DMG 130 MB / APK 18 MB',
    downloads: [
      {
        label: 'macOS DMG',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.2/Eyeshield21-TacticalManager-0.1.2-arm64.dmg',
        filename: 'Eyeshield21-TacticalManager-0.1.2-arm64.dmg',
        primary: true,
      },
      {
        label: 'Win 설치형',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.2/Eyeshield21-TacticalManager-Setup-0.1.2-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Setup-0.1.2-x64.exe',
      },
      {
        label: 'Win 포터블',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.2/Eyeshield21-TacticalManager-Portable-0.1.2-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Portable-0.1.2-x64.exe',
      },
      {
        label: 'Android APK',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.1.2/Eyeshield21-TacticalManager-0.1.2-android.apk',
        filename: 'Eyeshield21-TacticalManager-0.1.2-android.apk',
      },
    ],
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
      '볼 캐리어 이동은 W/A/S/D 또는 방향키, 전력 질주/다이브는 Space, 패스 타깃 지정은 숫자 1/2/3, 필살기 발동은 Z/X/C/V 슬롯(자동 발동 토글 Q, 라인맨 직접 조종 전환 L, 프리-스냅 제트 모션은 M)을 사용합니다.',
  },
  {
    question: 'Windows SmartScreen 또는 Android 앱 설치 경고가 뜰 때',
    answer:
      '개인 개발자 서명 빌드이므로 Windows에서는 "추가 정보 → 실행", Android에서는 설정에서 "출처를 알 수 없는 앱 설치 허용"을 켜면 정상적으로 설치 및 실행됩니다.',
  },
];
