import type { HowWeWork } from "../en/how-we-work";

/**
 * Notre façon de travailler : réduire le sentiment de risque. Audit, portée, phases à prix fixe,
 * réalisation à ciel ouvert (lien de préproduction, compte rendu écrit chaque semaine), contrôles de
 * qualité, lancement et 90 jours de suivi, puis un plan.
 */
export const howWeWork: HowWeWork = {
  metaTitle: "Notre façon de travailler",
  metaDescription:
    "Audit, portée, phases à prix fixe, réalisation à ciel ouvert avec un compte rendu écrit chaque semaine, contrôles de qualité et 90 jours de suivi après le lancement. Le code, les comptes et les domaines vous appartiennent.",
  eyebrow: "Notre façon de travailler",
  title: "Un processus clair, sans surprises.",
  lead: "Chaque projet suit le même parcours. À chaque étape, vous savez ce qui vient ensuite, ce que ça coûte et qui en est responsable.",

  stepsTitle: "Le parcours, du premier appel à l'exploitation quotidienne",
  step: "Étape {number}",
  youGet: "Vous obtenez",
  steps: [
    {
      title: "Audit",
      detail: "Nous examinons la façon dont votre site web, votre boîte courriel, vos outils et votre équipe fonctionnent ensemble, et nous trouvons où le temps et les demandes s'échappent.",
      youGet: "Une carte des systèmes, des constats appuyés de preuves et un plan chiffré.",
    },
    {
      title: "Portée",
      detail: "Nous transformons le plan en une portée écrite : ce qui est inclus, ce qui ne l'est pas et comment nous saurons que ça a fonctionné.",
      youGet: "Une portée que vous approuvez avant que quoi que ce soit ne soit construit.",
    },
    {
      title: "Phases à prix fixe",
      detail: "Chaque phase a ses propres livrables et son propre prix. Vous en approuvez une à la fois.",
      youGet: "Un prix fixe pour la prochaine phase, par écrit.",
    },
    {
      title: "Construire à ciel ouvert",
      detail: "Vous voyez le travail au fur et à mesure. Il n'y a rien à attendre à la fin.",
      youGet: "Un lien de préproduction dès la première semaine et un compte rendu écrit chaque semaine.",
    },
    {
      title: "Contrôles de qualité",
      detail: "Avant le lancement, le travail passe chaque fois les mêmes vérifications.",
      youGet: "Une liste de vérification : accessibilité, vitesse sur téléphone, sécurité, et formulaires testés de bout en bout dans chaque langue.",
    },
    {
      title: "Lancement et 90 jours de suivi",
      detail: "Nous mettons en ligne, puis nous surveillons. Pendant 90 jours, nous surveillons et corrigeons tout ce qui survient.",
      youGet: "Un lancement sur lequel vous pouvez compter, et une personne désignée à appeler.",
    },
    {
      title: "Plan",
      detail: "Ensuite, vous choisissez la suite : un forfait de gestion, la prochaine phase, ou le transfert à votre propre équipe.",
      youGet: "Une recommandation claire, et la liberté de dire non.",
    },
  ],

  ownershipTitle: "À qui appartient quoi",
  ownershipLead: "À vous. Voici comment nous en faisons une réalité concrète, et pas seulement une clause de contrat.",
  ownership: [
    {
      title: "Le code",
      detail: "Le code vit dans un dépôt de votre organisation, pas de la nôtre.",
    },
    {
      title: "Les comptes",
      detail: "Les comptes d'hébergement, de gestion de contenu, d'analytique et de courriel sont ouverts au nom de votre entreprise, protégés par l'authentification multifacteur.",
    },
    {
      title: "Les domaines",
      detail: "Votre domaine est enregistré à votre nom. Nous ne le détenons jamais pour vous.",
    },
    {
      title: "Les accès",
      detail: "Nous travaillons avec des accès nominatifs à vos comptes. Vous pouvez les retirer en tout temps.",
    },
  ],

  reviewerTitle: "Pour votre responsable TI ou votre conseiller",
  reviewerLead: "Les questions que pose un examinateur rigoureux, avec des réponses claires.",
  reviewerFaqs: [
    {
      question: "Que se passe-t-il si vous disparaissez?",
      answer:
        "Rien ne s'arrête. Le code, les comptes et les domaines sont déjà à vous, et la documentation est dans votre dépôt. Tout développeur compétent peut prendre la relève.",
    },
    {
      question: "Est-ce sécuritaire?",
      answer:
        "Nous suivons une norme de sécurité publiée : HTTPS partout, en-têtes de sécurité, aucun secret dans le code, disponibilité surveillée, sauvegardes et mises à jour rapides.",
    },
    {
      question: "Quelle technologie utilisez-vous?",
      answer:
        "Des outils courants et bien documentés, comme TypeScript, React et Next.js, PostgreSQL et un hébergement géré, choisis selon le projet pour que toute personne qualifiée puisse les maintenir.",
    },
    {
      question: "Qui a accès à nos données?",
      answer:
        "Seulement les personnes qui en ont besoin, par des comptes nominatifs, avec authentification multifacteur. Vous pouvez examiner et retirer les accès quand vous le voulez.",
    },
  ],
  standardsLink: "Lire toutes nos normes",

  neededTitle: "Ce dont nous avons besoin de vous",
  needed: [
    "Une personne en mesure de prendre des décisions.",
    "L'accès aux systèmes que nous examinons, à des conditions que vous contrôlez.",
    "Un court coup d'œil chaque semaine au compte rendu écrit.",
  ],
};
