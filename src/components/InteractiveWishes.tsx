import React, { useState } from 'react';
import { Heart, Sun, Smile, Users, Sparkles, ChevronRight } from 'lucide-react';

export const InteractiveWishes: React.FC = () => {
  const [selectedWish, setSelectedWish] = useState<number | null>(0);

  const wishes = [
    {
      id: 0,
      icon: Heart,
      title: 'Sức Khỏe Vững Vàng',
      subtitle: 'Bình an qua từng ngày tháng',
      detail: 'Cha và tụi con cầu mong Mẹ luôn dồi dào sức khỏe, mỗi đêm đều có giấc ngủ thật sâu, ăn uống ngon miệng và đôi chân luôn khỏe khoắn dẻo dai để dạo bước cùng cha và con cháu khắp muôn nơi.',
      quote: '"Sức khỏe của Mẹ là tài sản quý giá nhất của cha và tụi con."',
    },
    {
      id: 1,
      icon: Smile,
      title: 'Nụ Cười Rạng Rỡ & Trẻ Trung',
      subtitle: 'Hạnh phúc & an yên mỗi ngày',
      detail: 'Mẹ luôn mang vẻ đẹp mặn mà, đằm thắm của một người phụ nữ cả đời tần tảo vì chồng con. Mong nụ cười hiền từ ấy luôn rạng ngời trên môi Mẹ mỗi ngày, xua tan mọi âu lo phiền muộn.',
      quote: '"Chỉ cần thấy nụ cười của Mẹ, tổ ấm của cha và tụi con luôn rộn rã niềm vui."',
    },
    {
      id: 2,
      icon: Sun,
      title: 'Tâm Hồn Thảnh Thơi',
      subtitle: 'An yên tận hưởng cuộc sống',
      detail: 'Mẹ đã lo toan cho cả nhà suốt bao năm tháng, giờ là lúc Mẹ được thảnh thơi, tự do làm những điều Mẹ thích: trồng hoa, nghe nhạc, đi chùa và diện chiếc túi xách mới cùng cha dạo phố.',
      quote: '"Hãy để cha và tụi con được làm điểm tựa vững chãi cho Mẹ an lòng."',
    },
    {
      id: 3,
      icon: Users,
      title: 'Ấm Áp Gia Đình',
      subtitle: 'Tình thân gắn kết trọn vẹn',
      detail: 'Dù đi xa đến đâu, mâm cơm ấm cúng và ánh mắt dịu hiền của Mẹ vẫn luôn là chốn bình yên nhất mà cha và tụi con luôn muốn trở về để được quây quần bên Mẹ.',
      quote: '"Cả nhà mình luôn bên Mẹ, mãi mãi yêu Mẹ vô điều kiện."',
    },
  ];

  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#E8D5B5] text-xs font-medium uppercase tracking-wider mb-2.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          Ước Nguyện Của Cha & Tụi Con Dành Cho Mẹ
        </div>
        <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-semibold">
          Bốn Mùa An Yên Bên Mẹ
        </h2>
        <p className="font-garamond italic text-sm sm:text-base text-[#C8B89E] mt-1">
          Mẹ hãy chạm nhẹ vào từng lời chúc để đọc tâm sự của cha và tụi con nhé!
        </p>
      </div>

      {/* Grid of 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
        {wishes.map((w) => {
          const Icon = w.icon;
          const isSelected = selectedWish === w.id;
          return (
            <button
              key={w.id}
              onClick={() => setSelectedWish(w.id)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 border relative ${
                isSelected
                  ? 'bg-[#1C1E29] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10 ring-1 ring-[#D4AF37]/50 scale-[1.01]'
                  : 'bg-[#14151C] border-white/10 hover:border-[#D4AF37]/40 hover:bg-[#181A23]'
              }`}
            >
              <div className="flex items-center justify-between mb-2.5">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#D4AF37] text-black' : 'bg-[#222430] text-[#D4AF37]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-[#D4AF37] rotate-90' : 'text-neutral-500'
                  }`}
                />
              </div>

              <h3 className="font-serif-luxury text-base sm:text-lg font-semibold text-white mb-0.5">
                {w.title}
              </h3>
              <p className="text-xs text-neutral-400">
                {w.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Detail Box for Selected Wish */}
      {selectedWish !== null && (
        <div className="rounded-3xl bg-gradient-to-br from-[#1C1E29] to-[#121319] border border-[#D4AF37]/40 p-5 sm:p-7 shadow-2xl animate-fadeIn">
          <div className="flex items-center gap-2.5 mb-3">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <h4 className="font-serif-luxury text-lg sm:text-xl font-semibold text-[#F5DEB3]">
              {wishes[selectedWish].title}
            </h4>
          </div>

          <p className="text-sm sm:text-base text-[#EADFCF] leading-relaxed mb-4 font-sans">
            {wishes[selectedWish].detail}
          </p>

          <div className="border-t border-[#D4AF37]/20 pt-3 flex items-center justify-between">
            <span className="font-garamond italic text-xs sm:text-sm text-[#D4AF37]">
              {wishes[selectedWish].quote}
            </span>
            <Heart className="w-3.5 h-3.5 text-[#C93B47] fill-[#C93B47]" />
          </div>
        </div>
      )}
    </section>
  );
};
