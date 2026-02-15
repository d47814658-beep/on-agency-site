import React, { useRef } from 'react';
import { Section } from './ui/Section';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const FounderNote: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <Section id="about" className="py-32 md:py-48">
      <div ref={ref} className="flex flex-col items-center text-center max-w-5xl mx-auto relative">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl md:leading-[1.15] font-medium text-gray-400 mb-12 tracking-tight"
        >
          "{t.founder.text1} <span className="text-black font-bold">{t.founder.bold1}</span> {t.founder.text2} <span className="text-black font-bold">{t.founder.bold2}</span> {t.founder.text3} <span className="text-black font-bold">{t.founder.bold3}</span>{t.founder.text4}"
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center gap-3"
        >
          {/* Avatar / Icon */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-gray-200 to-white border border-gray-200 shadow-inner flex items-center justify-center overflow-hidden">
             {/* Simple Abstract User Avatar */}
             <svg className="w-14 h-14 text-gray-400 mt-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
             </svg>
          </div>
          
          <div className="text-center">
            <div className="font-bold text-gray-900 text-sm">L'Équipe ON AGENCY</div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">{t.founder.role}</div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
};

export default FounderNote;