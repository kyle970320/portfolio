import { Typography } from "./../shared/Typography";
const introList = [
  {
    title: "부족해도 채우는사람",
    desc: "나에 대한 설명입니다1 나에 대한 설명입니다1 나에 대한 설명입니다1 나에 대한 설명입니다1 나에 대한 설명입니다1",
    image: "/free1.jpg",
  },
  {
    title: "부족해도 채우는사람",
    desc: "나에 대한 설명입니다1 나에 대한 설명입니다1 나에 대한 설명입니다1 나에 대한 설명입니다1 나에 대한 설명입니다1",
    image: "/free1.jpg",
  },
  {
    title: "부족해도 채우는사람",
    desc: "나에 대한 설명입니다1 나에 대한 설명입니다1 나에 대한 설명입니다1 나에 대한 설명입니다1 나에 대한 설명입니다1",
    image: "/free1.jpg",
  },
  {
    title: "부족해도 채우는사람",
    desc: "나에 대한 설명입니다1 나에 대한 설명입니다1 나에 대한 설명입니다1 나에 대한 설명입니다1 나에 대한 설명입니다1",
    image: "/free1.jpg",
  },
];

export default function IntroSection() {
  return (
    <div id={"intro"} className="max-w-200 px-6 mx-auto">
      <div className="text-center">
        <Typography className="text-center mb-2 font-gmarket text-gray-300">
          저를 소개합니다!
        </Typography>
      </div>
      <div className="flex items-center gap-6 mb-5">
        <div className="w-full h-[2px] rounded-4xl my-5 bg-gradient-to-l from-gray-500 via-gray-500 via-60% to-black" />
        <div className="min-w-[8%] text-center">
          <Typography className="text-2xl text-main font-gmarket font-bold">
            Intro
          </Typography>
        </div>
        <div className="w-full h-[2px] my-5 bg-gradient-to-r from-gray-500 via-gray-500 via-60% to-black" />
      </div>
      <div className="flex flex-col gap-10">
        {introList.map((el, index) => {
          const { title, desc, image } = el;
          const key = `${el}_${index}`;
          const hasImage = el.image ? "w-[65%]" : "w-full";
          const isFlexReverse = index % 2 ? "flex-row-reverse" : "flex-row";
          return (
            <div
              key={key}
              className={`flex ${isFlexReverse} items-center justify-between gap-[5%]`}
            >
              <div className={`${hasImage}`}>
                <p className="text-xl text-white font-gmarket font-bold">
                  {title}
                </p>
                <Typography className="text-gray-300">{desc}</Typography>
              </div>
              {hasImage && (
                <div className="relative w-[30%] max-w-[215px] min-w-[190px] aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    style={{
                      objectFit: "cover",
                      objectPosition: "center center",
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
