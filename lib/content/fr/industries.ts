import type { IndustrySlug, IndustryText } from "@/lib/industries";
import type { IndustriesPage } from "../en/industries";

/**
 * Les secteurs où nos capacités s'appliquent. C'est la liste des types de solutions dont leurs entreprises
 * ont souvent besoin, jamais une affirmation sur des clients passés. N'ajoutez ni nom de client, ni
 * résultat, ni certification de conformité.
 */
export const industries: Record<IndustrySlug, IndustryText> = {
  "real-estate": {
    name: "Immobilier",
    short: "Immobilier",
    lead: "Gestionnaires immobiliers, courtiers et promoteurs coordonnent des personnes, des documents et des propriétés dans de nombreux systèmes.",
    needs: [
      "Portails pour propriétaires et locataires",
      "Gestion de l'entretien et des bons de travail",
      "Intégration des inscriptions, des pistes et du CRM",
      "Rapports sur l'ensemble des propriétés et des portefeuilles",
    ],
  },
  hospitality: {
    name: "Hôtellerie et restauration",
    short: "Hôtellerie",
    lead: "Hôtels, restaurants et salles fonctionnent selon l'horaire, le personnel et l'expérience des clients.",
    needs: [
      "Systèmes de réservation",
      "Outils d'horaires et d'exploitation du personnel",
      "Communication avec les clients et gestion des commentaires",
      "Intégration des caisses et des stocks",
    ],
  },
  tourism: {
    name: "Tourisme",
    short: "Tourisme",
    lead: "Voyagistes, destinations et entreprises de voyage vendent des expériences selon les saisons et les canaux.",
    needs: [
      "Réservation en ligne et gestion des disponibilités",
      "Plateformes clients multilingues",
      "Intégrations avec les partenaires et les fournisseurs",
      "Outils de planification des itinéraires, de la capacité et de la demande",
    ],
  },
  retail: {
    name: "Commerce de détail",
    short: "Commerce de détail",
    lead: "Les détaillants relient boutiques, commerce en ligne, stocks et données clients.",
    needs: [
      "Plateformes de commerce en ligne et de boutique",
      "Gestion des stocks et des commandes",
      "Systèmes de données clients et de fidélisation",
      "Tableaux de bord des ventes et de la demande",
    ],
  },
  "professional-services": {
    name: "Services professionnels",
    short: "Services professionnels",
    lead: "Cabinets comptables, juridiques, de conseil et autres vendent leur expertise et gèrent le travail des clients.",
    needs: [
      "Portails clients et échange sécurisé de documents",
      "Gestion des flux de travail et des dossiers",
      "Intégrations de temps, de facturation et de rapports",
      "Rédaction et révision de documents assistées par l'IA",
    ],
  },
  logistics: {
    name: "Logistique",
    short: "Logistique",
    lead: "Transporteurs, distributeurs et entrepôts dépendent d'une information exacte et en temps réel.",
    needs: [
      "Suivi des commandes, des expéditions et des stocks",
      "Applications d'entrepôt et de répartition",
      "Intégrations avec les transporteurs, les clients et les partenaires",
      "Tableaux de bord et analyses opérationnels",
    ],
  },
  "financial-services": {
    name: "Services financiers",
    short: "Services financiers",
    lead: "Les firmes financières ont besoin de systèmes fiables qui protègent les données sensibles et soutiennent des rapports exacts.",
    needs: [
      "Portails clients sécurisés et parcours d'intégration",
      "Modernisation de plateformes héritées",
      "Intégration de données et production de rapports",
      "Pistes de vérification et contrôles d'accès",
    ],
  },
  healthcare: {
    name: "Santé",
    short: "Santé",
    lead: "Les organisations de santé coordonnent patients, professionnels et dossiers dans un cadre où la vie privée est une exigence stricte.",
    needs: [
      "Outils de prise de rendez-vous et de communication avec les patients",
      "Intégration entre les systèmes cliniques et administratifs",
      "Traitement sécuritaire des données et contrôles d'accès",
      "Rapports opérationnels et automatisation des flux de travail",
    ],
  },
  manufacturing: {
    name: "Fabrication",
    short: "Fabrication",
    lead: "Les fabricants coordonnent la production, les stocks, la qualité et les fournisseurs.",
    needs: [
      "Systèmes de suivi de la production et des stocks",
      "Liaison entre les logiciels d'atelier et de gestion",
      "Outils de qualité et d'entretien",
      "Rapports et tableaux de bord opérationnels",
    ],
  },
  "technology-companies": {
    name: "Entreprises technologiques",
    short: "Entreprises technologiques",
    lead: "Les entreprises de logiciels et de technologie ont besoin de capacité d'ingénierie et d'une architecture solide.",
    needs: [
      "Ingénierie de produit et développement de fonctions",
      "Infrastructure infonuagique et chaînes de déploiement",
      "Revues d'architecture et planification technique",
      "Développement d'intégrations et d'API",
    ],
  },
};

export const industriesPage: IndustriesPage = {
  metaTitle: "Les secteurs où nous construisons de la technologie",
  metaDescription:
    "Logiciels et solutions technologiques pour dix secteurs, dont l'immobilier, l'hôtellerie, la logistique, les services financiers, la santé et la fabrication.",
  eyebrow: "Secteurs",
  title: "Une technologie adaptée à la façon dont votre secteur fonctionne.",
  lead: "Les détails varient selon le secteur. La démarche d'ingénierie, elle, s'applique partout. Voici le genre de solutions dont les entreprises de chaque secteur ont souvent besoin.",
  note: "Cette liste montre où nos capacités s'appliquent. Ce n'est pas une liste de clients passés. Pour les secteurs réglementés, comme les services financiers et la santé, nous concevons en tenant compte de vos exigences de vie privée et de sécurité, et c'est votre propre équipe de conformité qui tranche.",
  needsLabel: "Solutions souvent requises",
  relatedLabel: "Capacités connexes",
  ctaTitle: "Vous ne voyez pas votre secteur?",
  ctaLead: "La démarche convient à toute entreprise qui fait face à un défi technologique. Parlez-nous du vôtre.",
};
