import { BriefcaseBusiness, Cctv, ChartBar, Map } from "lucide-react";
import ImageViewer from "../../../shared/ImageViewer";
import WindowWrapper from "../../../shared/WindowWrapper";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function HanwhaDashboard() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #FFF6EA 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex h-full">
        <div className="flex flex-col gap-4 items-start p-8 w-3/10 h-full bg-[#342F2D]">
          <p className="inline-block py-1 px-2 rounded-[4px] text-white bg-[#818181]">
            Point 2
          </p>
          <div className="text-xl text-white font-bold">
            <p>Dashboard 구현</p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[100%]">
                기존 운영하던 Legacy 시스템에는 없던{" "}
                <span className="block text-[#fdb65a]">
                  통합 Dashboard 구현
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-0 justify-center items-center p-8 w-7/10 h-full bg-[#F7F2EA]">
          <p className="flex justify-between w-2/3 text-[#000000] font-bold">
            <Map
              size={40}
              style={{
                position: "relative",
                animation: "posUp infinite 0.6s alternate",
              }}
            />
            <Cctv
              size={40}
              style={{
                position: "relative",
                animation: "posUp infinite 0.6s alternate",
                animationDelay: "0.6s",
              }}
            />
            <BriefcaseBusiness
              size={40}
              style={{
                position: "relative",
                animation: "posUp infinite 0.6s alternate",
              }}
            />

            <ChartBar
              size={40}
              style={{
                position: "relative",
                animation: "posUp infinite 0.6s alternate",
              }}
            />
          </p>
          <div className="text-sm">
            <div className="mt-0 flex justify-center items-center">
              <WindowWrapper
                className="relative w-[85%]"
                src="/hanwha.png"
                title="designPro"
                logo="/hanwha_logo.webp"
                onClick={() => {
                  ImageViewer.open({
                    url: "/hanwha.png",
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
