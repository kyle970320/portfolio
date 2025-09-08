import SpeechBubble from "../../../shared/SpeechBubble";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function MinusDesc() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #e8faec 0%, #FFFFFF 100%)",
      }}
    >
      <div className="relative flex flex-col h-full justify-center items-center overflow-hidden">
        <div className="relative w-[78%]">
          <p className="text-[#647a69] text-center font-bold">
            프로젝트에 대하여
          </p>
          <p className="text-2xl text-center font-bold mt-3 mb-3">
            개발 편의성을 갖춘 UI UX 라이브러리를 만들어요!
          </p>
          <div className="mt-5 text-gray-700 text-sm text-center">
            <p>
              Minus는 기존 라이브러리의 구조적인 성능 저하 문제와 기능 부재를
              느끼고,
            </p>
            <p>
              쉽고 빠르게 사용할 수 없을까라는 생각에서 출발한 개발 친화적인 UI
              라이브러리입니다.
            </p>
            <p>
              이에 그치지 않고 Docs의 역할을 할 수 있는 blog를 만들어서 내용을
              공유하고 있습니다.
            </p>
          </div>
        </div>
        <div className="relative flex w-[60%] h-50 flex-wrap justify-center mt-10">
          <div className="relative mt-18 w-full h-0">
            <SpeechBubble className="absolute top-0 left-12 text-white bg-[#397e49] after:border-t-[#397e49] rotate-[-12deg] bubble-tail-none">
              말줄임이 일어났을때만 Tooltip을 표시하고 싶어요
            </SpeechBubble>
            <SpeechBubble className="absolute z-1 top-[-60px] left-54 text-white bg-[#397e49] after:border-t-[#397e49] bubble-tail-none">
              같은 Dom에서 위치를 잡고 싶어요
            </SpeechBubble>
            <SpeechBubble className="absolute top-0 left-96 text-white bg-[#397e49] after:border-t-[#397e49] rotate-12 bubble-tail-none">
              너무 많은 rendering 때문에 성능이 저하되요!
            </SpeechBubble>
          </div>
          <div className="text-[110px]">🤔</div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
