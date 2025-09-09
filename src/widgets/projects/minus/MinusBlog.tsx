import ImageViewer from "../../../shared/ImageViewer";
import SpeechBubble from "../../../shared/SpeechBubble";
import WindowWrapper from "../../../shared/WindowWrapper";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function MinusBlog() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #e8faec 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex h-full">
        <div className="flex flex-col gap-4 items-start p-8 w-3/10 h-full bg-[#354137]">
          <p className="inline-block py-1 px-2 rounded-[4px] text-white bg-[#818181]">
            Point 3
          </p>
          <div className="text-xl text-white font-bold">
            <p>소통의 창구</p>
            <p>Minus Blog!</p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">Docs 역할 수행</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                컴포넌트 업데이트 시에 블로그에 Docs, Component Story 추가
              </span>
            </p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">유저 친화적인 디자인</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">편안한 반응형 디자인</span>
            </p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">라이트, 다크모드 변경 지원</span>
            </p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">비로그인 댓글 기능 구현</span>
            </p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">push 하면 자동배포</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">git action으로 aws 자동 배포</span>
            </p>
          </div>
        </div>
        <div className="relative flex flex-col gap-3 items-center p-8 w-full h-full bg-[#eef8ef] overflow-hidden">
          <WindowWrapper
            className="absolute left-36 w-55"
            src="/minus_mobile.png"
            onClick={() => {
              ImageViewer.open({
                url: "/minus_mobile.png",
              });
            }}
          />
          <WindowWrapper
            className="absolute right-36 w-53"
            src="/minus_light.png"
            onClick={() => {
              ImageViewer.open({
                url: "/minus_light.png",
              });
            }}
          />
          <SpeechBubble className="absolute top-5 right-5 h-20 w-28 after:!hidden text-white bg-[#397e49]">
            <div className="text-sm font-semibold">
              <p>pc 버전부터</p>
              <p>반응형까지</p>
              <p>직접 디자인!</p>
            </div>
          </SpeechBubble>
        </div>
      </div>
    </ProjectWrapper>
  );
}
