import React, { useState } from 'react';
import { Sparkles, ShieldCheck, CheckCircle2, X } from 'lucide-react';

interface VascaraShowcaseProps {
  onClose?: () => void;
  isModal?: boolean;
}

export const VascaraShowcase: React.FC<VascaraShowcaseProps> = ({
  onClose,
  isModal = false,
}) => {
  const images = [
    {
      url: '/src/assets/images/vascara_tot_0202_front.jpg',
      title: 'Chính diện túi Vascara TOT 0202 màu đen',
      tag: 'Chính diện thanh lịch',
    },
    {
      url: '/src/assets/images/vascara_tot_0202_clasp.jpg',
      title: 'Cận cảnh khóa kim loại mạ vàng kép tinh tế & đường may tinh xảo',
      tag: 'Khóa kim loại sang trọng',
    },
    {
      url: '/src/assets/images/vascara_tot_0202_angle.jpg',
      title: 'Góc nghiêng đường cong mềm mại và phom dáng đứng',
      tag: 'Góc nghiêng quý phái',
    },
    {
      url: '/src/assets/images/vascara_tot_0202_side.jpg',
      title: 'Góc bên hông gọn gàng, đáy túi vững chãi',
      tag: 'Chi tiết bên hông',
    },
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const highlights = [
    {
      title: 'Gam Màu Đen Quý Phái & Đẳng Cấp',
      desc: 'Màu đen luôn là biểu tượng của sự sang trọng, đằm thắm và tinh tế. Rất dễ phối cùng áo dài, đầm tiệc truyền thống hay trang phục cùng cha dạo phố thường ngày của Mẹ.',
    },
    {
      title: 'Nhấn Đường Cong Mềm Mại',
      desc: 'Thiết kế miệng túi uốn cong mềm mại uyển chuyển, mang lại cảm giác nhẹ nhàng, đoan trang, biểu trưng cho sự ân cần và nụ cười ấm áp của Mẹ.',
    },
    {
      title: 'Khóa Kim Loại Mạ Vàng Sang Trọng',
      desc: 'Điểm nhấn khóa kim loại mạ vàng hình mắt xích kép óng ánh ở nắp túi tạo nét chấm phá sang trọng, chắc chắn và bảo vệ đồ dùng bên trong an toàn.',
    },
    {
      title: 'Kích Cỡ Vừa Vặn Tiện Lợi',
      desc: 'Túi có không gian vừa vặn để Mẹ đựng điện thoại, ví tiền, kính lão, khăn tay và chìa khóa. Quai cầm êm ái trên vai hoặc xách tay rất tự nhiên và thoải mái.',
    },
  ];

  const content = (
    <div className="relative rounded-3xl bg-[#14151C] border border-[#D4AF37]/35 p-5 sm:p-8 shadow-2xl max-w-4xl mx-auto">
      {/* Close button if modal */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 transition-colors"
          aria-label="Đóng chi tiết túi"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Section Header */}
      <div className="text-center mb-7">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#E8D5B5] text-xs font-medium uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          Món Quà Cha & Tụi Con Kính Tặng Mẹ
        </div>
        <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-semibold">
          Túi Xách Tay Vascara TOT 0202
        </h2>
        <p className="font-garamond italic text-sm sm:text-base text-[#C8B89E] mt-0.5 max-w-lg mx-auto">
          "Nhấn đường cong phối khóa kim loại sang trọng - Màu Đen"
        </p>
      </div>

      {/* Main Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Image Viewer & Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-3.5">
          <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-gradient-to-b from-[#1C1E26] to-[#121318] shadow-2xl aspect-[3/4] sm:aspect-[4/5] flex items-center justify-center p-4 group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

            <img
              src={images[activeImageIndex].url}
              alt={images[activeImageIndex].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
              <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-[#D4AF37]/40 text-[#E8D5B5]">
                {images[activeImageIndex].tag}
              </span>
              <span className="text-xs text-neutral-300 font-sans">
                {activeImageIndex + 1} / {images.length}
              </span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="grid grid-cols-4 gap-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative rounded-xl overflow-hidden aspect-square border bg-[#16171E] p-1 transition-all duration-200 ${
                  activeImageIndex === idx
                    ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50 scale-100 shadow-md'
                    : 'border-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Gift Significance */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="rounded-2xl bg-[#191B24] border border-[#D4AF37]/20 p-5 space-y-4">
            <div className="border-b border-white/10 pb-3">
              <span className="text-[11px] font-semibold tracking-wider text-[#D4AF37] uppercase">
                Ý Nghĩa Món Quà
              </span>
              <h3 className="font-serif-luxury text-lg font-semibold text-white mt-0.5">
                Vì Sao Cha & Tụi Con Chọn Cho Mẹ?
              </h3>
            </div>

            <div className="space-y-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-[#F2ECE1]">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-neutral-300 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mother Care Tip */}
            <div className="pt-3 border-t border-white/10 text-xs text-[#C8B89E] space-y-1 bg-[#14151C] p-3 rounded-xl border border-white/5">
              <div className="flex items-center gap-1.5 font-semibold text-[#E8D5B5]">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                Mẹo nhỏ cho Mẹ bảo quản túi:
              </div>
              <p className="text-[11px] text-neutral-300">
                Khi không dùng, Mẹ chỉ cần để túi vào túi vải bảo quản đi kèm và đặt nơi thoáng mát để phom túi luôn mới Mẹ nhé!
              </p>
            </div>
          </div>
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
    <section id="mon-qua-vascara" className="py-8 px-4 max-w-4xl mx-auto">
      {content}
    </section>
  );
};
