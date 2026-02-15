import React from 'react';
import { 
  Sparkles, Zap, BarChart3, 
  ArrowRight, Bot, Layers, Command
} from 'lucide-react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

// --- Visual Components ---

const StrategyVisual = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <div className="relative flex items-center gap-8 md:gap-12">
        {/* Left Node */}
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="relative z-10 w-16 h-16 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center"
        >
          <Layers className="w-8 h-8 text-black" />
        </motion.div>

        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-0">
           <motion.div 
              animate={{ x: [-20, 100], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-full bg-gradient-to-r from-transparent via-black to-transparent"
           />
        </div>

        {/* Right Node */}
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 0.9 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="relative z-10 w-20 h-20 bg-black rounded-2xl shadow-xl flex items-center justify-center"
        >
          <Command className="w-10 h-10 text-white" />
        </motion.div>
        
        {/* Orbiting particles */}
        <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-gray-300 rounded-full" />
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};

const ContentGenVisual = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full h-full flex flex-col justify-center px-4 md:px-12">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2 w-full max-w-md mx-auto">
        {/* Fake Input Bar */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 mb-2">
           <div className="w-4 h-4 rounded-full border-2 border-gray-300 animate-pulse" />
           <div className="h-4 w-px bg-black animate-blink" />
           <span className="text-gray-400 text-sm truncate">{t.services.cards.content.uiInput}</span>
           <div className="ml-auto px-3 py-1 bg-black text-white rounded-lg text-xs font-semibold shadow-sm whitespace-nowrap">
              {t.services.cards.content.uiGen}
           </div>
        </div>

        {/* Fake Dropdown Menu */}
        <div className="flex flex-col gap-1 p-1">
           <motion.div 
             initial={{ opacity: 0, x: -10 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5 }}
             className="px-4 py-2 rounded-lg bg-gray-50 text-sm text-gray-600 font-medium flex items-center gap-2"
           >
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              {t.services.cards.content.uiSeo}
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, x: -10 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.7 }}
             className="px-4 py-2 rounded-lg bg-white text-sm text-gray-400 flex items-center gap-2"
           >
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              {t.services.cards.content.uiFix}
           </motion.div>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="services" className="bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
             <Sparkles className="w-3.5 h-3.5 text-black" />
             <span className="text-[10px] font-bold tracking-widest uppercase text-gray-600">{t.services.header.badge}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            {t.services.header.title} <span className="text-gray-400">{t.services.header.subtitle}</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            {t.services.header.desc}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Strategy (Large Left) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-5 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col justify-between overflow-hidden min-h-[400px]"
          >
             <div className="mb-8 flex-1">
                <StrategyVisual />
             </div>
             <div>
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                   <Layers className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t.services.cards.strategy.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                   {t.services.cards.strategy.desc}
                </p>
             </div>
          </motion.div>

          {/* Card 2: Content/AI (Large Right) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-7 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col justify-between overflow-hidden min-h-[400px]"
          >
             <div className="mb-8 flex-1 flex items-center bg-gray-50/50 rounded-3xl border border-gray-50/50 inner-shadow">
                <ContentGenVisual />
             </div>
             <div>
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                   <Bot className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t.services.cards.content.title}</h3>
                <p className="text-gray-500 leading-relaxed max-w-lg">
                   {t.services.cards.content.desc}
                </p>
             </div>
          </motion.div>

          {/* Card 3: Performance */}
          <motion.div 
             whileHover={{ y: -5 }}
             className="md:col-span-4 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col min-h-[280px]"
          >
             <div className="mb-auto">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                   <Zap className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.services.cards.performance.title}</h3>
                <p className="text-sm text-gray-500">{t.services.cards.performance.desc}</p>
             </div>
             <a href="#contact" className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between group cursor-pointer hover:bg-gray-50 transition-colors rounded-b-xl -mx-8 -mb-8 px-8 py-4">
                <span className="text-sm font-semibold text-gray-900">{t.services.cards.performance.cta}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
             </a>
          </motion.div>

          {/* Card 4: Analytics */}
          <motion.div 
             whileHover={{ y: -5 }}
             className="md:col-span-4 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col min-h-[280px]"
          >
             <div className="mb-auto">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                   <BarChart3 className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.services.cards.analytics.title}</h3>
                <p className="text-sm text-gray-500">{t.services.cards.analytics.desc}</p>
             </div>
             <a href="#contact" className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between group cursor-pointer hover:bg-gray-50 transition-colors rounded-b-xl -mx-8 -mb-8 px-8 py-4">
                <span className="text-sm font-semibold text-gray-900">{t.services.cards.analytics.cta}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
             </a>
          </motion.div>

          {/* Card 5: Support */}
          <motion.div 
             whileHover={{ y: -5 }}
             className="md:col-span-4 bg-black rounded-[2rem] p-8 shadow-xl flex flex-col min-h-[280px] relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-gray-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             
             <div className="mb-auto relative z-10">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center mb-4">
                   <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{t.services.cards.support.title}</h3>
                <p className="text-sm text-gray-400">{t.services.cards.support.desc}</p>
             </div>
             <a href="#contact" className="mt-6 pt-6 border-t border-gray-800 flex items-center justify-between group cursor-pointer relative z-10 hover:bg-gray-900 transition-colors rounded-b-xl -mx-8 -mb-8 px-8 py-4">
                <span className="text-sm font-semibold text-white">{t.services.cards.support.cta}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
             </a>
          </motion.div>

        </div>
      </div>
    </Section>
  );
};

export default Services;