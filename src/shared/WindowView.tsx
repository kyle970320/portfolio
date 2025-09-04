import { cn } from "./lib/utils/classname";

interface Props {
  src: string;
  className?: string;
  onClick?: () => void;
}

export default function WindowView({
  className,
  src,
  onClick = () => {},
}: Props) {
  const currentClassName = cn(
    "w-[80%] rounded-[6px] overflow-hidden",
    className,
  );
  return (
    <div className={currentClassName} onClick={onClick}>
      <div className="flex px-1 py-0.5 gap-0.5 bg-[#37383F]">
        <div className="w-[3px] h-[3px] rounded-2xl bg-[#f5655b]"></div>
        <div className="w-[3px] h-[3px] rounded-2xl bg-[#f6bd3b]"></div>
        <div className="w-[3px] h-[3px] rounded-2xl bg-[#43c645]"></div>
      </div>
      <img src={src} alt="" className="w-full" />
    </div>
  );
}
