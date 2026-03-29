import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import logo from '../assets/logo.png';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const navLinks = [
    { name: t.nav.home, href: '#slider' },
    { name: t.nav.installation, href: '#installation' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.contact, href: '#footer' },
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(navRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power4.out' });
    tl.fromTo(linksRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, "-=0.5");
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: { y: targetId, offsetY: 100 }, ease: 'power3.inOut' });
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(mobileMenuRef.current, { opacity: 0, height: 0 }, { opacity: 1, height: 'auto', duration: 0.5, ease: 'power3.out' });
    }
  }, [isOpen]);

  const handleMouseEnter = (index) => {
    gsap.to(linksRef.current[index], { scale: 1.1, color: '#fbbf24', duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = (index) => {
    gsap.to(linksRef.current[index], { scale: 1, color: 'white', duration: 0.3, ease: 'power2.out' });
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={(e) => handleSmoothScroll(e, '#slider')}>
          <div className="relative">
            <div className="absolute -inset-1 bg-amber-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img src={logo} alt="Solar Logo" className="relative w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} ref={(el) => (linksRef.current[index] = el)} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)} onClick={(e) => handleSmoothScroll(e, link.href)} className="text-white font-medium text-lg relative overflow-hidden group">
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className="flex items-center gap-4">
            <button onClick={toggleLanguage} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-white hover:bg-white/10 transition-all">
              <Globe size={20} />
              <span className="font-bold">{lang === 'en' ? 'HI' : 'EN'}</span>
            </button>
            <button className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20">
              {t.nav.quote}
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleLanguage} className="p-2 bg-white/5 border border-white/10 rounded-lg text-white">
            <span className="font-bold text-sm">{lang === 'en' ? 'HI' : 'EN'}</span>
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div ref={mobileMenuRef} className="md:hidden mt-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} className="text-white text-xl font-medium p-2 hover:bg-white/10 rounded-xl transition-all" onClick={(e) => handleSmoothScroll(e, link.href)}>
                {link.name}
              </a>
            ))}
            <button className="bg-amber-500 text-black p-4 rounded-xl font-bold mt-2">{t.nav.quote}</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
