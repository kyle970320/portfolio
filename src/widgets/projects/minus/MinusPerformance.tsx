import { ChevronsRight } from "lucide-react";
import ProjectWrapper from "../ui/ProjectWrapper";
import WindowWrapper from "../../../shared/WindowWrapper";
import ImageViewer from "../../../shared/ImageViewer";

export default function MinusPerformance() {
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
            <p>실성능 개선</p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">rendering 횟수 감소</p>
            <div className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <p className="w-[94%]">
                antd에서 변경시
                <span className="text-green-300"> 90% 렌더링 횟수 감소</span>
              </p>
            </div>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">rendering 시간 감소</p>
            <div className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <p className="w-[94%]">
                약 <span className="text-green-300">25%의 성능 개선효과 </span>
                확인
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center gap-3 p-6 w-full h-full bg-[#eef8ef] overflow-hidden">
          <div className="font-semibold">
            Minus Tooltip으로 변경 후 Rendering 횟수 변화
          </div>
          <div className="flex justify-center items-center w-full bg-white p-2 pt-4 rounded-2xl">
            <div className="w-[40%] flex flex-col justify-center items-center ">
              <WindowWrapper
                className="relative"
                src="/minus_count_before.png"
                onClick={() => {
                  ImageViewer.open({
                    url: "/minus_count_before.png",
                  });
                }}
              />
              <div className="text-red-400">Before</div>
            </div>
            <div className="w-[4%]">
              <ChevronsRight size={30} />
            </div>
            <div className="w-[40%] flex flex-col justify-center items-center">
              <WindowWrapper
                className="relative"
                src="/minus_count_after.png"
                onClick={() => {
                  ImageViewer.open({
                    url: "/minus_count_after.png",
                  });
                }}
              />
              <div className="text-green-500">After</div>
            </div>
          </div>
          <div className="font-semibold">
            Minus Tooltip으로 변경 후 Rendering 시간 변화
          </div>
          <div className="flex justify-center items-center w-full bg-white p-2 pt-4 rounded-2xl">
            <div className="w-[40%] flex flex-col justify-center items-center ">
              <WindowWrapper
                className="relative"
                src="/minus_time_before.png"
                onClick={() => {
                  ImageViewer.open({
                    url: "/minus_time_before.png",
                  });
                }}
              />
              <div className="text-red-400">Before</div>
            </div>
            <div className="w-[4%]">
              <ChevronsRight size={30} />
            </div>
            <div className="w-[40%] flex flex-col justify-center items-center">
              <WindowWrapper
                className="relative"
                src="/minus_time_after.png"
                onClick={() => {
                  ImageViewer.open({
                    url: "/minus_time_after.png",
                  });
                }}
              />
              <div className="text-green-500">After</div>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 w-full text-sm text-right text-red-500">
            ※React Dev Tools 로 측정한 결과입니다
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
