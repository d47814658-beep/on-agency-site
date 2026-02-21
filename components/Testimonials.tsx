import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Section } from './ui/Section';
import { useLanguage } from './LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  // Fallback if testimonials is not yet in the context type (during transition)
  const items = (t as any).testimonials?.items || [
    {
      name: "Michel D.",
      role: "Plombier Chauffagiste",
      text: "Je ne m'occupe de rien, et j'ai de nouveaux appels chaque semaine. Pour 105€, c'est vite rentabilisé. Un vrai partenaire sur la durée.",
      stars: 5
    },
    {
      name: "Sophie L.",
      role: "Gérante de Restaurant",
      text: "Mon ancien site était moche et ne servait à rien. Celui-là est magnifique et mes clients l'adorent pour voir le menu.",
      stars: 5
    },
    {
      name: "Marc B.",
      role: "Boutique de Vêtements",
      text: "Simple, efficace, et je n'ai rien eu à faire. L'équipe s'est occupée de tout. C'est exactement ce qu'il me fallait.",
      stars: 5
    }
  ];

  const badge = (t as any).testimonials?.badge || "TÉMOIGNAGES";
  const title = (t as any).testimonials?.title || "La parole aux pros";
  const subtitle = (t as any).testimonials?.subtitle || "Ce qu'ils pensent de leur nouveau site.";

  return (
    <Section id="testimonials" className="py-24 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gray-100 dark:bg-white/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gray-100 dark:bg-white/5 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 shadow-sm mb-6"
          >
             <span className="text-[10px] font-bold tracking-widest uppercase text-gray-600 dark:text-gray-300">{badge}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              className="bg-gray-50 dark:bg-neutral-900 p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 relative group hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-gray-200 dark:text-neutral-700 group-hover:text-gray-300 dark:group-hover:text-neutral-600 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed italic">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center text-lg font-bold text-gray-500 dark:text-gray-400">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{item.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
