import React from 'react';
import { useLanguage } from './LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="py-20 px-12 dark:bg-black bg-white border-t dark:border-white/10 border-black/10 text-center md:text-left">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-black italic dark:text-white text-slate-900">SOLAR</h3>
          <p className="dark:text-slate-500 text-slate-500 max-w-xs">{t.footer.desc}</p>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-amber-500">{t.footer.linksTitle}</h4>
          <ul className="space-y-4 dark:text-slate-400 text-slate-600">
            <li className="hover:text-amber-500 cursor-pointer transition-colors">{t.nav.home}</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">{t.nav.installation}</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">{t.nav.about}</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">{t.nav.contact}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-amber-500">{t.footer.supportTitle}</h4>
          <ul className="space-y-4 dark:text-slate-400 text-slate-600">
            <li className="hover:text-amber-500 cursor-pointer transition-colors">FAQ</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">Technical Desk</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">Warranty</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-amber-500">{t.footer.contactTitle}</h4>
          <p className="dark:text-slate-400 text-slate-600">123 Solar Way<br/>California, CA 90210<br/>contact@solar.com</p>
        </div>
      </div>
      <div className="mt-20 pt-10 border-t dark:border-white/5 border-black/5 text-center dark:text-slate-600 text-slate-400">
        <p>&copy; {t.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
