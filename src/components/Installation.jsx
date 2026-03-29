import React from 'react';
import slider2 from '../assets/slider2.png';
import { useLanguage } from './LanguageContext';
import { CheckCircle2, ClipboardCheck, Layout, HardHat, Zap } from 'lucide-react';

const Installation = () => {
  const { t } = useLanguage();
  
  const stepIcons = [
    <ClipboardCheck className="w-6 h-6" />,
    <Layout className="w-6 h-6" />,
    <HardHat className="w-6 h-6" />,
    <Zap className="w-6 h-6" />
  ];

  return (
    <section id="installation" className="py-32 flex flex-col lg:flex-row items-center gap-20 border-t border-white/10 relative">
      <div className="absolute -left-20 top-40 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full"></div>
      
      <div className="flex-1 space-y-10 z-10">
        <div className="space-y-4">
          <span className="text-amber-500 font-black tracking-[0.3em] uppercase text-sm">{t.installation.label}</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-tight">
            {t.installation.title} <br /> <span className="text-amber-500">{t.installation.excellence}</span>
          </h2>
        </div>
        
        <p className="text-slate-400 text-xl md:text-2xl leading-relaxed font-light max-w-xl">
          {t.installation.desc}
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {t.installation.steps.map((step, i) => (
            <div key={i} className="flex gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                {stepIcons[i]}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white uppercase">{step.title}</h3>
                <p className="text-slate-500 leading-snug">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-[2rem] font-black text-xl hover:bg-amber-500 border border-transparent transition-all transform hover:scale-105 active:scale-95 shadow-xl">
          {t.installation.cta} <CheckCircle2 className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 w-full max-w-2xl relative group">
        <div className="absolute -inset-4 bg-amber-500/10 rounded-[4rem] blur-2xl group-hover:bg-amber-500/20 transition-all duration-1000"></div>
        <div className="relative aspect-[4/5] bg-slate-900 rounded-[3.5rem] overflow-hidden border border-white/20 shadow-2xl">
          <img 
            src={slider2} 
            alt="Installation Process" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      </div>
    </section>
  );
};

export default Installation;
