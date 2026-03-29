import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      home: 'Home',
      installation: 'Installation',
      about: 'About Us',
      contact: 'Contact',
      quote: 'Get Quote'
    },
    hero: {
      title: 'SOLAR ENERGY',
      subtitle: 'FOR THE FUTURE',
      desc: 'Revolutionizing the way we power our world with sustainable, efficient, and beautiful solar solutions.',
      cta: 'Learn More'
    },
    features: {
      efficient: { title: 'Efficient', desc: 'Highest conversion rates in the market.' },
      sustainable: { title: 'Sustainable', desc: '100% clean energy for your home.' },
      smart: { title: 'Smart', desc: 'Monitor your energy usage in real-time.' }
    },
    installation: {
      label: 'Step-by-Step',
      title: 'Installation',
      excellence: 'Excellence',
      desc: 'We take pride in our meticulous installation process. Every home is unique, and our solutions are tailored to ensure peak performance.',
      steps: [
        { title: 'Site Audit', desc: 'Detailed assessment of your roof orientation and structure.' },
        { title: 'System Design', desc: 'Custom 3D modeling of your solar array for maximum sun exposure.' },
        { title: 'Expert Mounting', desc: 'Professional installation by certified solar technicians.' },
        { title: 'Grid Connection', desc: 'Final testing and seamless integration with your power grid.' }
      ],
      cta: 'Schedule Installation'
    },
    about: {
      title: 'About',
      us: 'Us',
      desc: 'With over 15 years of experience in renewable energy, we are dedicated to bringing the power of the sun to every household. Our mission is to accelerate the transition to a sustainable future.'
    },
    footer: {
      desc: 'Building a brighter, cleaner future through innovation and sustainability.',
      linksTitle: 'Quick Links',
      supportTitle: 'Support',
      contactTitle: 'Contact',
      copyright: '2026 Solar Inc. All rights reserved.'
    },
    slider: [
      { title: 'Expert Installation', desc: 'Precision engineering for maximum energy efficiency.' },
      { title: 'Advanced Solar Cells', desc: 'Top-tier technology designed to last for decades.' },
      { title: 'Team of Professionals', desc: 'Certified technicians ensuring a seamless experience.' }
    ]
  },
  hi: {
    nav: {
      home: 'होम',
      installation: 'स्थापना',
      about: 'हमारे बारे में',
      contact: 'संपर्क',
      quote: 'कोटेशन प्राप्त करें'
    },
    hero: {
      title: 'सौर ऊर्जा',
      subtitle: 'भविष्य के लिए',
      desc: 'स्थायी, कुशल और सुंदर सौर समाधानों के साथ हम दुनिया को ऊर्जा देने के तरीके में क्रांति ला रहे हैं।',
      cta: 'और जानें'
    },
    features: {
      efficient: { title: 'कुशल', desc: 'बाजार में उच्चतम ऊर्जा परिवर्तन दर।' },
      sustainable: { title: 'टिकाऊ', desc: 'आपके घर के लिए १००% स्वच्छ ऊर्जा।' },
      smart: { title: 'स्मार्ट', desc: 'वास्तविक समय में अपने ऊर्जा उपयोग की निगरानी करें।' }
    },
    installation: {
      label: 'चरण-दर-चरण',
      title: 'स्थापना',
      excellence: 'उत्कृष्टता',
      desc: 'हमें अपनी सावधानीपूर्वक स्थापना प्रक्रिया पर गर्व है। हर घर अद्वितीय है, और हमारे समाधान बेहतर प्रदर्शन सुनिश्चित करने के लिए तैयार किए गए हैं।',
      steps: [
        { title: 'साइट ऑडिट', desc: 'आपकी छत की दिशा और संरचना का विस्तृत मूल्यांकन।' },
        { title: 'सिस्टम डिजाइन', desc: 'अधिकतम सूर्य के प्रकाश के लिए आपके सौर पैनलों की कस्टम ३D मॉडलिंग।' },
        { title: 'विशेषज्ञ माउंटिंग', desc: 'प्रमाणित सौर तकनीशियनों द्वारा पेशेवर स्थापना।' },
        { title: 'ग्रिड कनेक्शन', desc: 'अंतिम परीक्षण और आपके पावर ग्रिड के साथ निर्बाध एकीकरण।' }
      ],
      cta: 'स्थापना शेड्यूल करें'
    },
    about: {
      title: 'हमारे',
      us: 'बारे में',
      desc: 'अक्षय ऊर्जा में १५ से अधिक वर्षों के अनुभव के साथ, हम हर घर में सूर्य की शक्ति लाने के लिए समर्पित हैं। हमारा मिशन एक स्थायी भविष्य की ओर संक्रमण को तेज करना है।'
    },
    footer: {
      desc: 'नवाचार और स्थिरता के माध्यम से एक उज्जवल, स्वच्छ भविष्य का निर्माण।',
      linksTitle: 'त्वरित लिंक',
      supportTitle: 'सहायता',
      contactTitle: 'संपर्क',
      copyright: '२०२६ सोलर इंक। सर्वाधिकार सुरक्षित।'
    },
    slider: [
      { title: 'विशेषज्ञ स्थापना', desc: 'अधिकतम ऊर्जा दक्षता के लिए सटीक इंजीनियरिंग।' },
      { title: 'उन्नत सौर सेल', desc: 'दशकों तक चलने के लिए डिज़ाइन की गई शीर्ष स्तर की तकनीक।' },
      { title: 'पेशेवर टीम', desc: 'निर्बाध अनुभव सुनिश्चित करने वाले प्रमाणित तकनीशियन।' }
    ]
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
