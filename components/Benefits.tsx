import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Star } from 'lucide-react';
import { useLanguage } from './LanguageContext';

// Fix: Cast motion components to any
const MotionDiv = motion.div as any;
const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;

const Benefits: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="benefits" className="pt-24 pb-8 md:pt-32 md:pb-12">
      <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
        {/* Badge 'AVANTAGES' */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200/60 shadow-lg shadow-gray-200/40"
        >
          <Star className="w-3.5 h-3.5 text-black fill-black" />
          <span className="text-[11px] font-bold tracking-widest uppercase text-gray-600">
            {t.benefits.badge}
          </span>
        </MotionDiv>

        <MotionH2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900"
        >
          {t.benefits.title}
        </MotionH2>
        <MotionP 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-gray-500 max-w-2xl mx-auto"
        >
          {t.benefits.subtitle}
        </MotionP>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1: Zéro Upfront - Visualization: Bar Chart Comparison */}
        <BenefitCard 
          title={t.benefits.card1.title}
          description={t.benefits.card1.desc}
          delay={0.3}
        >
          <div className="relative w-full h-full flex items-end justify-center gap-8 px-8 pb-8">
             {/* Traditional Cost */}
             <div className="flex flex-col items-center gap-2 w-16 group/chart">
                <MotionDiv 
                  initial={{ height: 0 }}
                  whileInView={{ height: "8rem" }} // h-32
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="w-full bg-gray-200 rounded-t-lg relative overflow-hidden flex items-end justify-center group-hover/card:bg-gray-300 transition-colors"
                >
                   <MotionDiv 
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ delay: 1 }}
                     className="mb-2 text-[10px] text-gray-500 font-bold rotate-[-90deg]"
                   >
                     Agency
                   </MotionDiv>
                </MotionDiv>
                <span className="text-xs font-medium text-gray-400">5k</span>
             </div>
             {/* ON Cost */}
             <div className="flex flex-col items-center gap-2 w-16 group/chart">
                <MotionDiv 
                  initial={{ height: 0 }}
                  whileInView={{ height: "40px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
                  className="w-full bg-black rounded-t-lg relative overflow-hidden flex items-end justify-center"
                >
                </MotionDiv>
                <MotionDiv 
                   initial={{ opacity: 0, scale: 0.8 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 1.2 }}
                   className="px-2 py-0.5 bg-black text-white text-[10px] font-bold rounded-full"
                >
                   97$
                </MotionDiv>
             </div>
             
             {/* Decor line */}
             <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20" viewBox="0 0 200 150">
                <path d="M20,130 C50,130 50,50 180,50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
             </svg>
          </div>
        </BenefitCard>

        {/* Card 2: Livraison Rapide - Visualization: Loading/Progress */}
        <BenefitCard 
          title={t.benefits.card2.title}
          description={t.benefits.card2.desc}
          delay={0.4}
        >
           <div className="w-full h-full flex flex-col items-center justify-center px-10">
              <div className="flex items-center justify-between w-full mb-2">
                 {[0, 1, 2].map((i) => (
                    <MotionDiv 
                      key={i}
                      initial={{ opacity: 0.3 }}
                      whileInView={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-black' : 'bg-gray-300'}`}
                    />
                 ))}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
                <MotionDiv 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "circOut", delay: 0.6 }}
                  className="h-full bg-black rounded-full"
                />
              </div>
              <MotionDiv 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
                className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-100 rounded-lg shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                <span className="text-xs font-bold text-gray-800">{t.benefits.card2.badge}</span>
              </MotionDiv>
           </div>
        </BenefitCard>

        {/* Card 3: Qualité Premium - Visualization: Abstract clean layout/Code */}
        <BenefitCard 
          title={t.benefits.card3.title}
          description={t.benefits.card3.desc}
          delay={0.5}
        >
           <div className="w-full h-full flex items-center justify-center relative">
              {/* Abstract decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                 <MotionDiv 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="w-32 h-32 border border-gray-300 rounded-full" 
                   style={{ borderStyle: 'dashed' }} 
                 />
                 <div className="w-40 h-40 border border-gray-200 rounded-full absolute" />
              </div>
              
              <MotionDiv 
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 z-10 flex flex-col items-center gap-1"
              >
                 <div className="flex items-end gap-1 mb-1">
                    <div className="w-1.5 h-3 bg-black rounded-sm"></div>
                    <div className="w-1.5 h-5 bg-black rounded-sm"></div>
                    <div className="w-1.5 h-4 bg-black rounded-sm"></div>
                 </div>
                 <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider">{t.benefits.card3.badge}</span>
                 <div className="w-full h-0.5 bg-gray-100 mt-1">
                    <MotionDiv 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="w-full h-full bg-black"
                    />
                 </div>
              </MotionDiv>
           </div>
        </BenefitCard>
      </div>
    </Section>
  );
};

interface BenefitCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, children, delay }) => (
  <MotionDiv 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ 
      y: -5, 
      scale: 1.02,
      transition: { duration: 0.3 }
    }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group/card bg-white rounded-3xl p-2 shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300"
  >
    <div className="h-56 bg-[#F9FAFB] rounded-2xl mb-6 overflow-hidden relative border border-gray-50">
      {children}
    </div>
    <div className="px-4 pb-6">
      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover/card:text-black transition-colors">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  </MotionDiv>
);

export default Benefits;