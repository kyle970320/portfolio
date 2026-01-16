import ImageViewer from "../../../shared/ImageViewer";
import WindowWrapper from "../../../shared/WindowWrapper";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function ExtraNews() {
  return (
    <ProjectWrapper
      className="mb-10"
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
            뉴스 수집 및 분석 시스템 개발
            <a
              className="text-gray-500"
              href="https://news-dashboard-fawn-nu.vercel.app/"
            >
              {" "}
              (바로가기)
            </a>
          </p>
          <p className="text-sm text-gray-500 text-center font-bold mt-3 mb-3">
            아이디: master@news.com 비밀번호: breedingbugs12!
          </p>
          <div className="mt-5 text-gray-700 text-sm text-center">
            <p>
              개별적인 정보 수집은 한계가 있어 투자 가치가 떨어지는 문제를
              해결하기 위해
            </p>
            <p>
              Node.js 스케줄러와 GitHub Actions를 연동하여 20분 주기로 뉴스
              수집을 자동화하고, 매체 신뢰도와 이벤트 유형별 가중치를 적용한
              자체 점수 알고리즘을 구현했습니다.
            </p>
            <p>
              LLM연동으로 기준 초과시 Discord 웹훅으로 즉시 알림이 발송되는
              시스템을 구축했습니다.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-10 items-center relative w-[75%] mt-10">
          <div className="relative w-[45%] h-65">
            <WindowWrapper
              className="relative w-full"
              src="/extra_news.png"
              onClick={() => {
                ImageViewer.open({
                  url: "/extra_news.png",
                });
              }}
            />
          </div>
          <div className="relative w-[25%] h-65">
            <WindowWrapper
              className="relative w-full"
              src="/extra_discord.png"
              onClick={() => {
                ImageViewer.open({
                  url: "/extra_discord.png",
                });
              }}
            />
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
