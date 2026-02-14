import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section className="bg-white rounded-t-[30px] md:rounded-t-[50px] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)] pt-20 md:pt-32 pb-20 md:pb-32 px-4 md:px-0">
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        
        {/* Large Card - Revolutionary Model */}
        <motion.div 
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          className="col-span-1 md:col-span-2 p-6 md:p-12 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col md:flex-row items-center gap-8 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-black text-white rounded-full text-xs font-bold uppercase mb-4">{t.features.bigCard.badge}</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.features.bigCard.title}</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {t.features.bigCard.desc}
            </p>
          </div>
          <div className="flex-1 w-full h-64 md:h-72 bg-white rounded-2xl shadow-inner border border-gray-200 relative overflow-hidden group flex items-end justify-center pb-24">
             
             {/* Visualization: Cost Comparison Chart */}
             <div className="flex items-end gap-8 md:gap-12 relative z-10">
                {/* Traditional Agency Bar */}
                <div className="flex flex-col items-center gap-3">
                   <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{t.features.bigCard.chartAgency}</span>
                   <motion.div 
                     initial={{ height: 0 }}
                     whileInView={{ height: "140px" }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, ease: EASE_OUT_EXPO }}
                     className="w-16 md:w-20 bg-gray-100 rounded-t-xl relative overflow-hidden border-t border-x border-gray-200"
                   >
                      <div className="absolute top-3 w-full text-center text-xs font-bold text-gray-400">5k</div>
                      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-gray-200/50 to-transparent"></div>
                   </motion.div>
                </div>

                {/* ON AGENCY Bar */}
                <div className="flex flex-col items-center gap-3">
                   <span className="text-xs font-bold text-black uppercase tracking-wide">{t.features.bigCard.chartOn}</span>
                   <motion.div 
                     initial={{ height: 0 }}
                     whileInView={{ height: "24px" }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, delay: 0.3, ease: EASE_OUT_EXPO }}
                     className="w-16 md:w-20 bg-black rounded-t-xl relative shadow-xl shadow-black/20"
                   >
                       <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: -30 }}
                          transition={{ delay: 1, duration: 0.5 }}
                          className="absolute -top-4 left-1/2 -translate-x-1/2 text-sm font-bold text-black"
                       >
                          97$
                       </motion.div>
                   </motion.div>
                </div>
             </div>

             {/* Decorative Background Elements */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

             {/* Bottom Card Overlay */}
             <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-4 bg-white/90 backdrop-blur rounded-xl shadow-lg border border-gray-100 flex justify-between items-center z-20">
                <span className="font-bold text-gray-800 text-sm md:text-base">{t.features.bigCard.labelEco}</span>
                <span className="font-bold text-black text-sm md:text-base">98%</span>
             </div>
          </div>
        </motion.div>

        {/* Small Card - Pure Code */}
        <motion.div 
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT_EXPO }}
          className="p-6 md:p-8 rounded-3xl bg-black text-white relative overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-default min-h-[250px]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <h3 className="text-xl font-bold mb-4 relative z-10">{t.features.codeCard.title}</h3>
          <p className="text-gray-400 relative z-10 text-sm leading-relaxed mb-6">
            {t.features.codeCard.desc}
          </p>
          <div className="flex flex-wrap gap-2 relative z-10">
            <span className="px-2 py-1 rounded bg-gray-900 text-xs text-gray-300 font-mono border border-gray-800">React</span>
            <span className="px-2 py-1 rounded bg-gray-900 text-xs text-gray-300 font-mono border border-gray-800">TS</span>
            <span className="px-2 py-1 rounded bg-gray-900 text-xs text-gray-300 font-mono border border-gray-800">Tailwind</span>
          </div>
        </motion.div>

        {/* Small Card - Ownership */}
        <motion.div 
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
          className="p-6 md:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:scale-[1.02] transition-transform duration-300 cursor-default min-h-[250px]"
        >
          <h3 className="text-xl font-bold mb-4">{t.features.ownerCard.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {t.features.ownerCard.desc}
          </p>
          <div className="mt-6 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
                className="h-full bg-black rounded-full"
            />
          </div>
          <div className="mt-2 text-xs text-gray-400 text-right">{t.features.ownerCard.progression}</div>
        </motion.div>

      </div>
    </Section>
  );
};

export default Features;