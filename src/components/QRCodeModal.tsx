import React, { useState } from 'react';
import { X, QrCode, Printer, Copy, Check, Sparkles, Heart } from 'lucide-react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  momName: string;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose, momName }) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://cana-txt-app.dev';

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(
    currentUrl
  )}&color=121318&bgcolor=ffffff&margin=1`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl bg-[#14151C] border border-[#D4AF37]/50 p-6 sm:p-8 shadow-2xl text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#E8D5B5] text-xs font-semibold uppercase tracking-wider mb-2">
          <QrCode className="w-3.5 h-3.5 text-[#D4AF37]" />
          Mã QR Dán Vào Hộp Quà Vascara
        </div>
        <h3 className="font-serif-luxury text-2xl font-bold text-white mb-1">
          Thiệp Quét Điện Thoại Cho Mẹ
        </h3>
        <p className="text-xs text-neutral-300 mb-6">
          In hoặc dán mã QR này kèm theo chiếc túi Vascara. Mẹ chỉ cần bật camera điện thoại hoặc Zalo lên quét là trang chúc mừng này sẽ hiện ra!
        </p>

        {/* Printable Card Mockup */}
        <div className="bg-[#FAF7EE] text-[#1D1E24] p-5 rounded-2xl border-2 border-[#D4AF37] shadow-xl mx-auto max-w-[260px] mb-6 flex flex-col items-center">
          <div className="text-[10px] tracking-widest uppercase font-bold text-[#8C1D24] mb-1">
            20.10 YÊU THƯƠNG
          </div>
          <div className="font-serif-luxury text-base font-bold mb-3 text-[#1D1E24]">
            Kính Tặng {momName}
          </div>

          <div className="bg-white p-2.5 rounded-xl border border-neutral-300 shadow-inner mb-3">
            <img
              src={qrImageUrl}
              alt="Mã QR quét lời chúc 20.10 cho mẹ"
              className="w-40 h-40 object-contain mx-auto"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // If offline or blocked, show fallback styling
                const target = e.currentTarget;
                target.style.display = 'none';
              }}
            />
          </div>

          <div className="text-[11px] font-medium text-neutral-600 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            Quét bằng Camera / Zalo
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2.5 justify-center">
          <button
            onClick={handleCopyLink}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1C1E29] border border-white/10 text-white text-xs font-medium hover:border-[#D4AF37]/50 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Đã sao chép link!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#D4AF37]" />
                <span>Sao chép link web</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-black text-xs font-semibold hover:opacity-95 transition-opacity"
          >
            <Printer className="w-4 h-4" />
            <span>In thiệp QR</span>
          </button>
        </div>

      </div>
    </div>
  );
};
