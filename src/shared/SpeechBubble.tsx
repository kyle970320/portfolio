import type { CSSProperties, PropsWithChildren } from "react";
import { cn } from "./lib/utils/classname";
interface Props extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}
export default function SpeechBubble({ className, style, children }: Props) {
  const bubbleClassName = cn(
    "relative w-40 h-15 p-4 text-xs flex justify-center items-center bg-white shadow-xl rounded-[15px] bubble-tail after:border-t-[10px] after:border-t-white after:z-10",
    className,
  );
  return (
    <div className={bubbleClassName} style={style}>
      # {children}
    </div>
  );
}
