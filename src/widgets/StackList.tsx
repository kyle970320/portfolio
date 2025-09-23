import { useEffect, useState } from "react";
import { Tooltip } from "@minus-ui/core";
const stackData = [
  {
    category: "front",
    image: "/skills/javascript-original.svg",
    content: "Javascript",
  },
  {
    category: "front",
    image: "/skills/typescript-original.svg",
    content: "Typescript",
  },
  {
    category: "front",
    image: "/skills/react-original-wordmark.svg",
    content: "React",
  },
  {
    category: "front",
    image: "/skills/header_logo.svg",
    content: "React-Native",
  },
  {
    category: "front",
    image: "/skills/nextjs-2.svg",
    content: "Next",
  },
  {
    category: "library",
    image: "/skills/zustand.webp",
    content: "Zustand",
  },
  {
    category: "library",
    image: "/skills/redux-original.svg",
    content: "Redux",
  },
  {
    category: "library",
    image: "/skills/sass-original.svg",
    content: "Sass",
  },
  {
    category: "library",
    image: "/skills/Storybook.webp",
    content: "StoryBook",
  },
  {
    category: "library",
    image: "/skills/Styled-components.webp",
    content: "Styled-Components",
  },
  {
    category: "library",
    image: "/skills/tailwindcss-icon.svg",
    content: "Tailwind",
  },
  {
    category: "library",
    image: "/skills/Tanstack-query.webp",
    content: "Tanstack-Query",
  },
  {
    category: "others",
    image: "/skills/Vite.webp",
    content: "Vite",
  },
  {
    category: "others",
    image: "/skills/firebase-icon.svg",
    content: "Firebase",
  },
  {
    category: "others",
    image: "/skills/supabase.jpg",
    content: "Supabase",
  },
  {
    category: "others",
    image: "/skills/github.webp",
    content: "Github",
  },
  {
    category: "others",
    image: "/skills/jenkins-icon.svg",
    content: "Jenkins",
  },
];
export default function StackList() {
  const [list, setList] = useState<{
    [key: string]: Array<{ image: string; content: string }>;
  }>({});
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const listArray = Object.entries(list);

  useEffect(() => {
    const currentList: {
      [key: string]: Array<{ image: string; content: string }>;
    } = {};
    stackData.map((el) => {
      const category = el.category;
      const image = { image: el.image, content: el.content };

      if (!currentList[category]) {
        currentList[category] = [];
      }
      currentList[category].push(image);
    });
    setList(currentList);
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
        {listArray.map(([key], index) => {
          const mapKey = `${key}_${index}`;
          const isCurrentCategoryClass =
            currentCategory === key ? "font-bold" : "";
          return (
            <div
              className={`font-gmarket ${isCurrentCategoryClass} cursor-pointer text-white`}
              key={mapKey}
              onClick={() => {
                if (currentCategory === key) {
                  setCurrentCategory("");
                  return;
                }
                setCurrentCategory(key);
              }}
            >
              {key}
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-4 justify-between items-start">
        {listArray.map(([key, values], index) => {
          const isBlurClass = () => {
            if (!currentCategory) {
              return "";
            }
            if (currentCategory === key) {
              return "";
            }
            if (currentCategory !== key) {
              return "blur-lg";
            }
          };
          return (
            <div
              key={"stack" + index}
              className={`flex felx-col flex-wrap justify-center items-center gap-2 w-full ${isBlurClass()} transition-all duration-100`}
            >
              {values.map((images, idx) => {
                const { image, content } = images;
                const mapKey = `${image}_${idx}`;

                return (
                  <div
                    key={mapKey}
                    className={`relative w-12 h-12 opacity-100 transition-all ease-out duration-100 cursor-pointer`}
                  >
                    <Tooltip
                      contents={content}
                      position="bottom"
                      backgroundColor="rgba(66,66,66,1)"
                      containerClassName="h-full"
                      contentClassName="z-1000 text-white font-semibold"
                    >
                      <img
                        src={image}
                        className="p-0.5 rounded-xl"
                        alt=""
                        style={{
                          backgroundColor: "rgba(255,255,255,1)",
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          objectPosition: "center center",
                        }}
                      />
                    </Tooltip>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
