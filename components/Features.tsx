import React from 'react';
import { Marquee } from './ui/Marquee';
import { useLanguage } from './LanguageContext';

const images = [
  "https://res.cloudinary.com/dpknc20k0/image/upload/v1771151649/media__1771151015580.jpg",
  "https://res.cloudinary.com/dpknc20k0/image/upload/v1771151651/media__1771151015594.jpg",
  "https://res.cloudinary.com/dpknc20k0/image/upload/v1771151650/media__1771151015611.jpg",
  "https://res.cloudinary.com/dpknc20k0/image/upload/v1771151650/media__1771151015617.jpg",
  "https://res.cloudinary.com/dpknc20k0/image/upload/v1771152811/propvision.png"
];

const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-black py-20 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* Carousel Section (Left) */}
        <div className="w-full md:w-1/2 relative">
           {/* Fades */}
           <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
           <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
           
           <Marquee pauseOnHover className="[--duration:30s]">
              {images.map((img, i) => (
                <div key={i} className="mx-4 relative group cursor-pointer">
                  <div className="w-48 h-64 md:w-56 md:h-72 rounded-2xl overflow-hidden border border-white/10 bg-gray-900 shadow-2xl">
                    <img 
                      src={img} 
                      alt={`Project ${i+1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
           </Marquee>
        </div>

        {/* Text Section (Right) */}
        <div className="w-full md:w-1/2 text-left">
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
             {t.features.headline.main} <br/>
             <span className="italic font-serif">{t.features.headline.italic}</span> <br/>
             {t.features.headline.end}
           </h2>
        </div>

      </div>
    </section>
  );
};

export default Features;