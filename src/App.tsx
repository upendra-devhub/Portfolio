import { useState, useEffect } from 'react';
import { HeroIntroTransition } from './components/HeroIntroTransition';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const [currentHash, setCurrentHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const isContactPage =
    currentPath === '/contact' ||
    currentPath === '/contact/' ||
    currentHash === '#contact-page' ||
    currentHash === '#/contact';

  return (
    <main className="relative min-h-screen w-full overflow-x-clip notebook-ruled-bg">
      {isContactPage ? (
        <ContactPage />
      ) : (
        <HeroIntroTransition replayKey={0} />
      )}
    </main>
  );
}

export default App;
