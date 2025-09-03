import { Typography } from "./../shared/Typography";
const introList = [
  {
    title: "평범함을 강점으로",
    desc: `안녕하세요. 프론트엔드 개발자 박민규 입니다.

평소 논리적으로 말하는 것을 좋아하고, 이 때문에 다른 이와의 대화를 통해 생각의 차이를 좁혀 나가는 것을 좋아합니다. 
높아진 이해를 바탕으로 다른 이가 읽기 쉬운 코드를 생각하며, 중복없는 코드를 짜기 위해 노력합니다.

ui, ux를 가장 중요하게 생각하여 개발합니다.
특별한 것도 좋지만 불특정 다수의 사용성 역시 매우 중요하게 생각합니다.`,
    image: "/intro_1.png",
  },
];

export default function IntroSection() {
  return (
    <div id={"intro_section"} className="max-w-200 px-6 mx-auto">
      <div className="text-center">
        <Typography className="text-center mb-2 font-gmarket text-gray-300">
          저를 소개합니다!
        </Typography>
      </div>
      <div className="flex items-center gap-6 mb-5">
        <div className="w-full h-[2px] rounded-4xl my-5 bg-gradient-to-l from-gray-500 via-gray-500 via-60% to-black" />
        <div className="min-w-25 w-[15%] text-center">
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
                <Typography className="text-gray-300 whitespace-pre-line">
                  {desc}
                </Typography>
              </div>
              {hasImage && (
                <div className="relative w-[30%] max-w-[215px] min-w-[190px] aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
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
