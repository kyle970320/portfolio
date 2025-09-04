import Modal from "../shared/Modal";
import { Typography } from "../shared/Typography";
import Hanwha from "./projects/hanwha/Hanwha";

const projectData = [
  {
    id: "hanwha",
    title: "한화비전의 DesignPro",
    desc: "DesignPro는 네트워크 제품 구성과 프로젝트 설계를 지원하는 웹 애플리케이션입니다. 프로젝트 생성, 지역 설정, 위치 지정, 용량 계산, 제품 비교, 데이터 시각화, 보고서 출력 등 프로젝트 관리에 필요한 주요 기능을 제공합니다.",
    image: "/hanwha.png",
  },
  {
    title: "project2",
    desc: "project 설명입니다 project 설명입니다project 설명입니다project 설명입니다project 설명입니다project 설명입니다project 설명입니다project 설명입니다project 설명입니다",
    image: "/free1.jpg",
  },
  {
    title: "project3",
    desc: "project 설명입니다 project 설명입니다project 설명입니다project 설명입니다project 설명입니다project 설명입니다project 설명입니다project 설명입니다project 설명입니다",
    image: "/free1.jpg",
  },
  {
    title: "project4",
    desc: "project 설명입니다 project 설명입니다project 설명입니다project 설명입니다project 설명입니다project 설명입니다project 설명입니다project 설명입니다project 설명입니다",
    image: "/free1.jpg",
  },
];

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
      {projectData.map((el, index) => {
        const { id, title, desc, image } = el;
        const key = `${title}_${index}`;
        return (
          <div
            key={key}
            className="group relative flex flex-col justify-end h-[250px] cursor-pointer rounded-2xl overflow-hidden"
            onClick={() => {
              const getCurrntDetail = () => {
                if (id === "hanwha") {
                  return <Hanwha />;
                }
              };
              Modal.open({
                detail: getCurrntDetail(),
              });
            }}
          >
            <div className="absolute z-1 inset-0 h-full w-full scale-110 rounded-xl bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.1)] to-transparent transition-all duration-200 group-hover:bg-[rgba(0,0,0,0.3)]" />
            <img
              src={image}
              alt=""
              className="absolute object-cover object-center w-full h-full transition-all duration-200 group-hover:blur-xs"
            />
            <div className="flex flex-col justify-end relative z-2 text-white p-4 h-full">
              <div className={`max-h-full relative top-0 overflow-hidden`}>
                <Typography color={"white"} className={`ellipsis-1-line`}>
                  {title}
                </Typography>
                <Typography className="text-sm text-gray-300 ellipsis-2-line">
                  {desc}
                </Typography>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
