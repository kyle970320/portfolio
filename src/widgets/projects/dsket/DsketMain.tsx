import Folder from "../../../shared/Folder";
import WindowView from "../../../shared/WindowView";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function DsketMain() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #fff3d6 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex justify-between gap-15 h-[77%] px-10 pt-8 pb-5">
        <div>
          <p>
            <span className="inline-block bg-black py-0.5 px-2 text-white text-sm rounded-2xl">
              Goal
            </span>
            <span className="ml-2 inline-block text-sm">
              코딩없이 3분만에 발행되는 웹사이트
            </span>
          </p>
          <div className="mt-6 mb-2 flex items-center gap-2">
            <img
              src="/dsket_logo.png"
              alt=""
              className="w-12 h-12 object-cover object-center"
            />
            <div>
              <p className="text-base font-bold leading-4">Data</p>
              <p className="text-base font-bold leading-4">Sketchers</p>
            </div>
          </div>
          <p className="text-xl font-semibold">Notion을 db 삼은 간편 웹빌더</p>
        </div>
        <div className="mx-auto pb-5 w-[60%] flex justify-center">
          <div className="relative w-full h-full">
            <div className="flex justify-center items-end rounded-b-[50%] h-full bg-gradient-to-t from-[#fde49e] via-[#fde49e] via-10% to-transparent overflow-clip">
              <Folder
                color="#FFD561"
                size={2.5}
                items={[
                  <WindowView
                    src="/dsket_detail.png"
                    className="w-[100%] h-full"
                  />,
                  <WindowView
                    src="/dsket_dashboard.png"
                    className="w-[100%]"
                  />,
                ]}
              />
            </div>
            <div className="absolute top-[75%] left-[-10%] inline-block bg-[#FDBD19] px-2 text-white text-lg rounded-2xl shadow-xl">
              # 3분 완성의 마법
            </div>
            <div className="absolute top-[85%] inline-block bg-white px-2 font-semibold text-[#FDBD19] text-lg rounded-2xl shadow-xl">
              # 학습 곡선 제로
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 px-10">
        <div>
          <p className="text-[#e6a607] text-sm font-bold">프로젝트 개요</p>
          <div className="flex items-baseline gap-1">
            <span className="inline-block text-xs text-black font-semibold">
              기간
            </span>
            <span className="text-[11px] text-gray-600">2025.05 ~ 진행중</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="inline-block text-xs text-black font-semibold">
              기여도
            </span>
            <span className="text-[11px] text-gray-600">FE: 2명 / 40%</span>
          </div>
        </div>
        <div>
          <p className="text-[#e6a607] text-sm font-bold">참여 기능</p>
          <div className="text-[11px] text-gray-700 whitespace-pre-line">
            {`- 템플릿 개발: 사용하고 싶은 테마에 맞춘 다양한 템플릿 개발
- 로직 라이브러리화 : 노션에서 제공하는 Type을 편하게 바꿔주는 type mapper, 
노션에서 제공하는 block들을 가져와 특징을 살려 보여주는 notion rederer 등 
내부에서 사용하는 로직들을 깃랩에서 라이브러로 관리
`}
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
