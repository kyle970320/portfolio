import React, { useEffect, useRef, useState } from "react";

interface FolderProps {
  color?: string;
  size?: number;
  items?: React.ReactNode[];
  className?: string;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

export default function Folder({
  color = "#5227FF",
  size = 1,
  items = [],
  className = "",
}: FolderProps) {
  const folderRef = useRef<HTMLDivElement>(null);
  const maxItems = 2;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })),
  );

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor("#ffffff", 0.1);
  const paper2 = darkenColor("#ffffff", 0.05);
  const paper3 = "#ffffff";

  useEffect(() => {
    setOpen(true);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  }, []);

  useEffect(() => {
    if (!folderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setOpen(entry.isIntersecting); // 화면에 보이면 true, 아니면 false
      },
      {
        root: null, // viewport 기준
        rootMargin: "0px",
        threshold: 0.1, // 10% 이상 보이면 트리거
      },
    );

    observer.observe(folderRef.current);

    return () => {
      if (folderRef.current) {
        observer.unobserve(folderRef.current);
      }
    };
  }, []);

  const folderStyle: React.CSSProperties = {
    "--folder-color": color,
    "--folder-back-color": folderBackColor,
    "--paper-1": paper1,
    "--paper-2": paper2,
    "--paper-3": paper3,
  } as React.CSSProperties;

  const scaleStyle = { transform: `scale(${size})` };

  const getOpenTransform = (index: number) => {
    if (index === 0) return "translate(-83%, -90%) rotate(-10deg)";
    if (index === 1) return "translate(-16%, -90%) rotate(10deg)";
    // if (index === 2) return "translate(-50%, -100%) rotate(5deg)";
    return "";
  };

  return (
    <div ref={folderRef} style={scaleStyle} className={className}>
      <div
        className={`group relative transition-all duration-500 delay-300 ease-in cursor-pointer ${
          !open ? "hover:-translate-y-2" : ""
        }`}
        style={{
          ...folderStyle,
          transform: open ? "translateY(-8px)" : undefined,
        }}
      >
        <div
          className="relative w-[100px] h-[75px] rounded-tl-0 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          <span
            className="absolute z-0 bottom-[98%] left-0 w-[30px] h-[10px] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-0 rounded-br-0"
            style={{ backgroundColor: folderBackColor }}
          ></span>
          {papers.map((item, i) => {
            let sizeClasses = "";
            if (i === 0)
              sizeClasses = open ? "w-[100%] h-[88%]" : "w-[90%] h-[80%]";
            if (i === 1)
              sizeClasses = open ? "w-[100%] h-[88%]" : "w-[90%] h-[70%]";

            const transformStyle = open
              ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px)`
              : undefined;

            return (
              <div
                key={i}
                className={`absolute z-20 bottom-[10%] left-1/2 transition-all duration-600 delay-300 ease-in-out ${
                  !open
                    ? "transform -translate-x-1/2 translate-y-[10%] group-hover:translate-y-0"
                    : ""
                } ${sizeClasses}`}
                style={{
                  ...(!open ? {} : { transform: transformStyle }),
                  backgroundColor: i === 0 ? paper1 : i === 1 ? paper2 : paper3,
                  borderRadius: "10px",
                }}
              >
                <div className="hover:scale-110 transition-all duration-150">
                  {item}
                </div>
              </div>
            );
          })}
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-600 delay-300 ease-in-out ${
              !open ? "group-hover:[transform:skew(15deg)_scaleY(0.6)]" : ""
            }`}
            style={{
              backgroundColor: color,
              borderRadius: "5px 10px 10px 10px",
              ...(open && { transform: "skew(15deg) scaleY(0.6)" }),
            }}
          ></div>
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-600 delay-300 ease-in-out ${
              !open ? "group-hover:[transform:skew(-15deg)_scaleY(0.6)]" : ""
            }`}
            style={{
              backgroundColor: color,
              borderRadius: "5px 10px 10px 10px",
              ...(open && { transform: "skew(-15deg) scaleY(0.6)" }),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
