import { createPortal } from "react-dom";

import { createRoot, type Root } from "react-dom/client";
import { useEffect, useRef, useState } from "react";
import { produce } from "immer";
import {
  CornerUpLeft,
  CornerUpRight,
  MoveHorizontal,
  MoveVertical,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

interface Props {
  url: string;
  closeViewer: () => void;
}
interface ImageViewerConfig {
  url: string;
}

type Axis = "X" | "Y" | "Z";
/**
 * 이미지 클릭 시 확대해서 볼 수 있는 이미지 뷰어
 *
 * ImageViewer.open({url:'이미지 주소'}) 형식으로 사용
 * @param url - 이미지 주소
 * @returns
 */
const IMAGE_ICONS_STYLE = "w-4 h-4 text-white cursor-pointer md:w-6 md:h-6";

export default function ImageViewer({ url, closeViewer }: Props) {
  const imageContentRef = useRef<HTMLDivElement>(null);
  const [zoomBlock, setZoomBlock] = useState<{
    zoomIn: boolean;
    zoomOut: boolean;
  }>({ zoomIn: false, zoomOut: false });
  const [isMouseHold, setIsMouseHold] = useState<boolean>(false);
  const [rotateLeftAndRight, setRotateLeftAndRight] = useState<number>(0);
  const [imageStartPoint, setImageStartPoint] = useState<Record<Axis, number>>({
    X: 1,
    Y: 1,
    Z: 1,
  });
  const [imageScale, setImageScale] = useState<Record<Axis, number>>({
    X: 1,
    Y: 1,
    Z: 1,
  });
  const [imageTranslate, setImageTranslate] = useState<Record<Axis, number>>({
    X: 0,
    Y: 0,
    Z: 0,
  });
  const getZoomBlockStyle = (zoomBlockValue: boolean) => {
    if (zoomBlockValue) {
      return { color: "rgba(155,155,155,1)" };
    }
    return {};
  };

  const handleImageScale = (
    type: "flip" | "scale",
    rotateKey: Axis,
    rotateValue: number,
  ) => {
    if (type === "flip") {
      setImageScale(
        produce((draft) => {
          draft[rotateKey] = imageScale[rotateKey] * -1;
        }),
      );
      return;
    }
    setImageScale(
      produce((draft) => {
        draft[rotateKey] = rotateValue;
      }),
    );
  };
  const handleImageStartPoint = (startKey: Axis, startValue: number) => {
    setImageStartPoint(
      produce((draft) => {
        draft[startKey] = startValue;
      }),
    );
  };
  const resetTranslate = () => {
    setImageTranslate({
      X: 0,
      Y: 0,
      Z: 0,
    });
  };
  const handleImageTranslate = (translateKey: Axis, translateValue: number) => {
    setImageTranslate(
      produce((draft) => {
        draft[translateKey] = translateValue;
      }),
    );
  };
  const handleZoom = (type: keyof typeof zoomBlock) => {
    const anotherZoomType = type === "zoomIn" ? "zoomOut" : "zoomIn";
    if (zoomBlock[type]) {
      return;
    }
    const typeCorrection = type === "zoomIn" ? 1.5 : 2 / 3;
    const newZoomX = imageScale.X * typeCorrection;
    const newZoomY = imageScale.Y * typeCorrection;
    const blockCondition = type === "zoomIn" ? newZoomX > 2 : newZoomX < 0.5;

    if (blockCondition) {
      setZoomBlock(
        produce((draft) => {
          draft[type] = true;
        }),
      );
    } else {
      setZoomBlock(
        produce((draft) => {
          draft[anotherZoomType] = false;
        }),
      );
    }
    resetTranslate();
    handleImageScale("scale", "X", newZoomX);
    handleImageScale("scale", "Y", newZoomY);
  };

  useEffect(() => {
    if (isMouseHold) {
      const handlePointerMove = (e: PointerEvent | TouchEvent) => {
        // 모바일도 지원할 수 있도록 변수 설정
        const clientX = "clientX" in e ? e.clientX : e.touches[0].clientX;
        const clientY = "clientY" in e ? e.clientY : e.touches[0].clientY;
        const deltaX = clientX - imageStartPoint.X;
        const deltaY = clientY - imageStartPoint.Y;

        // flip 되었을 때 마우스 움직임 변환치
        const reverseScaleX = imageScale.X > 0 ? 1 : -1;
        const reverseScaleY = imageScale.Y > 0 ? 1 : -1;

        // zoom에 따른 이동속도 보정치
        const zoomCorrection = 1 / Math.abs(imageScale.X);
        // flip 여부에 따른 보정치
        const sameBothScale = imageScale.X * imageScale.Y > 0 ? 1 : -1;
        const reverseSameBothScale = sameBothScale * -1;

        // 이동값 계산기
        const getTranslatePosition = (
          originAxis: Axis,
          translateAxis: Axis,
          zoomCorrectionNum: number,
          correction: number,
        ) => {
          // originAxis : 기본 기준 축 , translateAxis: flip, rotate에 따라 변경된 축, correction: 보정치
          if (translateAxis === "X") {
            return (
              imageTranslate[originAxis] +
              deltaX * reverseScaleX * zoomCorrectionNum * correction
            );
          }
          return (
            imageTranslate[originAxis] +
            deltaY * reverseScaleY * zoomCorrectionNum * correction
          );
        };
        let translateX = getTranslatePosition("X", "X", zoomCorrection, 1);
        let translateY = getTranslatePosition("Y", "Y", zoomCorrection, 1);

        // 좌우 회전 확인
        const reverseRotate = rotateLeftAndRight > 0 ? 1 : -1;

        // 좌우 회전 시 같은 값으로 변환
        let rotateNum = 0;
        if (reverseRotate > 0) {
          rotateNum = rotateLeftAndRight % 4;
        } else {
          rotateNum = (4 + (rotateLeftAndRight % 4)) % 4;
        }

        // 회전량에 따른 보정치 적용
        if (rotateNum === 1) {
          translateX = getTranslatePosition(
            "X",
            "Y",
            zoomCorrection,
            sameBothScale,
          );
          translateY = getTranslatePosition(
            "Y",
            "X",
            zoomCorrection,
            reverseSameBothScale,
          );
        }
        if (rotateNum === 2) {
          if (sameBothScale > 0) {
            translateX = getTranslatePosition(
              "X",
              "X",
              zoomCorrection,
              reverseSameBothScale,
            );
            translateY = getTranslatePosition(
              "Y",
              "Y",
              zoomCorrection,
              reverseSameBothScale,
            );
          } else {
            translateX = getTranslatePosition(
              "X",
              "X",
              zoomCorrection,
              sameBothScale,
            );
            translateY = getTranslatePosition(
              "Y",
              "Y",
              zoomCorrection,
              sameBothScale,
            );
          }
        }
        if (rotateNum === 3) {
          translateX = getTranslatePosition(
            "X",
            "Y",
            zoomCorrection,
            reverseSameBothScale,
          );
          translateY = getTranslatePosition(
            "Y",
            "X",
            zoomCorrection,
            sameBothScale,
          );
        }

        requestAnimationFrame(() => {
          handleImageTranslate("X", translateX);
          handleImageTranslate("Y", translateY);

          handleImageStartPoint("X", clientX);
          handleImageStartPoint("Y", clientY);
        });
      };

      const handlePointerUp = () => {
        setIsMouseHold(false);
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerup", handlePointerUp);
        document.removeEventListener("touchmove", handlePointerMove);
        document.removeEventListener("touchend", handlePointerUp);
      };

      document.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("pointerup", handlePointerUp);
      document.addEventListener("touchmove", handlePointerMove);
      document.addEventListener("touchend", handlePointerUp);

      return () => {
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerup", handlePointerUp);
        document.removeEventListener("touchmove", handlePointerMove);
        document.removeEventListener("touchend", handlePointerUp);
      };
    }
  }, [
    isMouseHold,
    imageStartPoint,
    imageTranslate,
    imageScale,
    rotateLeftAndRight,
  ]);

  return createPortal(
    <div
      className="fixed z-101 top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-black/50 text-white will-change-transform animate-viewerScaleUp"
      onMouseDown={closeViewer}
      style={{ cursor: isMouseHold ? "grabbing" : "default" }}
    >
      <div className="relative w-[300px] h-[240px] md:w-[800px] md:h-[650px]">
        <div
          className="relative z-100 flex justify-end w-full py-2 px-2"
          onClick={closeViewer}
        >
          <X size={30} color="#FFFFFF" className="cursor-pointer" />
        </div>
        <div
          ref={imageContentRef}
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
          className="relative flex justify-center items-center w-full h-full backface-visible transform-3d image-viewer-transition"
          style={{
            transform: `translate3d(${imageTranslate.X}px, ${imageTranslate.Y}px, ${imageTranslate.Z}px)`,
            // rotate에 transition 적용
            rotate: `z ${rotateLeftAndRight * 90}deg`,
            // scale에 transition 적용
            scale: `${imageScale.X} ${imageScale.Y} ${imageScale.Z}`,
            transition:
              "scale 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, rotate 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, transform 0.1s cubic-bezier(0.215, 0.61, 0.355, 1) 0s",
          }}
        >
          <img
            src={url}
            alt=""
            draggable={false}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              cursor: isMouseHold ? "grabbing" : "grab",
            }}
            onTouchStart={(e) => {
              handleImageStartPoint("X", e.touches[0].clientX);
              handleImageStartPoint("Y", e.touches[0].clientY);
              setIsMouseHold(true);
            }}
            onTouchEnd={() => {
              setIsMouseHold(false);
            }}
            onMouseDown={(e) => {
              handleImageStartPoint("X", e.clientX);
              handleImageStartPoint("Y", e.clientY);
              setIsMouseHold(true);
            }}
            onMouseUp={() => {
              setIsMouseHold(false);
            }}
            onMouseMove={() => {
              if (!isMouseHold) {
                return;
              }
            }}
          />
        </div>
      </div>
      <div
        className="relative mt-12.5 p-5 bg-[rgba(15,15,15,0.7)] flex justify-between items-center w-[250px] rounded-2xl text-white md:w-[400px] md:m-5"
        key={url}
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        <MoveVertical
          className={IMAGE_ICONS_STYLE}
          onClick={(e) => {
            e.preventDefault();
            resetTranslate();
            handleImageScale("flip", "Y", 180);
          }}
        />
        <MoveHorizontal
          className={IMAGE_ICONS_STYLE}
          onClick={(e) => {
            e.preventDefault();
            resetTranslate();
            handleImageScale("flip", "X", 180);
          }}
        />
        <CornerUpLeft
          className={IMAGE_ICONS_STYLE}
          onClick={(e) => {
            e.preventDefault();
            resetTranslate();
            const newRotateCount = rotateLeftAndRight - 1;
            setRotateLeftAndRight(newRotateCount);
          }}
        />
        <CornerUpRight
          className={IMAGE_ICONS_STYLE}
          onClick={(e) => {
            e.preventDefault();
            resetTranslate();
            const newRotateCount = rotateLeftAndRight + 1;
            setRotateLeftAndRight(newRotateCount);
          }}
        />
        <ZoomIn
          className={IMAGE_ICONS_STYLE}
          onClick={(e) => {
            e.preventDefault();
            handleZoom("zoomIn");
          }}
          style={{ ...getZoomBlockStyle(zoomBlock.zoomIn) }}
        />
        <ZoomOut
          className={IMAGE_ICONS_STYLE}
          onClick={(e) => {
            e.preventDefault();
            handleZoom("zoomOut");
          }}
          style={{ ...getZoomBlockStyle(zoomBlock.zoomOut) }}
        />
      </div>
    </div>,
    document.getElementById("image-viewer-root") as HTMLElement,
  );
}

let imageViewerRoot: Root | null = null;

const getImageViewerRoot = () => {
  const container = document.getElementById("image-viewer-root");
  if (!container) {
    throw new Error("Image Viewer root container not found");
  }

  // 기존 root가 있으면 반환
  if (imageViewerRoot) {
    return imageViewerRoot;
  }

  // 없으면 새 root 생성
  imageViewerRoot = createRoot(container);
  return imageViewerRoot;
};

const closeViewer = () => {
  if (imageViewerRoot) {
    imageViewerRoot.unmount();
    imageViewerRoot = null;
  }
};

ImageViewer.open = (config: ImageViewerConfig) => {
  const { url } = config;
  const imageRoot = getImageViewerRoot();

  imageRoot.render(<ImageViewer url={url} closeViewer={closeViewer} />);
};
