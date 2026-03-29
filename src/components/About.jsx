import React from 'react';
import { useLanguage } from './LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 text-center space-y-12">
      <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase">
        {t.about.title} <span className="text-amber-500">{t.about.us}</span>
      </h2>
      <p className="text-slate-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
        {t.about.desc}
      </p>
    </section>
  );
};

export default About;
