interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-transparent">
      <div className="text-center max-w-sm">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-700 mb-2">Solar Mixer</p>
          <h1 className="text-5xl font-black tracking-tight text-slate-900 mb-3">Plant your network</h1>
          <p className="text-lg text-slate-600">Grow connections with people who share your curious, creative energy.</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-[32px] p-7 shadow-[0_24px_80px_-50px_rgba(16,185,129,0.6)] border border-emerald-200 mb-8">
          <h2 className="font-semibold text-slate-900 mb-3">How to play</h2>
          <ul className="text-left text-slate-600 text-sm space-y-2">
            <li>• Discover people who match the prompts.</li>
            <li>• Tap squares as you find a match.</li>
            <li>• Complete a glowing line to win.</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg shadow-emerald-200/70 active:bg-accent-light transition-colors"
        >
          Start Growing
        </button>
      </div>
    </div>
  );
}
