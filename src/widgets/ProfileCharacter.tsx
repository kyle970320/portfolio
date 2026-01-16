import { useEffect, useRef } from "react";

type Props = {
  width?: number;
  height?: number;
  // public 경로 기준
  bodySrc: string; // "/avatar/body.png"
  armSrc: string; // "/avatar/arm.png"
  frontSrc?: string; // "/avatar/front.png" (선택)
};

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

export default function ProfileCharacter({
  width = 280,
  height = 280,
  bodySrc,
  armSrc,
  frontSrc,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const [body, arm, front] = await Promise.all([
        loadImage(bodySrc),
        loadImage(armSrc),
        frontSrc ? loadImage(frontSrc) : Promise.resolve(null),
      ]);

      if (!mounted) return;

      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;

      // DPR 대응 (선명도)
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // ✅ 팔 회전 피벗(어깨) 좌표: "팔 PNG 기준"으로 잡습니다.
      // arm.png에서 어깨 위치가 어디냐에 따라 값 조절 필요.
      // 아래 값은 예시. (arm 이미지에서 어깨가 (ax, ay)에 오도록)
      const armPivot = { x: 120, y: 135 }; // 캔버스 상에서 어깨 위치(픽셀)
      const armDrawOffset = { x: 0, y: 0 }; // arm을 그릴 때 추가 오프셋(필요 시)

      // ✅ body를 어디에 놓을지 (캔버스 기준)
      const bodyPos = { x: 0, y: 0 };

      // 팔 흔들기 파라미터
      const baseAngle = -0.2; // 기본 각도(라디안)
      const swing = 0.6; // 흔들 폭
      const speed = 6.5; // 속도

      const start = performance.now();

      const draw = (now: number) => {
        const t = (now - start) / 1000;

        ctx.clearRect(0, 0, width, height);

        // 1) 몸(뒤 레이어)
        ctx.drawImage(body, bodyPos.x, bodyPos.y, width, height);

        // 2) 팔(회전)
        const ang = baseAngle + Math.sin(t * speed) * swing;

        ctx.save();
        ctx.translate(armPivot.x, armPivot.y);
        ctx.rotate(ang);
        // 팔 이미지를 "피벗 기준"으로 그리려면, 피벗이 팔 이미지의 어느 지점인지 맞춰야 함
        // 여기서는 arm.png가 캔버스와 같은 크기(280x280)로 뽑혔다고 가정하고,
        // arm을 캔버스 원점에 맞춰 그리는 방식.
        ctx.drawImage(
          arm,
          -armPivot.x + armDrawOffset.x,
          -armPivot.y + armDrawOffset.y,
          width,
          height,
        );
        ctx.restore();

        // 3) 앞 레이어(선택): 팔이 몸 뒤로 들어가거나 옷에 가려지는 느낌
        if (front) ctx.drawImage(front, bodyPos.x, bodyPos.y, width, height);

        rafRef.current = requestAnimationFrame(draw);
      };

      rafRef.current = requestAnimationFrame(draw);
    })();

    return () => {
      mounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [width, height, bodySrc, armSrc, frontSrc]);

  return <canvas ref={canvasRef} />;
}
