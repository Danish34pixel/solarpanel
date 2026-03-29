import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider'
import Hero from './components/Hero'
import Features from './components/Features'
import Installation from './components/Installation'
import About from './components/About'
import Footer from './components/Footer'

import { LanguageProvider } from './components/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-white selection:bg-amber-500/30 overflow-x-hidden">
        <Navbar />
        
        <main className="pt-24 px-6 md:px-12 max-w-[1400px] mx-auto space-y-24 pb-20">
          <ImageSlider />
          <Hero />
          <Features />
          <Installation />
          <About />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
