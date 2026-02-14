import React from 'react';
import { Marquee } from './ui/Marquee';
import { 
  Layout, Code2, Zap, Lock, Wrench, 
  Edit, Headphones, Search 
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

const FeatureScroll: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    { text: t.scroll.custom, icon: Layout },
    { text: t.scroll.code, icon: Code2 },
    { text: t.scroll.hosting, icon: Zap },
    { text: t.scroll.security, icon: Lock },
    { text: t.scroll.maintenance, icon: Wrench },
    { text: t.scroll.content, icon: Edit },
    { text: t.scroll.support, icon: Headphones },
    { text: t.scroll.seo, icon: Search },
  ];

  return (
    <div className="relative w-full py-4 bg-[#F5F5F7] overflow-hidden">
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F5F5F7] to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F5F5F7] to-transparent z-10"></div>
      
      <Marquee pauseOnHover className="[--duration:40s]">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white border border-gray-200/60 shadow-sm whitespace-nowrap hover:shadow-md transition-shadow cursor-default"
          >
            <feature.icon className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-semibold text-gray-800">{feature.text}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default FeatureScroll;