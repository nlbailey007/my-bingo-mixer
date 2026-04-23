interface ModeSelectScreenProps {
  onSelectMode: (mode: 'bingo' | 'cardDeck') => void;
}

export function ModeSelectScreen({ onSelectMode }: ModeSelectScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-transparent">
      <div className="text-center max-w-xl w-full">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-700 mb-2">Solar Mixer</p>
          <h1 className="text-5xl font-black tracking-tight text-slate-900 mb-3">
            How to mix today?
          </h1>
          <p className="text-lg text-slate-600">Choose your networking adventure</p>
        </div>

        <div className="space-y-4">
          {/* Bingo Mode Button */}
          <button
            onClick={() => onSelectMode('bingo')}
            className="w-full bg-white/80 backdrop-blur-sm border-2 border-emerald-200 hover:border-emerald-400 rounded-[24px] p-8 text-left transition-all duration-200 hover:shadow-lg hover:shadow-emerald-200/40 active:scale-98 group"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  🎯 Bingo
                </h2>
                <p className="text-slate-600 text-sm">
                  Find 5 in a row. Tap squares to mark matches and race to win.
                </p>
              </div>
              <div className="text-2xl group-hover:translate-x-1 transition-transform">→</div>
            </div>
          </button>

          {/* Card Deck Mode Button */}
          <button
            onClick={() => onSelectMode('cardDeck')}
            className="w-full bg-white/80 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 rounded-[24px] p-8 text-left transition-all duration-200 hover:shadow-lg hover:shadow-blue-200/40 active:scale-98 group"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  🃏 Card Deck Shuffle
                </h2>
                <p className="text-slate-600 text-sm">
                  Tap to get random questions. Pass the phone and keep the fun rolling.
                </p>
              </div>
              <div className="text-2xl group-hover:translate-x-1 transition-transform">→</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
