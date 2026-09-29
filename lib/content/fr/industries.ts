import type { IndustrySlug, IndustryText } from "@/lib/industries";
import type { IndustriesPage } from "../en/industries";

/**
 * Les pages de secteurs montrent que nous comprenons leur monde : leurs problèmes quotidiens dans leurs
 * mots, les systèmes que nous construisons pour eux, les logiciels qu'ils utilisent et la démo pertinente.
 * Les noms de produits sont des exemples de logiciels auxquels nous pouvons nous connecter, jamais une
 * affirmation de partenariat ni de clientèle passée.
 */
export const industries: Record<IndustrySlug, IndustryText> = {
  property: {
    name: "Gestionnaires immobiliers et exploitants d'immeubles",
    short: "Immobilier et gestion d'immeubles",
    seoTitle: "Logiciels pour gestionnaires immobiliers et exploitants d'immeubles",
    metaDescription:
      "Portails pour propriétaires et locataires, suivi des demandes d'entretien et rapports pour les gestionnaires immobiliers et les exploitants d'immeubles. Reliés à votre logiciel de gestion immobilière.",
    headline: "Propriétaires et locataires obtiennent des réponses sans appeler votre bureau.",
    lead: "Pour les gestionnaires immobiliers, les propriétaires-bailleurs et les exploitants d'immeubles qui gèrent en même temps de nombreux logements, propriétaires et fournisseurs.",
    homeProblems: [
      "Les propriétaires demandent leurs relevés, et nous envoyons des PDF à la main.",
      "Les demandes d'entretien arrivent par texto, par courriel et par téléphone.",
      "Les baux sont dans un système, les bons de travail dans un autre.",
    ],
    problems: [
      {
        quote: "Les locataires textent, écrivent et appellent au sujet de la même demande d'entretien.",
        detail: "Les demandes sont consignées trois fois ou pas du tout, et personne ne sait qui s'en occupe.",
      },
      {
        quote: "Les propriétaires demandent leur relevé, et nous envoyons un PDF à la main.",
        detail: "La fin de mois devient une semaine d'exportations, de pièces jointes et de courriels de relance.",
      },
      {
        quote: "Les bons de travail sont dans un système, les baux dans un autre.",
        detail: "Le personnel saute d'un outil à l'autre pour répondre à une question simple.",
      },
      {
        quote: "Les documents d'emménagement et de renouvellement circulent par courriel.",
        detail: "Les signatures et les documents manquants apparaissent des jours après l'échéance.",
      },
    ],
    systems: [
      {
        title: "Portail pour propriétaires et locataires",
        detail: "Relevés, documents, demandes et état d'avancement au même endroit, chacun ne voyant que ce qui le concerne.",
      },
      {
        title: "Suivi des demandes d'entretien",
        detail: "Une demande est saisie une seule fois, attribuée à un fournisseur et suivie jusqu'à sa fermeture.",
      },
      {
        title: "Saisie des demandes de location et de renouvellement",
        detail: "Demandes et documents de renouvellement recueillis, vérifiés pour repérer ce qui manque et acheminés.",
      },
      {
        title: "Rapports aux propriétaires",
        detail: "Les chiffres du mois assemblés à partir de vos systèmes, prêts à être examinés.",
      },
    ],
    softwareIntro:
      "Nous nous connectons aux logiciels que vous utilisez déjà, par l'entremise de leur API, de leurs exportations ou d'un accès à leur base de données lorsqu'ils existent. Par exemple :",
    software: ["AppFolio", "Buildium", "Yardi", "Rent Manager", "QuickBooks", "Google Workspace", "Microsoft 365"],
    faqs: [
      {
        question: "Devons-nous remplacer notre logiciel de gestion immobilière?",
        answer:
          "Non. Le portail y lit les données et, si possible, y réécrit. L'audit confirme ce que permet votre logiciel.",
      },
      {
        question: "Propriétaires et locataires peuvent-ils l'utiliser sur leur téléphone?",
        answer: "Oui. Il fonctionne dans le navigateur, sur un téléphone ou un ordinateur, sans rien à installer.",
      },
    ],
  },

  accounting: {
    name: "Cabinets comptables et firmes de services professionnels",
    short: "Cabinets comptables et services professionnels",
    seoTitle: "Logiciels pour cabinets comptables et firmes de services professionnels",
    metaDescription:
      "Collecte de documents clients, suivi des mandats et tableaux de bord internes pour les cabinets comptables et les firmes de services professionnels. Cessez de courir après les documents par courriel.",
    headline: "Les documents des clients arrivent complets et à temps, sans relances.",
    lead: "Pour les cabinets comptables, les teneurs de livres et les cabinets professionnels qui passent la période de pointe à relancer leurs clients pour les mêmes documents manquants.",
    homeProblems: [
      "Nous relançons les clients pour les mêmes documents manquants à chaque saison.",
      "Les fichiers arrivent par courriel, par texto et dans des dossiers partagés.",
      "Personne ne voit d'un coup d'œil quels clients sont prêts.",
    ],
    problems: [
      {
        quote: "Nous relançons les clients pour les mêmes documents manquants à chaque saison.",
        detail: "Le personnel rédige à la main les mêmes courriels de rappel, client après client.",
      },
      {
        quote: "Les fichiers arrivent par courriel, par texto et dans trois dossiers partagés.",
        detail: "Quelqu'un doit renommer et reclasser chacun avant que le vrai travail commence.",
      },
      {
        quote: "Je ne vois pas quels clients sont prêts et lesquels sont en attente.",
        detail: "L'état des dossiers vit dans la tête des gens et dans une feuille de calcul à laquelle personne ne se fie.",
      },
      {
        quote: "Les clients demandent sans cesse où en est leur déclaration ou leur dossier.",
        detail: "Chaque question de suivi interrompt quelqu'un qui fait du travail facturable.",
      },
    ],
    systems: [
      {
        title: "Centre de collecte des documents clients",
        detail: "Une liste de vérification par client, un téléversement sécurisé et des rappels automatiques pour ce qui manque encore.",
      },
      {
        title: "Portail de suivi des mandats",
        detail: "Les clients voient où en est leur dossier sans avoir à appeler.",
      },
      {
        title: "Accueil des nouveaux clients",
        detail: "Renseignements sur le client et documents du mandat recueillis une seule fois, au même endroit.",
      },
      {
        title: "Tableau de bord interne de préparation",
        detail: "Qui est prêt, qui attend et qui est en retard, d'un coup d'œil.",
      },
    ],
    softwareIntro:
      "Nous nous connectons aux outils que votre cabinet utilise déjà, par l'entremise de leur API, de leurs exportations ou du courriel. Par exemple :",
    software: ["QuickBooks", "Xero", "Karbon", "TaxDome", "Canopy", "Microsoft 365", "Google Workspace"],
    faqs: [
      {
        question: "Comment protégez-vous les documents des clients?",
        answer:
          "Les documents sont stockés chiffrés, chaque client ne voit que les siens et les accès sont consignés. Le tout suit nos normes de sécurité et de confidentialité publiées.",
      },
      {
        question: "L'IA lit-elle les documents de nos clients?",
        answer:
          "Seulement si vous le voulez. Le cas échéant, l'IA propose une étiquette ou un résumé, et une personne de votre équipe l'approuve. Consultez notre politique sur l'IA pour les détails.",
      },
    ],
  },

  distribution: {
    name: "Distribution et commerce interentreprises (B2B)",
    short: "Distribution et commerce B2B",
    seoTitle: "Logiciels pour distributeurs et entreprises de commerce B2B",
    metaDescription:
      "Portails clients, saisie des demandes de prix et intégrations des commandes et des stocks pour les distributeurs et les entreprises de commerce B2B. Cessez de ressaisir les commandes.",
    headline: "Commandes, soumissions et questions des clients traitées sans ressaisie.",
    lead: "Pour les distributeurs, les grossistes et les entreprises de commerce dont les commandes et les demandes de prix arrivent par courriel et par téléphone.",
    homeProblems: [
      "Les clients envoient leurs commandes par courriel, et nous les ressaisissons.",
      "Les demandes de prix attendent la seule personne qui connaît les prix.",
      "Les clients appellent pour savoir où est leur commande.",
    ],
    problems: [
      {
        quote: "Les clients envoient leurs commandes par courriel, et nous les ressaisissons dans le système.",
        detail: "Chaque ligne ressaisie est une occasion d'erreur de quantité ou d'article oublié.",
      },
      {
        quote: "Les demandes de prix attendent la seule personne qui connaît les prix.",
        detail: "Quand cette personne est absente, les ventes ralentissent ou passent à un concurrent.",
      },
      {
        quote: "Les clients appellent pour savoir où est leur commande.",
        detail: "La réponse existe dans l'ERP, là où le client ne peut pas la voir.",
      },
      {
        quote: "Les niveaux de stock et les commandes ouvertes ne concordent pas d'un système à l'autre.",
        detail: "Les ventes promettent ce que l'entrepôt n'a pas.",
      },
    ],
    systems: [
      {
        title: "Portail client pour les commandes et l'état du compte",
        detail: "Les clients passent des commandes, consultent l'historique et vérifient l'état sans appeler.",
      },
      {
        title: "Saisie des demandes de prix",
        detail: "Une demande structurée qui parvient à la bonne personne avec tout ce qu'il lui faut.",
      },
      {
        title: "Synchronisation des commandes et des stocks",
        detail: "Votre ERP, votre commerce en ligne et votre comptabilité gardés à jour les uns par rapport aux autres.",
      },
      {
        title: "Tableaux de bord des ventes et des opérations",
        detail: "Soumissions ouvertes, commandes en retard et stocks dans une seule vue.",
      },
    ],
    softwareIntro:
      "Nous nous connectons à votre ERP, à votre comptabilité et à vos outils de vente, par l'entremise de leur API, de leurs exportations ou d'un accès à leur base de données lorsqu'ils existent. Par exemple :",
    software: ["NetSuite", "Sage", "Acumatica", "QuickBooks", "Odoo", "Shopify", "WooCommerce"],
    faqs: [
      {
        question: "Les clients peuvent-ils voir leurs propres prix?",
        answer:
          "Oui, si votre système contient des prix propres à chaque client et nous permet de les lire. Le portail ne montre à chaque client que ses prix et ses commandes.",
      },
      {
        question: "Devons-nous changer d'ERP?",
        answer: "Non. Nous construisons autour et nous le gardons comme source des commandes, des stocks et des prix.",
      },
    ],
  },
};

export const industriesPage: IndustriesPage = {
  metaTitle: "Secteurs : immobilier, comptabilité et distribution",
  metaDescription:
    "Des systèmes conçus pour les gestionnaires immobiliers et exploitants d'immeubles, les cabinets comptables et firmes de services professionnels, et les entreprises de distribution et de commerce B2B.",
  eyebrow: "Secteurs",
  title: "Nous connaissons leurs problèmes quotidiens et les logiciels qu'ils utilisent.",
  lead: "Trois secteurs, choisis parce que leurs problèmes se répètent et parce que nous pouvons vous montrer une démo pour chacun.",
  problemsLabel: "Problèmes typiques",
  linkLabel: "Voir la page du secteur",
  ctaTitle: "Votre entreprise ne figure pas sur cette liste?",
  ctaLead: "L'audit convient à toute entreprise de services ou d'exploitation établie. Dites-nous ce que vous aimeriez corriger.",
};
