import ProjectWrapper from "../ui/ProjectWrapper";

export default function MinusTailwind() {
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
            <p>Tailwind plugin을 지원</p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">간편한 사용</p>
            <div className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <p className="w-[94%]">
                tailwind를 import한 css파일에
                <span className="text-green-300"> 한번에 같이 import</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-between gap-3 p-8 w-full h-full bg-[#eef8ef] overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full text-slate-900">
            <div className="mx-auto p-5 w-1/2 bg-white">
              <p className="font-semibold">
                <span className="text-[#C586C0]">@import </span>
                <span className="text-[#CE9178]">"tailwindcss";</span>
              </p>
              <p className="text-[#6A9955]">
                // tailwind를 import 한 바로 밑에 import
              </p>
              <p className="font-semibold">
                <span className="text-[#C586C0]">@import </span>
                <span className="text-[#CE9178]">"@minus-ui/core/plugin";</span>
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <div className="minus-ui-snackbar minus-ui-snackbar-success z-[1000] minus-ui-snackbar-auto-close-off minus-ui-snackbar-top cursor-default relative">
                <span>It's Minus Success Snackbar!</span>
              </div>
              <div className="minus-ui-snackbar minus-ui-snackbar-warning z-[1000] minus-ui-snackbar-auto-close-off minus-ui-snackbar-top cursor-default relative">
                <span>It's Minus Warning Snackbar!</span>
              </div>
              <div className="minus-ui-snackbar minus-ui-snackbar-error z-[1000] minus-ui-snackbar-auto-close-off minus-ui-snackbar-top cursor-default relative">
                <span>It's Minus Error Snackbar!</span>
              </div>
              <div className="minus-ui-snackbar minus-ui-snackbar-info z-[1000] minus-ui-snackbar-auto-close-off minus-ui-snackbar-top cursor-default relative">
                <span>It's Minus Info Snackbar!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
