interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-slate-950/30 flex items-center justify-center p-4 z-50">
      <div className="bg-white/95 border border-emerald-100 rounded-[36px] p-6 max-w-xs w-full text-center shadow-[0_40px_100px_-50px_rgba(16,185,129,0.45)] animate-[bounce_0.5s_ease-out]">
        <div className="text-5xl mb-4">🌿</div>
        <h2 className="text-3xl font-bold text-emerald-700 mb-2">Rooted!</h2>
        <p className="text-slate-600 mb-6">You grew a line of community connections.</p>

        <button
          onClick={onDismiss}
          className="w-full bg-accent text-white font-semibold py-3 px-6 rounded-full active:bg-accent-light transition-colors"
        >
          Keep Growing
        </button>
      </div>
    </div>
  );
}
