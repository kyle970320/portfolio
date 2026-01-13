import { ChevronsRight } from "lucide-react";
import ProjectWrapper from "../ui/ProjectWrapper";
import WindowWrapper from "../../../shared/WindowWrapper";
import ImageViewer from "../../../shared/ImageViewer";
import SpeechBubble from "../../../shared/SpeechBubble";

export default function DsketLibrary() {
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
            <p>공유 라이브러리 체계 구축</p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">Git Submodule 구조 설계</p>
            <div className="mt-1 text-xs flex items-center justify-between">
              <p className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <p className="w-[94%]">
                멀티테넌시 환경에서{" "}
                <span className="text-green-300">
                  공통 라이브러리를 Submodule로 분리
                </span>
                하여 <span className="text-green-300">코드 중복 제거</span>
              </p>
            </div>
            <div className="mt-1 text-xs flex items-center justify-between">
              <p className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <p className="w-[94%]">
                각 테넌트별 독립적인 저장소와{" "}
                <span className="text-green-300">
                  공유 라이브러리 간 의존성 관리
                </span>{" "}
                체계 구축
              </p>
            </div>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">Private Registry 구축</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                npm Private Registry를 통해{" "}
                <span className="text-green-300">
                  버전 관리 및 배포 프로세스 표준화
                </span>
              </span>
            </p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                라이브러리 업데이트 시{" "}
                <span className="text-green-300">
                  모든 테넌트에 일관된 버전 적용
                </span>
                으로 안정성 확보
              </span>
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-between p-10 w-7/10 h-full bg-[#fefcec] overflow-hidden">
          <div className="flex flex-col items-center justify-around w-[45%]">
            <SpeechBubble className="mb-10 h-25 w-65 after:!hidden">
              <div className="text-sm font-semibold">
                <p>Git Submodule로 공통 라이브러리 분리</p>
                <br />
                <p>- 멀티테넌시 환경에서 코드 중복 제거</p>
                <p>- 각 테넌트별 의존성 관리 체계 구축</p>
              </div>
            </SpeechBubble>
            <WindowWrapper
              className="relative w-full"
              src="/dsket_submodule.png"
              onClick={() => {
                ImageViewer.open({
                  url: "/dsket_submodule.png",
                });
              }}
            />
          </div>
          <div className="w-[4%]">
            <ChevronsRight size={30} />
          </div>
          <div className="flex flex-col items-center justify-around w-[45%]">
            <SpeechBubble className="mb-10 h-25 w-65 after:!hidden">
              <div className="text-sm font-semibold">
                <p>Private Registry로 버전 관리 체계화</p>
                <br />
                <p>- 모든 테넌트에 일관된 버전 적용</p>
                <p>- 중앙 집중식 관리로 코드 파편화 해결</p>
              </div>
            </SpeechBubble>
            <WindowWrapper
              className="relative mt-2 w-full h-68"
              src="/dsket_package.png"
              onClick={() => {
                ImageViewer.open({
                  url: "/dsket_package.png",
                });
              }}
            />
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
