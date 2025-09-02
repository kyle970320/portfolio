import { useEffect, useState } from "react";

const stackData = [
  {
    category: "front",
    image: "/free1.jpg",
  },
  {
    category: "front",
    image: "/free1.jpg",
  },
  {
    category: "library",
    image: "/free1.jpg",
  },
  {
    category: "deploy",
    image: "/free1.jpg",
  },
  {
    category: "deploy",
    image: "/free1.jpg",
  },
  {
    category: "library",
    image: "/free1.jpg",
  },
  {
    category: "front",
    image: "/free1.jpg",
  },
];
export default function StackList() {
  const [list, setList] = useState<{ [key: string]: Array<string> }>({});
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const listArray = Object.entries(list);

  useEffect(() => {
    const currentList: { [key: string]: Array<string> } = {};
    stackData.map((el) => {
      const category = el.category;
      const image = el.image;

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
                const mapKey = `${images}_${idx}`;

                return (
                  <div
                    key={mapKey}
                    className={`relative w-12 h-12 opacity-100 transition-all ease-out duration-100 cursor-pointer`}
                  >
                    <img
                      src={images}
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
          );
        })}
      </div>
    </>
  );
}
