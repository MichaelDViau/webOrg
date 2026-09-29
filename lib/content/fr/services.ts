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
    "Sites web générateurs de revenus, portails pour clients et propriétaires, applications d'exploitation, automatisation, IA avec révision humaine, intégrations et forfaits de gestion. Phases à prix fixe, à partir d'un audit des systèmes numériques.",
  eyebrow: "Services",
  title: "Sept services, organisés autour de votre problème.",
  lead: "Tout projet commence par l'audit. Il montre lesquels de ces services vous sont d'abord nécessaires, et combien ils coûtent.",
  from: "Prix",
  ctaTitle: "Vous ne savez pas lequel il vous faut?",
  ctaLead: "C'est à cela que sert l'audit. Il se termine par un plan chiffré et priorisé.",
  problemOf: "Ça vous dit quelque chose?",
  detailLabel: "Voir le service",
};
