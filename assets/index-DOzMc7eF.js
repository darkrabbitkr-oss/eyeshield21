(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))h(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&h(p)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function h(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();const y={gameTitle:"아이실드 21 : 택티컬 풋볼 매니저",shortTitle:"아이실드 21",heroHeadline:"0.1초를 꺾는 광속의 필드.",heroDescription:"11 vs 11 실시간 미식축구와 캐릭터별 전술 이해도(Football IQ) 6성향 AI, 대원 정발 리마스터 112종 사쿠가 컷인, 내장 9곡 스포츠 록 BGM & 애니 OST 12선 쥬크박스, 1~37권 전면 개편 15챕터 만화 스토리(★45), 42팀 871명 감독 커리어를 한 번에 담았습니다.",latestVersion:"v0.3.23",dmgDirectUrl:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.23/Eyeshield21-TacticalManager-0.3.23-arm64.dmg",dmgFilename:"Eyeshield21-TacticalManager-0.3.23-arm64.dmg",winSetupUrl:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.23/Eyeshield21-TacticalManager-Setup-0.3.23-x64.exe",winSetupFilename:"Eyeshield21-TacticalManager-Setup-0.3.23-x64.exe",apkDirectUrl:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.23/Eyeshield21-TacticalManager-0.3.23-android.apk",apkFilename:"Eyeshield21-TacticalManager-0.3.23-android.apk",gatekeeperCmd:'xattr -cr "/Applications/EYESHIELD 21.app"',legalNotice:"비공식 팬메이드 프로젝트 · Eyeshield 21 © Riichiro Inagaki, Yusuke Murata / Shueisha"},ve=[{id:"football-iq-ai",pillLabel:"NEW · 전술 이해도 6성향 AI",pillTone:"crimson",title:"살아 숨 쉬는 캐릭터별 두뇌 격차",description:"천재 지략가(히루마·유키미츠·키드·마루코)는 트릭·펌프페이크를 0.26초 만에 간파하고 예측 길목 차단과 빈 공간 옵션 루트를 자동 수행합니다. 반면 단세포 직진형(오타와라·가오우)과 풋볼 초짜(타키·봄 세나)는 페이크에 헛걸음하거나 지각 출발하며, 스토리 진행과 전술 미팅 훈련으로 이해도가 성장합니다."},{id:"sakuga-cutin-112",pillLabel:"사쿠가 연출 · 112종 완비",pillTone:"gold",title:"정발 리마스터 대사 & 광속 필드 VFX",description:"대원씨아이 정발 단행본 명대사와 캐릭터 고유 어조로 112종 필살기 대사를 전면 리마스터했습니다. 소속팀 배너·방사형 만화 집중선·번개 레일 컷인과 함께, 필드 위 4~5중 속도 잔상·V-웨이크 충격파·데빌 레이저 이중 나선 탄도가 실시간으로 터집니다."},{id:"canon-story-15",pillLabel:"스토리 캠페인 · ★45",pillTone:"default",title:"정발 1~37권 전면 개편 만화 스토리 15챕터",description:"원작을 모르는 플레이어도 각 경기의 이유와 인물 관계를 단숨에 이해하도록 15개 전 챕터 대본을 새로 썼습니다. 49종 정사각 도트 초상화, 반도전까지 지켜지는 세나 정체 보안, 팬서·무사시·유키미츠 교체 투입, 히루마 실전 코칭과 37권 대학·실업 에필로그까지 수록했습니다."},{id:"dynasty-career",pillLabel:"감독 커리어 · 42팀 871명",pillTone:"gold",title:"시즌 다이나스티 & 비기 전수 · 전술 육성",description:"42개 고교·대표팀 871명 풀 로스터로 봄 대회→여름 합숙→추계→관동→크리스마스 볼을 제패하세요. 졸업·신입 스카우트·히루마 협박 수첩 영입, 1:1 비기 전수 멘토링, 벤치·40야드·전술 미팅 3대 훈련과 풀오토 감독 지휘(AI) 모드를 모두 지원합니다."},{id:"hybrid-soundtrack",pillLabel:"오디오 · 상황별 자동 BGM",pillTone:"crimson",title:"애니 OST 12선 상황별 자동 전환 & 커스텀 BGM",description:"설정을 열지 않아도 타이틀(Deimon Devil Bats) · 스토리 1~4부 · 일반전(Breakthrough) · 라이벌전(BLAZE LINE) · 데스마치(Dang Dang) · 결승(불꽃의 러닝백) · 승리(Run to Win!)에 맞춰 알아서 전환되며, 직접 등록한 YouTube BGM 목록도 자동 저장·순환됩니다."},{id:"endgame-modes",pillLabel:"엔드게임 · 5대 모드",pillTone:"default",title:"클러치 12선 · 2,000km 데스마치 · 일일 챌린지",description:"원작 절체절명 승부처를 재현한 S/A/B 랭크 클러치 시나리오 12종, 피로도를 관리하며 42팀 연전에 도전하는 2,000km 데스마치 서바이벌(보급 특전 8종), 매일 시드가 바뀌는 일일 전술 챌린지, 112종 도감 & 30종 업적으로 끝없는 도전을 이어갑니다."}],j=[{id:"trailer-1080p",title:"공식 대표 트레일러 (16:9 풀HD)",subtitle:"초직관 5키(Q·E·A·S·D) 11 vs 11 실플레이 · 정발 112종 컷인 · 1~37권 전면 개편 스토리 15챕터 & 크리스마스 볼 터치다운",duration:"00:31",aspect:"16/9",tag:"대표 트레일러",localSrc:"./media/trailer_31s_1080p.mp4",youtubeId:"pjWFmug5nX4",poster:"./media/poster_opening.jpg",publishedAt:"2026. 11. 27."},{id:"trailer-shorts",title:"유튜브 쇼츠 세로 프리뷰 (9:16)",subtitle:"모바일 쇼츠 비율에 맞춰 초직관 5키 실플레이, 112종 한글 컷인, 개편 스토리 만화 컷을 압축 편집한 세로 영상",duration:"00:31",aspect:"9/16",tag:"쇼츠 버전",localSrc:"./media/trailer_31s_shorts.mp4",youtubeId:"7uLpNN_tytw",poster:"./media/shot_cutin_d4d.jpg",publishedAt:"2026. 11. 27."},{id:"shorts-01-controls",title:"쇼츠 01 · 초직관 5키(Q·E·A·S·D) 조작 & 실전 룰 가이드",subtitle:"방향키 이동 · E 전력질주 · Q 전환 · A+방향키 필살기 · S/E+S 패스 · 4번 안에 10야드 & 터치다운 해설",duration:"00:23",aspect:"9/16",tag:"조작 가이드",localSrc:"./media/shorts_01_controls.mp4",youtubeId:"tlSvGGNCX68",poster:"./media/poster_shorts_01.jpg",publishedAt:"2026. 11. 27."},{id:"shorts-02-specials",title:"쇼츠 02 · 대원씨아이 정발 고증 필살기 한글 컷인 112종",subtitle:"데빌 배트 고스트 · 데빌 레이저 불릿 · 트라이던트 태클 · 극한의 임펄스 · 데빌 4 디멘션 & 도감 수집 해설",duration:"00:25",aspect:"9/16",tag:"필살기 도감",localSrc:"./media/shorts_02_specials.mp4",youtubeId:"HlBl9BNSO1M",poster:"./media/poster_shorts_02.jpg",publishedAt:"2026. 11. 27."},{id:"shorts-03-story-manager",title:"쇼츠 03 · 정발 1~37권 전면 개편 스토리 15챕터 & 42팀 감독 커리어",subtitle:"네모칸 리터칭 만화 컷 & 히루마 코칭, 2,000km 데스마치, 42팀 871명 로스터·멘토링·다이너스티 해설",duration:"00:23",aspect:"9/16",tag:"스토리·감독",localSrc:"./media/shorts_03_story_manager.mp4",youtubeId:"2XPdru2YZPI",poster:"./media/poster_shorts_03.jpg",publishedAt:"2026. 11. 27."}],re=[{id:"windows-exe",platformKey:"windows",platformLabel:"Windows EXE",badge:"WINDOWS 64-BIT",title:"Windows 설치형 · 포터블 (.exe)",version:"v0.3.23",sizeText:"Setup 135 MB · Portable 123 MB",summary:"Windows PC용 NSIS 설치 파일과 무설치 포터블 실행 파일 2종을 바로 다운로드할 수 있습니다.",image:"./media/shot_gameplay.jpg",actionLabel:"설치형 받기",actionHref:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.23/Eyeshield21-TacticalManager-Setup-0.3.23-x64.exe",downloadFilename:"Eyeshield21-TacticalManager-Setup-0.3.23-x64.exe",secondaryAction:{label:"포터블 받기",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.23/Eyeshield21-TacticalManager-Portable-0.3.23-x64.exe",downloadFilename:"Eyeshield21-TacticalManager-Portable-0.3.23-x64.exe"},external:!1,requirement:"Windows 10 / 11 (x64)"},{id:"macos-dmg",platformKey:"macos",platformLabel:"macOS DMG",badge:"MACOS APPLE SILICON",title:"macOS 설치용 앱 (DMG)",version:"v0.3.23",sizeText:"135 MB",summary:"애니 OST 상황별 자동 전환·커스텀 YouTube BGM 자동 순환·내장 9곡 BGM·전술 이해도 AI·112종 사쿠가 컷인이 완비된 macOS(M1~M4) 전용 단독 설치 패키지입니다.",image:"./media/shot_cutin_d4d.jpg",actionLabel:"DMG 받기",actionHref:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.23/Eyeshield21-TacticalManager-0.3.23-arm64.dmg",downloadFilename:"Eyeshield21-TacticalManager-0.3.23-arm64.dmg",external:!1,requirement:"macOS 12+ (Apple Silicon)"},{id:"android-apk",platformKey:"android",platformLabel:"Android APK",badge:"ANDROID MOBILE",title:"Android 모바일 앱 (.apk)",version:"v0.3.23",sizeText:"22 MB",summary:"가로 모드 고정 화면에 가상 조이스틱·스토리 컷 스와이프 넘김 및 햅틱 진동이 활성되는 서명 APK입니다.",image:"./media/shot_cutin_ghost.jpg",actionLabel:"APK 받기",actionHref:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.23/Eyeshield21-TacticalManager-0.3.23-android.apk",downloadFilename:"Eyeshield21-TacticalManager-0.3.23-android.apk",external:!1,requirement:"Android 7.0+ (서명 APK)"},{id:"web-build",platformKey:"web",platformLabel:"Web 브라우저",badge:"WEB PREVIEW",title:"웹 브라우저 실시간 플레이",version:"v0.3.23",sizeText:"즉시 실행",summary:"설치 과정 없이 모바일·태블릿·PC 브라우저 어디서나 전술 이해도 AI · 상황별 자동 BGM · 112종 리마스터 컷인과 초직관 5키 경기를 바로 즐길 수 있습니다.",image:"./media/shot_td.jpg",actionLabel:"웹으로 실행",actionHref:"./play/",external:!0,requirement:"Chrome · Safari · Edge · 모바일 지원"}],V=[{id:"cutin-d4d",title:"성야의 오의 · 데빌 4 디멘션",caption:"원작 정발판 호흡 그대로 다듬은 112종 필살기 대사와 만화 집중선·번개 레일 사쿠가 컷인 연출",image:"./media/shot_cutin_d4d.jpg"},{id:"cutin-ghost",title:"광속 돌파 · 데빌 배트 고스트",caption:"0.1초 타이밍을 가르는 잔상 돌파와 소속팀 표기·전면 개편 대사가 적용된 사쿠가 한글 컷인 시스템",image:"./media/shot_cutin_ghost.jpg"},{id:"gameplay-11v11",title:"11 vs 11 실시간 광속 전술 필드",caption:"캐릭터별 전술 이해도(페이크 간파/낚임·예측 추격·옵션 루트) AI + 4중 속도 잔상 · 초직관 5키 필드",image:"./media/shot_gameplay.jpg"},{id:"snowy-td",title:"크리스마스 볼 · 기적의 터치다운",caption:"눈 내리는 결승 구장 위에서 9곡 BGM·애니 OST 쥬크박스와 함께 터지는 역전 터치다운 연출",image:"./media/shot_td.jpg"},{id:"canon-story",title:"전면 개편 만화 스토리 15챕터 (★45)",caption:"정발 1~37권 고증 한국어 만화 대본 · 네모칸 리터칭 초상화 49종 · 챕터 진행에 따른 이해도 성장",image:"./media/shot_story.jpg"},{id:"key-visual",title:"데이몬 데빌 배츠 키비주얼 (v0.3.23)",caption:"원작 감성을 픽셀 스타일로 다듬은 v0.3.23 메인 타이틀 화면과 5대 게임 모드 포털",image:"./media/shot_start.jpg"}],Y=[{version:"v0.3.23",date:"2026. 11. 27.",isLatest:!0,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 135 MB / DMG 135 MB / APK 22 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.23/Eyeshield21-TacticalManager-0.3.23-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.23-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.23/Eyeshield21-TacticalManager-Setup-0.3.23-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.23-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.23/Eyeshield21-TacticalManager-Portable-0.3.23-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.23-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.23/Eyeshield21-TacticalManager-0.3.23-android.apk",filename:"Eyeshield21-TacticalManager-0.3.23-android.apk"}],highlights:["애니메이션 OST 12선 상황별 완전 자동 BGM 전환: 별도 조작 없이 게임 실행 순간부터 타이틀(Deimon Devil Bats) · 스토리 1~4부(Be Free!/Innocence/flower/Goal) · 일반 경기(Breakthrough) · 라이벌전(BLAZE LINE) · 후반전(Code Name Eyeshield 21) · 데스마치(Dang Dang) · 결승(불꽃의 러닝백) · 승리(Run to Win!)로 자동 전환","커스텀 YouTube BGM 목록 영구 저장 & 자동 순환: 원하는 유튜브 주소를 등록해 두면 다음 실행부터도 알아서 배경음악으로 자동 재생되며, 여러 곡 등록 시 곡 종료·새 경기 진입마다 다음 곡으로 자동 순환(화면을 가리는 팝업 창 제거)"]},{version:"v0.3.22",date:"2026. 11. 27.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 134 MB / DMG 134 MB / APK 22 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.22/Eyeshield21-TacticalManager-0.3.22-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.22-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.22/Eyeshield21-TacticalManager-Setup-0.3.22-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.22-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.22/Eyeshield21-TacticalManager-Portable-0.3.22-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.22-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.22/Eyeshield21-TacticalManager-0.3.22-android.apk",filename:"Eyeshield21-TacticalManager-0.3.22-android.apk"}],highlights:["YouTube 링크 & 애니메이션 OST 인게임 즉시 재생 개편: 설치형 데스크톱 앱(macOS/Windows)에서도 외부 브라우저 없이 인게임 백그라운드 오디오로 곧바로 재생되며, 주소 붙여넣기(Paste)·엔터(Enter) 즉시 재생 및 전체/BGM 볼륨 슬라이더 실시간 제어 지원","아이실드 21 애니메이션 OST 프리셋 12선 전곡 재정비: Breakthrough, Innocence, Dang Dang, BLAZE LINE, 불꽃의 러닝백, Be Free!, Blaze Away, Goal, Run to Win!, flower 등 12곡 모두 즉시 재생·임베드 허용 음원으로 교체"]},{version:"v0.3.21",date:"2026. 11. 27.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 134 MB / DMG 134 MB / APK 22 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.21/Eyeshield21-TacticalManager-0.3.21-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.21-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.21/Eyeshield21-TacticalManager-Setup-0.3.21-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.21-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.21/Eyeshield21-TacticalManager-Portable-0.3.21-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.21-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.21/Eyeshield21-TacticalManager-0.3.21-android.apk",filename:"Eyeshield21-TacticalManager-0.3.21-android.apk"}],highlights:["캐릭터별 전술 이해도(Football IQ) 6성향 필드 AI 도입: 천재 지략가·야생 본능형·노련한 실전파·실전 성장형·단세포 직진형·풋볼 초짜 성향에 따라 트릭/펌프페이크 간파·헛걸음, 예측 추격 각도, 빈 공간 옵션 루트, 기습 블리츠 픽업이 실시간 차등 작동","스토리 진행 & 전술 미팅 훈련 성장 연동: 봄 대회 초짜(세나·몬타·삼돌이 등)가 데스마치·관동대회를 거치며 이해도가 성장하고, 트레이닝 탭의 전술 미팅 버튼으로 허당·초짜 선수의 게임 이해도를 직접 육성 가능"]},{version:"v0.3.20",date:"2026. 11. 27.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 134 MB / DMG 134 MB / APK 22 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.20/Eyeshield21-TacticalManager-0.3.20-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.20-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.20/Eyeshield21-TacticalManager-Setup-0.3.20-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.20-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.20/Eyeshield21-TacticalManager-Portable-0.3.20-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.20-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.20/Eyeshield21-TacticalManager-0.3.20-android.apk",filename:"Eyeshield21-TacticalManager-0.3.20-android.apk"}],highlights:["112종 전 필살기 컷인 대사 전면 개편: 설명충·번역투·판타지 복붙 어조를 제거하고 대원씨아이 정발 단행본 명대사·캐릭터 고유 말투·실전 미식축구 호흡으로 112종 전 컷인 대사 리마스터","사쿠가 컷인 UI 정밀화: 컷인 배너 좌상단 중복 라벨을 소속 팀명(예: 데이몬 데빌 배츠 · 아이실드 21)으로 교정하고 필드를 가리던 하단 중복 대사창을 제거해 배너 가독성과 몰입감 극대화"]},{version:"v0.3.19",date:"2026. 11. 27.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 134 MB / DMG 134 MB / APK 22 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.19/Eyeshield21-TacticalManager-0.3.19-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.19-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.19/Eyeshield21-TacticalManager-Setup-0.3.19-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.19-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.19/Eyeshield21-TacticalManager-Portable-0.3.19-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.19-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.19/Eyeshield21-TacticalManager-0.3.19-android.apk",filename:"Eyeshield21-TacticalManager-0.3.19-android.apk"}],highlights:["고속 스포츠 록 신규 BGM 3종(176 BPM 광속 질주 · 128 BPM 스토리 연대기 · 164 BPM 데스마치 서바이벌, 총 9곡) 추가 및 오디오 설정 내 9곡 즉시 선곡 쥬크박스 · YouTube 애니메이션 명곡 12선 프리셋 연동 지원","필드 스킬 & 컷인 사쿠가 이펙트 대폭 강화: 속도 비례 4~5중 잔상 실루엣·초음속 V-웨이크·스피드 번개·데빌 레이저 이중 나선 탄도·화면 외곽 만화 집중선·카메라 줌 펀치 및 필살기 속성별 전용 서브베이스/레이저/초가속 효과음 레이어링 적용"]},{version:"v0.3.18",date:"2026. 11. 27.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 131 MB / DMG 131 MB / APK 19 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.18/Eyeshield21-TacticalManager-0.3.18-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.18-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.18/Eyeshield21-TacticalManager-Setup-0.3.18-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.18-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.18/Eyeshield21-TacticalManager-Portable-0.3.18-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.18-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.18/Eyeshield21-TacticalManager-0.3.18-android.apk",filename:"Eyeshield21-TacticalManager-0.3.18-android.apk"}],highlights:["스토리 모드 15챕터 한국어 대본 전면 개편: 원작 미독자도 각 경기의 목적·동료 합류 동기·라이벌 관계·다음 대진을 이해할 수 있도록 오프닝·경기 중 컷인·엔딩 전 컷 재집필(유우히·도쿠바리 연승 브리지, 유스 월드컵 팬서 재대결, 37권 대학·실업 3팀 에필로그 수록)","원작 타임라인 전·후반 교체 및 정발 1~37권 고증 패치: 반도전 정체 공개 전 필드 정체 보안(sena_eyeshield), 조쿠토전 불량 삼돌이 임시 출전, NASA전 #20 팬서·세이부전 #11 무사시·신류지전 #16 유키미츠 후반(Q3) 교체 투입, 정발 필살기 표기(극한의 임펄스·크리스 크로스·데빌 배트 다이빙·살인벌 등) 및 원작 결과 진행 옵션 지원"]},{version:"v0.3.17",date:"2026. 11. 26.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 131 MB / DMG 131 MB / APK 19 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.17/Eyeshield21-TacticalManager-0.3.17-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.17-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.17/Eyeshield21-TacticalManager-Setup-0.3.17-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.17-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.17/Eyeshield21-TacticalManager-Portable-0.3.17-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.17-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.17/Eyeshield21-TacticalManager-0.3.17-android.apk",filename:"Eyeshield21-TacticalManager-0.3.17-android.apk"}],highlights:["전 모드 미식축구 정규 룰·물리·AI 정밀 점검 패치: 2점 트라이 중 반칙 시 몰수 대신 야드 증감 후 재시도, 트라이 중 자진 엔드존 태클 0점 종료, 인터셉트 후 펌블 아웃 소유권 유지, 리턴 중 엔드존 탈출 후 후퇴 세이프티 판정, AI 쿼터백 스크리미지선 통과 후 전진패스 차단 및 서든데스 다중 연장전 루프 완성","스토리·모바일 조작·세이브 무결성 보완: Ch.01 4th Down 킥 차단(터치다운 승부 고정), 타키·불량 삼돌이·가오우 챕터별 공용 비기/화자 컷인 정합성 강화, 모바일 터치 공격 시 OL전환 버튼 지원, 유스 월드컵 및 데스마치 세이브 카운팅 보정"]},{version:"v0.3.16",date:"2026. 11. 26.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 131 MB / DMG 131 MB / APK 19 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.16/Eyeshield21-TacticalManager-0.3.16-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.16-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.16/Eyeshield21-TacticalManager-Setup-0.3.16-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.16-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.16/Eyeshield21-TacticalManager-Portable-0.3.16-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.16-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.16/Eyeshield21-TacticalManager-0.3.16-android.apk",filename:"Eyeshield21-TacticalManager-0.3.16-android.apk"}],highlights:["코이가하마 1회전 『0:3 열세 · 최후의 1세트』 원작 고증 튜토리얼 개편 & 대형 히루마 상세 가이드 보드 추가: 길게 4쿼터를 끌지 않고 원작 1권처럼 하츠죠에게 필드골을 허용한 종료 직전 마지막 공격 1세트(Q4 0:45 · 자진 38YD · 게이지 65%)에서 시작해 6:3 역전 터치다운 성공 시 즉시 클리어되며, 68x68 정사각 히루마 도트 초상화와 3칸 대형 설명 카드로 미식축구 규칙(4번 안에 10YD 갱신)과 조작법을 친절하게 안내"]},{version:"v0.3.15",date:"2026. 11. 26.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 131 MB / DMG 131 MB / APK 19 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.15/Eyeshield21-TacticalManager-0.3.15-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.15-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.15/Eyeshield21-TacticalManager-Setup-0.3.15-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.15-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.15/Eyeshield21-TacticalManager-Portable-0.3.15-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.15-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.15/Eyeshield21-TacticalManager-0.3.15-android.apk",filename:"Eyeshield21-TacticalManager-0.3.15-android.apk"}],highlights:["『광속의 세계 (4초 2)』 원작 명대사 & 시공간 감속·빛의 길 연출 강화 + 데빌 배트 다이브 해금 시점 칼고증 보정: Ch.01~03(코이가하마·봄 오죠·조쿠토)은 『광속의 세계』 단독 보유 후 Ch.04 태양 스핑크스전부터 『데빌 배트 다이브』, Ch.06 아미노전부터 『데빌 배트 고스트』를 해금하며, 발동 시 챕터별 원작 정발 명대사(1권 히루마 “필드를 제압해라!”, 3권 세나 “도망친다고? 아니야! 이기는 거야!!” & 신 “4초 4가 음속의 세계라면 4초 2는 광속의 세계”, 초반 세나 “거짓말이 진짜가 되도록!”)와 시계 정지 링·빛의 길 VFX 및 주변 수비 체감 감속 효과를 적용"]},{version:"v0.3.14",date:"2026. 11. 26.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 131 MB / DMG 131 MB / APK 19 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.14/Eyeshield21-TacticalManager-0.3.14-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.14-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.14/Eyeshield21-TacticalManager-Setup-0.3.14-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.14-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.14/Eyeshield21-TacticalManager-Portable-0.3.14-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.14-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.14/Eyeshield21-TacticalManager-0.3.14-android.apk",filename:"Eyeshield21-TacticalManager-0.3.14-android.apk"}],highlights:["스토리 모드 전 15챕터 원작 타임라인 필살기 순차 해금 & 초기 비기 『광속의 세계 (4초 2)』 추가(총 112종): 봄 도쿄 1회전 코이가하마전에서는 아직 배우지 않은 데빌 배트 고스트·데빌 4 디멘션 대신 원작 1권의 『광속의 세계 (4초 2)』만 발동하며, 봄 오죠전(다이브 해금 · 신은 스피어 태클만 사용) → 추계 아미노전(2,000km 데스마치 직후 데빌 배트 고스트 해금) → 쿄신전(허리케인) → 세이부전(데빌 드래곤 플라이) → 신류지전(유키미츠 옵션 루트) → 관동 오죠전(스턴건·백 파이어·트라이던트 태클) → 크리스마스 볼(데빌 4 디멘션) 순으로 엄격히 개방"]},{version:"v0.3.13",date:"2026. 11. 26.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 131 MB / DMG 131 MB / APK 19 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.13/Eyeshield21-TacticalManager-0.3.13-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.13-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.13/Eyeshield21-TacticalManager-Setup-0.3.13-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.13-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.13/Eyeshield21-TacticalManager-Portable-0.3.13-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.13-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.13/Eyeshield21-TacticalManager-0.3.13-android.apk",filename:"Eyeshield21-TacticalManager-0.3.13-android.apk"}],highlights:["스토리 모드 『네모칸(정사각) 도트 리터칭 일러스트 + 좌우 교차 대사창』 개편 & 사카키 도부로쿠 원작 고증 수정: 가로형 스킬 배너 대신 49종 전 등장인물 원작 일러스트를 112x112 정사각형 DS 도트 초상화로 리터칭해 아군(좌)·라이벌(우) 대사창과 나란히 배치하고, 트레이너 사카키 도부로쿠(酒奇 溝六)와 아네자키 마모리의 원작 공식 외형·명칭·미국 해변 데스마치 합류 시점을 정확히 반영"]},{version:"v0.3.12",date:"2026. 11. 26.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 130 MB / DMG 131 MB / APK 18 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.12/Eyeshield21-TacticalManager-0.3.12-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.12-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.12/Eyeshield21-TacticalManager-Setup-0.3.12-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.12-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.12/Eyeshield21-TacticalManager-Portable-0.3.12-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.12-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.12/Eyeshield21-TacticalManager-0.3.12-android.apk",filename:"Eyeshield21-TacticalManager-0.3.12-android.apk"}],highlights:["스토리 모드 『만화 컷 넘김 스토리북』 전면 개편: 원작 미숙지 입문자도 단번에 몰입할 수 있도록 창단 프롤로그·동료 영입 막간(몬타 야구부 탈락·도쿄타워 얼음 테스트·미국 2,000km 데스마치·무사시 1년 전 진실·반도전 정체 고백 등)과 아네자키 마모리·사케모토 도부로쿠·타키 스즈나 등 주역 일러스트 컷인, 말풍선·효과음·내레이션 박스·클릭/스와이프 컷 넘김 UI 및 경기 도중 실시간 드라마 컷인을 전면 추가"]},{version:"v0.3.11",date:"2026. 11. 26.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 130 MB / DMG 131 MB / APK 18 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.11/Eyeshield21-TacticalManager-0.3.11-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.11-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.11/Eyeshield21-TacticalManager-Setup-0.3.11-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.11-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.11/Eyeshield21-TacticalManager-Portable-0.3.11-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.11-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.11/Eyeshield21-TacticalManager-0.3.11-android.apk",filename:"Eyeshield21-TacticalManager-0.3.11-android.apk"}],highlights:["스토리 15챕터 전 구간 히루마 실시간 전술·포지션 코칭 추가(“YA-HA—!! 이번엔 『○○』로 간다!!”): #80 몬타(WR1 콜 포 패스·더블 패스), 불량 삼돌이·코무스비(OL/DL [E+Q] 라인전·불량살법), #37 타키(TE 심 루트·크라이스트 크로스), 세이부전(데빌 드래곤 플라이 2-QB), #11 무사시(60야드 매그넘 필드골·LB), #16 유키미츠(WR2 옵션 루트), 크리스마스 볼(데빌 4 디멘션)까지 동료 합류 및 전술 해금 시점마다 히루마가 스토리 허브·시합 전 브리핑·인게임 상단 HUD에서 단계별로 포지션 조작법과 전술을 직접 코칭"]},{version:"v0.3.10",date:"2026. 11. 26.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 130 MB / DMG 131 MB / APK 18 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.10/Eyeshield21-TacticalManager-0.3.10-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.10-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.10/Eyeshield21-TacticalManager-Setup-0.3.10-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.10-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.10/Eyeshield21-TacticalManager-Portable-0.3.10-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.10-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.10/Eyeshield21-TacticalManager-0.3.10-android.apk",filename:"Eyeshield21-TacticalManager-0.3.10-android.apk"}],highlights:['코이가하마전 3인방(히루마·쿠리타·세나) 고증 튜토리얼 & 동적 로스터 전술 설명 적용: 창단 첫 경기 튜토리얼 대사를 정규 3인+운동부 용병 체제에 맞춰 전면 재작성("빌어먹을 리시버만 있었더라면..." 등)하고, 미영입 동료(몬타·불량 삼돌이·유키미츠·타키·무사시) 전용 작전·포메이션 비기·작전 설명·벤치 코멘트가 실제 합류 챕터에 맞춰 동적으로 해금·표기되도록 개편']},{version:"v0.3.9",date:"2026. 11. 26.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 130 MB / DMG 131 MB / APK 18 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.9/Eyeshield21-TacticalManager-0.3.9-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.9-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.9/Eyeshield21-TacticalManager-Setup-0.3.9-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.9-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.9/Eyeshield21-TacticalManager-Portable-0.3.9-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.9-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.9/Eyeshield21-TacticalManager-0.3.9-android.apk",filename:"Eyeshield21-TacticalManager-0.3.9-android.apk"}],highlights:["공식 홈페이지 조작 가이드 신설 & 인게임 전체 UI·튜토리얼 전면 통일: 포털 홈페이지 내 비주얼 5키 키캡 가이드 섹션 추가, 히루마 6단계 실전 튜토리얼·연습 드릴 6종·일시정지 메뉴·프리스냅 캐릭터변경 버튼·리시버 주행/패스요청(S)·모바일 조이스틱 방향+필살기 비기 발동까지 초직관 5키 기준으로 100% 일원화"]},{version:"v0.3.8",date:"2026. 11. 26.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 130 MB / DMG 131 MB / APK 18 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.8/Eyeshield21-TacticalManager-0.3.8-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.8-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.8/Eyeshield21-TacticalManager-Setup-0.3.8-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.8-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.8/Eyeshield21-TacticalManager-Portable-0.3.8-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.8-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.8/Eyeshield21-TacticalManager-0.3.8-android.apk",filename:"Eyeshield21-TacticalManager-0.3.8-android.apk"}],highlights:["A+방향키 멀티 필살기 & E(달리기) 조합키 개편: 암기 조합을 전면 폐기하고 [Q] 1버튼 즉시 캐릭터/타겟 변경(스냅 전 QB→세나→몬타→쿠리타 순환 및 리시버 콜포패스 포함), [A] 추천 필살기 + [A+←↑→↓] 비기 1~4번 방향키 발동, [E] 달리기 홀드 중 [E+S/D/Q/A]로 로빙·볼보호·전력태클·라인맨전환·오더블이 자연스럽게 변형 발동되는 초직관 5키 조작계 적용"]},{version:"v0.3.7",date:"2026. 11. 25.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 130 MB / DMG 131 MB / APK 18 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.7/Eyeshield21-TacticalManager-0.3.7-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.7-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.7/Eyeshield21-TacticalManager-Setup-0.3.7-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.7-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.7/Eyeshield21-TacticalManager-Portable-0.3.7-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.7-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.7/Eyeshield21-TacticalManager-0.3.7-android.apk",filename:"Eyeshield21-TacticalManager-0.3.7-android.apk"}],highlights:["공수 통합 전환키 [Q] 및 기본키 대칭 통일: 실제 FC 온라인 표준에 맞춰 이동(↑↓←→) · 전력질주(E) · 통합 전환(Q 단독 탭: 공격 타겟/캐리어 전환 ↔ 수비 커서 전환) · 라인맨 전환(Q+E: 공격 OL ↔ 수비 DL) · 피지컬 액션(D: 다이브/격파 ↔ 태클/점프인터셉트) · 필살기/반전(A)을 공수 100% 동일한 손맛으로 통일"]},{version:"v0.3.6",date:"2026. 11. 25.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 130 MB / DMG 131 MB / APK 18 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.6/Eyeshield21-TacticalManager-0.3.6-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.6-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.6/Eyeshield21-TacticalManager-Setup-0.3.6-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.6-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.6/Eyeshield21-TacticalManager-Portable-0.3.6-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.6-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.6/Eyeshield21-TacticalManager-0.3.6-android.apk",filename:"Eyeshield21-TacticalManager-0.3.6-android.apk"}],highlights:["공격(⚡ OFFENSE) vs 수비(🛡 DEFENSE) 상황별 키 안내 전면 분리: 하단 실시간 키캡 바(작전선택 · 프리스냅 · QB패스 · 러너돌파 · 공중볼포구 · OL블로킹 vs 수비포메이션 · 수비프리스냅 · 태클/커버 · 공중볼경합 · DL패스러시), 우측 조작 가이드 서랍(현재 공격/수비 하이라이트), 모바일/터치 버튼 라벨까지 공격·수비 완전 분리"]},{version:"v0.3.5",date:"2026. 11. 25.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 130 MB / DMG 131 MB / APK 18 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.5/Eyeshield21-TacticalManager-0.3.5-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.5-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.5/Eyeshield21-TacticalManager-Setup-0.3.5-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.5-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.5/Eyeshield21-TacticalManager-Portable-0.3.5-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.5-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.5/Eyeshield21-TacticalManager-0.3.5-android.apk",filename:"Eyeshield21-TacticalManager-0.3.5-android.apk"}],highlights:["전 포지션 체력 비례 능력치 하락(OL/DL 블로킹·앵커·클래시, QB 패스 정확도·구속·와인드업, WR/DB 캐치·공중 점프 타점, LB/DB 태클 파워·리치, RB 트럭킹·볼 키핑, K 필드골) 일괄 적용 및 데이몬 정신력(Spirit 91~99) 승부처 저항 연동","11v11 포메이션 폭 & 수비 추격 레인 확장으로 뭉침 현상 해소: 520px 경기장 전체 폭을 활용하도록 OL 간격(48px+ A/B/C 갭)·외곽 WR/CB 간격·백필드 깊이를 넓히고, 수비 추격 스웜 분담(1인 정면 태클 + 컨테인/앨리/딥 엄브렐라 분산) 및 와이드 중계 카메라 뷰 적용"]},{version:"v0.3.4",date:"2026. 11. 25.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 130 MB / DMG 131 MB / APK 18 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.4/Eyeshield21-TacticalManager-0.3.4-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.4-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.4/Eyeshield21-TacticalManager-Setup-0.3.4-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.4-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.4/Eyeshield21-TacticalManager-Portable-0.3.4-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.4-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.4/Eyeshield21-TacticalManager-0.3.4-android.apk",filename:"Eyeshield21-TacticalManager-0.3.4-android.apk"}],highlights:["실전 컷백 딜레이(각도 비례 브레이크) & 무감속 데빌 배트 고스트 고증: 고속 주행 중 65° 이상 급격히 방향을 꺾으면 풋플랜트 감속·컷백 딜레이가 걸리지만, [데빌 배트 고스트 / 제왕의 차지] 발동 중에는 감속 0% 광속 컷백으로 수비수의 발목을 꺾음","러너 체력 고증 곡선 & 연속 캐리 피로: 신(98)·야마토(96)의 철인 체력 대비 세나(84)·아곤(85)의 단거리 소모율 및 연속 볼 캐리 피로를 반영해 런·패스 배분 전술 강화","데이몬 데스마치 정신력(악마의 투혼 Spirit 91~99) 승부처 한계 돌파: 4쿼터·열세·4th Down·레드존 승부처에서 데이몬 전원이 체력 저하 페널티를 최대 78% 무시하고 발이 되살아나는 원작 투혼 보정 적용(반면 연습 안 하는 천재 아곤은 4Q 피로 증폭)"]},{version:"v0.3.3",date:"2026. 11. 25.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 130 MB / DMG 131 MB / APK 18 MB",downloads:[{label:"macOS DMG",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.3/Eyeshield21-TacticalManager-0.3.3-arm64.dmg",filename:"Eyeshield21-TacticalManager-0.3.3-arm64.dmg",primary:!0},{label:"Win 설치형",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.3/Eyeshield21-TacticalManager-Setup-0.3.3-x64.exe",filename:"Eyeshield21-TacticalManager-Setup-0.3.3-x64.exe"},{label:"Win 포터블",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.3/Eyeshield21-TacticalManager-Portable-0.3.3-x64.exe",filename:"Eyeshield21-TacticalManager-Portable-0.3.3-x64.exe"},{label:"Android APK",href:"https://github.com/darkrabbitkr-oss/eyeshield21/releases/download/v0.3.3/Eyeshield21-TacticalManager-0.3.3-android.apk",filename:"Eyeshield21-TacticalManager-0.3.3-android.apk"}],highlights:["야마토 타케루 원작 고증 보정(기본 4.40초 → 제왕의 차지 발동 시 4.20초 광속 돌파): 평상시 직선 주력은 4.4초로 4.2초 세나·신보다 0.2초 느리지만, [제왕의 차지]가 발동되면 무감속 4.2초 광속 영역으로 가속해 세나·신을 추격·격돌하도록 정밀 구현","전체 최상위 주력 계단 완성: 팬서(4.1s) > 세나·신(4.2s) > 봄 신(4.37s) > 야마토(4.4s, 제왕의 차지 시 4.2s+) > 리쿠(4.5s) > 아곤(4.6s) > 카케이(4.7s) > 타카·와트(4.8s) > 잇큐(4.89s) > 몬타(5.0s)"]},{version:"v0.3.2",date:"2026. 11. 25.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"이전 업데이트",downloads:[],highlights:["원작 러너별 0.1초 속도 서열 정밀 구현: 4.10초 팬서(세계 단독 최고속 1위) 언캡 해금 → 4.20초 세나(순간 컷백 가속 1위)·신(파워 겸비)·야마토(밸런스) → 4.50초 리쿠(로데오 스텝) → 4.60초 아곤(0.11초 초동 반응) 순으로 모든 러너의 최고속·가속 개성을 차등화",'만화 고증 "0.1초 차이로 뒤에선 못 잡는다" 추격 물리: 전방 수비수는 대각선 각도(Pursuit Angle)로 사이드라인을 강하게 차단하되, 이미 제쳐진 후방 추격자의 인위적 고무줄 보정을 제거해 4.1초 팬서가 4.2초 세나·신을 제치면 간발의 0.1초 차이로 터치다운하는 원작 구도 재현',"간발의 차 돌파 연출 팝업(⚡ 0.1초 차이 돌파!!) 추가 및 오픈필드 브레이크어웨이 최고속 해방"]},{version:"v0.3.1",date:"2026. 11. 25.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"이전 업데이트",downloads:[],highlights:["인플레이 상시 백토스·횡패스(Lateral Pitch) 도입: 스크리미지 라인 돌파 후나 패스 포구 뒤에도 옆·뒤로 따라붙는 동료([S 토스] 배지)에게 언제든 공을 토스 가능 — 단, 비-QB 선수가 수비 압박 속 장거리 토스 시 불안정한 토스 및 악송구 루즈볼 펌블 위험 발생!","런 속도 곡선 & 수비 오픈필드 추격 밸런스 재조정: 4.2초 광속 에이스와 4.8~5.3초 수비수 간 비현실적 속도 격차 압축, 볼캐리어 질주 피로도 현실화 및 CPU 세컨더리(CB/SS/LB) 추격 스프린트·대각선 사이드라인 차단 각도 강화","동료 피치 서포트 AI 추가: 볼캐리어 돌파 시 오프볼 스킬 동료와 핸드오프 후 QB가 전방 스토크 블로킹 또는 측면 백토스 지원 대형으로 자동 추종"]},{version:"v0.3.0",date:"2026. 11. 25.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"이전 업데이트",downloads:[],highlights:["3단계 히트스톱(Hit-stop) · 트라우마 카메라 셰이크 · 게임패드 듀얼 럼블 & 모바일 진동 도입: 강태클·색·펌블·인터셉트·격돌 승리 순간 45~85ms 정지 타격감과 만화 임팩트 링, 입력 버퍼링, 흔들림/진동 설정 추가","전수 코드 감사 P1 11건 · P2 28건 완결 수정: 2점 컨버전 실패 즉시 종료, 세이프티 프리킥·미스 FG 스팟·하프타임 타임아웃 리셋, 패드/터치 입력 디바이스 분리로 6키 패스 간섭 완전 제거, 패드 리매핑 시 키보드 6키 유지","패스 리스크 & 스탯 정밀화: 압박 롤아웃 딥볼·더블 커버리지 인터셉트 확률 및 유저 수비수 공중 경합 개방, 패스 캐치 후 전진 야드(YAC) 패서·리시버 동시 반영 및 리턴/턴오버 TD 분리 집계","필살기 맥락 가용성 HUD & 세이브 보호: 킥전용/패스전용/공중볼 필살기 맥락 표시·오발동 차단, 전 화면 키 안내 20곳 동적 통일, 쿠키 차단 브라우저 안전 실행 및 데스마치·다이너스티 중도이탈 패배 처리"]},{version:"v0.2.3",date:"2026. 11. 25.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"이전 업데이트",downloads:[],highlights:["FC 온라인식 6키(↑↓←→ + Q·W·E·A·S·D) 기본 조작 도입: 숫자키 없이 방향키로 지향하는 원버튼 패스(S 짧은/총알 · W 로빙), D 태클/불러시/파워드라이브/다이브, E 질주, A 추천 필살기, Q+방향키 비기 슬롯 1~4번 & Q+S/W/D/E 심화 전술 조합 지원","대원씨아이 정발판 전수 고증 감수 반영 & 필살기 111종 확장: 정발 팀명(태양 스핑크스 등)·선수명·대사·반도전 스코어(24-23)·무사시 복귀 시점 교정 및 18개 팀 공식 마스코트 한글명·만화 컷 격돌 연출(영문 스크림 말풍선·테이코쿠 황금+화이트 리터칭) 적용","콘고 아곤 0.11초 신속의 임펄스 초반응 시스템 및 상대 저급 필살기 실시간 카피(모방 발동) AI·컷인 구현","HD-2D 인게임 시인성 전면 개편: 비조작 선수 디밍 대비 강화, 내 조작 선수 1P 골드 비콘·진행 화살표, 볼캐리어 BALL 배지, 패스 타겟 지향선 하이라이트 및 비공식 팬게임 권리 고지 스플래시 추가"]},{version:"v0.2.2",date:"2026. 11. 25.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"이전 업데이트",downloads:[],highlights:["기본 조작 체계를 방향키(↑↓←→) 이동 + 알파벳(Z/X/C/V/Q 등) 스킬·전술 전용 키로 개편","환경 설정 → [조작 키 · 게임패드 설정]에서 프리셋(방향키 기본 · 방향키+ASDF · WASD) 및 키보드 개별 키 자유 리매핑(충돌 자동 스왑·자동 저장) 추가","Xbox/DualSense 게임패드 버튼·어깨버튼 조합(LB+A/B/X/Y)·L-스틱/십자키 이동 방식 및 감도(데드존) 커스터마이징 지원"]},{version:"v0.2.1",date:"2026. 11. 25.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"이전 업데이트",downloads:[],highlights:["전 플랫폼 화면 비율·반응형 전면 개선: 모바일 세로 전용 하단 터치 컨트롤 덱, Android APK/모바일 가로(390~430px 높이) 2열 타이틀·풀스크린 매치 최적화","코인토스·작전선택·일시정지·경기종료 팝업 및 스코어보드/하단 스킬바 모바일 잘림·줄바꿈 오류 완전 해결","Windows/macOS 데스크톱 앱 화면 해상도 자동 맞춤(workAreaSize 기준) 및 홈페이지 최신 버전 단일 다운로드 정리"]},{version:"v0.2.0",date:"2026. 11. 25.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"이전 업데이트",downloads:[],highlights:["스토리 캠페인 완전판 15챕터 확장(조쿠토·타이요·아미노·쿄신·반도·와세다 EX 추가) & 챕터별 ★3 마스터리(총 ★45)","클러치 명승부 시나리오 12종(S/A/B 랭크 평가) + 매일 시드가 바뀌는 일일 전술 챌린지 & 연속 출석 스트릭","엔드게임 로그라이크 [2,000km 데스마치 서바이벌]: 42팀 연전, 매 5스테이지 보스, 컨디션 이월 & 3택1 보급 특전 8종","106종 필살기 수집 도감(경기 발동 시 자동 등록) + 전체 업적 30종 + 감독 커리어 심화(1:1 비기 전수 멘토링·인박스 이벤트 15종 추가·영구결번 명예의 전당·유스 월드컵 올스타 초청전)"]},{version:"v0.1.5",date:"2026. 11. 25.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"이전 업데이트",downloads:[],highlights:["Windows/macOS/Android/Web 전 빌드 내장 실시간 업데이트 확인(UpdateChecker): 타이틀 진입 시 자동 확인 + [업데이트 확인] 메뉴 1클릭 수동 확인","새 버전 출시 시 상단 알림 배너와 OS별 맞춤 설치 파일(DMG/EXE/APK) 직접 다운로드 연결 지원","macOS/Windows 앱 상단 메뉴바(도움말 → 업데이트 확인...) 네이티브 업데이트 체크 다이얼로그 추가"]},{version:"v0.1.4",date:"2026. 11. 25.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"이전 업데이트",downloads:[],highlights:["리턴 플레이(킥오프·온사이드·펀트·인터셉트·펌블) 1st & 10 보장, 엔드존 인터셉트 터치백, Q1/Q3 0초 득점 후 킥오프 등 미식축구 룰 6건 정교화","커버 3·커버 4·존 블리츠 존 뎁스 보정, 포켓 패스러시 3.2초 점진 붕괴, 플리 플리커·크라이스트 크로스·플레이액션 AI 동작 개선","감독 모드(COACH_SIM) 키보드 Z/X/C/V·Q 필살기 활성화 및 킥오프 버튼 2-탭/홀드 차징 조작감 개선"]},{version:"v0.1.3",date:"2026. 11. 25.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"이전 업데이트",downloads:[],highlights:["원작 아이실드 21·NFL 실전 공격·트릭 전술 9종(플리 플리커·훅 앤 래더·데빌 드래곤플라이·크라이스트 크로스·헤일 데빌 메리 등)과 수비 전술 6종(커버 3·커버 4·존 블리츠·오죠 더블 A·에이스 스파이·범프 앤 런) 추가","프리-스냅 제트 모션(M 키 / 화면 버튼)으로 스냅 전 수비 맨투맨·존 판독 지원","작전판 카테고리 필터 탭(전체/런/패스/트릭·특수, 수비 탭) UI 개편"]},{version:"v0.1.2",date:"2026. 11. 25.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"이전 업데이트",downloads:[],highlights:["실제 4.2초 대시 감각에 맞춰 기본 이동·패스 전개 속도를 전반적으로 하향 및 밸런스 재조정 (0.78x)","필살기 카테고리별 고유 동작·VFX 분리 (데빌 4 디멘션 백스텝 후 전방 컷백, 패스·에어리얼·라인맨·차지·블리츠 구분)","아군·상대 AI 모두 상황 판단에 따라 컨텍스트 필살기를 능동 발동하고 웹 포털 내 즉시 플레이(./play/) 지원"]},{version:"v0.1.1",date:"2026. 11. 25.",isLatest:!1,platform:"Win .exe · macOS .dmg · Android .apk · Web",sizeText:"EXE 130 MB / APK 18 MB",downloads:[],highlights:["대원씨아이 정발판 기준 필살기 명칭 교정 (데빌 4 디멘션, 제왕의 차지, 무중력 런, 스파이더 포이즌)","KBO 다이아고딕 Bold & Paperlogy Bold 오프라인 폰트 내장 및 이탤릭 컷인 타이틀 업그레이드","Windows x64(Setup/Portable .exe) 및 Android 가로 모드 터치(.apk) 멀티 플랫폼 패키징 추가"]},{version:"v0.1.0",date:"2026. 11. 24.",isLatest:!1,platform:"macOS ARM64 DMG",sizeText:"130 MB",downloads:[],highlights:["Electron 45 + 커스텀 es21:// 프로토콜 기반 첫 macOS 설치용 DMG 패키지 출시","세나 #21 도트 리터칭 앱 아이콘, 오리지널 BGM·효과음, 원작 스토리 9챕터 수록"]}],fe=[{question:'캐릭터별 "전술 이해도(Football IQ)"와 감독 지휘(AI) 모드는 어떻게 작동하나요?',answer:"모든 선수에게 천재 지략가·야생 본능형·노련한 실전파·실전 성장형·단세포 직진형·풋볼 초짜 6성향 전술 이해도가 부여되어, 경기 중 트릭/펌프페이크 간파·헛걸음, 예측 추격 각도, 빈 공간 옵션 루트, 기습 블리츠 차단이 캐릭터답게 달라집니다. 스토리 진행이나 [스쿼드 · 트레이닝 → 전술 미팅] 훈련으로 이해도를 직접 육성할 수 있으며, 경기 상단 [감독 지휘 (AI)] 토글을 켜면 전 포지션을 AI에게 맡기고 플레이콜에만 집중할 수도 있습니다."},{question:"배경음악(BGM) 변경이나 애니메이션 OST · 유튜브 음악 재생은 어떻게 하나요?",answer:"별도 설정 없이도 게임 실행 순간부터 타이틀·스토리 챕터·일반전(Breakthrough)·라이벌전(BLAZE LINE)·데스마치(Dang Dang)·결승전(불꽃의 러닝백)·승리(Run to Win!) 등 경기 상황에 맞춰 애니메이션 OST 12선이 알아서 자동 재생·전환됩니다. [환경 설정 → 오디오]에 원하는 유튜브 링크를 등록해 두면 다음 실행부터도 자동으로 내 BGM 목록이 순환 재생되며, 오프라인 내장 록 BGM 9곡으로도 언제든 전환할 수 있습니다."},{question:"공격할 때와 수비할 때 조작키가 어떻게 다른가요?",answer:"왼손 5키(Q·E·A·S·D)와 방향키만으로 공수 모두 똑같이 조작합니다! [Q]=캐릭터·타겟 즉시 변경(공격 스냅 전 QB→세나→몬타→쿠리타 순환 / 수비 최단거리 선수 전환), [A]=추천 필살기(프리스냅 반전) + [A+←↑→↓]=비기 1~4번 발동, [E]=달리기(홀드) + E 누른 채 [S]=로빙패스·볼보호·하드카운트 / [D]=전력 다이브·태클·공버리기·타임아웃 / [Q]=라인맨(OL·DL) 전환 / [A]=오더블, [S]=스냅·패스·백토스·패스요청(수비 보조전환), [D]=돌파·점프캐치·페이크(수비 태클·점프인터셉트·헛! 점프)."},{question:'macOS에서 "손상된 앱" 또는 확인되지 않은 개발자 경고가 뜰 때',answer:"개인 빌드(Ad-hoc 서명)로 배포되어 Apple 공증 전에는 보안 경고가 뜰 수 있습니다. Applications 폴더로 옮긴 뒤 터미널에서 아래 명령어를 한 번 실행하면 바로 열립니다."},{question:"Windows SmartScreen 또는 Android 앱 설치 경고가 뜰 때",answer:'개인 개발자 서명 빌드이므로 Windows에서는 "추가 정보 → 실행", Android에서는 설정에서 "출처를 알 수 없는 앱 설치 허용"을 켜면 정상적으로 설치 및 실행됩니다.'}];function v(e,t=18,n=""){return`<svg class="icon ${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}</svg>`}const d={home:(e=18)=>v('<path d="M3 10.5L12 3l9 7.5" /><path d="M5 9.5V20h14V9.5" /><path d="M9.5 20v-6h5v6" />',e),playSolid:(e=16)=>`<svg class="icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="6,4 20,12 6,20" /></svg>`,film:(e=18)=>v('<rect x="2" y="4" width="20" height="16" rx="2.5" /><path d="M7 4v16" /><path d="M17 4v16" /><path d="M2 12h20" /><path d="M2 8h5" /><path d="M2 16h5" /><path d="M17 8h5" /><path d="M17 16h5" />',e),grid:(e=18)=>v('<rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />',e),download:(e=18)=>v('<path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />',e),sun:(e=17)=>v('<circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="M4.93 4.93l1.41 1.41" /><path d="M17.66 17.66l1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="M6.34 17.66l-1.41 1.41" /><path d="M19.07 4.93l-1.41 1.41" />',e),moon:(e=17)=>v('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />',e),monitor:(e=18)=>v('<rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />',e),smartphone:(e=18)=>v('<rect x="6" y="2" width="12" height="20" rx="2" /><path d="M12 18h.01" />',e),globe:(e=18)=>v('<circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />',e),cube:(e=18)=>v('<path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" /><path d="M12 22V12" /><path d="M20.5 7L12 12 3.5 7" />',e),external:(e=15)=>v('<path d="M15 3h6v6" /><path d="M10 14L21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />',e),close:(e=18)=>v('<path d="M18 6L6 18" /><path d="M6 6l12 12" />',e),arrowLeft:(e=18)=>v('<path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />',e),arrowRight:(e=18)=>v('<path d="M5 12h14" /><path d="M12 5l7 7-7 7" />',e),chevronDown:(e=16)=>v('<path d="M6 9l6 6 6-6" />',e),copy:(e=15)=>v('<rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />',e),check:(e=15)=>v('<path d="M20 6L9 17l-5-5" />',e),menu:(e=20)=>v('<path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" />',e),messageSquare:(e=18)=>v('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />',e),gamepad:(e=18)=>v('<rect x="2" y="6" width="20" height="12" rx="4" /><path d="M6 12h4" /><path d="M8 10v4" /><circle cx="15.5" cy="11" r="0.9" fill="currentColor" /><circle cx="18" cy="13" r="0.9" fill="currentColor" />',e),refresh:(e=15)=>v('<path d="M23 4v6h-6" /><path d="M1 20v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" /><path d="M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />',e)},ae="darkrabbitkr-oss/eyeshield21",ye=`https://api.github.com/repos/${ae}/issues?state=all&per_page=30`,ke=`https://github.com/${ae}/issues/new`,J=`https://github.com/${ae}/issues`,Ee="https://youtu.be/pjWFmug5nX4",ne="dr-es21-board-cache-v1",Me=6e4,q={notice:{label:"공지",badgeClass:"board-badge-notice"},bug:{label:"버그 제보",badgeClass:"board-badge-bug",prefix:"[버그]",titlePlaceholder:"예: 4쿼터 종료 직전 패스 후 진행이 멈춤",bodyPlaceholder:"발생한 상황, 재현 순서, 사용 중인 기기/환경을 자세히 적어주세요."},typo:{label:"오타 · 고증",badgeClass:"board-badge-typo",prefix:"[오타/고증]",titlePlaceholder:"예: 원작 필살기 이름 또는 팀 로스터 오타 제보",bodyPlaceholder:"오타가 보이는 화면 위치와 올바른 표기를 알려주세요."},feature:{label:"업데이트 희망",badgeClass:"board-badge-feature",prefix:"[업데이트 희망]",titlePlaceholder:"예: 새 작전 플레이 추가 또는 편의 기능 제안",bodyPlaceholder:"추가되길 원하는 기능, 전술, 밸런스 의견을 적어주세요."},feedback:{label:"자유 의견",badgeClass:"board-badge-feedback",prefix:"[의견]",titlePlaceholder:"예: 플레이 소감 및 전체적인 의견",bodyPlaceholder:"게임을 즐기며 느낀 점이나 응원의 메시지를 남겨주세요."}},we=["bug","typo","feature","feedback"];function O(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function de(e){const t=e.trim();return t?O(t).replace(/\r?\n/g,"<br />"):'<span class="board-empty-inline">작성된 본문 내용이 없습니다.</span>'}function oe(e){return e==="darkrabbitkr-oss"?"Darkrabbit (개발자)":e||"익명"}function ce(e){if(!e)return"";const t=/^(\d{4})-(\d{2})-(\d{2})/.exec(e);return t?`${t[1]}. ${t[2]}. ${t[3]}.`:e.slice(0,10)}function xe(e){const t=new Set((Array.isArray(e)?e:[]).map(n=>String((n==null?void 0:n.name)??"").trim().toLowerCase()).filter(Boolean));return t.has("notice")?"notice":t.has("bug")?"bug":t.has("typo")?"typo":t.has("feature")?"feature":"feedback"}function he(e){return[...e].sort((t,n)=>{const h=t.category==="notice"?0:1,l=n.category==="notice"?0:1;if(h!==l)return h-l;const r=t.state==="open"?0:1,p=n.state==="open"?0:1;return r!==p?r-p:n.number-t.number})}async function Te(e=!1){if(!e)try{const r=sessionStorage.getItem(ne);if(r){const p=JSON.parse(r);if(p&&typeof p.fetchedAt=="number"&&Array.isArray(p.issues)&&Date.now()-p.fetchedAt<Me)return he(p.issues)}}catch{}const t=await fetch(ye,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)throw new Error(`GitHub Issues API HTTP ${t.status}`);const n=await t.json(),h=(Array.isArray(n)?n:[]).filter(r=>!r.pull_request&&typeof r.number=="number").map(r=>{var p;return{id:Number(r.id??0),number:Number(r.number??0),title:String(r.title??""),body:String(r.body??""),state:r.state==="closed"?"closed":"open",category:xe(r.labels),author:String(((p=r.user)==null?void 0:p.login)??""),createdAt:String(r.created_at??""),comments:Number(r.comments??0)||0,commentsUrl:String(r.comments_url??""),htmlUrl:String(r.html_url??J)}}),l=he(h);try{sessionStorage.setItem(ne,JSON.stringify({fetchedAt:Date.now(),issues:l}))}catch{}return l}async function Se(e){if(!e)return[];const t=await fetch(e,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)throw new Error(`Comments HTTP ${t.status}`);const n=await t.json();return(Array.isArray(n)?n:[]).map(h=>{var l;return{id:Number(h.id??0),author:String(((l=h.user)==null?void 0:l.login)??""),createdAt:String(h.created_at??""),body:String(h.body??"")}})}function Ae(e){const t=q[e.category],n=e.title.trim(),h=n.startsWith("[")||!t.prefix?n:`${t.prefix} ${n}`,l=e.body.trim(),r=[`- 카테고리: ${t.label}`,`- 실행 환경: ${e.platform}`,`- 게임 버전: ${e.latestVersion}`,"","### 상세 내용",l||"(내용을 입력해 주세요)"].join(`
`),p=new URLSearchParams({labels:e.category,title:h,body:r});return`${ke}?${p.toString()}`}function Le(e,t){let n=[],h=!0,l=null,r="all",p="bug";const T=new Set,B=new Map,b=new Set,m=new Map;e.innerHTML=`
    <div class="section-header">
      <div>
        <h2 class="section-title">제보 · 의견 게시판</h2>
        <p class="section-desc">버그·오타 제보, 원작 고증 수정, 업데이트 희망 사항을 자유롭게 남겨주세요. 등록된 글과 반영 상태가 실시간으로 표시됩니다.</p>
      </div>
      <div class="board-header-actions">
        <button class="btn-chip btn-chip-secondary" id="board-refresh-btn" type="button">
          ${d.refresh(14)}
          <span>새로고침</span>
        </button>
        <a class="btn-chip btn-chip-secondary" href="${J}" target="_blank" rel="noopener noreferrer">
          <span>GitHub 전체 보기</span>
          ${d.external(13)}
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
              ${we.map((c,s)=>`
                  <button
                    type="button"
                    class="board-cat-btn ${s===0?"is-active":""}"
                    data-cat="${c}"
                    role="radio"
                    aria-checked="${s===0?"true":"false"}"
                  >
                    ${q[c].label}
                  </button>
                `).join("")}
            </div>
          </div>

          <div class="board-field">
            <label class="board-label" for="board-platform">실행 환경 <span class="tabular">(${O(t)})</span></label>
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
              placeholder="${O(q.bug.titlePlaceholder)}"
            />
          </div>

          <div class="board-field">
            <label class="board-label" for="board-body">상세 내용</label>
            <textarea
              id="board-body"
              class="board-input board-textarea"
              rows="5"
              maxlength="2000"
              placeholder="${O(q.bug.bodyPlaceholder)}"
            ></textarea>
          </div>

          <p class="board-form-error" id="board-form-error" role="alert" hidden></p>

          <button class="btn-primary board-submit-btn" type="submit">
            ${d.messageSquare(16)}
            <span>GitHub에 글 등록하기</span>
            ${d.external(14)}
          </button>
        </form>

        <div class="board-alt-box">
          <strong>GitHub 계정이 없으신가요?</strong>
          <p>로그인 없이 공식 유튜브 영상 댓글로 제보하셔도 확인 후 게임에 반영합니다.</p>
          <a class="btn-chip btn-chip-secondary" href="${Ee}" target="_blank" rel="noopener noreferrer">
            <span>유튜브 댓글로 제보하기 (@Darkrabbit-kr)</span>
            ${d.external(13)}
          </a>
        </div>
      </aside>
    </div>
  `;const u=e.querySelector("#board-filters"),_=e.querySelector("#board-status-banner"),P=e.querySelector("#board-post-list"),S=e.querySelector("#board-refresh-btn"),L=e.querySelector("#board-composer-form"),G=e.querySelector("#board-platform"),k=e.querySelector("#board-title"),K=e.querySelector("#board-body"),C=e.querySelector("#board-form-error"),$=[...e.querySelectorAll("#board-composer-cats .board-cat-btn")];function R(c){return c==="all"?n.length:n.filter(s=>s.category===c).length}function E(){if(!u)return;const c=[{key:"all",label:"전체"},{key:"bug",label:"버그 제보"},{key:"typo",label:"오타 · 고증"},{key:"feature",label:"업데이트 희망"},{key:"feedback",label:"자유 의견"}];u.innerHTML=c.map(s=>`
          <button
            type="button"
            class="filter-btn ${r===s.key?"is-active":""}"
            data-board-filter="${s.key}"
          >
            ${s.label} <span class="tabular">${R(s.key)}</span>
          </button>
        `).join("")}function A(c){if(c.comments===0)return"";if(b.has(c.number))return'<div class="board-comments-state">댓글을 불러오는 중...</div>';const s=m.get(c.number);if(s)return`<div class="board-comments-state">댓글을 불러오지 못했습니다 (${O(s)}). GitHub에서 직접 확인해 주세요.</div>`;const g=B.get(c.number);return!g||g.length===0?"":`
      <div class="board-comments-list">
        <div class="board-comments-heading tabular">댓글 ${g.length}</div>
        ${g.map(f=>`
              <div class="board-comment-item">
                <div class="board-comment-meta">
                  <strong>${O(oe(f.author))}</strong>
                  <span class="tabular">${O(ce(f.createdAt))}</span>
                </div>
                <div class="board-comment-body">${de(f.body)}</div>
              </div>
            `).join("")}
      </div>
    `}function W(){if(!P||!_)return;if(l?(_.hidden=!1,_.innerHTML=`
        <span>게시글 목록을 불러오는 중 일시적인 오류가 발생했습니다 (${O(l)}).</span>
        <a href="${J}" target="_blank" rel="noopener noreferrer">GitHub에서 직접 보기</a>
      `):(_.hidden=!0,_.innerHTML=""),h){P.innerHTML=`
        <div class="board-empty-card">
          <span>게시판 글을 불러오는 중입니다...</span>
        </div>
      `;return}const c=r==="all"?n:n.filter(s=>s.category===r);if(c.length===0){P.innerHTML=`
        <div class="board-empty-card">
          <strong>${r==="all"?"등록된 글이 아직 없습니다.":"선택한 카테고리에 등록된 글이 아직 없습니다."}</strong>
          <p>오른쪽 작성 양식에서 첫 번째 제보나 의견을 남겨보세요!</p>
        </div>
      `;return}P.innerHTML=c.map(s=>{const g=q[s.category],f=T.has(s.number),D=s.category==="notice"?s.state==="closed"?"보관 공지":"필독 공지":s.state==="closed"?"반영 완료":"접수 중",U=s.state==="closed"?"board-state-closed":s.category==="notice"?"board-state-notice":"board-state-open";return`
          <article class="board-post ${s.category==="notice"?"is-notice":""}" data-issue-number="${s.number}">
            <button
              type="button"
              class="board-post-head"
              data-toggle-issue="${s.number}"
              aria-expanded="${f?"true":"false"}"
            >
              <div class="board-post-main">
                <div class="board-post-badges">
                  <span class="board-badge ${g.badgeClass}">${g.label}</span>
                  <span class="board-state ${U}">${D}</span>
                  <span class="board-issue-num tabular">#${s.number}</span>
                </div>
                <h3 class="board-post-title">${O(s.title)}</h3>
                <div class="board-post-meta">
                  <span>${O(oe(s.author))}</span>
                  <span aria-hidden="true">·</span>
                  <span class="tabular">${O(ce(s.createdAt))}</span>
                  <span aria-hidden="true">·</span>
                  <span class="tabular">댓글 ${s.comments}</span>
                </div>
              </div>
              <span class="board-chevron ${f?"is-open":""}">${d.chevronDown(16)}</span>
            </button>
            <div class="board-post-body" ${f?"":"hidden"}>
              <div class="board-post-content">${de(s.body)}</div>
              ${A(s)}
              <div class="board-post-actions">
                <a class="btn-chip btn-chip-secondary" href="${O(s.htmlUrl)}" target="_blank" rel="noopener noreferrer">
                  <span>GitHub에서 댓글 달기</span>
                  ${d.external(13)}
                </a>
              </div>
            </div>
          </article>
        `}).join("")}async function I(c){if(!(c.comments===0||B.has(c.number)||b.has(c.number))){b.add(c.number),m.delete(c.number),W();try{const s=await Se(c.commentsUrl);B.set(c.number,s)}catch(s){m.set(c.number,s instanceof Error?s.message:"요청 오류")}finally{b.delete(c.number),W()}}}async function Q(c=!1){h=!0,l=null,S&&(S.disabled=!0),E(),W();try{n=await Te(c)}catch(s){l=s instanceof Error?s.message:"네트워크 오류",n=[]}finally{h=!1,S&&(S.disabled=!1),E(),W()}}u==null||u.addEventListener("click",c=>{const s=c.target.closest("[data-board-filter]");s&&(r=s.dataset.boardFilter||"all",E(),W())}),P==null||P.addEventListener("click",c=>{const s=c.target.closest("[data-toggle-issue]");if(!s)return;const g=Number(s.dataset.toggleIssue);if(Number.isFinite(g))if(T.has(g))T.delete(g),W();else{T.add(g),W();const f=n.find(D=>D.number===g);f&&I(f)}}),S==null||S.addEventListener("click",()=>{B.clear(),Q(!0)}),$.forEach(c=>{c.addEventListener("click",()=>{const s=c.dataset.cat;if(!s)return;p=s,$.forEach(f=>{const D=f===c;f.classList.toggle("is-active",D),f.setAttribute("aria-checked",D?"true":"false")});const g=q[s];k&&g.titlePlaceholder&&(k.placeholder=g.titlePlaceholder),K&&g.bodyPlaceholder&&(K.placeholder=g.bodyPlaceholder)})}),L==null||L.addEventListener("submit",c=>{c.preventDefault();const s=(k==null?void 0:k.value.trim())??"",g=(K==null?void 0:K.value.trim())??"",f=(G==null?void 0:G.value)??"Web (브라우저)";if(!s){C&&(C.hidden=!1,C.textContent="제목을 한 줄 이상 입력해 주세요."),k==null||k.focus();return}C&&(C.hidden=!0,C.textContent="");const D=Ae({category:p,platform:f,latestVersion:t,title:s,body:g});L.dataset.lastIssueUrl=D,window.open(D,"_blank","noopener,noreferrer")}),Q(!1)}const z="dr-owner-stats",pe="dr-es21-dl-cache-v2",$e=6e4,Be="https://api.github.com/repos/darkrabbitkr-oss/eyeshield21/releases?per_page=100";function X(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Pe(e){const t=e.toLowerCase();return t.includes("-setup-")&&t.endsWith(".exe")?"Win 설치형":t.includes("-portable-")&&t.endsWith(".exe")?"Win 포터블":t.endsWith(".dmg")?"macOS DMG":t.endsWith(".apk")?"Android APK":e}function We(){try{const e=new URL(window.location.href),t=e.searchParams.get("stats");return t==="1"||t==="true"?(localStorage.setItem(z,"1"),e.searchParams.delete("stats"),window.history.replaceState({},"",e.pathname+e.search+e.hash)):(t==="0"||t==="false")&&(localStorage.removeItem(z),e.searchParams.delete("stats"),window.history.replaceState({},"",e.pathname+e.search+e.hash)),localStorage.getItem(z)==="1"}catch{return!1}}function be(e){try{e?localStorage.setItem(z,"1"):localStorage.removeItem(z)}catch{}}function me(){try{return localStorage.getItem(z)==="1"}catch{return!1}}async function De(e=!1){if(!e)try{const m=sessionStorage.getItem(pe);if(m){const u=JSON.parse(m);if(u&&typeof u.fetchedAt=="number"&&Date.now()-u.fetchedAt<$e)return u}}catch{}const t=await fetch(Be,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)throw new Error(`GitHub API HTTP ${t.status}`);const n=await t.json(),h={winSetup:0,winPortable:0,macDmg:0,androidApk:0,other:0},l={winSetup:0,winPortable:0,macDmg:0,androidApk:0,other:0};let r=0,p=0,T=0;const B=(Array.isArray(n)?n:[]).map(m=>{const u=String(m.tag_name??""),_=m.published_at?m.published_at.slice(0,10):"",P=Array.isArray(m.assets)?m.assets:[],S=P.map($=>Number($.download_count??0)||0),L=S.length>=2?Math.min(...S):0;let G=0,k=0,K=0;const C=P.map($=>{const R=String($.name??""),E=Number($.download_count??0)||0,A=Math.max(0,E-L),W=E-A;G+=E,k+=A,K+=W,r+=E,p+=A,T+=W;const I=R.toLowerCase();return I.includes("-setup-")&&I.endsWith(".exe")?(h.winSetup+=E,l.winSetup+=A):I.includes("-portable-")&&I.endsWith(".exe")?(h.winPortable+=E,l.winPortable+=A):I.endsWith(".dmg")?(h.macDmg+=E,l.macDmg+=A):I.endsWith(".apk")?(h.androidApk+=E,l.androidApk+=A):(h.other+=E,l.other+=A),{label:Pe(R),name:R,count:E,humanCount:A}});return{tag:u,publishedAt:_,total:G,humanTotal:k,botTotal:K,botSweepPerAsset:L,assets:C}}),b={total:r,humanTotal:p,botTotal:T,byPlatform:h,humanByPlatform:l,releases:B,fetchedAt:Date.now()};try{sessionStorage.setItem(pe,JSON.stringify(b))}catch{}return b}function Oe(e){try{return new Date(e).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}catch{return""}}async function ee(e,t,n,h=!1){var l,r,p,T,B;e.hidden=!1,e.innerHTML=`
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
  `,(l=e.querySelector("#owner-stats-hide"))==null||l.addEventListener("click",n);try{const b=await De(h);if(!me())return;t&&(t.textContent=`실유저 다운로드 ${b.humanTotal.toLocaleString("ko-KR")}회 (원본 ${b.total.toLocaleString("ko-KR")})`,t.hidden=!1),e.innerHTML=`
      <div class="owner-stats-head">
        <div>
          <span class="pill pill-gold">OWNER STATS · 본인 브라우저 전용 (Alt+Shift+D)</span>
          <h3 class="owner-stats-title">실시간 누적 다운로드 현황 (일괄 봇 스캔 차감)</h3>
          <p class="owner-stats-meta">GitHub Releases 실측 · 4개 OS 일괄 크롤링(min 공통분 -${b.botTotal.toLocaleString("ko-KR")}회) 제외 실유저 추정 · 갱신 ${X(Oe(b.fetchedAt))}</p>
        </div>
        <div class="owner-stats-actions">
          <button class="btn-chip" id="owner-stats-refresh" type="button">${d.download(13)}<span>새로고침</span></button>
          <button class="btn-chip btn-chip-secondary" id="owner-stats-hide" type="button">숨기기</button>
        </div>
      </div>

      <div class="owner-kpi-grid">
        <div class="owner-kpi-cell owner-kpi-total">
          <span class="spec-label">실유저 추정 누적</span>
          <strong class="owner-kpi-val tabular">${b.humanTotal.toLocaleString("ko-KR")}회</strong>
          <span class="owner-kpi-sub tabular">원본 ${b.total.toLocaleString("ko-KR")}회 · 봇 -${b.botTotal.toLocaleString("ko-KR")}</span>
        </div>
        <div class="owner-kpi-cell">
          <span class="spec-label">Win 설치형</span>
          <strong class="owner-kpi-val tabular">${b.humanByPlatform.winSetup.toLocaleString("ko-KR")}</strong>
          <span class="owner-kpi-sub tabular">원본 ${b.byPlatform.winSetup.toLocaleString("ko-KR")}</span>
        </div>
        <div class="owner-kpi-cell">
          <span class="spec-label">Win 포터블</span>
          <strong class="owner-kpi-val tabular">${b.humanByPlatform.winPortable.toLocaleString("ko-KR")}</strong>
          <span class="owner-kpi-sub tabular">원본 ${b.byPlatform.winPortable.toLocaleString("ko-KR")}</span>
        </div>
        <div class="owner-kpi-cell">
          <span class="spec-label">macOS DMG</span>
          <strong class="owner-kpi-val tabular">${b.humanByPlatform.macDmg.toLocaleString("ko-KR")}</strong>
          <span class="owner-kpi-sub tabular">원본 ${b.byPlatform.macDmg.toLocaleString("ko-KR")}</span>
        </div>
        <div class="owner-kpi-cell">
          <span class="spec-label">Android APK</span>
          <strong class="owner-kpi-val tabular">${b.humanByPlatform.androidApk.toLocaleString("ko-KR")}</strong>
          <span class="owner-kpi-sub tabular">원본 ${b.byPlatform.androidApk.toLocaleString("ko-KR")}</span>
        </div>
      </div>

      <div class="owner-release-breakdown">
        ${b.releases.map(m=>`
          <div class="owner-rel-row${m.humanTotal>0?" owner-rel-row-active":""}">
            <div class="owner-rel-head">
              <strong class="tabular">${X(m.tag)}</strong>
              <span class="owner-rel-total${m.humanTotal===0?" owner-rel-total-zero":""} tabular">실유저 ${m.humanTotal.toLocaleString("ko-KR")}회</span>
              <span class="owner-rel-raw tabular">(원본 ${m.total.toLocaleString("ko-KR")} · 봇 -${m.botTotal.toLocaleString("ko-KR")})</span>
            </div>
            <div class="owner-rel-chips">
              ${m.assets.map(u=>`<span class="owner-asset-chip${u.humanCount>0?" owner-asset-chip-human":""} tabular" title="${X(u.name)} (GitHub 원본 ${u.count}회, 일괄 봇스캔 -${m.botSweepPerAsset}회)">${X(u.label)} <b>${u.humanCount.toLocaleString("ko-KR")}</b><small>(원본 ${u.count.toLocaleString("ko-KR")})</small></span>`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `,(r=e.querySelector("#owner-stats-refresh"))==null||r.addEventListener("click",()=>{ee(e,t,n,!0)}),(p=e.querySelector("#owner-stats-hide"))==null||p.addEventListener("click",n)}catch(b){const m=b instanceof Error?b.message:"요청 실패";e.innerHTML=`
      <div class="owner-stats-head">
        <div>
          <span class="pill pill-gold">OWNER STATS · 본인 브라우저 전용</span>
          <h3 class="owner-stats-title">다운로드 통계를 불러오지 못했습니다</h3>
          <p class="owner-stats-meta">${X(m)} (잠시 후 새로고침해 주세요)</p>
        </div>
        <div class="owner-stats-actions">
          <button class="btn-chip" id="owner-stats-refresh" type="button">새로고침</button>
          <button class="btn-chip btn-chip-secondary" id="owner-stats-hide" type="button">숨기기</button>
        </div>
      </div>
    `,(T=e.querySelector("#owner-stats-refresh"))==null||T.addEventListener("click",()=>{ee(e,t,n,!0)}),(B=e.querySelector("#owner-stats-hide"))==null||B.addEventListener("click",n)}}const ge="es21-portal-theme";function Ie(){try{const e=localStorage.getItem(ge);if(e==="light"||e==="dark")return e}catch{}return"dark"}function ue(e,t,n=!1){const h=new URLSearchParams({rel:"0",playsinline:"1"});return n&&h.set("autoplay","1"),`<iframe src="https://www.youtube.com/embed/${e}?${h.toString()}" title="${t}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}function _e(e){return e.youtubeId?e.aspect==="9/16"?`https://www.youtube.com/shorts/${e.youtubeId}`:`https://youtu.be/${e.youtubeId}`:""}function Ge(e){return e.youtubeId?ue(e.youtubeId,e.title,!1):`<video controls preload="metadata" poster="${e.poster}" src="${e.localSrc}"></video>`}function Ke(e){return e==="windows"||e==="macos"?d.monitor(15):e==="android"?d.smartphone(15):e==="web"?d.globe(15):d.cube(15)}function Ce(){const e=typeof navigator<"u"?navigator.userAgent:"";return/Android/i.test(e)?{label:"Android APK 받기",href:y.apkDirectUrl,filename:y.apkFilename}:/Windows|Win64|WOW64/i.test(e)?{label:"Windows EXE 받기",href:y.winSetupUrl,filename:y.winSetupFilename}:{label:"macOS DMG 받기",href:y.dmgDirectUrl,filename:y.dmgFilename}}function Z(e,t,n={}){const h=n.secondary?"btn-chip btn-chip-secondary":"btn-chip";if(n.downloadFilename)return`<a class="${h}" href="${t}" download="${n.downloadFilename}">${d.download(13)}<span>${e}</span></a>`;const l=n.external?'target="_blank" rel="noopener noreferrer"':"";return`<a class="${h}" href="${t}" ${l}><span>${e}</span>${d.external(13)}</a>`}function Re(){var Q,c,s,g,f,D,U,te,se,ie,le;const e=document.getElementById("app");if(!e)return;let t=Ie(),n=j[0].id,h="all",l=null,r=!1,p=!1;const T=Ce();document.documentElement.setAttribute("data-theme",t),e.innerHTML=`
    <header class="mobile-bar">
      <a class="mobile-brand" href="#discover">
        <img src="./media/icon.png" alt="아이실드 21 아이콘" />
        <span>${y.shortTitle}</span>
      </a>
      <div class="mobile-actions">
        <button class="icon-btn" id="mobile-theme-btn" type="button" aria-label="테마 전환">
          ${t==="dark"?d.sun(17):d.moon(17)}
        </button>
        <button class="icon-btn" id="mobile-menu-btn" type="button" aria-label="메뉴 열기">
          ${d.menu(19)}
        </button>
      </div>
    </header>

    <div class="portal-shell">
      <aside class="sidebar" id="portal-sidebar" aria-label="주요 탐색">
        <a class="brand-lockup" href="#discover">
          <img class="brand-icon" src="./media/icon.png" alt="아이실드 21 앱 아이콘" />
          <div class="brand-copy">
            <span class="brand-name">${y.shortTitle}</span>
            <span class="brand-tag">택티컬 풋볼 매니저</span>
          </div>
        </a>

        <nav class="nav-group" id="sidebar-nav">
          <a class="nav-link is-active" href="#discover" data-nav="discover">${d.home(17)}<span>홈 · 소개</span></a>
          <a class="nav-link" href="#systems" data-nav="systems">${d.cube(17)}<span>핵심 시스템</span></a>
          <a class="nav-link" href="#controls" data-nav="controls">${d.gamepad(17)}<span>조작 가이드</span></a>
          <a class="nav-link" href="#videos" data-nav="videos">${d.film(17)}<span>영상관</span></a>
          <a class="nav-link" href="#editions" data-nav="editions">${d.monitor(17)}<span>플랫폼</span></a>
          <a class="nav-link" href="#preview" data-nav="preview">${d.grid(17)}<span>미리보기</span></a>
          <a class="nav-link" href="#downloads" data-nav="downloads">${d.download(17)}<span>다운로드</span></a>
          <a class="nav-link" href="#board" data-nav="board">${d.messageSquare(17)}<span>제보 · 게시판</span></a>
        </nav>

        <div class="sidebar-spacer"></div>

        <div class="sidebar-actions">
          <a class="repo-link" href="https://darkrabbitkr-oss.github.io/">
            <span class="theme-btn-left">${d.globe(15)}<span>Darkrabbit 게임 목록</span></span>
            ${d.arrowRight(14)}
          </a>
          <button class="theme-btn" id="theme-toggle-btn" type="button">
            <span class="theme-btn-left">
              <span id="theme-icon-slot">${t==="dark"?d.moon(16):d.sun(16)}</span>
              <span id="theme-label-slot">${t==="dark"?"다크 스타디움":"라이트 데이"}</span>
            </span>
            <span class="pill tabular">${y.latestVersion}</span>
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
              <h1 class="hero-title">${y.heroHeadline}</h1>
              <p class="hero-copy">${y.heroDescription}</p>
              <div class="hero-cta-row">
                <a class="btn-primary" href="./play/" target="_blank" rel="noopener noreferrer">
                  ${d.playSolid(14)}
                  <span>웹에서 바로 플레이</span>
                </a>
                <button class="btn-secondary" id="open-hero-trailer" type="button">
                  ${d.film(15)}
                  <span>소개 영상 · 00:31</span>
                </button>
                <a class="btn-secondary" href="#controls">
                  ${d.gamepad(16)}
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
                  <h2>${y.gameTitle}</h2>
                  <div class="app-meta-line">
                    <span class="pill pill-crimson tabular">${y.latestVersion}</span>
                    <span class="pill pill-gold tabular" id="owner-total-pill" hidden></span>
                    <span>실시간 미식축구 전술 팬게임 · 전술 이해도 6성향 AI · 정발 리마스터 112종 컷인</span>
                  </div>
                </div>
              </div>
              <a class="btn-primary" href="${T.href}" download="${T.filename}">
                ${d.download(16)}
                <span>${T.label}</span>
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
              <span>${y.latestVersion} 패치 내역</span>${d.arrowRight(13)}
            </a>
          </div>

          <div class="ctrl-pillar-grid">
            ${ve.map(a=>`
                <article class="ctrl-pillar-card">
                  <div class="ctrl-pillar-head">
                    <span class="${a.pillTone==="crimson"?"pill pill-crimson":a.pillTone==="gold"?"pill pill-gold":"pill"}">${a.pillLabel}</span>
                    <h3>${a.title}</h3>
                  </div>
                  <p>${a.description}</p>
                </article>
              `).join("")}
          </div>
        </section>

        <section id="controls" class="page-section">
          <div class="section-header">
            <div>
              <h2 class="section-title">초직관 5키 조작 가이드</h2>
              <p class="section-desc">복잡한 단축키 암기 없이 왼손 5키(Q · E · A · S · D)와 오른손 방향키만으로 공격·수비·필살기 4종을 모두 다룹니다.</p>
            </div>
            <a class="btn-chip" href="./play/" target="_blank" rel="noopener noreferrer">
              <span>웹에서 바로 체험</span>${d.external(13)}
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
                    <span>YouTube에서 보기</span>${d.external(13)}
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
              <div class="gatekeeper-code">${y.gatekeeperCmd}</div>
            </div>
            <button class="btn-copy" id="copy-gatekeeper-btn" type="button">
              <span id="copy-icon-slot">${d.copy(15)}</span>
              <span id="copy-label-slot">명령어 복사</span>
            </button>
          </div>

          <div class="faq-list" id="faq-list"></div>
        </section>

        <section id="board" class="page-section">
          <div id="feedback-board-root"></div>
        </section>

        <footer class="portal-footer">
          <span>${y.legalNotice}</span>
          <a href="#downloads">최신 빌드 ${y.latestVersion}</a>
        </footer>
      </main>
    </div>

    <div class="modal-backdrop" id="trailer-modal" hidden role="dialog" aria-modal="true" aria-labelledby="modal-trailer-title">
      <div class="modal-panel">
        <div class="modal-bar">
          <span class="modal-bar-title" id="modal-trailer-title">아이실드 21 공식 소개 영상 · 00:31</span>
          <button class="modal-close" id="close-trailer-modal" type="button" aria-label="영상 닫기">${d.close(18)}</button>
        </div>
        <div class="modal-video-wrap" id="modal-video-wrap"></div>
      </div>
    </div>

    <div class="modal-backdrop" id="lightbox-modal" hidden role="dialog" aria-modal="true" aria-labelledby="lightbox-title">
      <div class="modal-panel">
        <div class="modal-bar">
          <span class="modal-bar-title" id="lightbox-title">미리보기</span>
          <button class="modal-close" id="close-lightbox-modal" type="button" aria-label="미리보기 닫기">${d.close(18)}</button>
        </div>
        <div class="lightbox-stage">
          <img id="lightbox-img" src="./media/shot_cutin_d4d.jpg" alt="성야의 오의 · 데빌 4 디멘션" />
          <div class="lightbox-foot">
            <div>
              <div class="theater-caption-title" id="lightbox-cap-title"></div>
              <div class="theater-caption-sub" id="lightbox-cap-desc"></div>
            </div>
            <div class="lightbox-nav">
              <button class="lightbox-btn" id="lightbox-prev" type="button" aria-label="이전 이미지">${d.arrowLeft(17)}</button>
              <button class="lightbox-btn" id="lightbox-next" type="button" aria-label="다음 이미지">${d.arrowRight(17)}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;function B(){const a=j.find(x=>x.id===n)||j[0],o=document.getElementById("theater-viewport"),i=document.getElementById("theater-title"),M=document.getElementById("theater-sub"),w=document.getElementById("theater-badge"),H=document.getElementById("theater-yt-link"),N=document.getElementById("video-playlist");!o||!i||!M||!w||!N||(o.classList.toggle("is-vertical",a.aspect==="9/16"&&!a.youtubeId),o.innerHTML=Ge(a),i.textContent=a.title,M.textContent=a.subtitle,w.textContent=`${a.aspect} · ${a.duration}`,H&&(a.youtubeId?(H.href=_e(a),H.hidden=!1):H.hidden=!0),N.innerHTML=j.map(x=>`
      <button class="video-item ${x.id===a.id?"is-selected":""}" data-video-id="${x.id}" type="button">
        <div class="video-thumb-wrap">
          <img src="${x.poster}" alt="${x.title}" />
          <span class="video-dur-badge tabular">${x.duration}</span>
        </div>
        <div class="video-item-meta">
          <h3>${x.title}</h3>
          <p>${x.subtitle}</p>
        </div>
      </button>
    `).join("")+`
      <div class="playlist-note">
        <strong>개발 영상 업데이트:</strong> 실제 경기 플레이, 원작 필살기 컷인, 신규 빌드 프리뷰 영상이 순차적으로 추가됩니다.
      </div>
    `,N.querySelectorAll("[data-video-id]").forEach(x=>{x.addEventListener("click",()=>{const F=x.dataset.videoId;F&&F!==n&&(n=F,B())})}))}function b(){const a=document.getElementById("editions-grid");if(!a)return;const o=h==="all"?re:re.filter(i=>i.platformKey===h);a.innerHTML=o.map(i=>`
      <article class="edition-card">
        <div class="edition-media">
          <img src="${i.image}" alt="${i.title}" />
          <div class="edition-media-scrim"></div>
          <span class="edition-media-tag">${Ke(i.platformKey)}<span>${i.platformLabel} · ${i.version}</span></span>
        </div>
        <div class="edition-body">
          <h3>${i.title}</h3>
          <p>${i.summary}</p>
          <div class="edition-foot">
            <span class="edition-req">${i.requirement} · ${i.sizeText}</span>
            <div class="edition-actions">
              ${Z(i.actionLabel,i.actionHref,{downloadFilename:i.downloadFilename,external:i.external})}
              ${i.secondaryAction?Z(i.secondaryAction.label,i.secondaryAction.href,{downloadFilename:i.secondaryAction.downloadFilename,external:i.secondaryAction.external,secondary:!0}):""}
            </div>
          </div>
        </div>
      </article>
    `).join("")}function m(){const a=document.getElementById("preview-grid");a&&(a.innerHTML=V.map((o,i)=>`
      <button class="shot-card" type="button" data-shot-idx="${i}">
        <div class="shot-thumb">
          <img src="${o.image}" alt="${o.title}" loading="lazy" />
        </div>
        <div class="shot-meta">
          <h3>${o.title}</h3>
          <p>${o.caption}</p>
        </div>
      </button>
    `).join(""),a.querySelectorAll("[data-shot-idx]").forEach(o=>{o.addEventListener("click",()=>{const i=Number(o.dataset.shotIdx??"0");L(i)})}))}function u(){const a=document.getElementById("releases-list"),o=document.getElementById("faq-list");if(a&&Y.length>0){const i=Y[0],M=Y.slice(1);a.innerHTML=`
        <article class="release-row release-latest">
          <div class="release-head">
            <div class="release-title-group">
              <span class="release-ver tabular">${i.version}</span>
              <span class="pill pill-crimson">최신 · 권장 다운로드</span>
              <span class="release-sub tabular">${i.platform} · ${i.sizeText} · ${i.date}</span>
            </div>
            <div class="release-downloads">
              ${i.downloads.map(w=>Z(w.label,w.href,{downloadFilename:w.filename,secondary:!w.primary})).join("")}
            </div>
          </div>
          <ul class="release-notes">
            ${i.highlights.map(w=>`<li>${w}</li>`).join("")}
          </ul>
        </article>
        ${M.length>0?`
          <details class="past-releases-details">
            <summary>
              <span>이전 업데이트 변경 이력 보기 (${M.length}개 버전)</span>
              ${d.chevronDown(15)}
            </summary>
            <div class="past-releases-list">
              ${M.map(w=>`
                <article class="past-release-row">
                  <div class="release-title-group">
                    <span class="release-ver tabular">${w.version}</span>
                    <span class="release-sub tabular">${w.date}</span>
                  </div>
                  <ul class="release-notes">
                    ${w.highlights.map(H=>`<li>${H}</li>`).join("")}
                  </ul>
                </article>
              `).join("")}
            </div>
          </details>
        `:""}
      `}o&&(o.innerHTML=fe.map((i,M)=>`
        <details class="faq-item" ${M===0?"open":""}>
          <summary>
            <span>${i.question}</span>
            ${d.chevronDown(16)}
          </summary>
          <div class="faq-body">${i.answer}</div>
        </details>
      `).join(""))}function _(a){t=a,document.documentElement.setAttribute("data-theme",a);try{localStorage.setItem(ge,a)}catch{}const o=document.getElementById("theme-icon-slot"),i=document.getElementById("theme-label-slot"),M=document.getElementById("mobile-theme-btn");o&&(o.innerHTML=a==="dark"?d.moon(16):d.sun(16)),i&&(i.textContent=a==="dark"?"다크 스타디움":"라이트 데이"),M&&(M.innerHTML=a==="dark"?d.sun(17):d.moon(17))}function P(){const a=document.getElementById("trailer-modal"),o=document.getElementById("modal-video-wrap");if(!a||!o)return;const i=j[0];i.youtubeId?o.innerHTML=ue(i.youtubeId,i.title,!0):o.innerHTML=`<video controls autoplay playsinline src="${i.localSrc}" poster="${i.poster}"></video>`,a.hidden=!1}function S(){const a=document.getElementById("trailer-modal"),o=document.getElementById("modal-video-wrap");!a||!o||(a.hidden=!0,o.innerHTML="")}function L(a){const o=document.getElementById("lightbox-modal"),i=document.getElementById("lightbox-img"),M=document.getElementById("lightbox-cap-title"),w=document.getElementById("lightbox-cap-desc"),H=document.getElementById("lightbox-title");if(!o||!i||!M||!w||!H)return;const N=V.length,x=(a%N+N)%N;l=x;const F=V[x];i.src=F.image,i.alt=F.title,H.textContent=`${x+1} / ${N} · ${F.title}`,M.textContent=F.title,w.textContent=F.caption,o.hidden=!1}function G(){const a=document.getElementById("lightbox-modal");a&&(a.hidden=!0),l=null}(Q=document.getElementById("theme-toggle-btn"))==null||Q.addEventListener("click",()=>{_(t==="dark"?"light":"dark")}),(c=document.getElementById("mobile-theme-btn"))==null||c.addEventListener("click",()=>{_(t==="dark"?"light":"dark")});const k=document.getElementById("portal-sidebar");(s=document.getElementById("mobile-menu-btn"))==null||s.addEventListener("click",()=>{r=!r,k==null||k.classList.toggle("is-open",r)}),document.querySelectorAll("#sidebar-nav .nav-link").forEach(a=>{a.addEventListener("click",()=>{r=!1,k==null||k.classList.remove("is-open")})}),(g=document.getElementById("open-hero-trailer"))==null||g.addEventListener("click",P),(f=document.getElementById("close-trailer-modal"))==null||f.addEventListener("click",S),(D=document.getElementById("trailer-modal"))==null||D.addEventListener("click",a=>{a.target===a.currentTarget&&S()}),(U=document.getElementById("close-lightbox-modal"))==null||U.addEventListener("click",G),(te=document.getElementById("lightbox-modal"))==null||te.addEventListener("click",a=>{a.target===a.currentTarget&&G()}),(se=document.getElementById("lightbox-prev"))==null||se.addEventListener("click",()=>{l!==null&&L(l-1)}),(ie=document.getElementById("lightbox-next"))==null||ie.addEventListener("click",()=>{l!==null&&L(l+1)}),document.addEventListener("keydown",a=>{if(a.altKey&&a.shiftKey&&(a.key==="D"||a.key==="d")){a.preventDefault(),W();return}a.key==="Escape"?(S(),G()):l!==null&&a.key==="ArrowLeft"?L(l-1):l!==null&&a.key==="ArrowRight"&&L(l+1)}),document.querySelectorAll("#edition-filters .filter-btn").forEach(a=>{a.addEventListener("click",()=>{h=a.dataset.filter??"all",document.querySelectorAll("#edition-filters .filter-btn").forEach(i=>{i.classList.toggle("is-active",i===a)}),b()})}),(le=document.getElementById("copy-gatekeeper-btn"))==null||le.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(y.gatekeeperCmd),p=!0;const a=document.getElementById("copy-icon-slot"),o=document.getElementById("copy-label-slot");a&&(a.innerHTML=d.check(15)),o&&(o.textContent="복사 완료"),setTimeout(()=>{p&&(p=!1,a&&(a.innerHTML=d.copy(15)),o&&(o.textContent="명령어 복사"))},2e3)}catch{}});const K=[...document.querySelectorAll("#sidebar-nav .nav-link")],C=new IntersectionObserver(a=>{for(const o of a)if(o.isIntersecting){const i=o.target.id;K.forEach(M=>M.classList.toggle("is-active",M.dataset.nav===i))}},{rootMargin:"-22% 0px -65% 0px",threshold:.05});["discover","systems","controls","videos","editions","preview","downloads","board"].forEach(a=>{const o=document.getElementById(a);o&&C.observe(o)});const $=document.getElementById("owner-stats-panel"),R=document.getElementById("owner-total-pill");function E(){be(!1),$&&($.hidden=!0,$.innerHTML=""),R&&(R.hidden=!0,R.textContent="")}function A(a=!1){$&&(be(!0),ee($,R,E,a))}function W(){me()?E():A(!0)}B(),b(),m(),u();const I=document.getElementById("feedback-board-root");I&&Le(I,y.latestVersion),We()&&A(!1)}Re();
