import React, { useState } from 'react';
import { Volume2, VolumeX, Heart, Quote, Sparkles, X } from 'lucide-react';

interface MotherLetterProps {
  momName: string;
  senderName: string;
  onClose?: () => void;
  isModal?: boolean;
}

export const MotherLetter: React.FC<MotherLetterProps> = ({
  momName,
  senderName,
  onClose,
  isModal = false,
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Letter contents - written from both Cha and tụi con
  const letterParagraphs = [
    `Mẹ yêu kính của cả nhà!`,
    `Hôm nay là ngày 20 tháng 10 - Ngày Phụ Nữ Việt Nam, một dịp thật thiêng liêng và ấm áp để cha và tụi con được cùng nhau bày tỏ trọn vẹn lòng biết ơn cùng tình yêu thương vô bờ bến dành cho Mẹ.`,
    `Đối với cha và tụi con, Mẹ luôn là người phụ nữ đẹp nhất, dịu hiền nhất và là trái tim ấm áp của cả gia đình. Suốt bao năm tháng qua, Mẹ đã dành trọn cả thanh xuân, từng giọt mồ hôi và biết bao lo toan, vun vén để gia đình mình luôn đầy ắp tiếng cười, từng bữa cơm ấm cúng và giấc ngủ bình yên.`,
    `Đôi bàn tay Mẹ đã có thêm những vết chai sần vì sương gió, nhưng nụ cười ấm áp cùng ánh mắt hiền từ của Mẹ vẫn luôn là ngọn lửa sưởi ấm tâm hồn cha và tụi con, là điểm tựa bình yên nhất trong cuộc đời.`,
    `Nhân ngày 20.10, cha và tụi con xin chúc Mẹ luôn dồi dào sức khỏe, sống thật an vui, hạnh phúc và thanh thản. Mong Mẹ bớt đi những âu lo thường nhật, dành nhiều thời gian hơn để yêu thương và chăm sóc bản thân mình. Mẹ hãy cứ vui vẻ đi dạo phố, gặp gỡ bạn bè, đi chùa hay diện những bộ đồ thật đẹp, bởi Mẹ luôn xứng đáng với tất cả những điều ngọt ngào nhất trên thế gian.`,
    `Cha và tụi con có cùng chọn một món quà nhỏ là chiếc túi xách tay Vascara màu đen với khóa kim loại trang nhã gửi tặng Mẹ. Màu đen sang trọng cùng đường nét uốn cong thanh thoát rất hợp với nét đẹp đằm thắm, quý phái của Mẹ. Cha và tụi con mong mỗi khi Mẹ mang chiếc túi này bên mình, Mẹ sẽ luôn cảm nhận được tình yêu thương và sự gắn kết của cả gia đình mình luôn ở bên Mẹ.`,
    `Cha và tụi con yêu Mẹ nhiều lắm!`,
  ];

  const fullLetterText = letterParagraphs.join(' ');

  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt của Mẹ chưa hỗ trợ đọc giọng nói tự động.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(fullLetterText);
      utterance.lang = 'vi-VN';
      utterance.rate = 0.88;
      utterance.pitch = 1.0;

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const content = (
    <div className="relative rounded-3xl bg-[#14151C] border border-[#D4AF37]/40 p-6 sm:p-10 shadow-2xl shadow-black/90 max-w-2xl mx-auto">
      {/* Corner Accents */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60" />

      {/* Top Header with Controls for Mom */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D4AF37]/20 pb-5 mb-7">
        <div className="flex items-center gap-2">
          <Quote className="w-5 h-5 text-[#D4AF37]" />
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-semibold text-white">
            Bức Thư Gửi Mẹ
          </h2>
        </div>

        <div className="flex items-center gap-2">
          {/* Read Aloud Button */}
          <button
            onClick={handleToggleSpeech}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium border transition-colors ${
              isSpeaking
                ? 'bg-[#8C1D24] border-[#D4AF37] text-white animate-pulse'
                : 'bg-[#15161E] border-white/15 text-[#E8D5B5] hover:border-[#D4AF37]/50'
            }`}
          >
            {isSpeaking ? (
              <>
                <VolumeX className="w-4 h-4" />
                <span>Dừng đọc</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Nghe đọc thư</span>
              </>
            )}
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Đóng bức thư"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Letter Body - Pre-set to very large font (rất to) for effortless reading */}
      <div className="space-y-6 text-[#F2ECE1] font-sans text-xl sm:text-2xl leading-relaxed sm:leading-loose">
        <p className="font-serif-luxury text-2xl sm:text-3xl text-[#EAD096] font-semibold">
          {letterParagraphs[0]}
        </p>

        <p>{letterParagraphs[1]}</p>
        <p>{letterParagraphs[2]}</p>
        <p>{letterParagraphs[3]}</p>
        <p>{letterParagraphs[4]}</p>

        {/* Highlight Gift */}
        <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#1B1D27] border border-[#D4AF37]/35 shadow-inner">
          <div className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
            <div className="text-lg sm:text-xl text-[#E2DACB] leading-relaxed">
              {letterParagraphs[5]}
            </div>
          </div>
        </div>

        <p className="font-serif-luxury text-2xl text-[#EAD096] font-semibold pt-1">
          {letterParagraphs[6]}
        </p>
      </div>

      {/* Signature Box */}
      <div className="mt-8 pt-5 border-t border-[#D4AF37]/20 flex flex-col items-end text-right">
        <div className="font-garamond italic text-lg sm:text-xl text-[#C8B89E]">
          Mãi mãi yêu và biết ơn Mẹ,
        </div>
        <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#EAD096] mt-1 flex items-center gap-2">
          <span>{senderName}</span>
          <Heart className="w-5 h-5 text-[#C93B47] fill-[#C93B47]" />
        </div>
        <div className="text-xs sm:text-sm text-neutral-400 mt-1">
          Ngày 20 tháng 10 năm 2026
        </div>
      </div>
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
    <section id="thu-chuc-20-10" className="py-8 px-4 max-w-3xl mx-auto">
      {content}
    </section>
  );
};
