import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { FolderOpen, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { useLanguage } from './LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  // Use Unsplash images or abstract gradients for visual placeholders
  const images = [
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop", // Fashion/Luxury
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", // Data/SaaS
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"  // Architecture
  ];

  return (
    <Section id="projects" className="py-20 md:py-32 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
          >
             <FolderOpen className="w-3.5 h-3.5 text-black" />
             <span className="text-[10px] font-bold tracking-widest uppercase text-gray-600">{t.projects.badge}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
          >
            {t.projects.title} <span className="text-gray-400">{t.projects.subtitle}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto"
          >
            {t.projects.desc}
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 bg-gray-200/50 rounded-2xl">
                {t.projects.items.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 z-10 ${
                            activeTab === idx 
                                ? 'text-black shadow-sm' 
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        {activeTab === idx && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-white rounded-xl shadow-sm"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                        <span className="relative uppercase tracking-wider">Project {idx + 1}</span>
                    </button>
                ))}
            </div>
        </div>

        {/* Main Content Area */}
        <div className="relative min-h-[500px] md:min-h-[600px] bg-white rounded-[2rem] p-4 md:p-6 shadow-xl shadow-black/5 border border-gray-100 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-8 md:gap-12 h-full items-center"
                >
                    {/* Left: Visual */}
                    <div className="relative h-64 md:h-full min-h-[300px] md:min-h-[500px] rounded-3xl overflow-hidden bg-gray-100 group">
                        <img 
                            src={images[activeTab]} 
                            alt={t.projects.items[activeTab].title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col justify-center px-4 md:px-0 md:pr-12 py-6">
                        <span className="text-sm font-bold text-gray-400 mb-6 block">0{activeTab + 1}</span>
                        
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            {t.projects.items[activeTab].title}
                        </h3>
                        
                        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                            {t.projects.items[activeTab].desc}
                        </p>

                        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10">
                            {t.projects.items[activeTab].stats.map((stat, i) => (
                                <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <div className="text-3xl font-bold text-black mb-1">{stat.value}</div>
                                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <MagneticButton className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-black rounded-xl hover:bg-gray-800 transition-colors shadow-lg shadow-black/20 group">
                                {t.projects.cta}
                                <ArrowUpRight className="ml-2 w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                            </MagneticButton>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>

      </div>
    </Section>
  );
};

export default Projects;