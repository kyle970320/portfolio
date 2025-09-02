import { Typography } from "../shared/Typography";
import ValueCard from "../widgets/ValueCard";

const valueData = [
  {
    id: "1",
    title: "창의성",
    desc: "제 창의성을 설명드립니다",
    color: "",
  },
  {
    id: "2",
    title: "유연성",
    desc: "유연하게 대처할 수 있는 참된 인재입니다",
    color: "",
  },
  {
    id: "3",
    title: "객관성",
    desc: "객관적인 시선으로 바라봅니다.",
    color: "",
  },
];
export default function ValueSection() {
  const randInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomRGB = (min = 33, max = 255) => {
    const r = randInt(min, max);
    const g = randInt(min, max);
    const b = randInt(min, max);
    return `rgb(${r}, ${g}, ${b})`;
  };
  return (
    <div id={"value_section"} className="max-w-200 px-6 m-60 mx-auto">
      <div className="text-center">
        <Typography className="text-center mb-2 font-gmarket text-gray-300">
          제가 가진 가치관입니다!
        </Typography>
      </div>

      <div className="flex items-center gap-6 mb-5">
        <div className="w-full h-[2px] rounded-4xl my-5 bg-gradient-to-l from-gray-500 via-gray-500 via-60% to-black" />
        <div className="min-w-25 w-[15%] text-center">
          <Typography className="text-2xl text-main font-gmarket font-bold">
            Values
          </Typography>
        </div>
        <div className="w-full h-[2px] my-5 bg-gradient-to-r from-gray-500 via-gray-500 via-60% to-black" />
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {valueData.map((el, index) => {
          const { id, title, desc, color = "" } = el;
          const key = `${title}_${index}`;
          const currentColor = color || randomRGB();
          return (
            <ValueCard
              key={key}
              id={id}
              title={title}
              desc={desc}
              color={currentColor}
            />
          );
        })}
      </div>
    </div>
  );
}
