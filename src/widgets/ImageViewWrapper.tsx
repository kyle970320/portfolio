import ImageViewer from "../shared/ImageViewer";
import { cn } from "../shared/lib/utils/classname";

interface Props {
  src: string;
  className?: string;
  wrapperClassName?: string;
}

export default function ImageViewWrapper({
  wrapperClassName,
  className,
  src,
}: Props) {
  const currentClass = cn("relative", wrapperClassName);
  return (
    <div className={`${currentClass}`}>
      <div
        className="absolute top-0 left-0 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.4)] opacity-0 text-white transition-all duration-150 hover:opacity-100 cursor-pointer"
        onClick={() => {
          ImageViewer.open({
            url: src,
          });
        }}
      >
        View Detail!
      </div>
      <img src={src} alt="" className={className} />
    </div>
  );
}
