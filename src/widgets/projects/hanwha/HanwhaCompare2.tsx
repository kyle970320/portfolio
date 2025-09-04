import WindowView from "../../../shared/WindowView";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function HanwhaCompare2() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #FFF6EA 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex h-full">
        <div className="flex flex-col gap-3 items-start p-8 w-3/10 h-full bg-[#342F2D]">
          <p className="inline-block py-1 px-2 rounded-[4px] text-white bg-[#818181]">
            AS-IS
          </p>
          <div className="text-xl text-[#aaaaaa]">
            <p>CCTV 운영 현황을</p>
            <p>수동으로 파악하고 있었어요.</p>
          </div>
          <div className="text-sm text-[#888888]">
            <p>
              실제 사용하는 CCTV 장비 정보와 운영 상태를 한눈에 확인할 수 있는
              시스템이 없어,
            </p>
            <p>데이터를 개별적으로 확인하느라 관리 효율이 떨어졌습니다.</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start p-8 w-7/10 h-full bg-[#F7F2EA]">
          <p className="py-1 px-2 rounded-[4px] bg-[#8B6A47] text-white">
            TO-BE
          </p>
          <p className="text-2xl text-[#000000] font-bold">
            대시보드를 통해 CCTV 정보를 한눈에 파악할 수 있어요.
          </p>
          <div className="text-sm">
            <p>연동된 대시보드에서 CCTV 수, 저장 용량, 라이선스 등을</p>
            <p>
              시각적으로 확인하여 프로젝트 운영 현황을 쉽게 관리할 수 있게
              되었습니다.
            </p>
            <div className="mt-7 flex justify-center items-center">
              <WindowView src="/hanwha.png" className="w-[85%]" />
            </div>
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
