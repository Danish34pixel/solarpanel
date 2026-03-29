import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import slider3 from '../assets/slider3.png';

const ImageSlider = () => {
  const { t } = useLanguage();
  
  const images = [
    { url: slider1, title: t.slider[0].title, desc: t.slider[0].desc },
    { url: slider2, title: t.slider[1].title, desc: t.slider[1].desc },
    { url: slider3, title: t.slider[2].title, desc: t.slider[2].desc }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Initial animation
    gsap.fromTo(slideRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
    );
    
    gsap.fromTo(contentRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out' }
    );
  }, [currentIndex]);

  const nextSlide = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    });
    tl.to(slideRef.current, { opacity: 0, scale: 1.05, duration: 0.5, ease: 'power2.in' });
  };

  const prevSlide = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    });
    tl.to(slideRef.current, { opacity: 0, scale: 1.05, duration: 0.5, ease: 'power2.in' });
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-[3rem] shadow-2xl group">
      {/* Slides */}
      <div 
        ref={slideRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className="absolute bottom-16 left-8 md:left-20 max-w-2xl text-white"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">
          {images[currentIndex].title}
        </h2>
        <p className="text-xl md:text-2xl text-slate-300 font-light max-w-lg">
          {images[currentIndex].desc}
        </p>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-16 right-8 md:right-20 flex gap-4">
        <button 
          onClick={prevSlide}
          className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-amber-500 hover:border-amber-500 transition-all transform hover:scale-110 active:scale-95"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-amber-500 hover:border-amber-500 transition-all transform hover:scale-110 active:scale-95"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div 
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-12 bg-amber-500' : 'w-4 bg-white/30'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
