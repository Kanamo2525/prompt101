export interface PromptingMethod {
  id: string
  title: string
  shortDescription: string
  difficulty: "Facile" | "Intermédiaire" | "Avancé"
  tags: string[]
  description: string
  howToUse: string
  examples: {
    good: string
    bad?: string
  }[]
  tips: string[]
  useCases: string[]
  relatedMethods: string[]
}

export const promptingMethods: PromptingMethod[] = [
  {
    id: "zero-shot",
    title: "Zero-Shot Prompting",
    shortDescription: "Obtenez des réponses sans fournir d'exemples",
    difficulty: "Facile",
    tags: ["Simple", "Rapide", "Polyvalent"],
    description:
      "La technique Zero-Shot est la méthode la plus directe pour interagir avec l'IA. Elle consiste à poser une question ou donner une instruction sans fournir d'exemples préalables. Cette approche fonctionne particulièrement bien avec les modèles d'IA avancés qui ont été entraînés sur de vastes corpus de données et peuvent comprendre des instructions simples.",
    howToUse:
      "Formulez votre demande de manière claire et précise, en incluant autant de détails que nécessaire pour obtenir la réponse souhaitée. Même sans exemples, vous pouvez spécifier le format, le ton ou le style de réponse attendu.",
    examples: [
      {
        good: "Rédige un email de bienvenue pour un nouveau collaborateur qui rejoint notre équipe RH lundi prochain. L'email doit être chaleureux, mentionner les principales informations pratiques et ne pas dépasser 200 mots.",
        bad: "Écris un email de bienvenue.",
      },
    ],
    tips: [
      "Soyez précis dans votre demande",
      "Spécifiez le format de réponse souhaité",
      "Indiquez le ton et le style attendus",
      "Mentionnez les contraintes spécifiques (longueur, délai, etc.)",
      "Posez des questions précises si vous cherchez des informations spécifiques",
    ],
    useCases: [
      "Rédaction d'emails ou de communications simples",
      "Demandes d'informations factuelles",
      "Génération de contenu créatif",
      "Résumés de documents ou d'informations",
      "Questions techniques directes",
    ],
    relatedMethods: ["one-shot", "few-shot", "rct"],
  },
  {
    id: "one-shot",
    title: "One-Shot Prompting",
    shortDescription: "Guidez avec un exemple unique",
    difficulty: "Facile",
    tags: ["Guidé", "Exemple", "Format"],
    description:
      "La technique One-Shot consiste à fournir un seul exemple à l'IA pour clarifier le format ou le style de réponse souhaité, avant de poser votre question. Cette méthode est particulièrement utile lorsque vous avez besoin d'un format spécifique ou d'un style particulier que l'IA pourrait avoir du mal à comprendre avec une simple instruction.",
    howToUse:
      "Commencez par présenter un exemple clair qui illustre exactement le format ou le style que vous attendez. Assurez-vous que l'exemple est représentatif de ce que vous souhaitez obtenir. Puis, formulez votre demande réelle en suivant la même structure.",
    examples: [
      {
        good: "Voici comment je souhaite que tu structures les fiches de poste :\n\nTitre: Responsable RH\nMissions principales: Gestion administrative du personnel, recrutement, formation\nCompétences requises: Maîtrise du droit social, SIRH, communication\nExpérience: 3-5 ans en RH\n\nMaintenant, crée une fiche de poste pour un Responsable Paie avec la même structure.",
      },
    ],
    tips: [
      "Choisissez un exemple représentatif et de haute qualité",
      "Assurez-vous que l'exemple est clairement séparé de votre demande réelle",
      "Utilisez le même format pour l'exemple et la demande",
      "Soyez cohérent dans la structure et le niveau de détail",
      "Précisez si certains éléments de l'exemple doivent être adaptés",
    ],
    useCases: [
      "Création de documents avec un format spécifique",
      "Rédaction dans un style particulier",
      "Génération de contenu technique ou spécialisé",
      "Création de fiches, tableaux ou structures formatées",
      "Adaptation de contenu existant à un nouveau contexte",
    ],
    relatedMethods: ["zero-shot", "few-shot", "template-filling"],
  },
  {
    id: "few-shot",
    title: "Few-Shot Prompting",
    shortDescription: "Plusieurs exemples pour plus de précision",
    difficulty: "Intermédiaire",
    tags: ["Précision", "Apprentissage", "Multiple"],
    description:
      "La technique Few-Shot consiste à présenter plusieurs exemples (généralement 2 à 5) à l'IA pour qu'elle saisisse les patterns et améliore la précision de ses réponses. Cette méthode est particulièrement efficace pour des tâches complexes ou lorsque vous avez besoin d'une cohérence forte dans les réponses générées.",
    howToUse:
      "Fournissez plusieurs exemples variés qui illustrent clairement le type de réponse attendu. Organisez ces exemples de manière cohérente et assurez-vous qu'ils couvrent différentes variations de la tâche demandée. Terminez par votre demande réelle en suivant le même format.",
    examples: [
      {
        good: "Voici comment transformer des descriptions de poste en annonces attractives :\n\nDescription: Gérer les opérations quotidiennes de l'entrepôt\nAnnonce: \"Orchestrez l'excellence opérationnelle de notre centre logistique et donnez vie à notre chaîne d'approvisionnement !\"\n\nDescription: Analyser les données de vente pour identifier les tendances\nAnnonce: \"Transformez les chiffres en opportunités stratégiques et devenez le détective de nos succès commerciaux !\"\n\nDescription: Superviser l'équipe de développement web\nAnnonce: \"Guidez nos talents numériques vers l'innovation et façonnez l'avenir de notre présence digitale !\"\n\nMaintenant, transforme cette description en annonce attractive : Assurer le recrutement et l'intégration des nouveaux collaborateurs",
      },
    ],
    tips: [
      "Utilisez des exemples diversifiés pour couvrir différents cas",
      "Maintenez une cohérence dans la structure des exemples",
      "Organisez les exemples du plus simple au plus complexe",
      "Assurez-vous que chaque exemple illustre clairement le pattern souhaité",
      "Limitez-vous à 2-5 exemples pour éviter de surcharger le contexte",
    ],
    useCases: [
      "Classification de textes ou de données",
      "Génération de contenu suivant un pattern spécifique",
      "Transformation de contenu d'un format à un autre",
      "Tâches nécessitant une compréhension nuancée",
      "Situations où la cohérence entre plusieurs éléments est cruciale",
    ],
    relatedMethods: ["one-shot", "zero-shot", "template-filling"],
  },
  {
    id: "chain-of-thought",
    title: "Chain-of-Thought",
    shortDescription: "Pensée étape par étape",
    difficulty: "Intermédiaire",
    tags: ["Raisonnement", "Étapes", "Logique"],
    description:
      "La technique Chain-of-Thought (Chaîne de Pensée) consiste à amener l'IA à décomposer son raisonnement en plusieurs étapes logiques. Cette approche est particulièrement efficace pour les problèmes complexes qui nécessitent un raisonnement structuré, comme les calculs, la résolution de problèmes ou la prise de décision.",
    howToUse:
      "Demandez explicitement à l'IA de raisonner étape par étape. Vous pouvez également fournir un exemple de raisonnement décomposé pour montrer le niveau de détail attendu. Cette technique peut être combinée avec Few-Shot en montrant plusieurs exemples de raisonnements étape par étape.",
    examples: [
      {
        good: "Analyse ce cas de conflit entre deux collaborateurs en décomposant ton raisonnement étape par étape :\n\nSituation : Un chef d'équipe se plaint qu'un membre de son équipe ne respecte pas les délais et travaille de manière isolée. Le collaborateur concerné affirme que son manager ne lui donne pas les ressources nécessaires et change constamment les priorités.\n\nRaisonne étape par étape pour identifier les causes potentielles du conflit et propose des solutions adaptées.",
      },
    ],
    tips: [
      "Encouragez explicitement un raisonnement séquentiel",
      "Demandez à l'IA d'expliquer chaque étape de son raisonnement",
      "Utilisez cette technique pour les problèmes complexes ou ambigus",
      "Combinez-la avec d'autres techniques comme Few-Shot pour plus d'efficacité",
      "Vérifiez la logique de chaque étape pour identifier d'éventuelles erreurs",
    ],
    useCases: [
      "Résolution de problèmes complexes",
      "Analyse de situations RH délicates",
      "Prise de décision multicritères",
      "Évaluation de candidats ou de performances",
      "Élaboration de stratégies ou de plans d'action",
    ],
    relatedMethods: ["least-to-most", "generated-knowledge", "iterative-prompting"],
  },
  {
    id: "multi-prompting",
    title: "Multi-Prompting",
    shortDescription: "Plusieurs angles pour un même problème",
    difficulty: "Avancé",
    tags: ["Parallèle", "Perspectives", "Synthèse"],
    description:
      "La technique Multi-Prompting consiste à utiliser plusieurs prompts distincts pour aborder une même problématique sous différents angles, puis à combiner ou comparer les réponses obtenues. Cette approche permet d'obtenir une vision plus complète et nuancée d'un sujet complexe.",
    howToUse:
      "Formulez plusieurs prompts qui abordent le même problème sous des angles différents ou avec des contraintes variées. Soumettez ces prompts séparément, puis analysez et synthétisez les différentes réponses pour obtenir une vision plus complète et équilibrée.",
    examples: [
      {
        good: 'Prompt 1 : "En tant que responsable RH, quels seraient les avantages d\'implémenter un système de travail hybride dans notre entreprise industrielle ?"\n\nPrompt 2 : "En tant que manager opérationnel, quels seraient les défis et obstacles à la mise en place d\'un système de travail hybride dans notre usine ?"\n\nPrompt 3 : "En tant que spécialiste du bien-être au travail, comment pourrait-on concilier les besoins de flexibilité des employés avec les contraintes de production dans un modèle hybride ?"',
      },
    ],
    tips: [
      "Variez les perspectives, rôles ou contraintes dans vos différents prompts",
      "Assurez-vous que les prompts sont complémentaires et non redondants",
      "Utilisez cette technique pour les sujets complexes ou controversés",
      "Comparez systématiquement les réponses pour identifier les points communs et divergences",
      "Synthétisez les différentes perspectives dans une conclusion équilibrée",
    ],
    useCases: [
      "Analyse de situations complexes nécessitant plusieurs perspectives",
      "Prise de décision impliquant différentes parties prenantes",
      "Élaboration de politiques RH équilibrées",
      "Résolution de conflits ou de problèmes multidimensionnels",
      "Évaluation complète des avantages et inconvénients d'une initiative",
    ],
    relatedMethods: ["expert-role-playing", "iterative-prompting", "contextual-augmentation"],
  },
  {
    id: "expert-role-playing",
    title: "Expert Role-Playing",
    shortDescription: "L'IA incarne un expert spécifique",
    difficulty: "Intermédiaire",
    tags: ["Rôle", "Spécialisation", "Expertise"],
    description:
      "La technique Expert Role-Playing consiste à demander à l'IA d'adopter le rôle d'un expert dans un domaine spécifique pour obtenir des réponses plus spécialisées et adaptées. Cette approche permet d'orienter le modèle vers un type de réponse particulier en activant un ensemble de connaissances et un style de communication spécifiques.",
    howToUse:
      "Commencez votre prompt en définissant clairement le rôle d'expert que l'IA doit adopter. Soyez précis sur le type d'expertise (domaine, niveau d'expérience, spécialisation) et le contexte dans lequel cet expert intervient. Puis, formulez votre question ou demande à cet 'expert'.",
    examples: [
      {
        good: "Tu es un expert en droit social avec 15 ans d'expérience dans le conseil aux entreprises industrielles. Tu as l'habitude de vulgariser des concepts juridiques complexes pour les rendre accessibles aux managers opérationnels.\n\nExplique les implications pratiques des dernières modifications de la législation sur les heures supplémentaires pour une entreprise manufacturière fonctionnant en 3x8, et propose des recommandations concrètes pour mettre à jour notre politique de temps de travail.",
      },
    ],
    tips: [
      "Définissez précisément le profil de l'expert (domaine, expérience, spécialisation)",
      "Précisez le style de communication attendu (technique, vulgarisé, concis, etc.)",
      "Ajoutez des éléments de contexte pour rendre le rôle plus crédible",
      "Combinez cette technique avec d'autres comme Chain-of-Thought pour des analyses approfondies",
      "Testez différents profils d'experts pour un même problème afin d'obtenir des perspectives variées",
    ],
    useCases: [
      "Obtention d'avis spécialisés sur des questions techniques",
      "Vulgarisation de concepts complexes",
      "Analyse approfondie de problématiques spécifiques",
      "Rédaction de contenus dans un style professionnel particulier",
      "Simulation de consultations d'experts pour la formation",
    ],
    relatedMethods: ["rct", "multi-prompting", "generated-knowledge"],
  },
  {
    id: "iterative-prompting",
    title: "Iterative Prompting",
    shortDescription: "Affinage progressif des réponses",
    difficulty: "Intermédiaire",
    tags: ["Conversation", "Ajustement", "Précision"],
    description:
      "La technique Iterative Prompting consiste à poser des questions de suivi successives pour approfondir ou affiner les réponses de l'IA dans un processus d'amélioration continue. Cette approche conversationnelle permet d'explorer un sujet en profondeur et d'obtenir des réponses de plus en plus précises et adaptées.",
    howToUse:
      "Commencez par une question ou demande initiale relativement large. Analysez la réponse obtenue, puis posez des questions de suivi pour approfondir certains points, demander des clarifications, ou orienter l'IA vers des aspects spécifiques. Continuez ce processus jusqu'à obtenir le niveau de détail ou de précision souhaité.",
    examples: [
      {
        good: 'Question initiale : "Quelles sont les meilleures pratiques pour améliorer l\'engagement des employés dans une usine de production ?"\n\nSuivi 1 : "Parmi ces pratiques, lesquelles seraient les plus adaptées pour une équipe travaillant en 3x8 avec une forte proportion d\'opérateurs peu qualifiés ?"\n\nSuivi 2 : "Comment mettre en place concrètement un système de reconnaissance des performances dans ce contexte ? Quelles métriques utiliser et quelle fréquence de feedback recommandes-tu ?"\n\nSuivi 3 : "Élabore un plan d\'action détaillé sur 3 mois pour implémenter ce système de reconnaissance, en précisant les étapes, les ressources nécessaires et les indicateurs de succès."',
      },
    ],
    tips: [
      "Analysez attentivement chaque réponse avant de formuler la question suivante",
      "Alternez entre questions d'approfondissement et questions de clarification",
      "Orientez progressivement vers des aspects plus spécifiques ou pratiques",
      "N'hésitez pas à demander des exemples concrets ou des études de cas",
      "Utilisez cette technique pour explorer différentes facettes d'un sujet complexe",
    ],
    useCases: [
      "Exploration approfondie d'un sujet complexe",
      "Élaboration progressive de plans d'action détaillés",
      "Affinage de documents ou de communications",
      "Résolution de problèmes par étapes successives",
      "Personnalisation progressive de recommandations ou de conseils",
    ],
    relatedMethods: ["chain-of-thought", "least-to-most", "multi-prompting"],
  },
  {
    id: "generated-knowledge",
    title: "Generated Knowledge",
    shortDescription: "L'IA active d'abord ses connaissances",
    difficulty: "Avancé",
    tags: ["Savoir", "Contexte", "Profondeur"],
    description:
      "La technique Generated Knowledge consiste à demander à l'IA de générer d'abord des connaissances ou informations sur un sujet avant de formuler sa réponse finale. Cette approche permet d'activer explicitement les connaissances du modèle et d'obtenir des réponses plus informées et approfondies.",
    howToUse:
      "Demandez d'abord à l'IA de générer des informations pertinentes sur le sujet (faits, concepts, théories, tendances, etc.). Puis, dans un second temps, demandez-lui d'utiliser ces connaissances pour répondre à votre question spécifique ou accomplir la tâche demandée.",
    examples: [
      {
        good: 'Étape 1 : "Génère une liste des principales théories et recherches scientifiques sur la motivation au travail et leurs implications pratiques dans un contexte industriel."\n\nÉtape 2 : "En utilisant ces connaissances, élabore un programme de motivation adapté à une équipe de techniciens de maintenance travaillant en horaires décalés dans une usine agroalimentaire, avec un focus particulier sur la reconnaissance non-monétaire et le développement professionnel."',
      },
    ],
    tips: [
      "Soyez précis sur le type de connaissances à générer (théories, études, statistiques, etc.)",
      "Demandez des connaissances directement pertinentes pour votre question finale",
      "Utilisez cette technique pour des sujets complexes nécessitant une base de connaissances solide",
      "Vérifiez l'exactitude des connaissances générées si le sujet est critique",
      "Combinez cette approche avec Chain-of-Thought pour des analyses approfondies",
    ],
    useCases: [
      "Élaboration de stratégies basées sur des données probantes",
      "Création de contenus de formation fondés sur des théories solides",
      "Analyse approfondie de problématiques RH complexes",
      "Développement de politiques ou procédures nécessitant une base théorique",
      "Prise de décision éclairée sur des sujets sensibles ou complexes",
    ],
    relatedMethods: ["contextual-augmentation", "chain-of-thought", "expert-role-playing"],
  },
  {
    id: "contextual-augmentation",
    title: "Contextual Augmentation",
    shortDescription: "Enrichissement par le contexte",
    difficulty: "Avancé",
    tags: ["Documents", "Données", "Spécifique"],
    description:
      "La technique Contextual Augmentation consiste à fournir à l'IA des informations ou documents supplémentaires en contexte pour qu'elle s'en serve dans sa réponse. Cette approche permet d'obtenir des réponses plus pertinentes et adaptées à un contexte spécifique, en particulier pour des situations uniques à votre organisation.",
    howToUse:
      "Incluez dans votre prompt des extraits pertinents de documents, données ou informations spécifiques à votre contexte. Précisez clairement que l'IA doit utiliser ces informations pour formuler sa réponse. Assurez-vous que les informations fournies sont directement pertinentes pour la question posée.",
    examples: [
      {
        good: "Contexte : Voici un extrait de notre convention collective concernant les congés exceptionnels :\n\"Article 23 : Les salariés bénéficient de congés exceptionnels pour événements familiaux comme suit : mariage du salarié (5 jours), mariage d'un enfant (2 jours), naissance ou adoption (3 jours), décès du conjoint ou d'un enfant (5 jours), décès des parents ou beaux-parents (3 jours), déménagement (1 jour par an).\"\n\nEn utilisant ces informations, rédige un email à destination des managers pour leur expliquer comment gérer les demandes de congés exceptionnels, la procédure à suivre et les justificatifs à demander.",
      },
    ],
    tips: [
      "Sélectionnez soigneusement les informations contextuelles les plus pertinentes",
      "Structurez clairement la séparation entre le contexte fourni et votre demande",
      "Précisez comment l'IA doit utiliser ces informations spécifiques",
      "Vérifiez que les informations fournies ne contiennent pas de données sensibles",
      "Utilisez cette technique pour personnaliser les réponses à votre environnement spécifique",
    ],
    useCases: [
      "Interprétation de politiques ou règlements internes",
      "Création de communications basées sur des documents spécifiques",
      "Analyse de données propres à l'organisation",
      "Adaptation de procédures génériques à un contexte particulier",
      "Résolution de problèmes spécifiques à l'entreprise",
    ],
    relatedMethods: ["generated-knowledge", "rct", "template-filling"],
  },
  {
    id: "template-filling",
    title: "Template Filling",
    shortDescription: "Structure prédéfinie à compléter",
    difficulty: "Intermédiaire",
    tags: ["Format", "Systématique", "Répétitif"],
    description:
      "La technique Template Filling consiste à fournir à l'IA un gabarit de réponse avec des espaces réservés que le modèle doit renseigner de manière appropriée. Cette approche est particulièrement utile pour générer des documents standardisés ou des contenus suivant une structure fixe.",
    howToUse:
      "Créez un template clair avec des marqueurs ou espaces réservés bien identifiés. Demandez explicitement à l'IA de remplir ce template en respectant la structure fournie. Précisez les informations ou le style à utiliser pour chaque section du template.",
    examples: [
      {
        good: "Remplis le template suivant pour créer une fiche de poste complète pour un Responsable QHSE dans une usine agroalimentaire :\n\n# FICHE DE POSTE : [Titre du poste]\n\n## MISSION PRINCIPALE\n[Décrire en 2-3 phrases la mission principale]\n\n## RATTACHEMENT HIÉRARCHIQUE\n[Préciser le N+1 et éventuellement le N+2]\n\n## RESPONSABILITÉS CLÉS\n- [Responsabilité 1]\n- [Responsabilité 2]\n- [Responsabilité 3]\n- [Responsabilité 4]\n- [Responsabilité 5]\n\n## COMPÉTENCES REQUISES\n### Savoir-faire\n- [Compétence technique 1]\n- [Compétence technique 2]\n- [Compétence technique 3]\n\n### Savoir-être\n- [Compétence comportementale 1]\n- [Compétence comportementale 2]\n- [Compétence comportementale 3]\n\n## FORMATION ET EXPÉRIENCE\n[Préciser les diplômes requis et l'expérience minimale]\n\n## CONDITIONS PARTICULIÈRES\n[Mentionner les contraintes spécifiques : déplacements, astreintes, etc.]",
      },
    ],
    tips: [
      "Créez un template clair avec des marqueurs facilement identifiables",
      "Donnez des instructions précises sur le contenu attendu pour chaque section",
      "Utilisez une mise en forme cohérente pour faciliter la lecture du template",
      "Testez votre template avec différentes variations pour vérifier sa robustesse",
      "Combinez cette technique avec One-Shot ou Few-Shot pour des templates complexes",
    ],
    useCases: [
      "Création de documents standardisés (fiches de poste, évaluations, etc.)",
      "Génération de rapports suivant une structure fixe",
      "Production en série de contenus similaires (descriptions de postes, emails types)",
      "Création de formulaires ou questionnaires",
      "Documentation technique ou procédurale",
    ],
    relatedMethods: ["one-shot", "few-shot", "contextual-augmentation"],
  },
  {
    id: "least-to-most",
    title: "Least-to-Most Prompting",
    shortDescription: "Du plus simple au plus complexe",
    difficulty: "Avancé",
    tags: ["Progressif", "Structuré", "Méthodique"],
    description:
      "La technique Least-to-Most Prompting consiste à aborder un problème en commençant par des prompts très simples, puis en augmentant graduellement la complexité des demandes. Cette approche permet de décomposer des problèmes complexes en sous-problèmes plus faciles à résoudre, facilitant ainsi la génération de solutions complètes et précises.",
    howToUse:
      "Décomposez votre problème complexe en une série de sous-problèmes ou d'étapes plus simples. Commencez par poser des questions fondamentales ou basiques, puis construisez progressivement vers des questions plus complexes en vous appuyant sur les réponses précédentes.",
    examples: [
      {
        good: 'Étape 1 : "Quels sont les principaux facteurs à considérer lors de la conception d\'un système d\'évaluation des performances pour une entreprise industrielle ?"\n\nÉtape 2 : "Pour chacun de ces facteurs, quels seraient les indicateurs de performance (KPIs) pertinents pour des opérateurs de production ?"\n\nÉtape 3 : "Comment ces KPIs pourraient-ils être mesurés concrètement dans un environnement de production ? Propose des méthodes de collecte de données pour chaque indicateur."\n\nÉtape 4 : "Élabore maintenant un système complet d\'évaluation des performances pour les opérateurs de production, incluant les formulaires d\'évaluation, la fréquence des évaluations, et le processus de feedback."',
      },
    ],
    tips: [
      "Décomposez les problèmes complexes en étapes logiques et progressives",
      "Assurez-vous que chaque étape s'appuie sur les résultats des étapes précédentes",
      "Commencez par des questions fondamentales avant d'aborder les aspects complexes",
      "Utilisez les réponses intermédiaires comme base pour formuler les questions suivantes",
      "Vérifiez la cohérence entre les différentes étapes de raisonnement",
    ],
    useCases: [
      "Résolution de problèmes RH complexes",
      "Élaboration de stratégies ou de plans d'action détaillés",
      "Conception de systèmes ou processus RH",
      "Analyse approfondie de situations multifactorielles",
      "Formation et développement de compétences progressives",
    ],
    relatedMethods: ["chain-of-thought", "iterative-prompting", "multi-prompting"],
  },
  {
    id: "rct",
    title: "RCT (Rôle, Contexte, Tâche)",
    shortDescription: "Structure claire pour des résultats précis",
    difficulty: "Intermédiaire",
    tags: ["Structuré", "Professionnel", "Efficace"],
    description:
      "La technique RCT consiste à structurer votre prompt en trois parties distinctes : le Rôle que l'IA doit adopter, le Contexte détaillé de la situation, et la Tâche précise à accomplir. Cette structure claire permet d'obtenir des réponses plus ciblées et adaptées à vos besoins spécifiques.",
    howToUse:
      "Commencez par définir clairement le rôle que l'IA doit adopter (ex: 'En tant que responsable RH'). Fournissez ensuite un contexte détaillé qui donne toutes les informations pertinentes pour comprendre la situation. Terminez par une description précise de la tâche à accomplir ou de la question à laquelle répondre.",
    examples: [
      {
        good: "Rôle : En tant que responsable des relations sociales dans une entreprise industrielle de 500 personnes.\n\nContexte : Notre entreprise prévoit une réorganisation qui impliquera la suppression de 25 postes dans le département logistique et la création de 15 nouveaux postes plus techniques dans le département production. Le climat social est tendu suite à plusieurs mois de surcharge de travail. Les représentants du personnel sont généralement constructifs mais vigilants sur les questions d'emploi.\n\nTâche : Élabore un plan de communication complet pour annoncer cette réorganisation, incluant le calendrier, les messages clés pour chaque partie prenante, les canaux de communication à privilégier et les mesures d'accompagnement à mettre en avant.",
      },
    ],
    tips: [
      "Définissez précisément le rôle professionnel que l'IA doit adopter",
      "Fournissez un contexte riche en détails pertinents",
      "Formulez une tâche claire avec des livrables bien définis",
      "Assurez-vous que les trois composantes (R-C-T) sont cohérentes entre elles",
      "Adaptez le niveau de détail de chaque section selon la complexité de votre demande",
    ],
    useCases: [
      "Rédaction de communications professionnelles",
      "Élaboration de plans d'action ou de stratégies",
      "Résolution de problèmes RH spécifiques",
      "Préparation de documents ou présentations contextualisés",
      "Simulation de situations professionnelles pour la formation",
    ],
    relatedMethods: ["expert-role-playing", "contextual-augmentation", "zero-shot"],
  },
]
