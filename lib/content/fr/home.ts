import type { Home } from "../en/home";

/**
 * La page d'accueil, en français du Québec : écrite pour qui la lit, pas traduite mot à mot. Huit sections :
 * l'entête, ce que nous faisons, les capacités, notre façon de résoudre les problèmes, les solutions
 * technologiques, pourquoi travailler avec nous, les secteurs et la demande de projet.
 */
export const home: Home = {
  metaTitle: "{name} : logiciels sur mesure et solutions technologiques",
  metaDescription:
    "Nous concevons, construisons et modernisons la technologie des entreprises : logiciels sur mesure, web, IA, bases de données, infonuagique et systèmes d'entreprise.",

  hero: {
    lead: "Concevoir",
    block1: "la technologie.",
    block2: "Résoudre vos",
    tail: "défis d'affaires.",
    intro:
      "Des logiciels sur mesure et des applications web aux solutions d'IA, aux systèmes d'entreprise et à l'infrastructure infonuagique, nous concevons la technologie dont les entreprises ont besoin pour fonctionner, évoluer et croître.",
    factsLabel: "En un coup d'œil",
    facts: [
      "Une personne vous répond en moins d'une heure ouvrable",
      "Le code, les comptes et les domaines vous appartiennent",
      "Des projets en français, en anglais et en espagnol",
    ],
    visualLabel:
      "Illustration d'une application d'affaires, des couches d'architecture qui la soutiennent et de l'environnement infonuagique où elle roule",
  },

  whatWeDo: {
    eyebrow: "Ce que nous faisons",
    title: "Des solutions technologiques pour de vrais défis d'affaires.",
    body: "Nous sommes une entreprise d'ingénierie logicielle et de solutions technologiques. Nous développons des logiciels sur mesure, construisons des applications web et mobiles, concevons des bases de données et de l'infrastructure infonuagique, intégrons l'IA, modernisons les systèmes vieillissants et résolvons des problèmes techniques complexes. Certains clients nous confient un seul défi technique. D'autres ont besoin d'un système complet.",
    engineerLabel: "Ce que nous concevons",
    outcomeLabel: "Ce que cela apporte à l'entreprise",
    outcomes: [
      {
        tech: "Logiciels et applications sur mesure",
        result: "Votre processus roule dans un seul système conçu pour lui, plutôt que dans des outils éparpillés.",
      },
      {
        tech: "Bases de données et intégrations",
        result: "Vos équipes travaillent à partir des mêmes données exactes.",
      },
      {
        tech: "Infonuagique et infrastructure",
        result: "Vos systèmes restent disponibles, sécurisés et prêts à croître.",
      },
      {
        tech: "IA et automatisation",
        result: "Le travail routinier se fait tout seul, et des personnes révisent ce qui compte.",
      },
      {
        tech: "Modernisation et architecture",
        result: "Les logiciels vieillissants cessent de ralentir l'entreprise.",
      },
    ],
  },

  capabilities: {
    eyebrow: "Nos capacités",
    title: "Tout ce qu'une entreprise attend d'un partenaire technologique.",
    lead: "Neuf capacités réunies dans une seule équipe d'ingénierie. Faites appel à une seule pour un problème précis, ou combinez-en plusieurs pour une solution complète.",
    explore: "Découvrir",
    viewAll: "Voir tous les services",
    more: "+ {count} de plus",
  },

  approach: {
    eyebrow: "Notre façon de résoudre les problèmes",
    title: "Du défi à la solution.",
    lead: "Chaque projet est différent, alors la démarche s'adapte. La plupart des travaux suivent ces cinq étapes, et un correctif précis n'en demande parfois que quelques-unes.",
    step: "Étape {number}",
    steps: [
      {
        title: "Comprendre",
        detail: "Comprendre l'entreprise, ses défis, ses objectifs et la technologie déjà en place.",
      },
      {
        title: "Planifier",
        detail: "Déterminer la bonne approche technique, l'architecture et la stratégie de mise en œuvre.",
      },
      {
        title: "Concevoir",
        detail: "Concevoir et développer les logiciels, les applications, l'infrastructure ou les intégrations appropriés.",
      },
      {
        title: "Mettre en œuvre",
        detail: "Déployer, intégrer et tester, et s'assurer que la solution fonctionne dans votre environnement d'affaires.",
      },
      {
        title: "Faire évoluer",
        detail: "Améliorer, optimiser, maintenir et adapter la technologie à mesure que vos besoins changent.",
      },
    ],
    engageTitle: "Travaillez avec nous de la façon qui vous convient",
    engage: [
      {
        title: "Un défi technique précis",
        detail: "Un correctif, une évaluation ou un second avis. Ciblé, rapide et cadré par écrit.",
      },
      {
        title: "Un projet défini",
        detail: "Une application, une migration ou une intégration, de la planification jusqu'au lancement.",
      },
      {
        title: "Une mise en œuvre complète",
        detail: "Un programme multisystème : architecture, développement, migration et soutien continu.",
      },
    ],
    link: "Voir notre façon de travailler",
  },

  solutions: {
    eyebrow: "Solutions technologiques",
    title: "Quel que soit le défi technique, nous concevons la solution.",
    lead: "Voici les problèmes que les entreprises nous confient. Trouvez le vôtre et voyez comment nous l'aborderions.",
    items: [
      { question: "Besoin d'une application d'affaires sur mesure?", answer: "Nous concevons et construisons un logiciel adapté à votre processus." },
      { question: "Vos logiciels actuels ne répondent plus à vos besoins?", answer: "Nous les mettons à niveau, les restructurons ou les remplaçons par étapes." },
      { question: "Vous voulez migrer vers le nuage?", answer: "Nous planifions et réalisons le passage sans interrompre l'entreprise." },
      { question: "Besoin d'une base de données conçue ou optimisée?", answer: "Nous structurons vos données pour qu'elles soient exactes et rapides." },
      { question: "Vous voulez intégrer l'IA à votre entreprise?", answer: "Nous l'ajoutons là où elle supprime du travail, avec des personnes aux commandes." },
      { question: "Besoin de relier plusieurs systèmes?", answer: "Nous concevons les intégrations et les API qui les font fonctionner ensemble." },
      { question: "Des problèmes de rendement ou d'infrastructure?", answer: "Nous en diagnostiquons la cause et nous la corrigeons." },
      { question: "Vous voulez automatiser des processus manuels?", answer: "Nous transformons les étapes manuelles en flux de travail numériques fiables." },
      { question: "Besoin d'une plateforme numérique complète?", answer: "Nous la construisons de A à Z, sur des fondations qui évoluent." },
    ],
    note: "La plupart des projets n'ont besoin que de quelques-unes de ces capacités. Nous recommandons ce qui convient et laissons de côté ce qui n'est pas utile.",
  },

  whyUs: {
    eyebrow: "Pourquoi travailler avec nous",
    title: "Des décisions d'ingénierie prises pour votre entreprise.",
    items: [
      {
        title: "Des solutions conçues sur mesure",
        detail: "Nous construisons pour votre processus et vos contraintes, pas à partir d'un modèle.",
      },
      {
        title: "Des décisions techniques axées sur les affaires",
        detail: "Chaque recommandation est reliée à ce qu'elle signifie pour les coûts, les risques et les opérations.",
      },
      {
        title: "Un large éventail de capacités techniques",
        detail: "Logiciel, données, infonuagique, IA et architecture réunis dans une seule équipe, pour que rien ne tombe entre deux fournisseurs.",
      },
      {
        title: "Des approches de projet flexibles",
        detail: "D'un simple correctif à un programme complet, nous adaptons la démarche au travail.",
      },
      {
        title: "Une architecture évolutive",
        detail: "Des systèmes conçus pour absorber la croissance des utilisateurs, des données et des fonctions.",
      },
      {
        title: "Une résolution de problèmes pragmatique",
        detail: "Nous choisissons l'approche la plus simple qui règle bien le problème.",
      },
      {
        title: "Une intégration avec vos systèmes existants",
        detail: "La nouvelle technologie fonctionne avec ce que vous exploitez déjà, au lieu de tout remplacer.",
      },
      {
        title: "Une vision technologique à long terme",
        detail: "De la documentation, des responsabilités claires et un code maintenable, pour que le système vous serve pendant des années.",
      },
    ],
    standardsLink: "Lire nos normes d'ingénierie",
  },

  industries: {
    eyebrow: "Secteurs",
    title: "Une technologie adaptée à la façon dont votre secteur fonctionne.",
    lead: "Les problèmes varient selon le secteur. L'ingénierie, elle, s'applique partout. Voici le genre de solutions dont les entreprises de chacun ont souvent besoin.",
    link: "Voir tous les secteurs",
  },

  contact: {
    eyebrow: "Contact",
    title: "Dites-nous ce que vous devez construire ou corriger.",
    lead: "Une nouvelle application, un ancien système à remettre en état ou un problème technique que vous n'arrivez pas à régler : une courte description suffit pour commencer.",
    cta: "Lancer la conversation",
    points: [
      "Vous recevez une confirmation immédiate.",
      "Une personne vous répond en moins d'une heure ouvrable.",
      "Sans engagement. Nous commençons par comprendre le problème.",
    ],
    emailLabel: "Vous préférez le courriel?",
  },
};
