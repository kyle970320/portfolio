import Folder from "../../../shared/Folder";
import WindowView from "../../../shared/WindowView";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function MinusMain() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #e8faec 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex justify-between gap-15 h-[77%] px-10 pt-8 pb-5">
        <div>
          <p>
            <span className="inline-block bg-black py-0.5 px-2 text-white text-sm rounded-2xl">
              Goal
            </span>
            <span className="ml-2 inline-block text-sm">
              개인 블로그 & UI - UX 라이브러리 배포
            </span>
          </p>
          <div className="mt-6 mb-2 flex items-center gap-2">
            <img
              src="/minus_logo.png"
              alt=""
              className="h-8 object-cover object-center"
            />
          </div>
          <p className="text-xl font-semibold">코드를 간결하게, Minus</p>
        </div>
        <div className="mx-auto pb-5 w-[60%] flex justify-center">
          <div className="relative w-full h-full">
            <div className="flex justify-center items-end rounded-b-[50%] h-full bg-gradient-to-t from-[#bffcce] via-[#bffcce] via-10% to-transparent overflow-clip">
              <Folder
                color="#87c094"
                size={2.5}
                items={[
                  <WindowView
                    src="/minus_npm.png"
                    className="w-[100%] h-full"
                  />,
                  <WindowView src="/minus_blog.png" className="w-[100%]" />,
                ]}
              />
            </div>
            <div className="absolute top-[75%] left-[-10%] inline-block bg-[#647a69] px-2 text-white text-lg rounded-2xl shadow-xl">
              # 직접 개발한 npm 라이브러리
            </div>
            <div className="absolute top-[85%] inline-block bg-white px-2 font-semibold text-[#647a69] text-lg rounded-2xl shadow-xl">
              # 공부를 위한 개인블로그
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 px-10">
        <div>
          <p className="text-[#647a69] text-sm font-bold">프로젝트 개요</p>
          <div className="flex items-baseline gap-1">
            <span className="inline-block text-xs text-black font-semibold">
              기간
            </span>
            <span className="text-[11px] text-gray-600">2024.10 ~ 2025.02</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="inline-block text-xs text-black font-semibold">
              기여도
            </span>
            <span className="text-[11px] text-gray-600">개인 / 100%</span>
          </div>
        </div>
        <div>
          <p className="text-[#647a69] text-sm font-bold">참여 기능</p>
          <div className="text-[11px] text-gray-700 whitespace-pre-line">
            {`- 비로그인 댓글 기능 : 댓글 작성, 비밀 댓글 수정·삭제 시 확인 번호 필요
- 라이트/다크 모드 : 사용자가 테마를 선택할 수 있도록 모드 제공
- 반응형 레이아웃 : PC, 모바일 환경에 맞춰 최적화된 화면 제공
- 페이지 링크 복사 기능 : 보고 있는 게시글의 링크를 간편하게 복사 가능
- 즐겨찾기 기능 : 사용자가 원하는 게시글을 즐겨찾기하여 쉽게 다시 찾아볼 수 있도록 지원
`}
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
