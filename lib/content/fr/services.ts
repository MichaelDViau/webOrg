import type { ServiceSlug, ServiceText } from "@/lib/services";
import type { ServicesPage } from "../en/services";

/** Les pages de services suivent toutes la même structure, pour que les acheteurs puissent les comparer. */
export const services: Record<ServiceSlug, ServiceText> = {
  "revenue-websites": {
    name: "Sites web générateurs de revenus",
    card: "Des sites conçus pour transformer les visiteurs en demandes qualifiées, traitées rapidement.",
    seoTitle: "Sites web générateurs de revenus pour entreprises de services",
    metaDescription:
      "Des sites d'entreprise conçus pour une seule tâche : amener les bons visiteurs à demander de l'aide et leur répondre vite. Rapides, accessibles, en français, en anglais et en espagnol.",
    headline: "Un site web qui attire des demandes, pas seulement des visiteurs.",
    lead: "Nous concevons et construisons des sites d'entreprise autour d'une seule tâche : amener les bonnes personnes à demander de l'aide, et faire en sorte que quelqu'un réponde rapidement.",
    forWhom: "Pour les entreprises de services et d'exploitation dont le site web est le premier vendeur.",
    problemQuotes: [
      "Les gens visitent le site, mais peu nous écrivent.",
      "Notre site est correct, mais je ne sais pas ce qu'il nous rapporte.",
      "Les demandes arrivent dans une boîte courriel et attendent.",
    ],
    problemDetail:
      "La plupart des sites expliquent ce qu'est une entreprise. Un site générateur de revenus explique ce qui va changer pour le visiteur, indique ce qu'il en coûte pour commencer et relie chaque formulaire à une réponse rapide.",
    changes: [
      "Les visiteurs voient en dix secondes ce que vous faites, pour qui, et quoi faire ensuite.",
      "Chaque demande reçoit une confirmation instantanée et parvient à la bonne personne.",
      "Vous voyez les demandes par page et par langue, et vous savez ce qui fonctionne.",
      "Les pages se chargent vite sur téléphone et respectent les normes d'accessibilité.",
    ],
    included: [
      {
        title: "Contenu et structure",
        detail: "Des pages organisées autour des questions de votre acheteur, pas autour de votre organigramme.",
      },
      {
        title: "Conception et réalisation",
        detail: "Un site sobre, rapide et accessible que votre équipe peut modifier dans chaque langue nécessaire.",
      },
      {
        title: "Parcours des demandes",
        detail: "Des formulaires reliés à votre CRM, une confirmation instantanée et un acheminement vers la bonne personne.",
      },
      {
        title: "Mesure",
        detail: "Analytique et Search Console configurés, avec un suivi mensuel des demandes et des délais de réponse.",
      },
      {
        title: "Vérifications avant le lancement",
        detail: "Redirections, essais sur téléphone, vérifications du clavier et du contraste, formulaires testés dans chaque langue.",
      },
    ],
    phases: [
      {
        title: "Planifier",
        detail: "Arborescence, messages et parcours des demandes, convenus par écrit.",
      },
      {
        title: "Concevoir",
        detail: "Des maquettes et un système visuel que vous approuvez avec du vrai contenu.",
      },
      {
        title: "Construire à ciel ouvert",
        detail: "Un lien de préproduction dès la première semaine et un compte rendu écrit chaque semaine.",
      },
      {
        title: "Lancement et 90 jours de suivi",
        detail: "Nous mettons en ligne, puis nous surveillons et corrigeons tout ce qui survient pendant 90 jours.",
      },
    ],
    faqs: [
      {
        question: "Notre équipe peut-elle modifier le site?",
        answer:
          "Oui. Nous configurons la gestion du contenu pour que votre équipe modifie les pages, dans chaque langue, sans faire appel à un développeur.",
      },
      {
        question: "Refaites-vous le site ou améliorez-vous l'existant?",
        answer: "L'un ou l'autre. L'audit vous dit lequel coûte le moins cher pour ce dont vous avez besoin.",
      },
      {
        question: "Le site sera-t-il bien classé dans Google?",
        answer:
          "Nous construisons les bases techniques : structure, vitesse, métadonnées et données structurées. Nous ne promettons pas de classement et nous ne vendons pas de liens.",
      },
    ],
  },

  "client-portals": {
    name: "Portails pour clients et propriétaires",
    card: "Un endroit sécurisé pour l'état d'avancement, les documents et les factures : vos clients cessent d'appeler.",
    seoTitle: "Portails pour clients et propriétaires",
    metaDescription:
      "Des portails sécurisés où clients et propriétaires consultent leur dossier, leurs documents et leurs factures sans appeler votre bureau. Reliés aux logiciels que vous utilisez déjà.",
    headline: "Vos clients consultent leur propre dossier. Votre équipe cesse de répondre aux mêmes appels.",
    lead: "Nous construisons des portails sécurisés où clients, locataires ou propriétaires trouvent eux-mêmes leur état d'avancement, leurs documents et leurs factures.",
    forWhom: "Pour les entreprises dont les clients appellent ou écrivent sans cesse pour savoir où en sont les choses.",
    problemQuotes: [
      "Les clients appellent pour savoir où en sont les choses.",
      "Nous envoyons les mêmes documents par courriel, encore et encore.",
      "Les propriétaires veulent des rapports, et nous les préparons à la main.",
    ],
    problemDetail:
      "Chaque appel de suivi indique qu'une information existe quelque part où votre client ne peut pas la voir. Un portail met la bonne information devant la bonne personne, et devant personne d'autre.",
    changes: [
      "Les clients trouvent seuls l'état d'avancement, les documents et les factures.",
      "Votre équipe reçoit moins d'appels et de courriels de suivi.",
      "Chaque demande a un historique : qui a demandé, qui a répondu, quand.",
      "Chaque personne ne voit que ses propres renseignements.",
    ],
    included: [
      {
        title: "Connexion sécurisée et droits d'accès",
        detail: "Chaque client, propriétaire ou locataire ne voit que ses propres dossiers.",
      },
      {
        title: "État d'avancement et documents",
        detail: "Tableaux de bord, fichiers et relevés, mis à jour à partir de vos logiciels actuels.",
      },
      {
        title: "Demandes et messages",
        detail: "Un seul endroit pour poser une question, avec un historique clair de qui a répondu et quand.",
      },
      {
        title: "Connexion à vos logiciels",
        detail: "Facturation, gestion ou comptabilité, par l'entremise de leur API, de leurs exportations ou de leur base de données.",
      },
      {
        title: "Vue d'administration pour votre équipe",
        detail: "Tout dans une seule file, avec l'état et l'historique.",
      },
    ],
    phases: [
      {
        title: "Cerner ce que les clients demandent",
        detail: "Nous dressons la liste des questions qui remplissent votre boîte courriel et votre téléphone, et choisissons celles à traiter d'abord.",
      },
      {
        title: "Première version",
        detail: "Les quelques écrans qui répondent à la plupart des questions, testés avec de vrais utilisateurs.",
      },
      {
        title: "Évoluer avec l'usage",
        detail: "Nous ajoutons ce que les gens demandent, en phases à prix fixe.",
      },
      {
        title: "Lancement et 90 jours de suivi",
        detail: "Nous lançons, surveillons et corrigeons tout ce qui survient pendant 90 jours.",
      },
    ],
    faqs: [
      {
        question: "Comment protégez-vous les données des clients?",
        answer:
          "Chaque utilisateur ne voit que ses propres dossiers, la connexion utilise l'authentification multifacteur lorsque c'est approprié, et tout suit notre norme de sécurité publiée.",
      },
      {
        question: "Peut-il se connecter aux logiciels que nous utilisons déjà?",
        answer:
          "Souvent, oui, par l'entremise de leur API, de leurs exportations ou d'un accès à leur base de données. Nous vérifions ce qui est possible pendant l'audit, avant que vous vous engagiez.",
      },
      {
        question: "Les clients doivent-ils installer quelque chose?",
        answer: "Non. Il fonctionne dans le navigateur, sur un téléphone ou un ordinateur.",
      },
    ],
  },

  "operations-apps": {
    name: "Applications d'exploitation et tableaux de bord",
    card: "Votre processus dans un seul outil plutôt que dans cinq feuilles de calcul.",
    seoTitle: "Applications d'exploitation et tableaux de bord",
    metaDescription:
      "Des outils internes et des tableaux de bord qui remplacent les feuilles de calcul et les fils de courriels par un logiciel taillé sur mesure pour votre processus : votre équipe voit ce qui est en retard et ce qui vient ensuite.",
    headline: "Votre processus dans un seul outil, pas dans cinq feuilles de calcul.",
    lead: "Nous construisons des applications internes et des tableaux de bord à l'image de la façon dont votre équipe travaille vraiment, pour que tout le monde voie le même état d'avancement.",
    forWhom: "Pour les équipes qui gèrent leurs opérations avec des feuilles de calcul, des boîtes courriel partagées et leur mémoire.",
    problemQuotes: [
      "Le vrai processus vit dans une feuille de calcul que seule une personne comprend.",
      "Nous ne savons pas ce qui est en retard tant que quelqu'un ne nous le dit pas.",
      "Les rapports prennent une journée à préparer.",
    ],
    problemDetail:
      "Les feuilles de calcul sont un bon point de départ. Elles cessent de fonctionner quand plusieurs personnes en dépendent, et quand savoir ce qui est en retard exige une réunion.",
    changes: [
      "Un seul endroit pour voir le travail en cours et ce qui est en retard.",
      "Les mêmes renseignements sont saisis une seule fois.",
      "Les gestionnaires obtiennent des rapports sans avoir à les préparer.",
      "Les nouveaux employés apprennent un seul outil, pas une chaîne de fichiers.",
    ],
    included: [
      {
        title: "Cartographie du processus",
        detail: "Nous suivons le travail tel qu'il se fait vraiment, puis nous convenons de la façon dont il devrait se faire.",
      },
      {
        title: "L'application interne",
        detail: "Des écrans et des rôles conçus pour les tâches quotidiennes de votre équipe.",
      },
      {
        title: "Tableaux de bord",
        detail: "Ce qui est en cours, ce qui est en retard et ce qui vient ensuite, sans réunion.",
      },
      {
        title: "Importation des données",
        detail: "Vos feuilles de calcul actuelles importées, nettoyées et vérifiées.",
      },
      {
        title: "Formation et transfert",
        detail: "De courts guides et une séance de travail pour votre équipe.",
      },
    ],
    phases: [
      {
        title: "Cartographier le processus",
        detail: "Qui fait quoi, dans quel ordre, et où ça se bloque.",
      },
      {
        title: "Construire la plus petite version utile",
        detail: "La première version retire du vrai travail. Rien de plus.",
      },
      {
        title: "Améliorer avec l'usage",
        detail: "Nous ajustons selon les commentaires de votre équipe, en phases à prix fixe.",
      },
      {
        title: "Lancement et 90 jours de suivi",
        detail: "Nous lançons, surveillons et corrigeons tout ce qui survient pendant 90 jours.",
      },
    ],
    faqs: [
      {
        question: "Un logiciel du commerce ne coûte-t-il pas moins cher?",
        answer:
          "Parfois. Si un produit standard convient à votre processus, nous vous le dirons pendant l'audit et nous laisserons tomber la réalisation.",
      },
      {
        question: "À qui appartiennent les données et le code?",
        answer: "À vous. Les deux se trouvent dans des comptes au nom de votre entreprise.",
      },
      {
        question: "Pouvons-nous commencer petit?",
        answer: "Oui. La première phase est la plus petite version qui retire du vrai travail.",
      },
    ],
  },

  automation: {
    name: "Automatisation",
    card: "Le travail courant se fait tout seul, avec un journal lisible.",
    seoTitle: "Automatisation des processus d'affaires",
    metaDescription:
      "Des automatisations qui font circuler les données entre vos outils, envoient des rappels et acheminent les approbations, avec un journal de chaque étape pour retracer facilement les erreurs.",
    headline: "Le travail courant se fait tout seul, avec la trace de ce qui a été fait.",
    lead: "Nous automatisons les étapes prévisibles entre vos outils, pour que vos gens consacrent leur temps au travail qui exige du jugement.",
    forWhom: "Pour les équipes qui ressaisissent des données, relancent les approbations ou envoient les mêmes rappels à la main.",
    problemQuotes: [
      "Nous ressaisissons les mêmes renseignements dans trois systèmes.",
      "Les rappels dépendent de quelqu'un qui y pense.",
      "Les approbations restent coincées dans les boîtes courriel.",
    ],
    problemDetail:
      "Si une étape est prévisible, une machine devrait la faire. Si elle exige du jugement, une personne devrait la faire. Une bonne automatisation garde cette frontière claire et laisse une trace.",
    changes: [
      "Les données circulent entre vos outils sans ressaisie.",
      "Les rappels et les approbations se font à temps.",
      "Chaque étape automatisée est consignée : les erreurs se retracent facilement.",
      "Votre équipe garde les décisions qui demandent du jugement.",
    ],
    included: [
      {
        title: "Analyse du processus",
        detail: "Nous choisissons les étapes qui valent la peine d'être automatisées, et nous laissons les autres tranquilles.",
      },
      {
        title: "Flux de travail",
        detail: "Saisie, rappels, approbations et rapports qui s'exécutent sans que personne ne les déclenche.",
      },
      {
        title: "Gestion des erreurs et alertes",
        detail: "Quand quelque chose échoue, une personne désignée est avisée, et rien ne se perd en silence.",
      },
      {
        title: "Des journaux lisibles",
        detail: "Un relevé simple de ce qui s'est exécuté, quand, et avec quel résultat.",
      },
      {
        title: "Documentation",
        detail: "Ce que fait chaque automatisation et comment la modifier.",
      },
    ],
    phases: [
      {
        title: "Choisir le premier flux de travail",
        detail: "Celui qui coûte le plus de temps pour le moins de risques.",
      },
      {
        title: "Construire et tester",
        detail: "Nous le faisons fonctionner en parallèle du processus manuel avant de faire la bascule.",
      },
      {
        title: "Faire la bascule",
        detail: "L'automatisation prend le relais, alertes activées.",
      },
      {
        title: "Lancement et 90 jours de suivi",
        detail: "Nous surveillons et corrigeons tout ce qui survient pendant 90 jours.",
      },
    ],
    faqs: [
      {
        question: "Et si une automatisation fait une erreur?",
        answer:
          "Chaque exécution est consignée et les échecs avisent une personne désignée. Les étapes qui ont de vraies conséquences demandent d'abord l'approbation d'une personne.",
      },
      {
        question: "Quels outils pouvez-vous relier?",
        answer:
          "La plupart des logiciels d'affaires qui offrent une API, une exportation ou l'entrée et la sortie par courriel. Nous vérifions ce qui est possible pendant l'audit.",
      },
    ],
  },

  "ai-with-judgment": {
    name: "IA avec jugement",
    card: "L'IA rédige. Votre équipe approuve.",
    seoTitle: "IA avec révision humaine pour les opérations",
    metaDescription:
      "Une IA qui rédige, trie et résume pendant que votre équipe révise avant que quoi que ce soit n'atteigne un client. Testée sur vos propres exemples, avec vos données conservées dans vos comptes.",
    headline: "L'IA rédige. Votre équipe approuve.",
    lead: "Nous appliquons l'IA à des tâches précises et mesurables : lire des documents, rédiger des réponses, trier des demandes. Une personne révise le résultat avant qu'il n'atteigne un client.",
    forWhom: "Pour les équipes qui passent des heures à lire, à trier ou à rédiger, et qui veulent garder le contrôle.",
    problemQuotes: [
      "Le personnel passe des heures à lire des documents pour trouver une seule réponse.",
      "Les réponses aux courriels courants prennent trop de temps.",
      "L'IA nous intrigue, mais nous craignons les erreurs.",
    ],
    problemDetail:
      "L'IA est utile quand la tâche est claire, que le résultat peut être vérifié et qu'une personne prend la décision finale. Ce n'est pas le bon outil quand une simple règle suffit, et nous vous le dirons.",
    changes: [
      "Des ébauches et des résumés en quelques minutes, chacun révisé par une personne.",
      "Les réponses renvoient aux documents dont elles proviennent.",
      "Vous savez à quel point c'est précis, parce que nous le testons sur vos propres exemples.",
      "Vos données restent dans des comptes qui vous appartiennent.",
    ],
    included: [
      {
        title: "Choix du cas d'usage",
        detail: "Nous vérifions que l'IA est bel et bien le bon outil, et nous choisissons une tâche pour commencer.",
      },
      {
        title: "Un jeu de test tiré de vos exemples",
        detail: "De vraies questions et de vrais documents, avec des réponses vérifiées par votre équipe.",
      },
      {
        title: "Un prototype avec révision humaine",
        detail: "Chaque résultat attend l'approbation d'une personne avant d'aller où que ce soit.",
      },
      {
        title: "Contrôles d'accès et de confidentialité",
        detail: "Qui peut voir quoi, et où vos données sont traitées, conformément à notre politique sur l'IA.",
      },
      {
        title: "Suivi",
        detail: "Nous continuons de mesurer la précision après le lancement et nous vous avisons en cas de dérive.",
      },
    ],
    phases: [
      {
        title: "Choisir une tâche",
        detail: "Précise, mesurable et à faible risque.",
      },
      {
        title: "Tester sur vos exemples",
        detail: "Nous mesurons la précision avant que quiconque s'y fie.",
      },
      {
        title: "Projet pilote avec révision humaine",
        detail: "Un petit groupe l'utilise et révise chaque résultat.",
      },
      {
        title: "Lancement et 90 jours de suivi",
        detail: "Nous lançons, mesurons la précision et corrigeons les problèmes pendant 90 jours.",
      },
    ],
    faqs: [
      {
        question: "L'IA enverra-t-elle quelque chose à des clients sans révision?",
        answer:
          "Pas par défaut. Notre politique sur l'IA exige qu'une personne révise tout ce qui atteint un client, à moins que vous n'en décidiez autrement par écrit pour une tâche précise et à faible risque.",
      },
      {
        question: "Quels modèles d'IA utilisez-vous?",
        answer:
          "Nous choisissons selon la tâche, en fonction de la précision, du coût et de la confidentialité, et nous vous disons quel fournisseur traite quoi.",
      },
      {
        question: "Nos données servent-elles à entraîner des modèles d'IA?",
        answer:
          "Notre politique est de ne pas envoyer vos données à un fournisseur qui les utilise pour l'entraînement sans votre consentement écrit. La page sur la politique en matière d'IA donne les détails.",
      },
    ],
  },

  "integrations-and-data": {
    name: "Intégrations et données",
    card: "Vos outils partagent les mêmes données.",
    seoTitle: "Intégrations de logiciels et nettoyage de données",
    metaDescription:
      "Reliez votre CRM, votre comptabilité, vos logiciels de gestion et d'exploitation pour qu'ils partagent les mêmes données. Nous planifions, testons et surveillons chaque intégration et chaque migration.",
    headline: "Vos outils partagent les mêmes données.",
    lead: "Nous relions les logiciels que vous utilisez déjà, pour que chaque donnée vive à un seul endroit et que chaque système reste à jour.",
    forWhom: "Pour les entreprises dont les chiffres diffèrent selon le système consulté.",
    problemQuotes: [
      "Le chiffre du CRM ne correspond pas à celui de la comptabilité.",
      "Personne ne fait confiance au rapport.",
      "Passer à un nouveau système nous fait peur.",
    ],
    problemDetail:
      "Quand la même information vit à plusieurs endroits, quelqu'un la ressaisit et quelqu'un l'oublie. Les intégrations établissent quel système est la source de chaque donnée et gardent les autres à jour.",
    changes: [
      "Une seule source de vérité pour chaque type d'information.",
      "Les systèmes se mettent à jour entre eux automatiquement.",
      "Les rapports concordent, parce qu'ils lisent les mêmes données.",
      "Les migrations sont planifiées, testées et réversibles.",
    ],
    included: [
      {
        title: "Inventaire des systèmes et des données",
        detail: "Ce que vous utilisez, où vivent les données et ce qui dépend de quoi. Tout commence dans l'audit.",
      },
      {
        title: "Intégrations",
        detail: "Des connexions par API, webhooks ou synchronisation planifiée, avec surveillance.",
      },
      {
        title: "Nettoyage et migration des données",
        detail: "Les doublons repérés, les fiches corrigées et les déménagements répétés avant le vrai.",
      },
      {
        title: "Couche de rapports",
        detail: "Un seul jeu de chiffres auquel votre équipe peut se fier.",
      },
      {
        title: "Surveillance et alertes",
        detail: "Si une connexion tombe, une personne désignée le sait le jour même.",
      },
    ],
    phases: [
      {
        title: "Inventaire",
        detail: "Une carte de vos systèmes et des données qui circulent entre eux.",
      },
      {
        title: "Relier la paire la plus pénible",
        detail: "Les deux systèmes où la ressaisie coûte le plus cher.",
      },
      {
        title: "Étendre",
        detail: "Ajouter les connexions une à la fois, en phases à prix fixe.",
      },
      {
        title: "Lancement et 90 jours de suivi",
        detail: "Nous surveillons chaque connexion et corrigeons les problèmes pendant 90 jours.",
      },
    ],
    faqs: [
      {
        question: "Et si notre logiciel n'a pas d'API?",
        answer:
          "Il existe souvent d'autres voies : exportations, analyse de courriels ou accès à la base de données. Nous examinons les options pendant l'audit et nous vous disons franchement ce qui ne vaut pas la peine.",
      },
      {
        question: "Pouvez-vous nous faire migrer vers un nouveau logiciel?",
        answer:
          "Oui. Nous planifions le déménagement, le répétons sur une copie, vérifions les résultats avec votre équipe et gardons une porte de sortie jusqu'à ce que vous soyez certain.",
      },
    ],
  },

  "custom-software": {
    name: "Logiciels sur mesure",
    card: "Applications web, applications mobiles et API sur mesure, conçues selon le fonctionnement de votre organisation.",
    seoTitle: "Logiciels sur mesure : applications web, applications mobiles et API",
    metaDescription:
      "Applications web sur mesure, applications mobiles d'entreprise et API pour les entreprises établies et les grandes organisations. Phases à prix fixe, code qui vous appartient et compte rendu écrit chaque semaine.",
    headline: "Un logiciel conçu autour du fonctionnement de votre organisation.",
    lead: "Nous concevons et construisons des applications web sur mesure, des applications mobiles d'entreprise et les API qui les relient, pour les organisations dont les besoins dépassent ce qu'offre un logiciel du commerce.",
    forWhom: "Pour les entreprises établies et les grandes organisations qui ont besoin d'un logiciel qu'aucun produit standard n'offre.",
    problemQuotes: [
      "Les logiciels du commerce ne conviennent pas à notre processus.",
      "Nous avons dépassé les outils avec lesquels nous avons commencé.",
      "Nos systèmes ne se parlent pas, et chaque connexion est un cas unique.",
    ],
    problemDetail:
      "Un logiciel sur mesure vaut la peine quand votre processus est votre avantage, ou quand aucun produit ne fait le travail. Il n'en vaut pas la peine quand un outil standard suffirait. Nous vous disons dans quel cas vous êtes avant que vous vous engagiez.",
    changes: [
      "Le logiciel s'adapte à la façon dont vos équipes travaillent vraiment, et non l'inverse.",
      "Les applications web et mobiles partagent les mêmes règles d'affaires grâce à une API.",
      "D'autres systèmes peuvent se connecter au vôtre par des API documentées et sécurisées.",
      "Vous voyez l'avancement chaque semaine, et chaque version est testée.",
      "Le code vous appartient : tout développeur compétent peut prendre la relève.",
    ],
    included: [
      {
        title: "Définition de la portée",
        detail: "Les utilisateurs, les processus et une première version assez petite pour être bien construite, convenus par écrit.",
      },
      {
        title: "Applications web",
        detail: "Des applications dans le navigateur, avec rôles et droits d'accès, tableaux de bord et rapports.",
      },
      {
        title: "Applications mobiles",
        detail: "Des applications d'entreprise pour téléphones et tablettes, sur iOS et Android, ou une application web adaptée au mobile quand cela suffit.",
      },
      {
        title: "API et intégrations",
        detail: "Des interfaces documentées, versionnées et sécurisées, pour que d'autres systèmes puissent utiliser le vôtre.",
      },
      {
        title: "Tests et documentation",
        detail: "Des tests automatisés pour les parcours qui comptent, et de la documentation pour ceux qui assurent la maintenance.",
      },
      {
        title: "Transfert",
        detail: "Le code dans votre dépôt, vos comptes à votre nom, et une séance de travail pour votre équipe.",
      },
    ],
    phases: [
      {
        title: "Définir la portée",
        detail: "Qui l'utilise, ce qu'elle doit faire d'abord, et comment nous saurons qu'elle fonctionne.",
      },
      {
        title: "Conception et première version",
        detail: "Des maquettes cliquables testées avec de vrais utilisateurs, puis la plus petite version qui retire du vrai travail.",
      },
      {
        title: "Construire à ciel ouvert",
        detail: "Un lien de préproduction dès la première semaine et un compte rendu écrit chaque semaine.",
      },
      {
        title: "Lancement et 90 jours de suivi",
        detail: "Nous lançons, surveillons et corrigeons tout ce qui survient pendant 90 jours.",
      },
    ],
    faqs: [
      {
        question: "Construisez-vous des applications mobiles?",
        answer:
          "Oui : des applications d'entreprise pour iOS et Android, ou une application web adaptée au mobile quand elle répond au besoin. Nous recommandons l'option la plus simple quand elle fait le travail.",
      },
      {
        question: "Pouvez-vous construire une API pour un système que nous avons déjà?",
        answer:
          "Oui. Nous concevons une API documentée devant celui-ci, pour que de nouvelles applications et d'autres systèmes puissent l'utiliser en toute sécurité.",
      },
      {
        question: "À qui appartient le code?",
        answer: "À vous. Il se trouve dans un dépôt de votre organisation, et tout développeur compétent peut en assurer la maintenance.",
      },
    ],
  },

  "cloud-modernization": {
    name: "Modernisation infonuagique",
    card: "Faites migrer vos produits existants vers le nuage avec un plan, par étapes testées et réversibles.",
    seoTitle: "Modernisation infonuagique et migration vers Azure et AWS",
    metaDescription:
      "Évaluez, repensez et migrez des applications existantes vers Microsoft Azure ou Amazon Web Services, par étapes testées et réversibles. Phases à prix fixe et code qui vous appartient.",
    headline: "Faites migrer vos logiciels existants vers le nuage sans arrêter l'entreprise.",
    lead: "Nous évaluons, repensons et faisons migrer des produits existants vers les grandes plateformes infonuagiques, comme Microsoft Azure et Amazon Web Services, par étapes testées et réversibles.",
    forWhom: "Pour les organisations qui exploitent de vieux logiciels sur des serveurs qu'elles préféreraient ne plus entretenir.",
    problemQuotes: [
      "Notre logiciel tourne sur des serveurs que personne ne veut toucher.",
      "Une seule personne comprend comment il fonctionne.",
      "Une migration nous fait peur. Et si ça plantait?",
    ],
    problemDetail:
      "Un logiciel existant n'est pas un problème, jusqu'à ce qu'il en devienne un : un système qui n'est plus pris en charge, un expert qui part, un correctif de sécurité impossible à appliquer. Passer au nuage n'est pas toujours la réponse. Parfois, un changement plus modeste donne plus pour moins cher. L'évaluation le dit.",
    changes: [
      "Vous savez ce que vous exploitez, ce qui dépend de quoi et ce que cela coûte.",
      "Le passage se fait par petites étapes testées, chacune avec un retour en arrière possible.",
      "Les systèmes sont plus faciles à sécuriser, à mettre à jour et à faire évoluer.",
      "Les coûts infonuagiques sont visibles et maîtrisés.",
      "Votre équipe sait exploiter le résultat.",
    ],
    included: [
      {
        title: "Évaluation",
        detail: "Un inventaire des applications, des données et des dépendances, et des risques de chacune. Tout commence dans l'audit.",
      },
      {
        title: "Conception de la cible",
        detail: "L'architecture sur Azure ou AWS, avec sécurité, résilience et estimation des coûts.",
      },
      {
        title: "Refonte de l'architecture",
        detail: "Du déplacement tel quel à la refonte de certaines parties, seulement là où cela rapporte.",
      },
      {
        title: "Migration des données et des applications",
        detail: "Répétée d'abord sur une copie, avec un plan de bascule et un retour en arrière.",
      },
      {
        title: "Sécurité et accès",
        detail: "Identités, droits d'accès, sauvegardes et journalisation en place dès le départ.",
      },
      {
        title: "Contrôle des coûts et transfert",
        detail: "Budgets et alertes, ainsi que documentation et guides d'exploitation utilisables par votre équipe.",
      },
    ],
    phases: [
      {
        title: "Évaluer",
        detail: "Ce que vous exploitez, ce dont cela dépend et ce qui doit migrer, rester ou être retiré.",
      },
      {
        title: "Concevoir la cible",
        detail: "L'architecture, le modèle de sécurité et les coûts, convenus par écrit.",
      },
      {
        title: "Migrer par étapes",
        detail: "Une charge de travail à la fois, chacune répétée, testée et réversible.",
      },
      {
        title: "Lancement et 90 jours de suivi",
        detail: "Nous surveillons le nouvel environnement et corrigeons tout ce qui survient pendant 90 jours.",
      },
    ],
    faqs: [
      {
        question: "Devons-nous tout faire migrer?",
        answer:
          "Pas nécessairement. L'évaluation distingue ce qui gagne à être dans le nuage de ce qui doit rester où c'est ou être retiré.",
      },
      {
        question: "Azure ou AWS?",
        answer:
          "Nous recommandons selon ce que vous utilisez déjà, les compétences de votre équipe et les coûts, et nous vous expliquons pourquoi. Nous pouvons travailler avec l'une ou l'autre.",
      },
      {
        question: "Et si la migration échoue?",
        answer:
          "Chaque étape est répétée sur une copie et dispose d'un plan de retour en arrière. Nous ne basculons pas avant que tout ait été démontré.",
      },
    ],
  },

  devops: {
    name: "DevOps et automatisation",
    card: "Des versions, des tests et des mises en production automatisés : le logiciel est livré souvent et en toute sécurité.",
    seoTitle: "DevOps : pipelines CI/CD et automatisation de l'ingénierie de la qualité",
    metaDescription:
      "Intégration continue, pipelines de déploiement et tests automatisés : votre équipe livre des logiciels souvent, en toute sécurité et avec la trace de chaque changement.",
    headline: "Livrez des changements souvent, et sachez qu'ils fonctionnent.",
    lead: "Nous mettons en place l'intégration continue, des pipelines de déploiement et des vérifications de qualité automatisées, pour que chaque changement soit construit, testé et livré de la même façon.",
    forWhom: "Pour les équipes d'ingénierie dont les mises en production sont lentes, manuelles ou stressantes.",
    problemQuotes: [
      "Chaque mise en production est un événement manuel et stressant.",
      "Nous trouvons les bogues après les clients.",
      "Une seule personne sait comment déployer.",
    ],
    problemDetail:
      "Les mises en production manuelles reposent sur la mémoire et la chance. Des pipelines automatisés rendent les mises en production banales, ce que vous voulez : les mêmes étapes et les mêmes vérifications chaque fois, avec la trace de chacune.",
    changes: [
      "Chaque changement est construit et testé automatiquement.",
      "Les mises en production suivent un seul parcours reproductible que tout membre de l'équipe peut lancer.",
      "Les problèmes sont détectés avant que les clients les voient.",
      "Vous voyez ce qui a changé, quand, et qui l'a approuvé.",
      "Une mauvaise version peut être annulée rapidement.",
    ],
    included: [
      {
        title: "Intégration continue",
        detail: "Des constructions et des tests automatisés à chaque changement.",
      },
      {
        title: "Pipelines de déploiement",
        detail: "Des mises en production reproductibles vers la préproduction et la production, avec des approbations là où vous en voulez.",
      },
      {
        title: "Automatisation de l'ingénierie de la qualité",
        detail: "Des tests unitaires, d'API et de bout en bout automatisés qui protègent les parcours les plus importants.",
      },
      {
        title: "Infrastructure en tant que code",
        detail: "Des environnements définis dans le code, pour pouvoir être reconstruits et révisés.",
      },
      {
        title: "Contrôles de sécurité dans le pipeline",
        detail: "Des analyses des dépendances vulnérables et des secrets exposés avant que quoi que ce soit ne soit livré.",
      },
      {
        title: "Surveillance, documentation et formation",
        detail: "Des alertes quand quelque chose plante, et des guides pour que votre équipe maîtrise le processus.",
      },
    ],
    phases: [
      {
        title: "Examiner le processus actuel",
        detail: "Comment le code passe aujourd'hui d'un ordinateur portable à la production, et où cela ralentit ou casse.",
      },
      {
        title: "Automatiser la construction et les tests",
        detail: "Chaque changement est construit et vérifié automatiquement.",
      },
      {
        title: "Automatiser le déploiement",
        detail: "Les mises en production passent par un seul pipeline, avec approbations et retour en arrière.",
      },
      {
        title: "Lancement et 90 jours de suivi",
        detail: "Nous surveillons les pipelines et corrigeons tout ce qui survient pendant 90 jours.",
      },
    ],
    faqs: [
      {
        question: "Devons-nous refaire notre logiciel?",
        answer:
          "Non. Nous ajoutons des pipelines et des tests autour de ce que vous avez, en commençant par les parcours les plus importants.",
      },
      {
        question: "Quels outils utilisez-vous?",
        answer:
          "Des outils courants que votre équipe peut conserver, comme GitHub Actions ou Azure DevOps. Nous choisissons selon l'endroit où se trouvent déjà votre code et votre nuage.",
      },
      {
        question: "Quelle quantité d'automatisation des tests est suffisante?",
        answer:
          "Assez pour protéger les parcours qui feraient le plus mal s'ils cassaient. Nous convenons d'abord de cette liste, puis nous l'étendons.",
      },
    ],
  },

  "strategy-design": {
    name: "Stratégie et conception",
    card: "Conception UX, stratégie de produit numérique et conseils techniques, avant de construire.",
    seoTitle: "Stratégie de produit numérique, conception UX et conseils techniques",
    metaDescription:
      "Conception de l'expérience utilisateur, stratégie de produit numérique et conseils techniques : décidez quoi construire, et comment, avant de dépenser pour le construire.",
    headline: "Décidez quoi construire avant de le construire.",
    lead: "Nous offrons de la conception de l'expérience utilisateur, de la stratégie de produit numérique et des conseils techniques, pour que vous investissiez dans les bonnes choses et les construisiez une seule fois.",
    forWhom: "Pour les équipes qui planifient un nouveau produit ou un grand changement et veulent d'abord des conseils clairs et indépendants.",
    problemQuotes: [
      "Nous ne savons pas quoi construire en premier.",
      "Nos utilisateurs trouvent le système actuel déroutant.",
      "Nous voulons un deuxième avis sur le plan technique.",
    ],
    problemDetail:
      "Le logiciel le plus coûteux est le mauvais logiciel. La stratégie et la conception coûtent peu comparées à la construction de la mauvaise chose, et elles donnent à votre équipe, et à tout développeur que vous choisirez, quelque chose de concret sur quoi s'appuyer.",
    changes: [
      "Les priorités sont claires et consignées par écrit.",
      "Les écrans sont testés avec de vrais utilisateurs avant le début du développement.",
      "L'approche technique est révisée et ses risques sont nommés.",
      "Vous obtenez une feuille de route avec des phases chiffrées.",
      "Les développeurs, les nôtres ou les vôtres, partent de conceptions et de décisions claires.",
    ],
    included: [
      {
        title: "Découverte",
        detail: "Des entrevues avec les utilisateurs et les parties prenantes, et un regard sur la façon dont le travail se fait vraiment.",
      },
      {
        title: "Stratégie de produit numérique",
        detail: "Objectifs, priorités, feuille de route et indicateurs qui montreront que ça a fonctionné.",
      },
      {
        title: "Recherche et conception UX",
        detail: "Parcours utilisateurs, esquisses et prototypes cliquables, testés avec de vrais utilisateurs.",
      },
      {
        title: "Un système de conception",
        detail: "Un ensemble cohérent de composants, pour que chaque écran ait le même aspect et le même fonctionnement.",
      },
      {
        title: "Conseils techniques",
        detail: "Examen de l'architecture, décisions de construction ou d'achat, choix de fournisseurs et risques, par écrit.",
      },
      {
        title: "Une feuille de route chiffrée",
        detail: "Des phases priorisées avec des prix, prêtes à être construites par nous ou par toute autre équipe.",
      },
    ],
    phases: [
      {
        title: "Découvrir",
        detail: "Qui sont les utilisateurs, ce dont ils ont besoin et ce qui les en empêche.",
      },
      {
        title: "Définir",
        detail: "Les objectifs, les priorités et l'approche technique, convenus par écrit.",
      },
      {
        title: "Concevoir et tester",
        detail: "Des prototypes testés avec de vrais utilisateurs, et ajustés avant que quoi que ce soit ne soit construit.",
      },
      {
        title: "Feuille de route et transfert",
        detail: "Une feuille de route chiffrée et des fichiers de conception qui vous appartiennent, prêts pour toute équipe.",
      },
    ],
    faqs: [
      {
        question: "Sommes-nous obligés de construire avec vous ensuite?",
        answer: "Non. La stratégie, les conceptions et la feuille de route sont à vous, pour toute équipe de votre choix.",
      },
      {
        question: "Pouvez-vous examiner un plan préparé par une autre firme?",
        answer:
          "Oui. Un examen de conseil technique porte sur l'architecture, les risques et l'estimation, et vous remet un avis écrit.",
      },
    ],
  },

  "managed-plans": {
    name: "Forfaits de gestion",
    card: "Une personne désignée est responsable de vos systèmes, chaque mois.",
    seoTitle: "Forfaits de suivi pour sites web et systèmes",
    metaDescription:
      "Un suivi mensuel de votre site web et de vos systèmes : surveillance, mises à jour, sauvegardes et petites améliorations, avec une personne responsable désignée et un rapport mensuel.",
    headline: "Une personne désignée est responsable de vos systèmes, chaque mois.",
    lead: "Nous surveillons, mettons à jour et améliorons ce que nous avons construit, ou ce que vous avez déjà, avec un rapport mensuel de ce qui s'est passé.",
    forWhom: "Pour les entreprises dont les systèmes fonctionnent aujourd'hui et qui ont besoin de quelqu'un pour que ça continue.",
    problemQuotes: [
      "Notre site a été construit il y a des années et personne ne s'en occupe.",
      "Quand quelque chose plante, nous ne savons pas qui appeler.",
      "Les mises à jour sont reportées, et ça m'inquiète.",
    ],
    problemDetail:
      "Les systèmes ne restent pas immobiles. Les logiciels ont besoin de mises à jour, les certificats expirent et les petits problèmes grossissent. Avec un forfait de gestion, quelqu'un veille, et en répond.",
    changes: [
      "La disponibilité et les erreurs sont surveillées.",
      "Les mises à jour et les correctifs de sécurité sont appliqués rapidement.",
      "Les sauvegardes sont vérifiées.",
      "Une personne désignée intervient quand quelque chose plante.",
      "Vous recevez un rapport mensuel et quelques améliorations chaque mois.",
    ],
    included: [
      {
        title: "Surveillance",
        detail: "Disponibilité et erreurs surveillées, avec des alertes envoyées à une personne.",
      },
      {
        title: "Mises à jour et correctifs",
        detail: "Mises à jour des logiciels et correctifs de sécurité appliqués rapidement.",
      },
      {
        title: "Sauvegardes",
        detail: "Données et configuration sauvegardées, et vérifiées.",
      },
      {
        title: "Rapport mensuel",
        detail: "Demandes, vitesse, problèmes et ce que nous avons amélioré, en langage clair.",
      },
      {
        title: "Petites améliorations",
        detail: "Des changements convenus chaque mois, à partir du rapport.",
      },
    ],
    phases: [
      {
        title: "Prise en charge",
        detail: "Accès, inventaire et comptes au nom de votre entreprise.",
      },
      {
        title: "Stabiliser",
        detail: "Corriger d'abord ce qui est désuet ou fragile.",
      },
      {
        title: "Suivi mensuel",
        detail: "Surveillance, mises à jour et rapport écrit chaque mois.",
      },
      {
        title: "Bilan",
        detail: "Des rencontres régulières pour décider de la suite des améliorations.",
      },
    ],
    faqs: [
      {
        question: "Pouvez-vous prendre en charge un système que vous n'avez pas construit?",
        answer:
          "Souvent, oui. Nous commençons par un examen pour voir ce que nous prendrions en charge, et nous vous disons honnêtement si quelque chose doit d'abord être corrigé.",
      },
      {
        question: "Qui appeler quand quelque chose plante?",
        answer: "Une personne désignée, dont vous recevez les coordonnées au début.",
      },
    ],
  },
};

export const servicesPage: ServicesPage = {
  metaTitle: "Services : sites web, portails, applications, automatisation et IA",
  metaDescription:
    "Sites web générateurs de revenus, portails, applications d'exploitation, logiciels sur mesure, automatisation, IA avec révision humaine, intégrations, modernisation infonuagique, DevOps, stratégie et conception, et forfaits de gestion. Phases à prix fixe, à partir d'un audit des systèmes numériques.",
  eyebrow: "Services",
  title: "Onze services, organisés autour de votre problème.",
  lead: "Tout projet commence par l'audit. Il montre lesquels de ces services vous sont d'abord nécessaires, et combien ils coûtent.",
  from: "Prix",
  ctaTitle: "Vous ne savez pas lequel il vous faut?",
  ctaLead: "C'est à cela que sert l'audit. Il se termine par un plan chiffré et priorisé.",
  problemOf: "Ça vous dit quelque chose?",
  detailLabel: "Voir le service",
};
