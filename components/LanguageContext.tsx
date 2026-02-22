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
      clientArea: "Espace Client",
      start: "Commencer"
    },
    onboarding: {
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
    },
    hero: {
      badge: "Agence Web pour Artisans, Restos & PME",
      title1: "Votre site internet pro.",
      title2: "Sans vous ruiner.",
      description: "Attirez plus de clients locaux avec un site moderne. Spécialement conçu pour les artisans, commerçants et restaurateurs qui veulent se digitaliser sans se ruiner.",
      price: "105€/mois.",
      subDesc: "Tout inclus : Création, Hébergement, Maintenance.",
      cta1: "Lancer mon site 🚀",
      cta2: "Comment ça marche ?"
    },
    founder: {
      badge: "LA RÉALITÉ",
      text1: "Aujourd'hui, que vous soyez artisan ou commerçant, si vous n'êtes pas sur Google,",
      bold1: "vous n'existez pas.",
      text2: "Vos concurrents prennent vos clients car ils sont",
      bold2: "visibles.",
      text3: "Ne laissez pas passer le train du digital par peur de la",
      bold3: "technique",
      text4: " ou du coût.",
      role: "Votre Partenaire Digital"
    },
    mission: {
      badge: "NOTRE MISSION",
      title: "Votre argent doit travailler pour vous, pas être bloqué dans un site.",
      text1: "ON AGENCY est née d'un constat simple : des milliers d'excellents artisans et commerçants perdent des clients chaque jour parce qu'ils sont invisibles sur Google.",
      text2: "Notre mission : vous donner une présence digitale professionnelle, sans vider votre trésorerie. Vous avez déjà l'argent, 105€/mois, c'est déjà dans votre budget."
    },
    benefits: {
      badge: "POURQUOI NOUS ?",
      title: "Fini les maux de tête",
      subtitle: "Une solution pensée pour les artisans, commerçants et professions libérales.",
      card1: {
        title: "Gardez votre trésorerie",
        desc: "Pas de chèque de 3000€ à sortir. Un simple abonnement mensuel, comme votre forfait téléphone."
      },
      card2: {
        title: "On s'occupe de tout",
        desc: "Hébergement, sécurité, mises à jour... Vous ne touchez à rien. On gère la technique pour vous.",
        badge: "Zéro Stress"
      },
      card3: {
        title: "Clients garantis",
        desc: "Un site conçu pour une seule chose : faire sonner votre téléphone et remplir votre agenda.",
        badge: "Efficacité"
      }
    },
    scroll: {
      custom: "Site Web Clé en Main",
      code: "Design Moderne & Pro",
      hosting: "Hébergement Inclus",
      security: "Sécurité Totale",
      maintenance: "Maintenance Gérée",
      content: "Modifications Simples",
      support: "Support Réactif 7j/7",
      seo: "Optimisé pour Google"
    },
    features: {
      badge: "EXEMPLES",
      title: "Ils nous font confiance",
      subtitle: "Des pros comme vous qui ont boosté leur activité grâce à leur nouveau site.",
      headline: {
        main: "Votre vitrine digitale qui travaille",
        italic: "pour",
        end: "vous."
      },
      items: {
        item1: { title: "Cabinet Durand", category: "Avocat", desc: "Site vitrine rassurant pour un cabinet d'avocats local." },
        item2: { title: "La Belle Assiette", category: "Restaurant", desc: "Menu en ligne et réservation simplifiée." },
        item3: { title: "Renov'Habitat", category: "Artisan", desc: "Présentation des chantiers et demande de devis." },
        item4: { title: "Dr. Martin", category: "Santé", desc: "Cabinet dentaire avec prise de rendez-vous." },
        item5: { title: "Boutique Éclat", category: "Commerce", desc: "Vitrine digitale pour une boutique de décoration." }
      }
    },
    services: {
      header: {
        badge: "TOUT INCLUS",
        title: "Ce que nous faisons pour vous",
        subtitle: "pour 105€/mois",
        desc: "Une offre complète pour ne plus jamais vous soucier de votre site web."
      },
      cards: {
        strategy: {
          title: "Visibilité Locale",
          desc: "On vous place là où vos clients vous cherchent : sur Google et Google Maps. Soyez le premier choix dans votre ville."
        },
        content: {
          title: "Rédaction Incluse",
          desc: "Vous ne savez pas quoi écrire ? Pas de panique. On rédige des textes convaincants pour présenter votre activité.",
          uiInput: "Changer mes horaires...",
          uiGen: "Mettre à jour",
          uiSeo: "Optimiser",
          uiFix: "Corriger"
        },
        performance: {
          title: "Vitesse Éclair",
          desc: "Un site qui charge instantanément sur mobile. Vos clients n'attendent pas, votre site non plus.",
          cta: "Voir la vitesse"
        },
        analytics: {
          title: "Statistiques Simples",
          desc: "Recevez chaque mois un rapport simple : combien de visiteurs, combien d'appels, combien de contacts.",
          cta: "Voir un exemple"
        },
        support: {
          title: "Support Dédié",
          desc: "Une question ? Une modification ? Un simple message WhatsApp ou email et on s'en occupe.",
          cta: "Nous contacter"
        }
      }
    },
    pricing: {
      sectionBadge: "TARIF SIMPLE",
      monthly: "Mensuel",
      annual: "Annuel",
      badge: "SANS APPORT",
      offer: "Pack Tout Compris",
      perMonth: "/ mois",
      perYear: "/ an",
      subMonth: "Pas de frais cachés",
      subYear: "2 mois offerts",
      cta: "Je veux mon site",
      disclaimer: "Engagement 12 mois • Vous êtes libre ensuite.",
      features: [
        "Site Web Professionnel Complet",
        "Hébergement sécurisé inclus",
        "Maintenance technique gérée",
        "Mises à jour illimitées",
        "Optimisation Google (SEO)",
        "Support client réactif"
      ]
    },
    discovery: {
      text: "Pas encore sûr ? Prenez 15 min pour en discuter.",
      cta: "Réserver un appel découverte"
    },
    testimonials: {
      badge: "TÉMOIGNAGES",
      title: "La parole aux pros",
      subtitle: "Ce qu'ils pensent de leur nouveau site.",
      items: [
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
      ]
    },
    contact: {
      badge: "DÉMARRAGE RAPIDE",
      title: "Lancez votre projet maintenant",
      subtitle: "Remplissez le formulaire ci-dessous.",
      desc: "Entrez vos informations pour vérifier votre éligibilité et démarrer la création de votre site.",
      emailCard: {
        title: "Email",
        desc: "Une question ? Envoyez-nous un email, on répond vite.",
        cta: "Envoyer un email"
      },
      callCard: {
        title: "Appel Découverte",
        desc: "Prenez 15 min pour nous parler de votre activité. Gratuit et sans engagement.",
        cta: "Réserver un appel"
      },
      form: {
        name: "Nom complet",
        namePlace: "Jean Dupont",
        email: "Email",
        emailPlace: "jean@entreprise.com",
        subject: "Activité",
        subjectPlace: "Ex: Plombier, Restaurant...",
        message: "Message",
        messagePlace: "Dites-nous en plus sur votre projet...",
        cta: "Être rappelé"
      }
    },
    notFound: {
      title: "Page introuvable",
      desc: "Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
      cta: "Retour à l'accueil"
    },
    footer: {
      desc: "ON AGENCY : L'agence web qui aide les pros à se digitaliser simplement.",
      company: "Société",
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
        a4: "Aux artisans, commerçants, restaurateurs et PME locales qui veulent un site premium sans immobiliser une grosse somme au départ, et surtout qui veulent un site vivant : entretenu, sécurisé, et optimisé au fil des mois.",
        
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
        a15: "En créant un parcours clair : crédibilité immédiate, offre compréhensible, preuves (avis/cas) et appels à l'action efficaces. Un bon site n'est pas juste \"beau\", il rend la décision plus simple.",
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
      clientArea: "Client Area",
      start: "Start"
    },
    onboarding: {
      title: "Let's launch your project 🚀",
      subtitle: "Fill out this form to start creating your professional website.",
      successTitle: "Thank you!",
      successMsg: "We have received your information. Our team will contact you within 24h to finalize your project.",
      backHome: "Back to Home",
      sections: {
        identity: "Company Identity",
        activity: "Your Activity",
        visuals: "Your Visuals",
        extra: "Additional Information"
      },
      fields: {
        companyName: "Company Name",
        ownerName: "Owner Name",
        phone: "Phone Number",
        city: "City",
        website: "Current Website (optional)",
        sector: "Business Sector",
        description: "Activity Description",
        logo: "Logo (Transparent PNG recommended)",
        photos: "Company Photos",
        additionalInfo: "Additional Info (optional)",
        submit: "Launch my project ⚡"
      },
      placeholders: {
        company: "Ex: Bakery Durand",
        owner: "Ex: John Doe",
        phone: "Ex: +33 6 12 34 56 78",
        city: "Ex: Paris",
        website: "Ex: www.mysite.com",
        description: "Describe your activity, specialties, what makes you unique...",
        extra: "Opening hours, social media links, etc...",
        logo: "Click or drag your logo here",
        photos: "Click or drag your photos here",
        selectSector: "Select a sector"
      }
    },
    hero: {
      badge: "Web Agency for Local Business",
      title1: "Premium Websites",
      title2: "0€ Upfront",
      description: "Attract more local customers. Designed for artisans, shop owners, and restaurants who want to go digital without breaking the bank.",
      price: "105€/mo.",
      subDesc: "Hosting, maintenance, and security included.",
      cta1: "Get the model",
      cta2: "Discover services"
    },
    founder: {
      badge: "VISION",
      text1: "Today, whether you are an artisan or shop owner, if you are not on Google,",
      bold1: "you don't exist.",
      text2: "Your competitors are taking your customers because they are",
      bold2: "visible.",
      text3: "Don't miss the digital train for fear of",
      bold3: "tech",
      text4: " or cost.",
      role: "Vision & Strategy"
    },
    mission: {
      badge: "OUR MISSION",
      title: "Your money should work for you, not be stuck in a website.",
      text1: "ON AGENCY was born from a simple observation: thousands of excellent local artisans and merchants lose customers every day because they are invisible on Google.",
      text2: "Our mission: to give you a professional digital presence, without emptying your treasury. You already have the money, 105€/month is already in your budget."
    },
    benefits: {
      badge: "BENEFITS",
      title: "Why choose us?",
      subtitle: "Partner with a specialized agency offering intelligent and accessible solutions.",
      card1: {
        title: "Zero Upfront",
        desc: "Transform a 5,000€ investment into an accessible 105€/month subscription."
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
      badge: "0€ UPFRONT",
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
    discovery: {
      text: "Not sure yet? Take 15 min to discuss.",
      cta: "Book a discovery call"
    },
    contact: {
      badge: "QUICK START",
      title: "Start your project now",
      subtitle: "Fill out the form below.",
      desc: "Enter your details to verify eligibility and start your website creation.",
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
    notFound: {
      title: "Page not found",
      desc: "Sorry, the page you are looking for does not exist or has been moved.",
      cta: "Back to Home"
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
        a4: "For artisans, shop owners, restaurants, and local SMEs who want a premium site without tying up a large sum upfront, and especially those who want a living site: maintained, secured, and optimized over the months.",
        
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
        a12: "On reliable infrastructure adapted to your needs (performance, availability, security). The choice is made for stability, not to 'save' 3€ a month.",
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
  const [language, setLanguage] = useState<Language>(() => {
    // Detect browser language
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language || navigator.languages?.[0];
      if (browserLang && browserLang.startsWith('en')) {
        return 'en';
      }
    }
    return 'fr';
  });

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