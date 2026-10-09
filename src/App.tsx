import React, { useState, useEffect } from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { PetalsCanvas } from './components/PetalsCanvas';
import { AudioControl } from './components/AudioControl';
import { CoverHero } from './components/CoverHero';
import { MotherLetter } from './components/MotherLetter';
import { VascaraShowcase } from './components/VascaraShowcase';
import { QRCodeModal } from './components/QRCodeModal';

export const App: React.FC = () => {
  const [momName] = useState('Mẹ Yêu');
  const [senderName] = useState('Cha và Tụi Con');
  
  // Modals / Drawers state for quick mobile access
  const [activeModal, setActiveModal] = useState<'letter' | 'bag' | 'qr' | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0C0D12] text-[#F3EFE6] relative overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-[#FFF5DC]">
      {/* Floating Petals and Gold Dust */}
      <PetalsCanvas />

      {/* Background Soft Warm Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-96 bg-[#D4AF37]/10 blur-[130px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-80 h-80 bg-[#8C1D24]/10 blur-[120px] pointer-events-none -z-10" />

      {/* Main Single Mobile Cover Page Experience */}
      <main className="relative z-20">
        <CoverHero
          momName={momName}
          senderName={senderName}
          onOpenLetter={() => setActiveModal('letter')}
          onOpenBag={() => setActiveModal('bag')}
          onOpenQR={() => setActiveModal('qr')}
        />

        {/* Detailed Sections Below (Seamless Continuous Scroll for Mom) */}
        <div className="border-t border-[#D4AF37]/25 mt-4 pt-4 bg-gradient-to-b from-[#0C0D12] via-[#111218] to-[#0A0B0E]">
          {/* Section 1: Heartfelt Letter from Cha & Tụi Con */}
          <div id="thu-chuc-20-10">
            <MotherLetter momName={momName} senderName={senderName} />
          </div>

          {/* Section 2: Vascara Bag Showcase */}
          <div id="mon-qua-vascara">
            <VascaraShowcase />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 py-10 px-4 text-center border-t border-[#D4AF37]/20 bg-[#08090C]">
        <div className="flex items-center justify-center gap-1.5 text-[#C93B47] mb-2">
          <Heart className="w-4 h-4 fill-current" />
          <span className="font-serif-luxury text-sm font-semibold text-white">
            Kính Chúc Mẹ 20.10 Thật Nhiều Niềm Vui & Bình An
          </span>
          <Heart className="w-4 h-4 fill-current" />
        </div>
        <p className="text-xs text-neutral-400 font-sans max-w-md mx-auto leading-relaxed">
          Món quà túi xách Vascara TOT 0202 cùng tấm lòng yêu thương, hiếu thảo của Cha và tụi con gửi đến người Mẹ tuyệt vời nhất của cả nhà.
        </p>
        <p className="text-[11px] text-[#A69B89] mt-3">
          Ngày Phụ Nữ Việt Nam 20/10/2026 · Vĩnh cửu yêu thương
        </p>
      </footer>

      {/* Floating Audio Ambient Piano Player */}
      <AudioControl />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Cuộn lên đầu trang"
          className="fixed bottom-6 left-5 z-40 p-3 rounded-full bg-[#181922]/90 border border-[#D4AF37]/40 text-[#D4AF37] backdrop-blur-md shadow-xl hover:bg-[#D4AF37] hover:text-black transition-all active:scale-95"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Active Modal Drawers for Quick Thumb Touch on Mobile */}
      {activeModal === 'letter' && (
        <MotherLetter
          momName={momName}
          senderName={senderName}
          isModal={true}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === 'bag' && (
        <VascaraShowcase
          isModal={true}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === 'qr' && (
        <QRCodeModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          momName={momName}
        />
      )}
    </div>
  );
};

export default App;
