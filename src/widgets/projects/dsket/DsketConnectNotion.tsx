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
            Point 2
          </p>
          <div className="text-xl text-white font-bold">
            <p>싱글톤 인스턴스 기반 렌더링</p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">싱글톤 패턴 적용</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                상세페이지 렌더링 로직을{" "}
                <span className="text-green-300">싱글톤 인스턴스로 관리</span>
                하여 메모리 효율성 향상
              </span>
            </p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                전역 상태 관리 및{" "}
                <span className="text-green-300">
                  인스턴스 재사용으로 성능 최적화
                </span>
              </span>
            </p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">렌더링 로직 중앙화</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                상세페이지 렌더링 로직을{" "}
                <span className="text-green-300">
                  단일 인스턴스에서 중앙 관리
                </span>
                하여 일관성 확보
              </span>
            </p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                멀티테넌시 환경에서{" "}
                <span className="text-green-300">렌더링 로직 파편화 방지</span>
                및 유지보수성 향상
              </span>
            </p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                싱글톤 패턴을 통한{" "}
                <span className="text-green-300">예측 가능한 동작 보장</span>
                으로 시스템 안정성 향상
              </span>
            </p>
          </div>
        </div>
        <div className="relative flex flex-col gap-3 items-center p-8 w-7/10 h-full bg-[#fef9ec] overflow-hidden">
          <SpeechBubble className="absolute top-22 left-5 h-20 w-45 after:!hidden">
            <div className="text-sm font-semibold">
              <p>싱글톤 인스턴스로</p>
              <p>렌더링 로직 중앙 관리</p>
            </div>
          </SpeechBubble>
          <div className="absolute w-14 border-t-gray-500 border-t-3 border-dashed top-26 left-49.5 rotate-313" />
          <SpeechBubble className="absolute top-10 h-20 w-48 after:!hidden">
            <div className="text-sm font-semibold">
              <p>단일 인스턴스로</p>
              <p>일관성 확보</p>
            </div>
          </SpeechBubble>
          <div className="absolute w-14 border-t-gray-500 border-t-3 border-dashed top-26 right-49.5 rotate-223" />
          <SpeechBubble className="absolute top-22 right-5 h-20 w-45 after:!hidden">
            <div className="text-sm font-semibold">
              <p>예측 가능한 동작으로</p>
              <p>시스템 안정성 확보</p>
            </div>
          </SpeechBubble>
          <WindowWrapper
            className="relative top-40 w-[55%]"
            src="/dsket_renderer.png"
            onClick={() => {
              ImageViewer.open({
                url: "/dsket_renderer.png",
              });
            }}
          />
        </div>
      </div>
    </ProjectWrapper>
  );
}
