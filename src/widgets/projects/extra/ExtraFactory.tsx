import { ChevronsRight } from "lucide-react";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function ExtraFactory() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #f0f0f0 0%, #FFFFFF 100%)",
      }}
    >
      <div className="relative flex flex-col h-full justify-center items-center overflow-hidden">
        <div className="relative w-[78%]">
          <p className="text-gray-600 text-center font-bold">
            프로젝트에 대하여
          </p>
          <p className="text-2xl text-center font-bold mt-3 mb-3">
            품질관리 시스템 개발
          </p>
          <div className="mt-5 text-gray-700 text-sm text-center">
            <p>
              유통 과정의 파편화된 데이터로 대응 및 실시간 모니터링의 한계를
              해결하기 위해
            </p>
            <p>
              품질관리 시스템을 개발하여 상품 이력 추적, 온도 관리 자동화,
              온라인 결재 및 24시간 위해 정보 알림 체계를 구축했습니다.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center relative w-[75%] mt-10">
          <div className="relative flex flex-col w-[45%] bg-[#f5f5f5] shadow-xl py-7 px-5">
            <div className="border-b-1 font-bold text-sm py-0.5 mr-16">
              문제점
            </div>
            <div className="border-b-1 text-sm py-0.5 mr-16">
              유통 과정의 파편화된 데이터
            </div>
            <div className="border-b-1  text-sm py-0.5 mr-16">
              실시간 모니터링의 한계
            </div>
            <div className="border-b-1 text-sm py-0.5 mr-8">
              데이터 통합 및 추적 어려움
            </div>
            <div className="w-full mt-3">
              <div className="mx-auto w-1.5 h-1.5 rounded-2xl bg-gray-700"></div>
            </div>
            <div className="w-full mt-3">
              <div className="mx-auto w-1.5 h-1.5 rounded-2xl bg-gray-700 opacity-80"></div>
            </div>
            <div className="w-full mt-3">
              <div className="mx-auto w-1.5 h-1.5 rounded-2xl bg-gray-700 opacity-60"></div>
            </div>
          </div>

          <div className="w-[4%]">
            <ChevronsRight size={30} />
          </div>
          <div className="relative w-[45%] h-65">
            <img src="factory.png" alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
