import type { Audit, Snapshot } from "../en/audit";

/**
 * La page de l'audit des systèmes numériques et celle de l'aperçu gratuit : les deux gestes vers
 * lesquels tout le site mène. Les prix viennent de lib/pricing.ts et s'insèrent avec `{price}` et `{days}`.
 */
export const audit: Audit = {
  metaTitle: "Audit des systèmes numériques",
  metaDescription:
    "Un examen à portée fixe : carte des systèmes, constats appuyés de preuves et plan chiffré. Frais crédités en totalité à un projet signé dans les 60 jours.",
  eyebrow: "Audit des systèmes numériques",
  title: "Découvrez où vos systèmes vous coûtent du temps, des demandes et de l'argent.",
  lead: "Un examen à portée fixe de la façon dont votre site web, votre boîte courriel, vos outils et votre équipe fonctionnent ensemble. Vous recevez une carte des systèmes, des constats appuyés de preuves et un plan chiffré, que vous nous engagiez ou non par la suite.",

  priceTitle: "Prix",
  priceLabel: "{price}",
  priceDetail:
    "Votre place dans la fourchette dépend du nombre de systèmes et de canaux que nous examinons. Nous confirmons le prix avant de commencer.",
  creditTitle: "Crédité en totalité",
  creditBody:
    "Si vous signez un projet avec nous dans les {days} jours suivant l'audit, les frais de l'audit sont crédités en totalité sur celui-ci.",

  reviewTitle: "Ce que nous examinons",
  review: [
    {
      title: "Votre site web et la façon dont les demandes arrivent",
      detail: "Formulaires, téléphone, courriel et tout autre canal par lequel un client peut vous joindre.",
    },
    {
      title: "Ce qui arrive à une demande",
      detail: "Qui la voit, qui y répond et combien de temps cela prend.",
    },
    {
      title: "Les outils que votre équipe utilise",
      detail: "Ce que chacun contient, et où les gens ressaisissent les mêmes données.",
    },
    {
      title: "Ce que les clients demandent et qu'un portail pourrait régler",
      detail: "Les appels et les courriels qui reviennent, et l'information qui s'y rattache.",
    },
    {
      title: "Les éléments de base visibles publiquement",
      detail: "Vitesse, accessibilité et sécurité de votre site, vérifiées de l'extérieur.",
    },
  ],

  receiveTitle: "Ce que vous recevez",
  receive: [
    {
      title: "Une carte des systèmes",
      detail: "Un schéma de la façon dont vos outils se connectent aujourd'hui, et des endroits où l'information est ressaisie, retardée ou perdue.",
    },
    {
      title: "Des constats appuyés de preuves",
      detail: "Chaque constat montre ce que nous avons vu, où, et ce que cela vous coûte en temps ou en demandes manquées. Aucun constat sans preuve.",
    },
    {
      title: "Un plan chiffré",
      detail: "Des correctifs priorisés, chacun avec une phase à prix fixe. Vous choisissez ce qu'il faut faire d'abord, et qui le fait.",
    },
  ],
  mapCaption: "Une carte des systèmes montre où vos outils se connectent, et où ils ne se connectent pas.",

  timingTitle: "Échéancier",
  timingBody:
    "Nous planifions l'audit au moment de la réservation. Nous confirmons les dates exactes, et le prix dans la fourchette, avant de commencer, pour qu'il n'y ait pas de surprises.",

  stepsTitle: "Comment ça se passe",
  steps: [
    { title: "Vous envoyez le formulaire ci-dessous", detail: "Cinq courts champs. Vous recevez tout de suite un courriel de confirmation." },
    { title: "Une personne vous répond en moins d'une heure ouvrable", detail: "Nous confirmons ce que vous aimeriez corriger et répondons à vos premières questions." },
    { title: "Appel de découverte", detail: "Un court appel pour convenir de la portée et du prix." },
    { title: "Questionnaire", detail: "Après la réservation, nous envoyons les questions détaillées. Rien de long sur le site." },
    { title: "Examen", detail: "Nous passons vos systèmes en revue, avec des accès que vous contrôlez." },
    { title: "Présentation", detail: "Nous vous présentons la carte des systèmes, les constats et le plan chiffré." },
  ],

  formTitle: "Réservez votre audit",
  formLead: "Dites-nous ce que vous aimeriez corriger. Une personne vous répond en moins d'une heure ouvrable.",
  bookLabel: "Ou choisissez une heure maintenant",

  smallerTitle: "Vous préférez commencer plus petit?",
  smallerBody: "L'aperçu gratuit vous donne trois observations précises sur votre site web, sans frais.",

  faqTitle: "Questions sur l'audit",
  faqs: [
    {
      question: "Combien coûte l'audit?",
      answer:
        "{price}. Les frais dépendent du nombre de systèmes et de canaux examinés. Nous les confirmons avant de commencer et les créditons en totalité à un projet signé dans les {days} jours.",
    },
    {
      question: "Suis-je obligé de vous engager ensuite?",
      answer: "Non. Le plan est à vous. Vous pouvez le mettre en œuvre avec nous, avec quelqu'un d'autre ou par vous-même.",
    },
    {
      question: "De quels accès avez-vous besoin?",
      answer:
        "Seulement de ce que l'examen exige, et seulement dans la mesure où vous l'autorisez. Nous demandons un accès en lecture seule dans la mesure du possible et nous consignons ce qui nous a été donné.",
    },
    {
      question: "Qu'advient-il de ce que vous voyez?",
      answer:
        "Cela demeure confidentiel et n'est utilisé que pour votre audit. Nos normes de confidentialité et de sécurité décrivent la façon dont nous le traitons.",
    },
  ],

  /** Labels for the system map illustration on the audit page. */
  map: {
    title: "Une carte des systèmes : comment vos outils se connectent",
    sources: { title: "Les demandes arrivent", items: ["Formulaire du site", "Courriel", "Téléphone"] },
    core: {
      title: "Un système connecté",
      items: ["CRM", "Portail client", "Application d'exploitation"],
      foot: "Une seule source de vérité pour chaque donnée",
    },
    results: { title: "Tout le monde voit les mêmes faits", items: ["Votre équipe", "Vos clients", "Votre comptabilité"] },
  },
};

export const snapshot: Snapshot = {
  metaTitle: "Aperçu gratuit de votre site web",
  metaDescription:
    "Obtenez gratuitement trois observations précises sur votre site web, rédigées par une personne. La façon la moins engageante de voir comment nous pensons.",
  eyebrow: "Aperçu gratuit",
  title: "Trois observations précises sur votre site web. Gratuit.",
  lead: "Envoyez-nous votre adresse. Une personne regarde votre site et vous dit trois choses précises qui méritent d'être corrigées, et pourquoi.",

  whatTitle: "Ce que vous obtenez",
  what: [
    "Trois observations précises sur votre site, pas un rapport générique.",
    "Ce que chacune vous coûte, et quoi faire à ce sujet.",
    "Aucun engagement. Si un aperçu est tout ce qu'il vous faut, c'est parfait.",
  ],
  howTitle: "Comment ça se passe",
  how: [
    "Vous envoyez votre nom, votre courriel et l'adresse de votre site web.",
    "Vous recevez tout de suite un courriel de confirmation.",
    "Une personne vous répond en moins d'une heure ouvrable.",
    "Votre aperçu suit : trois observations, chacune avec ce qu'il faut faire.",
  ],
  formTitle: "Obtenez votre aperçu gratuit",
  formLead: "Quatre courts champs. Nous ne les utilisons que pour vous envoyer votre aperçu.",
  instantTitle: "Vous voulez des chiffres tout de suite?",
  instantBody: "Le test de vitesse instantané lance une analyse automatisée en moins d'une minute. L'aperçu, lui, est le regard d'une personne.",
  instantLink: "Lancer le test de vitesse instantané",
  auditTitle: "Prêt pour le portrait complet?",
  auditBody: "L'audit des systèmes numériques passe en revue votre site web, votre boîte courriel, vos outils et votre équipe ensemble.",
};
