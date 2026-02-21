import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, Loader2, CheckCircle } from 'lucide-react';
import { Section } from './ui/Section';
import { useLanguage } from './LanguageContext';

// Fix: Cast motion components to any
const MotionDiv = motion.div as any;
const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;
const MotionButton = motion.button as any;

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [contactMethod, setContactMethod] = useState<'email' | 'call'>('email');

  useEffect(() => {
    if (contactMethod === 'call') {
      const script = document.createElement('script');
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      }
    }
  }, [contactMethod]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Integration FormSubmit.co
      const response = await fetch("https://formsubmit.co/ajax/onagency215@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Nouveau contact: ${formData.subject || 'Sans objet'}`,
          _template: "table"
        })
      });

      const result = await response.json();
      console.log("Form submission result:", result);

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Form submission failed:", result);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <Section id="contact" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <MotionDiv 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-sm mb-6"
          >
             <div className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse" />
             <span className="text-[10px] font-bold tracking-widest uppercase text-gray-600 dark:text-gray-300">{t.contact.badge}</span>
          </MotionDiv>
          <MotionH2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            {t.contact.title} <span className="text-gray-400 dark:text-gray-600">{t.contact.subtitle}</span>
          </MotionH2>
          <MotionP 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {t.contact.desc}
          </MotionP>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Column - Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Email Card */}
            <MotionDiv 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={() => setContactMethod('email')}
              className={`cursor-pointer bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-3xl border shadow-sm hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/50 transition-all duration-300 ${contactMethod === 'email' ? 'border-black dark:border-white ring-1 ring-black dark:ring-white' : 'border-gray-100 dark:border-neutral-800'}`}
            >
              <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-black/20 dark:shadow-white/10 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white dark:text-black" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t.contact.emailCard.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                {t.contact.emailCard.desc}
              </p>
              <div className="group inline-flex items-center text-sm font-semibold text-black dark:text-white transition-opacity">
                <span className={`border-b ${contactMethod === 'email' ? 'border-black dark:border-white' : 'border-transparent'} group-hover:border-black dark:group-hover:border-white transition-colors duration-300`}>{t.contact.emailCard.cta}</span>
              </div>
            </MotionDiv>

            {/* Call Card */}
            <MotionDiv 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.7 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={() => setContactMethod('call')}
              className={`cursor-pointer bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-3xl border shadow-sm hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/50 transition-all duration-300 ${contactMethod === 'call' ? 'border-black dark:border-white ring-1 ring-black dark:ring-white' : 'border-gray-100 dark:border-neutral-800'}`}
            >
              <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-black/20 dark:shadow-white/10">
                <Phone className="w-6 h-6 text-white dark:text-black" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t.contact.callCard.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                {t.contact.callCard.desc}
              </p>
              <div className="group inline-flex items-center text-sm font-semibold text-black dark:text-white transition-opacity">
                 <span className={`border-b ${contactMethod === 'call' ? 'border-black dark:border-white' : 'border-transparent'} group-hover:border-black dark:group-hover:border-white transition-colors duration-300`}>{t.contact.callCard.cta}</span>
              </div>
            </MotionDiv>

          </div>

          {/* Right Column - Form or Calendar */}
          <MotionDiv 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className={`lg:col-span-7 bg-white dark:bg-neutral-900 rounded-[32px] border border-gray-100 dark:border-neutral-800 shadow-lg shadow-gray-200/50 dark:shadow-black/50 h-full relative overflow-hidden ${contactMethod === 'call' ? 'p-0' : 'p-6 md:p-10'}`}
          >
            <AnimatePresence mode="wait">
              {contactMethod === 'call' ? (
                <MotionDiv
                  key="calendar"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full min-h-[600px]"
                >
                  <div 
                    className="calendly-inline-widget w-full h-full" 
                    data-url="https://calendly.com/onagency215/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=000000&primary_color=000000" 
                    style={{ minWidth: '320px', height: '100%' }} 
                  />
                </MotionDiv>
              ) : (
                <MotionDiv
                  key="form-container"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  {status === 'success' ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-20">
                       <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                          <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                       </div>
                       <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message envoyé !</h3>
                       <p className="text-gray-500 dark:text-gray-400 max-w-xs">Nous avons bien reçu votre demande et reviendrons vers vous sous 24h.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col justify-between">
                      <div className="space-y-6">
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">{t.contact.form.name}</label>
                          <input 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            type="text" 
                            placeholder={t.contact.form.namePlace}
                            disabled={status === 'submitting'}
                            className="w-full px-5 py-4 bg-gray-50 dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/10 focus:border-gray-300 dark:focus:border-neutral-600 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 hover:bg-gray-50/80 dark:hover:bg-neutral-800/80 text-black dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">{t.contact.form.email}</label>
                          <input 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            type="email" 
                            placeholder={t.contact.form.emailPlace}
                            disabled={status === 'submitting'}
                            className="w-full px-5 py-4 bg-gray-50 dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/10 focus:border-gray-300 dark:focus:border-neutral-600 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 hover:bg-gray-50/80 dark:hover:bg-neutral-800/80 text-black dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">{t.contact.form.subject}</label>
                          <input 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            type="text" 
                            placeholder={t.contact.form.subjectPlace}
                            disabled={status === 'submitting'}
                            className="w-full px-5 py-4 bg-gray-50 dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/10 focus:border-gray-300 dark:focus:border-neutral-600 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 hover:bg-gray-50/80 dark:hover:bg-neutral-800/80 text-black dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">{t.contact.form.message}</label>
                          <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            placeholder={t.contact.form.messagePlace}
                            disabled={status === 'submitting'}
                            className="w-full px-5 py-4 bg-gray-50 dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/10 focus:border-gray-300 dark:focus:border-neutral-600 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none hover:bg-gray-50/80 dark:hover:bg-neutral-800/80 text-black dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                        </div>
                      </div>

                      <MotionButton
                        type="submit"
                        disabled={status === 'submitting'}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl shadow-lg shadow-black/20 dark:shadow-white/10 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mt-4 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed`}
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Envoi en cours...</span>
                          </>
                        ) : (
                          <>
                            <span>{t.contact.form.cta}</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </MotionButton>
                      
                      {status === 'error' && (
                         <p className="text-red-500 text-center text-sm mt-2">Une erreur est survenue. Réessayez.</p>
                      )}
                    </form>
                  )}
                </MotionDiv>
              )}
            </AnimatePresence>
          </MotionDiv>

        </div>
      </div>
    </Section>
  );
};

export default Contact;