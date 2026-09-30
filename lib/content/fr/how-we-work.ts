import type { HowWeWork } from "../en/how-we-work";

/**
 * Notre façon de travailler : cinq étapes flexibles (comprendre, planifier, concevoir, mettre en œuvre,
 * faire évoluer), les principes qui les entourent, qui possède quoi, et des réponses pour un examinateur
 * technique attentif. La démarche s'adapte à chaque projet : jamais une méthode rigide unique.
 */
export const howWeWork: HowWeWork = {
  metaTitle: "Notre façon de travailler : du défi à la solution",
  metaDescription:
    "Comment se déroule un projet : comprendre, planifier, concevoir, mettre en œuvre, évoluer. Compte rendu écrit chaque semaine et pleine propriété du code.",
  eyebrow: "Notre façon de travailler",
  title: "Du défi à la solution.",
  lead: "Chaque projet technologique est différent, alors notre démarche s'adapte au travail. La plupart des projets suivent cinq étapes. Voici ce qui se passe à chacune, et ce que vous obtenez.",

  stepsTitle: "Cinq étapes, adaptées à chaque projet",
  step: "Étape {number}",
  youGet: "Vous obtenez",
  steps: [
    {
      title: "Comprendre",
      detail: "Nous apprenons à connaître l'entreprise, ses défis et ses objectifs, ainsi que la technologie déjà en place.",
      points: [
        "Des conversations avec les personnes qui utilisent et exploitent les systèmes",
        "Un examen des logiciels, des données et de l'infrastructure existants",
        "Un énoncé clair du problème et de ce que signifie le succès",
      ],
      youGet: "Une compréhension commune et écrite du problème et des objectifs.",
    },
    {
      title: "Planifier",
      detail: "Nous déterminons la bonne approche technique, l'architecture et le plan pour la réaliser.",
      points: [
        "Des options comparées, avec les compromis expliqués simplement",
        "Une recommandation d'architecture et de technologie",
        "Un plan par phases avec la portée, l'échéancier et les coûts",
      ],
      youGet: "Une recommandation et un plan écrits que vous pouvez approuver, ou apporter ailleurs.",
    },
    {
      title: "Concevoir",
      detail: "Nous concevons et développons les logiciels, les applications, l'infrastructure ou les intégrations que le plan prévoit.",
      points: [
        "Conception et développement par incréments fonctionnels",
        "Un environnement de préproduction que vous pouvez ouvrir en tout temps",
        "Un court compte rendu écrit chaque semaine",
      ],
      youGet: "Un logiciel qui fonctionne tôt, et de la visibilité sur l'avancement du début à la fin.",
    },
    {
      title: "Mettre en œuvre",
      detail: "Nous déployons, intégrons et testons la solution pour qu'elle fonctionne dans votre environnement réel.",
      points: [
        "Intégration avec vos systèmes et vos données existants",
        "Des tests avant le lancement, y compris la sécurité et le rendement",
        "Un lancement planifié, avec un retour en arrière possible si quelque chose tourne mal",
      ],
      youGet: "Une solution en service, testée et intégrée à votre entreprise.",
    },
    {
      title: "Faire évoluer",
      detail: "Nous améliorons, optimisons, maintenons et adaptons la technologie à mesure que vos besoins changent.",
      points: [
        "Surveillance et correctifs après le lancement",
        "Mises à jour et améliorations à mesure que l'entreprise grandit",
        "De la documentation et une transition en douceur, si vous voulez que votre équipe prenne le relais",
      ],
      youGet: "Une technologie qui suit l'entreprise, et la liberté de choisir qui la maintient.",
    },
  ],

  flexibleTitle: "Un processus flexible, pas une méthode rigide",
  flexibleBody:
    "Nous ne faisons pas passer chaque projet par la même séquence. Un problème de rendement peut n'exiger que Comprendre et Concevoir. Une migration de plateforme demande les cinq étapes. Nous convenons des étapes qui conviennent avant de commencer.",
  principlesTitle: "Notre façon de travailler avec vous",
  principles: [
    {
      title: "Une personne désignée est responsable",
      detail: "Vous savez qui répond de votre projet, et comment la joindre.",
    },
    {
      title: "Un compte rendu écrit chaque semaine",
      detail: "Un court compte rendu écrit, pour que vous sachiez toujours où en sont les choses.",
    },
    {
      title: "Un travail à ciel ouvert",
      detail: "Un environnement de préproduction que vous pouvez ouvrir en tout temps, dès le début du projet.",
    },
    {
      title: "La portée convenue par écrit",
      detail: "La portée et le prix sont convenus par écrit avant chaque phase, et vous les approuvez d'abord.",
    },
  ],

  ownershipTitle: "Qui possède quoi",
  ownershipLead: "Vous. Voici comment nous en faisons une réalité, et pas seulement une clause de contrat.",
  ownership: [
    {
      title: "Le code",
      detail: "Le code se trouve dans un dépôt de votre organisation, pas de la nôtre.",
    },
    {
      title: "Les comptes",
      detail: "Les comptes d'hébergement, d'analyse et de courriel sont ouverts au nom de votre entreprise et protégés par une authentification multifacteur.",
    },
    {
      title: "Les domaines",
      detail: "Votre nom de domaine est enregistré à votre nom. Nous ne le détenons jamais pour vous.",
    },
    {
      title: "Les accès",
      detail: "Nous travaillons par des accès nominatifs à vos comptes. Vous pouvez les retirer à tout moment.",
    },
  ],

  reviewerTitle: "Pour votre équipe technique",
  reviewerLead: "Les questions que pose un examinateur attentif, avec des réponses claires.",
  reviewerFaqs: [
    {
      question: "Que se passe-t-il si vous disparaissez?",
      answer:
        "Rien ne s'arrête. Le code, les comptes et les domaines sont déjà à vous, et la documentation se trouve dans votre dépôt. Tout développeur compétent peut prendre le relais.",
    },
    {
      question: "Est-ce sécurisé?",
      answer:
        "Nous suivons une norme de sécurité publiée : HTTPS partout, en-têtes de sécurité, aucun secret dans le code, disponibilité surveillée, sauvegardes et mises à jour rapides.",
    },
    {
      question: "Quelles technologies utilisez-vous?",
      answer:
        "Des outils courants et bien documentés, choisis projet par projet, comme TypeScript, React, PostgreSQL et les grandes plateformes infonuagiques, pour que toute personne qualifiée puisse les maintenir.",
    },
    {
      question: "Qui a accès à nos données?",
      answer:
        "Seulement les personnes qui en ont besoin, par des comptes nominatifs et une authentification multifacteur. Vous pouvez examiner et retirer les accès quand vous le voulez.",
    },
  ],
  standardsLink: "Lire toutes nos normes d'ingénierie",

  neededTitle: "Ce dont nous avons besoin de vous",
  needed: [
    "Une personne en mesure de prendre des décisions.",
    "L'accès aux systèmes que nous examinons, selon des modalités que vous contrôlez.",
    "Un court coup d'œil hebdomadaire au compte rendu écrit.",
  ],
};
