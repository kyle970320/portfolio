import ImageViewer from "../../../shared/ImageViewer";
import WindowWrapper from "../../../shared/WindowWrapper";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function ExtraChat() {
  return (
    <ProjectWrapper
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
            실시간 채팅 & 공유 그림판
          </p>
          <div className="mt-5 text-gray-700 text-sm text-center">
            <p>
              사내에서 토이프로젝트로 socket을 이용한 실시간 채팅 & 공유 그림판
              기능을 구현했습니다.
            </p>
            <p>
              그리기 권한 분리, 참여한 인원, 채팅 읽은 인원 등 다양한 기능을
              지원합니다.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center relative w-[75%] mt-10">
          <div className="relative w-[45%] h-65">
            <WindowWrapper
              className="relative w-full"
              src="/extra_chat.png"
              onClick={() => {
                ImageViewer.open({
                  url: "/extra_chat.png",
                });
              }}
            />
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
