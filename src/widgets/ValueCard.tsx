import { useState } from "react";
import { Typography } from "../shared/Typography";
import Modal from "../shared/Modal";

interface Props {
  id: string;
  title: string;
  desc: string;
  color: string;
}
export default function ValueCard({ id, title, desc, color }: Props) {
  const [isMouse, setIsMouse] = useState<boolean>(false);
  const [position, setPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });
  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect(); // 또는 cardRef.current!
    const x = e.clientX - rect.left; // 요소 내부 기준 X
    const y = e.clientY - rect.top; // 요소 내부 기준 Y
    setIsMouse(true);
    setPosition({ x, y });
  };
  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect(); // 또는 cardRef.current!
    const x = e.clientX - rect.left; // 요소 내부 기준 X
    const y = e.clientY - rect.top; // 요소 내부 기준 Y
    setIsMouse(false);
    setPosition({ x, y });
  };
  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative flex flex-col flex-wrap justify-between p-5 w-[30%] max-w-[215px] min-w-[190px] rounded-2xl border-1 border-gray-400 aspect-square cursor-pointer overflow-hidden"
      onClick={() => {
        Modal.open({
          detail: <>테스트 {id}</>,
        });
      }}
    >
      <div className="relative z-1 text-xl font-gmarket font-bold text-white">
        {title}
      </div>
      <div className=" relative z-1 text-gray-300">
        <div>
          <Typography className="text-gray-300 mix-blend-color-dodge">
            {desc}
          </Typography>
        </div>
      </div>
      <div
        className="absolute w-0 h-0 translate-x-[-50%] translate-y-[-50%] rounded-[50%]"
        style={{
          top: position.y,
          left: position.x,
          backgroundColor: `${color}`,
          animation: isMouse
            ? "scaleUp forwards 0.4s"
            : "scaleDown forwards 0.4s",
        }}
      ></div>
    </div>
  );
}
