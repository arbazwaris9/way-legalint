import { Scale, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 text-white z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#1a2332]/98 backdrop-blur-md shadow-2xl py-3' : 'bg-[#1a2332]/95 backdrop-blur-sm shadow-lg py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Scale className="w-8 h-8 text-[#d4af37]" strokeWidth={1.5} />
            <div>
              <h1 className="text-2xl font-heading tracking-wider">W.A.Y LEGAL</h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-[#d4af37] transition-colors font-light relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-[#d4af37] transition-colors font-light relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#d4af37] transition-colors font-light relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#d4af37]"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-700 space-y-3 animate-fade-in-down">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 hover:text-[#d4af37] transition-colors font-light"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 hover:text-[#d4af37] transition-colors font-light"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 hover:text-[#d4af37] transition-colors font-light"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
