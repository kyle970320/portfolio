import { Typography } from "../shared/Typography";

const historyData = [
  {
    title: "데이터스케쳐스",
    date: "2025",
    desc: `업무내용입니다업무내용입니다업무내용입니다업무내용입니다업무내용입니다
업무내용입니다 업무내용입니다 업무내용입니다 업무내용입니다
업무내용입니다 업무내용입니다 업무내용입니다 업무내용입니다
업무내용입니다 업무내용입니다 업무내용입니다 업무내용입니다
업무내용입니다`,
    images: ["/free1.jpg", "/free1.jpg", "/free1.jpg"],
  },
  {
    title: "아주 좋은 회사",
    date: "2024",
    desc: `업무내용입니다업무내용입니다업무내용입니다업무내용입니다업무내용입니다
업무내용입니다 업무내용입니다 업무내용입니다 업무내용입니다
업무내용입니다 업무내용입니다 업무내용입니다 업무내용입니다
업무내용입니다 업무내용입니다 업무내용입니다 업무내용입니다
업무내용입니다`,
    images: ["/free1.jpg", "/free1.jpg", "/free1.jpg"],
  },
  {
    title: "조금 좋은 회사",
    date: "2024",
    desc: `업무내용입니다업무내용입니다업무내용입니다업무내용입니다업무내용입니다
업무내용입니다 업무내용입니다 업무내용입니다 업무내용입니다
업무내용입니다 업무내용입니다 업무내용입니다 업무내용입니다
업무내용입니다 업무내용입니다 업무내용입니다 업무내용입니다
업무내용입니다`,
    images: ["/free1.jpg", "/free1.jpg", "/free1.jpg"],
  },
];
export default function HistorySection() {
  return (
    <div
      id={"history_section"}
      className="max-w-200 px-6 my-60 mx-auto text-white"
    >
      <div className="text-center">
        <Typography className="text-center mb-2 font-gmarket text-gray-300">
          저의 history 입니다!
        </Typography>
      </div>
      <div className="flex items-center gap-6 mb-5">
        <div className="w-full h-[2px] rounded-4xl my-5 bg-gradient-to-l from-gray-500 via-gray-500 via-60% to-black" />
        <div className="min-w-25 w-[15%] text-center">
          <Typography className="text-2xl text-main font-gmarket font-bold">
            History
          </Typography>
        </div>
        <div className="w-full h-[2px] my-5 bg-gradient-to-r from-gray-500 via-gray-500 via-60% to-black" />
      </div>
      {historyData.map((el, index) => {
        const { title, desc, date, images } = el;
        const key = `${title}_${index}`;

        return (
          <div key={key} className="flex justify-between py-6">
            <div className="w-[30%] text-right">{date}</div>
            <div className="w-[60%] flex flex-col gap-2">
              <div className="text-xl font-gmarket font-bold">{title}</div>
              <div className="p-2 bg-[#06142b] rounded-xl">
                <Typography className="text-gray-300">{desc}</Typography>
              </div>
              <div className="flex gap-3">
                {images.map((image, idx) => {
                  const key = `${image}_${idx}`;
                  return (
                    <div
                      key={key}
                      className={`relative w-7 h-7 rounded-sm overflow-hidden`}
                    >
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
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
