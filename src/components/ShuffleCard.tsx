import { useState } from 'react';
import type { CSSProperties } from 'react';

interface ShuffleCardProps {
  question: string;
  onTap: () => void;
}

export function ShuffleCard({ question, onTap }: ShuffleCardProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTap = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onTap();
      setIsAnimating(false);
    }, 300);
  };

  const cardStyle: CSSProperties = {
    perspective: '1000px',
  };

  const buttonStyle: CSSProperties = {
    transform: isAnimating
      ? 'rotateY(180deg) scale(0.98)'
      : 'rotateY(0deg) scale(1)',
    transformStyle: 'preserve-3d',
    transitionDuration: isAnimating ? '300ms' : '150ms',
  };

  return (
    <div
      style={cardStyle}
      className="w-full"
    >
      <button
        onClick={handleTap}
        className="relative w-full aspect-[3/4] bg-gradient-to-br from-blue-400 to-blue-600 rounded-[32px] p-8 text-white shadow-2xl shadow-blue-300/40 transition-all duration-300 active:scale-98 cursor-pointer overflow-hidden"
        style={buttonStyle}
      >
        {/* Card glow effect */}
        <div className="absolute inset-0 bg-blue-400/20 rounded-[32px] blur-xl" />
        
        {/* Card content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center">
          {/* Question mark icon */}
          <div className="text-6xl mb-6 opacity-80">❓</div>
          
          {/* Question text */}
          <p className="text-3xl font-bold leading-tight break-words">
            {question}
          </p>
          
          {/* Tap indicator at bottom */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <div className="text-sm opacity-75 font-semibold tracking-wider">
              TAP TO SHUFFLE
            </div>
          </div>
        </div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/40 rounded-tl-lg" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/40 rounded-br-lg" />
      </button>
    </div>
  );
}
