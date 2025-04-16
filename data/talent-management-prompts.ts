import type { Prompt } from "@/types/prompt"

export const talentManagementPrompts: Prompt[] = [
  {
    id: "performance-review",
    title: "Évaluation de performance personnalisée",
    description: "Générez des évaluations de performance détaillées et constructives pour vos employés.",
    text: `Je souhaite que tu m'aides à rédiger une évaluation de performance pour [NOM DE L'EMPLOYÉ], qui occupe le poste de [POSTE] dans notre entreprise depuis [DURÉE]. 

Voici quelques informations sur ses performances :
- Réalisations principales : [LISTE DES RÉALISATIONS]
- Points forts : [POINTS FORTS]
- Axes d'amélioration : [AXES D'AMÉLIORATION]
- Objectifs atteints : [OBJECTIFS ATTEINTS]
- Objectifs non atteints : [OBJECTIFS NON ATTEINTS]

Génère une évaluation de performance professionnelle, équilibrée et constructive qui :
1. Reconnaît ses contributions et réussites
2. Identifie clairement les domaines d'amélioration avec des suggestions concrètes
3. Propose des objectifs SMART pour la prochaine période d'évaluation
4. Inclut un plan de développement professionnel adapté à sa carrière
5. Utilise un ton encourageant mais honnête

Format souhaité :
- Introduction
- Évaluation des performances (forces et réussites)
- Axes d'amélioration
- Objectifs pour la prochaine période
- Plan de développement
- Conclusion`,
    example: `Je souhaite que tu m'aides à rédiger une évaluation de performance pour Sophie Martin, qui occupe le poste de Cheffe de Projet Marketing dans notre entreprise depuis 2 ans. 

Voici quelques informations sur ses performances :
- Réalisations principales : A dirigé avec succès le lancement de notre nouvelle campagne digitale avec un ROI de 150%, a amélioré la coordination entre les équipes marketing et ventes, a mis en place un nouveau système de suivi des KPIs
- Points forts : Leadership, créativité, résolution de problèmes, communication
- Axes d'amélioration : Gestion du temps, délégation, documentation des processus
- Objectifs atteints : Augmentation du trafic web de 35%, amélioration de la conversion de 12%, lancement de 3 nouvelles campagnes
- Objectifs non atteints : Réduction du coût d'acquisition client de 20% (seulement 15% atteint), formation de l'équipe junior

Génère une évaluation de performance professionnelle, équilibrée et constructive qui :
1. Reconnaît ses contributions et réussites
2. Identifie clairement les domaines d'amélioration avec des suggestions concrètes
3. Propose des objectifs SMART pour la prochaine période d'évaluation
4. Inclut un plan de développement professionnel adapté à sa carrière
5. Utilise un ton encourageant mais honnête`,
    difficulty: 2,
    technique: "Prompting contextuel",
    category: {
      id: "talent-management",
      title: "Gestion des talents",
      description: "Prompts pour la gestion des talents et le développement des employés",
      color: "#8B5CF6",
      icon: "Users",
    },
    tags: ["RH", "Évaluation", "Performance", "Développement professionnel"],
    tips: [
      "Soyez précis sur les réalisations et les points à améliorer",
      "Incluez des exemples concrets pour chaque point mentionné",
      "Adaptez le ton en fonction de la culture de votre entreprise",
      "Assurez-vous que les objectifs proposés sont SMART (Spécifiques, Mesurables, Atteignables, Réalistes, Temporellement définis)",
    ],
    variants: [
      {
        title: "Évaluation pour un nouvel employé",
        prompt: `Je souhaite que tu m'aides à rédiger une évaluation de performance pour [NOM DE L'EMPLOYÉ], qui occupe le poste de [POSTE] dans notre entreprise depuis seulement [DURÉE < 1 AN]. 

Voici quelques informations sur ses performances pendant cette période d'intégration :
- Réalisations principales : [LISTE DES RÉALISATIONS]
- Points forts observés : [POINTS FORTS]
- Axes d'adaptation et d'amélioration : [AXES D'AMÉLIORATION]
- Objectifs d'intégration atteints : [OBJECTIFS ATTEINTS]
- Défis rencontrés : [DÉFIS]

Génère une évaluation de performance adaptée à un nouvel employé qui :
1. Reconnaît ses efforts d'adaptation et ses premières contributions
2. Identifie les domaines où un soutien supplémentaire pourrait être bénéfique
3. Propose des objectifs réalistes pour les 6 prochains mois
4. Inclut des suggestions pour faciliter son intégration continue
5. Utilise un ton encourageant et constructif`,
      },
      {
        title: "Évaluation pour un manager",
        prompt: `Je souhaite que tu m'aides à rédiger une évaluation de performance pour [NOM DU MANAGER], qui occupe le poste de [POSTE DE MANAGEMENT] et supervise une équipe de [NOMBRE] personnes depuis [DURÉE].

Voici quelques informations sur ses performances :
- Réalisations principales de son équipe : [LISTE DES RÉALISATIONS]
- Points forts en tant que manager : [POINTS FORTS]
- Compétences de leadership à développer : [AXES D'AMÉLIORATION]
- Indicateurs de performance de l'équipe : [KPIs DE L'ÉQUIPE]
- Feedback reçu de son équipe : [FEEDBACK]

Génère une évaluation de performance spécifique aux compétences managériales qui :
1. Évalue sa capacité à diriger, motiver et développer son équipe
2. Analyse l'impact de son style de management sur les résultats de l'équipe
3. Identifie des opportunités d'amélioration de ses compétences de leadership
4. Propose des objectifs de développement managérial pour la prochaine période
5. Inclut des recommandations pour améliorer l'engagement et la performance de son équipe`,
      },
    ],
    relatedPrompts: ["career-development-plan", "team-building-activities", "leadership-training"],
  },
  {
    id: "career-development-plan",
    title: "Plan de développement de carrière",
    description: "Créez des plans de développement de carrière personnalisés pour vos employés.",
    text: `Je souhaite que tu m'aides à créer un plan de développement de carrière pour [NOM DE L'EMPLOYÉ], qui occupe actuellement le poste de [POSTE ACTUEL] et aspire à évoluer vers [POSTE/RÔLE CIBLE] dans les [PÉRIODE] prochaines années.

Voici des informations pertinentes :
- Compétences actuelles : [LISTE DES COMPÉTENCES]
- Expérience professionnelle : [ANNÉES D'EXPÉRIENCE ET POSTES PRÉCÉDENTS]
- Formation et diplômes : [FORMATION]
- Points forts : [POINTS FORTS]
- Axes de développement : [AXES DE DÉVELOPPEMENT]
- Intérêts professionnels : [INTÉRÊTS]

Génère un plan de développement de carrière détaillé qui comprend :
1. Une analyse de l'écart entre les compétences actuelles et celles requises pour le poste cible
2. Des objectifs de développement à court terme (6-12 mois) et à long terme (1-3 ans)
3. Des recommandations de formations, certifications ou diplômes pertinents
4. Des suggestions d'expériences professionnelles à acquérir (projets, missions, responsabilités)
5. Un calendrier de développement avec des étapes clés
6. Des indicateurs de réussite pour mesurer la progression
7. Des ressources et du soutien nécessaires (mentorat, coaching, etc.)`,
    example: `Je souhaite que tu m'aides à créer un plan de développement de carrière pour Thomas Dubois, qui occupe actuellement le poste de Développeur Full-Stack et aspire à évoluer vers un poste de Lead Developer dans les 2 prochaines années.

Voici des informations pertinentes :
- Compétences actuelles : JavaScript, React, Node.js, SQL, Git, méthodologies Agile
- Expérience professionnelle : 4 ans comme développeur, dont 2 ans dans notre entreprise
- Formation et diplômes : Master en Informatique
- Points forts : Résolution de problèmes techniques, code de qualité, apprentissage rapide
- Axes de développement : Leadership, communication avec les parties prenantes, vision stratégique
- Intérêts professionnels : Architecture logicielle, mentorat, optimisation des processus de développement

Génère un plan de développement de carrière détaillé qui comprend :
1. Une analyse de l'écart entre les compétences actuelles et celles requises pour le poste de Lead Developer
2. Des objectifs de développement à court terme (6-12 mois) et à long terme (1-3 ans)
3. Des recommandations de formations, certifications ou diplômes pertinents
4. Des suggestions d'expériences professionnelles à acquérir (projets, missions, responsabilités)
5. Un calendrier de développement avec des étapes clés
6. Des indicateurs de réussite pour mesurer la progression
7. Des ressources et du soutien nécessaires (mentorat, coaching, etc.)`,
    difficulty: 3,
    technique: "Prompting détaillé",
    category: {
      id: "talent-management",
      title: "Gestion des talents",
      description: "Prompts pour la gestion des talents et le développement des employés",
      color: "#8B5CF6",
      icon: "Users",
    },
    tags: ["Carrière", "Développement", "Formation", "Compétences"],
    tips: [
      "Soyez précis sur les compétences actuelles et les objectifs de carrière",
      "Adaptez le plan aux spécificités de votre secteur d'activité",
      "Incluez des étapes intermédiaires réalistes",
      "Prévoyez des points de contrôle réguliers pour ajuster le plan",
    ],
    variants: [
      {
        title: "Plan de reconversion professionnelle",
        prompt: `Je souhaite que tu m'aides à créer un plan de reconversion professionnelle pour [NOM DE L'EMPLOYÉ], qui occupe actuellement le poste de [POSTE ACTUEL] et souhaite se reconvertir dans le domaine de [NOUVEAU DOMAINE] dans les [PÉRIODE] prochains mois/années.

Voici des informations pertinentes :
- Compétences actuelles : [LISTE DES COMPÉTENCES]
- Compétences transférables : [COMPÉTENCES TRANSFÉRABLES]
- Expérience professionnelle : [ANNÉES D'EXPÉRIENCE ET POSTES PRÉCÉDENTS]
- Formation et diplômes : [FORMATION]
- Motivation pour ce changement : [MOTIVATION]
- Contraintes personnelles : [CONTRAINTES]

Génère un plan de reconversion professionnelle détaillé qui comprend :
1. Une analyse des compétences transférables et des lacunes à combler
2. Un parcours de formation adapté (formations courtes, certifications, autoformation)
3. Des suggestions pour acquérir une première expérience dans le nouveau domaine
4. Un calendrier réaliste tenant compte des contraintes personnelles
5. Des stratégies pour valoriser l'expérience passée dans le nouveau contexte professionnel
6. Des conseils pour le réseautage et la recherche d'opportunités dans le nouveau domaine`,
      },
      {
        title: "Plan de développement pour haut potentiel",
        prompt: `Je souhaite que tu m'aides à créer un plan de développement accéléré pour [NOM DE L'EMPLOYÉ], qui a été identifié comme haut potentiel dans notre entreprise. Actuellement au poste de [POSTE ACTUEL], nous envisageons un parcours qui pourrait le/la mener à un poste de [POSTE CIBLE] dans les [PÉRIODE] prochaines années.

Voici des informations pertinentes :
- Compétences distinctives : [LISTE DES COMPÉTENCES]
- Réalisations marquantes : [RÉALISATIONS]
- Formation et diplômes : [FORMATION]
- Évaluations de performance : [SYNTHÈSE DES ÉVALUATIONS]
- Aspirations professionnelles : [ASPIRATIONS]
- Qualités de leadership observées : [QUALITÉS DE LEADERSHIP]

Génère un plan de développement accéléré qui comprend :
1. Un programme de développement intensif sur 18-24 mois
2. Des expériences professionnelles variées et challengeantes (rotations, projets stratégiques)
3. Des formations de haut niveau et des certifications avancées
4. Un programme de mentorat avec des dirigeants de l'entreprise
5. Des expositions à la direction et au conseil d'administration
6. Des missions internationales ou transversales
7. Un suivi personnalisé avec des objectifs ambitieux mais atteignables`,
      },
    ],
    relatedPrompts: ["performance-review", "team-building-activities", "leadership-training"],
  },
  {
    id: "team-building-activities",
    title: "Activités de team building personnalisées",
    description: "Générez des idées d'activités de team building adaptées à votre équipe et à vos objectifs.",
    text: `Je souhaite que tu me proposes des activités de team building pour mon équipe de [NOMBRE] personnes qui travaillent dans le département [DÉPARTEMENT]. Notre objectif principal est de [OBJECTIF : améliorer la communication/renforcer la cohésion/stimuler la créativité/etc.].

Informations importantes :
- Profil de l'équipe : [DESCRIPTION : âge moyen, mixité, ancienneté, etc.]
- Budget disponible : environ [MONTANT] euros par personne
- Durée souhaitée : [DURÉE] (quelques heures/une journée/un week-end)
- Contraintes éventuelles : [CONTRAINTES : accessibilité, langues, etc.]
- Lieu : [EN PRÉSENTIEL/À DISTANCE/HYBRIDE]
- Période de l'année : [SAISON/MOIS]

Je souhaite recevoir :
1. Une liste de 5 activités de team building adaptées à notre contexte
2. Pour chaque activité :
   - Une description détaillée
   - Les objectifs spécifiques visés
   - Le déroulement étape par étape
   - Le matériel nécessaire
   - La durée estimée
   - Des conseils pour l'animation
3. Une analyse des bénéfices attendus pour l'équipe`,
    example: `Je souhaite que tu me proposes des activités de team building pour mon équipe de 12 personnes qui travaillent dans le département Marketing Digital. Notre objectif principal est d'améliorer la collaboration et la communication entre les différents pôles de l'équipe (SEO, réseaux sociaux, contenu et analytics).

Informations importantes :
- Profil de l'équipe : âge moyen de 30 ans, équipe internationale (3 nationalités), mixité équilibrée, 2 nouveaux arrivants ce mois-ci
- Budget disponible : environ 80 euros par personne
- Durée souhaitée : une journée complète
- Contraintes éventuelles : une personne à mobilité réduite dans l'équipe, préférence pour des activités peu physiques
- Lieu : en présentiel, possibilité de se déplacer dans un rayon de 30km autour de nos bureaux
- Période de l'année : printemps (mai)

Je souhaite recevoir :
1. Une liste de 5 activités de team building adaptées à notre contexte
2. Pour chaque activité :
   - Une description détaillée
   - Les objectifs spécifiques visés
   - Le déroulement étape par étape
   - Le matériel nécessaire
   - La durée estimée
   - Des conseils pour l'animation
3. Une analyse des bénéfices attendus pour l'équipe`,
    difficulty: 2,
    technique: "Prompting détaillé",
    category: {
      id: "talent-management",
      title: "Gestion des talents",
      description: "Prompts pour la gestion des talents et le développement des employés",
      color: "#8B5CF6",
      icon: "Users",
    },
    tags: ["Team Building", "Cohésion", "Activités", "Équipe"],
    tips: [
      "Soyez précis sur les objectifs que vous souhaitez atteindre avec l'activité",
      "Tenez compte de la diversité et de l'inclusivité dans votre équipe",
      "Adaptez les activités à la culture de votre entreprise",
      "Prévoyez un temps de débriefing après l'activité pour maximiser les bénéfices",
    ],
    variants: [
      {
        title: "Team building à distance",
        prompt: `Je souhaite que tu me proposes des activités de team building pour mon équipe de [NOMBRE] personnes qui travaillent à distance dans [NOMBRE] pays/régions différents. Notre objectif principal est de [OBJECTIF : renforcer les liens/améliorer la communication/créer un sentiment d'appartenance/etc.] malgré la distance.

Informations importantes :
- Profil de l'équipe : [DESCRIPTION : âge moyen, diversité culturelle, fuseaux horaires, etc.]
- Budget disponible : environ [MONTANT] euros par personne
- Durée souhaitée : [DURÉE] (sessions de 1-2h maximum)
- Contraintes techniques : [OUTILS DISPONIBLES : Zoom, Teams, Miro, etc.]
- Fréquence souhaitée : [FRÉQUENCE : hebdomadaire/mensuelle/trimestrielle]

Je souhaite recevoir :
1. Une liste de 5 activités de team building virtuelles adaptées à notre contexte
2. Pour chaque activité :
   - Une description détaillée
   - Les objectifs spécifiques visés
   - Le déroulement étape par étape
   - La préparation nécessaire (matériel, logiciels, etc.)
   - La durée estimée
   - Des conseils pour l'animation à distance
3. Des suggestions pour maintenir l'engagement entre les sessions`,
      },
      {
        title: "Team building pour résolution de conflits",
        prompt: `Je souhaite que tu me proposes des activités de team building spécifiquement conçues pour une équipe de [NOMBRE] personnes qui traverse des tensions internes. Les principaux problèmes identifiés sont [PROBLÈMES : manque de confiance/communication défaillante/conflits de personnalité/silos entre sous-équipes/etc.].

Informations importantes :
- Profil de l'équipe : [DESCRIPTION : composition, ancienneté, dynamique actuelle]
- Historique : [BREF CONTEXTE sur l'origine des tensions]
- Budget disponible : environ [MONTANT] euros par personne
- Durée souhaitée : [DURÉE] (idéalement une journée complète ou plus)
- Environnement souhaité : [PRÉFÉRENCE : neutre, hors du bureau]
- Niveau d'intervention : [AVEC/SANS facilitateur professionnel externe]

Je souhaite recevoir :
1. Une liste de 5 activités de team building axées sur la résolution de conflits et la reconstruction de la confiance
2. Pour chaque activité :
   - Une description détaillée
   - Les objectifs thérapeutiques visés
   - Le déroulement progressif et sécurisant
   - Les précautions à prendre pour éviter d'aggraver les tensions
   - La durée recommandée
   - Des conseils pour l'animation et la gestion des émotions
3. Un plan de suivi post-activité pour consolider les progrès réalisés`,
      },
    ],
    relatedPrompts: ["performance-review", "career-development-plan", "leadership-training"],
  },
  {
    id: "leadership-training",
    title: "Programme de formation au leadership",
    description: "Créez un programme de formation au leadership adapté aux besoins de vos managers.",
    text: `Je souhaite que tu m'aides à concevoir un programme de formation au leadership pour [NOMBRE] managers de niveau [NIVEAU : junior/intermédiaire/senior] dans notre entreprise de [SECTEUR D'ACTIVITÉ]. L'objectif principal est de [OBJECTIF : développer leurs compétences en leadership/préparer la relève/harmoniser les pratiques managériales/etc.].

Informations importantes :
- Profil des participants : [DESCRIPTION : expérience moyenne, formation initiale, etc.]
- Compétences à développer en priorité : [LISTE DES COMPÉTENCES]
- Durée totale disponible : [DURÉE] (ex: 5 jours répartis sur 3 mois)
- Format souhaité : [FORMAT : présentiel/distanciel/mixte]
- Budget approximatif : [MONTANT] euros au total
- Contraintes organisationnelles : [CONTRAINTES]

Je souhaite recevoir :
1. Un programme de formation complet avec :
   - Les objectifs pédagogiques détaillés
   - Le contenu des modules de formation
   - La progression pédagogique
   - Les méthodes d'apprentissage recommandées
   - Le calendrier de déploiement
2. Pour chaque module :
   - Les thématiques abordées
   - La durée recommandée
   - Les activités pédagogiques (exercices, mises en situation, etc.)
   - Les ressources nécessaires
3. Des recommandations pour l'évaluation des acquis et le suivi post-formation`,
    example: `Je souhaite que tu m'aides à concevoir un programme de formation au leadership pour 15 managers de niveau intermédiaire dans notre entreprise de services informatiques. L'objectif principal est de développer leurs compétences en leadership pour mieux gérer des équipes hybrides (présentiel/distanciel) et accompagner la transformation digitale de notre organisation.

Informations importantes :
- Profil des participants : 3 à 5 ans d'expérience en management, formation technique pour la plupart, peu de formation formelle en management
- Compétences à développer en priorité : communication efficace, feedback constructif, gestion du changement, intelligence émotionnelle, délégation et empowerment
- Durée totale disponible : 6 jours répartis sur 4 mois
- Format souhaité : mixte (4 jours en présentiel, 2 jours en distanciel)
- Budget approximatif : 25 000 euros au total
- Contraintes organisationnelles : sessions présentielles de 2 jours maximum, disponibilité limitée (1 à 2 jours par mois)

Je souhaite recevoir :
1. Un programme de formation complet avec :
   - Les objectifs pédagogiques détaillés
   - Le contenu des modules de formation
   - La progression pédagogique
   - Les méthodes d'apprentissage recommandées
   - Le calendrier de déploiement
2. Pour chaque module :
   - Les thématiques abordées
   - La durée recommandée
   - Les activités pédagogiques (exercices, mises en situation, etc.)
   - Les ressources nécessaires
3. Des recommandations pour l'évaluation des acquis et le suivi post-formation`,
    difficulty: 3,
    technique: "Prompting détaillé",
    category: {
      id: "talent-management",
      title: "Gestion des talents",
      description: "Prompts pour la gestion des talents et le développement des employés",
      color: "#8B5CF6",
      icon: "Users",
    },
    tags: ["Leadership", "Formation", "Management", "Développement"],
    tips: [
      "Adaptez le programme aux enjeux spécifiques de votre entreprise",
      "Prévoyez des temps d'application pratique entre les sessions",
      "Incluez des mécanismes de feedback et d'ajustement du programme",
      "Pensez à l'accompagnement post-formation (coaching, communauté de pratique, etc.)",
    ],
    variants: [
      {
        title: "Programme pour hauts potentiels",
        prompt: `Je souhaite que tu m'aides à concevoir un programme de développement du leadership pour [NOMBRE] collaborateurs identifiés comme hauts potentiels dans notre entreprise de [SECTEUR D'ACTIVITÉ]. L'objectif est de les préparer à prendre des responsabilités plus importantes dans les 2-3 prochaines années.

Informations importantes :
- Profil des participants : [DESCRIPTION : âge moyen, expérience, niveau hiérarchique actuel]
- Compétences déjà maîtrisées : [LISTE DES COMPÉTENCES]
- Compétences à développer : [LISTE DES COMPÉTENCES]
- Durée du programme : [DURÉE] (ex: 12 mois)
- Investissement possible : [MONTANT] euros par participant
- Ambition du programme : [NIVEAU D'AMBITION : local/national/international]

Je souhaite recevoir :
1. Un programme de développement intensif comprenant :
   - Des modules de formation avancés
   - Des expériences pratiques (projets stratégiques, missions spéciales)
   - Du mentorat par des dirigeants
   - Des expositions à la direction
   - Des évaluations 360°
2. Un parcours personnalisable avec :
   - Un tronc commun obligatoire
   - Des modules optionnels selon les besoins individuels
   - Des objectifs de développement mesurables
3. Un système de suivi et d'évaluation des progrès`,
      },
      {
        title: "Programme de leadership inclusif",
        prompt: `Je souhaite que tu m'aides à concevoir un programme de formation au leadership inclusif pour [NOMBRE] managers de tous niveaux dans notre entreprise de [SECTEUR D'ACTIVITÉ]. L'objectif est de développer une culture de management qui valorise la diversité et favorise l'inclusion au sein de nos équipes.

Informations importantes :
- Contexte : [DESCRIPTION : diversité actuelle, enjeux spécifiques, initiatives existantes]
- Principaux défis identifiés : [LISTE DES DÉFIS]
- Durée envisagée : [DURÉE] (ex: 4 jours + suivi)
- Format souhaité : [FORMAT : présentiel/distanciel/mixte]
- Niveau de sensibilisation actuel : [NIVEAU : débutant/intermédiaire/avancé]
- Objectifs organisationnels : [OBJECTIFS]

Je souhaite recevoir :
1. Un programme de formation complet sur le leadership inclusif avec :
   - Une sensibilisation aux biais inconscients
   - Des techniques pour favoriser l'équité et l'appartenance
   - Des outils pour créer des environnements psychologiquement sécurisants
   - Des stratégies pour valoriser les différences au sein des équipes
2. Pour chaque module :
   - Les concepts clés à aborder
   - Des exercices de prise de conscience
   - Des études de cas pertinentes
   - Des pratiques concrètes à mettre en œuvre
3. Des indicateurs pour mesurer l'impact du programme sur les pratiques managériales et la culture d'entreprise`,
      },
    ],
    relatedPrompts: ["performance-review", "career-development-plan", "team-building-activities"],
  },
  {
    id: "employee-engagement-survey",
    title: "Enquête d'engagement des employés",
    description: "Créez une enquête d'engagement personnalisée pour votre entreprise.",
    text: `Je souhaite que tu m'aides à concevoir une enquête d'engagement des employés pour notre entreprise de [SECTEUR] qui compte [NOMBRE] employés. Notre objectif est de [OBJECTIF : mesurer le niveau d'engagement actuel/identifier les axes d'amélioration/comparer avec l'année précédente/etc.].

Informations importantes :
- Contexte actuel : [CONTEXTE : restructuration récente/croissance rapide/télétravail/etc.]
- Thématiques prioritaires : [LISTE DES THÉMATIQUES]
- Fréquence prévue : [FRÉQUENCE : annuelle/semestrielle/trimestrielle]
- Format souhaité : [FORMAT : anonyme/nominatif/mixte]
- Durée maximale : [DURÉE] minutes pour compléter l'enquête
- Historique : [HISTORIQUE : première enquête/enquête régulière/suite à un événement particulier]

Je souhaite recevoir :
1. Une structure d'enquête complète avec :
   - Une introduction expliquant l'objectif et garantissant la confidentialité
   - Des sections thématiques clairement définies
   - Un équilibre entre questions quantitatives et qualitatives
   - Une conclusion avec possibilité de commentaires libres
2. Pour chaque section :
   - 3-5 questions quantitatives (échelle de Likert 1-5)
   - 1-2 questions ouvertes pertinentes
   - Des formulations précises et neutres
3. Des recommandations pour :
   - L'analyse des résultats
   - La communication avant et après l'enquête
   - Le suivi et les actions à mettre en place`,
    example: `Je souhaite que tu m'aides à concevoir une enquête d'engagement des employés pour notre entreprise de services financiers qui compte 350 employés. Notre objectif est d'identifier les axes d'amélioration prioritaires suite à notre récente fusion avec une autre entité.

Informations importantes :
- Contexte actuel : fusion récente (3 mois), équipes en cours d'intégration, cultures d'entreprise différentes
- Thématiques prioritaires : sentiment d'appartenance, clarté des rôles, communication interne, perspectives d'évolution, équilibre vie pro/perso
- Fréquence prévue : semestrielle pour suivre l'évolution pendant la période d'intégration
- Format souhaité : anonyme avec données démographiques limitées (département, ancienneté pré/post fusion)
- Durée maximale : 12 minutes pour compléter l'enquête
- Historique : première enquête post-fusion

Je souhaite recevoir :
1. Une structure d'enquête complète avec :
   - Une introduction expliquant l'objectif et garantissant la confidentialité
   - Des sections thématiques clairement définies
   - Un équilibre entre questions quantitatives et qualitatives
   - Une conclusion avec possibilité de commentaires libres
2. Pour chaque section :
   - 3-5 questions quantitatives (échelle de Likert 1-5)
   - 1-2 questions ouvertes pertinentes
   - Des formulations précises et neutres
3. Des recommandations pour :
   - L'analyse des résultats
   - La communication avant et après l'enquête
   - Le suivi et les actions à mettre en place`,
    difficulty: 2,
    technique: "Prompting détaillé",
    category: {
      id: "talent-management",
      title: "Gestion des talents",
      description: "Prompts pour la gestion des talents et le développement des employés",
      color: "#8B5CF6",
      icon: "Users",
    },
    tags: ["Engagement", "Enquête", "Satisfaction", "Feedback"],
    tips: [
      "Limitez le nombre de questions pour éviter la lassitude",
      "Utilisez un langage simple et direct",
      "Équilibrez les questions positives et négatives",
      "Prévoyez un plan d'action concret suite aux résultats",
    ],
    variants: [
      {
        title: "Enquête de bien-être au travail",
        prompt: `Je souhaite que tu m'aides à concevoir une enquête spécifique sur le bien-être au travail pour notre entreprise de [SECTEUR] qui compte [NOMBRE] employés. Notre objectif est d'évaluer les facteurs de stress, d'épuisement professionnel et de satisfaction au travail.

Informations importantes :
- Contexte actuel : [CONTEXTE : charge de travail, environnement, etc.]
- Signaux d'alerte identifiés : [SIGNAUX : absentéisme, turnover, etc.]
- Fréquence prévue : [FRÉQUENCE]
- Format souhaité : [FORMAT : anonyme recommandé]
- Durée maximale : [DURÉE] minutes
- Utilisation prévue : [UTILISATION : plan d'action bien-être, prévention RPS, etc.]

Je souhaite recevoir :
1. Une structure d'enquête centrée sur le bien-être avec :
   - Une introduction rassurante sur la confidentialité et l'objectif préventif
   - Des sections couvrant les différentes dimensions du bien-être (physique, mental, social, environnemental)
   - Des questions permettant d'identifier les facteurs de risque et de protection
2. Pour chaque section :
   - Des questions quantitatives sur le niveau de stress, fatigue, satisfaction
   - Des questions qualitatives sur les sources de bien-être et de mal-être
   - Des formulations bienveillantes et non culpabilisantes
3. Des recommandations pour :
   - L'interprétation des résultats
   - Les actions préventives et correctives à envisager
   - La communication des résultats de manière constructive`,
      },
      {
        title: "Enquête flash post-changement",
        prompt: `Je souhaite que tu m'aides à concevoir une enquête flash (très courte) pour évaluer rapidement la réaction de nos [NOMBRE] employés suite à [CHANGEMENT RÉCENT : réorganisation/déménagement/nouvelle stratégie/etc.].

Informations importantes :
- Nature du changement : [DESCRIPTION BRÈVE]
- Date de mise en œuvre : [DATE] (il y a [DURÉE])
- Objectifs du changement : [OBJECTIFS]
- Préoccupations anticipées : [PRÉOCCUPATIONS]
- Format souhaité : très court (max 5 minutes à compléter)
- Besoin de réactivité : résultats nécessaires sous 48h

Je souhaite recevoir :
1. Une enquête ultra-concise avec :
   - Une introduction d'une phrase expliquant l'objectif
   - 5-7 questions quantitatives ciblées (échelle 1-5 ou émojis)
   - 1-2 questions ouvertes essentielles
2. Des formulations directes et efficaces
3. Des recommandations pour :
   - Une diffusion à fort taux de réponse
   - Une analyse rapide des résultats
   - Des actions correctives immédiates si nécessaire`,
      },
    ],
    relatedPrompts: ["performance-review", "team-building-activities", "leadership-training"],
  },
]
