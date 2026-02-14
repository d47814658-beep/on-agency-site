import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Section } from './ui/Section';
import { useLanguage } from './LanguageContext';

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
    <Section id="faq" className="bg-[#F5F5F7]">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
          >
             <HelpCircle className="w-3.5 h-3.5 text-black" />
             <span className="text-[10px] font-bold tracking-widest uppercase text-gray-600">{t.faq.header.badge}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4"
          >
            {t.faq.header.title} <span className="text-gray-400">{t.faq.header.subtitle}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500"
          >
            {t.faq.header.desc}
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {faqData.map((category) => (
            <button
              key={category.id}
              onClick={() => { setActiveTab(category.id); setOpenIndex(null); }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === category.id 
                  ? 'bg-black text-white shadow-lg shadow-black/20' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
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
            </motion.div>
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
                ? 'bg-white border-black shadow-md' 
                : 'bg-white border-gray-200 hover:border-gray-300'
            }`}
        >
            <span className={`font-semibold text-lg pr-8 transition-colors ${isOpen ? 'text-black' : 'text-gray-800'}`}>
              {question}
            </span>
            <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              isOpen ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
            }`}>
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
            </span>
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed bg-white mx-1 rounded-b-2xl border-x border-b border-gray-100">
                        {answer}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default FAQ;