import { useState } from 'react';
import { ShuffleCard } from './ShuffleCard';
import { questions } from '../data/questions';

interface CardDeckScreenProps {
  onBack: () => void;
}

export function CardDeckScreen({ onBack }: CardDeckScreenProps) {
  // Initialize with random card using useState initializer
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() =>
    Math.floor(Math.random() * questions.length)
  );

  const handleShuffle = () => {
    // Get random index
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestionIndex(randomIndex);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-transparent">
      <div className="w-full max-w-2xl flex flex-col items-center justify-center gap-8">
        {/* Header */}
        <div className="text-center w-full">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-700 mb-2">
            Card Deck Shuffle
          </p>
          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            Tap to shuffle
          </h1>
        </div>

        {/* Shuffle Card */}
        <ShuffleCard 
          key={currentQuestionIndex}
          question={currentQuestion} 
          onTap={handleShuffle}
        />

        {/* Instructions */}
        <div className="text-center text-slate-600 text-sm">
          <p>• Pass the phone around</p>
          <p>• Each person taps for a new question</p>
          <p>• Keep the fun rolling!</p>
        </div>

        {/* Back Button */}
        <div className="w-full pt-4">
          <button
            onClick={onBack}
            className="w-full text-center text-emerald-700 font-semibold py-2 px-6 rounded-full hover:bg-emerald-50 transition-colors active:bg-emerald-100"
          >
            ← Back to modes
          </button>
        </div>
      </div>
    </div>
  );
}
