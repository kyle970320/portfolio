import { AppWindow, Github, BookOpen } from "lucide-react";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function MinusContact() {
  return (
    <ProjectWrapper
      style={{
        background: "linear-gradient(180deg, #e8faec 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-2xl text-center font-bold mt-3 mb-3">
          자세한 내용이 더 궁금하시다면!
        </div>
        <div className="flex flex-col gap-2 p-4 border-10 border-[#c5fcd1] rounded-xl">
          <a
            target="_blank"
            href="https://github.com/Project-Minus/minus-ui/tree/develop/packages/core"
            className="flex items-center text-gray-500 transition-all duration-100 hover:text-black"
          >
            <Github size={28} className="mr-1" />
            Github
          </a>
          <a
            target="_blank"
            href="https://github.com/Project-Minus/minus-ui/tree/develop/packages/core"
            className="flex items-center text-gray-500 transition-all duration-100 hover:text-black"
          >
            <AppWindow size={28} className="mr-1" />
            상세 내용 + 트러블슈팅 정리 Notion
          </a>
          <a
            target="_blank"
            href="https://d3jed8cbqldvwv.cloudfront.net/"
            className="flex items-center text-gray-500 transition-all duration-100 hover:text-black"
          >
            <BookOpen size={28} className="mr-1" />
            Minus Blog
          </a>
        </div>
      </div>
    </ProjectWrapper>
  );
}
