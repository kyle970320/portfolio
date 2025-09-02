import Modal from "../shared/Modal";
import { Typography } from "../shared/Typography";

const projectData = [
  {
    title: "project1",
    desc: "project 설명입니다 project 설명입니다project 설명입니다project 설명입니다project 설명입니다project 설명입니다project 설명입니다project 설명입니다project 설명입니다",
    image: "/free1.jpg",
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
        const { title, desc, image } = el;
        const key = `${title}_${index}`;
        return (
          <div
            key={key}
            className="group relative flex flex-col justify-end h-[250px] cursor-pointer rounded-2xl overflow-hidden"
            onClick={async () => {
              Modal.open({
                detail: <></>,
              });
            }}
          >
            <div className="absolute z-1 inset-0 h-full w-full scale-110 rounded-xl bg-gradient-to-t from-[rgba(0,0,0,0.65)] via-[rgba(0,0,0,0.1)] to-transparent transition-all duration-200 group-hover:bg-[rgba(0,0,0,0.55)]" />
            <img
              src={image}
              alt=""
              className="absolute object-cover object-center w-full h-full transition-all duration-200 group-hover:blur-lg"
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
