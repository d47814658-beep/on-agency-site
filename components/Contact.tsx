import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { Section } from './ui/Section';
import { useLanguage } from './LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="contact" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
          >
             <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
             <span className="text-[10px] font-bold tracking-widest uppercase text-gray-600">{t.contact.badge}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
          >
            {t.contact.title} <span className="text-gray-400">{t.contact.subtitle}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto"
          >
            {t.contact.desc}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Column - Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Email Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t.contact.emailCard.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {t.contact.emailCard.desc}
              </p>
              <a href="mailto:hello@on-agency.site" className="group inline-flex items-center text-sm font-semibold text-black transition-opacity">
                <span className="border-b border-black group-hover:border-transparent transition-colors duration-300">{t.contact.emailCard.cta}</span>
              </a>
            </motion.div>

            {/* Call Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-black/20">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t.contact.callCard.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {t.contact.callCard.desc}
              </p>
              <a href="#" className="group inline-flex items-center text-sm font-semibold text-black transition-opacity">
                 <span className="border-b border-black group-hover:border-transparent transition-colors duration-300">{t.contact.callCard.cta}</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-7 bg-white p-8 md:p-10 rounded-[32px] border border-gray-100 shadow-lg shadow-gray-200/50"
          >
            <form className="space-y-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">{t.contact.form.name}</label>
                <input 
                  type="text" 
                  placeholder={t.contact.form.namePlace}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all placeholder:text-gray-400 hover:bg-gray-50/80"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">{t.contact.form.email}</label>
                <input 
                  type="email" 
                  placeholder={t.contact.form.emailPlace}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all placeholder:text-gray-400 hover:bg-gray-50/80"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">{t.contact.form.subject}</label>
                <input 
                  type="text" 
                  placeholder={t.contact.form.subjectPlace}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all placeholder:text-gray-400 hover:bg-gray-50/80"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">{t.contact.form.message}</label>
                <textarea 
                  rows={4}
                  placeholder={t.contact.form.messagePlace}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all placeholder:text-gray-400 resize-none hover:bg-gray-50/80"
                />
              </div>

              <motion.button
                whileHover="hover"
                initial="initial"
                whileTap="tap"
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.02 },
                  tap: { scale: 0.98 }
                }}
                className="w-full py-4 bg-black text-white font-bold rounded-xl shadow-lg shadow-black/20 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                <span>{t.contact.form.cta}</span>
                <motion.div
                  variants={{
                    initial: { x: 0, y: 0 },
                    hover: { x: 3, y: -3 },
                    tap: { x: 0, y: 0 }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Send className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </Section>
  );
};

export default Contact;