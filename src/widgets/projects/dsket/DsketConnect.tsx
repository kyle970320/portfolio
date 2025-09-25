import ProjectWrapper from "../ui/ProjectWrapper";
import { AppWindow, Building2 } from "lucide-react";

export default function DsketConnect() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #fff3d6 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-2xl text-center font-bold mt-3 mb-3">
          자세한 내용이 더 궁금하시다면!
        </div>
        <div className="flex flex-col gap-2 p-4 border-10 border-[#fdc958] rounded-xl">
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
            href="https://github.com/Project-Minus/minus-ui/tree/develop/packages/core"
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
