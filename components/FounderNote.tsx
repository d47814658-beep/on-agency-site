import React, { useRef } from 'react';
import { Section } from './ui/Section';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { Quote } from 'lucide-react';

// Fix: Cast motion.div to any
const MotionDiv = motion.div as any;

const FounderNote: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <Section id="about" className="py-32 md:py-48">
      <div ref={ref} className="flex flex-col items-center text-center max-w-5xl mx-auto relative">
        
        <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-sm mb-10"
        >
            <Quote className="w-3.5 h-3.5 text-black dark:text-white" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-600 dark:text-gray-300">{t.founder.badge}</span>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, filter: 'blur(12px)', y: 30 }}
          animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : { opacity: 0, filter: 'blur(12px)', y: 30 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="text-2xl md:text-4xl lg:text-5xl md:leading-[1.15] font-medium text-gray-400 dark:text-gray-500 mb-12 tracking-tight"
        >
          "{t.founder.text1} <span className="text-black dark:text-white font-bold">{t.founder.bold1}</span> {t.founder.text2} <span className="text-black dark:text-white font-bold">{t.founder.bold2}</span> {t.founder.text3} <span className="text-black dark:text-white font-bold">{t.founder.bold3}</span>{t.founder.text4}"
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-3"
        >
          {/* Avatar / Icon */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-gray-200 to-white dark:from-neutral-800 dark:to-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-inner flex items-center justify-center overflow-hidden">
             {/* Simple Abstract User Avatar */}
             <svg className="w-14 h-14 text-gray-400 dark:text-gray-600 mt-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
             </svg>
          </div>
          
          <div className="text-center">
            <div className="font-bold text-gray-900 dark:text-white text-sm">L'Équipe ON AGENCY</div>
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-1">{t.founder.role}</div>
          </div>
        </MotionDiv>

      </div>
    </Section>
  );
};

export default FounderNote;