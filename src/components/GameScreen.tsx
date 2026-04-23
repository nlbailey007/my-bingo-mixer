import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';
import { getBestLineProgress } from '../utils/bingoLogic';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  const progress = getBestLineProgress(board);
  const progressPercent = Math.round((progress.completed / progress.total) * 100);

  return (
    <div className="flex flex-col min-h-full bg-transparent">
      <header className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-sm">
        <button
          onClick={onReset}
          className="text-emerald-700 text-sm px-3 py-1.5 rounded-full border border-emerald-100 bg-white/90 active:bg-emerald-50 transition"
        >
          ← Back
        </button>
        <h1 className="font-bold text-emerald-900 text-xl tracking-tight">Solar Mixer</h1>
        <div className="w-16"></div>
      </header>

      <p className="text-center text-emerald-700 text-sm py-3 px-4">
        Tap a square when someone matches it and grow your solar garden.
      </p>

      <div className="mx-4 mb-4 rounded-[28px] bg-emerald-50/80 border border-emerald-100 p-4 shadow-inner shadow-emerald-100">
        <div className="flex items-center justify-between text-sm font-semibold text-emerald-900 mb-2">
          <span>Garden Growth</span>
          <span>{progress.completed}/5 sprouts</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-emerald-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-lime-400 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="mt-2 text-[0.82rem] text-slate-600">
          Your strongest row has {progress.completed} of {progress.total} connections.
        </p>
      </div>

      {hasBingo && (
        <div className="bg-emerald-100 text-emerald-900 text-center py-2 font-semibold text-sm rounded-full mx-4 shadow-sm border border-emerald-200">
          🌿 Rooted! You grew a line of connections.
        </div>
      )}

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl rounded-[40px] bg-white/85 border border-emerald-100 shadow-[0_30px_80px_-56px_rgba(16,185,129,0.7)] p-5">
          <div className="text-center text-sm text-slate-600 mb-4">
            Watch your network bloom as you match friends and ideas.
          </div>
          <BingoBoard
            board={board}
            winningSquareIds={winningSquareIds}
            onSquareClick={onSquareClick}
          />
        </div>
      </div>
    </div>
  );
}
