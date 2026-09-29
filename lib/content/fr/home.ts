import type { Home } from "../en/home";

/** La page d'accueil, en français du Québec : rédigée pour le Québec, pas traduite mot à mot. */
export const home: Home = {
  metaTitle: "{name} : les systèmes qui font tourner votre entreprise",
  metaDescription:
    "Nous concevons, construisons et exploitons des sites web, des portails clients, des logiciels internes et des automatisations pour les entreprises de services et d'exploitation. Commencez par un audit des systèmes numériques.",

  hero: {
    lead: "",
    block1: "Les systèmes",
    block2: "qui font tourner votre entreprise",
    tail: "",
    intro:
      "Nous concevons, construisons et exploitons des sites web, des portails clients, des logiciels internes et des automatisations pour les entreprises de services et d'exploitation établies. Une seule équipe responsable, du diagnostic à l'exploitation quotidienne, en français, en anglais et en espagnol.",
    facts: [
      "Commencez par un audit : {price}, crédité en totalité à un projet signé dans les {days} jours",
      "Une personne vous répond en moins d'une heure ouvrable",
      "Le code, les comptes et les domaines vous appartiennent",
    ],
    factsLabel: "En bref",
    map: {
      title: "Une carte des systèmes : comment vos outils se connectent",
      caption:
        "Voici le genre de carte que vous remet l'audit : d'où arrivent les demandes, à quoi elles se rattachent et qui peut les voir.",
      sources: { title: "Les demandes arrivent", items: ["Formulaire du site", "Courriel", "Téléphone"] },
      core: {
        title: "Un système connecté",
        items: ["CRM", "Portail client", "Application d'exploitation"],
        foot: "Une seule source de vérité pour chaque donnée",
      },
      results: { title: "Tout le monde voit les mêmes faits", items: ["Votre équipe", "Vos clients", "Votre comptabilité"] },
    },
  },

  problem: {
    eyebrow: "Le problème",
    title: "La plupart des entreprises n'ont pas besoin d'un autre site web. Elles ont besoin que leurs systèmes fonctionnent ensemble.",
    items: [
      "Les demandes arrivent par cinq canaux, et certaines restent sans réponse pendant des jours.",
      "Le personnel saisit les mêmes renseignements dans trois systèmes.",
      "Les clients appellent pour avoir des nouvelles.",
    ],
  },

  whatWeDo: {
    eyebrow: "Ce que nous faisons",
    title: "Diagnostiquer. Construire. Exploiter.",
    steps: [
      {
        title: "Diagnostiquer",
        detail: "Où le temps, les demandes et l'argent s'échappent, preuves à l'appui.",
      },
      {
        title: "Construire",
        detail: "Des systèmes connectés, sécuritaires et rapides.",
      },
      {
        title: "Exploiter",
        detail: "Surveillés, mis à jour et améliorés chaque mois, avec une personne responsable désignée.",
      },
    ],
  },

  whatWeBuild: {
    eyebrow: "Ce que nous construisons",
    title: "Cinq types de systèmes, chacun avec un rôle précis.",
    lead: "Chacun part d'un problème que vous pouvez nommer et aboutit à quelque chose que vous pouvez mesurer.",
    linkLabel: "Voir comment ça fonctionne",
    also: "Aussi offerts :",
    cards: [
      {
        title: "Sites web générateurs de revenus",
        detail: "Des sites qui transforment les visiteurs en demandes qualifiées, traitées rapidement.",
      },
      {
        title: "Portails pour clients et propriétaires",
        detail: "Un endroit sécurisé pour l'état d'avancement, les documents et les factures : vos clients cessent d'appeler.",
      },
      {
        title: "Applications d'exploitation et tableaux de bord",
        detail: "Votre processus dans un seul outil plutôt que dans cinq feuilles de calcul.",
      },
      {
        title: "Automatisation et intégrations",
        detail: "Le travail courant se fait tout seul, et vos outils partagent les mêmes données.",
      },
      {
        title: "IA avec révision humaine",
        detail: "L'IA rédige. Votre équipe approuve.",
      },
    ],
  },

  whoWeHelp: {
    eyebrow: "Qui nous aidons",
    title: "Conçu pour trois types d'entreprises.",
    lead: "Nous connaissons leurs problèmes quotidiens et les logiciels qu'elles utilisent.",
    linkLabel: "Voir la page du secteur",
  },

  whyUs: {
    eyebrow: "Pourquoi travailler avec nous",
    title: "Des preuves avant les promesses.",
    items: [
      {
        title: "Des preuves avant les propositions",
        detail: "L'audit montre où le temps et les demandes s'échappent. Vous voyez les preuves avant de payer pour une réalisation.",
      },
      {
        title: "Des phases à prix fixe",
        detail: "Chaque phase a une portée écrite et un prix. Pas d'heures sans limite.",
      },
      {
        title: "Tout vous appartient",
        detail: "Le code, les comptes et les domaines sont à vous, dès le premier jour.",
      },
      {
        title: "Des normes publiées",
        detail: "Sécurité, performance, accessibilité, IA et vie privée. Ce que nous faisons par défaut est écrit noir sur blanc.",
      },
      {
        title: "Trois langues, rédigées pour ceux qui les lisent",
        detail: "Français, anglais et espagnol, chacun écrit pour les personnes qui le lisent.",
      },
    ],
    standardsLink: "Lire les normes",
  },

  honest: {
    eyebrow: "En toute transparence",
    body: "Nous sommes une nouvelle entreprise, fondée en {year}. Plutôt qu'une longue liste de clients, voici des démos fonctionnelles de systèmes conçus pour les secteurs que nous servons, et les normes que suit chaque projet.",
    cta: "Voir les démos",
  },

  finalCta: {
    title: "Découvrez où vos systèmes vous coûtent cher.",
    lead: "L'audit se termine par un plan chiffré et priorisé. Les frais sont crédités en totalité si vous lancez un projet dans les {days} jours.",
  },
};
