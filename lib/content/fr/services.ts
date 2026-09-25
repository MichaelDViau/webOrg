import type { ServiceSlug, ServiceText } from "@/lib/services";

export const services: Record<ServiceSlug, ServiceText> = {
  "website-development": {
    name: "Développement de sites web",
    summary: "Des sites rapides et accessibles, pensés selon la façon dont vos clients prennent leurs décisions.",
    seoTitle: "Services professionnels de développement web",
    metaDescription:
      "Conception et développement de sites web sur mesure pour les startups, les PME et les grandes organisations. Des sites rapides et accessibles, avec un CMS que votre équipe peut gérer.",
    headline: "Un bon site web facilite la décision de celui qui le lit.",
    intro:
      "Nous concevons et développons des sites d'entreprise et de marketing qui expliquent ce que vous faites, inspirent confiance et transforment les visiteurs en conversations. Chaque site est construit de zéro autour de votre contenu et de vos objectifs, puis livré avec un système de gestion de contenu que votre équipe peut utiliser sans nous appeler.",
    plain:
      "Un site web rapide et soigné qui fonctionne sur tous les téléphones et ordinateurs, apparaît dans Google et que vous pouvez mettre à jour vous-même sans appeler un développeur.",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Astro",
      "Tailwind CSS",
      "WordPress",
      "Sanity",
      "Vercel",
      "Cloudflare",
    ],
    included: [
      {
        title: "Contenu et structure",
        detail: "Arborescence, hiérarchie des pages et messages, arrêtés avant le début du design visuel.",
      },
      {
        title: "Design d'interface",
        detail: "Un système visuel conçu pour votre marque et pour toutes les tailles d'écran.",
      },
      {
        title: "Développement",
        detail:
          "Front ends Next.js ou Astro, avec des composants propres et documentés, sans dépendance à un constructeur de pages.",
      },
      {
        title: "Gestion de contenu",
        detail: "Sanity, Contentful ou WordPress headless, configurés avec les champs dont vos rédacteurs ont besoin.",
      },
      {
        title: "Accessibilité",
        detail: "WCAG 2.2 AA comme base, testé au clavier et avec des lecteurs d'écran en plus des outils automatisés.",
      },
      {
        title: "Mise en ligne et passation",
        detail: "Redirections, analytique, surveillance et formation, pour que rien ne se perde à la mise en ligne.",
      },
    ],
    approach: [
      "La plupart des sites déçoivent parce que le contenu n'est pas clair, pas parce que le design est mauvais. Nous commençons par déterminer ce que vos clients doivent savoir, et dans quel ordre, puis nous concevons les pages en conséquence.",
      "Nous utilisons des frameworks modernes qui privilégient les pages statiques : elles se chargent vite et restent sécuritaires avec très peu d'entretien. Le code, le compte d'hébergement et le CMS vous appartiennent.",
    ],
    engagement: [
      { label: "Délai habituel", value: "8 à 14 semaines" },
      { label: "Équipe", value: "Stratège, designer et deux ingénieurs" },
      { label: "Après la mise en ligne", value: "Soutien mensuel optionnel" },
    ],
    faqs: [
      {
        question: "Pouvez-vous travailler avec notre charte graphique actuelle?",
        answer:
          "Oui. La plupart de nos projets web prolongent une marque existante. Si votre charte ne couvre pas le numérique, nous comblons les lacunes et documentons nos choix.",
      },
      {
        question: "Pourrons-nous mettre le site à jour nous-mêmes?",
        answer:
          "Oui. Le contenu est géré dans un CMS configuré pour votre équipe, et la passation comprend une séance de formation et un guide écrit.",
      },
      {
        question: "Migrez-vous le contenu de notre site actuel?",
        answer:
          "Oui. Nous passons en revue vos pages actuelles, décidons quoi conserver, réécrire ou retirer, et mettons en place des redirections pour préserver votre référencement.",
      },
    ],
  },
  "web-applications": {
    name: "Applications web",
    summary:
      "Tableaux de bord, portails et outils internes sur mesure, conçus selon le fonctionnement de votre entreprise.",
    seoTitle: "Développement d'applications web sur mesure",
    metaDescription:
      "Développement d'applications web et de logiciels sur mesure : portails clients, tableaux de bord, outils internes et produits SaaS, conçus et développés par une seule équipe expérimentée.",
    headline: "Un logiciel qui s'adapte à vos opérations, et non l'inverse.",
    intro:
      "Quand un logiciel standard oblige votre équipe à multiplier les contournements et les tableurs, une application sur mesure est souvent le meilleur investissement à long terme. Nous développons des portails clients, des outils internes, des tableaux de bord et des produits SaaS, pour les startups comme pour les entreprises établies, du modèle de données jusqu'à l'interface, et nous les soutenons après la mise en ligne.",
    plain:
      "Un logiciel sur mesure qui fonctionne dans le navigateur, comme un portail client, un système de réservation ou un tableau de bord interne, construit selon la façon dont votre entreprise travaille déjà.",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "GraphQL",
      "Docker",
      "AWS",
      "GitHub Actions",
    ],
    included: [
      {
        title: "Découverte et cadrage",
        detail:
          "Cartographie des processus avec les futurs utilisateurs et une première version au périmètre bien défini.",
      },
      {
        title: "Design de produit",
        detail: "Des prototypes cliquables testés avec de vrais utilisateurs avant le début du développement.",
      },
      {
        title: "Ingénierie full-stack",
        detail: "TypeScript, React, Node.js et PostgreSQL, avec des tests automatisés dès le premier sprint.",
      },
      {
        title: "Intégrations",
        detail: "Connexions à votre CRM, votre ERP, votre fournisseur de paiement ou vos API internes.",
      },
      {
        title: "Authentification et rôles",
        detail: "Authentification unique, permissions détaillées et journaux d'audit lorsque votre entreprise l'exige.",
      },
      {
        title: "Infrastructure",
        detail:
          "Déployée dans votre propre compte infonuagique, avec déploiements automatisés, sauvegardes, surveillance et alertes.",
      },
    ],
    approach: [
      "Nous livrons tôt une première version ciblée, généralement en huit à douze semaines, puis nous l'enrichissons selon l'usage réel. C'est le moyen le plus fiable que nous connaissions d'éviter de développer des fonctionnalités dont personne n'a besoin.",
      "Toutes les deux semaines, vous voyez un logiciel qui fonctionne, pas des rapports d'étape. Le code vous appartient et il est écrit pour que votre propre équipe, ou un autre fournisseur, puisse l'entretenir.",
    ],
    engagement: [
      { label: "Première version", value: "8 à 12 semaines" },
      { label: "Équipe", value: "Responsable produit, designer et 2 à 4 ingénieurs" },
      {
        label: "Après la mise en ligne",
        value: "Développement continu ou soutien géré",
      },
    ],
    faqs: [
      {
        question: "Reprenez-vous des applications existantes?",
        answer:
          "Souvent. Nous commençons par examiner le code et l'infrastructure, réglons les urgences, puis convenons d'un plan pour le reste.",
      },
      {
        question: "À qui appartient le code?",
        answer:
          "À vous, dès le premier commit. Les dépôts et les comptes infonuagiques sont créés au nom de votre organisation.",
      },
      {
        question: "Comment gérez-vous les changements de périmètre?",
        answer:
          "Nous planifions par cycles de deux semaines, donc les priorités peuvent évoluer à mesure que vous apprenez. Les changements importants sont estimés et approuvés avant le début des travaux.",
      },
    ],
  },
  "ai-solutions": {
    name: "Solutions d'IA",
    summary: "Des assistants et outils d'IA qui font gagner du temps à votre équipe, fondés sur vos propres données.",
    seoTitle: "Services de développement et d'intégration d'IA",
    metaDescription:
      "Développement et intégration d'IA pour les entreprises : assistants de connaissances, traitement de documents et fonctionnalités d'IA, avec une précision mesurée et des contrôles de confidentialité.",
    headline: "L'IA est plus utile quand elle vise un problème précis et mesurable.",
    intro:
      "Nous aidons les entreprises à tirer parti des grands modèles de langage là où ils font une différence mesurable : répondre aux questions à partir de documents internes, rédiger des réponses courantes, extraire des données et ajouter des fonctionnalités d'IA à des produits existants. Et nous sommes tout aussi francs quand l'IA n'est pas le bon outil.",
    plain:
      "Des outils qui lisent, écrivent et répondent à des questions pour vous, comme un assistant qui connaît les documents de votre entreprise ou un logiciel qui extrait automatiquement les données de vos factures.",
    stack: [
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "Llama",
      "Python",
      "LangChain",
      "pgvector",
      "Azure AI",
      "Node.js",
      "Chaînes d'évaluation",
    ],
    included: [
      {
        title: "Évaluation des occasions",
        detail:
          "Un bref examen des tâches où l'IA ferait gagner du temps ou réduirait les erreurs, classées par valeur et par risque.",
      },
      {
        title: "Assistants de connaissances",
        detail: "Recherche et réponses sur vos documents, avec les sources citées dans chaque réponse.",
      },
      {
        title: "Traitement de documents",
        detail:
          "Données structurées extraites de factures, de contrats, de formulaires et de courriels, à grande échelle.",
      },
      {
        title: "Fonctionnalités de produit",
        detail: "Résumés, recommandations et outils de rédaction intégrés à votre application existante.",
      },
      {
        title: "Évaluation",
        detail:
          "Des jeux de tests construits à partir de vos cas réels, pour mesurer la précision plutôt que la supposer.",
      },
      {
        title: "Confidentialité et contrôles",
        detail: "Traitement des données, contrôles d'accès et choix de modèles conformes à vos exigences.",
      },
    ],
    approach: [
      "Chaque projet d'IA commence par des questions mesurables. Combien de temps la tâche prend-elle aujourd'hui? À quelle fréquence y a-t-il des erreurs? Qu'est-ce qui serait suffisant? Les réponses nous donnent une référence à laquelle comparer les résultats avant toute mise en production.",
      "Nous travaillons avec les grands fournisseurs de modèles comme avec des modèles à poids ouverts, et nous choisissons selon la précision, le coût et l'endroit où vos données peuvent aller, pas selon la nouveauté.",
    ],
    engagement: [
      { label: "Évaluation", value: "2 à 3 semaines" },
      { label: "Projet pilote", value: "4 à 8 semaines" },
      { label: "Après la mise en ligne", value: "Surveillance, évaluation et ajustements" },
    ],
    faqs: [
      {
        question: "Nos données servent-elles à entraîner des modèles d'IA?",
        answer:
          "Non. Nous utilisons des ententes d'API pour entreprises qui excluent vos données de l'entraînement, ou des modèles hébergés chez vous lorsque vos exigences le demandent.",
      },
      {
        question: "Et si l'IA se trompe?",
        answer:
          "Nous le prévoyons. Les réponses citent leurs sources, les résultats peu fiables sont confiés à une personne et la précision est suivie en continu après la mise en ligne.",
      },
      {
        question: "Faut-il beaucoup de données pour commencer?",
        answer:
          "Généralement non. La plupart des applications utiles fonctionnent avec les documents et les dossiers que vous avez déjà.",
      },
    ],
  },
  automation: {
    name: "Automatisation",
    summary: "Vos logiciels échangent l'information automatiquement, et votre équipe cesse les tâches répétitives.",
    seoTitle: "Automatisation et intégration des processus d'affaires",
    metaDescription:
      "Automatisation des processus et intégration de systèmes qui éliminent la saisie manuelle, accélèrent les approbations et relient votre CRM, votre comptabilité et vos outils opérationnels.",
    headline: "Votre équipe ne devrait pas servir de lien entre vos systèmes.",
    intro:
      "Copier des données d'un outil à l'autre, relancer les approbations et monter le même rapport chaque lundi finit par coûter des heures chaque semaine. Nous cartographions ces processus, automatisons les parties prévisibles et rendons les exceptions visibles pour les personnes qui doivent les traiter.",
    plain:
      "Vos logiciels se transmettent l'information automatiquement, et votre équipe cesse de copier des données, de relancer les approbations et de préparer les mêmes rapports à la main.",
    stack: [
      "n8n",
      "Make",
      "Zapier",
      "Node.js",
      "Python",
      "API REST",
      "Webhooks",
      "Salesforce",
      "HubSpot",
      "NetSuite",
      "QuickBooks",
      "Microsoft 365",
    ],
    included: [
      {
        title: "Cartographie des processus",
        detail: "Comment le travail circule aujourd'hui, où il bloque et ce que cela coûte.",
      },
      {
        title: "Intégration de systèmes",
        detail:
          "Des connexions fiables entre votre CRM, votre comptabilité, vos opérations et vos outils de communication.",
      },
      {
        title: "Automatisation des flux",
        detail: "Approbations, notifications, transferts et tâches planifiées qui s'exécutent sans supervision.",
      },
      {
        title: "Rapports",
        detail: "Rapports planifiés et tableaux de bord en direct, alimentés par vos systèmes de référence.",
      },
      {
        title: "Gestion des erreurs",
        detail:
          "Nouvelles tentatives, alertes et journaux clairs, pour détecter les problèmes avant qu'ils touchent vos clients.",
      },
      {
        title: "Documentation",
        detail: "Des procédures en langage clair que votre équipe des opérations peut suivre de façon autonome.",
      },
    ],
    approach: [
      "Nous automatisons d'abord les parties stables et bien comprises d'un processus, et laissons les décisions de jugement aux personnes. Les premiers projets restent ainsi modestes, les risques plus faibles et les résultats visibles en quelques semaines.",
      "Quand une plateforme sans code convient, nous l'utilisons. Quand le volume, la fiabilité ou la sécurité en demandent davantage, nous développons des services sur mesure et les surveillons comme n'importe quel système en production.",
    ],
    engagement: [
      { label: "Projet habituel", value: "3 à 8 semaines" },
      { label: "Équipe", value: "Responsable des solutions et 1 à 2 ingénieurs" },
      { label: "Après la mise en ligne", value: "Surveillance et demandes de modification" },
    ],
    faqs: [
      {
        question: "Avec quels outils vous intégrez-vous?",
        answer:
          "Avec la plupart des logiciels d'entreprise dotés d'une API, dont Salesforce, HubSpot, NetSuite, QuickBooks, Shopify, Slack, Microsoft 365 et Google Workspace.",
      },
      {
        question: "Que se passe-t-il quand une automatisation échoue?",
        answer:
          "Les échecs sont relancés automatiquement lorsque c'est sans risque. Tout ce qui nécessite une personne déclenche une alerte avec assez de contexte pour régler le problème.",
      },
    ],
  },
  "web-optimization": {
    name: "Optimisation web",
    summary: "Des sites plus rapides qui retiennent les visiteurs et se classent mieux dans Google.",
    seoTitle: "Optimisation de la vitesse et des performances web",
    metaDescription:
      "Optimisation des performances web fondée sur les données de vrais visiteurs : chargement plus rapide, meilleurs Core Web Vitals et scores Lighthouse, et une surveillance pour les maintenir.",
    headline: "La vitesse est la première chose que vos clients remarquent.",
    intro:
      "Les pages lentes vous coûtent des conversions et de la visibilité dans les moteurs de recherche. Nous utilisons les données de vrais visiteurs pour trouver exactement ce qui ralentit votre site, corrigeons les causes dans votre code et mettons en place une surveillance pour que les performances ne se dégradent pas de nouveau en silence.",
    plain:
      "Nous accélérons le chargement de votre site, surtout sur mobile. Des pages rapides retiennent les visiteurs et vous aident à mieux vous classer dans Google.",
    stack: [
      "Lighthouse",
      "Core Web Vitals",
      "Chrome DevTools",
      "WebPageTest",
      "Next.js",
      "Optimisation des images (AVIF, WebP)",
      "Cloudflare",
      "Mise en cache CDN",
      "Sentry",
    ],
    included: [
      {
        title: "Audit de performance",
        detail: "Analyse terrain et laboratoire des Core Web Vitals sur vos principaux gabarits de page et appareils.",
      },
      {
        title: "Performance de chargement",
        detail:
          "Ressources bloquant l'affichage, temps de réponse du serveur et autres correctifs qui améliorent le LCP.",
      },
      {
        title: "Réactivité",
        detail: "Moins de JavaScript et moins de tâches longues, pour une meilleure Interaction to Next Paint.",
      },
      {
        title: "Images et médias",
        detail: "Formats modernes, tailles adaptatives et chargement différé, bien configurés.",
      },
      {
        title: "Mise en cache et diffusion",
        detail: "Configuration du CDN, en-têtes de cache et rendu en périphérie (edge) lorsque c'est utile.",
      },
      {
        title: "Surveillance",
        detail: "Surveillance des utilisateurs réels et budgets de performance vérifiés avant chaque déploiement.",
      },
    ],
    approach: [
      "Nous mesurons d'abord. Les scores Lighthouse sont utiles, mais les Core Web Vitals qui influencent le classement proviennent de vos vrais visiteurs : ce sont ces données que nous priorisons.",
      "Les correctifs sont livrés comme des modifications de code normales dans votre dépôt, revus avec votre équipe et vérifiés avec les données de production une fois en ligne.",
    ],
    engagement: [
      { label: "Audit", value: "1 à 2 semaines" },
      { label: "Mise en œuvre", value: "2 à 6 semaines" },
      { label: "Après la mise en ligne", value: "Revues de performance trimestrielles" },
    ],
    faqs: [
      {
        question: "Pouvez-vous optimiser un site que vous n'avez pas développé?",
        answer:
          "Oui. La plupart de nos mandats d'optimisation portent sur des sites existants construits avec Next.js, WordPress, Shopify, Magento ou des technologies sur mesure.",
      },
      {
        question: "Garantissez-vous un score Lighthouse?",
        answer:
          "Nous ne garantissons pas de scores. Après l'audit, nous convenons de cibles précises et rendons compte de nos progrès par rapport à celles-ci.",
      },
    ],
  },
  seo: {
    name: "SEO",
    summary: "Aider Google à trouver, comprendre et classer votre site, pour que vos clients vous trouvent.",
    seoTitle: "Services de SEO technique",
    metaDescription:
      "SEO technique pour les sites d'entreprise : structure du site, indexation, métadonnées, données structurées et vitesse, mis en œuvre par des ingénieurs plutôt que listés dans un rapport.",
    headline: "Un bon SEO commence par un site facile à explorer et facile à comprendre.",
    intro:
      "Nous nous concentrons sur les fondations techniques de la recherche : la structure de votre site, sa vitesse de chargement, l'indexation de ses pages et la clarté avec laquelle votre contenu est décrit aux moteurs de recherche. C'est la partie du SEO la plus liée à la construction d'un site, et la plus souvent négligée.",
    plain:
      "Nous corrigeons les problèmes techniques qui empêchent Google de trouver et de comprendre votre site, pour que les bons clients puissent vous trouver.",
    stack: [
      "Google Search Console",
      "Google Analytics 4",
      "Schema.org",
      "Plans de site XML",
      "Screaming Frog",
      "Core Web Vitals",
      "Next.js",
      "WordPress",
    ],
    included: [
      {
        title: "Audit technique",
        detail: "Exploration, indexation, URL canoniques, redirections et contenu en double.",
      },
      {
        title: "Architecture du site",
        detail: "Structure des URL, liens internes et navigation qui reflètent la façon dont les gens cherchent.",
      },
      {
        title: "Métadonnées et données structurées",
        detail: "Titres, descriptions et balisage schema générés de façon cohérente à partir de votre contenu.",
      },
      {
        title: "Performance",
        detail:
          "Des améliorations des Core Web Vitals qui profitent à la fois au classement et à l'expérience utilisateur.",
      },
      {
        title: "Migrations",
        detail:
          "Planification et suivi des redirections pour protéger votre classement lors d'une refonte ou d'un changement de plateforme.",
      },
      {
        title: "Rapports",
        detail: "Rapports Search Console et analytiques axés sur le trafic qualifié.",
      },
    ],
    approach: [
      "Nous ne vendons pas de forfaits de liens et ne promettons pas la première page. Nous corrigeons ce qui empêche les moteurs de recherche de trouver, de comprendre et de faire confiance à votre site, et nous aidons votre équipe à publier du contenu qui répond à de vraies questions.",
      "Comme nous sommes des ingénieurs, nos recommandations viennent avec leur mise en œuvre, pas avec un tableur de problèmes à confier à quelqu'un d'autre.",
    ],
    engagement: [
      { label: "Audit", value: "2 semaines" },
      { label: "Mise en œuvre", value: "3 à 6 semaines" },
      { label: "Après la mise en ligne", value: "Rapports et conseils mensuels" },
    ],
    faqs: [
      {
        question: "Dans combien de temps verrons-nous des résultats?",
        answer:
          "Les correctifs techniques se font souvent sentir quelques semaines après l'exploration du site. Les gains de classement plus larges prennent généralement de trois à six mois.",
      },
      {
        question: "Rédigez-vous du contenu?",
        answer:
          "Nous fournissons la stratégie de contenu et les plans de rédaction, et travaillons avec vos rédacteurs ou vos partenaires de contenu pour la production.",
      },
    ],
  },
};
