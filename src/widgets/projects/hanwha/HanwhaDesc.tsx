import SpeechBubble from "../../../shared/SpeechBubble";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function HanwhaDesc() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #fdf3ec 0%, #FEFEFE 100%)",
      }}
    >
      <div className="relative flex flex-col h-full justify-center items-center overflow-hidden">
        <div className="relative w-[55%]">
          <p className="text-[#563C22] font-bold">프로젝트에 대하여</p>
          <p className="text-2xl font-bold mt-3 mb-3">
            기존 Legacy한 로직들을 변경해서 새롭게 출발해요!
          </p>
          <div className="text-gray-700">{`DesignPro는 네트워크 제품 구성과 프로젝트 설계를 지원하는 웹
          애플리케이션입니다. 프로젝트 생성, 지역 설정, 위치 지정, 용량 계산,
          제품 비교, 데이터 시각화, 보고서 출력 등 프로젝트 관리에 필요한 주요
          기능을 제공합니다.`}</div>
        </div>
        <div className="relative flex w-[60%] h-50 flex-wrap gap-10 justify-center mt-10">
          <img
            src="/cctv.png"
            alt=""
            className="absolute top-0 left-[90%] w-20 h-20 z-21"
          />
          <div
            className="trapezoid-icon"
            style={{
              animation: "twinkle alternate infinite 1s",
            }}
          ></div>
          <div className="relative w-[100%] h-50 rounded-b-[50%] overflow-clip">
            <SpeechBubble className="absolute bottom-3 left-18 text-white bg-[#C49664FF] after:border-t-[#C49664]">
              이전 화면들은 가독성이 부족해요
            </SpeechBubble>
            <SpeechBubble className="absolute bottom-24 left-28 text-white bg-[#C49664] after:border-t-[#C49664]">
              다른 기능들을 추가하고 싶어요
            </SpeechBubble>
            <SpeechBubble className="absolute bottom-15 left-52 text-white bg-[#C49664] after:border-t-[#C49664]">
              예전에 만들었기에 유지보수가 힘들어요
            </SpeechBubble>
            <SpeechBubble className="absolute bottom-0 left-68 text-white bg-[#C49664] after:border-t-[#C49664]">
              새로운 제품들이 많이 추가되었어요
            </SpeechBubble>
            <SpeechBubble className="absolute bottom-20 left-88 text-white bg-[#C49664] after:border-t-[#C49664]">
              다른 시스템들과도 연동하고 싶어요
            </SpeechBubble>
            <SpeechBubble className="absolute bottom-7 left-110 text-white bg-[#C49664] after:border-t-[#C49664]">
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
