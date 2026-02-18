import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.fr;
}

const translations = {
  fr: {
    nav: {
      features: "Réalisations",
      pricing: "Tarification",
      services: "Services",
      contact: "Contact",
      start: "Commencer"
    },
    hero: {
      badge: "Agence Web Premium",
      title1: "Sites Web Premium",
      title2: "Sans Frais Initiaux",
      description: "Activez votre présence digitale sans barrière financière.",
      price: "97$/mois.",
      subDesc: "Hébergement, maintenance et sécurité inclus.",
      cta1: "Obtenir le modèle",
      cta2: "Découvrez nos services"
    },
    founder: {
      badge: "VISION",
      text1: "Notre mission est de permettre à chaque entreprise d'avoir un",
      bold1: "site web professionnel",
      text2: "et optimisé sans que le",
      bold2: "coût initial",
      text3: "ne soit un frein. Nous croyons que l'investissement doit aller dans le",
      bold3: "cœur de métier",
      text4: ", pas dans les barrières techniques.",
      role: "Vision & Stratégie"
    },
    benefits: {
      badge: "AVANTAGES",
      title: "Pourquoi nous choisir ?",
      subtitle: "Collaborez avec une agence spécialisée qui propose des solutions intelligentes et accessibles.",
      card1: {
        title: "Sans Frais Initiaux",
        desc: "Transformez un investissement de 5000€ en un abonnement accessible de 97$/mois."
      },
      card2: {
        title: "Livraison Rapide",
        desc: "Votre site professionnel en ligne en quelques jours grâce à notre processus optimisé.",
        badge: "En ligne: 72h"
      },
      card3: {
        title: "Qualité Premium",
        desc: "Site sur-mesure en code pur, optimisé SEO et ultra-rapide.",
        badge: "Performance"
      }
    },
    scroll: {
      custom: "Site Web Premium Sur-Mesure",
      code: "Code Pur (React/Next.js) - Pas de WP",
      hosting: "Hébergement Haute Performance",
      security: "Certificat SSL & Sécurité",
      maintenance: "Maintenance Technique Incluse",
      content: "Modifications de Contenu Illimitées",
      support: "Support Client Prioritaire (48h)",
      seo: "Optimisation SEO Technique"
    },
    features: {
      badge: "RÉALISATIONS",
      title: "Nos Projets Récents",
      subtitle: "Découvrez comment nous transformons les idées en expériences digitales.",
      headline: {
        main: "Des sites web d'exception qui racontent",
        italic: "votre",
        end: "histoire."
      },
      items: {
        item1: { title: "Nexus Tech", category: "SaaS", desc: "Plateforme de gestion cloud avec dashboard temps réel." },
        item2: { title: "Lumina Art", category: "E-commerce", desc: "Galerie d'art numérique avec expérience immersive." },
        item3: { title: "Elevate Finance", category: "Fintech", desc: "Application bancaire nouvelle génération sécurisée." },
        item4: { title: "Pulse Energy", category: "Corporate", desc: "Site vitrine pour un leader de l'énergie verte." },
        item5: { title: "PropVision", category: "Real Estate", desc: "Visualisation immobilière 3D interactive." }
      }
    },
    services: {
      header: {
        badge: "SERVICES",
        title: "Nos services",
        subtitle: "pilotés par l'excellence",
        desc: "Tirez parti de notre stack technique moderne pour optimiser les performances de votre entreprise."
      },
      cards: {
        strategy: {
          title: "Stratégie & Architecture",
          desc: "Bénéficiez de conseils d'experts pour structurer votre présence digitale. Nous concevons l'architecture technique idéale pour votre croissance."
        },
        content: {
          title: "Contenu & Optimisation",
          desc: "Nous intégrons les meilleures pratiques SEO et rédactionnelles directement dans le code. Votre contenu est structuré pour performer sur Google dès le premier jour.",
          uiInput: "Demandez une modification...",
          uiGen: "Générer",
          uiSeo: "Optimiser pour le SEO",
          uiFix: "Corriger l'orthographe"
        },
        performance: {
          title: "Performance Pure",
          desc: "Score Lighthouse 100/100 garanti grâce à notre stack Next.js.",
          cta: "En savoir plus"
        },
        analytics: {
          title: "Analytics Privacy",
          desc: "Suivez vos visiteurs sans cookies, sans bannières RGPD intrusives.",
          cta: "Voir la démo"
        },
        support: {
          title: "Support Premium",
          desc: "Une équipe d'ingénieurs dédiée disponible pour vous 7j/7.",
          cta: "Contacter"
        }
      }
    },
    pricing: {
      sectionBadge: "TARIFICATION",
      monthly: "Mensuel",
      annual: "Annuel",
      badge: "Sans Frais Initiaux",
      offer: "Offre Unique",
      perMonth: "/ mois",
      perYear: "/ an",
      subMonth: "Aucun frais cachés",
      subYear: "Deux mois offerts",
      cta: "Commencer maintenant",
      disclaimer: "Engagement 12-16 mois • Propriété transférée ensuite.",
      features: [
        "Site Web Premium Sur-Mesure",
        "Code Pur (React/Next.js) - Pas de WP",
        "Hébergement Haute Performance",
        "Certificat SSL & Sécurité",
        "Maintenance Technique Incluse",
        "Modifications de Contenu Illimitées*",
        "Support Client Prioritaire (48h)",
        "Optimisation SEO Technique"
      ]
    },
    contact: {
      badge: "CONTACT",
      title: "Prêt à lancer ?",
      subtitle: "Parlons de votre projet.",
      desc: "Notre équipe est prête à concevoir votre nouvelle présence digitale.",
      emailCard: {
        title: "Email",
        desc: "Pour les demandes générales, les partenariats ou les questions sur nos offres.",
        cta: "Envoyer un email"
      },
      callCard: {
        title: "Appel Découverte",
        desc: "Réservez un créneau de 15 minutes pour discuter de vos besoins spécifiques.",
        cta: "Réserver un appel"
      },
      form: {
        name: "Nom complet",
        namePlace: "John Doe",
        email: "Email professionnel",
        emailPlace: "john@entreprise.com",
        subject: "Sujet",
        subjectPlace: "Je souhaite refaire mon site...",
        message: "Message",
        messagePlace: "Parlez-nous de vos objectifs...",
        cta: "Envoyer le message"
      }
    },
    footer: {
      desc: "ON AGENCY redéfinit l'agence web avec un modèle sans apport, transparent et performant.",
      company: "Entreprise",
      about: "À propos",
      services: "Services",
      careers: "Contact",
      rights: "Tous droits réservés."
    },
    faq: {
      header: {
        badge: "FAQ",
        title: "Des questions ?",
        subtitle: "Des réponses !",
        desc: "Trouvez rapidement des réponses aux questions les plus fréquentes."
      },
      categories: {
        general: "Général",
        pricing: "Prix & Modèle",
        tech: "Technique",
        business: "Business / ROI",
        objections: "Questions Fréquentes"
      },
      items: {
        q1: "Qu’est-ce que ON Agency ?",
        a1: "ON Agency est une agence digitale premium par abonnement. On conçoit votre site et on l’exploite dans le temps (maintenance, sécurité, évolutions, optimisation), pour que votre présence digitale reste performante.",
        q2: "Quelle est votre différence avec une agence “classique” ?",
        a2: "Une agence classique livre un projet, puis tout devient “à la demande”. Nous, on opère un actif digital sur la durée : vous avez un site premium + un partenaire qui l’améliore et le maintient en continu.",
        q3: "En quoi êtes-vous différents d’un site WordPress template rapide ?",
        a3: "Un template “vite fait” donne un résultat correct mais rarement stratégique. ON Agency construit un site pensé pour votre business : clarté, crédibilité, conversion, et évolutivité (sans bricolage permanent).",
        q4: "À qui s’adresse votre modèle ?",
        a4: "Aux entreprises qui veulent un site premium sans immobiliser une grosse somme au départ, et surtout qui veulent un site vivant : entretenu, sécurisé, et optimisé au fil des mois.",
        
        q5: "Pourquoi vous ne facturez pas de frais initiaux élevés ?",
        a5: "Parce qu’un site n’est pas juste un “projet”, c’est un système qui doit fonctionner dans le temps. L’abonnement aligne nos intérêts : vous démarrez sans barrière financière, et nous sommes responsables de la qualité sur la durée.",
        q6: "Est-ce que je paie plus cher sur le long terme ?",
        a6: "Ça dépend de votre horizon. Si vous payez une agence classique, vous payez souvent : création + maintenance + corrections + évolutions + urgences. Chez ON Agency, tout est intégré et prévu. L’objectif n’est pas de “faire moins cher”, mais de rendre le premium accessible et stable.",
        q7: "Que comprend exactement l’abonnement ?",
        a7: "Un site premium + hébergement + sécurité + maintenance + mises à jour + support + améliorations continues selon votre formule (ex : pages, contenus, optimisation, évolutions).",
        q8: "Puis-je arrêter l’abonnement ?",
        a8: "Oui. Les conditions dépendent de la formule (durée d’engagement, préavis). L’idée est simple : vous gardez la liberté, et nous gardons un cadre clair pour travailler proprement.",
        q9: "Y a-t-il des frais cachés ?",
        a9: "Non. Tout ce qui est inclus est écrit noir sur blanc. Si vous demandez quelque chose hors périmètre (ex : grosse refonte, shooting photo, production vidéo), on vous fait une proposition claire avant d’agir.",

        q10: "Est-ce que le site est sur mesure ?",
        a10: "Oui : sur mesure dans la stratégie, le design, la structure et les contenus. On ne “colle” pas un thème. On construit une expérience cohérente avec votre marque et vos objectifs.",
        q11: "Qui possède le site ?",
        a11: "Vous possédez vos contenus et votre marque (textes fournis, logos, médias, données). Pour la partie technique et l’architecture opérée en abonnement, tout est clarifié au contrat : l’objectif est que vous soyez protégé et que l’exploitation reste stable.",
        q12: "Où est hébergé le site ?",
        a12: "Sur une infrastructure fiable et adaptée à votre besoin (performance, disponibilité, sécurité). Le choix est fait pour la stabilité, pas pour “gratter” 3€ par mois.",
        q13: "Le site est-il sécurisé ?",
        a13: "Oui, la sécurité fait partie du modèle : mises à jour, surveillance, bonnes pratiques, sauvegardes et prévention des incidents selon votre plan.",
        q14: "Et si je veux faire évoluer le site ?",
        a14: "C’est prévu. Un site doit évoluer : nouvelles offres, nouvelles pages, amélioration des performances. Votre abonnement sert justement à ça : éviter que le site devienne obsolète.",

        q15: "Comment votre site va m’aider à générer plus de clients ?",
        a15: "By creating a clear path: immediate credibility, understandable offer, proof (reviews/cases), and effective calls to action. A good site isn't just 'beautiful', it makes the decision simpler.",
        q16: "Optimisez-vous le site dans le temps ?",
        a16: "Oui. On suit ce qui doit s’améliorer (structure, clarté, vitesse, pages clés, conversion). On ne vend pas un site “parfait” le jour 1 : on construit un actif qui progresse.",
        q17: "En combien de temps puis-je voir des résultats ?",
        a17: "Ça dépend de votre marché et de votre acquisition (pub, réseaux, SEO, partenariat). Ce que nous garantissons : un site solide, crédible et évolutif, qui ne freine pas vos efforts marketing—et qu’on améliore au fil du temps.",

        q18: "Pourquoi ne pas passer par un freelance ?",
        a18: "Un freelance peut être excellent. Le vrai sujet, c’est la continuité : disponibilité, process, maintenance, sécurité, évolution. ON Agency est conçu comme un opérateur long terme fiable et structuré.",
        q19: "Puis-je modifier le contenu moi-même ?",
        a19: "Oui, les contenus textes et images sont modifiables. Pour la structure profonde, nous nous en occupons pour garantir que les performances ne se dégradent pas.",
        q20: "Quels sont les délais de mise en ligne ?",
        a20: "Une fois les éléments reçus, nous visons une mise en ligne d'une première version en 72h, suivie d'itérations rapides pour la validation finale."
      }
    }
  },
  en: {
    nav: {
      features: "Projects",
      pricing: "Pricing",
      services: "Services",
      contact: "Contact",
      start: "Start"
    },
    hero: {
      badge: "Premium Web Agency",
      title1: "Premium Websites",
      title2: "$0 Upfront",
      description: "Activate your digital presence without financial barriers.",
      price: "$97/mo.",
      subDesc: "Hosting, maintenance, and security included.",
      cta1: "Get the model",
      cta2: "Discover services"
    },
    founder: {
      badge: "VISION",
      text1: "Our mission is to enable every company to have a",
      bold1: "professional website",
      text2: "that is optimized without the",
      bold2: "initial cost",
      text3: "being a barrier. We believe investment should go into your",
      bold3: "core business",
      text4: ", not technical hurdles.",
      role: "Vision & Strategy"
    },
    benefits: {
      badge: "BENEFITS",
      title: "Why choose us?",
      subtitle: "Partner with a specialized agency offering intelligent and accessible solutions.",
      card1: {
        title: "Zero Upfront",
        desc: "Transform a $5,000 investment into an accessible $97/month subscription."
      },
      card2: {
        title: "Fast Delivery",
        desc: "Your professional site online in days thanks to our optimized process.",
        badge: "Online: 72h"
      },
      card3: {
        title: "Premium Quality",
        desc: "Tailor-made pure code site, SEO optimized and ultra-fast.",
        badge: "Performance"
      }
    },
    scroll: {
      custom: "Tailor-Made Premium Website",
      code: "Pure Code (React/Next.js) - No WP",
      hosting: "High Performance Hosting",
      security: "SSL Certificate & Security",
      maintenance: "Technical Maintenance Included",
      content: "Unlimited Content Edits",
      support: "Priority Customer Support (48h)",
      seo: "Technical SEO Optimization"
    },
    features: {
      badge: "WORK",
      title: "Recent Projects",
      subtitle: "Discover how we turn ideas into digital experiences.",
      headline: {
        main: "Exceptional websites that tell",
        italic: "your",
        end: "story."
      },
      items: {
        item1: { title: "Nexus Tech", category: "SaaS", desc: "Cloud management platform with real-time dashboard." },
        item2: { title: "Lumina Art", category: "E-commerce", desc: "Digital art gallery with immersive experience." },
        item3: { title: "Elevate Finance", category: "Fintech", desc: "Next-gen secure banking application." },
        item4: { title: "Pulse Energy", category: "Corporate", desc: "Corporate site for a green energy leader." },
        item5: { title: "PropVision", category: "Real Estate", desc: "Interactive 3D real estate visualization." }
      }
    },
    services: {
      header: {
        badge: "SERVICES",
        title: "Our services",
        subtitle: "driven by excellence",
        desc: "Leverage our modern tech stack to optimize your business performance."
      },
      cards: {
        strategy: {
          title: "Strategy & Architecture",
          desc: "Get expert advice to structure your digital presence. We design the ideal technical architecture for your growth."
        },
        content: {
          title: "Content & Optimization",
          desc: "We integrate SEO and editorial best practices directly into the code. Your content is structured to perform on Google from day one.",
          uiInput: "Request a change...",
          uiGen: "Generate",
          uiSeo: "Optimize for SEO",
          uiFix: "Fix spelling"
        },
        performance: {
          title: "Pure Performance",
          desc: "Lighthouse Score 100/100 guaranteed thanks to our Next.js stack.",
          cta: "Learn more"
        },
        analytics: {
          title: "Privacy Analytics",
          desc: "Track visitors without cookies, without intrusive GDPR banners.",
          cta: "See demo"
        },
        support: {
          title: "Support Premium",
          desc: "A dedicated team of engineers available for you 7/7.",
          cta: "Contact"
        }
      },
    },
    pricing: {
      sectionBadge: "PRICING",
      monthly: "Monthly",
      annual: "Annual",
      badge: "0$ UPFRONT",
      offer: "Unique Offer",
      perMonth: "/ month",
      perYear: "/ year",
      subMonth: "No hidden fees",
      subYear: "Two months free",
      cta: "Start now",
      disclaimer: "12-16 month commitment • Ownership transferred thereafter.",
      features: [
        "Tailor-Made Premium Website",
        "Pure Code (React/Next.js) - No WP",
        "High Performance Hosting",
        "SSL Certificate & Security",
        "Technical Maintenance Included",
        "Unlimited Content Edits*",
        "Priority Customer Support (48h)",
        "Technical SEO Optimization"
      ]
    },
    contact: {
      badge: "CONTACT",
      title: "Ready to launch?",
      subtitle: "Let's talk about your project.",
      desc: "Our team is ready to design your new digital presence.",
      emailCard: {
        title: "Email",
        desc: "For general inquiries, partnerships, or questions about our offers.",
        cta: "Send an email"
      },
      callCard: {
        title: "Discovery Call",
        desc: "Book a 15-minute slot to discuss your specific needs.",
        cta: "Book a call"
      },
      form: {
        name: "Full Name",
        namePlace: "John Doe",
        email: "Work Email",
        emailPlace: "john@company.com",
        subject: "Subject",
        subjectPlace: "I want to rebuild my site...",
        message: "Message",
        messagePlace: "Tell us about your goals...",
        cta: "Send Message"
      }
    },
    footer: {
      desc: "ON AGENCY redéfinit the web agency with an upfront-free, transparent, and high-performance model.",
      company: "Company",
      about: "About",
      services: "Services",
      careers: "Contact",
      rights: "All rights reserved."
    },
    faq: {
      header: {
        badge: "FAQ",
        title: "Questions?",
        subtitle: "Answers!",
        desc: "Quickly find answers to the most frequently asked questions."
      },
      categories: {
        general: "General",
        pricing: "Pricing & Model",
        tech: "Technical",
        business: "Business / ROI",
        objections: "Common Questions"
      },
      items: {
        q1: "What is ON Agency?",
        a1: "ON Agency is a premium subscription-based digital agency. We design your site and operate it over time (maintenance, security, updates, optimization) to keep your digital presence performing.",
        q2: "How are you different from a 'classic' agency?",
        a2: "A classic agency delivers a project, then everything becomes 'on demand'. We operate a digital asset over time: you get a premium site + a partner who improves and maintains it continuously.",
        q3: "How are you different from a quick WordPress template?",
        a3: "A 'quick' template gives a decent result but is rarely strategic. ON Agency builds a site designed for your business: clarity, credibility, conversion, and scalability (without constant patching).",
        q4: "Who is your model for?",
        a4: "For companies that want a premium site without tying up a large sum upfront, and especially those who want a living site: maintained, secured, and optimized over the months.",
        
        q5: "Why don't you charge a high upfront fee?",
        a5: "Because a site isn't just a 'project', it's a system that must work over time. The subscription aligns our interests: you start without financial barriers, and we are responsible for quality over the long term.",
        q6: "Do I pay more in the long run?",
        a6: "It depends on your horizon. If you pay a classic agency, you often pay: creation + maintenance + fixes + evolutions + emergencies. At ON Agency, everything is integrated and planned. The goal isn't to be 'cheaper', but to make premium accessible and stable.",
        q7: "What exactly does the subscription include?",
        a7: "A premium site + hosting + security + maintenance + updates + support + continuous improvements depending on your plan (e.g., pages, content, optimization, evolutions).",
        q8: "Can I stop the subscription?",
        a8: "Yes. Conditions depend on the plan (commitment duration, notice period). The idea is simple: you keep freedom, and we keep a clear framework to work properly.",
        q9: "Are there hidden fees?",
        a9: "No. Everything included is written in black and white. If you ask for something outside the scope (e.g., major redesign, photo shoot, video production), we make a clear proposal before acting.",

        q10: "Is the site custom-made?",
        a10: "Yes: custom strategy, design, structure, and content. We don't 'paste' a theme. We build an experience consistent with your brand and goals.",
        q11: "Who owns the site?",
        a11: "You own your content and brand (provided texts, logos, media, data). For the technical part and architecture operated under subscription, everything is clarified in the contract: the goal is for you to be protected and for operations to remain stable.",
        q12: "Where is the site hosted?",
        a12: "On reliable infrastructure adapted to your needs (performance, availability, security). The choice is made for stability, not to 'save' $3 a month.",
        q13: "Is the site secure?",
        a13: "Yes, security is part of the model: updates, monitoring, best practices, backups, and incident prevention according to your plan.",
        q14: "What if I want to evolve the site?",
        a14: "It's planned. A site must evolve: new offers, new pages, performance improvements. Your subscription serves exactly that: preventing the site from becoming obsolete.",

        q15: "How will your site help me generate more clients?",
        a15: "By creating a clear path: immediate credibility, understandable offer, proof (reviews/cases), and effective calls to action. A good site isn't just 'beautiful', it makes the decision simpler.",
        q16: "Do you optimize the site over time?",
        a16: "Yes. We track what needs improvement (structure, clarity, speed, key pages, conversion). We don't sell a 'perfect' site on day 1: we build an asset that progresses.",
        q17: "How soon can I see results?",
        a17: "It depends on your market and acquisition (ads, social, SEO, partnerships). What we guarantee: a solid, credible, and scalable site that doesn't hinder your marketing efforts—and that we improve over time.",

        q18: "Why not hire a freelancer?",
        a18: "A freelancer can be excellent. The real issue is continuity: availability, process, maintenance, security, evolution. ON Agency is designed as a reliable and structured long-term operator.",
        q19: "Can I edit content myself?",
        a19: "Yes, text and image content are editable. For deep structure, we handle it to ensure performance doesn't degrade.",
        q20: "What are the launch timelines?",
        a20: "Once elements are received, we aim for a first version launch in 72h, followed by rapid iterations for final validation."
      }
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const value = {
    language,
    toggleLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};