import type { Prompt } from "@/types/prompt"

export const educationPrompts: Prompt[] = [
  {
    id: "learning-strategies",
    title: "Recommander des stratégies d'apprentissage",
    description: "Obtenez des conseils personnalisés pour apprendre efficacement",
    text: `En tant que spécialiste en sciences de l'éducation et en psychologie cognitive, recommande-moi des stratégies d'apprentissage efficaces pour maîtriser [sujet] en fonction de mon profil:

Mon profil d'apprenant:
- Style d'apprentissage dominant: [visuel/auditif/kinesthésique/lecture-écriture]
- Niveau actuel dans le sujet: [débutant/intermédiaire/avancé]
- Objectif d'apprentissage: [objectif précis]
- Temps disponible: [heures par semaine]
- Environnement d'apprentissage: [contexte: autodidacte, académique, professionnel]
- Forces: [mes points forts en apprentissage]
- Défis: [mes difficultés habituelles]

Je souhaite obtenir:
1. 5-7 stratégies d'apprentissage spécifiquement adaptées à mon style et au sujet
2. Une méthode pour structurer mon parcours d'apprentissage avec des jalons clairs
3. Des techniques pour maintenir ma motivation et surmonter les plateaux
4. Des conseils pour optimiser ma mémorisation à long terme
5. Des recommandations de ressources adaptées à mon style d'apprentissage
6. Des suggestions pour évaluer efficacement ma progression`,
    difficulty: "Modéré",
    difficultyLevel: 2,
    example: `En tant que spécialiste en sciences de l'éducation et en psychologie cognitive, recommande-moi des stratégies d'apprentissage efficaces pour maîtriser la programmation Python en fonction de mon profil:

Mon profil d'apprenant:
- Style d'apprentissage dominant: visuel avec une préférence pour l'apprentissage pratique
- Niveau actuel dans le sujet: débutant (connaissance basique des concepts de programmation)
- Objectif d'apprentissage: développer des applications d'analyse de données en 6 mois
- Temps disponible: 10 heures par semaine
- Environnement d'apprentissage: autodidacte, en parallèle d'un emploi à temps plein
- Forces: bonne capacité à résoudre des problèmes, persévérance
- Défis: tendance à me perdre dans les détails, difficulté à maintenir la motivation sans échéances externes`,
    technique: "Personnalisation",
    category: "education",
    tips: [
      "Soyez précis sur le sujet que vous souhaitez apprendre",
      "Identifiez votre style d'apprentissage préféré en réfléchissant à vos expériences passées réussies",
      "Fixez-vous des objectifs d'apprentissage SMART (Spécifiques, Mesurables, Atteignables, Réalistes, Temporellement définis)",
      "Prévoyez des sessions d'apprentissage régulières plutôt que des marathons occasionnels",
      "Variez les méthodes d'apprentissage pour maintenir l'engagement et renforcer la mémorisation",
    ],
    variants: [
      {
        title: "Pour l'apprentissage en groupe",
        description: "Version adaptée pour l'apprentissage collaboratif",
        text: `En tant que spécialiste en sciences de l'éducation et en psychologie cognitive, recommande-nous des stratégies d'apprentissage collaboratif efficaces pour maîtriser [sujet] en fonction de notre profil de groupe:

Profil du groupe:
- Taille du groupe: [nombre de personnes]
- Styles d'apprentissage dominants: [styles présents dans le groupe]
- Niveau moyen dans le sujet: [débutant/intermédiaire/avancé]
- Objectif d'apprentissage commun: [objectif précis]
- Temps disponible: [heures par semaine]
- Environnement d'apprentissage: [contexte: académique, professionnel, communautaire]
- Dynamique actuelle: [forces et défis du groupe]

Nous souhaitons obtenir:
1. 5-7 stratégies d'apprentissage collaboratif adaptées à notre groupe et au sujet
2. Des méthodes pour structurer notre parcours d'apprentissage avec répartition des rôles
3. Des techniques pour maintenir la motivation collective et gérer les différences de rythme
4. Des conseils pour optimiser le partage de connaissances entre membres
5. Des recommandations d'activités collaboratives selon les styles d'apprentissage présents
6. Des suggestions pour évaluer efficacement notre progression collective et individuelle`,
      },
      {
        title: "Pour l'apprentissage d'une langue",
        description: "Version spécifique pour l'apprentissage linguistique",
        text: `En tant que spécialiste en sciences de l'éducation et en acquisition des langues, recommande-moi des stratégies d'apprentissage efficaces pour maîtriser [langue cible] en fonction de mon profil:

Mon profil d'apprenant de langue:
- Style d'apprentissage dominant: [visuel/auditif/kinesthésique/lecture-écriture]
- Niveau actuel dans la langue: [débutant/intermédiaire/avancé]
- Objectif linguistique: [conversation courante/professionnel/académique/etc.]
- Temps disponible: [heures par semaine]
- Environnement d'apprentissage: [contexte: autodidacte, cours, immersion partielle]
- Langues déjà maîtrisées: [autres langues et niveaux]
- Forces et défis particuliers: [facilités et difficultés en apprentissage des langues]

Je souhaite obtenir:
1. 5-7 stratégies d'apprentissage linguistique adaptées à mon style et mes objectifs
2. Une méthode pour structurer mon parcours avec des jalons clairs par compétence (écoute, lecture, expression orale, écriture)
3. Des techniques pour maintenir ma motivation et surmonter le plateau intermédiaire
4. Des conseils pour optimiser l'acquisition de vocabulaire et structures grammaticales
5. Des recommandations de ressources adaptées à mon style d'apprentissage
6. Des suggestions pour pratiquer régulièrement sans partenaire linguistique sur place`,
      },
    ],
    relatedPrompts: [
      {
        id: "educational-feedback",
        title: "Fournir des commentaires éducatifs",
        description: "Obtenez un retour constructif sur vos travaux",
      },
      {
        id: "educational-tech",
        title: "Suggérer des technologies éducatives",
        description: "Découvrez les meilleurs outils pour votre apprentissage",
      },
    ],
  },
  {
    id: "educational-feedback",
    title: "Fournir des commentaires éducatifs",
    description: "Obtenez un retour constructif sur vos travaux",
    text: `En tant qu'éducateur expérimenté dans le domaine de [domaine], fournis-moi un retour constructif détaillé sur mon travail suivant:

[Insérer le travail à évaluer: essai, code, présentation, etc.]

Contexte:
- Type de travail: [essai académique/projet technique/présentation/etc.]
- Niveau académique/professionnel: [secondaire/universitaire/professionnel/etc.]
- Objectifs principaux de ce travail: [objectifs]
- Critères d'évaluation importants: [critères spécifiques si disponibles]
- Domaines particuliers où je cherche des commentaires: [aspects spécifiques]

Je souhaite obtenir:
1. Une évaluation globale des forces et faiblesses du travail
2. Une analyse détaillée de la structure, du contenu et de la méthodologie
3. Des commentaires spécifiques sur les sections/aspects qui nécessitent des améliorations
4. Des suggestions concrètes et applicables pour améliorer la qualité
5. Des exemples ou contre-exemples pour illustrer les points d'amélioration
6. Une évaluation de l'alignement entre mes objectifs déclarés et le résultat final

Sois franc mais constructif, en mettant l'accent sur les opportunités d'apprentissage et de développement.`,
    difficulty: "Complexe",
    difficultyLevel: 3,
    example: `En tant qu'éducateur expérimenté dans le domaine des sciences politiques, fournis-moi un retour constructif détaillé sur mon travail suivant:

[Essai de 1500 mots sur "L'impact des réseaux sociaux sur le discours politique contemporain"]

Contexte:
- Type de travail: essai académique pour un cours de premier cycle universitaire
- Niveau académique: deuxième année de licence en sciences politiques
- Objectifs principaux: analyser comment les réseaux sociaux ont transformé le débat politique, en utilisant des exemples concrets et des théories pertinentes
- Critères d'évaluation: clarté de l'argumentation, utilisation appropriée des sources académiques, analyse critique, structure logique
- Domaines particuliers où je cherche des commentaires: ma méthodologie d'analyse et la cohérence de mon argumentation`,
    technique: "Analyse",
    category: "education",
    tips: [
      "Partagez votre travail complet pour une analyse précise",
      "Précisez clairement le contexte et les objectifs de votre travail",
      "Indiquez les critères d'évaluation pertinents pour votre domaine",
      "Mentionnez les aspects spécifiques sur lesquels vous souhaitez des commentaires",
      "Soyez ouvert aux critiques constructives pour maximiser votre apprentissage",
    ],
    variants: [
      {
        title: "Feedback sur présentation orale",
        description: "Version adaptée pour l'évaluation d'une présentation",
        text: `En tant qu'expert en communication et présentation orale dans le domaine de [domaine], fournis-moi un retour constructif détaillé sur ma présentation:

[Lien vers la vidéo/enregistrement ou description détaillée de la présentation]

Contexte:
- Type de présentation: [académique/professionnelle/pitch/conférence]
- Public cible: [description du public]
- Durée de la présentation: [minutes]
- Objectifs principaux: [informer/persuader/former/etc.]
- Support visuel utilisé: [PowerPoint/Prezi/tableau/aucun/etc.]

Je souhaite obtenir:
1. Une évaluation globale de l'efficacité de ma présentation
2. Une analyse de ma communication verbale (clarté, rythme, ton, vocabulaire)
3. Une analyse de ma communication non verbale (posture, gestes, contact visuel)
4. Des commentaires sur l'organisation et la structure du contenu
5. Une évaluation de l'engagement du public et de ma gestion des questions
6. Des suggestions concrètes pour améliorer mes compétences en présentation

Sois franc mais constructif, en identifiant à la fois les points forts à maintenir et les aspects à améliorer.`,
      },
      {
        title: "Feedback sur portfolio créatif",
        description: "Version adaptée pour l'évaluation d'un portfolio artistique ou créatif",
        text: `En tant que professionnel expérimenté dans le domaine [domaine créatif], fournis-moi un retour constructif détaillé sur mon portfolio:

[Lien vers le portfolio ou description détaillée des œuvres]

Contexte:
- Type de portfolio: [design/photographie/illustration/écriture/etc.]
- Objectif du portfolio: [recherche d'emploi/admission académique/clients freelance/etc.]
- Public cible: [recruteurs/clients potentiels/comité d'admission/etc.]
- Niveau d'expérience: [étudiant/débutant/intermédiaire/avancé]
- Style ou spécialisation visée: [description du style ou niche]

Je souhaite obtenir:
1. Une évaluation globale de l'impact et de la cohérence du portfolio
2. Une analyse de mes forces techniques et créatives
3. Des commentaires sur la présentation et l'organisation des œuvres
4. Une évaluation de l'adéquation entre mon portfolio et mes objectifs professionnels
5. Des suggestions pour combler les lacunes ou renforcer certains aspects
6. Des recommandations pour me démarquer dans mon domaine

Sois franc mais constructif, en tenant compte des standards actuels de l'industrie et des attentes du public cible.`,
      },
    ],
    relatedPrompts: [
      {
        id: "learning-strategies",
        title: "Recommander des stratégies d'apprentissage",
        description: "Obtenez des conseils personnalisés pour apprendre efficacement",
      },
      {
        id: "curriculum-design",
        title: "Conception de programme éducatif",
        description: "Créez un programme d'enseignement structuré et efficace",
      },
    ],
  },
  {
    id: "educational-tech",
    title: "Suggérer des technologies éducatives",
    description: "Découvrez les meilleurs outils pour votre apprentissage",
    text: `En tant que spécialiste en technologies éducatives, recommande-moi les meilleurs outils et ressources numériques pour [objectif d'apprentissage] adaptés à mon contexte:

Mon contexte:
- Objectif d'apprentissage précis: [description détaillée]
- Profil: [étudiant/enseignant/professionnel/parent]
- Âge/niveau: [enfant/adolescent/adulte] ou [primaire/secondaire/supérieur/formation continue]
- Budget disponible: [gratuit uniquement/limité/flexible]
- Équipement disponible: [smartphone/tablette/ordinateur/connexion internet]
- Compétences techniques: [débutant/intermédiaire/avancé]
- Contraintes particulières: [temps limité/accessibilité/langue/etc.]

Je souhaite obtenir:
1. Une sélection de 5-7 outils ou plateformes les plus pertinents pour mon objectif
2. Une brève description de chaque outil et ses points forts
3. Des conseils d'utilisation pour maximiser l'efficacité de chaque ressource
4. Des suggestions de combinaisons d'outils complémentaires
5. Des alternatives pour différents niveaux de budget ou d'expertise technique
6. Des critères pour évaluer l'efficacité de ces outils dans mon contexte spécifique`,
    difficulty: "Modéré",
    difficultyLevel: 2,
    example: `En tant que spécialiste en technologies éducatives, recommande-moi les meilleurs outils et ressources numériques pour apprendre l'espagnol de manière autonome adaptés à mon contexte:

Mon contexte:
- Objectif d'apprentissage précis: atteindre un niveau B1 en espagnol en 6 mois, avec un focus sur la compréhension orale et la conversation
- Profil: professionnel travaillant à temps plein
- Âge/niveau: adulte de 34 ans avec un niveau débutant (A1) en espagnol
- Budget disponible: jusqu'à 20€/mois mais préférence pour des options gratuites ou à faible coût
- Équipement disponible: smartphone Android, ordinateur portable Windows, bonne connexion internet
- Compétences techniques: intermédiaire (à l'aise avec la technologie mais pas expert)
- Contraintes particulières: maximum 30 minutes par jour en semaine, possibilité de sessions plus longues le weekend`,
    technique: "Recommandation",
    category: "education",
    tips: [
      "Définissez clairement votre objectif d'apprentissage avant de rechercher des outils",
      "Tenez compte de votre style d'apprentissage préféré dans le choix des technologies",
      "Privilégiez la qualité et la pertinence des outils plutôt que leur quantité",
      "Testez plusieurs options avant de vous engager dans un abonnement payant",
      "Recherchez des communautés d'utilisateurs pour obtenir des conseils d'utilisation avancés",
    ],
    variants: [
      {
        title: "Pour enseignants",
        description: "Version adaptée pour les besoins des enseignants",
        text: `En tant que spécialiste en technologies éducatives pour l'enseignement, recommande-moi les meilleurs outils et ressources numériques pour [objectif pédagogique] adaptés à mon contexte d'enseignement:

Mon contexte:
- Objectif pédagogique précis: [description détaillée]
- Niveau d'enseignement: [primaire/collège/lycée/supérieur/formation professionnelle]
- Matière enseignée: [discipline]
- Taille moyenne des classes: [nombre d'élèves]
- Équipement disponible dans l'établissement: [ordinateurs/tablettes/TBI/connexion internet]
- Budget disponible: [aucun/limité/projet financé]
- Compétences numériques des élèves: [débutant/intermédiaire/avancé]
- Contraintes particulières: [temps de cours limité/hétérogénéité des niveaux/besoins spécifiques]

Je souhaite obtenir:
1. Une sélection de 5-7 outils ou plateformes les plus pertinents pour mon objectif pédagogique
2. Une brève description de chaque outil et ses avantages pour l'enseignement
3. Des conseils d'intégration dans mes séquences pédagogiques
4. Des suggestions d'activités concrètes utilisant ces outils
5. Des stratégies pour gérer l'utilisation de ces technologies en classe
6. Des méthodes pour évaluer l'impact de ces outils sur l'apprentissage des élèves`,
      },
      {
        title: "Pour besoins spécifiques",
        description: "Version adaptée pour les apprenants avec des besoins particuliers",
        text: `En tant que spécialiste en technologies éducatives inclusives, recommande-moi les meilleurs outils et ressources numériques adaptés pour [objectif d'apprentissage] tenant compte des besoins spécifiques suivants:

Contexte:
- Objectif d'apprentissage précis: [description détaillée]
- Type de besoin spécifique: [trouble DYS/TDAH/TSA/déficience visuelle/auditive/motrice/etc.]
- Profil: [enfant/adolescent/adulte] en contexte [scolaire/universitaire/professionnel/personnel]
- Niveau actuel: [débutant/intermédiaire/avancé] dans le domaine concerné
- Équipement disponible: [ordinateur/tablette/smartphone/technologies d'assistance déjà utilisées]
- Budget disponible: [limité/modéré/flexible]
- Environnement d'apprentissage: [classe ordinaire/classe spécialisée/à domicile/mixte]

Je souhaite obtenir:
1. Une sélection de 5-7 outils ou ressources spécifiquement adaptés aux besoins mentionnés
2. Une explication de comment chaque outil répond aux défis particuliers rencontrés
3. Des conseils de paramétrage et d'adaptation pour maximiser l'accessibilité
4. Des stratégies d'utilisation qui favorisent l'autonomie de l'apprenant
5. Des suggestions d'outils complémentaires pour un apprentissage multimodal
6. Des témoignages ou études de cas pertinents démontrant l'efficacité de ces solutions`,
      },
    ],
    relatedPrompts: [
      {
        id: "learning-strategies",
        title: "Recommander des stratégies d'apprentissage",
        description: "Obtenez des conseils personnalisés pour apprendre efficacement",
      },
      {
        id: "explanation-simplifier",
        title: "Simplificateur de concepts complexes",
        description: "Obtenez des explications claires de concepts difficiles",
      },
    ],
  },
  {
    id: "curriculum-design",
    title: "Conception de programme éducatif",
    description: "Créez un programme d'enseignement structuré et efficace",
    text: `En tant qu'expert en conception pédagogique, aide-moi à développer un programme éducatif complet pour [sujet/compétence] destiné à [public cible].

Contexte du programme:
- Sujet/compétence à enseigner: [description précise]
- Public cible: [âge/niveau/contexte]
- Durée totale du programme: [heures/jours/semaines/mois]
- Format d'enseignement: [présentiel/en ligne/hybride]
- Ressources disponibles: [matériel/budget/personnel]
- Contraintes spécifiques: [limitations à considérer]
- Objectifs d'apprentissage principaux: [ce que les apprenants devraient maîtriser]

Le programme doit inclure:
1. Une structure globale avec progression logique des modules/unités
2. Les objectifs d'apprentissage spécifiques pour chaque module
3. Le contenu détaillé de chaque session (concepts clés, activités, ressources)
4. Des méthodes d'évaluation formative et sommative adaptées
5. Des stratégies d'engagement et de motivation des apprenants
6. Des approches différenciées pour s'adapter aux divers styles d'apprentissage
7. Des suggestions de ressources pédagogiques (lectures, vidéos, exercices)

Fournis également des conseils pour l'implémentation efficace de ce programme et des méthodes pour évaluer son efficacité.`,
    difficulty: "Complexe",
    difficultyLevel: 3,
    example: `En tant qu'expert en conception pédagogique, aide-moi à développer un programme éducatif complet pour l'initiation à la programmation web (HTML, CSS, JavaScript) destiné à des adultes en reconversion professionnelle.

Contexte du programme:
- Sujet: introduction au développement web front-end pour débutants complets
- Public cible: adultes (30-45 ans) en reconversion professionnelle, sans expérience préalable en programmation
- Durée totale du programme: 12 semaines à raison de 15 heures par semaine
- Format d'enseignement: hybride (cours en présentiel 2 jours/semaine + activités en ligne)
- Ressources disponibles: salle informatique équipée, budget modéré pour licences logicielles, 1 formateur principal + 1 assistant
- Contraintes spécifiques: niveaux d'aisance numérique variables parmi les participants, nécessité d'aboutir à un projet concret présentable aux employeurs
- Objectifs d'apprentissage principaux: créer des sites web statiques responsives, comprendre les principes fondamentaux de JavaScript, développer un portfolio de projets`,
    technique: "Structuration",
    category: "education",
    tips: [
      "Commencez par définir clairement les objectifs d'apprentissage mesurables",
      "Structurez le contenu du simple au complexe avec des points de révision réguliers",
      "Intégrez des projets pratiques qui reflètent des situations réelles",
      "Prévoyez des évaluations formatives fréquentes pour ajuster l'enseignement",
      "Incluez des moments de réflexion et de métacognition pour les apprenants",
    ],
    variants: [
      {
        title: "Programme court intensif",
        description: "Version adaptée pour un format court et intensif",
        text: `En tant qu'expert en conception pédagogique pour formats intensifs, aide-moi à développer un programme éducatif condensé mais efficace pour [sujet/compétence] destiné à [public cible].

Contexte du programme intensif:
- Sujet/compétence à enseigner: [description précise]
- Public cible: [âge/niveau/contexte]
- Durée totale disponible: [1-5 jours] à raison de [6-8] heures par jour
- Format d'enseignement: [présentiel/en ligne/hybride]
- Niveau de connaissance préalable des participants: [aucun/basique/intermédiaire]
- Objectif principal: [compétence spécifique/certification/introduction approfondie]
- Contraintes: temps limité, besoin de résultats rapides, maintien de l'attention

Le programme intensif doit inclure:
1. Une structure optimisée avec priorisation claire des contenus essentiels
2. Une alternance stratégique entre théorie et pratique pour maintenir l'engagement
3. Des activités d'apprentissage à fort impact et mémorisation rapide
4. Des méthodes d'évaluation en temps réel pour ajuster le rythme
5. Des stratégies pour gérer la fatigue cognitive et maintenir la motivation
6. Des ressources complémentaires pour l'approfondissement post-formation
7. Un plan de suivi pour consolider les acquis après le programme intensif

Fournis également des conseils spécifiques pour maximiser l'efficacité d'un apprentissage condensé et des techniques pour éviter la surcharge cognitive.`,
      },
      {
        title: "Programme pour enfants",
        description: "Version adaptée pour un public d'enfants",
        text: `En tant qu'expert en pédagogie pour enfants, aide-moi à développer un programme éducatif ludique et engageant pour enseigner [sujet/compétence] à des enfants de [tranche d'âge].

Contexte du programme:
- Sujet/compétence à enseigner: [description précise adaptée aux enfants]
- Tranche d'âge précise: [5-7 ans/8-10 ans/11-12 ans]
- Durée et fréquence: [durée des séances] à raison de [fréquence] par semaine sur [période]
- Environnement d'apprentissage: [école/centre de loisirs/bibliothèque/en ligne]
- Taille du groupe: [nombre d'enfants approximatif]
- Niveau de développement: [capacités cognitives, motrices et sociales typiques de l'âge]
- Objectifs d'apprentissage adaptés: [compétences à développer]

Le programme pour enfants doit inclure:
1. Une progression adaptée au développement cognitif de la tranche d'âge ciblée
2. Des activités ludiques et multisensorielles pour chaque concept clé
3. Une variété d'approches pédagogiques (jeux, histoires, créations manuelles, mouvement)
4. Des moments d'apprentissage collaboratif et d'apprentissage individuel
5. Des rituels et routines pour structurer l'expérience d'apprentissage
6. Des adaptations pour différents styles d'apprentissage et besoins
7. Des suggestions pour impliquer les parents/tuteurs dans le processus

Fournis également des conseils sur la gestion de l'attention, les techniques de motivation adaptées aux enfants et des idées pour célébrer les progrès.`,
      },
    ],
    relatedPrompts: [
      {
        id: "educational-feedback",
        title: "Fournir des commentaires éducatifs",
        description: "Obtenez un retour constructif sur vos travaux",
      },
      {
        id: "educational-tech",
        title: "Suggérer des technologies éducatives",
        description: "Découvrez les meilleurs outils pour votre apprentissage",
      },
    ],
  },
  {
    id: "explanation-simplifier",
    title: "Simplificateur de concepts complexes",
    description: "Obtenez des explications claires de concepts difficiles",
    text: `En tant qu'expert pédagogue spécialisé dans la vulgarisation, explique-moi le concept de [concept complexe] de manière claire et accessible.

Paramètres de l'explication:
- Concept à expliquer: [concept précis]
- Mon niveau de connaissance préalable: [débutant/quelques notions/intermédiaire]
- Domaine d'application qui m'intéresse: [contexte pertinent pour moi]
- Style d'apprentissage préféré: [analogies/exemples concrets/visuel/étape par étape]
- Objectif de compréhension: [utilisation pratique/culture générale/préparation académique]

Je souhaite que l'explication:
1. Commence par une définition simple et accessible
2. Utilise des analogies ou métaphores avec des concepts familiers
3. Décompose le concept en éléments fondamentaux
4. Fournisse des exemples concrets et pertinents
5. Explique l'importance ou l'application pratique du concept
6. Anticipe et clarifie les points de confusion courants
7. Propose une progression pour approfondir ma compréhension

Évite le jargon technique inutile ou, s'il est essentiel, définis-le clairement.`,
    difficulty: "Modéré",
    difficultyLevel: 2,
    example: `En tant qu'expert pédagogue spécialisé dans la vulgarisation, explique-moi le concept de l'apprentissage automatique (machine learning) de manière claire et accessible.

Paramètres de l'explication:
- Concept à expliquer: apprentissage automatique (machine learning) et ses principes fondamentaux
- Mon niveau de connaissance préalable: débutant (je comprends ce qu'est la programmation basique mais pas l'IA)
- Domaine d'application qui m'intéresse: marketing digital et personnalisation client
- Style d'apprentissage préféré: analogies et exemples concrets du monde réel
- Objectif de compréhension: pouvoir comprendre les possibilités et limites pour mon entreprise e-commerce`,
    technique: "Pédagogie",
    category: "education",
    tips: [
      "Précisez votre niveau de connaissance actuel sur le sujet",
      "Indiquez pourquoi vous souhaitez comprendre ce concept",
      "Mentionnez les aspects spécifiques qui vous semblent les plus difficiles",
      "Demandez des analogies avec des domaines que vous connaissez bien",
      "N'hésitez pas à demander des clarifications supplémentaires sur les points encore confus",
    ],
    variants: [
      {
        title: "Pour enfants",
        description: "Version adaptée pour expliquer à des enfants",
        text: `En tant qu'expert en vulgarisation pour enfants, explique le concept de [concept] d'une façon amusante et compréhensible pour un enfant de [âge] ans.

Paramètres de l'explication:
- Concept à expliquer: [concept précis]
- Âge de l'enfant: [âge] ans
- Centres d'intérêt de l'enfant: [intérêts pertinents: animaux, espace, dinosaures, etc.]
- Connaissances préalables: [ce que l'enfant sait déjà sur des sujets connexes]
- Style d'apprentissage: [visuel/auditif/kinesthésique/curieux/etc.]

Je souhaite que l'explication:
1. Utilise un langage simple adapté à l'âge de l'enfant
2. Inclue des analogies avec des choses familières du quotidien de l'enfant
3. Intègre des éléments narratifs ou personnages pour maintenir l'intérêt
4. Propose une ou deux activités pratiques simples pour illustrer le concept
5. Réponde aux questions typiques qu'un enfant pourrait poser
6. Évite les abstractions complexes tout en restant scientifiquement exact
7. Se termine par un résumé très simple des points clés à retenir

L'explication doit être engageante, stimuler la curiosité et donner envie à l'enfant d'en apprendre davantage.`,
      },
      {
        title: "Visuel et schématique",
        description: "Version orientée représentation visuelle et schématique",
        text: `En tant qu'expert en communication visuelle et pédagogique, explique-moi le concept de [concept complexe] en utilisant principalement des représentations visuelles et schématiques.

Paramètres de l'explication:
- Concept à expliquer: [concept précis]
- Mon niveau de connaissance préalable: [débutant/quelques notions/intermédiaire]
- Objectif: [comprendre les mécanismes/mémoriser la structure/visualiser les relations]
- Applications qui m'intéressent: [domaines d'application pertinents]

Je souhaite que l'explication:
1. Commence par un schéma global simple montrant la vue d'ensemble du concept
2. Utilise des métaphores visuelles pour représenter les éléments abstraits
3. Propose une progression de diagrammes du plus simple au plus détaillé
4. Utilise des codes couleurs cohérents pour catégoriser les différents éléments
5. Inclue des légendes claires et des annotations explicatives minimales
6. Montre les relations et interactions entre les composants du concept
7. Termine par un schéma récapitulatif intégrant tous les éléments clés

Décris précisément comment ces représentations visuelles devraient être structurées, en minimisant le texte au profit d'une organisation spatiale claire et intuitive.`,
      },
    ],
    relatedPrompts: [
      {
        id: "learning-strategies",
        title: "Recommander des stratégies d'apprentissage",
        description: "Obtenez des conseils personnalisés pour apprendre efficacement",
      },
      {
        id: "educational-tech",
        title: "Suggérer des technologies éducatives",
        description: "Découvrez les meilleurs outils pour votre apprentissage",
      },
    ],
  },
]
