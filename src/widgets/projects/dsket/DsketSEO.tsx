import ImageViewer from "../../../shared/ImageViewer";
import SpeechBubble from "../../../shared/SpeechBubble";
import WindowWrapper from "../../../shared/WindowWrapper";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function DsketSEO() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #fff3d6 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex h-full">
        <div className="flex flex-col gap-4 items-start p-8 w-3/10 h-full bg-[#342F2D]">
          <p className="inline-block py-1 px-2 rounded-[4px] text-white bg-[#818181]">
            Point 2
          </p>
          <div className="text-xl text-white">
            <p>SEO 최적화</p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p>SSR 기반 페이지 렌더링</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                Next js 사용으로 기본적인 SEO 성능 향상
              </span>
            </p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p>메타 태그 커스텀 생성</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                템플릿 별 메타데이터 노션 연동으로 커스텀 추가
              </span>
            </p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                다양한 블록 타입(Text, embed, List 등)을 React 컴포넌트로 매핑
              </span>
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-between p-10 w-7/10 h-full bg-[#F7F2EA] overflow-hidden">
          <WindowWrapper
            className="relative w-[50%]"
            src="/dsket_seo.png"
            title="민규의 포트폴리오"
            logo="/profile.png"
            onClick={() => {
              ImageViewer.open({
                url: "/dsket_seo.png",
              });
            }}
          />
          <div className="absolute w-58 border-t-gray-300 border-t-3 border-dashed top-50 left-49.5 rotate-220" />
          <SpeechBubble className="w-60 h-20 after:!hidden">
            <div className="font-semibold">
              <p>메타데이터를 동적으로 호출</p>
              <p>title, desc, favicon 등의 값 수령</p>
              <p>해당 값으로 SEO 최적화, 실시간 반영</p>
            </div>
          </SpeechBubble>
        </div>
      </div>
    </ProjectWrapper>
  );
}
