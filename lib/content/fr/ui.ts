import type { Ui } from "../en/ui";

/**
 * Interface text in French. Written for a North American audience (Open Graph locale fr_CA):
 * "vous" throughout, "courriel", and no space before question and exclamation marks.
 */
export const ui: Ui = {
  site: {
    description:
      "{name} conçoit et développe des sites web, des applications web, des solutions d'IA et de l'automatisation des processus pour les startups, les entreprises en croissance et les organisations établies.",
    hours: "Du lundi au vendredi, de 9 h à 18 h (heure du Centre)",
    shareImageAlt: "{name} : sites web, applications web, solutions d'IA, automatisation et optimisation",
    audienceType: "Startups, petites et moyennes entreprises, grandes entreprises et organisations",
    country: "États-Unis",
  },

  skipToContent: "Passer au contenu",
  contactUs: "Contactez-nous",
  breadcrumbHome: "Accueil",
  logoLabel: "{name}, page d'accueil",

  header: {
    mainNav: "Principale",
    mobileNav: "Mobile",
    home: "Accueil",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    darkTheme: "Thème sombre",
    language: "Langue",
  },

  nav: {
    services: "Services",
    technology: "Technologie",
    work: "Réalisations",
    about: "À propos",
    contact: "Contact",
  },

  footer: {
    tagline: "Sites web, applications web, IA et automatisation pour les entreprises de toutes les tailles.",
    services: "Services",
    company: "Entreprise",
    contact: "Contact",
    websiteCheck: "Analyse de site gratuite",
    rights: "Tous droits réservés.",
    privacy: "Politique de confidentialité",
  },

  closingCta: {
    title: "Parlez-nous de votre projet.",
    lead: "Donnez-nous quelques détails et nous vous répondrons en un jour ouvrable pour planifier une consultation gratuite. Sans engagement, et si nous ne sommes pas le bon choix, nous vous le dirons et vous orienterons vers une meilleure option.",
    orEmail: "Ou écrivez à",
  },

  showcase: {
    websites: "Sites web",
    webApps: "Applications web",
    ai: "Solutions d'IA",
    automation: "Automatisation",
    optimization: "Optimisation",
    automationAlt:
      "Flux de travail de Harbor Line, de la livraison à la facture, composé d'étapes reliées, avec l'historique des exécutions et les taux d'automatisation",
    automationType: "Automatisation",
    automationLink: "Suivez le flux de travail",
  },

  projectFeature: {
    services: "Services : ",
    technologies: "Technologies : ",
  },

  home: {
    metaTitle: "{name} | Développement web, applications et intelligence artificielle",
    metaDescription:
      "Développement de sites web, applications web sur mesure, intégration de l'IA et automatisation des processus pour les startups, les PME et les organisations établies.",
    hero: {
      lead: "Nous créons",
      block1: "le logiciel",
      block2: "qui propulse",
      tail: "votre\u00a0entreprise.",
      intro:
        "{name} conçoit et développe des sites web, des applications web, des solutions d'IA et de l'automatisation des processus pour les startups, les entreprises en croissance et les organisations établies.",
      explore: "Découvrez nos services",
      commitments: "Nos engagements",
      whatWeBuild: "Ce que nous créons",
    },
    whoWeHelp: {
      eyebrow: "Avec qui nous travaillons",
      title: "Des commerces locaux aux grandes organisations.",
      lead: "Que vous ayez besoin de votre premier site web professionnel ou d'un système d'IA pour des milliers d'utilisateurs, vous profitez de la même équipe chevronnée et des mêmes normes.",
    },
    whatWeDo: {
      eyebrow: "Ce que nous faisons",
      title: "Une seule équipe pour votre site web, vos logiciels et votre IA.",
      lead: "La plupart de nos clients viennent pour un besoin et restent pour plusieurs. Le design, l'ingénierie, l'IA et la performance relèvent de la même équipe : rien ne se perd entre les fournisseurs.",
    },
    webDevelopment: {
      eyebrow: "Développement web",
      title: "Des sites web qui expliquent clairement, inspirent confiance et se chargent vite.",
      lead: "Nous planifions le contenu avant le design, concevons chaque taille d'écran de façon réfléchie et développons avec des frameworks modernes que votre équipe peut entretenir. Résultat : un site qui inspire rapidement confiance et qui est facile à tenir à jour.",
      points: [
        "Stratégie de contenu et structure du site",
        "Design sur mesure, créé de zéro",
        "Un CMS configuré pour vos rédacteurs",
        "Accessibilité et SEO intégrés dès le départ",
      ],
      link: "Services de développement web",
    },
    webApplications: {
      eyebrow: "Applications web",
      title: "Des logiciels sur mesure pour le travail que les outils standards ne couvrent pas.",
      lead: "Nous concevons et développons des applications à partir du modèle de données, livrons une première version ciblée en quelques semaines et continuons de l'améliorer avec votre équipe.",
      link: "Développement d'applications web",
      types: [
        {
          title: "Portails clients",
          detail: "Comptes libre-service, commandes, documents et facturation pour vos clients.",
        },
        {
          title: "Outils internes",
          detail: "Pour remplacer les tableurs et les fils de courriels dont dépendent vos opérations.",
        },
        {
          title: "Tableaux de bord et rapports",
          detail: "Une vue fiable de données aujourd'hui réparties dans plusieurs systèmes.",
        },
        {
          title: "Plateformes et produits SaaS",
          detail: "Des produits multiclients avec facturation, rôles et l'infrastructure nécessaire pour grandir.",
        },
      ],
    },
    aiAutomation: {
      eyebrow: "IA et automatisation",
      title: "De l'automatisation et de l'IA qui font vraiment gagner du temps à votre équipe.",
      lead: "Nous partons de la tâche, pas de la technologie. Si un processus est prévisible, nous l'automatisons. S'il exige du jugement sur de grands volumes de texte, l'IA peut aider. Souvent, la réponse combine les deux.",
      inPractice: "Concrètement",
      ai: {
        title: "Solutions d'IA",
        linkLabel: "Services de développement d'IA",
        description:
          "Des modèles de langage appliqués à des problèmes précis et mesurables, avec des réponses vérifiables et des données qui restent sous votre contrôle.",
        examples: [
          "Un assistant qui répond aux questions du personnel à partir des documents internes, en citant chaque source",
          "L'extraction des lignes des factures fournisseurs vers votre système comptable",
          "La rédaction de premières réponses aux demandes de soutien courantes, à faire valider",
        ],
      },
      automation: {
        title: "Automatisation",
        linkLabel: "Services d'automatisation des processus",
        description:
          "Des intégrations et des flux de travail qui font circuler les données entre vos systèmes, pour que personne n'ait à les recopier à la main.",
        examples: [
          "De nouvelles occasions dans le CRM qui créent automatiquement projets, dossiers et factures",
          "Des rapports d'opérations hebdomadaires préparés et envoyés sans que personne ne touche à un tableur",
          "Des demandes d'approbation acheminées, relancées et consignées d'une équipe à l'autre",
        ],
      },
    },
    optimization: {
      eyebrow: "Optimisation web et performance",
      title: "Des pages plus rapides, mesurées avec les données de vrais visiteurs.",
      lead: "Nous trouvons ce qui ralentit vraiment votre site, le corrigeons dans votre code et mettons en place une surveillance pour qu'il reste rapide longtemps après la fin du projet.",
      testCta: "Analysez votre site gratuitement",
      serviceLink: "Optimisation de la performance web",
      metricHeader: "Indicateur (mobile, 75e centile)",
      before: "Avant",
      after: "Après",
      metrics: [
        { name: "Largest Contentful Paint", before: "3,8 s", after: "1,6 s" },
        { name: "Interaction to Next Paint", before: "410 ms", after: "140 ms" },
        { name: "Cumulative Layout Shift", before: "0,21", after: "0,02" },
        { name: "JavaScript transféré", before: "1,2 Mo", after: "480 Ko" },
      ],
      caption: "Pages de produits de Fieldstone Outdoor, avant et après un programme de performance de huit semaines.",
      captionLink: "Lisez l'analyse complète",
    },
    seo: {
      eyebrow: "SEO et croissance numérique",
      title: "La visibilité dans les moteurs de recherche commence par la façon dont votre site est construit.",
      body: "Nous prenons en charge les fondations techniques du référencement, dont la structure du site, l'indexation, les métadonnées et la vitesse, et donnons à votre équipe des pistes claires sur le contenu qui attire des visiteurs qualifiés. Aucun stratagème de liens, aucune garantie de classement.",
      points: [
        "Audits de SEO technique",
        "Architecture du site et liens internes",
        "Données structurées et métadonnées",
        "Indexation et budget d'exploration",
        "Planification des migrations et des redirections",
        "Rapports Search Console",
      ],
      link: "Services de SEO technique",
    },
    techStack: {
      eyebrow: "Technologie",
      title: "Les technologies que nous utilisons, expliquées simplement.",
      lead: "Vous n'avez pas besoin de connaître ces noms. Nous choisissons des outils éprouvés et bien soutenus pour que votre projet soit rapide, sécuritaire et facile à entretenir, et que tout bon développeur puisse y travailler plus tard. Pour les équipes techniques, voici ce que nous utilisons le plus.",
      cta: "Toutes nos technologies",
    },
    approach: {
      eyebrow: "Notre approche",
      title: "Un processus clair, mené par ceux qui font le travail.",
      lead: "Vous travaillez directement avec les designers et les ingénieurs de votre projet. Pas de chargés de compte qui relaient les messages, ni de passation à du personnel junior après la présentation.",
      step: "Étape {number}",
    },
    selectedWork: {
      eyebrow: "Réalisations choisies",
      title: "Des projets récents et ce qu'ils ont changé.",
      lead: "Quelques exemples des sites, applications et systèmes que nous avons créés, et des résultats que nos clients ont mesurés par la suite.",
      allWork: "Toutes les réalisations",
    },
    whyUs: {
      eyebrow: "Pourquoi travailler avec nous",
      title:
        "Nous ne créons pas de technologie simplement parce que nous le pouvons. Nous la créons parce qu'elle règle un problème.",
    },
    waysToWork: {
      eyebrow: "Comment travailler avec nous",
      title: "La plupart de nos clients commencent par une conversation gratuite.",
      lead: "Aucune pression, aucun long contrat à signer avant de nous connaître. Choisissez le niveau d'implication qui convient à votre projet.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions fréquentes",
      lead: "Les questions que les propriétaires d'entreprise nous posent le plus souvent. Pour le reste, posez-les-nous lors d'un appel.",
    },
  },

  about: {
    metaTitle: "À propos",
    metaDescription:
      "{name} est une entreprise de conception et d'ingénierie logicielle à {location}. Découvrez notre approche de la technologie, du design, du développement et de la performance.",
    eyebrow: "À propos",
    title:
      "Nous ne créons pas de technologie simplement parce que nous le pouvons. Nous la créons parce qu'elle règle un problème.",
    lead: "{name} est une entreprise de conception et d'ingénierie logicielle établie à {location}. Nous travaillons avec des startups, des entreprises en croissance et des organisations établies sur les sites web, les applications et les systèmes dont elles dépendent chaque jour.",
    howWeWork: "Notre façon de travailler avec nos clients",
  },

  servicesPage: {
    metaTitle: "Services de développement web, logiciel et IA",
    metaDescription:
      "Développement de sites web, applications web sur mesure, solutions d'IA, automatisation des processus, optimisation de la performance et SEO technique pour les entreprises de toutes les tailles.",
    eyebrow: "Services",
    title: "Sites web, logiciels et IA, conçus et développés par une seule équipe.",
    lead: "Nous intervenons tout au long de la vie d'un produit numérique, de la première conversation sur ce qu'il faut construire jusqu'à le garder rapide, sécuritaire et utile des années plus tard.",
    ctaTitle: "Vous ne savez pas de quel service vous avez besoin?",
    ctaLead:
      "La plupart des projets en combinent plusieurs. Décrivez-nous le problème et nous vous dirons par où commencer.",
  },

  servicePage: {
    websiteCheck: "Analyse de site gratuite",
    seeWork: "Voir nos réalisations",
    inPlainTerms: "En termes simples",
    technologyWeUse: "Technologies utilisées",
    technologiesLabel: "Technologies – {service}",
    included: "Ce qui est inclus",
    approach: "Notre approche",
    engagement: "Mandat type",
    relatedWork: "Réalisation connexe",
    questions: "Questions fréquentes",
    otherServices: "Autres services",
  },

  technologyPage: {
    metaTitle: "Nos technologies : développement web et IA",
    metaDescription:
      "Les technologies web et d'IA avec lesquelles nous travaillons, de HTML, CSS, JavaScript, React et Node.js à OpenAI, Claude, Gemini, aux agents d'IA et à la recherche vectorielle.",
    eyebrow: "Technologie",
    title: "Les outils derrière tout ce que nous créons.",
    lead: "Chaque nom sur cette page désigne une technologie éprouvée et largement utilisée. Vous n'avez pas besoin de les comprendre pour travailler avec nous. Chaque groupe commence par une explication d'une ligne en termes simples, suivie des outils précis pour les équipes techniques.",
    web: {
      eyebrow: "Web et logiciel",
      title: "Du HTML et du CSS jusqu'à l'infrastructure infonuagique.",
      lead: "Des sites web, des applications web et des applications mobiles construits selon les normes modernes, avec les mêmes outils que les meilleures équipes logicielles du monde.",
    },
    ai: {
      eyebrow: "Intelligence artificielle",
      title: "La génération actuelle d'IA, appliquée au vrai travail.",
      lead: "Nous travaillons avec les principaux modèles d'IA et les outils qui les entourent : des agents qui agissent, des assistants qui répondent à partir de vos documents et les tests qui prouvent leur exactitude. Nous choisissons les modèles pour leur précision, leur coût et la confidentialité qu'ils offrent, pas pour l'effet de mode.",
    },
    unsureTitle: "Vous ne savez pas lesquels il vous faut?",
    unsureBody:
      "C'est notre travail. Dites-nous ce que vous voulez accomplir et nous vous recommanderons la configuration la plus simple qui le fait bien. Souvent, cela signifie moins d'outils, pas plus.",
  },

  workPage: {
    metaTitle: "Études de cas : sites web, applications et projets d'IA",
    metaDescription:
      "Études de cas en développement web, applications web sur mesure, solutions d'IA et optimisation de la performance, avec les résultats mesurés par chaque client.",
    eyebrow: "Réalisations",
    title: "Des projets mesurés à ce qu'ils ont changé.",
    lead: "Chaque étude de cas présente le problème qu'on nous a demandé de régler, notre approche et les résultats mesurés par le client par la suite.",
  },

  caseStudy: {
    metaTitle: "Étude de cas {client} : {type}",
    breadcrumb: "Fil d'Ariane",
    client: "Client",
    industry: "Secteur",
    services: "Services",
    year: "Année",
    visitLive: "Voir le projet en ligne",
    challenge: "Le défi",
    whatWeDid: "Ce que nous avons fait",
    outcome: "Le résultat",
    technology: "Technologies",
    nextProject: "Projet suivant",
  },

  book: {
    metaTitle: "Réservez une consultation gratuite",
    metaDescription:
      "Choisissez un moment pour un appel gratuit de 30 minutes sur votre projet web, d'application, d'IA ou d'automatisation. Sans frais ni engagement.",
    eyebrow: "Réserver un appel",
    title: "Choisissez le moment qui vous convient.",
    lead: "Un appel vidéo gratuit de 30 minutes pour discuter de vos objectifs. Vous repartirez avec des conseils honnêtes et des prochaines étapes claires, que vous fassiez affaire avec nous ou non.",
    frameTitle: "Planifier une consultation gratuite",
    trouble: "Le calendrier ne fonctionne pas?",
    openInTab: "Ouvrez-le dans un nouvel onglet",
    or: "ou",
    sendMessage: "envoyez-nous un message",
  },

  contactPage: {
    metaTitle: "Contactez-nous",
    metaDescription:
      "Parlez-nous de votre projet web, d'application, d'IA ou d'automatisation. Nous répondons à chaque demande en un jour ouvrable.",
    eyebrow: "Contact",
    title: "Contactez-nous",
    lead: "Parlez-nous du problème que vous cherchez à régler. Une idée générale suffit : nous vous aiderons à préciser les détails. La première consultation est gratuite et sans engagement.",
    nextTitle: "La suite",
    nextSteps: [
      "Nous lisons chaque demande et répondons en un jour ouvrable.",
      "Nous planifions un appel gratuit de 30 minutes pour comprendre vos objectifs, vos contraintes et votre échéancier.",
      "Vous recevez une proposition écrite avec la portée, l'échéancier et un prix fixe pour la première phase.",
    ],
    pickTime: "Vous préférez choisir un moment?",
    bookCall: "Réservez un appel gratuit de 30 minutes",
    reachDirectly: "Vous préférez nous joindre directement?",
  },

  contactForm: {
    successTitle: "Merci. Nous avons bien reçu votre demande.",
    successBody:
      "Un membre de notre équipe la lira et vous répondra en un jour ouvrable, souvent plus tôt. Si c'est urgent, écrivez-nous à",
    name: "Nom",
    company: "Entreprise",
    email: "Courriel",
    phone: "Téléphone",
    projectType: "Type de projet",
    projectTypePlaceholder: "Choisissez un type de projet",
    budget: "Budget",
    budgetPlaceholder: "Choisissez une fourchette de budget",
    message: "Description du projet",
    messageHint: "Au moins {min} caractères. Vos objectifs, votre échéancier et vos systèmes actuels nous sont utiles.",
    optional: "Facultatif",
    honeypot: "Site web",
    privacyNote: "Nous utiliserons ces renseignements uniquement pour répondre à votre demande.",
    privacyLink: "Politique de confidentialité",
    submit: "Envoyer la demande",
    submitting: "Envoi en cours…",
    sendingStatus: "Envoi de votre demande.",
  },

  contactErrors: {
    nameRequired: "Veuillez entrer votre nom.",
    nameTooLong: "Votre nom doit compter moins de {max} caractères.",
    companyTooLong: "Le nom de l'entreprise doit compter moins de {max} caractères.",
    emailRequired: "Veuillez entrer votre adresse courriel.",
    emailInvalid: "Veuillez entrer une adresse courriel valide, comme nom@entreprise.com.",
    phoneInvalid: "Veuillez entrer un numéro de téléphone valide, ou laissez ce champ vide.",
    projectTypeRequired: "Veuillez choisir un type de projet.",
    budgetRequired: "Veuillez choisir une fourchette de budget.",
    messageTooShort: "Parlez-nous un peu plus de votre projet (au moins {min} caractères).",
    messageTooLong: "Votre description doit compter moins de {max} caractères.",
    rateLimited:
      "Vous avez envoyé plusieurs demandes en peu de temps. Patientez quelques minutes ou écrivez-nous à {email}.",
    fixFields: "Veuillez corriger les champs indiqués.",
    sendFailed:
      "Nous n'avons pas pu envoyer votre message pour le moment. Réessayez ou écrivez-nous directement à {email}.",
  },

  projectTypes: {
    Website: "Site web",
    "Web application": "Application web",
    "AI solution": "Solution d'IA",
    Automation: "Automatisation",
    "Performance optimization": "Optimisation de la performance",
    SEO: "SEO",
    "Something else": "Autre",
  },
  budgetRanges: {
    "Under $25,000": "Moins de 25 000 $ US",
    "$25,000 – $50,000": "25 000 $ – 50 000 $ US",
    "$50,000 – $100,000": "50 000 $ – 100 000 $ US",
    "$100,000 – $250,000": "100 000 $ – 250 000 $ US",
    "Over $250,000": "Plus de 250 000 $ US",
    "Not sure yet": "Je ne sais pas encore",
  },

  privacy: {
    metaTitle: "Politique de confidentialité",
    metaDescription:
      "Comment {name} recueille, utilise et protège les renseignements transmis au moyen de ce site web.",
    eyebrow: "Mentions légales",
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : septembre 2026.",
    sections: [
      {
        title: "Renseignements recueillis",
        body: "Lorsque vous envoyez le formulaire de contact, nous recueillons les renseignements que vous fournissez : votre nom, votre entreprise, votre adresse courriel, votre numéro de téléphone, le type de projet, la fourchette de budget et la description du projet. Nous n'utilisons pas de traceurs publicitaires et ne vendons aucun renseignement personnel.",
      },
      {
        title: "Utilisation",
        body: "Nous utilisons ces renseignements uniquement pour répondre à votre demande et, si nous travaillons ensemble, pour gérer notre relation d'affaires. Nous conservons les demandes jusqu'à deux ans, sauf si vous nous demandez de les supprimer plus tôt.",
      },
      {
        title: "Analyse de site et assistant IA",
        body: "Lorsque vous utilisez l'analyse de site gratuite, l'adresse que vous saisissez est transmise à Google PageSpeed Insights pour être analysée. Si vous saisissez aussi votre courriel, nous le recevons avec vos résultats afin de faire un suivi. Les messages que vous envoyez à l'assistant IA sont traités par Anthropic pour générer des réponses et ne servent pas à vous identifier. Veuillez ne pas communiquer de renseignements personnels sensibles dans l'assistant.",
      },
      {
        title: "Fournisseurs de services",
        body: "Les formulaires sont transmis par courriel au moyen d'un fournisseur de courriel transactionnel et hébergés chez notre fournisseur d'infrastructure web. Les réservations de consultations sont gérées par notre fournisseur de prise de rendez-vous. Ces fournisseurs traitent les données pour notre compte et ne peuvent pas les utiliser à leurs propres fins.",
      },
    ],
    choicesTitle: "Vos choix",
    choicesBody:
      "Vous pouvez en tout temps nous demander d'accéder aux renseignements que vous nous avez transmis, de les corriger ou de les supprimer en écrivant à",
  },

  websiteCheckPage: {
    metaTitle: "Analyse gratuite de la vitesse et du SEO de votre site",
    metaDescription:
      "Analysez votre site web gratuitement. Obtenez vos scores de vitesse, de SEO, d'accessibilité et de bonnes pratiques, vos Core Web Vitals et les correctifs prioritaires en moins d'une minute.",
    eyebrow: "Analyse de site gratuite",
    title: "Votre site est-il rapide et facile à trouver?",
    lead: "Entrez votre adresse pour voir les scores de votre site en vitesse, SEO, accessibilité et bonnes pratiques sur un téléphone mobile, et ce qu'il faut corriger en premier. C'est gratuit et ça prend moins d'une minute.",
    whyTitle: "Pourquoi ces scores comptent",
    whyBody:
      "Google tient compte de la vitesse et de la qualité technique pour classer les sites web, et la plupart des visiteurs quittent une page qui met plus de quelques secondes à se charger sur leur téléphone.",
    points: [
      "Performance : la rapidité avec laquelle vos pages se chargent et réagissent sur un téléphone typique",
      "Accessibilité : si les personnes qui utilisent un lecteur d'écran ou un clavier peuvent utiliser votre site",
      "Bonnes pratiques : sécurité et normes web modernes",
      "SEO : si les moteurs de recherche peuvent trouver, lire et comprendre vos pages",
    ],
  },

  websiteCheck: {
    address: "Adresse du site web",
    placeholder: "votreentreprise.com",
    email: "Courriel",
    optional: "Facultatif",
    submit: "Lancer l'analyse",
    submitting: "Analyse en cours…",
    emailHint:
      "Ajoutez votre courriel si vous souhaitez que nous fassions un suivi avec une analyse personnalisée. Nous l'utiliserons uniquement à cette fin.",
    running: "Nous testons votre site sur un téléphone mobile simulé. Cela prend habituellement de 20 à 40 secondes.",
    resultsFor: "Résultats pour {url}",
    resultsNote: "Test sur mobile, noté sur 100 par Google Lighthouse.",
    performance: "Performance",
    accessibility: "Accessibilité",
    bestPractices: "Bonnes pratiques",
    seo: "SEO",
    loadingSpeed: "Vitesse de chargement",
    fixFirst: "À corriger en premier",
    noIssues:
      "Aucun problème majeur relevé par ce test rapide. Une analyse complète peut tout de même révéler des améliorations du contenu, des conversions et du référencement.",
    emailSent: "Merci. Nous examinerons vos résultats et vous répondrons en un jour ouvrable.",
    followUp: "Vous voulez les corriger? Nous vous expliquerons les résultats lors d'une consultation gratuite.",
    talk: "Parlons-en",
    savings: "Économie possible d'environ {seconds} s",
    metrics: {
      "largest-contentful-paint": "Largest Contentful Paint",
      "first-contentful-paint": "First Contentful Paint",
      "total-blocking-time": "Temps de blocage total",
      "cumulative-layout-shift": "Cumulative Layout Shift",
      "speed-index": "Indice de vitesse",
    },
    errors: {
      invalidUrl: "Veuillez entrer une adresse web publique valide, comme exemple.com.",
      invalidEmail: "Veuillez entrer une adresse courriel valide, ou laissez le champ vide.",
      rateLimited:
        "Vous avez lancé plusieurs analyses au cours de la dernière heure. Réessayez plus tard ou contactez-nous pour une analyse complète.",
      failed: "Nous n'avons pas pu analyser ce site pour le moment. Vérifiez l'adresse et réessayez dans une minute.",
    },
  },

  notFound: {
    metaTitle: "Page introuvable",
    title: "Cette page n'existe pas.",
    lead: "Le lien est peut-être périmé, ou la page a été déplacée.",
    home: "Retour à l'accueil",
    contact: "Contactez-nous",
  },

  assistant: {
    greeting:
      "Bonjour! Posez-moi vos questions sur nos sites web, nos applications, l'IA et l'automatisation. Je peux aussi vous aider à savoir par où commencer.",
    open: "Poser une question",
    close: "Fermer",
    title: "Posez-nous vos questions",
    disclaimer:
      "Assistant IA. Les réponses peuvent comporter des erreurs, alors ne communiquez pas de renseignements sensibles.",
    suggested: "Questions suggérées",
    suggestions: [
      "Combien coûte un site web?",
      "L'IA peut-elle aider ma petite entreprise?",
      "Combien de temps faut-il pour créer une application web?",
    ],
    you: "Vous : ",
    assistant: "Assistant : ",
    thinking: "Réflexion…",
    limit: "Pour la suite, l'équipe se fera un plaisir de vous aider.",
    book: "Réservez une consultation gratuite",
    inputLabel: "Votre question",
    placeholder: "Tapez votre question",
    send: "Envoyer",
    failed: "Désolé, je n'ai pas pu répondre pour le moment. Veuillez réessayer.",
    interrupted: "Désolé, la connexion a été interrompue. Veuillez réessayer.",
    unavailable: "L'assistant n'est pas disponible pour le moment.",
    wrongOrigin: "Les demandes doivent provenir de ce site web.",
    rateLimited: "Vous avez envoyé beaucoup de messages en peu de temps. Réessayez dans quelques minutes.",
    invalid: "Ce message n'a pas pu être envoyé. Essayez une question plus courte.",
    declined:
      "Désolé, je ne peux pas vous aider avec cela. Pour toute autre question, écrivez à {email} ou réservez une consultation gratuite à {contact}.",
    serverError: "Désolé, un problème est survenu de notre côté. Réessayez ou écrivez à {email}.",
    replyLanguage: 'French, using "vous", in a plain and friendly tone suited to North American readers',
  },
};
