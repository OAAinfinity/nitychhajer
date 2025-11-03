import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useCallback, useState } from 'react';
import PageTransition from './components/PageTransition';

function App() {
  const [transitioning, setTransitioning] = useState(false);

  const handleNavigate = useCallback((targetId) => {
    if (!targetId) return;
    setTransitioning(true);
    // Fade overlay in, then scroll, then fade out
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Fallback to hash navigation
        window.location.hash = `#${targetId}`;
      }
      // Allow some time for the smooth scroll before removing overlay
      setTimeout(() => setTransitioning(false), 500);
    }, 200);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageTransition active={transitioning} />
  <Header onNavigate={handleNavigate} />
  <Hero onNavigate={handleNavigate} />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
