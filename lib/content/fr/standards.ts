import type { StandardSlug, StandardText } from "@/lib/standards";
import type { StandardPage, StandardsPage } from "../en/standards";

/**
 * Normes publiées : ce que nous faisons par défaut, en langage clair, pour les acheteurs et leurs
 * examinateurs TI. Ce sont des engagements : confirmez que chacun correspond au manuel d'exploitation
 * avant le lancement.
 */
export const standards: Record<StandardSlug, StandardText> = {
  security: {
    name: "Sécurité",
    card: "HTTPS partout, aucun secret dans le code, surveillance, sauvegardes et mises à jour rapides.",
    seoTitle: "Norme de sécurité",
    metaDescription:
      "Comment nous sécurisons chaque projet par défaut : HTTPS partout, en-têtes de sécurité, protection des formulaires contre le pourriel, aucun secret dans le code, disponibilité surveillée, sauvegardes et mises à jour rapides.",
    headline: "La sécurité par défaut, en langage clair.",
    lead: "Voici ce que nous faisons sur chaque projet sans qu'on nous le demande, et comment vous pouvez le vérifier.",
    defaults: [
      {
        title: "HTTPS partout",
        detail: "Chaque page et chaque formulaire sont servis par une connexion chiffrée, et les navigateurs reçoivent l'instruction de l'exiger.",
      },
      {
        title: "En-têtes de sécurité",
        detail: "Des en-têtes qui limitent ce qu'une page peut charger et faire, pour qu'une erreur à un endroit ne se propage pas.",
      },
      {
        title: "Protection des formulaires contre le pourriel",
        detail: "Les formulaires sont protégés sans casse-tête pour vos visiteurs, et leur débit est limité pour contrer les abus.",
      },
      {
        title: "Aucun secret dans le code",
        detail: "Les mots de passe et les clés vivent dans des paramètres protégés et un gestionnaire de mots de passe, jamais dans le code.",
      },
      {
        title: "Disponibilité surveillée",
        detail: "Nous sommes alertés quand votre site ou votre système tombe, et une personne désignée intervient.",
      },
      {
        title: "Sauvegardes",
        detail: "Les données et la configuration sont sauvegardées, et la restauration à partir d'une sauvegarde est testée avant le lancement.",
      },
      {
        title: "Mises à jour appliquées rapidement",
        detail: "Les mises à jour des logiciels et des plateformes, ainsi que les correctifs de sécurité, sont appliqués sans tarder, pas remis à plus tard.",
      },
      {
        title: "Comptes à votre nom, avec authentification multifacteur",
        detail: "Les comptes d'hébergement, de domaine, de gestion de contenu et d'analytique appartiennent à votre entreprise et exigent l'authentification multifacteur.",
      },
    ],
    wontPromiseTitle: "Ce que nous ne promettons pas",
    wontPromise: [
      "Que rien ne tournera jamais mal. Personne ne peut le promettre.",
      "Des certifications que nous ne détenons pas. Si votre secteur en exige une, nous vous le dirons et vous aiderons à vous y préparer.",
    ],
    verifyTitle: "Comment vous pouvez vérifier",
    verify: [
      "Demandez à votre responsable TI d'inspecter les en-têtes de sécurité et la configuration HTTPS avec n'importe quel outil d'analyse public.",
      "Demandez à voir qui a accès à chaque compte. C'est une liste qui vous appartient.",
      "Pour signaler une vulnérabilité, écrivez-nous. Nous traitons chaque signalement avec sérieux et répondons rapidement.",
    ],
  },

  performance: {
    name: "Performance",
    card: "De bons Core Web Vitals pour les vrais visiteurs, jugés sur des données réelles.",
    seoTitle: "Norme de performance",
    metaDescription:
      "Comment nous construisons des sites rapides : cibles Core Web Vitals (LCP 2,5 s, INP 200 ms, CLS 0,1) jugées sur des données d'utilisateurs réels, images optimisées, peu de polices et un minimum de scripts tiers.",
    headline: "Rapide pour de vrais visiteurs, sur de vrais téléphones.",
    lead: "Un beau site lent contredit tout ce que nous vendons. Voici comment nous gardons le nôtre, et le vôtre, rapide.",
    defaults: [
      {
        title: "Les données réelles jugent. Les outils de laboratoire aident à déboguer.",
        detail: "Nous jugeons la vitesse selon ce que vivent les vrais visiteurs (données de terrain), et nous utilisons des outils de laboratoire pour trouver quoi corriger.",
      },
      {
        title: "Images optimisées",
        detail: "Des formats modernes, les bonnes dimensions pour chaque écran, et un chargement seulement au besoin.",
      },
      {
        title: "Peu de polices",
        detail: "Une seule police claire, chargée efficacement, pour que le texte s'affiche sans clignotement ni saut.",
      },
      {
        title: "Un minimum de scripts tiers",
        detail: "Chaque script externe ralentit chaque visiteur : chacun doit donc mériter sa place.",
      },
      {
        title: "Vérifié sur mobile",
        detail: "Nous testons d'abord sur téléphone, parce que c'est là que se trouve la majorité des visiteurs.",
      },
    ],
    targets: {
      title: "Ce que nous visons",
      intro:
        "Nous visons une note « bonne » aux Core Web Vitals au 75e centile des données d'utilisateurs réels, selon les seuils publiés par Google.",
      rows: [
        { label: "Largest Contentful Paint (LCP)", value: "2,5 secondes ou moins" },
        { label: "Interaction to Next Paint (INP)", value: "200 millisecondes ou moins" },
        { label: "Cumulative Layout Shift (CLS)", value: "0,1 ou moins" },
      ],
      note: "Source : web.dev, seuils des Core Web Vitals.",
    },
    wontPromiseTitle: "Ce que nous ne promettons pas",
    wontPromise: [
      "Une note garantie à un test de vitesse. Les notes varient selon l'outil, le jour et l'appareil.",
      "Des résultats avant l'existence de données réelles. Un nouveau site a besoin de visiteurs avant que des données de terrain existent.",
    ],
    verifyTitle: "Comment vous pouvez vérifier",
    verify: [
      "Consultez les Core Web Vitals dans Google Search Console, qui présente les données d'utilisateurs réels de votre site.",
      "Lancez le test de vitesse instantané sur ce site, ou sur le vôtre, pour voir un test en laboratoire sur un téléphone simulé.",
    ],
  },

  accessibility: {
    name: "Accessibilité",
    card: "WCAG 2.2 AA comme base, vérifiée par des outils et à la main.",
    seoTitle: "Norme d'accessibilité",
    metaDescription:
      "Notre base d'accessibilité est WCAG 2.2 AA : utilisation au clavier, focus visible, contraste, étiquettes, titres et texte de remplacement, testés avec un vérificateur automatisé et un passage manuel au clavier.",
    headline: "Utilisable par tous, sur n'importe quel appareil.",
    lead: "L'accessibilité n'est pas un ajout. Elle fait partie de la construction de quelque chose qui fonctionne.",
    defaults: [
      {
        title: "Utilisation au clavier",
        detail: "Tout est accessible et utilisable sans souris, dans un ordre logique.",
      },
      {
        title: "Focus visible",
        detail: "Vous voyez toujours où vous vous trouvez sur la page.",
      },
      {
        title: "Contraste",
        detail: "Le texte et les commandes se lisent facilement sur leur arrière-plan, dans les thèmes clair et sombre.",
      },
      {
        title: "Étiquettes",
        detail: "Chaque champ de formulaire a une étiquette claire et un message d'erreur utile.",
      },
      {
        title: "Titres et structure",
        detail: "Les pages ont un plan logique, pour que les utilisateurs de lecteurs d'écran s'y déplacent rapidement.",
      },
      {
        title: "Texte de remplacement",
        detail: "Les images porteuses de sens ont une description textuelle. Les images décoratives sont masquées aux technologies d'assistance.",
      },
    ],
    wontPromiseTitle: "Ce que nous ne promettons pas",
    wontPromise: [
      "Qu'un site soit « entièrement accessible » pour chaque personne dans chaque situation. Nous visons WCAG 2.2 AA et corrigeons ce que nous trouvons.",
      "Qu'un vérificateur automatisé suffise. Il ne détecte qu'une partie des problèmes, c'est pourquoi nous testons aussi à la main.",
    ],
    verifyTitle: "Comment nous testons, et comment vous pouvez le faire",
    verify: [
      "Un vérificateur automatisé sur chaque page, plus un passage manuel au clavier avant le lancement.",
      "Essayez vous-même : appuyez sur la touche Tab sur n'importe quelle page de ce site et suivez le focus.",
      "Si quelque chose ne fonctionne pas pour vous, dites-le-nous. Nous le corrigerons.",
    ],
  },

  "ai-policy": {
    name: "Politique sur l'IA",
    card: "L'IA rédige. Votre équipe approuve.",
    seoTitle: "Politique sur l'IA",
    metaDescription:
      "Comment nous utilisons l'IA dans les projets de nos clients : l'IA rédige et votre équipe approuve, testée sur vos propres exemples, vos données conservées dans vos comptes et non utilisées pour l'entraînement sans consentement écrit.",
    headline: "L'IA rédige. Votre équipe approuve.",
    lead: "L'IA est un outil pour des tâches précises, utilisé avec une personne aux commandes. Voici la politique que nous suivons dans chaque projet qui y fait appel.",
    defaults: [
      {
        title: "Une personne révise ce qui atteint un client",
        detail: "L'IA rédige, trie et résume. Une personne approuve avant que quoi que ce soit ne sorte, à moins que vous n'en décidiez autrement par écrit pour une tâche précise et à faible risque.",
      },
      {
        title: "Une tâche claire à la fois",
        detail: "Nous appliquons l'IA à une tâche précise et mesurable. Si une simple règle fonctionne mieux, nous utilisons la règle.",
      },
      {
        title: "Testée sur vos propres exemples",
        detail: "Nous mesurons la précision sur de vrais exemples vérifiés par votre équipe, avant que quiconque se fie au résultat.",
      },
      {
        title: "Vos données restent les vôtres",
        detail: "Les données restent dans des comptes qui vous appartiennent. Nous ne les envoyons pas à un fournisseur qui les utilise pour entraîner des modèles sans votre consentement écrit.",
      },
      {
        title: "Nous vous disons ce qui est utilisé",
        detail: "Vous savez quel fournisseur d'IA traite quoi, et où les données sont traitées.",
      },
      {
        title: "Les réponses indiquent leurs sources",
        detail: "Lorsqu'une réponse provient de documents, elle y renvoie, pour qu'une personne puisse vérifier.",
      },
      {
        title: "Suivie après le lancement",
        detail: "Nous continuons de mesurer la précision et nous vous avisons si elle baisse.",
      },
    ],
    wontPromiseTitle: "Ce que nous ne promettons pas",
    wontPromise: [
      "Que l'IA ait toujours raison. Ce n'est pas le cas, et c'est pourquoi une personne révise.",
      "Des systèmes entièrement autonomes. Nous n'en construisons pas pour des tâches aux conséquences réelles.",
    ],
    verifyTitle: "Comment vous pouvez vérifier",
    verify: [
      "Demandez quel fournisseur d'IA est utilisé pour chaque tâche, et où les données sont traitées.",
      "Demandez à voir les résultats des tests sur vos propres exemples.",
      "Vous pouvez désactiver les fonctions d'IA en tout temps.",
    ],
  },

  privacy: {
    name: "Vie privée",
    card: "Ne recueillir que le nécessaire, le garder dans vos comptes et respecter les règles locales.",
    seoTitle: "Norme de protection de la vie privée",
    metaDescription:
      "Comment nous traitons les renseignements personnels dans les projets de nos clients : ne recueillir que le nécessaire, les garder dans vos comptes et respecter les règles locales, y compris la Loi 25 du Québec et la loi fédérale mexicaine sur la protection des données.",
    headline: "Seulement les données dont vous avez besoin, gardées là où vous en avez le contrôle.",
    lead: "Voici la norme de protection de la vie privée pour les projets de nos clients. La façon dont ce site traite vos données est décrite dans la politique de confidentialité.",
    defaults: [
      {
        title: "Ne recueillir que le nécessaire",
        detail: "Si un système n'a pas besoin d'un renseignement personnel, nous ne le recueillons pas.",
      },
      {
        title: "Les données vivent dans vos comptes",
        detail: "Les données des clients sont stockées dans des comptes qui vous appartiennent, pour que vous en gardiez le contrôle.",
      },
      {
        title: "Consentement adapté à chaque pays",
        detail: "Les avis de consentement suivent les règles de l'endroit où se trouvent vos visiteurs, y compris la Loi 25 du Québec et la loi fédérale mexicaine sur la protection des données.",
      },
      {
        title: "Accès et suppression",
        detail: "Nous prévoyons la possibilité de trouver, de corriger, d'exporter et de supprimer les données d'une personne lorsqu'elle le demande.",
      },
      {
        title: "Fournisseurs nommés",
        detail: "Nous vous disons quels fournisseurs de services traitent des renseignements personnels, et pourquoi.",
      },
      {
        title: "Conservés seulement le temps nécessaire",
        detail: "Les durées de conservation sont convenues d'avance, et les anciennes données sont supprimées.",
      },
    ],
    wontPromiseTitle: "Ce que nous ne promettons pas",
    wontPromise: [
      "Des conseils juridiques. Nous construisons les outils. Votre avocat décide de ce dont votre entreprise a besoin.",
      "Qu'une loi s'applique ou non. Nous soulevons les questions, et votre avocat y répond.",
    ],
    verifyTitle: "Comment vous pouvez vérifier",
    verify: [
      "Demandez la liste des fournisseurs de services qui traitent des renseignements personnels dans votre projet.",
      "Lisez la politique de confidentialité, l'avis sur les témoins et l'avis de confidentialité pour le Mexique de ce site.",
    ],
  },
};

export const standardsPage: StandardsPage = {
  metaTitle: "Normes : sécurité, performance, accessibilité, IA et vie privée",
  metaDescription:
    "Les normes derrière chaque projet, en langage clair : sécurité, performance, accessibilité, politique sur l'IA et vie privée. Publiées pour que votre examinateur TI puisse nous vérifier.",
  eyebrow: "Normes",
  title: "Ce que nous faisons par défaut, noir sur blanc.",
  lead: "Les acheteurs sérieux et leurs examinateurs TI devraient pouvoir nous vérifier avant de signer. Ces cinq normes s'appliquent à chaque projet.",
  readStandard: "Lire la norme",
  ownershipTitle: "À qui appartient quoi",
  ownershipBody:
    "Le code, les comptes et les domaines vous appartiennent, dès le premier jour. Nous travaillons avec des accès nominatifs que vous pouvez retirer en tout temps.",
  technologyTitle: "Technologie",
  technologyBody:
    "Nous construisons avec des outils courants et bien documentés, comme TypeScript, React et Next.js, PostgreSQL et un hébergement géré. Nous choisissons selon le projet, et nous choisissons des outils que tout développeur qualifié peut maintenir.",
  processLink: "Voir notre façon de travailler",
  ctaTitle: "Besoin de faire vérifier quelque chose avant de décider?",
  ctaLead: "Envoyez-nous votre responsable TI. Nous répondrons avec plaisir à ses questions.",
};

export const standardPage: StandardPage = {
  defaults: "Ce que nous faisons par défaut",
  otherStandards: "Autres normes",
  lastReviewed: "Normes révisées le {date}.",
};
