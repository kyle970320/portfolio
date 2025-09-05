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
            AS-IS
          </p>
          <div className="text-xl text-white">
            <p>Notion 데이터 연동</p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p>API Key 보안 처리</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[95%]">
                Next.js의 SSR을 활용하여 Notion API Key를 안전하게 서버에서만
                처리
              </span>
            </p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p>Block Renderer 개발</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[95%]">
                Notion 블록 구조를 분석 후 직접 Block Renderer를 구현
              </span>
            </p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[95%]">
                다양한 블록 타입(Text, embed, List 등)을 React 컴포넌트로 매핑
              </span>
            </p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p>Type Mapper 개발</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[95%]">
                Notion 템플릿 별 타입을 내부 컴포넌트 타입과 매핑하는 Type
                Mapper 설계
              </span>
            </p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[95%]">
                데이터 구조 변경 시 유지보수가 용이하도록 확장성 고려
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start p-8 w-7/10 h-full bg-[#F7F2EA]">
          <WindowWrapper src="/dsket_connect.png" />
        </div>
      </div>
    </ProjectWrapper>
  );
}
