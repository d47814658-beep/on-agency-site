import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageContext';
import { Section } from '../components/ui/Section';
import { ArrowLeft, Upload, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Onboarding: React.FC = () => {
  const { t } = useLanguage();
  // Safe access to onboarding translations with fallback
  const onboarding = (t as any).onboarding || {
    title: "Lançons votre projet 🚀",
    subtitle: "Remplissez ce formulaire pour démarrer la création de votre site web professionnel.",
    successTitle: "Merci !",
    successMsg: "Nous avons bien reçu vos informations. Notre équipe vous contactera sous 24h pour finaliser votre projet.",
    backHome: "Retour à l'accueil",
    sections: {
      identity: "Identité de l'entreprise",
      activity: "Votre Activité",
      visuals: "Vos Visuels",
      extra: "Informations Complémentaires"
    },
    fields: {
      companyName: "Nom de l'entreprise",
      ownerName: "Nom du propriétaire",
      phone: "Numéro de téléphone",
      city: "Ville",
      website: "Site web actuel (optionnel)",
      sector: "Secteur d'activité",
      description: "Description de l'activité",
      logo: "Logo (PNG transparent recommandé)",
      photos: "Photos de l'entreprise",
      additionalInfo: "Infos supplémentaires (optionnel)",
      submit: "Lancer mon projet ⚡"
    },
    placeholders: {
      company: "Ex: Boulangerie Durand",
      owner: "Ex: Jean Durand",
      phone: "Ex: 06 12 34 56 78",
      city: "Ex: Lyon",
      website: "Ex: www.monsite.com",
      description: "Décrivez votre activité, vos spécialités, ce qui vous rend unique...",
      extra: "Horaires d'ouverture, liens réseaux sociaux, etc...",
      logo: "Cliquez ou glissez votre logo ici",
      photos: "Cliquez ou glissez vos photos ici",
      selectSector: "Sélectionnez un secteur"
    }
  };

  const [formData, setFormData] = useState({
    companyName: '',
    ownerName: '',
    phone: '',
    city: '',
    website: '',
    sector: '',
    description: '',
    additionalInfo: '',
    logo: null as File | null,
    photos: [] as File[]
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'photos') => {
    if (e.target.files) {
      if (type === 'logo') {
        setFormData(prev => ({ ...prev, logo: e.target.files![0] }));
      } else {
        setFormData(prev => ({ ...prev, photos: Array.from(e.target.files!) }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-neutral-800 text-center max-w-md w-full"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{onboarding.successTitle}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {onboarding.successMsg}
          </p>
          <Link to="/" className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
            {onboarding.backHome}
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {onboarding.backHome}
          </Link>
          <div className="font-bold text-lg tracking-tight">ON AGENCY <span className="text-xs font-normal text-gray-500 ml-2">Onboarding</span></div>
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{onboarding.title}</h1>
            <p className="text-gray-600 dark:text-gray-400">{onboarding.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white dark:bg-neutral-900 p-6 md:p-10 rounded-3xl shadow-sm border border-gray-200 dark:border-neutral-800 space-y-8">
            
            {/* Section 1: Identité */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold border-b border-gray-100 dark:border-neutral-800 pb-2">{onboarding.sections.identity}</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{onboarding.fields.companyName} *</label>
                  <input 
                    type="text" 
                    name="companyName" 
                    required 
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all"
                    placeholder={onboarding.placeholders.company}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{onboarding.fields.ownerName} *</label>
                  <input 
                    type="text" 
                    name="ownerName" 
                    required 
                    value={formData.ownerName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all"
                    placeholder={onboarding.placeholders.owner}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{onboarding.fields.phone} *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all"
                    placeholder={onboarding.placeholders.phone}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{onboarding.fields.city} *</label>
                  <input 
                    type="text" 
                    name="city" 
                    required 
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all"
                    placeholder={onboarding.placeholders.city}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{onboarding.fields.website}</label>
                <input 
                  type="url" 
                  name="website" 
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all"
                  placeholder={onboarding.placeholders.website}
                />
              </div>
            </div>

            {/* Section 2: Activité */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold border-b border-gray-100 dark:border-neutral-800 pb-2">{onboarding.sections.activity}</h3>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{onboarding.fields.sector} *</label>
                <select 
                  name="sector" 
                  required 
                  value={formData.sector}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all appearance-none"
                >
                  <option value="">{onboarding.placeholders.selectSector}</option>
                  <option value="restaurant">Restaurant / Café</option>
                  <option value="artisan">Artisan (Plombier, Électricien...)</option>
                  <option value="coiffeur">Coiffeur / Beauté</option>
                  <option value="commerce">Commerce de détail</option>
                  <option value="sante">Santé / Bien-être</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{onboarding.fields.description} *</label>
                <textarea 
                  name="description" 
                  required 
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all resize-none"
                  placeholder={onboarding.placeholders.description}
                />
              </div>
            </div>

            {/* Section 3: Visuels */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold border-b border-gray-100 dark:border-neutral-800 pb-2">{onboarding.sections.visuals}</h3>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{onboarding.fields.logo} *</label>
                <div className="border-2 border-dashed border-gray-300 dark:border-neutral-700 rounded-xl p-6 text-center hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer relative">
                  <input 
                    type="file" 
                    accept="image/png, image/jpeg" 
                    required 
                    onChange={(e) => handleFileChange(e, 'logo')}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center gap-2 pointer-events-none">
                    <Upload className="w-8 h-8 text-gray-400" />
                    <span className="text-sm text-gray-500">{formData.logo ? formData.logo.name : onboarding.placeholders.logo}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{onboarding.fields.photos} (Multiple)</label>
                <div className="border-2 border-dashed border-gray-300 dark:border-neutral-700 rounded-xl p-6 text-center hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer relative">
                  <input 
                    type="file" 
                    accept="image/*" 
                    multiple 
                    onChange={(e) => handleFileChange(e, 'photos')}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center gap-2 pointer-events-none">
                    <Upload className="w-8 h-8 text-gray-400" />
                    <span className="text-sm text-gray-500">{formData.photos.length > 0 ? `${formData.photos.length} fichiers sélectionnés` : onboarding.placeholders.photos}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Extra */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold border-b border-gray-100 dark:border-neutral-800 pb-2">{onboarding.sections.extra}</h3>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{onboarding.fields.additionalInfo}</label>
                <textarea 
                  name="additionalInfo" 
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all resize-none"
                  placeholder={onboarding.placeholders.extra}
                />
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-lg hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors shadow-lg shadow-black/20 dark:shadow-white/10 active:scale-[0.99]"
              >
                {onboarding.fields.submit}
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Onboarding;
