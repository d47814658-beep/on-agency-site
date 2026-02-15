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
            // Fix: Cast element to HTMLElement to match lenis.scrollTo signature
            lenis.scrollTo(element as HTMLElement);
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
        <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-md bg-white/70 border border-white/40 rounded-2xl px-4 md:px-6 py-3 shadow-sm relative transition-shadow hover:shadow-md duration-500">
          {/* Logo Left - Scroll to Hero */}
          <div className="flex items-center w-[120px] md:w-[140px]">
            <a href="#hero" className="block cursor-pointer group" aria-label="Back to top">
              <Logo className="h-6 md:h-8 text-black transition-transform duration-300 group-hover:scale-105" />
            </a>
          </div>

          {/* Centered Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#benefits" className="hover:text-black transition-colors">{t.nav.features}</a>
            <a href="#pricing" className="hover:text-black transition-colors">{t.nav.pricing}</a>
            <a href="#services" className="hover:text-black transition-colors">{t.nav.services}</a>
          </div>

          {/* CTA Right (Desktop) */}
          <div className="hidden md:flex items-center gap-4 justify-end">
            <button 
              onClick={toggleLanguage} 
              className="text-xs font-bold flex items-center gap-1 px-3 py-1.5 hover:bg-black/5 rounded-full transition-colors active:scale-95 duration-200"
            >
              <span className={language === 'fr' ? "text-black" : "text-gray-400"}>FR</span>
              <span className="text-gray-300">/</span>
              <span className={language === 'en' ? "text-black" : "text-gray-400"}>EN</span>
            </button>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs md:text-sm font-semibold px-4 md:px-5 py-2 md:py-2.5 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors shadow-lg shadow-black/20"
            >
              {t.nav.contact}
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden w-[120px] justify-end items-center gap-3">
             <button 
                onClick={toggleLanguage} 
                className="text-xs font-bold flex items-center gap-1 px-2 py-1 bg-white/50 rounded-lg active:scale-95 transition-transform"
              >
                <span className={language === 'fr' ? "text-black" : "text-gray-400"}>FR</span>
                <span className="text-gray-300">/</span>
                <span className={language === 'en' ? "text-black" : "text-gray-400"}>EN</span>
              </button>
             <button onClick={toggleMenu} className="p-2 text-gray-800 active:scale-90 transition-transform">
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
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 mt-2 px-4 md:hidden"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col gap-2">
                <a href="#benefits" className="p-3 hover:bg-gray-50 rounded-xl text-gray-800 font-medium">{t.nav.features}</a>
                <a href="#pricing" className="p-3 hover:bg-gray-50 rounded-xl text-gray-800 font-medium">{t.nav.pricing}</a>
                <a href="#services" className="p-3 hover:bg-gray-50 rounded-xl text-gray-800 font-medium">{t.nav.services}</a>
                <div className="h-px bg-gray-100 my-1"></div>
                <a href="#contact" className="text-center p-3 bg-black text-white rounded-xl font-semibold shadow-md active:scale-[0.98] transition-transform">
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