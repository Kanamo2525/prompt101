import type { Prompt } from "@/types/prompt"

export const healthyLifestylePrompts: Prompt[] = [
  {
    id: "meal-plan",
    title: "Créateur de plan alimentaire équilibré",
    description: "Générez un plan de repas adapté à vos objectifs et préférences",
    text: `Crée un plan alimentaire équilibré sur 7 jours adapté à mon profil et mes objectifs:

Mon profil:
- Âge: [âge] ans, sexe: [sexe], taille: [taille], poids: [poids]
- Niveau d'activité: [sédentaire/modérément actif/très actif]
- Objectif principal: [perte de poids/prise de masse/maintien/santé générale]

Mes préférences alimentaires:
- Régime spécifique: [omnivore/végétarien/végétalien/etc.]
- Aliments préférés: [liste]
- Aliments à éviter: [liste]
- Allergies ou intolérances: [liste]
- Nombre de repas par jour souhaité: [nombre]

Contraintes pratiques:
- Budget: [limité/moyen/flexible]
- Temps de préparation disponible: [minimal/modéré/extensif]
- Accès aux équipements de cuisine: [limité/standard/complet]

Le plan doit inclure:
1. Menus détaillés pour chaque repas avec portions approximatives
2. Liste d'achats hebdomadaire organisée par catégories
3. Conseils de préparation à l'avance pour gagner du temps
4. Options de substitution pour les ingrédients difficiles à trouver
5. Répartition approximative des macronutriments pour chaque journée
6. Suggestions de collations saines adaptées à mon profil`,
    difficulty: "Modéré",
    difficultyLevel: 2,
    example: `Crée un plan alimentaire équilibré sur 7 jours adapté à mon profil et mes objectifs:

Mon profil:
- Âge: 35 ans, sexe: femme, taille: 165cm, poids: 68kg
- Niveau d'activité: modérément actif (3 séances de sport/semaine)
- Objectif principal: perte de poids modérée et augmentation d'énergie

Mes préférences alimentaires:
- Régime spécifique: flexitarien (principalement végétarien avec occasionnellement de la volaille ou du poisson)
- Aliments préférés: légumineuses, fruits de saison, noix, yaourt grec, avocats
- Aliments à éviter: viande rouge, produits laitiers (sauf yaourt), aliments ultra-transformés
- Allergies ou intolérances: légère intolérance au gluten
- Nombre de repas par jour souhaité: 3 repas + 1 collation

Contraintes pratiques:
- Budget: moyen
- Temps de préparation disponible: minimal en semaine, plus de temps le weekend
- Accès aux équipements de cuisine: standard`,
    technique: "Nutrition",
    tips: [
      "Soyez précis sur vos préférences et contraintes alimentaires",
      "Commencez par des changements modérés si vous modifiez radicalement votre alimentation",
      "Préparez certains éléments à l'avance pour faciliter le respect du plan",
      "Adaptez les portions selon votre faim réelle",
      "Consultez un professionnel de santé avant tout changement majeur",
    ],
  },
  {
    id: "fitness-program",
    title: "Créateur de programme fitness personnalisé",
    description: "Développez un programme d'entraînement adapté à vos objectifs et contraintes",
    text: `Crée un programme d'exercice personnalisé sur [durée] semaines basé sur mon profil:

Mon profil:
- Âge: [âge] ans, sexe: [sexe], condition physique actuelle: [débutant/intermédiaire/avancé]
- Objectifs fitness: [perte de poids/tonification/prise de muscle/endurance/etc.]
- Historique médical pertinent: [blessures/conditions médicales/limitations]
- Expérience en fitness: [description de l'expérience passée]

Mes contraintes:
- Temps disponible: [X] sessions par semaine de [Y] minutes
- Équipement disponible: [domicile/salle de sport/extérieur + équipement spécifique]
- Activités préférées: [liste des activités appréciées]
- Activités à éviter: [liste des activités non appréciées]

Le programme doit inclure:
1. Plan détaillé semaine par semaine avec progression logique
2. Description précise des exercices avec nombre de séries/répétitions/durée
3. Recommandations d'échauffement et de récupération
4. Alternatives pour chaque exercice en cas de douleur ou limitation
5. Conseils pour suivre ma progression
6. Stratégies pour maintenir la motivation
7. Recommandations pour l'alimentation avant/après l'entraînement`,
    difficulty: "Complexe",
    difficultyLevel: 3,
    example: `Crée un programme d'exercice personnalisé sur 8 semaines basé sur mon profil:

Mon profil:
- Âge: 42 ans, sexe: homme, condition physique actuelle: intermédiaire
- Objectifs fitness: amélioration de l'endurance cardiovasculaire et tonification générale
- Historique médical pertinent: légère douleur au genou droit lors d'impacts répétés
- Expérience en fitness: pratique régulière de la course à pied depuis 2 ans, quelques expériences en musculation

Mes contraintes:
- Temps disponible: 4 sessions par semaine de 45-60 minutes
- Équipement disponible: accès à une salle de sport complète + possibilité de courir en extérieur
- Activités préférées: course, vélo, exercices avec poids du corps, natation
- Activités à éviter: sports d'équipe, HIIT à haute intensité`,
    technique: "Fitness",
    tips: [
      "Commencez progressivement, surtout si vous êtes débutant",
      "Écoutez votre corps et adaptez l'intensité selon votre ressenti",
      "Prévoyez des semaines de récupération active toutes les 4-6 semaines",
      "Variez les types d'exercices pour éviter la stagnation et l'ennui",
      "Tenez un journal d'entraînement pour suivre votre progression",
    ],
  },
  {
    id: "sleep-improvement",
    title: "Plan d'amélioration du sommeil",
    description: "Créez une stratégie personnalisée pour améliorer la qualité de votre sommeil",
    text: `Développe un plan complet pour améliorer la qualité de mon sommeil basé sur ma situation actuelle:

Mon profil de sommeil:
- Heures habituelles de coucher et lever: [horaires]
- Durée moyenne de sommeil: [heures]
- Problèmes spécifiques: [difficultés d'endormissement/réveils nocturnes/sommeil non réparateur/etc.]
- Habitudes avant le coucher: [activités, consommation]
- Environnement de sommeil: [description de la chambre, bruit, lumière, etc.]
- Facteurs de stress potentiels: [travail, famille, etc.]

Le plan doit inclure:
1. Un horaire de sommeil optimisé avec heures de coucher et lever
2. Une routine du soir étape par étape (commençant 1-2 heures avant le coucher)
3. Des modifications recommandées pour l'environnement de sommeil
4. Des techniques de relaxation spécifiques pour favoriser l'endormissement
5. Des recommandations alimentaires et de consommation (caféine, alcool, repas du soir)
6. Des stratégies pour gérer les réveils nocturnes
7. Une routine matinale pour renforcer le cycle de sommeil
8. Un plan progressif sur 3 semaines pour installer ces nouvelles habitudes

Inclus également des conseils pour adapter ce plan les jours de weekend et en voyage.`,
    difficulty: "Modéré",
    difficultyLevel: 2,
    example: `Développe un plan complet pour améliorer la qualité de mon sommeil basé sur ma situation actuelle:

Mon profil de sommeil:
- Heures habituelles de coucher et lever: coucher vers 23h30-minuit, lever à 7h
- Durée moyenne de sommeil: 6-7 heures
- Problèmes spécifiques: difficulté à m'endormir (30-45 min), réveils vers 3-4h du matin
- Habitudes avant le coucher: travail sur ordinateur, vérification des emails, parfois un verre de vin
- Environnement de sommeil: chambre assez chaude, partenaire qui ronfle, téléphone à côté du lit
- Facteurs de stress potentiels: échéances professionnelles, préoccupations financières`,
    technique: "Bien-être",
    tips: [
      "La régularité est plus importante que la durée absolue de sommeil",
      "Exposez-vous à la lumière naturelle dès le réveil pour réguler votre horloge interne",
      "Évitez les écrans au moins 30 minutes avant le coucher",
      "Créez un environnement de sommeil frais, sombre et calme",
      "Consultez un médecin si vos problèmes de sommeil persistent malgré ces changements",
    ],
  },
  {
    id: "stress-management",
    title: "Programme de gestion du stress personnalisé",
    description: "Développez des stratégies efficaces pour réduire votre stress quotidien",
    text: `Élabore un programme complet de gestion du stress adapté à ma situation personnelle:

Mon profil:
- Niveau de stress actuel (1-10): [niveau]
- Principales sources de stress: [travail/famille/santé/finances/etc.]
- Symptômes physiques: [tensions musculaires/maux de tête/troubles digestifs/etc.]
- Symptômes psychologiques: [anxiété/irritabilité/difficultés de concentration/etc.]
- Mécanismes d'adaptation actuels: [ce que je fais déjà pour gérer mon stress]
- Activités qui me détendent: [liste d'activités]
- Temps disponible quotidiennement: [minutes/heures]

Le programme doit inclure:
1. Des techniques de respiration et de relaxation rapides (5 minutes ou moins) pour les moments de stress aigu
2. Des pratiques quotidiennes pour réduire le niveau de stress général (méditation, exercice, etc.)
3. Des stratégies cognitives pour recadrer les pensées stressantes
4. Des recommandations pour créer des limites saines dans les domaines problématiques
5. Un plan hebdomadaire avec des activités spécifiques de gestion du stress
6. Des suggestions pour modifier mon environnement afin de réduire les déclencheurs de stress
7. Des techniques pour améliorer la qualité du sommeil (souvent affectée par le stress)

Propose également un système simple pour suivre mon niveau de stress et l'efficacité des différentes techniques.`,
    difficulty: "Modéré",
    difficultyLevel: 2,
    example: `Élabore un programme complet de gestion du stress adapté à ma situation personnelle:

Mon profil:
- Niveau de stress actuel: 8/10
- Principales sources de stress: surcharge de travail, délais serrés, conflits avec un collègue, parent malade
- Symptômes physiques: tensions dans le cou et les épaules, maux de tête fréquents, troubles du sommeil
- Symptômes psychologiques: ruminations, difficulté à se détendre, irritabilité accrue
- Mécanismes d'adaptation actuels: occasionnellement du sport, parfois un verre d'alcool le soir
- Activités qui me détendent: marche en nature, lecture, musique, jardinage
- Temps disponible quotidiennement: 20-30 minutes maximum`,
    technique: "Bien-être",
    tips: [
      "La cohérence est plus importante que l'intensité - pratiquez régulièrement",
      "Commencez par de courtes sessions pour créer l'habitude",
      "Identifiez vos déclencheurs de stress pour les anticiper",
      "Combinez plusieurs techniques pour trouver ce qui fonctionne le mieux pour vous",
      "N'hésitez pas à consulter un professionnel si votre stress reste élevé malgré ces stratégies",
    ],
  },
  {
    id: "mindfulness-practice",
    title: "Programme de pleine conscience sur mesure",
    description: "Intégrez la méditation et la pleine conscience dans votre quotidien",
    text: `Crée un programme progressif de pleine conscience adapté à mon profil et mes objectifs:

Mon profil:
- Expérience en méditation: [débutant/quelques expériences/pratiquant occasionnel]
- Objectifs principaux: [réduction du stress/amélioration du sommeil/concentration accrue/etc.]
- Défis personnels: [mental agité/impatience/scepticisme/etc.]
- Temps disponible: [minutes par jour]
- Préférences d'apprentissage: [guidé/autonome/visuel/auditif]

Le programme doit:
1. S'étendre sur 4 semaines avec une progression logique
2. Commencer par des exercices simples et accessibles
3. Inclure des pratiques formelles (sessions dédiées) et informelles (intégrées aux activités quotidiennes)
4. Proposer des exercices variés adaptés à différents moments de la journée
5. Fournir des explications sur les bénéfices de chaque pratique
6. Inclure des stratégies pour surmonter les obstacles courants
7. Suggérer des ressources complémentaires (applications, livres, vidéos)

Pour chaque semaine, détaille:
- Les pratiques quotidiennes avec durée et instructions précises
- Un focus ou thème spécifique à explorer
- Des suggestions pour intégrer la pleine conscience dans les activités routinières
- Un exercice de réflexion hebdomadaire pour suivre les progrès`,
    difficulty: "Modéré",
    difficultyLevel: 2,
    example: `Crée un programme progressif de pleine conscience adapté à mon profil et mes objectifs:

Mon profil:
- Expérience en méditation: débutant complet, jamais pratiqué sérieusement
- Objectifs principaux: réduire l'anxiété, améliorer la concentration au travail
- Défis personnels: mental très agité, difficulté à rester assis sans bouger, scepticisme sur l'efficacité
- Temps disponible: 10-15 minutes par jour maximum
- Préférences d'apprentissage: préfère les pratiques guidées, apprend mieux avec des explications claires`,
    technique: "Bien-être",
    tips: [
      "Commencez par des séances très courtes (même 1-2 minutes)",
      "Ne vous jugez pas quand votre esprit vagabonde - c'est normal et fait partie du processus",
      "La régularité est plus importante que la durée - mieux vaut 5 minutes tous les jours que 30 minutes une fois par semaine",
      "Expérimentez différentes techniques pour trouver celles qui vous conviennent le mieux",
      "Utilisez des rappels visuels dans votre environnement pour vous souvenir de pratiquer",
    ],
  },
]
