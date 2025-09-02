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
    title: "History",
    id: "history_section",
  },
  {
    title: "Value",
    id: "value_section",
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
    title: "main",
    id: "main_section",
  },
  {
    title: "contact",
    id: "contact_section",
  },
];
export default function Header() {
  const [headerBg, setHeaderBg] = useState<string>("bg-transparent");

  useEffect(() => {
    const modifyBg = () => {
      if (window.scrollY > 10) {
        setHeaderBg("bg-[#ffffff5a] backdrop-blur-md");
      } else {
        setHeaderBg("bg-transparent");
      }
    };
    window.addEventListener("scroll", modifyBg);
    return () => window.removeEventListener("scroll", modifyBg);
  }, []);

  return (
    <div className="fixed hidden justify-center left-0 z-13 w-full py-10 px-5 sm:flex">
      <div
        className={`flex justify-center items-center gap-5 py-2 px-4 ${headerBg} rounded-2xl transition-all duration-100`}
      >
        <div className="flex items-center gap-4">
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
