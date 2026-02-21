import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleBlur = () => {
      setIsBlurred(true);
    };

    const handleFocus = () => {
      setIsBlurred(false);
    };

    const handleKeyDown = (e) => {
      // Prevent PrintScreen (though difficult to block entirely, we can blur)
      if (e.key === 'PrintScreen' || (e.ctrlKey && e.key === 'p')) {
        setIsBlurred(true);
        setTimeout(() => setIsBlurred(false), 3000);
      }
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div id="privacy-message" style={{ display: isBlurred ? 'block' : 'none' }}>
        <h3>🔒 Content Protected</h3>
        <p>For security reasons, screenshots and printing are restricted on this portfolio.</p>
      </div>
      <div className={isBlurred ? 'privacy-blur' : ''}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

