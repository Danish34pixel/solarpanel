import React from 'react';
import { useLanguage } from './LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="flex flex-col items-center text-center gap-8 py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full -z-10"></div>
      <h1 className="text-6xl md:text-9xl font-black tracking-tighter bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent">
        {t.hero.title} <br /> {t.hero.subtitle}
      </h1>
      <p className="text-xl md:text-3xl text-slate-400 max-w-3xl leading-relaxed font-light">
        {t.hero.desc}
      </p>
      <div className="flex flex-col sm:flex-row gap-6 mt-8">
        <button className="bg-amber-500 text-black px-12 py-5 rounded-3xl font-black text-xl hover:bg-amber-400 transition-all transform hover:scale-110 active:scale-95 shadow-[0_20px_50px_rgba(245,158,11,0.2)]">
          {t.hero.cta}
        </button>
      </div>
    </section>
  );
};

export default Hero;
