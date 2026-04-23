import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center border rounded-3xl transition-all duration-150 select-none min-h-[72px] text-[0.72rem] leading-tight';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-lime-100 border-lime-300 text-lime-900 shadow-[0_0_0_3px_rgba(132,204,22,0.18)]'
      : 'bg-emerald-50 border-emerald-200 text-emerald-900'
    : 'bg-white text-slate-800 border-emerald-100 hover:border-emerald-300 active:bg-emerald-50';

  const freeSpaceClasses = square.isFreeSpace
    ? 'font-semibold text-sm uppercase text-emerald-800'
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Solar hub free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-emerald-700 text-xs">✓</span>
      )}
    </button>
  );
}
