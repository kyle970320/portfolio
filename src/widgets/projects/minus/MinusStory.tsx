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
            Point 1
          </p>
          <div className="text-xl text-white font-bold">
            <p>Component Story 제공</p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">자체 Story 제공</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                Story Book을 없이 자체적으로 개발한 Component Story 제공
              </span>
            </p>
          </div>
        </div>
        <div className="relative flex flex-col gap-3 items-center p-8 w-full h-full bg-[#e8faec] overflow-hidden">
          <iframe
            src="https://d2gt38x81vtxw2.cloudfront.net/frame/snackbar/mini"
            width={700}
            height={600}
          />
          <button
            className="cursor-pointer font-semibold transition-all duration-100 hover:text-green-900"
            onClick={() => {
              window.open(
                "https://d2gt38x81vtxw2.cloudfront.net/frame/snackbar",
                "_blank",
                "width=1200, height=700, top=100, left=100",
              );
            }}
          >
            자세히보기
          </button>
        </div>
      </div>
    </ProjectWrapper>
  );
}
