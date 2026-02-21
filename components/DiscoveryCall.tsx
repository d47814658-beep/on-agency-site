import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const DiscoveryCall: React.FC = () => {
  const { t } = useLanguage();
  
  // Fallback content if not in context yet
  const content = (t as any).discovery || {
    text: "Pas encore sûr ? Prenez 15 min pour en discuter.",
    cta: "Réserver un appel découverte"
  };

  return (
    <section className="py-12 bg-white dark:bg-black border-t border-gray-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <p className="text-lg md:text-xl font-medium text-gray-900 dark:text-white">
            {content.text}
          </p>
          
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg shadow-black/10 dark:shadow-white/5"
          >
            <PhoneCall className="w-4 h-4" />
            {content.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoveryCall;
