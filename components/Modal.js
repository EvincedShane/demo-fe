import { useEffect } from "react";

// a11y-207..211: no focus trap, no Escape, no role=dialog, no return-focus, tiny close
export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="modal relative w-full max-w-md rounded bg-white p-6 text-zinc-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* a11y-210: 16x16px close target */}
        <div
          className="close absolute right-2 top-2"
          style={{ width: 16, height: 16, lineHeight: "16px", textAlign: "center", cursor: "pointer", fontSize: 12 }}
          onClick={onClose}
        >
          ×
        </div>
        {children}
      </div>
    </div>
  );
}
