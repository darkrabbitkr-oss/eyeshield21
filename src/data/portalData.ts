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
    '11 vs 11 실시간 미식축구 조작과 대원씨아이 정발판 고증 필살기 111종 컷인, 초직관 5키(Q 캐릭터변경 · A+방향키 필살기 · E 달리기조합), 완전판 15챕터(★45), 2,000km 데스마치 서바이벌, 42팀 871명 시즌 커리어를 한 번에 담았습니다.',
  latestVersion: 'v0.3.10',
  dmgDirectUrl:
    'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.10/Eyeshield21-TacticalManager-0.3.10-arm64.dmg',
  dmgFilename: 'Eyeshield21-TacticalManager-0.3.10-arm64.dmg',
  winSetupUrl:
    'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.10/Eyeshield21-TacticalManager-Setup-0.3.10-x64.exe',
  winSetupFilename: 'Eyeshield21-TacticalManager-Setup-0.3.10-x64.exe',
  apkDirectUrl:
    'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.10/Eyeshield21-TacticalManager-0.3.10-android.apk',
  apkFilename: 'Eyeshield21-TacticalManager-0.3.10-android.apk',
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
    title: '쇼츠 01 · 실시간 11 vs 11 조작 & 룰 해설',
    subtitle: '광속 돌파·패스·YAC 전환·골라인 터치다운 규칙 해설 (현행 v0.3.10: Q·E·A·S·D 직관 5키 기본 적용)',
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
    version: 'v0.3.10',
    sizeText: 'Setup 130 MB · Portable 119 MB',
    summary: 'Windows PC용 NSIS 설치 파일과 무설치 포터블 실행 파일 2종을 바로 다운로드할 수 있습니다.',
    image: './media/shot_gameplay.jpg',
    actionLabel: '설치형 받기',
    actionHref:
      'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.10/Eyeshield21-TacticalManager-Setup-0.3.10-x64.exe',
    downloadFilename: 'Eyeshield21-TacticalManager-Setup-0.3.10-x64.exe',
    secondaryAction: {
      label: '포터블 받기',
      href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.10/Eyeshield21-TacticalManager-Portable-0.3.10-x64.exe',
      downloadFilename: 'Eyeshield21-TacticalManager-Portable-0.3.10-x64.exe',
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
    version: 'v0.3.10',
    sizeText: '131 MB',
    summary: '오프라인 폰트와 BGM, 111종 필살기 컷인이 모두 내장된 macOS(M1~M4) 전용 단독 설치 패키지입니다.',
    image: './media/shot_cutin_d4d.jpg',
    actionLabel: 'DMG 받기',
    actionHref:
      'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.10/Eyeshield21-TacticalManager-0.3.10-arm64.dmg',
    downloadFilename: 'Eyeshield21-TacticalManager-0.3.10-arm64.dmg',
    external: false,
    requirement: 'macOS 12+ (Apple Silicon)',
  },
  {
    id: 'android-apk',
    platformKey: 'android',
    platformLabel: 'Android APK',
    badge: 'ANDROID MOBILE',
    title: 'Android 모바일 앱 (.apk)',
    version: 'v0.3.10',
    sizeText: '18 MB',
    summary: '가로 모드 고정 화면에 가상 조이스틱(방향+필살기 비기 지원)·패스 버튼 및 햅틱 진동이 활성되는 서명 APK입니다.',
    image: './media/shot_cutin_ghost.jpg',
    actionLabel: 'APK 받기',
    actionHref:
      'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.10/Eyeshield21-TacticalManager-0.3.10-android.apk',
    downloadFilename: 'Eyeshield21-TacticalManager-0.3.10-android.apk',
    external: false,
    requirement: 'Android 7.0+ (서명 APK)',
  },
  {
    id: 'web-build',
    platformKey: 'web',
    platformLabel: 'Web 브라우저',
    badge: 'WEB PREVIEW',
    title: '웹 브라우저 실시간 플레이',
    version: 'v0.3.10',
    sizeText: '즉시 실행',
    summary: '설치 과정 없이 모바일 세로/가로·태블릿·PC 브라우저 어디서나 초직관 5키(Q·E·A·S·D) 조작과 0.1초 광속 추격전을 즉시 플레이할 수 있습니다.',
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
    caption: '초직관 5키(Q 캐릭터변경 · A+방향키 필살기 · E 달리기조합 · S 패스 · D 돌파/태클)와 HD-2D 고시인성 카메라의 즉각적인 손맛',
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
    version: 'v0.3.10',
    date: '2026. 11. 26.',
    isLatest: true,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: 'EXE 130 MB / DMG 131 MB / APK 18 MB',
    downloads: [
      {
        label: 'macOS DMG',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.10/Eyeshield21-TacticalManager-0.3.10-arm64.dmg',
        filename: 'Eyeshield21-TacticalManager-0.3.10-arm64.dmg',
        primary: true,
      },
      {
        label: 'Win 설치형',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.10/Eyeshield21-TacticalManager-Setup-0.3.10-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Setup-0.3.10-x64.exe',
      },
      {
        label: 'Win 포터블',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.10/Eyeshield21-TacticalManager-Portable-0.3.10-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Portable-0.3.10-x64.exe',
      },
      {
        label: 'Android APK',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.10/Eyeshield21-TacticalManager-0.3.10-android.apk',
        filename: 'Eyeshield21-TacticalManager-0.3.10-android.apk',
      },
    ],
    highlights: [
      '코이가하마전 3인방(히루마·쿠리타·세나) 고증 튜토리얼 & 동적 로스터 전술 설명 적용: 창단 첫 경기 튜토리얼 대사를 정규 3인+운동부 용병 체제에 맞춰 전면 재작성("빌어먹을 리시버만 있었더라면..." 등)하고, 미영입 동료(몬타·불량 삼돌이·유키미츠·타키·무사시) 전용 작전·포메이션 비기·작전 설명·벤치 코멘트가 실제 합류 챕터에 맞춰 동적으로 해금·표기되도록 개편',
    ],
  },
  {
    version: 'v0.3.9',
    date: '2026. 11. 26.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: 'EXE 130 MB / DMG 131 MB / APK 18 MB',
    downloads: [
      {
        label: 'macOS DMG',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.9/Eyeshield21-TacticalManager-0.3.9-arm64.dmg',
        filename: 'Eyeshield21-TacticalManager-0.3.9-arm64.dmg',
        primary: true,
      },
      {
        label: 'Win 설치형',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.9/Eyeshield21-TacticalManager-Setup-0.3.9-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Setup-0.3.9-x64.exe',
      },
      {
        label: 'Win 포터블',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.9/Eyeshield21-TacticalManager-Portable-0.3.9-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Portable-0.3.9-x64.exe',
      },
      {
        label: 'Android APK',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.9/Eyeshield21-TacticalManager-0.3.9-android.apk',
        filename: 'Eyeshield21-TacticalManager-0.3.9-android.apk',
      },
    ],
    highlights: [
      '공식 홈페이지 조작 가이드 신설 & 인게임 전체 UI·튜토리얼 전면 통일: 포털 홈페이지 내 비주얼 5키 키캡 가이드 섹션 추가, 히루마 6단계 실전 튜토리얼·연습 드릴 6종·일시정지 메뉴·프리스냅 캐릭터변경 버튼·리시버 주행/패스요청(S)·모바일 조이스틱 방향+필살기 비기 발동까지 초직관 5키 기준으로 100% 일원화',
    ],
  },
  {
    version: 'v0.3.8',
    date: '2026. 11. 26.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: 'EXE 130 MB / DMG 131 MB / APK 18 MB',
    downloads: [
      {
        label: 'macOS DMG',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.8/Eyeshield21-TacticalManager-0.3.8-arm64.dmg',
        filename: 'Eyeshield21-TacticalManager-0.3.8-arm64.dmg',
        primary: true,
      },
      {
        label: 'Win 설치형',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.8/Eyeshield21-TacticalManager-Setup-0.3.8-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Setup-0.3.8-x64.exe',
      },
      {
        label: 'Win 포터블',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.8/Eyeshield21-TacticalManager-Portable-0.3.8-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Portable-0.3.8-x64.exe',
      },
      {
        label: 'Android APK',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.8/Eyeshield21-TacticalManager-0.3.8-android.apk',
        filename: 'Eyeshield21-TacticalManager-0.3.8-android.apk',
      },
    ],
    highlights: [
      'A+방향키 멀티 필살기 & E(달리기) 조합키 개편: 암기 조합을 전면 폐기하고 [Q] 1버튼 즉시 캐릭터/타겟 변경(스냅 전 QB→세나→몬타→쿠리타 순환 및 리시버 콜포패스 포함), [A] 추천 필살기 + [A+←↑→↓] 비기 1~4번 방향키 발동, [E] 달리기 홀드 중 [E+S/D/Q/A]로 로빙·볼보호·전력태클·라인맨전환·오더블이 자연스럽게 변형 발동되는 초직관 5키 조작계 적용',
    ],
  },
  {
    version: 'v0.3.7',
    date: '2026. 11. 25.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: 'EXE 130 MB / DMG 131 MB / APK 18 MB',
    downloads: [
      {
        label: 'macOS DMG',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.7/Eyeshield21-TacticalManager-0.3.7-arm64.dmg',
        filename: 'Eyeshield21-TacticalManager-0.3.7-arm64.dmg',
        primary: true,
      },
      {
        label: 'Win 설치형',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.7/Eyeshield21-TacticalManager-Setup-0.3.7-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Setup-0.3.7-x64.exe',
      },
      {
        label: 'Win 포터블',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.7/Eyeshield21-TacticalManager-Portable-0.3.7-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Portable-0.3.7-x64.exe',
      },
      {
        label: 'Android APK',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.7/Eyeshield21-TacticalManager-0.3.7-android.apk',
        filename: 'Eyeshield21-TacticalManager-0.3.7-android.apk',
      },
    ],
    highlights: [
      '공수 통합 전환키 [Q] 및 기본키 대칭 통일: 실제 FC 온라인 표준에 맞춰 이동(↑↓←→) · 전력질주(E) · 통합 전환(Q 단독 탭: 공격 타겟/캐리어 전환 ↔ 수비 커서 전환) · 라인맨 전환(Q+E: 공격 OL ↔ 수비 DL) · 피지컬 액션(D: 다이브/격파 ↔ 태클/점프인터셉트) · 필살기/반전(A)을 공수 100% 동일한 손맛으로 통일',
    ],
  },
  {
    version: 'v0.3.6',
    date: '2026. 11. 25.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: 'EXE 130 MB / DMG 131 MB / APK 18 MB',
    downloads: [
      {
        label: 'macOS DMG',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.6/Eyeshield21-TacticalManager-0.3.6-arm64.dmg',
        filename: 'Eyeshield21-TacticalManager-0.3.6-arm64.dmg',
        primary: true,
      },
      {
        label: 'Win 설치형',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.6/Eyeshield21-TacticalManager-Setup-0.3.6-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Setup-0.3.6-x64.exe',
      },
      {
        label: 'Win 포터블',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.6/Eyeshield21-TacticalManager-Portable-0.3.6-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Portable-0.3.6-x64.exe',
      },
      {
        label: 'Android APK',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.6/Eyeshield21-TacticalManager-0.3.6-android.apk',
        filename: 'Eyeshield21-TacticalManager-0.3.6-android.apk',
      },
    ],
    highlights: [
      '공격(⚡ OFFENSE) vs 수비(🛡 DEFENSE) 상황별 키 안내 전면 분리: 하단 실시간 키캡 바(작전선택 · 프리스냅 · QB패스 · 러너돌파 · 공중볼포구 · OL블로킹 vs 수비포메이션 · 수비프리스냅 · 태클/커버 · 공중볼경합 · DL패스러시), 우측 조작 가이드 서랍(현재 공격/수비 하이라이트), 모바일/터치 버튼 라벨까지 공격·수비 완전 분리',
    ],
  },
  {
    version: 'v0.3.5',
    date: '2026. 11. 25.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: 'EXE 130 MB / DMG 131 MB / APK 18 MB',
    downloads: [
      {
        label: 'macOS DMG',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.5/Eyeshield21-TacticalManager-0.3.5-arm64.dmg',
        filename: 'Eyeshield21-TacticalManager-0.3.5-arm64.dmg',
        primary: true,
      },
      {
        label: 'Win 설치형',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.5/Eyeshield21-TacticalManager-Setup-0.3.5-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Setup-0.3.5-x64.exe',
      },
      {
        label: 'Win 포터블',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.5/Eyeshield21-TacticalManager-Portable-0.3.5-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Portable-0.3.5-x64.exe',
      },
      {
        label: 'Android APK',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.5/Eyeshield21-TacticalManager-0.3.5-android.apk',
        filename: 'Eyeshield21-TacticalManager-0.3.5-android.apk',
      },
    ],
    highlights: [
      '전 포지션 체력 비례 능력치 하락(OL/DL 블로킹·앵커·클래시, QB 패스 정확도·구속·와인드업, WR/DB 캐치·공중 점프 타점, LB/DB 태클 파워·리치, RB 트럭킹·볼 키핑, K 필드골) 일괄 적용 및 데이몬 정신력(Spirit 91~99) 승부처 저항 연동',
      '11v11 포메이션 폭 & 수비 추격 레인 확장으로 뭉침 현상 해소: 520px 경기장 전체 폭을 활용하도록 OL 간격(48px+ A/B/C 갭)·외곽 WR/CB 간격·백필드 깊이를 넓히고, 수비 추격 스웜 분담(1인 정면 태클 + 컨테인/앨리/딥 엄브렐라 분산) 및 와이드 중계 카메라 뷰 적용',
    ],
  },
  {
    version: 'v0.3.4',
    date: '2026. 11. 25.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: 'EXE 130 MB / DMG 131 MB / APK 18 MB',
    downloads: [
      {
        label: 'macOS DMG',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.4/Eyeshield21-TacticalManager-0.3.4-arm64.dmg',
        filename: 'Eyeshield21-TacticalManager-0.3.4-arm64.dmg',
        primary: true,
      },
      {
        label: 'Win 설치형',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.4/Eyeshield21-TacticalManager-Setup-0.3.4-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Setup-0.3.4-x64.exe',
      },
      {
        label: 'Win 포터블',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.4/Eyeshield21-TacticalManager-Portable-0.3.4-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Portable-0.3.4-x64.exe',
      },
      {
        label: 'Android APK',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.4/Eyeshield21-TacticalManager-0.3.4-android.apk',
        filename: 'Eyeshield21-TacticalManager-0.3.4-android.apk',
      },
    ],
    highlights: [
      '실전 컷백 딜레이(각도 비례 브레이크) & 무감속 데빌 배트 고스트 고증: 고속 주행 중 65° 이상 급격히 방향을 꺾으면 풋플랜트 감속·컷백 딜레이가 걸리지만, [데빌 배트 고스트 / 제왕의 차지] 발동 중에는 감속 0% 광속 컷백으로 수비수의 발목을 꺾음',
      '러너 체력 고증 곡선 & 연속 캐리 피로: 신(98)·야마토(96)의 철인 체력 대비 세나(84)·아곤(85)의 단거리 소모율 및 연속 볼 캐리 피로를 반영해 런·패스 배분 전술 강화',
      '데이몬 데스마치 정신력(악마의 투혼 Spirit 91~99) 승부처 한계 돌파: 4쿼터·열세·4th Down·레드존 승부처에서 데이몬 전원이 체력 저하 페널티를 최대 78% 무시하고 발이 되살아나는 원작 투혼 보정 적용(반면 연습 안 하는 천재 아곤은 4Q 피로 증폭)',
    ],
  },
  {
    version: 'v0.3.3',
    date: '2026. 11. 25.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: 'EXE 130 MB / DMG 131 MB / APK 18 MB',
    downloads: [
      {
        label: 'macOS DMG',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.3/Eyeshield21-TacticalManager-0.3.3-arm64.dmg',
        filename: 'Eyeshield21-TacticalManager-0.3.3-arm64.dmg',
        primary: true,
      },
      {
        label: 'Win 설치형',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.3/Eyeshield21-TacticalManager-Setup-0.3.3-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Setup-0.3.3-x64.exe',
      },
      {
        label: 'Win 포터블',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.3/Eyeshield21-TacticalManager-Portable-0.3.3-x64.exe',
        filename: 'Eyeshield21-TacticalManager-Portable-0.3.3-x64.exe',
      },
      {
        label: 'Android APK',
        href: 'https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.3/Eyeshield21-TacticalManager-0.3.3-android.apk',
        filename: 'Eyeshield21-TacticalManager-0.3.3-android.apk',
      },
    ],
    highlights: [
      '야마토 타케루 원작 고증 보정(기본 4.40초 → 제왕의 차지 발동 시 4.20초 광속 돌파): 평상시 직선 주력은 4.4초로 4.2초 세나·신보다 0.2초 느리지만, [제왕의 차지]가 발동되면 무감속 4.2초 광속 영역으로 가속해 세나·신을 추격·격돌하도록 정밀 구현',
      '전체 최상위 주력 계단 완성: 팬서(4.1s) > 세나·신(4.2s) > 봄 신(4.37s) > 야마토(4.4s, 제왕의 차지 시 4.2s+) > 리쿠(4.5s) > 아곤(4.6s) > 카케이(4.7s) > 타카·와트(4.8s) > 잇큐(4.89s) > 몬타(5.0s)',
    ],
  },
  {
    version: 'v0.3.2',
    date: '2026. 11. 25.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: '이전 업데이트',
    downloads: [],
    highlights: [
      '원작 러너별 0.1초 속도 서열 정밀 구현: 4.10초 팬서(세계 단독 최고속 1위) 언캡 해금 → 4.20초 세나(순간 컷백 가속 1위)·신(파워 겸비)·야마토(밸런스) → 4.50초 리쿠(로데오 스텝) → 4.60초 아곤(0.11초 초동 반응) 순으로 모든 러너의 최고속·가속 개성을 차등화',
      '만화 고증 "0.1초 차이로 뒤에선 못 잡는다" 추격 물리: 전방 수비수는 대각선 각도(Pursuit Angle)로 사이드라인을 강하게 차단하되, 이미 제쳐진 후방 추격자의 인위적 고무줄 보정을 제거해 4.1초 팬서가 4.2초 세나·신을 제치면 간발의 0.1초 차이로 터치다운하는 원작 구도 재현',
      '간발의 차 돌파 연출 팝업(⚡ 0.1초 차이 돌파!!) 추가 및 오픈필드 브레이크어웨이 최고속 해방',
    ],
  },
  {
    version: 'v0.3.1',
    date: '2026. 11. 25.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: '이전 업데이트',
    downloads: [],
    highlights: [
      '인플레이 상시 백토스·횡패스(Lateral Pitch) 도입: 스크리미지 라인 돌파 후나 패스 포구 뒤에도 옆·뒤로 따라붙는 동료([S 토스] 배지)에게 언제든 공을 토스 가능 — 단, 비-QB 선수가 수비 압박 속 장거리 토스 시 불안정한 토스 및 악송구 루즈볼 펌블 위험 발생!',
      '런 속도 곡선 & 수비 오픈필드 추격 밸런스 재조정: 4.2초 광속 에이스와 4.8~5.3초 수비수 간 비현실적 속도 격차 압축, 볼캐리어 질주 피로도 현실화 및 CPU 세컨더리(CB/SS/LB) 추격 스프린트·대각선 사이드라인 차단 각도 강화',
      '동료 피치 서포트 AI 추가: 볼캐리어 돌파 시 오프볼 스킬 동료와 핸드오프 후 QB가 전방 스토크 블로킹 또는 측면 백토스 지원 대형으로 자동 추종',
    ],
  },
  {
    version: 'v0.3.0',
    date: '2026. 11. 25.',
    isLatest: false,
    platform: 'Win .exe · macOS .dmg · Android .apk · Web',
    sizeText: '이전 업데이트',
    downloads: [],
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
    question: '공격할 때와 수비할 때 조작키가 어떻게 다른가요?',
    answer:
      '왼손 5키(Q·E·A·S·D)와 방향키만으로 공수 모두 똑같이 조작합니다! [Q]=캐릭터·타겟 즉시 변경(공격 스냅 전 QB→세나→몬타→쿠리타 순환 / 수비 최단거리 선수 전환), [A]=추천 필살기(프리스냅 반전) + [A+←↑→↓]=비기 1~4번 발동, [E]=달리기(홀드) + E 누른 채 [S]=로빙패스·볼보호·하드카운트 / [D]=전력 다이브·태클·공버리기·타임아웃 / [Q]=라인맨(OL·DL) 전환 / [A]=오더블, [S]=스냅·패스·백토스·패스요청(수비 보조전환), [D]=돌파·점프캐치·페이크(수비 태클·점프인터셉트·헛! 점프).',
  },
  {
    question: 'Windows SmartScreen 또는 Android 앱 설치 경고가 뜰 때',
    answer:
      '개인 개발자 서명 빌드이므로 Windows에서는 "추가 정보 → 실행", Android에서는 설정에서 "출처를 알 수 없는 앱 설치 허용"을 켜면 정상적으로 설치 및 실행됩니다.',
  },
];
