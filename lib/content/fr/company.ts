import type { Audience, Belief, CompanyContent, ContentItem, EngagementModel, Faq } from "@/lib/company";
import { bookingHref, site } from "@/lib/site";

/** The four stages shown under "Our approach" on the homepage. */
const approachSteps: ContentItem[] = [
  {
    title: "Comprendre",
    detail:
      "Nous parlons aux personnes concernées, examinons ce qui existe déjà et convenons du problème à régler et de la façon de mesurer le succès.",
  },
  {
    title: "Planifier",
    detail:
      "Vous recevez par écrit la portée, l'échéancier et un prix fixe pour la première phase, sans mauvaise surprise par la suite.",
  },
  {
    title: "Construire",
    detail:
      "Le design et l'ingénierie avancent par cycles de deux semaines, avec un logiciel fonctionnel à examiner à la fin de chacun.",
  },
  {
    title: "Accompagner",
    detail:
      "Nous mettons en ligne, surveillons et continuons d'améliorer ce que nous avons construit, ou le remettons proprement à votre équipe.",
  },
];

/** How we work with clients. Shown on the homepage and the About page. */
const principles: ContentItem[] = [
  {
    title: "Des experts chevronnés sur chaque projet",
    detail:
      "Les personnes que vous rencontrez à la première conversation sont celles qui conçoivent et développent votre projet.",
  },
  {
    title: "Une portée honnête",
    detail:
      "Nous vous dirons quand quelque chose ne vaut pas la peine d'être construit, quand un outil plus simple suffit ou quand nous ne sommes pas le bon choix.",
  },
  {
    title: "Tout vous appartient",
    detail:
      "Le code, les maquettes, les comptes et les données sont à vous dès le premier jour. Aucune plateforme propriétaire, aucune dépendance.",
  },
  {
    title: "Conçu pour durer",
    detail: "Un logiciel testé, documenté et surveillé que votre équipe ou tout développeur compétent peut entretenir.",
  },
];

/** Our position on each part of the work. Shown on the About page. */
const beliefs: Belief[] = [
  {
    topic: "Technologie",
    title: "Le bon outil est souvent le plus simple qui fonctionne.",
    detail:
      "Nous préférons une technologie éprouvée et bien soutenue à la dernière nouveauté. Si un tableur, un produit existant ou une petite intégration règle le problème, nous vous le recommanderons, même si cela veut dire un plus petit mandat pour nous.",
  },
  {
    topic: "Développement",
    title: "Le code est un actif à long terme, et nous l'écrivons comme tel.",
    detail:
      "Les tests automatisés, la revue de code, la documentation et les déploiements reproductibles font partie de chaque projet, ce ne sont pas des options. L'objectif : un logiciel que votre équipe peut modifier en toute confiance longtemps après la mise en ligne.",
  },
  {
    topic: "Performance",
    title: "La vitesse fait partie du produit.",
    detail:
      "Chaque page et chaque écran ont un budget de performance dès le départ. Un logiciel rapide est plus facile à utiliser, se classe mieux dans les moteurs de recherche et coûte moins cher à exploiter.",
  },
  {
    topic: "Design",
    title: "Un bon design rend l'étape suivante évidente.",
    detail:
      "Nous concevons d'abord pour la clarté : un contenu clair, des interactions prévisibles et des interfaces accessibles qui fonctionnent pour tout le monde, sur tous les appareils.",
  },
  {
    topic: "Affaires",
    title: "Le succès se mesure à vos résultats, pas aux nôtres.",
    detail:
      "Avant de commencer, nous convenons de ce qui doit changer : moins de demandes de soutien, plus de clients potentiels qualifiés ou des heures économisées chaque semaine. Nous rendons ensuite compte de nos résultats par rapport à ces objectifs.",
  },
];

/** Short commitments shown under the homepage call to action. */
const promises: string[] = [
  "Première consultation gratuite",
  "Réponse en un jour ouvrable",
  "Prix fixe pour chaque phase",
  "Le code vous appartient à 100 %",
];

/** The kinds of organizations we work with. Shown on the homepage. */
const audiences: Audience[] = [
  {
    title: "Petites entreprises",
    detail:
      "Un site web professionnel qui attire des clients et des automatisations simples qui vous redonnent des heures chaque semaine. Des prix clairs, sans jargon.",
    examples: "Sites web, réservation en ligne, visibilité dans Google",
  },
  {
    title: "Startups",
    detail:
      "Présentez rapidement votre produit à vos clients avec une première version ciblée, bâtie sur une technologie qui suivra votre croissance.",
    examples: "MVP, produits SaaS, fonctionnalités d'IA",
  },
  {
    title: "Entreprises en croissance",
    detail:
      "Remplacez les tableurs et les outils disparates par des logiciels sur mesure et des intégrations adaptées à la façon dont votre équipe travaille.",
    examples: "Portails, tableaux de bord, automatisation",
  },
  {
    title: "Grandes entreprises et organisations",
    detail:
      "Une ingénierie de haut niveau, avec la sécurité, la documentation et les processus de révision qu'attendent vos équipes TI et de conformité.",
    examples: "Plateformes, programmes d'IA, performance",
  },
];

/** How clients can start working with us. Shown on the homepage. */
const engagementModels: EngagementModel[] = [
  {
    title: "Consultation gratuite",
    summary:
      "Un appel de 30 minutes sur vos objectifs. Vous repartez avec des conseils honnêtes, que vous fassiez affaire avec nous ou non.",
    points: [
      "Sans frais ni engagement",
      "Des prochaines étapes claires et un budget approximatif",
      "Des réponses franches sur vos besoins",
    ],
    cta: "Réservez un appel gratuit",
    href: bookingHref,
  },
  {
    title: "Projet à portée fixe",
    summary:
      "Un projet web, d'application, d'IA ou d'automatisation dont la portée, l'échéancier et le prix sont convenus pour chaque phase.",
    points: [
      "Une proposition écrite avant le début des travaux",
      "Des progrès visibles toutes les deux semaines",
      "Mise en ligne, formation et passation incluses",
    ],
    cta: "Contactez-nous",
    href: "/contact",
  },
  {
    title: "Soutien et croissance continus",
    summary:
      "Un forfait mensuel pour que votre site ou votre logiciel reste rapide, sécuritaire et en amélioration constante après la mise en ligne.",
    points: [
      "Mises à jour, corrections de bogues et correctifs de sécurité",
      "Surveillance et rapports mensuels",
      "De nouvelles fonctionnalités quand vous en avez besoin",
    ],
    cta: "Renseignez-vous sur le soutien",
    href: "/contact",
  },
];

/** Common questions answered on the homepage. */
const homeFaqs: Faq[] = [
  {
    question: "Combien coûte un projet?",
    answer:
      "Cela dépend de vos besoins. Chaque projet fait l'objet d'une soumission personnalisée : après une consultation gratuite, vous recevez une proposition à prix fixe pour la première phase, et vous connaissez donc le coût avant le début des travaux.",
  },
  {
    question: "Combien de temps cela prend-il?",
    answer:
      "La plupart des sites web sont mis en ligne en 8 à 14 semaines. La première version d'une application web est généralement livrée en 8 à 12 semaines, et les petits projets d'automatisation peuvent être en fonction en 3 à 8 semaines.",
  },
  {
    question: "Travaillez-vous avec les petites entreprises?",
    answer:
      "Oui. Nous travaillons avec des petites entreprises, des startups et de grandes organisations. Nous adaptons le projet à vos objectifs et à votre budget, et nous vous dirons quand une option plus simple et moins coûteuse suffit.",
  },
  {
    question: "Le site web ou le logiciel nous appartiendra-t-il?",
    answer:
      "Oui. Le code, les maquettes, les comptes et les données sont à vous dès le premier jour. Aucune plateforme propriétaire, rien qui vous lie à nous.",
  },
  {
    question: "L'IA convient-elle à mon entreprise?",
    answer:
      "Parfois. L'IA est efficace pour répondre à des questions à partir de documents, traiter les courriels courants et extraire des données de documents administratifs. Lors d'une consultation gratuite, nous vous dirons honnêtement si elle vous ferait gagner du temps ou de l'argent.",
  },
  {
    question: "Que se passe-t-il après la mise en ligne?",
    answer:
      "Nous formons votre équipe et remettons la documentation. Si vous souhaitez que nous restions impliqués, un forfait de soutien mensuel couvre les mises à jour, la sécurité, la surveillance et les améliorations.",
  },
  {
    question: "Pouvez-vous travailler avec notre site web ou notre logiciel actuel?",
    answer:
      "Oui. Nous améliorons, accélérons, intégrons et reprenons régulièrement des sites et des applications existants, y compris sur WordPress, Shopify et des systèmes sur mesure.",
  },
  {
    question: `Travaillez-vous seulement avec des clients au ${site.address.regionName}?`,
    answer: `Non. Nous sommes établis à ${site.address.locality} et travaillons avec des clients partout aux États-Unis, par vidéoconférence, par courriel et avec des outils de projet partagés.`,
  },
];

export const company: CompanyContent = {
  approachSteps,
  principles,
  beliefs,
  promises,
  audiences,
  engagementModels,
  homeFaqs,
};
