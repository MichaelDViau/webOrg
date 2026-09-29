import type { Ui } from "../en/ui";

/**
 * Texte d'interface partagé, en français du Québec. Il doit avoir la même forme que la version
 * anglaise (voir `Ui`). Vouvoiement, « courriel », phrases courtes et vocabulaire du client.
 */
export const ui: Ui = {
  site: {
    description:
      "{name} conçoit, construit et exploite des sites web, des portails clients, des logiciels internes et des automatisations pour les entreprises de services et d'exploitation établies.",
    hours: "Du lundi au vendredi, de 9 h à 18 h, heure du Centre",
    shareImageAlt: "{name} : les systèmes qui font tourner votre entreprise, conçus et entretenus avec soin",
    audienceType: "Entreprises de services et d'exploitation établies",
    countriesLabel: "Pays desservis",
    countries: ["États-Unis", "Canada", "Mexique"],
    languagesLabel: "Langues",
    languages: "français, anglais et espagnol",
  },

  skipToContent: "Passer au contenu",
  breadcrumbHome: "Accueil",
  breadcrumb: "Fil d'Ariane",
  logoLabel: "Accueil {name}",
  readMore: "En savoir plus",

  cta: {
    audit: "Réserver un audit",
    auditLong: "Réserver un audit des systèmes numériques",
    snapshot: "Obtenir un aperçu gratuit",
    snapshotLong: "Obtenir un aperçu gratuit de votre site",
    snapshotAlt: "Ou commencez par un aperçu gratuit",
    replyPromise: "Une personne vous répond en moins d'une heure ouvrable.",
    orEmail: "Ou écrivez à",
  },

  closingCta: {
    title: "Découvrez où vos systèmes vous coûtent cher.",
    lead: "L'audit se termine par un plan chiffré et priorisé. Les frais sont crédités en totalité si vous lancez un projet dans les {days} jours.",
  },

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
    industries: "Secteurs",
    audit: "Audit",
    work: "Réalisations",
    howWeWork: "Notre façon de travailler",
    about: "À propos",
    standards: "Normes",
    insights: "Perspectives",
    contact: "Contact",
    partners: "Partenaires",
    snapshot: "Aperçu gratuit",
    websiteCheck: "Test de vitesse instantané",
  },

  footer: {
    tagline: "Les systèmes qui font tourner votre entreprise, conçus et entretenus avec soin.",
    services: "Services",
    industries: "Secteurs",
    company: "Entreprise",
    legal: "Renseignements juridiques",
    contact: "Contact",
    rights: "Tous droits réservés.",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    cookies: "Avis sur les témoins",
    mexicoNotice: "Aviso de privacidad (Mexique)",
    newCompany: "Une nouvelle entreprise, fondée en {year}.",
  },

  price: {
    auditRange: "de {from} à {to} $ US",
    from: "à partir de {amount} $ US",
    fromPerMonth: "à partir de {amount} $ US par mois",
    creditNote: "Crédité en totalité à un projet signé dans les {days} jours.",
    fixedPhases: "Chaque phase a un prix fixe, convenu par écrit avant son début.",
    label: "Prix",
    unset: "Fourchette de prix à confirmer",
  },

  trust: {
    title: "Pourquoi vous pouvez faire confiance au travail",
    items: [
      { title: "Tout vous appartient", detail: "Le code, les comptes et les domaines sont à vous dès le premier jour." },
      { title: "Des phases à prix fixe", detail: "Une portée et un prix écrits avant le début de chaque phase." },
      { title: "Un travail à ciel ouvert", detail: "Un lien de préproduction et un compte rendu écrit chaque semaine." },
      { title: "Des normes publiées", detail: "Sécurité, performance, accessibilité, IA et vie privée, en langage clair." },
    ],
    standardsLink: "Lire nos normes",
    processLink: "Voir notre façon de travailler",
  },

  demo: {
    label: "Démo conceptuelle : ce n'est pas un projet client",
    sampleData: "Données fictives à titre d'illustration",
  },

  sections: {
    problem: "Le problème",
    changes: "Ce qui change",
    included: "Ce qui est inclus",
    phases: "Comment ça se passe, par phases",
    phase: "Phase {number}",
    price: "Prix",
    relatedDemo: "Démo connexe",
    forWhom: "À qui s'adresse ce service",
    questions: "Questions fréquentes",
    otherServices: "Autres services",
    otherIndustries: "Autres secteurs",
    relatedServices: "Services connexes",
    inTheirWords: "Dans leurs mots",
    systemsWeBuild: "Les systèmes que nous construisons",
    softwareWeConnect: "Logiciels auxquels nous nous connectons",
    theDemo: "La démo pour ce secteur",
    whatNext: "La suite",
  },

  leadForm: {
    name: "Nom",
    role: "Fonction",
    company: "Entreprise",
    website: "Site web",
    websitePlaceholder: "votreentreprise.com",
    email: "Courriel",
    phone: "Téléphone",
    need: "Qu'aimeriez-vous corriger?",
    needHint:
      "Une ou deux phrases suffisent. Par exemple : les demandes attendent trop longtemps, ou le personnel ressaisit les mêmes données.",
    language: "Langue préférée",
    optional: "Facultatif",
    consent: "J'accepte que {name} utilise ces renseignements pour me répondre.",
    privacyLink: "Politique de confidentialité",
    honeypot: "Laissez ce champ vide",
    submit: {
      audit: "Réserver mon audit",
      contact: "Envoyer le message",
      snapshot: "Obtenir mon aperçu gratuit",
    },
    submitting: "Envoi en cours…",
    sendingStatus: "Envoi de votre demande en cours.",
    successTitle: {
      audit: "Merci. Nous avons bien reçu votre demande d'audit.",
      contact: "Merci. Nous avons bien reçu votre message.",
      snapshot: "Merci. Nous avons bien reçu votre demande d'aperçu.",
    },
    successBody:
      "Une confirmation est en route vers votre boîte de réception. Une personne vous répondra personnellement en moins d'une heure ouvrable ({hours}). Si c'est urgent, écrivez à",
    bookTitle: "Vous préférez choisir l'heure vous-même?",
    bookCall: "Choisir l'heure de l'appel de découverte",
    languageNames: { en: "English", fr: "Français", es: "Español" },
  },

  leadErrors: {
    nameRequired: "Veuillez entrer votre nom.",
    nameTooLong: "Veuillez limiter votre nom à {max} caractères.",
    roleTooLong: "Veuillez limiter votre fonction à {max} caractères.",
    companyTooLong: "Veuillez limiter le nom de l'entreprise à {max} caractères.",
    websiteInvalid: "Veuillez entrer une adresse de site web, comme votreentreprise.com.",
    websiteRequired: "Veuillez entrer l'adresse de votre site web.",
    emailRequired: "Veuillez entrer votre adresse courriel.",
    emailInvalid: "Veuillez entrer une adresse courriel valide, comme nom@entreprise.com.",
    phoneInvalid: "Veuillez entrer un numéro de téléphone valide, ou laissez ce champ vide.",
    needTooShort: "Dites-nous-en un peu plus (au moins {min} caractères).",
    needTooLong: "Veuillez limiter ce texte à {max} caractères.",
    languageInvalid: "Veuillez choisir une langue.",
    consentRequired: "Veuillez cocher la case pour que nous puissions vous répondre.",
    rateLimited:
      "Vous avez envoyé plusieurs demandes en peu de temps. Veuillez patienter quelques minutes ou nous écrire à {email}.",
    fixFields: "Veuillez corriger les champs en surbrillance.",
    sendFailed: "Nous n'avons pas pu envoyer votre demande pour le moment. Réessayez ou écrivez-nous directement à {email}.",
  },

  confirmation: {
    subject: "Nous avons bien reçu votre demande",
    greeting: "Bonjour {name},",
    kinds: {
      audit: "Merci de votre intérêt pour un audit des systèmes numériques.",
      contact: "Merci de votre message.",
      snapshot: "Merci d'avoir demandé un aperçu gratuit de votre site.",
    },
    automatic: "Ceci est une confirmation automatique, pour vous assurer que votre demande nous est parvenue.",
    promise: "Une personne de notre équipe vous répondra personnellement en moins d'une heure ouvrable ({hours}).",
    nextAudit: "Une fois votre rendez-vous réservé, nous vous enverrons un court questionnaire pour que l'appel porte sur votre entreprise.",
    nextSnapshot: "Nous vous enverrons trois observations précises sur votre site, avec ce qu'il faut faire pour chacune.",
    signoff: "L'équipe de {name}",
    ignore: "Si vous n'êtes pas à l'origine de cette demande, vous pouvez ignorer ce message.",
  },

  newsletter: {
    title: "Des notes pratiques sur les systèmes des entreprises d'exploitation",
    lead: "Un court courriel à chaque nouvel article. Pas de pourriel, et vous pouvez vous désabonner d'un clic.",
    email: "Courriel",
    language: "Langue des courriels",
    consent: "J'accepte de recevoir des courriels de {name}. Je peux me désabonner en tout temps.",
    submit: "S'abonner",
    submitting: "Abonnement en cours…",
    successTitle: "Vous êtes abonné.",
    successBody: "Merci. Nous vous écrirons quand il y aura du nouveau à lire.",
    errors: {
      emailRequired: "Veuillez entrer votre adresse courriel.",
      emailInvalid: "Veuillez entrer une adresse courriel valide, comme nom@entreprise.com.",
      consentRequired: "Veuillez cocher la case pour vous abonner.",
      rateLimited: "Trop de tentatives. Réessayez dans quelques minutes.",
      failed: "Nous n'avons pas pu vous abonner pour le moment. Réessayez dans un instant.",
    },
  },

  contactPage: {
    metaTitle: "Contact",
    metaDescription:
      "Dites-nous ce que vous aimeriez corriger. Une personne vous répond en moins d'une heure ouvrable. Nous servons des entreprises aux États-Unis, au Canada et au Mexique, en français, en anglais et en espagnol.",
    eyebrow: "Contact",
    title: "Dites-nous ce que vous aimeriez corriger.",
    lead: "Cinq courts champs. Vous recevez une confirmation tout de suite et une réponse personnelle en moins d'une heure ouvrable.",
    nextTitle: "La suite",
    nextSteps: [
      "Vous recevez tout de suite un courriel de confirmation, dans votre langue.",
      "Une personne vous répond personnellement en moins d'une heure ouvrable.",
      "Nous fixons un appel de découverte et vous envoyons un court questionnaire une fois le rendez-vous confirmé.",
    ],
    pickTime: "Vous préférez choisir l'heure?",
    bookCall: "Réserver un appel de découverte",
    reachDirectly: "Vous préférez nous écrire directement?",
    servingTitle: "Pays et langues",
    servingBody: "Nous servons des entreprises dans les pays suivants : {countries}. Langues de service : {languages}.",
  },

  bookPage: {
    metaTitle: "Réserver un appel de découverte",
    metaDescription:
      "Choisissez l'heure d'un appel de découverte au sujet de votre audit des systèmes numériques. Une personne confirme en moins d'une heure ouvrable.",
    eyebrow: "Réserver un appel",
    title: "Choisissez l'heure qui vous convient.",
    lead: "Un appel de découverte pour discuter de ce que vous aimeriez corriger. C'est là que l'audit commence, et l'appel est gratuit.",
    frameTitle: "Planifier un appel de découverte",
    trouble: "Un problème avec le calendrier?",
    openInTab: "Ouvrez-le dans un nouvel onglet",
    or: "ou",
    sendMessage: "envoyez-nous un message",
  },

  websiteCheckPage: {
    metaTitle: "Test de vitesse instantané de votre site",
    metaDescription:
      "Lancez un test automatisé Google Lighthouse sur votre site. Consultez les notes de vitesse, d'accessibilité, de bonnes pratiques et de référencement sur mobile, et ce qu'il faut corriger en premier.",
    eyebrow: "Test de vitesse instantané",
    title: "Voyez tout de suite comment votre site se comporte sur un téléphone.",
    lead: "Un test automatisé qui prend moins d'une minute. Il note la vitesse, l'accessibilité, les bonnes pratiques et les bases du référencement. Pour le regard d'une personne sur votre site, demandez l'aperçu gratuit.",
    whyTitle: "Ce que signifient les notes",
    whyBody:
      "Le test simule un téléphone de milieu de gamme sur une connexion mobile. C'est un test en laboratoire : un bon moyen de repérer des problèmes, pas une promesse sur ce que vivent vos vrais visiteurs. Les données d'utilisateurs réels (Core Web Vitals) sont un juge plus équitable.",
    points: [
      "Performance : la rapidité avec laquelle vos pages se chargent et réagissent sur un téléphone typique",
      "Accessibilité : la capacité des personnes qui utilisent un lecteur d'écran ou un clavier à se servir de votre site",
      "Bonnes pratiques : sécurité et normes web modernes",
      "SEO : la capacité des moteurs de recherche à trouver, lire et comprendre vos pages",
    ],
    snapshotTitle: "Vous voulez qu'une personne y jette un coup d'œil?",
    snapshotBody: "L'aperçu gratuit vous donne trois observations précises sur votre site, rédigées par une personne.",
  },

  websiteCheck: {
    address: "Adresse du site web",
    placeholder: "votreentreprise.com",
    email: "Courriel",
    optional: "Facultatif",
    submit: "Lancer le test",
    submitting: "Analyse en cours…",
    emailHint:
      "Ajoutez votre courriel si vous souhaitez qu'une personne fasse un suivi des résultats. Nous l'utiliserons uniquement à cette fin.",
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
      "Aucun problème majeur relevé par ce test rapide. Le regard d'une personne peut tout de même révéler des améliorations du contenu, des conversions et du parcours des demandes.",
    emailSent: "Merci. Une personne vous répondra en moins d'une heure ouvrable.",
    followUp: "Vous voulez de l'aide pour ces points? Demandez un aperçu gratuit ou réservez un audit des systèmes numériques.",
    talk: "Obtenir un aperçu gratuit",
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
        "Vous avez lancé plusieurs tests au cours de la dernière heure. Réessayez plus tard ou demandez un aperçu gratuit.",
      failed: "Nous n'avons pas pu analyser ce site pour le moment. Vérifiez l'adresse et réessayez dans une minute.",
    },
  },

  notFound: {
    metaTitle: "Page introuvable",
    title: "Cette page n'existe pas.",
    lead: "Le lien est peut-être périmé, ou la page a été déplacée.",
    home: "Retour à l'accueil",
    contact: "Nous joindre",
  },

  assistant: {
    greeting:
      "Bonjour! Posez-moi vos questions sur notre audit, nos services ou notre façon de travailler. Je peux aussi vous aider à savoir par où commencer.",
    open: "Poser une question",
    close: "Fermer",
    title: "Posez-nous vos questions",
    disclaimer:
      "Assistant IA. Les réponses peuvent comporter des erreurs, alors ne communiquez pas de renseignements sensibles.",
    suggested: "Questions suggérées",
    suggestions: [
      "Que comprend l'audit?",
      "Combien faut-il prévoir pour commencer?",
      "Travaillez-vous en français?",
    ],
    you: "Vous : ",
    assistant: "Assistant : ",
    thinking: "Réflexion…",
    limit: "Pour la suite, une personne se fera un plaisir de vous aider.",
    book: "Réserver un audit",
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
      "Désolé, je ne peux pas vous aider avec cela. Pour toute autre question, écrivez à {email} ou joignez-nous à {contact}.",
    serverError: "Désolé, un problème est survenu de notre côté. Réessayez ou écrivez à {email}.",
    replyLanguage: 'French, using "vous", in a plain and friendly tone suited to North American readers (Quebec)',
  },
};
