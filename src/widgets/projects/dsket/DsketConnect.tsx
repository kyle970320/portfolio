import ProjectWrapper from "../ui/ProjectWrapper";
import { AppWindow, Building2 } from "lucide-react";

export default function DsketConnect() {
  return (
    <ProjectWrapper
      style={{
        background: "linear-gradient(180deg, #fff3d6 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative text-2xl text-center font-bold mt-3 mb-3 ">
          자세한 내용이 더 궁금하시다면!
          <div className="absolute -bottom-1 left-0  w-full  border-10 border-[#fdc958]/30"></div>
        </div>
        <div className="flex flex-col gap-2 p-4 ">
          <a
            target="_blank"
            href="https://d-sket.io/"
            className="flex items-center text-gray-500 transition-all duration-100 hover:text-black"
          >
            <Building2 size={28} className="mr-1" />
            D-sket 회사 사이트
          </a>
          <a
            target="_blank"
            href="https://rounded-grey-2bb.notion.site/D-SKET-2c396c701dfa80799a32c8734ee944eb"
            className="flex items-center text-gray-500 transition-all duration-100 hover:text-black"
          >
            <AppWindow size={28} className="mr-1" />
            상세 내용 + 트러블슈팅 정리 Notion
          </a>
        </div>
      </div>
    </ProjectWrapper>
  );
}
