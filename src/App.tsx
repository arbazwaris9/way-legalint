import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DisclaimerModal from './components/DisclaimerModal';

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  useEffect(() => {
    const hasAgreed = localStorage.getItem('wayLegalDisclaimerAgreed');
    if (hasAgreed === 'true') {
      setShowDisclaimer(false);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('wayLegalDisclaimerAgreed', 'true');
    setShowDisclaimer(false);
  };

  return (
    <>
      {showDisclaimer && <DisclaimerModal onAgree={handleAgree} />}
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
