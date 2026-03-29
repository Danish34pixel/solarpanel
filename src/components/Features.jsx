import React from 'react';
import { useLanguage } from './LanguageContext';

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    { title: t.features.efficient.title, desc: t.features.efficient.desc },
    { title: t.features.sustainable.title, desc: t.features.sustainable.desc },
    { title: t.features.smart.title, desc: t.features.smart.desc }
  ];

  return (
    <section id="features" className="grid md:grid-cols-3 gap-8 py-20">
      {features.map((feature, i) => (
        <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
          <div className="w-12 h-12 bg-amber-500 rounded-2xl mb-6 group-hover:rotate-12 transition-transform"></div>
          <h3 className="text-2xl font-black mb-4 uppercase">{feature.title}</h3>
          <p className="text-slate-400 text-lg leading-relaxed">{feature.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
