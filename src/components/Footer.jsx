import React from 'react';
import { useLanguage } from './LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="py-20 px-12 bg-black border-t border-white/10 text-center md:text-left">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-black italic">SOLAR</h3>
          <p className="text-slate-500 max-w-xs">{t.footer.desc}</p>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-amber-500">{t.footer.linksTitle}</h4>
          <ul className="space-y-4 text-slate-400">
            <li>{t.nav.home}</li>
            <li>{t.nav.installation}</li>
            <li>{t.nav.about}</li>
            <li>{t.nav.contact}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-amber-500">{t.footer.supportTitle}</h4>
          <ul className="space-y-4 text-slate-400">
            <li>FAQ</li>
            <li>Technical Desk</li>
            <li>Warranty</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-amber-500">{t.footer.contactTitle}</h4>
          <p className="text-slate-400">123 Solar Way<br/>California, CA 90210<br/>contact@solar.com</p>
        </div>
      </div>
      <div className="mt-20 pt-10 border-t border-white/5 text-center text-slate-600">
        <p>&copy; {t.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
