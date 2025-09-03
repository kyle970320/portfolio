import { Typography } from "../shared/Typography";

const historyData = [
  {
    title: "(주)데이터스케쳐스",
    date: "2025",
    desc: `Notion 기반 웹빌더 서비스 런칭 (sub job)
    - 범용성 있는 템플릿 개발
    - 내부 로직을 private한 라이브러리화
    - 300만원+ 수익 창출(진행중)
    `,
    images: ["/notion_logo.png", "/next_logo.jpg", "/free1.jpg"],
  },
  {
    title: "(주)팜존에스엔씨",
    date: "2024 ~ 재직중",
    desc: `고객 소통용 어플, CMS 개발 / 외주 개발
    - 한화비전 DesignPro 개발
    - 사내 FE 컨벤션, 프로세스 적립
    `,
    images: ["/free1.jpg", "/free1.jpg", "/free1.jpg"],
  },
  {
    title: "액트베이스 유한책임회사",
    date: "2023 ~ 2024",
    desc: `외주 개발
    - 아워홈 스마트팩토리 전환 디지털 클러스터 사업
    - 풀무원 내부 HR 어플 유지 보수
    `,
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
        const { title, desc, date } = el;
        const key = `${title}_${index}`;

        return (
          <div key={key} className="flex justify-between py-6">
            <div className="w-[30%] text-right">{date}</div>
            <div className="w-[60%] flex flex-col gap-2">
              <div className="text-xl font-gmarket font-bold">{title}</div>
              <div className="p-6 bg-[#06142b] rounded-xl">
                <Typography className="text-gray-200 whitespace-pre-line">
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
