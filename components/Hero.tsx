import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { useLanguage } from './LanguageContext';

// Fix: Cast motion components to any to avoid 'initial does not exist' errors
const MotionDiv = motion.div as any;
const MotionP = motion.p as any;
const MotionH1 = motion.h1 as any;
const MotionA = motion.a as any;

const Hero: React.FC = () => {
  const { t } = useLanguage();

  // "Blur Up" variants for that specific Cosmos reveal feel
  const blurUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      filter: 'blur(10px)' 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Ease-out-expo
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex flex-col justify-center items-center text-center px-4 md:px-12 overflow-hidden bg-[#F5F5F7] dark:bg-[#0D0D0D] transition-colors duration-500">
      
      {/* Background gradients for subtle depth, removed complex orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/40 dark:bg-white/5 rounded-full blur-[120px] opacity-60 dark:opacity-20" />
      </div>

      <MotionDiv 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center max-w-5xl mx-auto w-full"
      >
        
        {/* Minimal Pill Badge */}
        <MotionA 
          href="#pricing"
          variants={blurUpVariants}
          className="inline-flex cursor-pointer select-none items-center justify-center gap-x-1 rounded-full bg-white/50 dark:bg-white/10 border border-white/40 dark:border-white/10 backdrop-blur-3xl px-4 py-2 hover:px-5 transition-all duration-300 group mb-8"
        >
          <span className="text-[11px] font-medium tracking-widest uppercase text-gray-800 dark:text-gray-200">
            {t.hero.badge}
          </span>
          <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-0.5 text-gray-800 dark:text-gray-200">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="opacity-70">
              <path d="M6.57524 4.66927L10 8.0026L6.57524 11.3359L5.95238 10.7297L8.75476 8.0026L5.95238 5.27546L6.57524 4.66927Z" fill="currentColor"></path>
            </svg>
          </span>
        </MotionA>

        {/* Main Title - Massive, Tight Tracking */}
        <div className="mb-8">
           <MotionH1 
             variants={blurUpVariants}
             className="text-[3rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[-0.04em] text-black dark:text-white text-center text-balance"
           >
             {t.hero.title1}
           </MotionH1>
           <MotionH1 
             variants={blurUpVariants}
             className="text-[3rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[-0.04em] text-black dark:text-white text-center text-balance"
           >
             {t.hero.title2}
           </MotionH1>
        </div>

        {/* Description - Clean, simple */}
        <MotionP 
          variants={blurUpVariants}
          className="text-lg md:text-xl text-gray-500 dark:text-white/60 max-w-xl mb-12 font-normal leading-relaxed tracking-tight"
        >
          {t.hero.description}
          <span className="block mt-2">
             <span className="text-black dark:text-white font-medium">{t.hero.price}</span> {t.hero.subDesc}
          </span>
        </MotionP>

        {/* Buttons - Solid, high contrast */}
        <MotionDiv 
          variants={blurUpVariants}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton 
            href="#pricing"
            className="group min-w-[180px] inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full transition-transform"
          >
            {t.hero.cta1}
          </MagneticButton>
          
          <MagneticButton 
            href="#services"
            className="min-w-[180px] inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-gray-700 dark:text-white bg-transparent border border-gray-300 dark:border-white/20 rounded-full hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
          >
            {t.hero.cta2}
          </MagneticButton>
        </MotionDiv>

      </MotionDiv>
    </section>
  );
};

export default Hero;