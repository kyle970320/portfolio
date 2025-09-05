import { ChevronsRight } from "lucide-react";
import ProjectWrapper from "../ui/ProjectWrapper";
import DsketExample from "./../ui/DsketExample";

export default function DsketDesc() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #fff3d6 0%, #FFFFFF 100%)",
      }}
    >
      <div className="relative flex flex-col h-full justify-center items-center overflow-hidden">
        <div className="relative w-[78%]">
          <p className="text-[#e6a607] text-center font-bold">
            프로젝트에 대하여
          </p>
          <p className="text-2xl text-center font-bold mt-3 mb-3">
            Notion 기반의 간편한 웹빌더를 제공해요
          </p>
          <div className="mt-5 text-gray-700 text-sm text-center">
            <p>
              Dsket은 Notion에서 데이터를 연동해서 웹사이트를 발행해주는
              서비스입니다.
            </p>
            <p>
              사용자는 원하는 내용을 삽입 변경하며, 이 내용이 실시간으로
              웹사이트에 반영됩니다.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center relative w-[75%] mt-10">
          <div className="relative flex flex-col w-[45%] bg-[#ffc] shadow-xl py-7 px-5">
            <img
              src="/notion_logo.png"
              alt=""
              className="absolute w-26 top-[-32px] left-[-46px]"
            />
            <div className="border-b-1 font-bold text-sm py-0.5 mr-16">
              제목
            </div>
            <div className="border-b-1 text-sm py-0.5 mr-16">평범한 개발자</div>
            <div className="border-b-1 font-bold text-sm py-0.5 mr-16">
              부제목
            </div>
            <div className="border-b-1 text-sm py-0.5  mr-8">박민규입니다</div>
            <div className="border-b-1 font-bold text-sm py-0.5 mr-8">
              배경타입
            </div>
            <div className="border-b-1 text-sm py-0.5 mr-8">Blob</div>
            <div className="w-full mt-3">
              <div className="mx-auto w-1.5 h-1.5 rounded-2xl bg-gray-700"></div>
            </div>
            <div className="w-full mt-3">
              <div className="mx-auto w-1.5 h-1.5 rounded-2xl bg-gray-700 opacity-80"></div>
            </div>
            <div className="w-full mt-3">
              <div className="mx-auto w-1.5 h-1.5 rounded-2xl bg-gray-700 opacity-60"></div>
            </div>
          </div>

          <div className="w-[4%]">
            <ChevronsRight size={30} />
          </div>
          <div className="relative w-[45%] h-65">
            <img
              src="/chrome_logo.png"
              alt=""
              className="absolute z-1000 w-14 top-[-30px] left-[-28px]"
            />
            <DsketExample />
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
