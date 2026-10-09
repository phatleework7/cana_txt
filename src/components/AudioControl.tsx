import React, { useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { pianoPlayer } from '../utils/audio';

export const AudioControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    const active = pianoPlayer.toggle();
    setIsPlaying(active);
  };

  return (
    <div className="fixed bottom-6 right-5 z-40">
      <button
        onClick={handleToggle}
        aria-label={isPlaying ? 'Tạm dừng nhạc không lời' : 'Bật nhạc không lời du dương'}
        className={`group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-full backdrop-blur-md border transition-all duration-300 shadow-xl active:scale-95 ${
          isPlaying
            ? 'bg-[#1D1E26]/90 border-[#D4AF37]/60 text-[#F5DEB3] shadow-[#D4AF37]/15'
            : 'bg-[#15161C]/80 border-white/10 text-neutral-300 hover:border-[#D4AF37]/40 hover:text-white'
        }`}
      >
        <span className="relative flex h-3 w-3 items-center justify-center">
          {isPlaying ? (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
          ) : (
            <Music className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#D4AF37]" />
          )}
        </span>

        <span className="text-xs font-medium tracking-wide">
          {isPlaying ? 'Giai điệu êm dịu' : 'Bật giai điệu tặng Mẹ'}
        </span>

        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-[#D4AF37]" />
        ) : (
          <VolumeX className="w-4 h-4 text-neutral-400" />
        )}
      </button>
    </div>
  );
};
