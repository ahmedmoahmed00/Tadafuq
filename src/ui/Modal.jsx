import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

function Modal({ children, ref, onClose, Close }) {
  return createPortal(
    <div
      data-ignore-outsideclick
      className="fixed inset-0 bg-[#000000B2] z-[1000] p-4 flex items-center justify-center"
    >
      <div
        ref={ref}
        className="w-full max-h-[90vh] overflow-y-auto max-[676px]:rounded-[24px] max-[676px]:p-[16px] max-w-[700px] rounded-[48px] shadow-lg p-12 transition-all duration-500 bg-[linear-gradient(137.34deg,rgba(27,13,192,0.16)_23.98%,rgba(167,168,199,0.16)_65.73%)] border border-[#FFFFFF1A] backdrop-blur-[150px] relative"
      >
        {Close && (
          <button
            onClick={onClose}
            className="bg-none border-none p-[0.4rem] rounded-[var(--border-radius-sm)] transition-all duration-200 absolute top-[1.2rem] right-[1.2rem] hover:bg-[var(--color-grey-100)]"
          >
            <HiXMark className="w-[2.4rem] h-[2.4rem] text-[var(--color-grey-500)]" />
          </button>
        )}
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
