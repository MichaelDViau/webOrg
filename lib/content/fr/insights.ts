import type { ArticleSlug, ArticleText } from "@/lib/insights";
import type { ArticlePage, InsightsPage } from "../en/insights";

/**
 * Des articles pratiques par secteur. Aucune statistique, aucun client ni résultat, sauf s'ils sont réels
 * et approuvés : ce sont des articles pratiques, pas des études de cas.
 */
export const articles: Record<ArticleSlug, ArticleText> = {
  "client-portal-for-property-managers": {
    title: "Ce que devrait contenir la première version d'un portail client pour gestionnaires immobiliers",
    seoTitle: "Portail client pour gestionnaires immobiliers",
    description:
      "Un portail client pour gestionnaires immobiliers doit d'abord répondre aux questions qui remplissent votre boîte courriel. Que mettre dans la première version.",
    topic: "Immobilier",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "Les bureaux de gestion immobilière répondent toute la journée aux mêmes questions. Où en est ma demande d'entretien? Mon relevé est-il prêt? Où est mon bail? Un portail peut répondre à la plupart d'entre elles. L'erreur, c'est d'essayer de répondre à toutes en même temps.",
      },
      { type: "h2", text: "Partir des questions, pas des fonctions" },
      {
        type: "p",
        text: "Avant que quiconque conçoive un écran, notez les trente derniers courriels et appels que votre bureau a reçus. Regroupez-les. Les groupes qui reviennent forment votre première version. Le reste peut attendre.",
      },
      { type: "h2", text: "Ce qu'il faut inclure dans la première version" },
      {
        type: "ul",
        items: [
          "Les demandes d'entretien : un seul endroit pour signaler un problème avec des photos, et un seul endroit pour voir qui s'en occupe.",
          "Les relevés des propriétaires : le dernier relevé et un court historique, sans PDF envoyé par courriel.",
          "Les documents : baux, avis et reçus que chaque personne a le droit de consulter.",
          "L'état : une étiquette claire sur chaque demande, comme nouvelle, attribuée, planifiée ou terminée.",
          "Une connexion qui ne montre à chaque personne que ses propres dossiers.",
        ],
      },
      { type: "h2", text: "Ce qu'il faut laisser de côté pour l'instant" },
      {
        type: "ul",
        items: [
          "Les paiements en ligne, tant que les bases ne fonctionnent pas et que votre logiciel de comptabilité n'est pas relié.",
          "La messagerie instantanée, si une demande avec un historique clair fait l'affaire.",
          "Les rapports personnalisés que personne n'a encore demandés.",
        ],
      },
      { type: "h2", text: "Le relier à ce que vous utilisez déjà" },
      {
        type: "p",
        text: "Un portail qui exige une deuxième copie de vos données sera toujours en retard. Vérifiez d'abord ce que permet votre logiciel de gestion immobilière : une API, des exportations, ou rien du tout. Cette réponse façonne tout le projet, et c'est pourquoi nous l'examinons pendant l'audit.",
      },
      { type: "h2", text: "Décider comment vous saurez que ça a fonctionné" },
      {
        type: "p",
        text: "Choisissez quelques chiffres avant de construire. Par exemple : les appels et courriels de suivi par semaine, le délai entre une nouvelle demande et l'attribution d'un fournisseur, et les heures consacrées aux relevés de fin de mois. Mesurez-les avant le portail, puis de nouveau après.",
      },
    ],
  },

  "document-intake-for-accounting-firms": {
    title: "Collecte de documents pour cabinets comptables : cessez de courir après les PDF par courriel",
    seoTitle: "Collecte de documents pour cabinets comptables",
    description:
      "Recueillir les documents de vos clients sans relances : une liste par client, un seul endroit pour téléverser et des rappels automatiques.",
    topic: "Comptabilité",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "Chaque période de pointe se ressemble. Le personnel envoie des rappels, les clients envoient des photos, et les documents arrivent par courriel, par texto et dans des dossiers partagés. Puis quelqu'un doit renommer et reclasser le tout avant que le vrai travail puisse commencer.",
      },
      { type: "h2", text: "Le problème, ce ne sont pas vos clients" },
      {
        type: "p",
        text: "Les clients ne sont pas négligents. Personne ne leur a dit exactement ce qui est nécessaire, où l'envoyer et ce qui manque encore. La collecte est un problème de conception, et un problème qu'on peut résoudre.",
      },
      { type: "h2", text: "Quatre éléments d'un bon processus de collecte" },
      {
        type: "ul",
        items: [
          "Une liste de vérification pour chaque client, qui indique ce qui est nécessaire et ce qui a été reçu.",
          "Un seul endroit pour téléverser, pour que les documents aboutissent dans le bon dossier et non dans une boîte courriel.",
          "Des rappels automatiques pour ce qui manque encore, dans la langue du client.",
          "Un tableau de bord pour le cabinet qui montre qui est prêt, qui attend et qui est en retard.",
        ],
      },
      { type: "h2", text: "Où l'IA peut aider, et où elle ne devrait pas décider" },
      {
        type: "p",
        text: "L'IA peut suggérer la nature d'un fichier numérisé, comme un relevé bancaire ou un reçu. Cela évite de la saisie. Elle ne devrait pas classer le document toute seule. Une personne confirme chaque suggestion, et le cabinet peut mesurer la fréquence des erreurs. L'IA rédige. Votre équipe approuve.",
      },
      { type: "h2", text: "Protéger les documents des clients" },
      {
        type: "p",
        text: "Les documents des clients sont sensibles. Stockez-les chiffrés, laissez chaque client voir seulement son propre dossier et gardez une trace de qui a consulté quoi. Décidez d'avance combien de temps vous les conservez.",
      },
      { type: "h2", text: "Mesurer avant et après" },
      {
        type: "p",
        text: "Suivez le nombre de jours entre la première demande et un dossier complet, les rappels que votre personnel envoie à la main et la proportion de clients dont le dossier est complet avant l'échéance. Ces trois chiffres vous disent si le nouveau processus fonctionne.",
      },
    ],
  },

  "measure-your-inquiry-response-time": {
    title: "Comment mesurer la rapidité avec laquelle votre équipe répond aux nouvelles demandes",
    seoTitle: "Mesurer votre délai de réponse aux nouvelles demandes",
    description:
      "Si un visiteur attend une journée pour obtenir une réponse, votre site web a échoué. Une façon simple de mesurer votre délai de réponse avant de l'améliorer.",
    topic: "Parcours des demandes",
    readMinutes: 4,
    body: [
      {
        type: "p",
        text: "Le parcours de vos demandes est la preuve de ce que vous vendez. Si un visiteur attend une journée pour obtenir une réponse, le site a échoué, aussi beau soit-il. Avant de changer quoi que ce soit, mesurez où vous en êtes.",
      },
      { type: "h2", text: "Repérer tous les endroits où arrivent les demandes" },
      {
        type: "p",
        text: "Dressez-en la liste : le formulaire de contact, l'adresse courriel générale, le téléphone, les messages directs, les recommandations et tout outil de clavardage. La plupart des entreprises découvrent qu'elles ont plus de canaux qu'elles ne le pensaient, et que personne ne vérifie certains d'entre eux tous les jours.",
      },
      { type: "h2", text: "Consigner deux heures pour chaque demande" },
      {
        type: "ul",
        items: [
          "L'heure à laquelle elle est arrivée.",
          "L'heure à laquelle une personne a répondu personnellement pour la première fois. Une confirmation automatique ne compte pas.",
        ],
      },
      {
        type: "p",
        text: "Une feuille de calcul partagée suffit pendant deux semaines. L'écart entre les deux heures est votre délai avant la première réponse.",
      },
      { type: "h2", text: "Regarder les plus lentes, pas seulement la moyenne" },
      {
        type: "p",
        text: "Une moyenne cache les demandes qui ont attendu des jours. Triez par les plus longs écarts et demandez-vous ce qui s'est passé pour chacune. C'est généralement l'une de trois choses : personne n'en était responsable, elle est arrivée par un canal que personne ne vérifie ou elle exigeait une information que personne n'avait.",
      },
      { type: "h2", text: "Prendre un engagement que vous pouvez tenir" },
      {
        type: "p",
        text: "Choisissez un délai de réponse que vous pouvez réellement respecter, comme une heure ouvrable, indiquez-le sur votre site et mesurez-vous par rapport à lui. Une confirmation automatique instantanée dit au visiteur que sa demande est arrivée. Une réponse personnelle dans le délai promis montre que quelqu'un s'en soucie.",
      },
      { type: "h2", text: "Puis améliorer, et mesurer de nouveau" },
      {
        type: "p",
        text: "Acheminez tous les canaux au même endroit, désignez qui est responsable des nouvelles demandes et retirez les étapes entre l'arrivée et la réponse. Mesurez de nouveau après quelques semaines. C'est exactement ce que nous faisons dans l'audit : nous mesurons votre délai de réponse avant et après.",
      },
    ],
  },
};

export const insightsPage: InsightsPage = {
  metaTitle: "Perspectives : logiciel, données et infonuagique",
  metaDescription:
    "Des articles pratiques sur les logiciels sur mesure, les portails clients, la collecte de documents et le suivi des demandes.",
  eyebrow: "Perspectives",
  title: "Des notes pratiques sur le logiciel, les données et l'infonuagique.",
  lead: "De courts articles pour les propriétaires d'entreprise et les gestionnaires de la technologie. Pas de battage, et pas de chiffres que nous ne pouvons pas appuyer.",
  readArticle: "Lire l'article",
  minutes: "{minutes} min de lecture",
  publishedOn: "Publié le {date}",
  topics: "Sujet",
};

export const articlePage: ArticlePage = {
  back: "Toutes les perspectives",
  related: "Connexe",
  relatedService: "Service connexe",
  relatedIndustry: "Secteur connexe",
  ctaTitle: "Vous voulez qu'on examine cela dans votre entreprise?",
  ctaLead: "Parlez-nous de votre situation. Nous vous dirons ce que nous ferions, et ce que cela implique.",
};
