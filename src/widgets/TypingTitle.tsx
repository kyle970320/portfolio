import { useEffect, useMemo, useState } from "react";

interface Props {
  duration?: number;
}
export default function TypingTitle(props: Props) {
  const { duration } = props;
  const durationMs = duration || 3000;

  // 1줄 + 2줄로 분리해서 스타일 유지
  const line1 = useMemo(() => "완성도와 디테일에 집중하는 개발자,", []);
  const line2 = useMemo(() => "박민규입니다", []);

  // 전체 타이핑 대상(줄바꿈 포함)
  const fullText = useMemo(() => `${line1}\n${line2}`, [line1, line2]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const total = fullText.length;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const nextCount = Math.min(
        total,
        Math.floor((elapsed / durationMs) * total),
      );
      setCount(nextCount);
      if (elapsed < durationMs) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [fullText]);

  // ✅ count를 line1 / line2에 분배
  const line1Count = Math.min(line1.length, count);
  const line2Count = Math.max(
    0,
    Math.min(line2.length, count - (line1.length + 1)),
  ); // +1은 \n

  const shown1 = line1.slice(0, line1Count);
  const shown2 = line2.slice(0, line2Count);
  const done = count >= fullText.length;

  return (
    <div className="absolute top-32 left-1/2 -translate-x-1/2 w-full h-full text-main text-5xl font-bold text-center z-[100] leading-tight">
      <div>
        {shown1}
        {!done && count <= line1.length && (
          <span className="inline-block ml-1 w-[2px] h-[1em] bg-current align-text-bottom animate-pulse" />
        )}
      </div>

      <div>
        <span className="text-white">{shown2}</span>
        {!done && count > line1.length && (
          <span className="inline-block ml-1 w-[2px] h-[1em] bg-current align-text-bottom animate-pulse" />
        )}
      </div>
    </div>
  );
}
