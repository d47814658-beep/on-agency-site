import React from 'react';
import { Instagram } from 'lucide-react';
import Logo from './Logo';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

// Custom TikTok Icon (since it's not always in lucide-react default exports)
const Tiktok = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
        
        <div className="max-w-sm">
          <div className="mb-6">
            <Logo className="h-8 text-black" />
          </div>
          <p className="text-gray-500 leading-relaxed mb-6">
            {t.footer.desc}
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/onagency.site?igsh=MWw1dTBwb3Vra3YyZg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.tiktok.com/@on_agency1?_r=1&_t=ZN-93vN7DGAm4E" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
              aria-label="TikTok"
            >
              <Tiktok className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex gap-12 md:gap-24">
          <div>
            <h5 className="font-semibold mb-4 text-gray-900">{t.footer.company}</h5>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">{t.footer.about}</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">{t.footer.services}</a></li>
              <li><a href="#" className="hover:text-black transition-colors">{t.footer.careers}</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Giant Logo Reveal */}
      <div className="border-t border-gray-100 pt-10 flex flex-col items-center">
         <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 0.1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[12vw] font-black tracking-tighter leading-none text-black select-none pointer-events-none"
         >
            ON AGENCY
         </motion.div>
         <div className="mt-8 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} ON AGENCY. {t.footer.rights}
         </div>
      </div>
    </footer>
  );
};

export default Footer;