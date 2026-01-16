import ProjectWrapper from "../ui/ProjectWrapper";

export default function ExtraInterior() {
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
            인테리어 플랫폼 개발
          </p>
          <div className="mt-5 text-gray-700 text-sm text-center">
            <p>
              인테리어 소비자-협력업체 복잡한 견적 프로세스로 인한 진입장벽을
              해결하기 위해
            </p>
            <p>
              인테리어 소비자 및 협력업체를 위한 크로스 플랫폼(Web/App)
              인터페이스를 구현하고, 사용자 편의를 위한 자동 견적 시스템 및
              파트너사 입찰 시스템을 개발했습니다.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center relative w-[75%] mt-10">
          <div className="relative w-[45%] h-65">
            <img src="/interior.png" alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
