import type { LegalContent } from "@/lib/legal";

/**
 * Pages juridiques : politique de confidentialité, conditions d'utilisation, avis sur les témoins et avis
 * de confidentialité pour le Mexique (aviso de privacidad). Ce sont des ébauches rédigées pour refléter
 * le fonctionnement de ce site. Faites-les rédiger ou réviser par votre avocat avant le lancement
 * (partie 18 du manuel), en particulier pour la Loi 25 du Québec. `{name}`, `{email}`, `{hours}` et
 * `{address}` sont remplacés à partir de lib/site.ts.
 */
export const legal: LegalContent = {
  eyebrow: "Renseignements juridiques",
  updatedLabel: "Dernière mise à jour : {date}.",
  reviewNote: "Ébauche en attente de révision juridique.",
  contactTitle: "Contact",
  contactBody: "Pour toute question au sujet de cette page, ou pour exercer vos droits, écrivez à",
  otherDocuments: "Autres documents juridiques",

  privacy: {
    metaTitle: "Politique de confidentialité",
    metaDescription: "Comment {name} recueille, utilise et protège les renseignements que vous transmettez par ce site web.",
    title: "Politique de confidentialité",
    updated: "septembre 2026",
    intro:
      "Cette politique explique quels renseignements {name} recueille par ce site web, pourquoi, qui les reçoit et quels choix s'offrent à vous. Elle s'applique aux visiteurs de tous les pays que nous servons, y compris le Québec et le Mexique.",
    sections: [
      {
        title: "Qui est responsable",
        body: [
          "{name} est responsable des renseignements recueillis par ce site web. Vous pouvez joindre la personne responsable de la protection des renseignements personnels à {email}.",
        ],
      },
      {
        title: "Ce que nous recueillons",
        body: ["Nous ne recueillons que ce que vous choisissez de nous envoyer, plus une petite quantité de données techniques."],
        list: [
          "Formulaires d'audit, d'aperçu et de contact : votre nom, votre fonction, votre entreprise, votre site web, votre courriel, votre numéro de téléphone, votre langue préférée et ce que vous aimeriez corriger.",
          "Infolettre : votre adresse courriel et votre langue préférée.",
          "Test de vitesse instantané : l'adresse de site web que vous entrez, et votre courriel si vous choisissez de l'ajouter.",
          "Assistant IA : les messages que vous écrivez. Veuillez ne pas y communiquer de renseignements sensibles.",
          "Données techniques : votre adresse IP et des détails de base de la requête, utilisés pour la sécurité, la protection contre le pourriel et la limitation du débit.",
        ],
      },
      {
        title: "Pourquoi nous les recueillons",
        body: [
          "Pour vous répondre, préparer l'audit ou l'aperçu que vous avez demandé, envoyer l'infolettre à laquelle vous vous êtes abonné et assurer la sécurité du site. Nous ne vendons pas de renseignements personnels et nous n'utilisons pas de traceurs publicitaires.",
        ],
      },
      {
        title: "Consentement",
        body: [
          "Lorsque la loi l'exige, nous demandons votre consentement au moyen d'une case à cocher avant l'envoi d'un formulaire. Vous pouvez le retirer en tout temps en nous écrivant, et vous pouvez vous désabonner de l'infolettre d'un seul clic.",
        ],
      },
      {
        title: "Qui les reçoit",
        body: [
          "Des fournisseurs de services qui traitent les renseignements pour notre compte et n'ont pas le droit de les utiliser à leurs propres fins. Selon la façon dont vous utilisez le site, il s'agit notamment de :",
        ],
        list: [
          "Notre fournisseur d'hébergement.",
          "Notre fournisseur d'envoi de courriels, qui transmet la confirmation et nos réponses.",
          "Notre fournisseur de gestion de la relation client (CRM), où votre demande est consignée et acheminée.",
          "Notre fournisseur de planification, si vous réservez un appel.",
          "Notre fournisseur d'analytique respectueux de la vie privée, s'il est activé. Il n'utilise pas de témoins et ne crée pas de profils de visiteurs.",
          "Google PageSpeed Insights, qui reçoit l'adresse que vous entrez dans le test de vitesse.",
          "Anthropic, qui traite les messages que vous envoyez à l'assistant IA.",
        ],
      },
      {
        title: "Où les renseignements sont traités",
        body: [
          "Nos fournisseurs peuvent traiter les renseignements aux États-Unis et dans d'autres pays. Pour les visiteurs du Québec, cela signifie que des renseignements peuvent être communiqués à l'extérieur du Québec. Nous choisissons des fournisseurs qui les protègent de façon appropriée, et nous limitons ce que nous leur transmettons.",
        ],
      },
      {
        title: "Combien de temps nous les conservons",
        body: [
          "Les demandes sont conservées jusqu'à deux ans, à moins que vous ne demandiez leur suppression plus tôt, ou que nous commencions à travailler ensemble, auquel cas l'entente de projet s'applique. Les données d'abonnement à l'infolettre sont conservées jusqu'à votre désabonnement.",
        ],
      },
      {
        title: "Vos droits",
        body: [
          "Vous pouvez nous demander d'accéder aux renseignements que nous détenons à votre sujet, de les corriger, de les exporter ou de les supprimer, de retirer votre consentement et de cesser de les utiliser à une fin donnée. Nous répondons dans le délai que prévoit la loi. Les visiteurs du Mexique peuvent exercer leurs droits ARCO comme le décrit notre avis de confidentialité pour le Mexique.",
        ],
      },
      {
        title: "Témoins",
        body: [
          "Nous ne déposons aucun témoin publicitaire ni de suivi. Notre avis sur les témoins explique les quelques éléments de stockage du navigateur que le site utilise.",
        ],
      },
      {
        title: "Sécurité",
        body: [
          "Nous protégeons les renseignements par le chiffrement en transit, un accès limité aux personnes qui en ont besoin et les pratiques de notre norme de sécurité. Aucun système n'est parfaitement sûr, et nous vous aviserons rapidement si quelque chose vous concerne.",
        ],
      },
      {
        title: "Enfants",
        body: ["Ce site web s'adresse aux entreprises. Il ne s'adresse pas aux enfants, et nous ne recueillons pas sciemment leurs renseignements."],
      },
      {
        title: "Modifications",
        body: ["Nous mettrons cette page à jour lorsque nos pratiques changeront, et la date de la dernière mise à jour figure en haut."],
      },
    ],
  },

  terms: {
    metaTitle: "Conditions d'utilisation",
    metaDescription: "Les conditions d'utilisation du site web de {name}.",
    title: "Conditions d'utilisation",
    updated: "septembre 2026",
    intro: "En utilisant ce site web, vous acceptez ces conditions. Si vous êtes en désaccord, veuillez ne pas utiliser le site.",
    sections: [
      {
        title: "Ce qu'est ce site web",
        body: [
          "Ce site web décrit ce que fait {name} et vous permet de nous joindre. Il ne constitue pas une offre de vente et ne crée pas de contrat. Les audits et les projets sont régis par une entente écrite distincte que nous signons avec vous.",
        ],
      },
      {
        title: "Démos conceptuelles",
        body: [
          "Les démos de ce site sont étiquetées « Démo conceptuelle : ce n'est pas un projet client ». Elles utilisent des données fictives et illustrent ce que nous pourrions construire. Ce ne sont pas des travaux de clients et elles ne montrent pas de résultats mesurés.",
        ],
      },
      {
        title: "Information sur ce site",
        body: [
          "Nous nous efforçons de garder l'information exacte, mais nous ne promettons pas qu'elle soit complète ou à jour. Les prix indiqués sont des points de départ. Le prix de votre travail est celui dont nous convenons par écrit.",
        ],
      },
      {
        title: "Assistant IA et outils",
        body: [
          "L'assistant IA et le test de vitesse instantané sont offerts par commodité. Leurs réponses et leurs notes peuvent comporter des erreurs et ne constituent pas des conseils professionnels.",
        ],
      },
      {
        title: "Utilisation acceptable",
        body: ["Veuillez ne pas faire un mauvais usage du site. Cela comprend tenter de le perturber, de contourner ses protections ou d'envoyer des requêtes automatisées ou abusives."],
      },
      {
        title: "Propriété intellectuelle",
        body: ["Le contenu, la conception et le code de ce site web appartiennent à {name} ou à ses concédants. Vous pouvez partager des liens vers celui-ci. Veuillez demander avant de le copier."],
      },
      {
        title: "Liens vers d'autres sites",
        body: ["Nous renvoyons à des sites tiers par commodité. Nous ne sommes pas responsables de leur contenu ni de leurs pratiques en matière de vie privée."],
      },
      {
        title: "Limites de notre responsabilité",
        body: [
          "Dans la mesure où la loi le permet, {name} n'est pas responsable des pertes découlant de l'utilisation de ce site web. Rien ici ne limite les droits que la loi ne nous permet pas de limiter.",
        ],
      },
      {
        title: "Droit applicable",
        body: ["Le droit qui régit votre travail avec nous est précisé dans l'entente écrite de chaque mandat."],
      },
      {
        title: "Modifications",
        body: ["Nous pouvons mettre à jour ces conditions. La date de la dernière mise à jour figure en haut de cette page."],
      },
    ],
  },

  cookies: {
    metaTitle: "Avis sur les témoins",
    metaDescription: "Les témoins et le stockage du navigateur qu'utilise le site web de {name}. Nous ne déposons aucun témoin publicitaire ni de suivi.",
    title: "Avis sur les témoins",
    updated: "septembre 2026",
    intro:
      "Nous restons simples. Ce site web ne dépose aucun témoin publicitaire ni de suivi : il n'affiche donc aucune bannière de témoins. Cette page explique ce que le site stocke, et ce qui se passerait si cela changeait.",
    sections: [
      {
        title: "Ce que le site stocke",
        body: ["Le site conserve un élément dans le stockage de votre navigateur, et seulement si vous utilisez la fonction :"],
        list: [
          "Thème : si vous passez au thème sombre, votre choix est enregistré dans votre navigateur pour être retenu la prochaine fois. Il ne quitte jamais votre appareil.",
        ],
      },
      {
        title: "Analytique",
        body: [
          "Si l'analytique est activée, nous utilisons un outil respectueux de la vie privée qui n'utilise pas de témoins et ne vous suit pas d'un site à l'autre. Il compte les visites et les demandes par formulaire, par page et par langue.",
        ],
      },
      {
        title: "Calendrier de réservation",
        body: [
          "Si vous ouvrez la page de réservation, le calendrier de notre fournisseur de planification s'y charge. Ce fournisseur peut déposer ses propres témoins. Il ne se charge que sur cette page, et la politique du fournisseur s'applique.",
        ],
      },
      {
        title: "Consentement selon le pays",
        body: [
          "Comme nous ne déposons pas de témoins non essentiels, nous n'avons pas à demander de consentement à leur égard. Si cela change, nous demanderons d'abord, selon les règles de l'endroit où vous vous trouvez, y compris le Québec et le Mexique.",
        ],
      },
      {
        title: "Votre contrôle",
        body: ["Vous pouvez effacer ou bloquer le stockage du navigateur et les témoins dans les paramètres de votre navigateur. Le site continue de fonctionner."],
      },
    ],
  },

  mexico: {
    metaTitle: "Aviso de privacidad (Mexique)",
    metaDescription: "Avis de confidentialité pour les visiteurs du Mexique, en vertu de la Loi fédérale sur la protection des données personnelles détenues par des particuliers.",
    title: "Avis de confidentialité pour le Mexique (Aviso de privacidad)",
    updated: "septembre 2026",
    intro:
      "Cet avis s'adresse aux visiteurs du Mexique. Il suit la Loi fédérale sur la protection des données personnelles détenues par des particuliers (LFPDPPP). Il complète notre politique de confidentialité.",
    sections: [
      {
        title: "Qui est responsable",
        body: ["{name} est le responsable du traitement des données (responsable). Adresse : {address}. Courriel : {email}."],
      },
      {
        title: "Données personnelles que nous recueillons",
        body: ["Les données que vous saisissez dans nos formulaires : nom, fonction, entreprise, site web, courriel, numéro de téléphone, langue préférée et description de ce que vous aimeriez corriger. Nous ne recueillons pas de données personnelles sensibles."],
      },
      {
        title: "Finalités nécessaires",
        body: ["Nous utilisons vos données pour répondre à votre demande, préparer l'audit ou l'aperçu que vous avez demandé et assurer la sécurité du site web."],
      },
      {
        title: "Finalités que vous pouvez refuser",
        body: ["Si vous vous abonnez à l'infolettre, nous utilisons votre courriel pour vous envoyer des articles. Vous pouvez refuser ou vous désabonner en tout temps."],
      },
      {
        title: "Transferts",
        body: [
          "Nous communiquons des données à des fournisseurs de services qui les traitent pour nous : hébergement, envoi de courriels, CRM et planification. Ces transferts sont nécessaires pour offrir le service que vous avez demandé. Nous ne transférons pas vos données à d'autres fins sans votre consentement.",
        ],
      },
      {
        title: "Vos droits ARCO",
        body: [
          "Vous pouvez accéder à vos données, les rectifier ou les annuler, ou vous opposer à leur utilisation (droits ARCO). Pour exercer ces droits, écrivez à {email} en indiquant votre nom, un moyen de vous joindre, ce que vous voulez faire et tout document qui nous aide à retrouver vos données. Nous répondons dans le délai prévu par la loi.",
        ],
      },
      {
        title: "Retrait du consentement et limitation de l'utilisation",
        body: ["Vous pouvez retirer votre consentement, ou nous demander de limiter l'utilisation de vos données, en écrivant à {email}. Les infolettres comportent un lien de désabonnement."],
      },
      {
        title: "Témoins",
        body: ["Nous n'utilisons pas de témoins ni de technologies semblables pour recueillir des données personnelles à des fins publicitaires ou de suivi. Voir notre avis sur les témoins."],
      },
      {
        title: "Modifications de cet avis",
        body: ["Si cet avis change, nous publierons la nouvelle version sur cette page."],
      },
    ],
  },
};
