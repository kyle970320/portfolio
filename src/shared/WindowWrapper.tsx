import { cn } from "./lib/utils/classname";

interface Props {
  src: string;
  className?: string;
  title?: string;
  logo?: string;
  onClick?: () => void;
}

export default function WindowWrapper({
  className,
  src,
  onClick,
  title,
  logo,
}: Props) {
  const currentClassName = cn(
    "w-[80%] rounded-[6px] overflow-hidden",
    className,
  );
  return (
    <div className={currentClassName} onClick={onClick}>
      {onClick && (
        <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.4)] opacity-0 text-white transition-all duration-150 hover:opacity-100 cursor-pointer">
          View Detail!
        </div>
      )}

      <div className="flex min-w-10 px-2 py-1.5 justify-between items-center bg-[#37383F]">
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-2xl bg-[#f5655b]"></div>
          <div className="w-2.5 h-2.5 rounded-2xl bg-[#f6bd3b]"></div>
          <div className="w-2.5 h-2.5 rounded-2xl bg-[#43c645]"></div>
        </div>
        {title && <div className="text-white text-[10px]">{title}</div>}
        {logo && (
          <div className="flex justify-end min-w-10">
            <img src={logo} alt="" className="w-3 h-3" />
          </div>
        )}
      </div>
      <img src={src} alt="" className="w-full" />
    </div>
  );
}
