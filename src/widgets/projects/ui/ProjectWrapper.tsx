import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PropsWithChildren,
} from "react";
import { cn } from "../../../shared/lib/utils/classname";

interface Props extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}
export default function ProjectWrapper({ className, style, children }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionH, setSectionH] = useState<string>("");
  useEffect(() => {
    if (!sectionRef) {
      return;
    }
    const currentH = sectionRef.current?.getBoundingClientRect().width ?? 0;
    setSectionH(`${currentH * 0.56}px`);
  }, []);
  const sectionClassName = cn("w-full bg-white text-black", className);
  return (
    <div
      ref={sectionRef}
      className={sectionClassName}
      style={{
        ...style,
        height: sectionH,
      }}
    >
      {children}
    </div>
  );
}
