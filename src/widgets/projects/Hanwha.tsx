import { useEffect, useRef, useState } from "react";

export default function Hanwha() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionH, setSectionH] = useState<string>("");
  useEffect(() => {
    if (!sectionRef) {
      return;
    }
    const currentH = sectionRef.current?.getBoundingClientRect().width ?? 0;
    setSectionH(`${currentH * 0.56}px`);
  }, []);
  return (
    <div ref={sectionRef} className="w-full">
      <div
        className="bg-white text-black"
        style={{
          height: sectionH,
        }}
      >
        <div
          className="flex justify-between h-[87%] p-10"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #F7E9E0 100%)",
          }}
        >
          <div>
            <img
              src="/hanwha_logo.webp"
              alt=""
              className="w-45 h-8 object-cover object-center"
            />
            <p className="mt-2 text-xl font-semibold">DesignPro시스템</p>
            <p className="text-xl font-semibold">Re-engineering</p>
            <div className="flex gap-4 mt-1 text-xs">
              <div>
                <p>기간</p>
                <p>2024.04 ~ 진행중</p>
              </div>
              <div>
                <p>기여도</p>
                <p>40%</p>
              </div>
            </div>
          </div>
          <div className="w-[60%] flex flex-col justify-center">
            <div className="border-5 border-t-0 border-gray-800 rounded-[6px] overflow-hidden">
              <div className="flex gap-1 py-2 px-1 bg-gray-800">
                <div className="w-2.5 h-2.5 rounded-2xl bg-[#f5655b]"></div>
                <div className="w-2.5 h-2.5 rounded-2xl bg-[#f6bd3b]"></div>
                <div className="w-2.5 h-2.5 rounded-2xl bg-[#43c645]"></div>
              </div>
              <img src="/hanwha.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full h-[13%] px-10 text-sm bg-[#BB9062] rounded-tr-2xl">
          <div>팀원</div>
          <div>Front:6명 / Back:2명 / 기타 PM 및 DevOps</div>
        </div>
      </div>
    </div>
  );
}
