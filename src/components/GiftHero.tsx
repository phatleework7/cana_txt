import React, { useState } from 'react';
import { Gift, Sparkles, Heart, ChevronDown } from 'lucide-react';
import { pianoPlayer } from '../utils/audio';

interface GiftHeroProps {
  momName: string;
  senderName: string;
  onOpenLetter: () => void;
  isOpen: boolean;
}

export const GiftHero: React.FC<GiftHeroProps> = ({
  momName,
  senderName,
  onOpenLetter,
  isOpen,
}) => {
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleOpen = () => {
    setHasInteracted(true);
    onOpenLetter();
    if (!pianoPlayer.getStatus()) {
      pianoPlayer.play();
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 py-12 text-center overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[600px] h-[340px] md:h-[600px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[280px] h-[280px] bg-[#9E2A2B]/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Top Banner Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F212B]/80 border border-[#D4AF37]/30 backdrop-blur-md mb-6 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
        <span className="text-xs md:text-sm font-medium tracking-widest text-[#E8D5B5] uppercase">
          Kỷ Niệm Ngày Phụ Nữ Việt Nam 20.10
        </span>
        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
      </div>

      {/* Main Salutation Headline */}
      <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight max-w-3xl mb-4">
        Gửi <span className="text-gold-gradient">{momName}</span> Kính Yêu
      </h1>

      <p className="font-garamond italic text-lg sm:text-2xl text-[#D8CEBA] max-w-xl mx-auto mb-8 font-light leading-relaxed">
        "Người phụ nữ tuyệt vời nhất, đằm thắm, quý phái và ngập tràn tình thương bao la của chúng con."
      </p>

      {/* Real Handbag Photo Showcase in Elegant Luxury Pedestal */}
      <div className="relative w-full max-w-md mx-auto mb-10 group">
        <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/40 shadow-2xl shadow-black/80 bg-gradient-to-b from-[#1C1E26] to-[#121318] aspect-[3/4] sm:aspect-[4/5] flex items-center justify-center p-6 transition-transform duration-500 hover:scale-[1.01]">
          {/* Radial soft spotlight behind bag */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
          
          <img
            src="/src/assets/images/vascara_tot_0202_front.jpg"
            alt="Túi xách tay nhấn đường cong phối khóa kim loại TOT 0202 màu đen Vascara dành tặng Mẹ"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

          {/* Overlay Tag */}
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <div className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold mb-0.5">
              Món Quà Con Kính Tặng Mẹ
            </div>
            <div className="text-white text-base sm:text-lg font-medium truncate font-serif-luxury">
              Vascara TOT 0202 · Nhấn Đường Cong Khóa Kim Loại
            </div>
          </div>
        </div>

        {/* Ambient Ring around the Box */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#D4AF37]/30 via-transparent to-[#D4AF37]/30 opacity-40 blur-md pointer-events-none -z-10" />
      </div>

      {/* Action Button: Touch to Open Gift */}
      <div className="flex flex-col items-center gap-4 z-20">
        <button
          onClick={handleOpen}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#DFBF58] to-[#C59B27] text-[#121318] font-semibold text-base sm:text-lg shadow-xl shadow-[#D4AF37]/25 hover:shadow-2xl hover:shadow-[#D4AF37]/40 active:scale-95 transition-all duration-300"
        >
          <Gift className="w-5 h-5 text-[#121318] transition-transform group-hover:rotate-12" />
          <span>{isOpen ? 'Đọc Lại Lời Chúc Của Con' : 'Mẹ Chạm Vào Đây Để Mở Quà'}</span>
          <Heart className="w-4 h-4 text-[#8C1D24] fill-[#8C1D24] group-hover:scale-125 transition-transform" />
        </button>

        <p className="text-xs text-neutral-400 font-normal">
          Món quà chân thành từ tấm lòng của <span className="text-[#E8D5B5] font-medium">{senderName}</span>
        </p>
      </div>

      {/* Gentle Scroll Down Indicator */}
      <div className="mt-12 flex flex-col items-center gap-1 text-neutral-400 animate-bounce">
        <span className="text-[11px] tracking-wider uppercase text-[#C5A059]">Cuộn xuống xem chi tiết món quà</span>
        <ChevronDown className="w-4 h-4 text-[#C5A059]" />
      </div>
    </section>
  );
};
