import Folder from "../../../shared/Folder";
import WindowView from "../../../shared/WindowView";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function ExtraMain() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #f0f0f0 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex justify-between gap-15 h-[77%] px-10 pt-8 pb-5">
        <div>
          <p>
            <span className="inline-block bg-black py-0.5 px-2 text-white text-sm rounded-2xl">
              Goal
            </span>
            <span className="ml-2 inline-block text-sm">
              기타 프로젝트 모음
            </span>
          </p>
          <p className="mt-6 mb-2 text-xl font-semibold">기타 프로젝트</p>
        </div>
        <div className="mx-auto pb-5 w-[60%] flex justify-center">
          <div className="relative w-full h-full">
            <div className="flex justify-center items-end rounded-b-[50%] h-full bg-gradient-to-t from-[#d0d0d0] via-[#d0d0d0] via-10% to-transparent overflow-clip">
              <Folder
                color="#a0a0a0"
                size={2.5}
                items={[
                  <WindowView
                    src="/extra_chat.png"
                    className="w-[100%] h-full"
                  />,
                  <WindowView src="/extra_news.png" className="w-[100%]" />,
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 px-10">
        <div>
          <p className="text-gray-700 text-sm font-bold">프로젝트 설명</p>
          <div className="text-[11px] text-gray-700 whitespace-pre-line">
            {`기타 프로젝트를 모아두었습니다.`}
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
