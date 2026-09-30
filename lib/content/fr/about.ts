import type { About, Partners } from "../en/about";

/**
 * À propos : la crédibilité humaine. Pourquoi l'entreprise existe, le fondateur, comment l'équipe
 * travaille entre les pays et un bloc « lisez comment nous travaillons ». N'inventez jamais de
 * biographie, de client, de chiffre ni de prix. Pas de photo de banque d'images avec des personnes.
 */
export const about: About = {
  metaTitle: "À propos",
  metaDescription:
    "{name} est une entreprise de développement de logiciels sur mesure et de solutions technologiques. Nous concevons, construisons, intégrons et modernisons la technologie dont les entreprises dépendent.",
  eyebrow: "À propos",
  title: "Une équipe d'ingénierie logicielle pour vos défis technologiques.",
  lead: "{name} conçoit, construit, intègre et modernise les logiciels, les données, l'infonuagique et les systèmes d'IA dont les entreprises dépendent. Nous résolvons les problèmes techniques par l'ingénierie.",

  whyTitle: "Pourquoi nous existons",
  why: [
    "Les entreprises dépendent de la technologie, et les problèmes technologiques entrent rarement dans une seule spécialité. Un seul projet peut exiger un logiciel sur mesure, une refonte de base de données, une migration vers le nuage et une intégration. Les entreprises ne devraient pas avoir à coordonner quatre fournisseurs pour y arriver.",
    "Nous existons pour être le partenaire d'ingénierie de l'ensemble : comprendre le problème, concevoir la bonne solution, la construire et la garder fonctionnelle à mesure que l'entreprise change.",
  ],

  founderTitle: "Avec qui vous travaillerez",
  founder: [
    "Vous saurez dès le premier appel qui est responsable de votre projet. Chaque client a une personne désignée, responsable du travail et du suivi après le lancement.",
    "Cette personne travaille en français, en anglais ou en espagnol, dans votre langue et, dans la mesure du possible, dans votre fuseau horaire.",
  ],
  founderPhotoAlt: "Le fondateur de {name}",

  teamTitle: "Comment l'équipe travaille entre les pays",
  team: [
    "Nous servons des entreprises aux États-Unis, au Canada et au Mexique, et nous travaillons entre fuseaux horaires. Les appels sont fixés dans le vôtre.",
    "Pour que rien ne dépende de qui était à quel appel, les décisions et l'avancement sont consignés par écrit : un compte rendu écrit chaque semaine et un lien de préproduction que vous pouvez ouvrir en tout temps.",
  ],

  proofTitle: "Lisez comment nous travaillons avant de nous engager",
  proofBody:
    "Nous publions, en langage clair, les normes que nous suivons et le processus de chaque projet. L'audit vous montre des preuves avant que vous payiez pour une réalisation.",
  proofLinks: { standards: "Lire les normes", process: "Voir notre façon de travailler" },

  beliefsTitle: "Ce en quoi nous croyons",
  beliefs: [
    {
      title: "Des preuves avant les propositions.",
      detail: "Nous préférons vous montrer où va le temps plutôt que de vous demander de croire une promesse.",
    },
    {
      title: "L'outil le plus simple qui fonctionne.",
      detail: "Si une feuille de calcul ou un produit existant règle le problème, nous vous le dirons, même si cela signifie un plus petit projet pour nous.",
    },
    {
      title: "Écrit, pas retenu de mémoire.",
      detail: "La portée, les prix, les décisions et les comptes rendus sont consignés par écrit, pour que tout le monde travaille à partir des mêmes faits.",
    },
    {
      title: "La vitesse fait partie du produit.",
      detail: "Les systèmes rapides sont plus faciles à utiliser, plus faciles à trouver et moins chers à exploiter.",
    },
  ],
};

export const partners: Partners = {
  metaTitle: "Partenaires",
  metaDescription:
    "Pour les firmes TI, les comptables et les directeurs techniques à temps partiel : comment fonctionne une recommandation de client, ce que nous faisons d'abord et les normes que vous pouvez vérifier avant de recommander.",
  eyebrow: "Partenaires",
  title: "Pouvez-vous nous recommander vos clients en toute confiance?",
  lead: "Pour les firmes TI, les comptables et les directeurs techniques à temps partiel dont les clients ont besoin de systèmes construits et entretenus. Voici comment nous traiterions une recommandation, et ce que vous pouvez vérifier d'abord.",

  checkTitle: "Ce que vous pouvez vérifier avant de recommander",
  check: [
    {
      title: "Nos normes",
      detail: "Sécurité, performance, accessibilité, IA et vie privée, rédigées en langage clair.",
      href: "/standards",
      link: "Lire les normes",
    },
    {
      title: "Notre façon de travailler",
      detail: "Un processus flexible avec une portée convenue par écrit, des comptes rendus écrits hebdomadaires et des contrôles de qualité avant le lancement.",
      href: "/how-we-work",
      link: "Voir notre façon de travailler",
    },
    {
      title: "Les démos",
      detail: "Des démos conceptuelles fonctionnelles pour les secteurs que nous servons, sur des données fictives.",
      href: "/work",
      link: "Voir les démos",
    },
  ],

  howTitle: "Comment fonctionne une recommandation",
  how: [
    { title: "Vous nous présentez", detail: "Un court courriel suffit. Nous répondons personnellement en moins d'une heure ouvrable." },
    { title: "Nous commençons par une évaluation", detail: "Il montre à votre client ce qui vaut la peine d'être corrigé, preuves à l'appui, avant que quiconque s'engage dans une réalisation." },
    { title: "Vous restez dans la boucle", detail: "Si votre client est d'accord, nous partageons les constats et le plan avec vous." },
    { title: "Votre client est propriétaire de tout", detail: "Le code, les comptes et les domaines appartiennent à votre client, pour que vous puissiez continuer à le conseiller." },
  ],

  termsTitle: "Conditions de partenariat",
  termsBody: "Nous convenons des conditions de partenariat par écrit avant la première recommandation. Demandez-nous et nous vous les présenterons.",
  cta: "Parlons de partenariat",
};
