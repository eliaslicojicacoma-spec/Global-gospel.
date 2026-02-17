import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1a2a6c] py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Globe className="text-white w-8 h-8" />
          <span className="text-white font-serif text-2xl font-bold tracking-wider">GLOBAL GOSPEL</span>
        </div>
        
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <a href="#inicio" className="hover:text-[#b21f1f] transition-colors">Início</a>
          <a href="#missao" className="hover:text-[#b21f1f] transition-colors">Missão</a>
          <a href="#biblioteca" className="hover:text-[#b21f1f] transition-colors">Estudos</a>
          <a href="#bible" className="hover:text-[#b21f1f] transition-colors">Bíblia</a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
