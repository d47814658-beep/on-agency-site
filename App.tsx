import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { Menu, X, Sun, Moon } from 'lucide-react';
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
import { ScrollToTop } from './components/ui/ScrollToTop';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { ThemeProvider, useTheme } from './components/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-200 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

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
            lenis.scrollTo(element as HTMLElement, {
              offset: -100, // Header buffer
              duration: 1.5, // Smooth transition
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
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

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.4,
        bounce: 0,
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -15 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen font-sans bg-[#F5F5F7] dark:bg-[#0a0a0a] selection:bg-gray-200 selection:text-black dark:selection:bg-gray-800 dark:selection:text-white overflow-x-hidden transition-colors duration-500">
      <ScrollProgress />
      <ScrollToTop />
      
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-6 bg-transparent">
        <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-md bg-white/70 dark:bg-black/70 border border-white/40 dark:border-white/10 rounded-2xl px-4 md:px-6 py-3 shadow-sm relative transition-all hover:shadow-md duration-500">
          {/* Logo Left - Scroll to Hero */}
          <div className="flex items-center w-[120px] md:w-[140px]">
            <a href="#hero" className="block cursor-pointer group" aria-label="Back to top">
              <Logo className="h-6 md:h-8 text-black dark:text-white transition-transform duration-300 group-hover:scale-105" />
            </a>
          </div>

          {/* Centered Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
            <a href="#benefits" className="hover:text-black dark:hover:text-white transition-colors">{t.nav.features}</a>
            <a href="#pricing" className="hover:text-black dark:hover:text-white transition-colors">{t.nav.pricing}</a>
            <a href="#services" className="hover:text-black dark:hover:text-white transition-colors">{t.nav.services}</a>
          </div>

          {/* CTA Right (Desktop) */}
          <div className="hidden md:flex items-center gap-4 justify-end">
            <ThemeToggle />
            <button 
              onClick={toggleLanguage} 
              className="text-xs font-bold flex items-center gap-1 px-3 py-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors active:scale-95 duration-200"
            >
              <span className={language === 'fr' ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-600"}>FR</span>
              <span className="text-gray-300 dark:text-gray-700">/</span>
              <span className={language === 'en' ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-600"}>EN</span>
            </button>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs md:text-sm font-semibold px-4 md:px-5 py-2 md:py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-xl hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors shadow-lg shadow-black/20 dark:shadow-white/5"
            >
              {t.nav.contact}
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden w-[120px] justify-end items-center gap-2">
             <ThemeToggle />
             <button 
                onClick={toggleLanguage} 
                className="text-xs font-bold flex items-center gap-1 px-2 py-1 bg-white/50 dark:bg-white/10 rounded-lg active:scale-95 transition-transform"
              >
                <span className={language === 'fr' ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-500"}>FR</span>
                <span className="text-gray-300 dark:text-gray-700">/</span>
                <span className={language === 'en' ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-500"}>EN</span>
              </button>
             <button onClick={toggleMenu} className="p-2 text-gray-800 dark:text-white focus:outline-none relative w-10 h-10 flex items-center justify-center">
               <AnimatePresence mode="wait" initial={false}>
                 {isMobileMenuOpen ? (
                   <motion.div
                     key="close"
                     initial={{ rotate: -90, opacity: 0 }}
                     animate={{ rotate: 0, opacity: 1 }}
                     exit={{ rotate: 90, opacity: 0 }}
                     transition={{ duration: 0.2 }}
                     className="absolute"
                   >
                     <X size={24} />
                   </motion.div>
                 ) : (
                   <motion.div
                     key="open"
                     initial={{ rotate: 90, opacity: 0 }}
                     animate={{ rotate: 0, opacity: 1 }}
                     exit={{ rotate: -90, opacity: 0 }}
                     transition={{ duration: 0.2 }}
                     className="absolute"
                   >
                     <Menu size={24} />
                   </motion.div>
                 )}
               </AnimatePresence>
             </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="absolute top-full left-0 right-0 mt-2 px-4 md:hidden"
            >
              <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 p-4 flex flex-col gap-2 overflow-hidden">
                <motion.a variants={itemVariants} href="#benefits" className="p-3 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl text-gray-800 dark:text-gray-200 font-medium">{t.nav.features}</motion.a>
                <motion.a variants={itemVariants} href="#pricing" className="p-3 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl text-gray-800 dark:text-gray-200 font-medium">{t.nav.pricing}</motion.a>
                <motion.a variants={itemVariants} href="#services" className="p-3 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl text-gray-800 dark:text-gray-200 font-medium">{t.nav.services}</motion.a>
                <motion.div variants={itemVariants} className="h-px bg-gray-100 dark:bg-white/10 my-1"></motion.div>
                <motion.a variants={itemVariants} href="#contact" className="text-center p-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-semibold shadow-md active:scale-[0.98] transition-transform">
                  {t.nav.contact}
                </motion.a>
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
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;