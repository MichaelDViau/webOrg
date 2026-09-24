import type { ProjectSlug, ProjectText } from "@/lib/projects";

export const projects: Record<ProjectSlug, ProjectText> = {
  "harbor-line-customer-portal": {
    linkLabel: "Visitez le portail client",
    client: "Harbor Line Logistics",
    title: "Un portail d'expédition qui a remplacé 400 courriels de soutien par semaine",
    type: "Application web",
    industry: "Logistique",
    summary:
      "Un portail client pour un transporteur régional, qui réunit le suivi en direct, les documents et la facturation au même endroit.",
    results: [
      { value: "−71 %", label: "Courriels demandant l'état d'un envoi" },
      { value: "2 300", label: "Comptes clients actifs" },
      { value: "11 sem.", label: "Jusqu'à la première version" },
    ],
    imageAlt:
      "Portail d'expédition de Harbor Line en mode sombre, avec une carte des envois en direct, des cartes d'état de livraison et des indicateurs de ponctualité",
    challenge:
      "L'équipe du service à la clientèle de Harbor Line passait l'essentiel de ses journées à répondre à la même question : où est mon envoi? Les données de suivi étaient réparties dans trois systèmes internes, mais les clients n'y avaient pas accès, et les factures étaient encore envoyées en pièce jointe PDF.",
    approach: [
      "Nous avons interrogé les expéditeurs et l'équipe du service à la clientèle pour cerner les six questions qui représentaient la majorité des demandes, et avons conçu la première version pour y répondre sans appel téléphonique.",
      "Le portail lit les données du système de répartition du transporteur et de NetSuite grâce à une petite couche d'intégration qui normalise les mises à jour d'état et transmet les changements aux clients en temps réel.",
      "Les factures, les preuves de livraison et les confirmations de tarif sont générées automatiquement et peuvent être téléchargées dès qu'elles existent.",
    ],
    outcome:
      "Trois mois après la mise en ligne, les courriels demandant l'état d'un envoi avaient diminué de 71 %, et l'équipe du service à la clientèle a été réorganisée pour faire croître les comptes plutôt que trier la boîte de réception.",
  },
  "meridian-health-website": {
    linkLabel: "Parcourez le nouveau site",
    client: "Meridian Family Health",
    title: "Un site de cliniques où les patients trouvent enfin ce qu'ils cherchent",
    type: "Site web",
    industry: "Santé",
    summary:
      "Un site web refait pour un réseau de douze cliniques de première ligne, organisé autour des emplacements, des services et de la prise de rendez-vous en ligne.",
    results: [
      { value: "+46 %", label: "Demandes de rendez-vous en ligne" },
      { value: "0,9 s", label: "Largest Contentful Paint (p75)" },
      { value: "AA", label: "Conformité WCAG 2.2" },
    ],
    imageAlt:
      "Page d'accueil de Meridian Family Health avec les prochains rendez-vous disponibles, un outil de recherche de cliniques et un aperçu des services",
    challenge:
      "Au fil des ajouts, l'ancien site de Meridian avait dépassé les 300 pages. Les patients peinaient à trouver l'horaire de la clinique la plus proche, et sur mobile, le lien pour prendre rendez-vous était enfoui à trois niveaux de profondeur.",
    approach: [
      "Nous avons réduit le site à une structure claire, bâtie autour des trois choses que cherchent les patients : un emplacement, un service ou un professionnel. Chaque page de clinique affiche désormais son horaire, ses services et un lien direct pour prendre rendez-vous.",
      "Le contenu a été transféré dans Sanity avec des champs structurés pour les cliniques et les professionnels, de sorte que les changements d'horaire ou de personnel s'affichent partout à la fois.",
      "Nous avons mis en place les données structurées LocalBusiness et MedicalClinic pour chaque emplacement et géré le plan de redirection depuis l'ancien site.",
    ],
    outcome:
      "Les demandes de rendez-vous en ligne ont augmenté de 46 % au premier trimestre suivant la mise en ligne, et le trafic organique vers les pages des cliniques a retrouvé son niveau antérieur en cinq semaines.",
  },
  "cobalt-legal-document-assistant": {
    linkLabel: "Le fonctionnement de l'assistant",
    client: "Cobalt & Reyes LLP",
    title: "Un assistant documentaire qui cite ses sources",
    type: "Solution d'IA",
    industry: "Juridique",
    summary:
      "Un assistant interne qui répond aux questions portant sur 18 000 précédents et documents de politique du cabinet, chaque réponse étant liée à sa source.",
    results: [
      { value: "6 h", label: "Économisées par avocat chaque semaine" },
      { value: "94 %", label: "Précision sur le jeu de tests du cabinet" },
      { value: "0", label: "Document sorti de l'environnement du cabinet" },
    ],
    imageAlt:
      "Assistant de recherche de Cobalt & Reyes répondant à une question sur un contrat, avec les précédents cités à côté de la réponse",
    challenge:
      "Les avocats passaient des heures à chercher des clauses types et des directives internes dispersées dans des lecteurs partagés. Le cabinet voulait utiliser l'IA, mais seulement si les réponses pouvaient être vérifiées et qu'aucune donnée client ne quittait son environnement Microsoft.",
    approach: [
      "Nous avons constitué un jeu de tests de 250 vraies questions, dont les réponses ont été validées par des avocats principaux, et mesuré chaque choix de conception par rapport à celui-ci avant le déploiement.",
      "Les documents sont indexés dans l'environnement Azure du cabinet, l'accès respecte les permissions existantes par dossier, et chaque réponse renvoie directement aux passages dont elle est tirée.",
      "Les questions auxquelles le système ne peut pas répondre avec assurance sont refusées plutôt que devinées, et des documents à consulter sont suggérés.",
    ],
    outcome:
      "L'assistant est aujourd'hui utilisé quotidiennement par 60 avocats. Selon les sondages internes, chaque avocat économise six heures par semaine en recherche et en rédaction.",
  },
  "fieldstone-commerce-performance": {
    linkLabel: "D'où vient la vitesse",
    client: "Fieldstone Outdoor",
    title: "Des temps de chargement réduits de moitié sur une boutique très achalandée",
    type: "Optimisation web",
    industry: "Commerce de détail",
    summary:
      "Un programme de performance pour un détaillant d'équipement de plein air, qui a amélioré les Core Web Vitals de 14 000 pages de produits avant la haute saison.",
    results: [
      { value: "3,8 s → 1,6 s", label: "LCP sur mobile (p75)" },
      { value: "+18 %", label: "Taux de conversion sur mobile" },
      { value: "92 %", label: "Pages qui réussissent les Core Web Vitals" },
    ],
    imageAlt:
      "Rapport de vitesse de Fieldstone avec les scores Core Web Vitals, l'évolution du temps de chargement et les résultats avant et après par type de page",
    challenge:
      "Les pages de produits de Fieldstone ralentissaient à mesure que s'ajoutaient des scripts marketing, des images plus lourdes et de nouvelles fonctionnalités. Les visiteurs sur mobile, qui représentent 70 % du trafic, attendaient près de quatre secondes pour voir l'image principale du produit.",
    approach: [
      "Les données terrain ont montré que trois causes expliquaient l'essentiel du retard : une chaîne de traitement des images principales non optimisée, des scripts tiers bloquant l'affichage et des appels d'API sans cache à chaque consultation.",
      "Nous avons refait la chaîne d'images avec AVIF et des tailles adaptatives, reporté les scripts non essentiels après l'interaction et déplacé les données de produits vers un cache en périphérie avec revalidation en arrière-plan.",
      "Des budgets de performance sont maintenant vérifiés à chaque pull request, pour que les régressions soient repérées avant d'atteindre les clients.",
    ],
    outcome:
      "Le LCP sur mobile est passé de 3,8 à 1,6 seconde, et le taux de conversion sur mobile a augmenté de 18 % pendant la haute saison suivante par rapport à l'année précédente.",
  },
};
