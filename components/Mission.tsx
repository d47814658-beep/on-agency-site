import React, { useRef } from 'react';
import { Section } from './ui/Section';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { Target } from 'lucide-react';

// Fix: Cast motion.div to any
const MotionDiv = motion.div as any;

const Mission: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  // Fallback content if not in context yet
  const content = (t as any).mission || {
    badge: "NOTRE MISSION",
    title: "Votre argent doit travailler pour vous, pas être bloqué dans un site.",
    text1: "ON AGENCY est née d'un constat simple : des milliers de bons commerces locaux perdent des clients chaque jour parce qu'ils sont invisibles sur Google.",
    text2: "Notre mission : vous donner une présence digitale professionnelle, sans vider votre trésorerie. Vous avez déjà l'argent, 105€/mois, c'est déjà dans votre budget."
  };

  return (
    <Section id="mission" className="py-24 md:py-32 bg-gray-50 dark:bg-black/50">
      <div ref={ref} className="flex flex-col items-center text-center max-w-4xl mx-auto relative px-6">
        
        <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-sm mb-8"
        >
            <Target className="w-3.5 h-3.5 text-black dark:text-white" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-600 dark:text-gray-300">{content.badge}</span>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight"
        >
          {content.title}
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl space-y-6"
        >
          <p>{content.text1}</p>
          <p className="font-medium text-gray-900 dark:text-gray-200">{content.text2}</p>
        </MotionDiv>

      </div>
    </Section>
  );
};

export default Mission;
