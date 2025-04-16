import type { Prompt } from "@/types/prompt"

export const timeManagementPrompts: Prompt[] = [
  {
    id: "weekly-planner",
    title: "Planificateur de semaine productif",
    description: "Créez un planning hebdomadaire optimisé selon vos priorités et votre énergie",
    text: `Crée un planning hebdomadaire optimisé basé sur les informations suivantes:

Mes obligations fixes:
- [Liste des obligations avec horaires]

Mes projets prioritaires:
- [Liste des projets avec estimation de temps nécessaire]

Mon profil d'énergie:
- Pic d'énergie: [matin/après-midi/soir]
- Creux d'énergie: [moment de la journée]
- Préférence pour les pauses: [courtes et fréquentes/longues et espacées]

Mes objectifs de gestion du temps:
- [Objectifs spécifiques: plus de temps pour la famille, réduire le stress, etc.]

Contraintes à considérer:
- [Contraintes personnelles ou professionnelles]

Propose un planning détaillé jour par jour avec:
1. Blocs de temps dédiés aux tâches prioritaires pendant mes pics d'énergie
2. Moments de pause stratégiques
3. Temps tampon pour les imprévus (20% du temps total)
4. Rituels de début et fin de journée
5. Suggestions pour optimiser les transitions entre activités`,
    difficulty: "Modéré",
    difficultyLevel: 2,
    example: `Crée un planning hebdomadaire optimisé basé sur les informations suivantes:

Mes obligations fixes:
- Réunion d'équipe: lundi 9h-10h30
- Cours de yoga: mercredi 18h-19h30
- Appel avec clients: jeudi 14h-15h

Mes projets prioritaires:
- Finaliser présentation (4h)
- Rédiger rapport trimestriel (6h)
- Recherche pour nouveau projet (3h)

Mon profil d'énergie:
- Pic d'énergie: matin (6h-11h)
- Creux d'énergie: après déjeuner (14h-15h)
- Préférence pour les pauses: courtes et fréquentes

Mes objectifs de gestion du temps:
- Réduire le travail en soirée
- Trouver 30 min/jour pour la lecture personnelle

Contraintes à considérer:
- Trajet domicile-bureau: 45 min aller simple`,
    technique: "Planification",
    tips: [
      "Soyez honnête sur votre profil d'énergie et vos contraintes",
      "Réservez vos tâches les plus exigeantes pour vos moments de pic d'énergie",
      "Prévoyez toujours plus de temps que nécessaire pour les tâches importantes",
      "Bloquez du temps pour la réflexion et la planification",
      "Révisez et ajustez votre planning chaque semaine selon les résultats",
    ],
  },
  {
    id: "gtd-system",
    title: "Créateur de système GTD personnalisé",
    description: "Développez un système de gestion des tâches adapté à votre style de travail",
    text: `Conçois un système de gestion des tâches personnalisé basé sur ma situation:

Mon profil:
- Type de travail: [description du travail/études]
- Volume de tâches: [faible/moyen/élevé] avec environ [X] nouvelles tâches par jour
- Outils disponibles: [liste des outils: papier, applications, etc.]
- Style de travail préféré: [structuré/flexible, visuel/textuel, etc.]
- Défis actuels: [procrastination/oublis/surcharge/etc.]

Mes besoins spécifiques:
- [Liste des besoins: collaboration, suivi de projet, etc.]

Propose un système complet qui inclut:
1. Méthode de capture des nouvelles tâches et idées
2. Processus de tri et priorisation
3. Organisation des catégories et contextes adaptés à ma situation
4. Routine quotidienne et hebdomadaire de révision
5. Méthode de suivi des tâches déléguées ou en attente
6. Stratégie pour gérer les tâches récurrentes
7. Approche pour les projets à long terme

Fournis également:
- Un guide étape par étape pour mettre en place ce système
- Des conseils pour maintenir le système sur la durée
- Des suggestions d'adaptation en fonction des périodes plus/moins chargées`,
    difficulty: "Complexe",
    difficultyLevel: 3,
    example: `Conçois un système de gestion des tâches personnalisé basé sur ma situation:

Mon profil:
- Type de travail: chef de projet marketing dans une PME
- Volume de tâches: élevé avec environ 15-20 nouvelles tâches par jour
- Outils disponibles: Google Workspace, smartphone, ordinateur portable, carnet
- Style de travail préféré: visuel, besoin de flexibilité mais avec structure
- Défis actuels: difficulté à prioriser, tendance à oublier les suivis, sentiment d'être débordé

Mes besoins spécifiques:
- Coordination avec une équipe de 5 personnes
- Suivi de multiples projets en parallèle avec des échéances variables
- Besoin de distinguer l'urgent de l'important`,
    technique: "Organisation",
    tips: [
      "Commencez par un système simple et enrichissez-le progressivement",
      "Choisissez des outils que vous utilisez déjà ou qui sont faciles à intégrer",
      "Prévoyez des temps dédiés à la maintenance de votre système",
      "Adaptez les principes des méthodes existantes plutôt que de les suivre rigidement",
      "Testez votre système pendant au moins 3 semaines avant de le modifier",
    ],
  },
  {
    id: "procrastination-plan",
    title: "Plan anti-procrastination",
    description: "Créez une stratégie personnalisée pour vaincre la procrastination",
    text: `Développe un plan d'action personnalisé pour m'aider à surmonter ma tendance à procrastiner sur [type de tâches ou projet spécifique].

Mon profil de procrastination:
- Déclencheurs habituels: [ce qui me pousse à procrastiner]
- Comportements d'évitement typiques: [ce que je fais quand je procrastine]
- Moments de la journée/semaine où je procrastine le plus: [périodes]
- Conséquences négatives ressenties: [impact sur mon travail/vie]
- Tentatives précédentes pour résoudre ce problème: [ce que j'ai déjà essayé]

Le plan doit inclure:
1. Une analyse des causes profondes de ma procrastination (perfectionnisme, peur de l'échec, manque de clarté, etc.)
2. 5-7 stratégies concrètes adaptées à mon profil spécifique
3. Des techniques pour décomposer les tâches intimidantes en étapes gérables
4. Un système de récompenses adapté à ma personnalité
5. Des méthodes pour créer un environnement propice à la concentration
6. Des scripts mentaux pour recadrer mes pensées négatives
7. Un protocole d'urgence pour les moments de forte procrastination

Propose également un plan de suivi sur 21 jours pour installer de nouvelles habitudes et remplacer progressivement mes comportements de procrastination.`,
    difficulty: "Modéré",
    difficultyLevel: 2,
    example: `Développe un plan d'action personnalisé pour m'aider à surmonter ma tendance à procrastiner sur la rédaction de mon mémoire universitaire.

Mon profil de procrastination:
- Déclencheurs habituels: sentiment d'être dépassé par l'ampleur de la tâche, peur de ne pas être à la hauteur
- Comportements d'évitement typiques: vérification compulsive des réseaux sociaux, rangement excessif, recherches interminables sans passer à la rédaction
- Moments de la journée/semaine où je procrastine le plus: en début de journée et le dimanche soir
- Conséquences négatives ressenties: stress, culpabilité, travail de dernière minute de moindre qualité
- Tentatives précédentes: essai de la technique Pomodoro, tentative d'établir un planning (abandonné après 3 jours)`,
    technique: "Psychologie",
    tips: [
      "Soyez honnête sur vos véritables raisons de procrastiner",
      "Commencez par de très petites sessions de travail (même 5 minutes)",
      "Éliminez les distractions de votre environnement avant de commencer",
      "Utilisez la technique de visualisation pour vous projeter dans la satisfaction du travail accompli",
      "Partagez vos objectifs avec quelqu'un qui peut vous tenir responsable",
    ],
  },
  {
    id: "time-audit",
    title: "Audit complet de votre temps",
    description: "Analysez comment vous utilisez réellement votre temps et identifiez les opportunités d'optimisation",
    text: `Aide-moi à réaliser un audit complet de mon utilisation du temps et à identifier les opportunités d'optimisation.

Ma situation actuelle:
- Horaires typiques: [lever, coucher, horaires de travail]
- Activités principales: [liste des activités qui occupent la majorité de mon temps]
- Temps estimé par activité: [estimations actuelles]
- Sentiment général: [impression d'être débordé, de manquer de temps pour certaines activités, etc.]
- Priorités personnelles: [ce qui est vraiment important pour moi]

Pour cet audit:
1. Propose une méthode structurée pour suivre mon utilisation réelle du temps sur 7 jours
2. Fournis un template ou un tableau pour enregistrer mes activités
3. Explique comment analyser les données recueillies pour identifier:
   - Les écarts entre temps perçu et temps réel par activité
   - Les activités chronophages à faible valeur ajoutée
   - Les moments de la journée où mon efficacité est sous-optimale
   - Les interruptions et distractions récurrentes
4. Suggère une méthode pour catégoriser mes activités (essentiel/important/secondaire/inutile)
5. Développe un processus pour réallouer mon temps en fonction de mes priorités réelles
6. Propose 5-7 stratégies concrètes pour éliminer les pertes de temps identifiées

Inclus également des conseils pour maintenir une conscience de mon utilisation du temps sur le long terme.`,
    difficulty: "Complexe",
    difficultyLevel: 3,
    example: `Aide-moi à réaliser un audit complet de mon utilisation du temps et à identifier les opportunités d'optimisation.

Ma situation actuelle:
- Horaires typiques: lever 6h30, travail 8h30-18h, coucher 23h
- Activités principales: réunions (environ 4h/jour), emails (2h/jour), travail sur projets (3h/jour), trajets (1h30/jour), temps en famille (2h/jour), écrans personnels (2h/jour)
- Temps estimé par activité: j'ai l'impression de passer 70% de mon temps au travail, 15% en famille, 15% pour moi
- Sentiment général: toujours pressé, jamais assez de temps pour mes projets personnels, sensation de journées qui filent
- Priorités personnelles: santé, famille, progression de carrière, projet d'écriture personnel`,
    technique: "Analyse",
    tips: [
      "Soyez brutalement honnête dans votre suivi du temps",
      "Notez vos activités en temps réel plutôt que de vous fier à votre mémoire",
      "Incluez même les petits moments (pauses, temps de transition, etc.)",
      "Utilisez des catégories cohérentes pour faciliter l'analyse",
      "Répétez l'audit tous les trimestres pour suivre votre évolution",
    ],
  },
  {
    id: "meeting-efficiency",
    title: "Optimiseur de réunions",
    description: "Transformez vos réunions en sessions productives et efficaces",
    text: `Aide-moi à optimiser l'efficacité des réunions [type de réunions] que j'organise régulièrement.

Contexte actuel:
- Type de réunions: [réunions d'équipe, one-to-one, brainstorming, etc.]
- Fréquence et durée: [hebdomadaire/quotidienne, durée moyenne]
- Nombre de participants: [nombre habituel]
- Problèmes actuels: [manque de focus, dépassement de temps, participation inégale, etc.]
- Objectifs typiques: [prise de décision, partage d'information, résolution de problèmes, etc.]

Propose un cadre complet pour transformer ces réunions, incluant:
1. Une structure optimisée avec timing précis pour chaque segment
2. Un template d'agenda efficace avec exemples concrets
3. Des techniques d'animation pour maximiser la participation et maintenir le focus
4. Des règles de fonctionnement claires à communiquer aux participants
5. Des méthodes pour documenter les décisions et suivre les actions
6. Des alternatives aux réunions complètes quand approprié
7. Des outils et technologies recommandés pour faciliter la collaboration

Fournis également:
- Un exemple de communication pré-réunion
- Un exemple de suivi post-réunion
- Des conseils pour gérer les personnalités difficiles ou les situations de blocage`,
    difficulty: "Modéré",
    difficultyLevel: 2,
    example: `Aide-moi à optimiser l'efficacité des réunions d'équipe hebdomadaires que j'organise régulièrement.

Contexte actuel:
- Type de réunions: point d'avancement d'équipe
- Fréquence et durée: hebdomadaire, théoriquement 1h mais souvent 1h30
- Nombre de participants: 8 personnes de différents départements
- Problèmes actuels: discussions qui dévient, certains membres monopolisent la parole, difficultés à obtenir des engagements clairs, sentiment que certains sujets pourraient être traités par email
- Objectifs typiques: suivi des projets en cours, coordination entre départements, résolution des blocages`,
    technique: "Organisation",
    tips: [
      "Commencez toujours à l'heure, même si certains participants sont absents",
      "Envoyez l'agenda au moins 24h à l'avance avec les préparations attendues",
      "Utilisez un timer visible pour respecter le temps alloué à chaque sujet",
      "Désignez un facilitateur et un preneur de notes distincts",
      "Terminez chaque réunion par un tour de table rapide pour résumer les engagements",
    ],
  },
]
