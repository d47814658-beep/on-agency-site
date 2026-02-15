import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import FeatureScroll from './components/FeatureScroll';
import FounderNote from './components/FounderNote';
import Benefits from './components/Benefits';
import Features from './components/Features';
import Services from './components/Services';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Logo from './components/Logo';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { LanguageProvider, useLanguage } from './components/LanguageContext';

const AppContent: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();
  
  useEffect(() => {
    // Initialize Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Global click handler for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        // Only intercept internal hash links
        if (href?.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            lenis.scrollTo(element);
            setIsMobileMenuOpen(false); // Close mobile menu on navigation
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen font-sans bg-[#F5F5F7] selection:bg-gray-200 selection:text-black overflow-x-hidden">
      <ScrollProgress />
      
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-6 bg-transparent">
        <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-md bg-white/70 border border-white/40 rounded-2xl px-4 md:px-6 py-3 shadow-sm relative">
          {/* Logo Left - Scroll to Hero */}
          <div className="flex items-center w-[120px] md:w-[140px]">
            <a href="#hero" className="block cursor-pointer" aria-label="Back to top">
              <Logo className="h-6 md:h-8 text-black" />
            </a>
          </div>

          {/* Centered Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#benefits" className="hover:text-black transition-colors">{t.nav.features}</a>
            <a href="#projects" className="hover:text-black transition-colors">Projets</a>
            <a href="#pricing" className="hover:text-black transition-colors">{t.nav.pricing}</a>
            <a href="#services" className="hover:text-black transition-colors">{t.nav.services}</a>
          </div>

          {/* CTA Right (Desktop) */}
          <div className="hidden md:flex items-center gap-4 justify-end">
            <button 
              onClick={toggleLanguage} 
              className="text-xs font-bold flex items-center gap-1 px-2 py-1 hover:bg-black/5 rounded transition-colors"
            >
              <span className={language === 'fr' ? "text-black" : "text-gray-400"}>FR</span>
              <span className="text-gray-300">/</span>
              <span className={language === 'en' ? "text-black" : "text-gray-400"}>EN</span>
            </button>
            <a href="#contact" className="text-xs md:text-sm font-semibold px-4 md:px-5 py-2 md:py-2.5 bg-black text-white rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-black/20 hover:-translate-y-0.5">
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden w-[120px] justify-end items-center gap-3">
             <button 
                onClick={toggleLanguage} 
                className="text-xs font-bold flex items-center gap-1 px-2 py-1 bg-white/50 rounded-lg"
              >
                <span className={language === 'fr' ? "text-black" : "text-gray-400"}>FR</span>
                <span className="text-gray-300">/</span>
                <span className={language === 'en' ? "text-black" : "text-gray-400"}>EN</span>
              </button>
             <button onClick={toggleMenu} className="p-2 text-gray-800">
               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 px-4 md:hidden"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col gap-4">
                <a href="#benefits" className="p-3 hover:bg-gray-50 rounded-xl text-gray-800 font-medium">{t.nav.features}</a>
                <a href="#projects" className="p-3 hover:bg-gray-50 rounded-xl text-gray-800 font-medium">Projets</a>
                <a href="#pricing" className="p-3 hover:bg-gray-50 rounded-xl text-gray-800 font-medium">{t.nav.pricing}</a>
                <a href="#services" className="p-3 hover:bg-gray-50 rounded-xl text-gray-800 font-medium">{t.nav.services}</a>
                <div className="h-px bg-gray-100 my-1"></div>
                <a href="#contact" className="text-center p-3 bg-black text-white rounded-xl font-semibold">
                  {t.nav.contact}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        <Hero />
        <FounderNote />
        <Benefits />
        <FeatureScroll />
        <Features />
        <Services />
        <Projects />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;