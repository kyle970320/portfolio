# 박민규 포트폴리오

> 비즈니스 임팩트를 극대화하는 프론트엔드 개발자 박민규의 포트폴리오 웹사이트입니다.

## 🛠 기술 스택

| 분류 | 기술 |
|------|------|
| **코어** | React 19, TypeScript, Vite 7 |
| **스타일** | Tailwind CSS 4, Framer Motion, class-variance-authority, clsx, tailwind-merge |
| **3D** | Three.js, @react-three/fiber, @react-three/drei, ogl, simplex-noise |
| **상태/데이터** | Zustand, TanStack Query, fp-ts, immer |
| **UI** | @minus-ui/core, Radix UI (Slot), lucide-react |
| **기타** | axios, cheerio, dayjs, react-code-blocks |

## 📁 프로젝트 구조

```
src/
├── layout/           # 공통 레이아웃
│   ├── Header.tsx    # 상단 네비게이션 (스크롤 진행바, 섹션 이동)
│   └── Squares.tsx   # 메인 배경 애니메이션
├── sections/         # 메인 페이지 섹션
│   ├── IntroSection.tsx
│   ├── ValueSection.tsx
│   ├── HistorySection.tsx
│   ├── StackSection.tsx
│   ├── ProjectSection.tsx
│   ├── ContackSection.tsx
│   └── GlutterCanvas.tsx
├── widgets/          # UI 컴포넌트 및 3D
│   ├── clayCanvas/   # Three.js 3D 인트로 (캐릭터, 노트북, 조명)
│   ├── projects/     # 프로젝트별 상세 컴포넌트
│   │   ├── dsket/    # D-sket (Notion 웹빌더)
│   │   ├── minus/    # Minus (블로그 + UI 라이브러리)
│   │   ├── hanwha/   # 한화비전 DesignPro
│   │   ├── extra/    # 기타 (품질관리, 인테리어, 뉴스, 채팅)
│   │   └── ui/       # ProjectWrapper, DsketExample
│   ├── ProjectCards.tsx
│   ├── StackList.tsx
│   ├── ValueCard.tsx
│   ├── ContactCard.tsx
│   ├── ProfileCharacter.tsx
│   └── TypingTitle.tsx
└── shared/           # 공통 모듈
    ├── Modal.tsx     # createPortal + createRoot 기반 모달
    ├── ImageViewer.tsx
    ├── WindowWrapper.tsx, WindowView.tsx
    ├── Folder.tsx, SpeechBubble.tsx
    ├── Typography.tsx, Skeleton.tsx
    └── lib/
```

## 📂 주요 기능

### ClayCanvas (3D 인트로)

- **Three.js**로 구현한 Clay 스타일 3D 씬
- 캐릭터: `LatheGeometry` 기반 바디, `SphereGeometry` 헤드/눈/귀, `hair.ts` 머리
- 노트북: `BoxGeometry`, `PlaneGeometry`로 키보드, 화면, 베젤, 노치, RectAreaLight
- 마우스 방향 추적: 캐릭터 face/head 회전, 눈동자 이동
- ShadowMap(PCFSoft), 디렉셔널/앰비언트/필 라이트

### 헤더 & 스크롤

- **scroll_container** 기준 스크롤 이벤트 수신 (window 아님)
- 스크롤량에 따른 헤더 배경·투명도 변경, 진행바(`progressBarWidth`) 표시
- `scrollIntoView`로 Main / Intro / Value / History / Stack / Project / contact 이동

## 📦 소개 프로젝트

| 프로젝트 | 설명 | 링크 |
|----------|------|------|
| **D-sket** | Notion 연동 웹빌더. Git Submodule/Private Registry, 싱글톤 렌더링 등 | [D-sket](https://d-sket.io/) · [Notion](https://rounded-grey-2bb.notion.site/D-SKET-2c396c701dfa80799a32c8734ee944eb) |
| **Minus** | 블로그 + Minus-UI. 모노레포, AWS S3·CloudFront, History API Window Bridge | [Github](https://github.com/Project-Minus/minus-ui/tree/develop/packages/core) · [Notion](https://rounded-grey-2bb.notion.site/Minus-UI-27096c701dfa8083bae0d5469f783fa2?pvs=73) · [Minus Blog](https://d3jed8cbqldvwv.cloudfront.net/) |
| **한화비전 DesignPro** | 네트워크 제품 설계/프로젝트 관리. IndexedDB, Google Map, 차트 | [Notion](https://rounded-grey-2bb.notion.site/DesignPro-2ea96c701dfa8094a4becf2644af30ac?pvs=73) · [Legacy](https://www.hanwhavision.com/wisenettoolbox_plus/#!/en/home) · [DesignPro](https://designpro.hanwhavision.cloud/) |
| **기타** | 품질관리(Factory), 인테리어 플랫폼, 뉴스 수집·분석(Discord 웹훅), 실시간 채팅·공유 그림판 | — |

**박민규** · [GitHub](https://github.com/kyle970320) · park970320@gamil.com
