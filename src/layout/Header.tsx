import { useEffect, useState } from "react";
import { Typography } from "../shared/Typography";
// import { Typography } from "./../ui/Typography";

const headerItem = [
  {
    title: "Main",
    id: "main_section",
  },
  {
    title: "Intro",
    id: "intro_section",
  },
  {
    title: "Value",
    id: "value_section",
  },
  {
    title: "History",
    id: "history_section",
  },
  {
    title: "Stack",
    id: "stack_section",
  },
  {
    title: "Project",
    id: "project_section",
  },
  {
    title: "contact",
    id: "contact_section",
  },
];
export default function Header() {
  const [headerBg, setHeaderBg] = useState<string>("bg-transparent opacity-30");
  const [progressBarWidth, setProgressBarWidth] = useState<string>("0%");
  useEffect(() => {
    const modifyBg = () => {
      console.log(window.scrollY);
      const windowH = window.innerHeight;
      if (window.scrollY > windowH - 20) {
        setHeaderBg("bg-[#ffffff5a] backdrop-blur-md opacity-100");
        setProgressBarWidth(
          `${((window.scrollY + windowH) / document.body.scrollHeight) * 100}%`,
        );
      } else {
        setHeaderBg("bg-transparent opacity-30");
        setProgressBarWidth(`0%`);
      }
    };
    window.addEventListener("scroll", modifyBg);
    window.addEventListener("resize", modifyBg);
    return () => {
      window.removeEventListener("scroll", modifyBg);
      window.removeEventListener("resize", modifyBg);
    };
  }, []);
  return (
    <div className="fixed hidden justify-center left-0 z-101 w-full py-10 px-5 sm:flex">
      <div
        className={`relative flex justify-center items-center gap-5 py-2 px-4 ${headerBg} rounded-2xl transition-all duration-100 overflow-hidden`}
      >
        <div
          className="absolute top-0 left-0 h-full w-10 bg-main rounded-2xl"
          style={{ width: progressBarWidth }}
        />
        <div className="relative flex items-center gap-6 z-10">
          {headerItem.map((el, index) => {
            const key = `${el.title}_${index}`;
            return (
              <div
                className="cursor-pointer"
                key={key}
                onClick={() => {
                  const item = document.getElementById(`${el.id}`);
                  item?.scrollIntoView({ block: "center", behavior: "smooth" });
                }}
              >
                <Typography size={"lg"} color="white">
                  {el.title}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
