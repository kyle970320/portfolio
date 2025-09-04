import SpeechBubble from "../../../shared/SpeechBubble";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function HanwhaDesc() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #FFF6EA 0%, #FFFFFF 100%)",
      }}
    >
      <div className="relative flex flex-col h-full justify-center items-center overflow-hidden">
        <img
          src="/cctv_front.png"
          alt=""
          className="absolute top-3 left-[50%] translate-x-[-50%] w-14 h-14 z-21"
        />
        <div
          className="trapezoid-icon"
          style={{
            animation: "twinkle alternate infinite 1.2s",
          }}
        />
        <div className="relative w-[78%]">
          <p className="text-[#563C22] text-center font-bold">
            프로젝트에 대하여
          </p>
          <p className="text-2xl text-center font-bold mt-3 mb-3">
            기존 Legacy한 로직들을 변경해서 새롭게 출발해요!
          </p>
          <div className="mt-5 text-gray-700 text-sm text-center">
            <p>
              DesignPro는 네트워크 제품 구성과 프로젝트 설계를 지원하는 웹
              애플리케이션입니다.
            </p>
            <p>
              프로젝트 생성, 지역 설정, 위치 지정, 용량 계산, 제품 비교, 데이터
              시각화, 리포팅 등 네트워크 관리에 주요 기능을 제공합니다.
            </p>
          </div>
        </div>
        <div className="relative flex w-[60%] h-50 flex-wrap gap-10 justify-center mt-10">
          <div className="relative mt-6 w-[100%] h-50 rounded-b-[50%] overflow-clip">
            <SpeechBubble className="absolute bottom-3 left-18 text-white bg-[#8a7139] after:border-t-[#8a7139]">
              이전 화면들은 가독성이 부족해요
            </SpeechBubble>
            <SpeechBubble className="absolute bottom-25 left-22 text-white bg-[#cfaf8d] after:border-t-[#cfaf8d]">
              다른 기능들을 추가하고 싶어요
            </SpeechBubble>
            <SpeechBubble className="absolute bottom-13 left-52 text-white bg-[#a88055] after:border-t-[#a88055]">
              예전에 만들었기에 유지보수가 힘들어요
            </SpeechBubble>
            <SpeechBubble className="absolute bottom-[-4px] left-68 text-white bg-[#7d5f3f] after:border-t-[#7d5f3f]">
              새로운 제품들이 많이 추가되었어요
            </SpeechBubble>
            <SpeechBubble className="absolute bottom-25 left-94 text-white bg-[#cfa273] after:border-t-[#cfa273]">
              다른 시스템들과도 연동하고 싶어요
            </SpeechBubble>
            <SpeechBubble className="absolute bottom-7 left-108 text-white bg-[#C49664] after:border-t-[#C49664]">
              여러 지역으로 서비스를 확장하고 싶어요
            </SpeechBubble>
          </div>
        </div>
        {/* <div className="flex w-[70%] flex-wrap gap-10 justify-center mt-10">
          <SpeechBubble
            style={{
              animation: "posUp alternate infinite 1s",
            }}
            className="text-white bg-[#C49664] after:border-t-[#C49664]"
          >
            이전 화면들은 가독성이 부족해요
          </SpeechBubble>
          <SpeechBubble
            style={{
              animation: "posUp alternate infinite 1s 1.1s",
            }}
            className="text-white bg-[#C49664] after:border-t-[#C49664]"
          >
            새로운 기능들을 추가하고 싶어요
          </SpeechBubble>
          <SpeechBubble
            style={{
              animation: "posUp alternate infinite 1s",
            }}
            className="text-white bg-[#C49664] after:border-t-[#C49664]"
          >
            예전에 만들었기에 유지보수가 힘들어요
          </SpeechBubble>
          <SpeechBubble
            style={{
              animation: "posUp alternate infinite 1s 1.1s",
            }}
            className="text-white bg-[#C49664] after:border-t-[#C49664]"
          >
            새로운 제품들이 많이 추가되었어요
          </SpeechBubble>
          <SpeechBubble
            style={{
              animation: "posUp alternate infinite 1s 1.1s",
            }}
            className="text-white bg-[#C49664] after:border-t-[#C49664]"
          >
            다른 시스템들과도 연동하고 싶어요
          </SpeechBubble>
        </div> */}
      </div>
    </ProjectWrapper>
  );
}
