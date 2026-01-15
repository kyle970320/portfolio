import ImageViewer from "../../../shared/ImageViewer";
import SpeechBubble from "../../../shared/SpeechBubble";
import WindowWrapper from "../../../shared/WindowWrapper";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function DsketCache() {
  return (
    <ProjectWrapper
      style={{
        background: "linear-gradient(180deg, #fff3d6 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex h-full">
        <div className="flex flex-col gap-4 items-start p-8 w-3/10 h-full bg-[#342F2D]">
          <p className="inline-block py-1 px-2 rounded-[4px] text-white bg-[#818181]">
            Point 3
          </p>
          <div className="text-xl text-white font-bold">
            <p>백엔드 캐시 서버 연동</p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">캐시 서버 기반 실시간 연동</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[100%]">
                백엔드 캐시 서버를 통해{" "}
                <span className="text-green-300">
                  원천 API 호출 없이도 데이터 실시간 조회
                </span>
              </span>
            </p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                D-Sket Refresh 기능으로
                <span className="text-green-300"> 데이터 신선도 유지</span>
              </span>
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-between p-10 w-7/10 h-full bg-[#fef9ec] overflow-hidden">
          <WindowWrapper
            className="relative w-[50%]"
            src="/dsket_seo.png"
            title="민규의 포트폴리오"
            logo="/profile.png"
            onClick={() => {
              ImageViewer.open({
                url: "/dsket_seo.png",
              });
            }}
          />
          <div className="absolute w-58 border-t-gray-300 border-t-3 border-dashed top-50 left-49.5 rotate-220" />
          <SpeechBubble className="w-60 h-20 after:!hidden">
            <div className="font-semibold">
              <p>캐시 서버에서 데이터 조회</p>
              <p>원천 API보다 빠른 응답 속도</p>
              <p>실시간 연동 경험 제공</p>
            </div>
          </SpeechBubble>
        </div>
      </div>
    </ProjectWrapper>
  );
}
