import React from 'react';
import { MessageCircle, Bot, Sparkles } from 'lucide-react';

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export const ChatFloatingButton: React.FC<Props> = ({ onClick, isOpen }) => {
  if (isOpen) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Mini greeting badge */}
      <div
        onClick={onClick}
        className="hidden sm:flex items-center gap-2 bg-white/95 text-stone-800 text-xs px-3.5 py-1.5 rounded-full shadow-md border border-stone-200/90 cursor-pointer hover:bg-white transition-all animate-bounce [animation-duration:3s]"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-medium">Флорист-консультант 🇰🇬 🇷🇺</span>
      </div>

      {/* Main Floating Button */}
      <button
        onClick={onClick}
        className="group relative w-14 h-14 rounded-full bg-[#2C3E2D] hover:bg-[#1E2B1F] text-white flex items-center justify-center shadow-xl ring-4 ring-white/80 active:scale-95 transition-all"
        aria-label="Открыть чат с флористом"
      >
        <MessageCircle className="w-6 h-6 text-[#A3B899] group-hover:scale-110 transition-transform" />

        {/* Small AI Sparkle badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C47768] text-white rounded-full flex items-center justify-center text-[10px] shadow-xs">
          <Sparkles className="w-3 h-3" />
        </span>
      </button>
    </div>
  );
};
