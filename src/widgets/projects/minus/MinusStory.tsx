import ImageViewer from "../../../shared/ImageViewer";
import WindowWrapper from "../../../shared/WindowWrapper";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function MinusStory() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #e8faec 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex h-full">
        <div className="flex flex-col gap-4 items-start p-8 w-3/10 h-full bg-[#354137]">
          <p className="inline-block py-1 px-2 rounded-[4px] text-white bg-[#818181]">
            Point 2
          </p>
          <div className="text-xl text-white font-bold">
            <p>History API 기반의 Window Bridge를 설계</p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">라우팅 시 자동 언마운트 구현</span>
            </p>
          </div>
        </div>
        <div className="relative flex flex-col gap-3 items-center p-8 w-full h-full bg-[#eef8ef] overflow-hidden">
          <WindowWrapper
            className="absolute right-36 w-3/5"
            src="/minus_bridge.png"
            onClick={() => {
              ImageViewer.open({
                url: "/minus_bridge.png",
              });
            }}
          />
        </div>
      </div>
    </ProjectWrapper>
  );
}
