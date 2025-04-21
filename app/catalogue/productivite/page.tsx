import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { PromptCard } from "@/components/prompt-card"

// Données des prompts pour la catégorie Productivité
const productivityPrompts = [
  {
    title: "Résumé d'article",
    description: "Créer un résumé concis d'un article",
    level: "Débutant",
    techniques: ["Zero-Shot", "One-Shot"],
    promptText:
      "Résume l'article suivant en 3-5 points clés, en conservant les informations essentielles et en éliminant les détails superflus:\n\n[Coller l'article ici]",
    category: "Productivité",
  },
  {
    title: "Plan de projet",
    description: "Créer un plan de projet structuré",
    level: "Intermédiaire",
    techniques: ["Few-Shot", "Chain-of-Thought"],
    promptText:
      "Aide-moi à créer un plan de projet détaillé pour [description du projet]. Inclus les phases principales, les jalons, les livrables, les ressources nécessaires et un calendrier estimatif.",
    category: "Productivité",
  },
  {
    title: "Automatisation de tâches",
    description: "Identifier les opportunités d'automatisation",
    level: "Avancé",
    techniques: ["Expert Role-Playing", "Chain-of-Thought"],
    promptText:
      "Agis comme un expert en automatisation des processus. Analyse mon flux de travail quotidien ci-dessous et identifie 5 opportunités d'automatisation qui me feraient gagner le plus de temps. Pour chaque opportunité, suggère des outils spécifiques et une approche étape par étape pour implémenter cette automatisation.\n\nMon flux de travail:\n[Description du flux de travail]",
    category: "Productivité",
  },
  {
    title: "Priorisation des tâches",
    description: "Organiser et prioriser une liste de tâches",
    level: "Débutant",
    techniques: ["Zero-Shot", "Chain-of-Thought"],
    promptText:
      "Voici ma liste de tâches pour aujourd'hui:\n\n[Liste de tâches]\n\nAide-moi à les organiser selon la matrice d'Eisenhower (Urgent/Important). Pour chaque tâche, indique sa catégorie et justifie brièvement ton choix. Ensuite, propose un ordre d'exécution optimal.",
    category: "Productivité",
  },
  {
    title: "Amélioration de processus",
    description: "Optimiser un processus existant",
    level: "Intermédiaire",
    techniques: ["Few-Shot", "Chain-of-Thought"],
    promptText:
      "Analyse le processus suivant et identifie les goulots d'étranglement, les redondances ou les étapes qui pourraient être optimisées. Propose ensuite une version améliorée du processus avec des justifications pour chaque modification.\n\nProcessus actuel:\n[Description du processus]",
    category: "Productivité",
  },
  {
    title: "Création de templates",
    description: "Générer des templates réutilisables",
    level: "Débutant",
    techniques: ["Zero-Shot"],
    promptText:
      "Crée un template réutilisable pour [type de document] qui inclut toutes les sections essentielles, des instructions pour chaque section, et des exemples de formulation. Le template doit être adapté pour [contexte/industrie].",
    category: "Productivité",
  },
  {
    title: "Analyse de données",
    description: "Extraire des insights de données",
    level: "Avancé",
    techniques: ["Few-Shot", "Chain-of-Thought"],
    promptText:
      "Agis comme un analyste de données. Examine les données suivantes et identifie les tendances principales, les anomalies et les insights actionnables. Présente ton analyse de façon structurée avec des recommandations concrètes.\n\nDonnées:\n[Données à analyser]",
    category: "Productivité",
  },
  {
    title: "Checklist de projet",
    description: "Créer une checklist exhaustive",
    level: "Intermédiaire",
    techniques: ["Few-Shot"],
    promptText:
      "Crée une checklist exhaustive pour [type de projet]. La checklist doit couvrir toutes les étapes de la préparation à la finalisation, inclure des points de contrôle qualité, et anticiper les problèmes potentiels.",
    category: "Productivité",
  },
  {
    title: "Rédaction d'emails",
    description: "Générer des emails professionnels",
    level: "Débutant",
    techniques: ["Zero-Shot", "One-Shot"],
    promptText:
      "Rédige un email professionnel pour [contexte/situation]. L'email doit être [ton souhaité: formel/amical/persuasif], inclure [éléments spécifiques], et se terminer par un appel à l'action clair.",
    category: "Productivité",
  },
  {
    title: "Prise de décision",
    description: "Analyser les options pour une décision",
    level: "Avancé",
    techniques: ["Chain-of-Thought", "Few-Shot"],
    promptText:
      "Je dois prendre une décision concernant [description de la décision]. Voici les options que j'envisage:\n\n[Liste des options]\n\nPour chaque option, analyse les avantages, les inconvénients, les risques et les opportunités. Utilise une approche structurée et logique. Termine par une recommandation justifiée.",
    category: "Productivité",
  },
  {
    title: "Préparation de réunion",
    description: "Structurer une réunion efficace",
    level: "Intermédiaire",
    techniques: ["Zero-Shot", "Few-Shot"],
    promptText:
      "Aide-moi à préparer une réunion efficace sur [sujet de la réunion] avec [nombre] participants. Crée un agenda structuré avec des durées estimées, des objectifs clairs pour chaque section, des questions à poser, et des techniques pour maintenir l'engagement et la productivité.",
    category: "Productivité",
  },
  {
    title: "Feedback constructif",
    description: "Formuler un feedback efficace",
    level: "Intermédiaire",
    techniques: ["Few-Shot", "Chain-of-Thought"],
    promptText:
      "Je dois donner un feedback à [personne/équipe] concernant [situation/projet]. Aide-moi à structurer ce feedback de manière constructive en utilisant le modèle SBI (Situation-Behavior-Impact). Le feedback doit être spécifique, actionnable et équilibré entre points positifs et axes d'amélioration.",
    category: "Productivité",
  },
  {
    title: "Loi de Pareto",
    description: "Appliquer le principe 80/20 à votre travail",
    level: "Avancé",
    techniques: ["Chain-of-Thought"],
    promptText:
      "En tant que consultant en productivité, analyse la façon dont je pourrais appliquer la loi de Pareto (principe 80/20) à mon travail actuel. \n\nVoici mes principales activités quotidiennes:\n[Liste de tes 10 activités professionnelles quotidiennes]\n\nPour résoudre ce problème, suis ces étapes de raisonnement:\n1. Analyse chaque activité en termes de temps investi et de valeur produite\n2. Identifie les 20% d'activités susceptibles de générer 80% des résultats\n3. Examine les activités à faible rendement et détermine lesquelles pourraient être déléguées, automatisées ou éliminées\n4. Propose une réorganisation de ma journée type qui maximise l'impact des activités à haute valeur\n5. Suggère des indicateurs concrets pour mesurer l'efficacité de cette nouvelle organisation\n\nDétaille ton raisonnement étape par étape avant de formuler tes recommandations finales.",
    category: "Productivité",
  },
  {
    title: "Méthode GTD",
    description: "Implémentation personnalisée de Getting Things Done",
    level: "Avancé",
    techniques: ["RCT"],
    promptText:
      "En tant que coach certifié en méthode GTD (Getting Things Done) de David Allen,\n\ntu travailles avec un cadre dirigeant submergé par plus de 200 emails quotidiens, des dizaines de réunions hebdomadaires et de multiples projets stratégiques simultanés. Cette personne se sent constamment débordée et a l'impression de toujours courir après le temps. Elle utilise actuellement un mélange de notes papier, emails marqués et rappels sur téléphone, sans système cohérent.\n\nConçois un plan d'implémentation personnalisé de la méthode GTD en 5 phases (Collecter, Clarifier, Organiser, Réfléchir, Engager) qui:\n1. Commence par un audit de son système actuel de gestion d'informations\n2. Propose un processus de traitement quotidien de sa boîte email\n3. Établit une architecture précise de listes et de dossiers\n4. Intègre une méthode de revue hebdomadaire efficace\n5. Recommande des outils numériques/physiques spécifiques adaptés à son profil\n\nInclus des solutions pour les obstacles psychologiques courants et des scripts précis pour les moments de décision difficiles.",
    category: "Productivité",
  },
  {
    title: "Deep Work",
    description: "Maximiser la concentration profonde",
    level: "Avancé",
    techniques: ["Expert Role-Playing", "Contextual Augmentation"],
    promptText:
      "Tu es Cal Newport, professeur d'informatique à Georgetown University et auteur du livre \"Deep Work\". Tu es reconnu mondialement comme l'expert de référence sur la concentration profonde et le travail cognitif de haute performance.\n\nCONTEXTE SUPPLÉMENTAIRE:\n- Études récentes (2023): Les travailleurs du savoir sont interrompus en moyenne toutes les 3 minutes, et il faut 23 minutes pour retrouver une concentration optimale\n- Le collaborateur moyen consulte ses emails/messages 74 fois par jour\n- Les personnes capables de sessions régulières de deep work de 2h+ sont 34% plus productives et rapportent une satisfaction professionnelle supérieure de 42%\n- La capacité d'attention soutenue a diminué de 25% depuis 2000\n- Les environnements de travail ouverts réduisent la productivité cognitive de 15-28%\n\nEn tant que Cal Newport, analyse mon environnement de travail actuel et mes habitudes, puis recommande une transformation complète pour maximiser ma capacité de deep work:\n\n[Description de mon environnement professionnel, horaires, distractions courantes, et type de travail intellectuel]\n\nDans ta réponse:\n1. Diagnostique précisément les obstacles au deep work dans ma situation\n2. Propose une \"règle du deep work\" personnalisée (philosophie d'engagement)\n3. Conçois un rituel de début/fin de session adapté à mon contexte\n4. Recommande des modifications spécifiques à mon environnement physique et numérique\n5. Établis un programme progressif sur 30 jours pour transformer mes habitudes",
    category: "Productivité",
  },
  {
    title: "Technique Pomodoro",
    description: "Adapter la technique Pomodoro à différentes tâches",
    level: "Avancé",
    techniques: ["Few-Shot Prompting"],
    promptText:
      'J\'aimerais adapter la technique Pomodoro à différents types de tâches professionnelles. Voici quelques exemples d\'adaptations réussies:\n\nEXEMPLE 1 - RÉDACTION DE CONTENU:\nObjectif: Rédiger un article de blog de 1500 mots\nAdaptation Pomodoro: Sessions de 25 minutes avec objectif de 300-400 mots par session\nOutil: Minuteur Focus Booster + Désactivation des notifications\nRésultat: Complétion en 5 pomodoros, productivité augmentée de 30% par rapport aux sessions non-chronométrées\n\nEXEMPLE 2 - DÉVELOPPEMENT LOGICIEL:\nObjectif: Coder une nouvelle fonctionnalité\nAdaptation Pomodoro: Sessions de 35 minutes pour respecter le flow state spécifique au code\nOutil: Extension VS Code "Pomodoro Timer"\nRésultat: Moins d\'erreurs et meilleure documentation du code, réduction du temps de débogage ultérieur\n\nEXEMPLE 3 - ANALYSE DE DONNÉES:\nObjectif: Analyser des données marketing trimestrielles\nAdaptation Pomodoro: Alternance de sessions de 20 minutes (analyse intensive) et sessions de 40 minutes (recherche de patterns)\nOutil: Technique "timeboxing" dans Google Calendar\nRésultat: Identification de 3 insights critiques manqués lors des analyses précédentes sans structure temporelle\n\nEn suivant ces modèles, crée une adaptation Pomodoro optimisée pour mes tâches principales:\n[Liste de 3-4 types de tâches que tu effectues régulièrement]',
    category: "Productivité",
  },
  {
    title: "Batching",
    description: "Stratégie de regroupement de tâches similaires",
    level: "Avancé",
    techniques: ["Contextual Augmentation", "Chain-of-Thought"],
    promptText:
      "Je souhaite mettre en place une stratégie de batching (regroupement de tâches similaires) pour optimiser ma productivité.\n\nINFORMATIONS CONTEXTUELLES IMPORTANTES:\n- Études cognitives récentes: Le coût de changement de contexte réduit la productivité de 20-40%\n- Le temps moyen pour atteindre une concentration optimale après un changement de tâche: 23 minutes\n- Le batching est particulièrement efficace pour: emails, appels, tâches administratives, création de contenu\n- Variantes efficaces: batching thématique, batching temporel, batching par énergie requise\n- Outils complémentaires recommandés: timeboxing, blocage de calendrier, modes \"ne pas déranger\"\n- Contre-indications: services d'urgence, rôles nécessitant une disponibilité constante\n\nPour créer ma stratégie de batching personnalisée, suis cette méthode pas à pas:\n\n1. Analyse de mon emploi du temps actuel:\n   [Description de mes journées typiques et responsabilités]\n\n2. Étape 1: Identifie les catégories de tâches qui pourraient bénéficier du batching\n   Raisonnement: Quelles tâches sont similaires en termes de ressources mentales ou d'outils requis?\n\n3. Étape 2: Détermine les périodes optimales pour chaque catégorie\n   Raisonnement: À quels moments de la journée/semaine ces tâches s'alignent-elles avec mon énergie et mes contraintes?\n\n4. Étape 3: Conçois un système pour collecter les tâches entre les sessions de batching\n   Raisonnement: Comment éviter que ces tâches n'interrompent mon travail entre les périodes dédiées?\n\n5. Étape 4: Établis un protocole de transition entre les différents batchs\n   Raisonnement: Comment minimiser le coût cognitif de changement entre catégories?\n\n6. Étape 5: Propose un calendrier concret intégrant ces batchs sur une semaine type\n   Raisonnement: Comment structurer cela dans mon emploi du temps réel?",
    category: "Productivité",
  },
  {
    title: "Parabole des Gros Cailloux",
    description: "Application du principe des priorités essentielles",
    level: "Avancé",
    techniques: ["Generated Knowledge", "Multi-Prompting"],
    promptText:
      'Pour m\'aider à appliquer efficacement le principe des "Gros Cailloux" dans ma vie professionnelle:\n\nÉTAPE 1: GÉNÉRATION DE CONNAISSANCES PRÉLIMINAIRES\nAvant de me donner des conseils, génère d\'abord les connaissances suivantes:\n- Origine précise et signification de la parabole des gros cailloux de Stephen Covey\n- Études scientifiques sur la hiérarchisation des priorités et son impact sur la productivité\n- Principales méthodes d\'identification des "gros cailloux" (tâches essentielles à haute valeur)\n- Erreurs les plus fréquentes dans l\'application de ce principe\n- Adaptation moderne du concept à l\'environnement de travail numérique et au télétravail\n\nÉTAPE 2: RÉFLEXION MULTIDIMENSIONNELLE\nMaintenant, examine ma situation sous trois angles différents:\n\nANGLE 1: IDENTIFICATION DES PRIORITÉS\nAide-moi à identifier mes véritables "gros cailloux" avec ces questions:\n- Quels seraient mes 3-5 plus grands regrets professionnels si je quittais mon poste demain?\n- Quelles activités génèrent 80% de ma valeur ajoutée?\n- Quelles tâches, si négligées, auraient le plus grand impact négatif à long terme?\n\nANGLE 2: RESTRUCTURATION DU TEMPS\nAnalyse comment je pourrais réorganiser mon emploi du temps:\n- Comment puis-je bloquer du temps inviolable pour mes "gros cailloux"?\n- Quelles sont les meilleures stratégies pour protéger ces plages horaires?\n- Comment gérer les demandes concurrentes pendant ces périodes?\n\nANGLE 3: GESTION DES "PETITS CAILLOUX"\nPropose des stratégies pour:\n- Identifier les tâches qui peuvent être déléguées, automatisées ou éliminées\n- Gérer efficacement les tâches importantes mais non urgentes\n- Traiter les "grains de sable" (micro-tâches) sans qu\'ils perturbent mes priorités\n\nSYNTHÈSE FINALE:\nEn utilisant toutes ces perspectives, formule un plan d\'action concret adapté à mon profil professionnel:\n[Description de ton poste, principales responsabilités et défis actuels]',
    category: "Productivité",
  },
  {
    title: "La Méthode SMART",
    description: "Transformer des objectifs vagues en objectifs précis",
    level: "Avancé",
    techniques: ["Template Filling", "Chain-of-Thought"],
    promptText:
      "Aide-moi à transformer mes objectifs vagues en objectifs SMART (Spécifiques, Mesurables, Atteignables, Pertinents, Temporellement définis).\n\nPour chacun de mes objectifs actuels, je te demande de suivre ce processus de réflexion détaillé et de compléter le template fourni:\n\nOBJECTIF INITIAL:\n[Insère ton objectif professionnel ou personnel actuel, formulé de façon générale]\n\nPROCESSUS DE TRANSFORMATION:\n\n1. ANALYSE DE LA SPÉCIFICITÉ:\n   - Problème de spécificité identifié: [À compléter]\n   - Raisonnement: [À compléter]\n   - Reformulation spécifique: [À compléter]\n\n2. ÉTABLISSEMENT DES MESURES:\n   - Indicateurs de performance clés: [À compléter]\n   - Méthode de suivi proposée: [À compléter]\n   - Fréquence d'évaluation recommandée: [À compléter]\n\n3. ÉVALUATION DE L'ATTEIGNABILITÉ:\n   - Ressources nécessaires: [À compléter]\n   - Compétences requises: [À compléter]\n   - Obstacles potentiels: [À compléter]\n   - Stratégies d'atténuation: [À compléter]\n\n4. ALIGNEMENT AVEC LA PERTINENCE:\n   - Lien avec mes objectifs à long terme: [À compléter]\n   - Valeur/impact attendu: [À compléter]\n   - Justification de priorité: [À compléter]\n\n5. DÉFINITION TEMPORELLE:\n   - Date limite finale: [À compléter]\n   - Jalons intermédiaires: [À compléter]\n   - Calendrier de révision: [À compléter]\n\nOBJECTIF SMART FINAL:\n[À compléter - formulation complète selon le format SMART]\n\nPLAN D'ACTION IMMÉDIAT (PREMIERS PAS):\n1. [À compléter]\n2. [À compléter]\n3. [À compléter]",
    category: "Productivité",
  },
  {
    title: "L'État de Flow",
    description: "Optimiser les conditions pour atteindre l'état de flow",
    level: "Avancé",
    techniques: ["Iterative Prompting"],
    promptText:
      "Je souhaite optimiser mes conditions de travail pour atteindre plus régulièrement l'état de flow décrit par Mihaly Csikszentmihalyi. Guidons cette exploration par étapes successives.\n\nÉTAPE 1: DIAGNOSTIC DE MON EXPÉRIENCE ACTUELLE DU FLOW\nPour commencer, analyse mon expérience actuelle avec l'état de flow:\n- À quelle fréquence j'atteins cet état\n- Dans quelles circonstances précises cela se produit\n- Combien de temps dure généralement cet état\n- Ce qui déclenche habituellement la sortie de cet état\n\n[Je répondrai à ces questions avant que tu continues]\n\nÉTAPE 2: ANALYSE DES CONDITIONS FAVORABLES\nMaintenant, identifie les facteurs spécifiques qui semblent favoriser mon entrée en état de flow, en considérant:\n- Environnement physique\n- Moment de la journée\n- Type de tâches\n- État psychologique préalable\n- Rituels ou routines\n\n[Je fournirai ces informations après ta réponse]\n\nÉTAPE 3: CONCEPTION D'UN ENVIRONNEMENT OPTIMISÉ\nEn fonction de mon profil flow, propose:\n- Modifications à apporter à mon espace de travail\n- Ajustements de mon emploi du temps\n- Stratégies de gestion des interruptions\n- Techniques de préparation mentale\n\n[J'attendrai tes recommandations avant de continuer]\n\nÉTAPE 4: ÉLABORATION D'UN PROTOCOLE D'ENTRÉE EN FLOW\nConçois un rituel personnalisé en 3-5 étapes pour faciliter mon entrée en état de flow:\n- Séquence d'actions préparatoires\n- Durée estimée de chaque étape\n- Indicateurs de progression vers l'état de flow\n\n[J'évaluerai ton protocole avant la prochaine étape]\n\nÉTAPE 5: PLAN D'EXTENSION DE LA DURÉE DE FLOW\nPropose des stratégies pour prolonger mes périodes de flow une fois qu'elles sont établies:\n- Techniques de maintien de la concentration\n- Gestion optimale des ressources physiologiques (énergie, hydratation, etc.)\n- Méthodes pour noter les idées périphériques sans briser l'état de flow\n\n[Continue après ma réponse]",
    category: "Productivité",
  },
  {
    title: "Effet Cumulé",
    description: "Plan d'actions quotidiennes pour des résultats extraordinaires",
    level: "Avancé",
    techniques: ["Expert Role-Playing", "Contextual Augmentation"],
    promptText:
      "Tu es Darren Hardy, auteur du best-seller \"L'Effet Cumulé\" et ancien éditeur du magazine SUCCESS. Tu es spécialiste des petites actions quotidiennes qui, répétées régulièrement, produisent des résultats extraordinaires sur le long terme.\n\nCONTEXTE SUPPLÉMENTAIRE:\n- Le principe mathématique de l'intérêt composé appliqué au développement personnel\n- Études neurologiques sur la formation d'habitudes (21-66 jours pour automatiser un comportement)\n- Recherches récentes sur l'impact des micro-habitudes sur les changements comportementaux durables\n- Méthodologies de tracking d'habitudes les plus efficaces en 2023\n- Statistiques sur les taux d'échec des changements comportementaux (92% des résolutions du Nouvel An)\n\nEn tant que Darren Hardy, analyse mon objectif de productivité et crée un plan d'effet cumulé personnalisé:\n\n[Description de ton objectif de productivité/performance et des défis que tu rencontres]\n\nTa réponse doit inclure:\n1. Une analyse des \"choix apparemment insignifiants\" quotidiens qui pourraient avoir l'impact le plus significatif\n2. Un système précis pour traquer ces micro-actions (avec template concret)\n3. Une stratégie d'amplification progressive sur 6 mois\n4. Des mécanismes de responsabilisation et de célébration des jalons\n5. Un plan pour surmonter le \"plateau du désespoir\" (période où les résultats semblent stagner)\n\nUtilise ton style authentique de communication, incluant des métaphores percutantes et questions provocantes comme dans tes livres et conférences.",
    category: "Productivité",
  },
  {
    title: "Systèmes de Gestion de Tâches",
    description: "Choisir et configurer le système idéal pour votre profil",
    level: "Avancé",
    techniques: ["Multi-Prompting", "Generated Knowledge"],
    promptText:
      "Pour m'aider à choisir et configurer le système de gestion de tâches idéal pour mon profil professionnel, j'ai besoin d'une analyse approfondie sous plusieurs angles:\n\nÉTAPE 1: GÉNÉRER DES CONNAISSANCES FONDAMENTALES\nAvant de répondre, synthétise les informations essentielles sur:\n- Évolution récente des principaux systèmes de gestion de tâches (monday.com, Todoist, Trello, etc.)\n- Études comparatives sur leur efficacité selon différents profils cognitifs et professionnels\n- Tendances émergentes en matière d'intégration entre outils de productivité\n- Principaux facteurs d'abandon des systèmes de gestion de tâches\n- Critères objectifs pour évaluer l'adéquation d'un système à un profil utilisateur\n\nPROMPT 1: ANALYSE DE MON PROFIL UTILISATEUR\nBasé sur ces informations, analyse mon profil pour identifier mes besoins spécifiques:\n[Description de mon rôle, style de travail, défis actuels de gestion de tâches, outils déjà utilisés]\n- Quels sont mes modes de pensée dominants (linéaire, visuel, contextuel)?\n- Quels types de tâches composent principalement mon travail?\n- Quels sont mes principaux points de friction actuels?\n- Quel niveau de complexité de système puis-je gérer efficacement?\n\nPROMPT 2: ÉVALUATION COMPARATIVE DES SYSTÈMES\nCrée une matrice d'évaluation des 5 outils les plus pertinents pour mon profil, notant chacun sur:\n- Adéquation avec mon style cognitif (1-10)\n- Capacité à gérer mes types de tâches spécifiques (1-10)\n- Courbe d'apprentissage vs bénéfices attendus (1-10)\n- Intégration avec mon écosystème d'outils existant (1-10)\n- Fonctionnalités de motivation/gamification adaptées à mon profil (1-10)\n\nPROMPT 3: STRATÉGIE D'IMPLÉMENTATION\nPour les 2 systèmes les mieux classés dans ton analyse:\n- Propose un plan d'implémentation progressif sur 30 jours\n- Crée une architecture de tâches/projets adaptée à mon flux de travail\n- Identifie les automatisations potentielles pour maximiser l'efficacité\n- Suggère une routine quotidienne/hebdomadaire d'utilisation\n- Développe une stratégie pour maintenir l'engagement à long terme",
    category: "Productivité",
  },
]

export default function ProductivitePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/catalogue">Catalogue</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/catalogue/productivite">Productivité</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Prompts de Productivité</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {productivityPrompts.length} prompts pour optimiser votre temps, améliorer votre organisation et maximiser
          votre efficacité.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {productivityPrompts.map((prompt, index) => (
          <PromptCard
            key={index}
            title={prompt.title}
            description={prompt.description}
            level={prompt.level as any}
            techniques={prompt.techniques}
            promptText={prompt.promptText}
            category={prompt.category}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Vous avez une idée de prompt pour la productivité?</p>
        <Link href="/proposer">
          <Button>
            Proposer un prompt <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
