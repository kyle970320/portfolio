import { Typography } from "../shared/Typography";
import ProjectCards from "../widgets/ProjectCards";

export default function ProjectSection() {
  return (
    <div id={"project_section"} className="max-w-200 px-6 mt-60 mx-auto">
      <div className="text-center">
        <Typography className="text-center mb-2 font-gmarket text-gray-300">
          제가 만들었습니다!
        </Typography>
      </div>
      <div className="flex items-center gap-6 mb-5">
        <div className="w-full h-[2px] rounded-4xl my-5 bg-gradient-to-l from-gray-500 via-gray-500 via-60% to-black" />
        <div className="min-w-25 w-[15%] text-center">
          <Typography className="text-2xl text-main font-gmarket font-bold">
            Project
          </Typography>
        </div>
        <div className="w-full h-[2px] my-5 bg-gradient-to-r from-gray-500 via-gray-500 via-60% to-black" />
      </div>
      <ProjectCards />
    </div>
  );
}
