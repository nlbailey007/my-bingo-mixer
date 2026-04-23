import { useState } from 'react';
import { useBingoGame } from './hooks/useBingoGame';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { BingoModal } from './components/BingoModal';
import { ModeSelectScreen } from './components/ModeSelectScreen';
import { CardDeckScreen } from './components/CardDeckScreen';

type GameMode = 'selection' | 'bingo' | 'cardDeck';

function App() {
  const [gameMode, setGameMode] = useState<GameMode>('selection');

  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  // Handle mode selection
  const handleSelectMode = (mode: 'bingo' | 'cardDeck') => {
    setGameMode(mode);
    if (mode === 'bingo') {
      startGame();
    }
  };

  // Handle reset - go back to mode selection
  const handleResetToMenu = () => {
    setGameMode('selection');
    resetGame();
  };

  // Mode Selection Screen
  if (gameMode === 'selection') {
    return <ModeSelectScreen onSelectMode={handleSelectMode} />;
  }

  // Bingo Mode
  if (gameMode === 'bingo') {
    if (gameState === 'start') {
      return <StartScreen onStart={startGame} />;
    }

    return (
      <>
        <GameScreen
          board={board}
          winningSquareIds={winningSquareIds}
          hasBingo={gameState === 'bingo'}
          onSquareClick={handleSquareClick}
          onReset={handleResetToMenu}
        />
        {showBingoModal && (
          <BingoModal onDismiss={dismissModal} />
        )}
      </>
    );
  }

  // Card Deck Mode
  if (gameMode === 'cardDeck') {
    return <CardDeckScreen onBack={() => handleResetToMenu()} />;
  }

  return null;
}

export default App;
