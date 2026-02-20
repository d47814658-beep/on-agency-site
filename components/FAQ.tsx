import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Section } from './ui/Section';
import { useLanguage } from './LanguageContext';

// Fix: Cast motion components to any
const MotionDiv = motion.div as any;
const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;

interface Question {
  q: string;
  a: string;
}

interface Category {
  id: string;
  label: string;
  questions: Question[];
}

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Construct faqData dynamically based on translations
  const faqData: Category[] = [
    {
      id: 'general',
      label: t.faq.categories.general,
      questions: [
        { q: t.faq.items.q1, a: t.faq.items.a1 },
        { q: t.faq.items.q2, a: t.faq.items.a2 },
        { q: t.faq.items.q3, a: t.faq.items.a3 },
        { q: t.faq.items.q4, a: t.faq.items.a4 }
      ]
    },
    {
      id: 'pricing',
      label: t.faq.categories.pricing,
      questions: [
        { q: t.faq.items.q5, a: t.faq.items.a5 },
        { q: t.faq.items.q6, a: t.faq.items.a6 },
        { q: t.faq.items.q7, a: t.faq.items.a7 },
        { q: t.faq.items.q8, a: t.faq.items.a8 },
        { q: t.faq.items.q9, a: t.faq.items.a9 }
      ]
    },
    {
      id: 'tech',
      label: t.faq.categories.tech,
      questions: [
        { q: t.faq.items.q10, a: t.faq.items.a10 },
        { q: t.faq.items.q11, a: t.faq.items.a11 },
        { q: t.faq.items.q12, a: t.faq.items.a12 },
        { q: t.faq.items.q13, a: t.faq.items.a13 },
        { q: t.faq.items.q14, a: t.faq.items.a14 }
      ]
    },
    {
      id: 'business',
      label: t.faq.categories.business,
      questions: [
        { q: t.faq.items.q15, a: t.faq.items.a15 },
        { q: t.faq.items.q16, a: t.faq.items.a16 },
        { q: t.faq.items.q17, a: t.faq.items.a17 }
      ]
    },
    {
      id: 'objections',
      label: t.faq.categories.objections,
      questions: [
        { q: t.faq.items.q18, a: t.faq.items.a18 },
        { q: t.faq.items.q19, a: t.faq.items.a19 },
        { q: t.faq.items.q20, a: t.faq.items.a20 }
      ]
    }
  ];

  const activeCategory = faqData.find(c => c.id === activeTab) || faqData[0];

  return (
    <Section id="faq" className="bg-[#F5F5F7] dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <MotionDiv 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-sm mb-6"
          >
             <HelpCircle className="w-3.5 h-3.5 text-black dark:text-white" />
             <span className="text-[10px] font-bold tracking-widest uppercase text-gray-600 dark:text-gray-300">{t.faq.header.badge}</span>
          </MotionDiv>
          <MotionH2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
          >
            {t.faq.header.title} <span className="text-gray-400 dark:text-gray-600">{t.faq.header.subtitle}</span>
          </MotionH2>
          <MotionP 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-gray-500 dark:text-gray-400"
          >
            {t.faq.header.desc}
          </MotionP>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {faqData.map((category) => (
            <button
              key={category.id}
              onClick={() => { setActiveTab(category.id); setOpenIndex(null); }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === category.id 
                  ? 'bg-black text-white dark:bg-white dark:text-black shadow-lg shadow-black/20 dark:shadow-white/10' 
                  : 'bg-white dark:bg-neutral-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800 border border-gray-200/50 dark:border-neutral-800'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <MotionDiv
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {activeCategory.questions.map((item, idx) => (
                <AccordionItem 
                  key={idx} 
                  question={item.q} 
                  answer={item.a} 
                  isOpen={openIndex === idx}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                />
              ))}
            </MotionDiv>
          </AnimatePresence>
        </div>

      </div>
    </Section>
  );
};

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="group">
        <button
            onClick={onClick}
            className={`w-full text-left p-6 rounded-2xl flex items-center justify-between transition-all duration-300 border ${
              isOpen 
                ? 'bg-white dark:bg-neutral-900 border-black dark:border-white shadow-md' 
                : 'bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700'
            }`}
        >
            <span className={`font-semibold text-lg pr-8 transition-colors ${isOpen ? 'text-black dark:text-white' : 'text-gray-800 dark:text-gray-200'}`}>
              {question}
            </span>
            <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              isOpen ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-neutral-700'
            }`}>
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
            </span>
        </button>
        <AnimatePresence>
            {isOpen && (
                <MotionDiv
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className="px-6 pb-6 pt-2 text-gray-600 dark:text-gray-300 leading-relaxed bg-white dark:bg-neutral-900 mx-1 rounded-b-2xl border-x border-b border-gray-100 dark:border-neutral-800">
                        {answer}
                    </div>
                </MotionDiv>
            )}
        </AnimatePresence>
    </div>
  )
}

export default FAQ;