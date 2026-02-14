import React, { useState, useRef } from 'react';
import { Check } from 'lucide-react';
import { Section } from './ui/Section';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const containerRef = useRef(null);
  const { t } = useLanguage();
  
  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.8]);

  return (
    <Section id="pricing">
      <div ref={containerRef} className="max-w-lg mx-auto">
        
        {/* Toggle Switch */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded-full border border-gray-200 shadow-sm inline-flex relative z-10">
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-colors z-10 ${!isAnnual ? 'text-white' : 'text-gray-500'}`}
            >
              {!isAnnual && (
                <motion.div
                  layoutId="pricing-pill"
                  className="absolute inset-0 bg-black rounded-full shadow-md"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative">{t.pricing.monthly}</span>
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-colors z-10 ${isAnnual ? 'text-white' : 'text-gray-500'}`}
            >
              {isAnnual && (
                <motion.div
                  layoutId="pricing-pill"
                  className="absolute inset-0 bg-black rounded-full shadow-md"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative">{t.pricing.annual}</span>
            </button>
          </div>
        </div>

        <motion.div 
          style={{ scale, opacity, willChange: 'transform, opacity' }}
          className="relative bg-white/80 backdrop-blur-xl rounded-[32px] p-8 md:p-12 shadow-2xl border border-white/20 overflow-hidden"
        >
          {/* Animated Gradient Border (Grayscale) */}
          <div className="absolute inset-0 p-[1px] rounded-[32px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-gradient-shift pointer-events-none -z-10" />
          
          {/* Badge */}
          <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-6 py-2 rounded-bl-2xl z-20">
            {t.pricing.badge}
          </div>

          <div className="text-center mb-8 relative z-10">
            <h3 className="text-gray-500 font-medium uppercase tracking-wide mb-2">{t.pricing.offer}</h3>
            <div className="flex items-baseline justify-center gap-1 h-16">
              <AnimatePresence mode="wait">
                <motion.span 
                  key={isAnnual ? "year" : "month"}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.3, type: "spring" }}
                  className="text-5xl font-extrabold tracking-tight text-gray-900"
                >
                  {isAnnual ? "997$" : "97$"}
                </motion.span>
              </AnimatePresence>
              <span className="text-xl text-gray-500">
                {isAnnual ? t.pricing.perYear : t.pricing.perMonth}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              {isAnnual ? t.pricing.subYear : t.pricing.subMonth}
            </p>
          </div>

          <div className="space-y-4 mb-10 relative z-10">
            {t.pricing.features.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-gray-700 text-sm md:text-base">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 px-6 bg-black text-white font-bold rounded-xl transition-all shadow-lg shadow-black/20 relative z-10"
          >
            {t.pricing.cta}
          </motion.button>

          <p className="text-center text-xs text-gray-400 mt-6 relative z-10">
            {t.pricing.disclaimer}
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default Pricing;