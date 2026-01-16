import { ChevronsDown } from "lucide-react";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function HanwhaLanguage() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #FFF6EA 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex h-full">
        <div className="flex flex-col gap-4 items-start p-8 w-3/10 h-full bg-[#342F2D]">
          <p className="inline-block py-1 px-2 rounded-[4px] text-white bg-[#818181]">
            Point 2
          </p>
          <div className="text-xl text-white font-bold">
            <p>동적 다국어 지원</p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">라이브러리 없이 다국어 지원</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[100%]">
                라이브러리 없이{" "}
                <span className="text-[#fdb65a]">동적으로 다국어 지원</span>
              </span>
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-3 p-10 w-7/10 h-full bg-[#fef9ec] overflow-hidden">
          <div className="w-4/5 bg-white p-3 rounded-lg">
            <div className="flex flex-wrap">
              <div className="w-1/5 text-[#ff9c1b] text-center border-1 border-black">
                key
              </div>
              <div className="w-1/5 text-[#ff9c1b] text-center border-1 border-black">
                korean
              </div>
              <div className="w-1/5 text-[#ff9c1b] text-center border-1 border-black">
                english
              </div>
              <div className="w-1/5 text-[#ff9c1b] text-center border-1 border-black">
                Japanese
              </div>
              <div className="w-1/5 text-[#ff9c1b] text-center border-1 border-black">
                Chinese
              </div>
              <div className="w-full mt-3">
                <div className="mx-auto w-1.5 h-1.5 rounded-2xl bg-gray-700"></div>
              </div>
              <div className="w-full my-3">
                <div className="mx-auto w-1.5 h-1.5 rounded-2xl bg-gray-700 opacity-80"></div>
              </div>
              <div className="w-1/5 text-[#ff9c1b] text-center border-1 border-black">
                HELLO
              </div>
              <div className="w-1/5 text-center border-1">안녕하세요</div>
              <div className="w-1/5 text-center border-1">Hello</div>
              <div className="w-1/5 text-center border-1">こんにちは</div>
              <div className="w-1/5 text-center border-1">你好</div>
              <div className="w-1/5 text-[#ff9c1b] text-center border-1 border-black">
                WELCOME
              </div>
              <div className="w-1/5 text-center border-1">환영합니다</div>
              <div className="w-1/5 text-center border-1">Welcome</div>
              <div className="w-1/5 text-center border-1">ようこそ</div>
              <div className="w-1/5 text-center border-1">欢迎</div>
              <div className="w-full mt-3">
                <div className="mx-auto w-1.5 h-1.5 rounded-2xl bg-gray-700"></div>
              </div>
              <div className="w-full my-3">
                <div className="mx-auto w-1.5 h-1.5 rounded-2xl bg-gray-700 opacity-80"></div>
              </div>
            </div>
          </div>
          <div>
            <ChevronsDown />
          </div>
          <div className="w-4/5 p-2 bg-white shadow-xl rounded-lg">
            안녕하세요 환영합니다
          </div>
          <div className="w-4/5 p-2 bg-white shadow-xl rounded-lg">
            Hello Welcome
          </div>
          <div className="w-4/5 p-2 bg-white shadow-xl rounded-lg">
            こんにちは ようこそ
          </div>
          <div className="w-4/5 p-2 bg-white shadow-xl rounded-lg">
            你好 欢迎
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
