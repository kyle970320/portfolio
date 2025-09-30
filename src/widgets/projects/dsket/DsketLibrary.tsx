import { ChevronsRight } from "lucide-react";
import ProjectWrapper from "../ui/ProjectWrapper";
import WindowWrapper from "../../../shared/WindowWrapper";
import ImageViewer from "../../../shared/ImageViewer";
import SpeechBubble from "../../../shared/SpeechBubble";

export default function DsketLibrary() {
  return (
    <ProjectWrapper
      className=""
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
            <p>내부 로직 라이브러리화</p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">GitLab Package Registry 활용</p>
            <div className="mt-1 text-xs flex items-center justify-between">
              <p className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <p className="w-[94%]">
                공용 모듈을
                <span className="text-green-300">내부 라이브러리</span>로 배포,{" "}
                <span className="text-green-300">팀 내 재사용 </span>
                가능하게 설계
              </p>
            </div>
            <div className="mt-1 text-xs flex items-center justify-between">
              <p className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <p className="w-[94%]">
                배포 <span className="text-green-300">파이프라인 자동화</span>{" "}
                경험
              </p>
            </div>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">개발은 서브모듈, 배포는 라이브러리</p>
            <p className="mt-1 text-xs flex items-center justify-between text-green-300">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                서브모듈로 개발단계에서 테스트, 충돌 확인
              </span>
            </p>
            <p className="mt-1 text-xs flex items-center justify-between text-green-300">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                패키지 레지스트리로 독립적인 관리와 사용
              </span>
            </p>
            <p className="mt-1 text-xs flex items-center justify-between text-red-400">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                모노레포는 프로젝트 볼륨 커짐, 관리 비용 증가 → 제외
              </span>
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-between p-10 w-7/10 h-full bg-[#fefcec] overflow-hidden">
          <div className="flex flex-col items-center justify-around w-[45%]">
            <SpeechBubble className="mb-10 h-25 w-65 after:!hidden">
              <div className="text-sm font-semibold">
                <p>기본 템플릿에서 서브모듈로 패키지 개발</p>
                <br />
                <p>- 즉시 테스트 가능</p>
                <p>- 의존성 등의 충돌 미리 방지</p>
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
                <p>개발 완료시 Package Registry로 배포</p>
                <br />
                <p>- 불필요한 버전업 방지</p>
                <p>- 독립적인 관리 가능</p>
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
