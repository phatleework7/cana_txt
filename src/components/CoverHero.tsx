import React, { useState } from 'react';
import { Mail, Gift, Sparkles, Volume2, VolumeX, QrCode, ChevronDown } from 'lucide-react';
import { pianoPlayer } from '../utils/audio';
import designerImg from '../assets/images/Designer.png';

interface CoverHeroProps {
  momName: string;
  senderName: string;
  onOpenLetter: () => void;
  onOpenBag: () => void;
  onOpenQR: () => void;
}

export const CoverHero: React.FC<CoverHeroProps> = ({
  momName,
  senderName,
  onOpenLetter,
  onOpenBag,
  onOpenQR,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleMusic = () => {
    const active = pianoPlayer.toggle();
    setIsPlaying(active);
  };

  return (
    <section className="relative min-h-[96vh] flex flex-col items-center justify-between px-3 py-6 text-center overflow-hidden max-w-lg mx-auto">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Bar / Mini Header for Cover */}
      <div className="w-full flex items-center justify-between px-2 pt-1 pb-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181A24]/90 border border-[#D4AF37]/35 text-[#E8D5B5] text-[11px] font-semibold tracking-wider uppercase">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span>20.10 Kính Tặng Mẹ</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleMusic}
            aria-label="Bật/Tắt nhạc không lời"
            className={`p-2 rounded-full border transition-all ${
              isPlaying
                ? 'bg-[#1E202B] border-[#D4AF37] text-[#D4AF37] shadow-sm shadow-[#D4AF37]/20'
                : 'bg-[#14151C]/80 border-white/10 text-neutral-400 hover:text-white'
            }`}
            title="Bật nhạc piano dịu êm"
          >
            {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenQR}
            aria-label="Xem mã QR thiệp"
            className="p-2 rounded-full bg-[#14151C]/80 border border-white/10 text-neutral-300 hover:border-[#D4AF37]/40 hover:text-white transition-colors"
            title="Mã QR in dán hộp quà"
          >
            <QrCode className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Cover Card Frame - Clean Without Text Overlays */}
      <div className="relative w-full rounded-3xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_15px_40px_rgba(0,0,0,0.9)] bg-[#121318] my-auto">
        <div className="relative aspect-[9/16] w-full overflow-hidden">
          <img
            src={designerImg || '/images/Designer.png'}
            alt="Thiệp chúc mừng 20.10 dành tặng Mẹ cùng túi Vascara TOT 0202"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = '/images/Designer.png';
            }}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Thumb-Zone Quick Navigation Controls (Bottom of Phone Screen) */}
      <div className="w-full grid grid-cols-2 gap-3 pt-4">
        <button
          onClick={onOpenLetter}
          className="flex items-center justify-center gap-2 py-3.5 px-3 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-black font-semibold text-sm shadow-lg shadow-[#D4AF37]/20 active:scale-95 transition-all"
        >
          <Mail className="w-4 h-4 text-black" />
          <span>Thư Cha & Tụi Con</span>
        </button>

        <button
          onClick={onOpenBag}
          className="flex items-center justify-center gap-2 py-3.5 px-3 rounded-2xl bg-[#1C1E29] border border-[#D4AF37]/50 text-[#E8D5B5] font-semibold text-sm shadow-md active:scale-95 hover:bg-[#252836] transition-all"
        >
          <Gift className="w-4 h-4 text-[#D4AF37]" />
          <span>Túi Quà Vascara</span>
        </button>
      </div>

      {/* Subtle indicator for scrolling to see details */}
      <div className="pt-3 pb-1 flex flex-col items-center gap-0.5 text-neutral-400">
        <span className="text-[10px] uppercase tracking-wider text-[#C5A059]">Vuốt xuống để đọc thư & xem túi</span>
        <ChevronDown className="w-3.5 h-3.5 text-[#C5A059] animate-bounce" />
      </div>
    </section>
  );
};
