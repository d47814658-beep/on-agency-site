import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-black overflow-hidden">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 pl-6 lg:pl-12 max-w-[1800px] mx-auto">
        
        {/* Left Side: Horizontal Scroll Carousel */}
        <div className="w-full lg:w-7/12 overflow-x-auto pb-12 hide-scrollbar flex gap-6 snap-x snap-mandatory">
            {t.projects.items.map((item, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="min-w-[280px] md:min-w-[360px] snap-center group relative cursor-pointer"
                >
                    {/* Image Card */}
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-900 border border-gray-800/50">
                        <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        
                        {/* Content inside card */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                           <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-2 uppercase">{item.category}</p>
                           <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                           
                           {/* Quick Stats Row */}
                           <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 border-t border-white/10 pt-3">
                              {item.stats.slice(0, 1).map((s, i) => (
                                <div key={i} className="text-xs text-gray-300">
                                   <span className="font-bold text-white block text-sm">{s.value}</span>
                                   {s.label}
                                </div>
                              ))}
                           </div>
                        </div>
                    </div>

                    {/* Item Label Below */}
                    <div className="mt-4 text-center">
                        <span className="text-xs font-medium text-gray-600 group-hover:text-gray-400 transition-colors uppercase tracking-widest">Item {index + 1}</span>
                    </div>
                </motion.div>
            ))}
            
            {/* End Spacer */}
            <div className="min-w-[50px]"></div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-5/12 pr-6 lg:pr-24 flex lg:justify-start">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10">
                
                {/* Vertical Line (Desktop) */}
                <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "8rem" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="hidden lg:block w-1 bg-white rounded-full mt-2 flex-shrink-0"
                ></motion.div>

                {/* Text Block */}
                <div className="text-center lg:text-left">
                    <motion.h2 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl xl:text-7xl font-medium tracking-tighter text-white leading-[1.1]"
                    >
                        {t.projects.headline} <br className="hidden lg:block"/>
                        <span className="italic font-light text-gray-400">{t.projects.headlineItalic}</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 flex justify-center lg:justify-start"
                    >
                        <div className="group flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                            <div className="h-[1px] w-8 bg-gray-500 group-hover:w-12 transition-all"></div>
                            <span className="text-xs font-bold text-white uppercase tracking-[0.2em]">{t.projects.badge}</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>

      </div>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;