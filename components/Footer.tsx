import React from 'react';
import { Instagram } from 'lucide-react';
import Logo from './Logo';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

// Fix: Cast motion components to any
const MotionDiv = motion.div as any;
const MotionA = motion.a as any;

// Custom TikTok Icon
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

const FooterLink = ({ href, children }: { href: string, children?: React.ReactNode }) => (
  <li>
    <a href={href} className="relative group inline-block py-0.5">
      <span className="relative z-10 text-gray-500 group-hover:text-black transition-colors">{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-px bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
    </a>
  </li>
);

const SocialButton = ({ href, label, children }: { href: string, label: string, children?: React.ReactNode }) => (
  <MotionA 
    href={href}
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    className="p-2.5 bg-gray-50 rounded-full text-gray-600 border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-sm hover:text-black transition-all duration-300"
  >
    {children}
  </MotionA>
);

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

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
            <SocialButton 
              href="https://www.instagram.com/onagency.site?igsh=MWw1dTBwb3Vra3YyZg==" 
              label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </SocialButton>
            
            <SocialButton 
              href="https://www.tiktok.com/@on_agency1?_r=1&_t=ZN-93vN7DGAm4E" 
              label="TikTok"
            >
              <Tiktok className="w-5 h-5" />
            </SocialButton>
          </div>
        </div>

        <div className="flex gap-12 md:gap-24">
          <div>
            <h5 className="font-semibold mb-4 text-gray-900 tracking-tight">{t.footer.company}</h5>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#about">{t.footer.about}</FooterLink>
              <FooterLink href="#services">{t.footer.services}</FooterLink>
              <FooterLink href="#contact">{t.footer.careers}</FooterLink>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Giant Logo Reveal */}
      <div className="border-t border-gray-100 pt-10 flex flex-col items-center">
         <MotionDiv 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 0.1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[12vw] font-black tracking-tighter leading-none text-black select-none pointer-events-none"
         >
            ON AGENCY
         </MotionDiv>
         <div className="mt-8 text-center text-xs text-gray-400">
            © {currentYear} ON AGENCY. {t.footer.rights}
         </div>
      </div>
    </footer>
  );
};

export default Footer;