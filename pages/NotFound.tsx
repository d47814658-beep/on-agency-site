import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import Logo from '../components/Logo';

const NotFound: React.FC = () => {
  const { t } = useLanguage();
  
  // Fallback content if translation is missing (though we just added it)
  const content = t.notFound || {
    title: "Page introuvable",
    desc: "Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
    cta: "Retour à l'accueil"
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F7] dark:bg-[#0a0a0a] px-6 text-center transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Logo className="h-16 w-auto text-black dark:text-white" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-6xl md:text-8xl font-bold text-black dark:text-white mb-4 tracking-tighter"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
      >
        {content.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg text-gray-600 dark:text-gray-400 max-w-md mb-8"
      >
        {content.desc}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg shadow-black/10 dark:shadow-white/5 hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
          {content.cta}
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
