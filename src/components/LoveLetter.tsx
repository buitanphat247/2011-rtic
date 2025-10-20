import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  onClose?: () => void;
  title?: string;
  message?: string;
  fromText?: string;
  appearDelayMs?: number;
  appearDurationMs?: number;
  modalDurationMs?: number;
};

const LoveLetter = ({
  onClose,
  title = "Gửi em",
  message = "Chúc em luôn rạng rỡ, hạnh phúc và được yêu thương mỗi ngày. Cảm ơn em vì đã ở đây!",
  fromText = "From anh",
  appearDelayMs = 300,
  appearDurationMs = 900,
  modalDurationMs = 500,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [typed, setTyped] = useState("");
  // removed unused cardIn to fix TS6133
  const [float, setFloat] = useState(false);
  const [modalIn, setModalIn] = useState(false);
  const full = useMemo(() => message, [message]);
  const timerRef = useRef<number | null>(null);
  const animMs = modalDurationMs;

  useEffect(() => {
    if (!isOpen) return;
    let i = 0;
    const step = () => {
      setTyped(full.slice(0, i++));
      if (i <= full.length) timerRef.current = window.setTimeout(step, 20);
    };
    step();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [isOpen, full]);

  // no-op: previously used for card mount animation

  // animate modal appear
  useEffect(() => {
    if (!isOpen) return;
    setModalIn(false);
    let id1 = 0; let id2 = 0;
    id1 = requestAnimationFrame(() => { id2 = requestAnimationFrame(() => setModalIn(true)); });
    return () => { cancelAnimationFrame(id1); cancelAnimationFrame(id2); };
  }, [isOpen]);

  const startClose = () => {
    setIsClosing(true);
    window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      if (onClose) onClose();
    }, animMs);
  };

  if (!isOpen) {
    return (
      <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4">
        <div
          className={`w-full max-w-xl ${float ? 'float-card' : 'pop-in'}`}
          style={{ animationDelay: `${appearDelayMs}ms`, animationDuration: `${appearDurationMs}ms` }}
          onAnimationEnd={() => setFloat(true)}
        >
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsOpen(true)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(true); }}
            className="w-full cursor-pointer bg-white rounded-3xl shadow-2xl p-12 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_72px_rgba(213,63,140,.35)]"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-5xl">💌</div>
            <div className="text-center">
              <h3 className="text-4xl font-bold" style={{ color: "#D53F8C", fontFamily: "Roboto, sans-serif" }}>Mở thiệp</h3>
              <p className="text-gray-600 mt-3 text-xl">Nhấp để xem thư gửi riêng cho em</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
      style={{ background: `rgba(0,0,0,${modalIn && !isClosing ? 0.35 : 0})`, backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", transition: `background ${animMs}ms ease` }}
      onClick={(e) => { if (e.target === e.currentTarget) startClose(); }}
    >
      <div className="relative w-full max-w-3xl">
        <div
          className="bg-white rounded-3xl shadow-2xl p-10"
          style={{ transform: `scale(${isClosing ? 0.96 : (modalIn ? 1 : 0.9)})`, opacity: isClosing ? 0 : (modalIn ? 1 : 0), transition: `transform ${animMs}ms cubic-bezier(.22,1,.36,1), opacity ${animMs}ms cubic-bezier(.22,1,.36,1)`, willChange: "transform, opacity", transformOrigin: "center" }}
        >
          <div className="flex items-start justify-between mb-4">
            <h4 className="text-3xl font-bold" style={{ color: "#805AD5", fontFamily: "Roboto, sans-serif" }}>{title}</h4>
            <button aria-label="Đóng" onClick={startClose} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>
          <div className="min-h-[220px] whitespace-pre-wrap text-2xl leading-9" style={{ color: "#4A5568", fontFamily: "Roboto, sans-serif" }}>
            {typed}
            <span className="animate-pulse">▌</span>
          </div>
          <div className="mt-8 text-right italic text-xl" style={{ color: "#D53F8C", fontFamily: "Roboto, sans-serif" }}>{fromText}</div>
          <div className="mt-6 text-right">
            <button onClick={startClose} className="px-5 py-3 rounded-full text-white text-sm font-semibold" style={{ background: "linear-gradient(135deg,#E53E3E,#805AD5)" }}>Đóng</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
