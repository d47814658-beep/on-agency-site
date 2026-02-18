import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { TextEffect, TextEffectPerChar } from './ui/text-effect';
import { useLanguage } from './LanguageContext';

// Fix: Cast motion components to any to avoid 'initial does not exist' errors
const MotionDiv = motion.div as any;
const MotionP = motion.p as any;

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-12 overflow-hidden min-h-[90vh] flex flex-col justify-center items-center text-center bg-[#F5F5F7] dark:bg-[#0a0a0a] transition-colors duration-500">
      
      {/* --- Ambient Background Ripples/Glow (Loop) --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        {/* Center Glow */}
        <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-white dark:bg-neutral-800 rounded-full blur-3xl opacity-80 dark:opacity-20 z-0 animate-float transition-colors duration-500"></div>
        
        {/* Concentric Circles (Ripples) */}
        {[1, 2, 3, 4].map((i) => (
          <MotionDiv
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.4, 0], 
              scale: [0.8, 1.4],
              borderWidth: ["1px", "0px"]
            }}
            transition={{ 
              duration: 5, 
              delay: i * 1.2, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ width: 'min(80vw, 400px)', height: 'min(80vw, 400px)' }}
            className="absolute border border-gray-300 dark:border-white/10 rounded-full z-0"
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto w-full">
        
        {/* Badge Pill - Stylized Chip */}
        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 md:mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-950 border border-gray-200/60 dark:border-white/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-black dark:text-white flex-shrink-0" />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-800 dark:text-gray-200 whitespace-nowrap">
            {t.hero.badge}
          </span>
        </MotionDiv>

        {/* Main Visual Element + Title */}
        <div
          className="mb-8 md:mb-10 relative w-full"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            {/* Logo Orb */}
            <MotionDiv 
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-b from-[#1a1a1a] to-black dark:from-white dark:to-gray-200 rounded-full flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] text-white dark:text-black relative overflow-hidden group border border-gray-800 dark:border-white flex-shrink-0 transform transition-transform duration-700 hover:scale-105 hover:rotate-3"
            >
               <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-60 rounded-t-full"></div>
               <svg viewBox="0 0 55 29" className="w-8 md:w-12 text-current fill-current relative z-10">
                  <rect x="0" y="0" width="55" height="29" rx="14.5" stroke="currentColor" strokeWidth="5" fill="none" />
                  <circle cx="43" cy="14.5" r="8" fill="currentColor" />
               </svg>
            </MotionDiv>
            
            {/* Large Text with Effect - Keyed by language to reset animation */}
            <div className="flex flex-col items-center md:items-start" key={language}>
              <TextEffectPerChar 
                delay={0.5}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-black dark:text-white text-center md:text-left leading-[1.1]"
                children={t.hero.title1}
              />
              <TextEffectPerChar 
                delay={1.2}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-black dark:text-white text-center md:text-left leading-[1.1]"
                children={t.hero.title2}
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <MotionP 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          className="text-base md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mb-10 md:mb-12 font-medium leading-relaxed px-4"
        >
          {t.hero.description}<br className="hidden md:block"/>
          <span className="text-black dark:text-white font-semibold">{t.hero.price}</span> {t.hero.subDesc}
        </MotionP>

        {/* Buttons */}
        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-6 sm:px-0"
        >
          <MagneticButton 
            href="#pricing"
            className="group w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-black dark:bg-white dark:text-black rounded-2xl shadow-xl shadow-black/10 dark:shadow-white/5"
          >
            {t.hero.cta1}
            <ArrowUpRight className="ml-2 w-4 h-4 text-gray-400 group-hover:text-white dark:group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </MagneticButton>
          
          <MagneticButton 
            href="#services"
            className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-gray-50 dark:hover:bg-neutral-800 hover:border-gray-300 transition-all shadow-sm hover:shadow-md duration-300"
          >
            {t.hero.cta2}
          </MagneticButton>
        </MotionDiv>

      </div>
    </section>
  );
};

export default Hero;