import ImageViewer from "../../../shared/ImageViewer";
import SpeechBubble from "../../../shared/SpeechBubble";
import WindowWrapper from "../../../shared/WindowWrapper";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function DsketConnectNotion() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #fff3d6 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex h-full">
        <div className="flex flex-col gap-4 items-start p-8 w-3/10 h-full bg-[#342F2D]">
          <p className="inline-block py-1 px-2 rounded-[4px] text-white bg-[#818181]">
            Point 1
          </p>
          <div className="text-xl text-white font-bold">
            <p>Notion 데이터 연동</p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">API Key 보안 처리</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                Next.js의 SSR을 활용하여{" "}
                <span className="text-green-300">
                  Notion API Key 노출 최소화
                </span>
              </span>
            </p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">Block Renderer 개발</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                Notion 블록 구조를 분석 후 직접 Block Renderer를 구현
              </span>
            </p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                다양한{" "}
                <span className="text-green-300">
                  블록 타입(Text, embed, List 등)을 React 컴포넌트
                </span>
                로 매핑
              </span>
            </p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">Type Mapper 개발</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                Notion{" "}
                <span className="text-green-300">
                  템플릿 별 타입을 내부 컴포넌트 타입과 매핑
                </span>
                하는 Type Mapper 설계
              </span>
            </p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                데이터 구조 변경 시 유지보수가 용이하도록 확장성 고려
              </span>
            </p>
          </div>
        </div>
        <div className="relative flex flex-col gap-3 items-center p-8 w-7/10 h-full bg-[#fef9ec] overflow-hidden">
          <SpeechBubble className="absolute top-22 left-5 h-20 w-45 after:!hidden">
            <div className="text-sm font-semibold">
              <p>server-only 로직으로</p>
              <p>보안값들을 안전하게 처리</p>
            </div>
          </SpeechBubble>
          <div className="absolute w-14 border-t-gray-500 border-t-3 border-dashed top-26 left-49.5 rotate-313" />
          <SpeechBubble className="absolute top-10 h-20 w-48 after:!hidden">
            <div className="text-sm font-semibold">
              <p>선택된 템플릿에 맞춰</p>
              <p>데이터 타입 매핑</p>
            </div>
          </SpeechBubble>
          <div className="absolute w-14 border-t-gray-500 border-t-3 border-dashed top-26 right-49.5 rotate-223" />
          <SpeechBubble className="absolute top-22 right-5 h-20 w-45 after:!hidden">
            <div className="text-sm font-semibold">
              <p>block type에 맞춰</p>
              <p>디자인 컴포넌트 render</p>
            </div>
          </SpeechBubble>
          <WindowWrapper
            className="relative top-40 w-[55%]"
            src="/dsket_connect.png"
            onClick={() => {
              ImageViewer.open({
                url: "/dsket_connect.png",
              });
            }}
          />
        </div>
      </div>
    </ProjectWrapper>
  );
}
