import { useState, useEffect, useCallback } from 'react';
import { HeroIntroTransition } from './components/HeroIntroTransition';

export function App() {
  const [replayKey, setReplayKey] = useState<number>(0);

  const handleReplay = useCallback(() => {
    setReplayKey((prev) => prev + 1);
  }, []);

  // Keyboard shortcut: Press 'R' or 'Space' to replay sequence cleanly
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === 'r' || e.key === 'R' || e.key === ' ') {
        e.preventDefault();
        handleReplay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleReplay]);

  return (
    <main className="relative min-h-screen w-full overflow-x-clip notebook-ruled-bg">
      <HeroIntroTransition replayKey={replayKey} />
    </main>
  );
}

export default App;
