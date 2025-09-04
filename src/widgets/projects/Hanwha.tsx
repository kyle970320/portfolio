import { useEffect, useRef, useState } from "react";
import WindowView from "../../shared/WindowView";
import Folder from "./../../shared/Folder";
import ImageViewer from "../../shared/ImageViewer";

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
          className="flex justify-between h-[77%] px-10 pt-8 pb-5"
          style={{
            background: "linear-gradient(180deg, #FFECE0 0%, #FEFEFE 100%)",
          }}
        >
          <div>
            <p>
              <span className="inline-block bg-black py-0.5 px-2 text-white text-sm rounded-2xl">
                Goal
              </span>
              <span className="ml-2 inline-block text-sm">
                기존 레거시 프로젝트를 리뉴얼
              </span>
            </p>
            <img
              src="/hanwha_logo.webp"
              alt=""
              className="mt-6 mb-2 w-68 h-12 object-cover object-center"
            />
            <p className="text-xl font-semibold">
              Design Pro시스템: Re-engineering
            </p>
          </div>
          <div className="w-[55%] flex flex-col justify-center">
            <div className="relative h-full">
              <div className="flex justify-center items-end rounded-b-[50%] h-full bg-gradient-to-t from-[#FFDFC6] via-[#FFDFC6] via-10% to-transparent overflow-clip">
                <Folder
                  color="#ffbf96"
                  size={2.5}
                  items={[
                    <WindowView
                      src="/hanwha_recorder.png"
                      className="w-[100%]"
                      onClick={() => {
                        ImageViewer.open({
                          url: "/hanwha.png",
                        });
                      }}
                    />,
                    <WindowView
                      src="/hanwha.png"
                      className="w-[100%]"
                      onClick={() => {
                        ImageViewer.open({
                          url: "/hanwha.png",
                        });
                      }}
                    />,
                  ]}
                />
              </div>
              <div className="absolute top-[75%] left-[-10%] inline-block bg-[#C49664] px-2 text-white text-lg rounded-2xl shadow-xl">
                # 전문적인 Flow
              </div>
              <div className="absolute top-[85%] inline-block bg-white px-2 text-[#C49664] text-lg rounded-2xl shadow-xl">
                # api 통신 최소화
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 px-10">
          <div>
            <p className="text-[#563C22] text-sm font-bold">프로젝트 개요</p>
            <div className="flex items-baseline gap-1">
              <span className="inline-block text-xs text-black font-semibold">
                기간
              </span>
              <span className="text-[11px] text-gray-600">
                2024.04 ~ 진행중
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="inline-block text-xs text-black font-semibold">
                기여도
              </span>
              <span className="text-[11px] text-gray-600">
                FE: 5명 / BE:2 명/ 35%
              </span>
            </div>
          </div>
          <div>
            <p className="text-[#563C22] text-sm font-bold">참여 기능</p>
            <div className="text-[11px] text-gray-700 whitespace-pre-line">
              {`- 데이터 저장 : IndexedDB를 활용해 개인 브라우저에 데이터 저장 
              - 위치 지정 : Google Map을 활용해 프로젝트 위치 지정 기능 개발 설정
              - 복사/이동 : 프로젝트 설정을 export/import하여 PC간 이동 제품
              - 데이터 시각화 : 프로젝트에 등록된 제품 정보를 차트로 시각화 제품
              - 비교 : 선택한 제품들의 주요 정보를 비교할 수 있는 테이블 제공`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
