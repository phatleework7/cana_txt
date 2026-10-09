import React, { useState, useEffect } from 'react';
import { Heart, Send, CheckCircle2, Sparkles, MessageCircleHeart, X } from 'lucide-react';

interface HeartBubble {
  id: number;
  x: number;
  y: number;
  scale: number;
}

interface MomResponseProps {
  onClose?: () => void;
  isModal?: boolean;
}

export const MomResponse: React.FC<MomResponseProps> = ({ onClose, isModal = false }) => {
  const [hearts, setHearts] = useState<HeartBubble[]>([]);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [customReply, setCustomReply] = useState('');
  const [sentMessage, setSentMessage] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('mom_2010_reply');
    if (saved) {
      setSentMessage(saved);
    }
  }, []);

  const triggerHeartBurst = (e?: React.MouseEvent) => {
    const startX = e ? e.clientX : window.innerWidth / 2;
    const startY = e ? e.clientY : window.innerHeight / 2;

    const newHearts: HeartBubble[] = [];
    for (let i = 0; i < 10; i++) {
      newHearts.push({
        id: Date.now() + i,
        x: startX + (Math.random() - 0.5) * 150,
        y: startY - Math.random() * 100,
        scale: Math.random() * 0.8 + 0.6,
      });
    }

    setHearts((prev) => [...prev, ...newHearts]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => !newHearts.some((nh) => nh.id === h.id)));
    }, 1800);
  };

  const handleSendResponse = (messageText: string) => {
    localStorage.setItem('mom_2010_reply', messageText);
    setSentMessage(messageText);
    triggerHeartBurst();
  };

  const presets = [
    'Mẹ nhận được rồi, cảm ơn cha và tụi con nhiều lắm!',
    'Chiếc túi Vascara đẹp và sang trọng lắm, Mẹ rất thích!',
    'Mẹ xúc động quá, cha và các con nhớ giữ gìn sức khỏe nhé!',
    'Mẹ yêu cha và tụi con nhiều nhất trên đời!',
  ];

  const content = (
    <div className="rounded-3xl bg-[#14151C] border border-[#D4AF37]/35 p-6 sm:p-8 shadow-2xl relative overflow-hidden max-w-xl mx-auto">
      {/* Floating Hearts */}
      {hearts.map((h) => (
        <div
          key={h.id}
          style={{
            left: `${h.x}px`,
            top: `${h.y}px`,
            transform: `scale(${h.scale})`,
          }}
          className="fixed pointer-events-none z-50 text-[#E63946] animate-bounce transition-all duration-1000 opacity-90 drop-shadow-lg"
        >
          <Heart className="w-8 h-8 fill-current" />
        </div>
      ))}

      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 transition-colors"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Glow backdrop */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#E8D5B5] text-xs font-medium uppercase tracking-wider mb-2">
          <MessageCircleHeart className="w-3.5 h-3.5 text-[#D4AF37]" />
          Dành Riêng Cho Mẹ
        </div>
        <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-semibold">
          Gửi Một Chút Yêu Thương Cho Cả Nhà
        </h3>
        <p className="font-garamond italic text-xs sm:text-sm text-[#C8B89E] mt-1">
          Mẹ chạm nhẹ vào nút để gửi tim cho cha và tụi con nhé!
        </p>
      </div>

      {/* Big Heart Touch Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={(e) => {
            triggerHeartBurst(e);
          }}
          className="group relative flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#9E2A2B] via-[#C93B47] to-[#8C1D24] text-white font-semibold text-sm sm:text-base shadow-xl shadow-[#C93B47]/25 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <Heart className="w-5 h-5 fill-current text-white animate-pulse" />
          <span>Mẹ Thả Tim Cho Cha & Tụi Con!</span>
          <Sparkles className="w-4 h-4 text-[#F5DEB3]" />
        </button>
      </div>

      {/* Quick Message Options */}
      <div className="space-y-2.5 mb-5">
        <div className="text-xs text-neutral-400 font-medium px-1">
          Mẹ có thể chọn nhanh câu trả lời gửi cả nhà:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {presets.map((text, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedPreset(text);
                handleSendResponse(text);
              }}
              className={`p-3 text-left rounded-xl border text-xs transition-all duration-200 ${
                sentMessage === text
                  ? 'bg-[#1C1E29] border-[#D4AF37] text-[#F5DEB3] font-medium shadow-md'
                  : 'bg-[#181A24] border-white/10 text-neutral-300 hover:border-[#D4AF37]/40 hover:text-white'
              }`}
            >
              {text}
            </button>
          ))}
        </div>
      </div>

      {/* Custom text option */}
      <div className="flex gap-2">
        <input
          type="text"
          value={customReply}
          onChange={(e) => setCustomReply(e.target.value)}
          placeholder="Hoặc Mẹ viết đôi dòng gửi cha & tụi con..."
          className="flex-1 bg-[#191B24] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
        />
        <button
          onClick={() => {
            if (customReply.trim()) {
              handleSendResponse(customReply.trim());
              setCustomReply('');
            }
          }}
          disabled={!customReply.trim()}
          className="px-4 py-2.5 rounded-xl bg-[#D4AF37] text-black font-semibold text-xs disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 hover:bg-[#E5C158] transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Gửi</span>
        </button>
      </div>

      {/* Feedback / Saved notification */}
      {sentMessage && (
        <div className="mt-4 p-3 rounded-xl bg-[#1E251E] border border-emerald-500/30 text-emerald-200 text-xs flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <div>
            <span className="font-semibold">Lời nhắn Mẹ đã chọn:</span> "{sentMessage}"
          </div>
        </div>
      )}
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
        <div className="my-auto w-full py-6">
          {content}
        </div>
      </div>
    );
  }

  return (
    <section className="py-8 px-4 max-w-xl mx-auto">
      {content}
    </section>
  );
};
