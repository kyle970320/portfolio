import { createPortal } from "react-dom";
import { createRoot, type Root } from "react-dom/client";
import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";

interface Props {
  detail: ReactNode;
  closeViewer: () => void;
}
interface ModalConfig {
  detail: ReactNode;
}

export default function Modal({ detail, closeViewer }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return createPortal(
    <div className="fixed z-100 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-200 w-[calc(100vw-60px)] h-[calc(100vh-60px)] flex flex-col justify-center items-center bg-[#232323] text-white will-change-transform animate-viewerScaleUp">
      <div className="flex justify-end w-full py-2 px-2" onClick={closeViewer}>
        <X size={30} color="#777777" />
      </div>
      <div className="w-full h-full overflow-auto custom-view-scrollbar p-6">
        {detail}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement,
  );
}

let modalRoot: Root | null = null;

const getModalRoot = () => {
  const container = document.getElementById("modal-root");
  if (!container) {
    throw new Error("Image Viewer root container not found");
  }

  // 기존 root가 있으면 반환
  if (modalRoot) {
    return modalRoot;
  }

  // 없으면 새 root 생성
  modalRoot = createRoot(container);
  return modalRoot;
};

const closeViewer = () => {
  if (modalRoot) {
    modalRoot.unmount();
    modalRoot = null;
  }
};

Modal.open = (config: ModalConfig) => {
  const { detail } = config;
  const modalRoot = getModalRoot();

  modalRoot.render(<Modal detail={detail} closeViewer={closeViewer} />);
};
