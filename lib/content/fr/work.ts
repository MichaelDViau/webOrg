import type { DemoSlug, DemoText } from "@/lib/demos";
import type { DemoPage, WorkPage } from "../en/work";

/**
 * Des démos conceptuelles, pas des projets clients. Chaque écran utilise des données manifestement
 * fictives et le dit. N'ajoutez jamais de vrai nom de client, de logo, de témoignage ni de résultat.
 */
export const demos: Record<DemoSlug, DemoText> = {
  "property-portal": {
    name: "Portail pour propriétaires et locataires",
    card: "Propriétaires et locataires consultent l'état, les relevés et les demandes sans appeler le bureau.",
    seoTitle: "Démo conceptuelle : portail pour propriétaires et locataires",
    metaDescription:
      "Une démo conceptuelle d'un portail où les propriétaires et les locataires consultent relevés, documents et état des demandes d'entretien sans appeler le bureau.",
    headline: "Un portail où propriétaires et locataires voient l'état des choses sans appeler.",
    lead: "Une démo conceptuelle pour les gestionnaires immobiliers et les exploitants d'immeubles : un seul endroit pour les relevés, les documents et les demandes d'entretien.",
    problem:
      "Un bureau de gestion immobilière répond aux mêmes questions toute la journée. Où en est ma demande d'entretien? Mon relevé est-il prêt? Où est mon bail? Chaque réponse existe quelque part. La personne qui pose la question ne peut pas la voir.",
    does: [
      {
        title: "Vue propriétaire",
        detail: "Le dernier relevé, les demandes ouvertes et les documents, sans rien des autres propriétaires.",
      },
      {
        title: "Vue locataire",
        detail: "Soumettre une demande avec des photos, voir qui en est chargé et quand ce sera fait.",
      },
      {
        title: "Vue bureau",
        detail: "Toutes les demandes dans une seule file, avec l'état, le fournisseur et l'historique.",
      },
      {
        title: "Relié à vos logiciels",
        detail: "Lit les données de votre logiciel de gestion immobilière par l'entremise de son API ou de ses exportations, lorsqu'elles existent.",
      },
    ],
    screens: [
      {
        kind: "list",
        title: "Tableau de bord du propriétaire",
        caption: "Ce que voit un propriétaire à sa connexion : son relevé, ses demandes ouvertes et ses documents.",
        app: "Portail propriétaire",
        tabs: ["Aperçu", "Relevés", "Demandes", "Documents"],
        kpis: [
          { label: "Demandes ouvertes", value: "2" },
          { label: "Nouveau relevé", value: "Prêt" },
          { label: "Documents à examiner", value: "1" },
        ],
        listTitle: "Demandes dans vos immeubles",
        rows: [
          { primary: "Logement 4B · Fuite au robinet de la cuisine", secondary: "Fournisseur attribué · Visite prévue", badge: "En cours", tone: "info" },
          { primary: "Logement 12 · Lumière du couloir éteinte", secondary: "Signalée par le locataire", badge: "Nouvelle", tone: "warn" },
          { primary: "Logement 7 · Pile du détecteur de fumée", secondary: "Terminée, photo jointe", badge: "Terminée", tone: "good" },
        ],
      },
      {
        kind: "flow",
        title: "Une demande, du signalement à la fin",
        caption: "L'historique d'une seule demande d'entretien. Tout le monde voit le même état.",
        app: "Historique de la demande",
        steps: [
          { when: "Jour 1", title: "Le locataire signale le problème", detail: "Photos et courte description, soumises une seule fois.", state: "done" },
          { when: "Jour 1", title: "Le bureau confirme et attribue un fournisseur", detail: "Le locataire et le propriétaire sont avisés.", state: "done" },
          { when: "Jour 2", title: "Visite du fournisseur prévue", detail: "Le locataire choisit une plage horaire.", state: "active" },
          { when: "Jour 3", title: "Travaux terminés et demande fermée", detail: "Photo et facture jointes à la demande.", state: "todo" },
        ],
      },
    ],
    measure: [
      "Appels et courriels de suivi par semaine, avant et après.",
      "Délai entre une nouvelle demande et l'attribution d'un fournisseur.",
      "Proportion de propriétaires qui ouvrent leur relevé dans le portail.",
      "Heures que le bureau consacre à préparer les relevés de fin de mois.",
    ],
    honestNote:
      "Ceci est une démo conceptuelle, conçue pour montrer ce que nous construirions pour une entreprise immobilière. Elle utilise des données fictives et n'est reliée à aucun immeuble, propriétaire ou locataire réel.",
  },

  "firm-intake-hub": {
    name: "Centre de collecte des documents clients",
    card: "Les documents arrivent complets et à temps, avec des rappels envoyés pour vous.",
    seoTitle: "Démo conceptuelle : centre de collecte des documents clients",
    metaDescription:
      "Une démo conceptuelle d'un centre de collecte de documents pour cabinets comptables et firmes de services professionnels : listes de vérification, téléversement sécurisé, rappels automatiques et IA qui rédige pendant que votre équipe approuve.",
    headline: "Un centre où les documents des clients arrivent complets, sans relances.",
    lead: "Une démo conceptuelle pour les cabinets comptables et les firmes de services professionnels : une liste de vérification par client, un téléversement sécurisé et des rappels qui s'envoient tout seuls.",
    problem:
      "À chaque période de pointe, le personnel relance les clients pour les mêmes documents manquants, par courriel et par texto. Les fichiers arrivent à différents endroits sous différents noms. Personne ne voit d'un coup d'œil qui est prêt.",
    does: [
      {
        title: "Une liste de vérification par client",
        detail: "Les clients voient exactement ce qui est requis et ce qui a déjà été reçu.",
      },
      {
        title: "Téléversement sécurisé",
        detail: "Les documents vont directement dans le bon dossier client, pas dans une boîte courriel.",
      },
      {
        title: "Rappels automatiques",
        detail: "Les clients reçoivent un rappel pour ce qui manque, et le personnel n'a pas à réécrire le même courriel.",
      },
      {
        title: "L'IA rédige, votre équipe approuve",
        detail: "L'IA suggère la nature de chaque document. Une personne confirme avant tout classement.",
      },
    ],
    screens: [
      {
        kind: "list",
        title: "Tableau de bord du bureau",
        caption: "Quels clients sont prêts, en attente ou en retard, d'un coup d'œil.",
        app: "Centre de collecte",
        tabs: ["Clients", "Rappels", "Paramètres"],
        kpis: [
          { label: "Prêts", value: "12" },
          { label: "En attente du client", value: "8" },
          { label: "En retard", value: "3" },
        ],
        listTitle: "Clients de la semaine",
        rows: [
          { primary: "Client A · Déclaration de particulier", secondary: "8 documents sur 8 reçus", badge: "Prêt", tone: "good" },
          { primary: "Client B · Petite entreprise", secondary: "5 sur 9 reçus · Rappel envoyé", badge: "En attente", tone: "warn" },
          { primary: "Client C · Déclaration de particulier", secondary: "2 sur 8 reçus · Échéance dans 3 jours", badge: "En retard", tone: "neutral" },
        ],
      },
      {
        kind: "list",
        title: "L'IA rédige, votre équipe approuve",
        caption: "L'IA suggère une étiquette pour chaque fichier téléversé. Rien n'est classé tant qu'une personne ne l'a pas approuvé.",
        app: "File de révision",
        tabs: ["À réviser", "Approuvés"],
        kpis: [
          { label: "À réviser", value: "4" },
          { label: "Approuvés aujourd'hui", value: "9" },
        ],
        listTitle: "Étiquettes suggérées",
        rows: [
          { primary: "scan_0412.pdf", secondary: "Suggestion : relevé bancaire, mars", badge: "En attente d'approbation", tone: "info" },
          { primary: "IMG_2231.jpg", secondary: "Suggestion : reçu, fournitures de bureau", badge: "En attente d'approbation", tone: "info" },
          { primary: "notes.docx", secondary: "Incertain, une personne doit l'étiqueter", badge: "Intervention humaine", tone: "warn" },
        ],
      },
    ],
    measure: [
      "Nombre de jours entre la première demande et un dossier complet.",
      "Rappels envoyés à la main par le personnel, par client.",
      "Proportion de clients dont le dossier est complet avant l'échéance.",
      "Fréquence à laquelle une personne corrige l'étiquette suggérée par l'IA.",
    ],
    honestNote:
      "Ceci est une démo conceptuelle. Elle utilise des données fictives, aucun vrai document de client, et montre comment un centre de collecte pourrait fonctionner. Les suggestions de l'IA qu'on y voit sont des illustrations, pas des résultats mesurés.",
  },

  "revenue-website": {
    name: "Site web générateur de revenus avec parcours des demandes",
    card: "Chaque demande reçoit une confirmation instantanée et une réponse personnelle en moins d'une heure ouvrable.",
    seoTitle: "Démo conceptuelle : site web générateur de revenus avec parcours des demandes",
    metaDescription:
      "Une démo conceptuelle d'un site web dont les formulaires confirment instantanément, acheminent la demande vers la bonne personne dans le CRM et mènent à une réponse personnelle en moins d'une heure ouvrable.",
    headline: "Un site web dont les demandes n'attendent jamais.",
    lead: "Une démo conceptuelle du parcours des demandes derrière un site générateur de revenus : un court formulaire, une confirmation instantanée, un acheminement vers la bonne personne et une réponse personnelle.",
    problem:
      "Les demandes arrivent et attendent. Personne n'est certain de qui en est responsable, les réponses prennent des jours, et le site ne peut pas montrer quelles pages génèrent vraiment des demandes.",
    does: [
      {
        title: "Un court formulaire",
        detail: "Cinq champs au plus, dans la langue du visiteur, avec le consentement là où la loi l'exige.",
      },
      {
        title: "Une confirmation instantanée",
        detail: "Le visiteur reçoit tout de suite un courriel, dans sa langue, pour savoir que sa demande est arrivée.",
      },
      {
        title: "Acheminement dans le CRM",
        detail: "La demande atterrit dans le CRM et est dirigée vers la bonne personne.",
      },
      {
        title: "Une réponse personnelle et un appel réservé",
        detail: "Une personne répond en moins d'une heure ouvrable et fixe l'appel de découverte.",
      },
    ],
    screens: [
      {
        kind: "form",
        title: "Le formulaire de demande",
        caption: "Cinq courts groupes de champs, une ligne de consentement et aucune devinette.",
        app: "Formulaire de contact",
        heading: "Dites-nous ce que vous aimeriez corriger",
        fields: [
          { label: "Nom et fonction", value: "Personne Exemple, Gestionnaire des opérations" },
          { label: "Entreprise et site web", value: "Entreprise Exemple · example.com" },
          { label: "Courriel", value: "exemple@example.com" },
          { label: "Qu'aimeriez-vous corriger?", value: "Les demandes attendent trop longtemps avant d'obtenir une réponse.", tall: true },
          { label: "Langue préférée", value: "Français" },
        ],
        submit: "Envoyer la demande",
        note: "En envoyant, vous acceptez que nous vous répondions. Voir la politique de confidentialité.",
      },
      {
        kind: "flow",
        title: "Ce qui se passe après l'envoi",
        caption: "Le parcours que déclenche le formulaire. Ce site utilise le même.",
        app: "Parcours des demandes",
        steps: [
          { when: "Tout de suite", title: "Confirmation dans la langue du visiteur", detail: "Un courriel automatique indique que la demande est arrivée.", state: "done" },
          { when: "Tout de suite", title: "Entrée dans le CRM, acheminée vers la bonne personne", detail: "La page d'origine et la langue sont consignées.", state: "done" },
          { when: "En moins d'une heure ouvrable", title: "Réponse personnelle", detail: "Une personne répond, dans la langue du visiteur.", state: "active" },
          { when: "Ensuite", title: "Appel de découverte réservé", detail: "Le visiteur choisit l'heure.", state: "todo" },
        ],
      },
    ],
    measure: [
      "Délai avant la première réponse personnelle.",
      "Visites par rapport aux demandes, par page et par langue.",
      "Demandes par source.",
      "Proportion des demandes qui mènent à un appel réservé.",
    ],
    honestNote:
      "Ceci est une démo conceptuelle avec des données fictives. Le même parcours fonctionne sur ce site : vous pouvez l'essayer vous-même. Envoyez une demande et regardez ce qui arrive dans votre boîte de réception.",
  },
};

export const workPage: WorkPage = {
  metaTitle: "Réalisations : démos conceptuelles des systèmes que nous construisons",
  metaDescription:
    "Des démos conceptuelles fonctionnelles d'un portail immobilier, d'un centre de collecte de documents et d'un site générateur de revenus avec parcours des demandes. Elles utilisent des données fictives et ne sont pas des projets clients.",
  eyebrow: "Réalisations",
  title: "Des démos fonctionnelles des systèmes que nous construisons.",
  lead: "Trois démos conceptuelles de systèmes pour les secteurs que nous servons. Chacune utilise des données fictives, pour que vous sachiez toujours ce que vous regardez.",
  honestTitle: "Ce que vous regardez",
  honestBody:
    "Les démos conceptuelles utilisent des données fictives et ne sont pas des projets clients.",
  seeDemo: "Voir la démo",
};

export const demoPage: DemoPage = {
  problem: "Le problème",
  whatItDoes: "Ce qu'elle fait",
  screens: "Les écrans",
  technology: "Technologie",
  measure: "Ce que nous mesurerions pour un client",
  built: "Conçue pour",
  services: "Services derrière la démo",
  otherDemos: "Autres démos",
  aboutThisDemo: "À propos de cette démo",
};
