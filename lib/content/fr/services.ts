import type { ServiceSlug, ServiceText } from "@/lib/services";
import type { ServicesPage } from "../en/services";

/**
 * Les neuf catégories de capacités, en français du Québec. Chaque capacité de l'offre figure dans l'une
 * d'elles, et aucune ne doit disparaître. Ton : professionnel, clair, précis, sans slogan et sans
 * prétention sur des clients, des années, des prix ou des résultats.
 */
export const services: Record<ServiceSlug, ServiceText> = {
  "custom-software": {
    name: "Développement de logiciels sur mesure",
    card: "Des logiciels conçus autour de la façon dont votre entreprise fonctionne vraiment : systèmes d'affaires sur mesure, applications full-stack et automatisation des processus.",
    seoTitle: "Développement de logiciels sur mesure",
    metaDescription:
      "Logiciels d'affaires sur mesure, développement full-stack et automatisation des processus. Nous concevons des applications évolutives adaptées à votre façon de travailler.",
    headline: "Des logiciels sur mesure, conçus autour de votre façon de travailler.",
    lead: "Quand les outils prêts à l'emploi vous obligent à les contourner, nous créons le logiciel qui vous convient : adapté à votre processus, conçu pour évoluer et qui vous appartient.",
    overview:
      "Nous couvrons toute la pile technologique, de l'interface que les gens utilisent jusqu'aux services et aux données qui la soutiennent. Le résultat : un logiciel qui élimine le travail manuel, épouse votre processus et peut grandir avec l'entreprise.",
    capabilities: [
      "Logiciels d'affaires sur mesure",
      "Solutions logicielles personnalisées",
      "Développement full-stack",
      "Ingénierie front-end et back-end",
      "Automatisation des processus d'affaires",
      "Développement de systèmes sur mesure",
      "Applications logicielles évolutives",
    ],
    challenges: [
      "Les logiciels prêts à l'emploi ne correspondent pas à notre façon de travailler.",
      "Notre équipe passe son temps à contourner les outils que nous avons.",
      "Des processus importants vivent dans des chiffriers et des courriels.",
      "Il nous faut quelque chose qui puisse grandir avec l'entreprise.",
    ],
    approach: [
      {
        title: "Partir du processus",
        detail:
          "Nous cartographions comment le travail se fait réellement avant de décider quoi construire, pour que le logiciel s'adapte à l'entreprise, et non l'inverse.",
      },
      {
        title: "Construire par incréments fonctionnels",
        detail: "Vous voyez un logiciel qui fonctionne tôt et souvent, et vous l'orientez au fil du travail.",
      },
      {
        title: "Prévoir la croissance",
        detail:
          "Une structure propre, de la documentation et des tests rendent le système facile à faire évoluer, et facile à maintenir pour tout développeur compétent.",
      },
    ],
    faqs: [
      {
        question: "Pouvez-vous construire par-dessus les outils que nous utilisons déjà?",
        answer:
          "Oui. Nous relions le nouveau logiciel à vos systèmes existants par leurs API, leurs exportations ou leurs bases de données, et nous ne remplaçons que ce qui doit l'être.",
      },
      {
        question: "À qui appartient le code?",
        answer: "À vous. Le code se trouve dans un dépôt de votre organisation dès le premier jour.",
      },
    ],
  },

  "web-applications": {
    name: "Développement web et d'applications",
    card: "Sites web, applications web, portails clients et plateformes internes, des applications web progressives aux applications d'entreprise.",
    seoTitle: "Services de développement d'applications web",
    metaDescription:
      "Sites web professionnels, applications web sur mesure, portails clients, tableaux de bord et plateformes d'entreprise, conçus pour la vitesse, la sécurité et la croissance.",
    headline: "Des sites et des applications web conçus pour un usage réel.",
    lead: "D'un site d'entreprise professionnel à une plateforme d'entreprise sur laquelle vos équipes et vos clients comptent chaque jour, nous concevons, construisons et maintenons des applications qui fonctionnent sur tous les appareils.",
    overview:
      "Le web est la façon dont la plupart des entreprises joignent leurs clients et gèrent leurs opérations. Nous construisons les deux côtés : le site public qui génère des demandes et les applications derrière la connexion.",
    capabilities: [
      "Développement de sites web professionnels",
      "Applications web sur mesure",
      "Applications d'entreprise",
      "Applications web progressives",
      "Plateformes d'affaires internes",
      "Portails clients",
      "Tableaux de bord d'administration",
      "Plateformes numériques interactives",
    ],
    challenges: [
      "Les clients nous appellent pour obtenir de l'information qu'ils devraient trouver eux-mêmes.",
      "Notre site a fière allure, mais il n'amène pas de demandes qualifiées.",
      "Notre équipe a besoin d'une seule plateforme interne plutôt que de cinq outils distincts.",
      "Il nous faut une application qui fonctionne bien aussi sur les téléphones et les tablettes.",
    ],
    approach: [
      {
        title: "Concevoir pour les personnes qui l'utilisent",
        detail:
          "Nous partons de qui utilise l'application et de ce que ces personnes doivent accomplir, puis nous concevons le parcours et l'interface en conséquence.",
      },
      {
        title: "Bâtir pour la vitesse et la sécurité",
        detail:
          "Rapide sur des téléphones et des connexions ordinaires, accessible et protégée par de bonnes pratiques : HTTPS, contrôle d'accès et disponibilité surveillée.",
      },
      {
        title: "Lancer, puis en prendre soin",
        detail: "Nous déployons, surveillons et continuons d'améliorer l'application après son lancement.",
      },
    ],
    faqs: [
      {
        question: "Notre équipe peut-elle modifier le contenu elle-même?",
        answer:
          "Oui. Nous configurons la gestion du contenu pour que votre équipe puisse mettre à jour les pages sans développeur.",
      },
      {
        question: "Développez-vous des applications mobiles?",
        answer:
          "Nous développons des applications web progressives qui s'installent et se comportent comme des applications sur les téléphones, et des applications mobiles natives lorsqu'un projet l'exige.",
      },
    ],
  },

  "ai-solutions": {
    name: "Solutions d'IA et automatisation",
    card: "L'IA intégrée à vos systèmes et à vos flux de travail : assistants, automatisation intelligente et processus fondés sur les données, avec des personnes aux commandes.",
    seoTitle: "Solutions d'IA et automatisation des processus d'affaires",
    metaDescription:
      "Applications propulsées par l'IA, intégration de l'IA aux systèmes existants, agents et assistants d'IA, et automatisation intelligente pour des flux de travail réels.",
    headline: "Une IA et une automatisation qui s'intègrent à votre façon de travailler.",
    lead: "Nous concevons et intégrons l'IA là où elle supprime du vrai travail : rédiger, classer, acheminer et répondre, à l'intérieur de vos systèmes existants et avec des personnes qui révisent ce qui compte.",
    overview:
      "L'IA est une capacité parmi d'autres. Nous l'utilisons quand elle résout un problème précis mieux qu'un logiciel classique, et nous la concevons avec des limites claires, une révision humaine et des résultats mesurables.",
    capabilities: [
      "Applications propulsées par l'IA",
      "Intégration de l'IA aux systèmes existants",
      "Automatisation intelligente des processus d'affaires",
      "Agents et assistants d'IA",
      "Automatisation fondée sur les données",
      "Solutions d'IA sur mesure pour l'entreprise",
      "Flux de travail enrichis par l'IA",
    ],
    challenges: [
      "Mon équipe passe des heures à trier, à copier et à répondre aux mêmes choses.",
      "Nous voulons utiliser l'IA, mais nous ne savons pas où elle aiderait vraiment.",
      "Nous avons essayé un outil d'IA, et il ne se relie pas à nos systèmes.",
      "Nous voulons que l'IA aide, mais une personne doit approuver le résultat.",
    ],
    approach: [
      {
        title: "Partir du flux de travail, pas du modèle",
        detail:
          "Nous repérons l'étape où l'IA supprime un vrai effort, puis nous choisissons l'outil le plus simple qui fait le travail.",
      },
      {
        title: "Garder les personnes aux commandes",
        detail:
          "L'IA rédige et suggère. Votre équipe révise et approuve tout ce qui compte, et le système en garde une trace.",
      },
      {
        title: "Mesurer ce qui change",
        detail:
          "Nous convenons de la façon de mesurer le succès, par exemple le temps économisé ou les erreurs évitées, et nous le vérifions après le lancement.",
      },
    ],
    faqs: [
      {
        question: "Nos données serviront-elles à entraîner des modèles d'IA?",
        answer:
          "Pas de notre part. Nous choisissons des fournisseurs et des réglages qui gardent vos données hors de l'entraînement des modèles lorsque cette option existe, et nous documentons où vont les données.",
      },
      {
        question: "L'IA peut-elle fonctionner avec nos logiciels actuels?",
        answer:
          "Généralement, oui. Nous intégrons l'IA par les API et les bases de données de vos systèmes, pour que les gens continuent de travailler dans les outils qu'ils connaissent.",
      },
    ],
  },

  "database-solutions": {
    name: "Solutions de bases de données",
    card: "Conception, développement, optimisation et migration de bases de données, pour que vos données soient organisées, rapides et fiables.",
    seoTitle: "Développement et optimisation de bases de données",
    metaDescription:
      "Architecture, développement, gestion, optimisation et migration de bases de données. Nous structurons et intégrons vos données pour qu'elles soient exactes, rapides et utilisables.",
    headline: "Des bases de données conçues pour que vos données soient organisées, rapides et fiables.",
    lead: "Chaque système dépend de ses données. Nous concevons, construisons, gérons et optimisons les bases de données derrière vos applications, et nous déplaçons vos données en toute sécurité des anciens systèmes vers les nouveaux.",
    overview:
      "Une bonne structure de données facilite tout le reste : des applications plus rapides, des rapports exacts et des intégrations qui tiennent. Pour nous, la base de données fait partie du produit, pas d'une réflexion après coup.",
    capabilities: [
      "Architecture et conception de bases de données",
      "Développement de bases de données",
      "Gestion de bases de données",
      "Optimisation de bases de données",
      "Migration de données",
      "Intégration de bases de données",
      "Structuration et organisation des données",
    ],
    challenges: [
      "La même information se trouve à plusieurs endroits et ne concorde pas.",
      "Les rapports sont lents, ou quelqu'un les refait à la main chaque mois.",
      "Notre application ralentit à mesure que les données augmentent.",
      "Nous devons déplacer des données d'un ancien système sans rien perdre.",
    ],
    approach: [
      {
        title: "Modéliser d'abord l'entreprise",
        detail:
          "Nous concevons la structure des données autour de la façon dont votre entreprise fonctionne, pour qu'elle reste claire à mesure qu'elle grandit.",
      },
      {
        title: "Migrer avec des vérifications",
        detail:
          "Nous déplaçons les données par étapes répétées, comparons les résultats et gardons un chemin de retour jusqu'à ce que tout soit vérifié.",
      },
      {
        title: "Optimiser pour les charges réelles",
        detail: "Nous mesurons les requêtes qui comptent et optimisons celles-là, plutôt que de deviner.",
      },
    ],
    faqs: [
      {
        question: "Avec quelles bases de données travaillez-vous?",
        answer:
          "Nous travaillons avec les bases de données relationnelles et documentaires courantes, et nous choisissons selon vos exigences, les compétences de votre équipe et la maintenance à long terme.",
      },
      {
        question: "Pouvez-vous nettoyer nos données existantes?",
        answer:
          "Oui. Structurer, dédoublonner et organiser les données existantes est souvent la première étape avant une migration ou une intégration.",
      },
    ],
  },

  "cloud-solutions": {
    name: "Solutions infonuagiques et infrastructure",
    card: "Architecture infonuagique, migration et infrastructure : des déploiements évolutifs sur les plateformes que votre entreprise choisit.",
    seoTitle: "Migration vers le nuage et services d'infrastructure",
    metaDescription:
      "Architecture infonuagique, migration, développement d'infrastructure, gestion de serveurs et optimisation. Des déploiements évolutifs et sécurisés sur les grandes plateformes.",
    headline: "Une infrastructure infonuagique conçue pour être fiable et évolutive.",
    lead: "Nous concevons l'architecture infonuagique, migrons les systèmes existants et bâtissons l'infrastructure et les chaînes de déploiement qui gardent vos applications disponibles, sécurisées et maîtrisées sur le plan des coûts.",
    overview:
      "Passer au nuage est un moyen, pas un but. Nous planifions en fonction de la disponibilité, de la sécurité, des coûts et de la façon dont votre équipe exploitera le résultat, sur des plateformes comme Microsoft Azure et Amazon Web Services.",
    capabilities: [
      "Architecture infonuagique",
      "Migration vers le nuage",
      "Développement d'infrastructure infonuagique",
      "Configuration et gestion de serveurs",
      "Applications infonuagiques évolutives",
      "Optimisation infonuagique",
      "Solutions de déploiement et d'infrastructure",
    ],
    challenges: [
      "Nos serveurs vieillissent et personne ne veut y toucher.",
      "Nous voulons passer au nuage sans interrompre l'entreprise.",
      "Notre facture infonuagique augmente sans cesse et nous ne savons pas pourquoi.",
      "Les déploiements sont manuels, lents ou risqués.",
    ],
    approach: [
      {
        title: "Évaluer avant de déménager",
        detail:
          "Nous dressons l'inventaire de ce qui roule où, de ce qui dépend de quoi et de ce qui devrait changer avant que quoi que ce soit ne bouge.",
      },
      {
        title: "Migrer par étapes",
        detail: "Chaque étape est répétée et réversible, pour que l'entreprise continue de fonctionner tout au long.",
      },
      {
        title: "Automatiser le déploiement",
        detail:
          "Des chaînes de déploiement reproductibles et une infrastructure décrite en code rendent les mises en production routinières plutôt que risquées.",
      },
    ],
    faqs: [
      {
        question: "Avec quelles plateformes infonuagiques travaillez-vous?",
        answer:
          "Nous travaillons avec les grandes plateformes, comme Microsoft Azure et Amazon Web Services, et nous recommandons selon ce que vous exploitez déjà et ce que le projet exige.",
      },
      {
        question: "Serons-nous enfermés chez un seul fournisseur?",
        answer:
          "Nous concevons pour garder vos options ouvertes lorsque c'est pertinent, et nous documentons l'architecture pour qu'elle puisse être exploitée ou déplacée plus tard.",
      },
    ],
  },

  "software-architecture": {
    name: "Architecture logicielle",
    card: "Architecture et planification de systèmes évolutifs : conception back-end, API, intégrations et infrastructure technique.",
    seoTitle: "Architecture logicielle et conception de systèmes",
    metaDescription:
      "Architecture logicielle et applicative, conception de systèmes évolutifs, architecture back-end et d'API, intégration de systèmes et planification de l'infrastructure technique.",
    headline: "Une architecture logicielle qui permet aux systèmes de grandir sans se briser.",
    lead: "Une bonne architecture détermine avec quelle facilité un système peut changer. Nous concevons la structure, les interfaces et les intégrations qui gardent votre technologie fiable à mesure que l'entreprise évolue.",
    overview:
      "Nous planifions avant de construire : comment les composants s'assemblent, comment les données circulent, comment les systèmes se parlent et où le système devra évoluer. Cette planification évite des reprises coûteuses plus tard.",
    capabilities: [
      "Architecture et planification logicielles",
      "Conception de systèmes évolutifs",
      "Architecture back-end",
      "Architecture d'API",
      "Intégration de systèmes",
      "Planification de l'infrastructure technique",
      "Architecture applicative",
    ],
    challenges: [
      "Chaque changement casse autre chose.",
      "Nos systèmes ne se parlent pas.",
      "Nous sommes sur le point de construire quelque chose de gros et nous voulons de bonnes fondations.",
      "Nous avons hérité d'un système que personne ne comprend entièrement.",
    ],
    approach: [
      {
        title: "Décider en voyant les compromis",
        detail:
          "Nous consignons les options, ce que chacune coûte et pourquoi nous en recommandons une, dans un langage que les décideurs peuvent suivre.",
      },
      {
        title: "Définir les frontières",
        detail:
          "Des interfaces claires entre les parties permettent aux équipes de travailler de façon indépendante et de remplacer les systèmes une pièce à la fois.",
      },
      {
        title: "Documenter ce que nous concevons",
        detail:
          "Les schémas et les décisions sont consignés pour que votre équipe, ou tout développeur compétent, puisse poursuivre le travail.",
      },
    ],
    faqs: [
      {
        question: "Faites-vous seulement la conception, ou aussi la construction?",
        answer:
          "Les deux. Certains clients nous confient l'architecture et construisent avec leur propre équipe. D'autres nous demandent de concevoir et de construire.",
      },
      {
        question: "Pouvez-vous examiner une architecture que nous avons déjà?",
        answer:
          "Oui. Nous examinons les systèmes existants et vous disons ce qui est solide, ce qui est risqué et ce qu'il faut changer en premier.",
      },
    ],
  },

  "application-modernization": {
    name: "Modernisation d'applications",
    card: "Mise à niveau, restructuration et migration d'applications héritées, pour que les systèmes vieillissants cessent de freiner l'entreprise.",
    seoTitle: "Services de modernisation d'applications héritées",
    metaDescription:
      "Modernisation de systèmes hérités, mise à niveau d'applications, optimisation du rendement, restructuration de systèmes et migration technologique pour les systèmes d'affaires désuets.",
    headline: "Modernisez les systèmes dont votre entreprise dépend déjà.",
    lead: "Un logiciel désuet est risqué, lent et difficile à modifier. Nous mettons à niveau, restructurons et migrons les applications existantes par étapes, sans arrêter le travail qui en dépend.",
    overview:
      "La plupart des entreprises ne peuvent pas éteindre un système essentiel et repartir de zéro. Nous modernisons autour de ce qui fonctionne : garder ce qui est solide, remplacer ce qui ne l'est pas et passer à une technologie actuelle une étape à la fois.",
    capabilities: [
      "Modernisation de systèmes hérités",
      "Mise à niveau d'applications existantes",
      "Optimisation du rendement",
      "Restructuration de systèmes",
      "Migration technologique",
      "Amélioration du code source",
      "Modernisation de systèmes d'affaires désuets",
    ],
    challenges: [
      "Notre logiciel repose sur une technologie que plus personne ne supporte.",
      "Il est lent, et chaque changement prend des mois.",
      "Une seule personne comprend comment il fonctionne.",
      "Nous voulons de nouvelles fonctions, mais l'ancien système ne peut pas les soutenir.",
    ],
    approach: [
      {
        title: "Comprendre avant de changer",
        detail:
          "Nous lisons le code, cartographions les dépendances et découvrons ce que le système fait vraiment, y compris ce que personne n'a documenté.",
      },
      {
        title: "Moderniser par étapes",
        detail:
          "Nous remplaçons ou mettons à niveau une pièce à la fois, pour que l'entreprise continue de fonctionner et que chaque étape puisse être vérifiée.",
      },
      {
        title: "Le laisser plus facile à maintenir",
        detail:
          "Un code plus propre, des tests et de la documentation font que le prochain changement coûte moins cher que le précédent.",
      },
    ],
    faqs: [
      {
        question: "Faut-il tout reconstruire?",
        answer:
          "Rarement. Nous recommandons généralement de mettre à niveau ou de remplacer les parties qui vous freinent et de garder ce qui fonctionne.",
      },
      {
        question: "Le système peut-il rester en service pendant la modernisation?",
        answer:
          "Oui. Une migration par étapes et l'exploitation en parallèle permettent à l'entreprise de continuer à travailler pendant que le système change en dessous.",
      },
    ],
  },

  "digital-transformation": {
    name: "Transformation numérique",
    card: "Flux de travail numériques, optimisation des processus et systèmes intégrés, pour que la technologie soutienne la façon dont l'entreprise fonctionne.",
    seoTitle: "Conseil et développement en transformation numérique",
    metaDescription:
      "Transformation technologique des affaires : développement de flux de travail numériques, optimisation des processus, intégration technologique et modernisation des systèmes d'affaires.",
    headline: "Une transformation numérique ancrée dans la façon dont votre entreprise fonctionne.",
    lead: "Nous transformons des processus manuels et cloisonnés en flux de travail numériques intégrés, et nous modernisons les systèmes d'affaires qui les entourent, une étape pratique à la fois.",
    overview:
      "Se transformer, c'est changer la façon dont le travail se fait, pas seulement acheter un logiciel. Nous partons du processus, déterminons ce que la technologie doit faire, puis nous la construisons et la relions pour que le changement dure.",
    capabilities: [
      "Transformation technologique des affaires",
      "Développement de flux de travail numériques",
      "Optimisation des processus",
      "Intégration technologique",
      "Modernisation des systèmes d'affaires",
      "Développement de l'infrastructure numérique",
    ],
    challenges: [
      "Trop de notre travail se fait encore sur papier, par courriel ou à la main.",
      "Nos outils ne partagent pas l'information, alors les gens la ressaisissent.",
      "Nous savons qu'il faut moderniser, mais pas par où commencer.",
      "Il nous faut un plan que toute l'entreprise puisse suivre.",
    ],
    approach: [
      {
        title: "Cartographier le travail tel qu'il est",
        detail:
          "Nous documentons comment les processus fonctionnent aujourd'hui, y compris les contournements, avant de proposer quelque changement que ce soit.",
      },
      {
        title: "Prioriser selon l'effet",
        detail:
          "Nous classons les changements selon la valeur qu'ils apportent et l'effort qu'ils demandent, pour que vous commenciez là où c'est le plus important.",
      },
      {
        title: "Livrer par étapes",
        detail:
          "Chaque étape livre quelque chose d'utilisable, pour que l'entreprise en profite en cours de route plutôt que d'attendre un grand lancement.",
      },
    ],
    faqs: [
      {
        question: "Par où commencer?",
        answer:
          "Généralement par une évaluation technique de vos processus et de vos systèmes actuels. Elle montre ce qu'il faut changer en premier et ce que cela demanderait.",
      },
      {
        question: "Faut-il tout changer en même temps?",
        answer: "Non. Nous planifions les changements par étapes, et chaque étape apporte quelque chose d'utile en soi.",
      },
    ],
  },

  "technology-consulting": {
    name: "Conseil et résolution de problèmes techniques",
    card: "Conseil en technologie, évaluations techniques et dépannage, de la planification à la mise en œuvre.",
    seoTitle: "Conseil en technologie et évaluations techniques",
    metaDescription:
      "Conseil en technologie, évaluations techniques, dépannage logiciel, diagnostic de systèmes et stratégie technologique sur mesure, de la planification à la mise en œuvre.",
    headline: "Une expertise technique pour vos problèmes les plus difficiles et vos plus grandes décisions.",
    lead: "Quand quelque chose est en panne, flou ou sur le point de changer, nous vous aidons à le comprendre, à décider quoi faire, puis à le réaliser, ou à remettre un plan clair à votre propre équipe.",
    overview:
      "Parfois, le livrable le plus précieux est une réponse claire : ce qui ne va pas, quoi faire et ce que cela coûtera. Nous diagnostiquons d'abord le problème et ne recommandons que ce que les faits appuient.",
    capabilities: [
      "Conseil en technologie",
      "Évaluations techniques",
      "Dépannage logiciel",
      "Résolution de problèmes techniques complexes",
      "Stratégies technologiques sur mesure",
      "Améliorations de l'infrastructure",
      "Diagnostic de systèmes",
      "Planification et mise en œuvre techniques",
    ],
    challenges: [
      "Quelque chose dans notre système fait défaut et nous n'en trouvons pas la cause.",
      "Il nous faut un avis indépendant avant une grande décision technologique.",
      "Notre équipe est débordée et a besoin d'une aide technique senior.",
      "Il nous faut un plan, et quelqu'un pour aider à le réaliser.",
    ],
    approach: [
      {
        title: "Diagnostiquer avec des preuves",
        detail: "Nous reproduisons le problème, le mesurons et remontons à sa cause avant de recommander un correctif.",
      },
      {
        title: "Formuler une recommandation claire",
        detail:
          "Vous recevez une évaluation écrite avec des priorités, des options et des coûts, que vous nous confiiez ou non la mise en œuvre.",
      },
      {
        title: "Rester jusqu'à la mise en œuvre",
        detail: "Si vous le souhaitez, nous réalisons le plan ou travaillons aux côtés de votre équipe jusqu'à la fin.",
      },
    ],
    faqs: [
      {
        question: "Qu'est-ce qu'une évaluation technique?",
        answer:
          "Un examen à portée fixe de vos systèmes, de vos processus ou de votre code, qui se termine par des constats, des priorités et un plan chiffré. Notre audit des systèmes numériques en est une forme.",
      },
      {
        question: "Pouvez-vous aider avec un problème déjà en production?",
        answer:
          "Oui. Le dépannage de systèmes en service fait partie du travail. Nous stabilisons d'abord, puis nous trouvons et corrigeons la cause.",
      },
    ],
  },
};

export const servicesPage: ServicesPage = {
  metaTitle: "Logiciels sur mesure, web, IA, infonuagique et services technologiques",
  metaDescription:
    "Développement de logiciels sur mesure, développement web et d'applications, solutions d'IA, bases de données, infonuagique, architecture logicielle, modernisation d'applications, transformation numérique et conseil en technologie.",
  eyebrow: "Services",
  title: "Neuf capacités. Une seule équipe d'ingénierie.",
  lead: "Logiciels sur mesure, applications web, IA, bases de données, infonuagique, architecture, modernisation, transformation et conseil technique. Faites appel à une capacité pour un problème précis, ou à plusieurs pour une solution complète.",
  capabilitiesTitle: "Ce que nous faisons",
  challengesTitle: "Cela vous dit quelque chose?",
  approachTitle: "Notre façon d'aborder le travail",
  relatedTitle: "Capacités connexes",
  faqTitle: "Questions fréquentes",
  exploreLabel: "Découvrir",
  capabilityCount: "{count} capacités",
  allServices: "Tous les services",
  assessmentTitle: "Commencer par une évaluation technique",
  assessmentBody:
    "Si vous souhaitez une vue écrite et factuelle de vos systèmes avant de vous engager dans un projet, notre audit des systèmes numériques est une évaluation à portée fixe qui se termine par un plan priorisé et chiffré.",
  assessmentLink: "À propos de l'audit des systèmes numériques",
  ctaTitle: "Vous ne savez pas de quelle capacité vous avez besoin?",
  ctaLead: "Décrivez le défi. Nous vous dirons ce que nous ferions, et quelles capacités cela met en jeu.",
};
