import { AppWindow, BookOpen } from "lucide-react";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function HanwhaContact() {
  return (
    <ProjectWrapper
      style={{
        background: "linear-gradient(180deg, #FFF6EA 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative text-2xl text-center font-bold mt-3 mb-3">
          자세한 내용이 더 궁금하시다면!
          <div className="absolute -bottom-1 left-0  w-full  border-10 border-[#FFDFC6]/50"></div>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <a
            target="_blank"
            href="https://rounded-grey-2bb.notion.site/DesignPro-2ea96c701dfa8094a4becf2644af30ac?pvs=73"
            className="flex items-center text-gray-500 transition-all duration-100 hover:text-black"
          >
            <AppWindow size={28} className="mr-1" />
            상세 내용 + 트러블슈팅 정리 Notion
          </a>
          <a
            target="_blank"
            href="https://www.hanwhavision.com/wisenettoolbox_plus/#!/en/home"
            className="flex items-center text-gray-500 transition-all duration-100 hover:text-black"
          >
            <BookOpen size={28} className="mr-1" />
            Legacy 시스템
          </a>
          <a
            target="_blank"
            href="https://designpro.hanwhavision.cloud/"
            className="flex items-center text-gray-500 transition-all duration-100 hover:text-black"
          >
            <BookOpen size={28} className="mr-1" />
            DesignPro
          </a>
        </div>
      </div>
    </ProjectWrapper>
  );
}
