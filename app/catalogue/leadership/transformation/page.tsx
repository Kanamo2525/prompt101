"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { PromptCard } from "@/components/prompt-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Tableau des prompts intermédiaires
const intermediatePrompts = [
  {
    title: "Conduite du changement et innovation",
    description: "Structurer les étapes clés d'un processus de changement",
    level: "Intermédiaire",
    techniques: ["Chain-of-Thought", "Template Filling"],
    promptText: `Je souhaite mettre en place un processus de changement organisationnel structuré.

CONTEXTE:
- Organisation: [décris ton organisation]
- Changement envisagé: [décris le changement que tu souhaites implémenter]
- Raison du changement: [explique pourquoi ce changement est nécessaire]
- Résistances anticipées: [identifie les principales sources de résistance]

Pour m'aider à structurer ce processus de changement, guide-moi à travers les étapes suivantes:

ÉTAPE 1: PRÉPARATION ET DIAGNOSTIC
Réfléchissons à:
- Comment formuler une vision claire et convaincante du changement?
- Quelles données devrais-je collecter pour justifier la nécessité du changement?
- Comment évaluer la capacité et la disposition au changement de l'organisation?
- Quelles parties prenantes clés devrais-je impliquer dans la phase de diagnostic?

ÉTAPE 2: CONCEPTION ET PLANIFICATION
Aidez-moi à:
- Structurer les principales phases du processus de changement
- Identifier les ressources nécessaires (humaines, financières, technologiques)
- Anticiper les obstacles potentiels et planifier des stratégies d'atténuation
- Définir des indicateurs de succès mesurables pour chaque phase

ÉTAPE 3: MISE EN ŒUVRE ET ENGAGEMENT
Conseille-moi sur:
- Les meilleures pratiques pour communiquer efficacement le changement
- Comment créer une coalition de soutien et des "champions du changement"
- Des méthodes pour maintenir l'élan et l'engagement pendant la transition
- Des approches pour gérer les résistances de manière constructive

ÉTAPE 4: CONSOLIDATION ET PÉRENNISATION
Guide-moi pour:
- Ancrer les nouvelles pratiques dans la culture organisationnelle
- Mettre en place des mécanismes pour suivre les progrès et ajuster si nécessaire
- Célébrer les succès et reconnaître les contributions
- Créer un système d'amélioration continue post-changement

Pour chaque étape, propose des outils ou méthodologies spécifiques que je pourrais utiliser, et des exemples concrets de la façon dont ils ont été appliqués avec succès dans des contextes similaires.`,
    category: "Leadership - Transformation",
    subcategory: "Conduite du changement et innovation",
  },
  {
    title: "Agilité et adaptabilité",
    description: "Développer sa flexibilité managériale",
    level: "Intermédiaire",
    techniques: ["Few-Shot", "Template Filling"],
    promptText: `Je souhaite développer ma flexibilité managériale pour m'adapter efficacement aux différents contextes, situations et personnes. Voici mon contexte actuel:

CONTEXTE:
- Mon rôle: [décris ton rôle actuel]
- Mon équipe: [décris la composition et la dynamique de ton équipe]
- Défis actuels: [décris les situations qui nécessitent plus de flexibilité]
- Mon style naturel: [décris ton approche habituelle de management]

Voici quelques exemples de flexibilité managériale réussie que tu peux utiliser comme inspiration:

EXEMPLE 1: ADAPTATION AU NIVEAU DE MATURITÉ
Sarah gérait une équipe mixte composée de seniors expérimentés et de nouveaux talents. Elle a adopté un style directif avec les débutants (instructions claires, suivi régulier) et un style délégatif avec les seniors (autonomie, consultation). Cette flexibilité a permis à chacun de progresser à son rythme tout en se sentant correctement accompagné.

EXEMPLE 2: ADAPTATION À LA SITUATION
Lorsque son équipe traversait une crise (délai serré, pression des clients), Thomas a adopté temporairement un style plus directif pour traverser l'urgence. Une fois la situation stabilisée, il est revenu à son style participatif habituel, en expliquant clairement ce changement à son équipe.

EXEMPLE 3: ADAPTATION CULTURELLE
Prenant la direction d'une filiale à l'étranger, Amina a modifié son style de communication très direct pour adopter une approche plus indirecte et contextuelle, respectant les normes culturelles locales. Elle a également ajusté son niveau de formalité dans les relations professionnelles.

EXEMPLE 4: ADAPTATION AUX PERSONNALITÉS
Carlos a appris à varier son approche selon les préférences de ses collaborateurs: plus de détails et structure pour les analytiques, vue d'ensemble et possibilités pour les créatifs, approche collaborative avec les relationnels, et résultats/efficacité avec les pragmatiques.

À partir de ces exemples et de ton contexte, je vais t'aider à:

1. DIAGNOSTIC PERSONNEL
   - Identifier tes zones de confort et d'inconfort en matière de flexibilité
   - Reconnaître les signes qui indiquent qu'un changement d'approche est nécessaire
   - Évaluer les situations où ta flexibilité actuelle est insuffisante

2. DÉVELOPPEMENT DE TON RÉPERTOIRE
   - Élaborer 3-4 approches managériales adaptées à différentes situations
   - Définir clairement quand et comment utiliser chaque approche
   - Identifier les compétences spécifiques à développer pour chaque style

3. PLAN DE MISE EN PRATIQUE
   - Créer des opportunités d'expérimenter ces différentes approches
   - Établir un système de feedback pour évaluer l'efficacité de ta flexibilité
   - Planifier des moments de réflexion pour affiner tes approches

4. COMMUNICATION DU CHANGEMENT
   - Stratégies pour expliquer ta démarche d'adaptation à ton équipe
   - Techniques pour maintenir l'authenticité malgré les changements d'approche
   - Méthodes pour impliquer l'équipe dans ce processus d'adaptation

L'objectif n'est pas de devenir incohérent ou manipulateur, mais d'élargir ton répertoire tout en restant fidèle à tes valeurs fondamentales et en maintenant une cohérence perçue par ton équipe.`,
    category: "Leadership - Transformation",
    subcategory: "Agilité et adaptabilité",
  },
  {
    title: "Gestion de la complexité",
    description: "Naviguer dans les environnements VUCA",
    level: "Intermédiaire",
    techniques: ["RCT (Rôle, Contexte, Tâche)", "Few-Shot"],
    promptText: `RÔLE: Tu es un coach spécialisé en leadership adaptatif et gestion de la complexité, avec 15 ans d'expérience dans l'accompagnement de dirigeants confrontés à des environnements VUCA (Volatils, Incertains, Complexes, Ambigus).

CONTEXTE: Je suis [ton rôle] dans [ton secteur] et je fais face à un environnement professionnel de plus en plus complexe et imprévisible. Les approches traditionnelles de résolution de problèmes et de prise de décision ne semblent plus suffisamment efficaces face à la volatilité et l'incertitude croissantes.

TÂCHE: Guide-moi pour développer mes capacités à naviguer efficacement dans cet environnement VUCA, en m'offrant des stratégies concrètes et applicables, inspirées des meilleures pratiques en leadership adaptatif.

Voici quelques exemples de dirigeants ayant réussi à naviguer dans des environnements VUCA:

EXEMPLE 1: FACE À LA VOLATILITÉ
Lorsque le marché a connu des fluctuations soudaines et extrêmes, Jasmine (CEO d'une PME) a répondu en:
- Développant plusieurs scénarios alternatifs plutôt qu'un seul plan rigide
- Créant des réserves stratégiques de ressources pour absorber les chocs
- Instaurant des points de décision réguliers pour ajuster rapidement la trajectoire
- Établissant des systèmes d'alerte précoce pour détecter les changements significatifs

EXEMPLE 2: FACE À L'INCERTITUDE
Confronté à l'impossibilité de prédire l'évolution technologique de son secteur, Marc (directeur R&D) a:
- Mis en place une approche de développement itérative et incrémentale
- Créé un portefeuille diversifié de projets à différents niveaux de risque
- Investi dans des capacités fondamentales plutôt que des solutions spécifiques
- Développé des partenariats stratégiques pour partager les risques et les insights

EXEMPLE 3: FACE À LA COMPLEXITÉ
Pour gérer un réseau de production international avec des interdépendances croissantes, Sophia (directrice des opérations) a:
- Cartographié visuellement les interdépendances du système
- Décentralisé la prise de décision tout en maintenant une vision globale cohérente
- Privilégié l'expertise diversifiée et la collaboration multidisciplinaire
- Mis l'accent sur la compréhension des modèles et des relations plutôt que sur des métriques isolées

EXEMPLE 4: FACE À L'AMBIGUÏTÉ
Lors du lancement d'un nouveau service sans précédent sur le marché, Thomas (entrepreneur) a:
- Favorisé l'expérimentation rapide et l'apprentissage continu
- Maintenu une vision claire du "pourquoi" tout en restant flexible sur le "comment"
- Créé des espaces de réflexion collective pour faire émerger de nouvelles perspectives
- Développé sa capacité à rester serein dans l'inconfort de l'incertitude

À partir de ces exemples et de ton contexte spécifique, je vais te proposer:

1. Un diagnostic des aspects VUCA qui impactent le plus ton environnement actuel
2. Des pratiques personnelles pour développer ton agilité cognitive et émotionnelle
3. Des méthodes pour développer une vision plus systémique des situations complexes
4. Des approches de prise de décision adaptées aux différentes facettes de VUCA
5. Des stratégies organisationnelles pour développer la résilience collective
6. Des rituels d'équipe pour naviguer ensemble dans la complexité

Pour chaque recommandation, je te proposerai une action concrète que tu pourras implémenter dès cette semaine.`,
    category: "Leadership - Transformation",
    subcategory: "Gestion de la complexité",
  },
  {
    title: "Intelligence collective",
    description: "Faciliter l'émergence de solutions collectives",
    level: "Intermédiaire",
    techniques: ["RCT (Rôle, Contexte, Tâche)", "Template Filling"],
    promptText: `RÔLE: Tu es un expert en facilitation et intelligence collective, spécialisé dans la conception de processus collaboratifs qui permettent l'émergence de solutions innovantes au sein des organisations.

CONTEXTE: Je dirige une équipe/un projet qui fait face à [décrire le défi complexe actuel]. J'ai constaté que les approches traditionnelles (réunions classiques, brainstorming simple) ne permettent pas de mobiliser pleinement l'intelligence du groupe et d'aboutir à des solutions vraiment nouvelles et efficaces.

TÂCHE: Guide-moi dans la conception et la facilitation d'un processus collaboratif qui permettra de mobiliser efficacement l'intelligence collective de mon équipe/groupe pour relever ce défi.

Pour m'aider à concevoir ce processus, je te fournis le cadre suivant à compléter:

1. PRÉPARATION DU TERRAIN
   - Composition du groupe: [Qui devrait participer? Quelle diversité rechercher?]
   - Cadre de sécurité: [Comment créer un environnement psychologiquement sécurisant?]
   - Clarification de l'intention: [Comment formuler la question/défi de manière ouverte et inspirante?]
   - Espace physique/virtuel: [Comment configurer l'espace pour favoriser la collaboration?]

2. DIVERGENCE: EXPLORATION ET ÉMERGENCE
   - Techniques pour élargir les perspectives: [Quelles méthodes utiliser pour sortir des sentiers battus?]
   - Protocoles d'écoute profonde: [Comment assurer que chaque voix soit entendue?]
   - Outils de visualisation collective: [Comment rendre visible la pensée du groupe?]
   - Gestion des polarités et tensions: [Comment utiliser constructivement les désaccords?]

3. ÉMERGENCE: IDENTIFICATION DES PATTERNS
   - Méthodes de synthèse: [Comment identifier les motifs et thèmes émergents?]
   - Techniques d'intégration: [Comment combiner différentes idées en solutions plus riches?]
   - Approches systémiques: [Comment visualiser les interconnexions entre les idées?]
   - Pratiques contemplatives: [Quels moments de pause et réflexion intégrer?]

4. CONVERGENCE: DÉCISION ET ACTION
   - Processus décisionnels: [Quelle méthode de prise de décision collective utiliser?]
   - Priorisation participative: [Comment choisir collectivement les solutions à développer?]
   - Prototypage rapide: [Comment tester rapidement les idées émergentes?]
   - Plan d'implémentation: [Comment maintenir l'engagement collectif dans la durée?]

5. INTÉGRATION ET SUIVI
   - Documentation du processus: [Comment capturer l'intelligence générée?]
   - Célébration des résultats: [Comment reconnaître la contribution collective?]
   - Boucles d'apprentissage: [Comment évaluer et améliorer le processus?]
   - Développement continu: [Comment cultiver cette capacité collaborative dans le temps?]

Pour chacune de ces sections, propose-moi 2-3 méthodes ou outils spécifiques, adaptés à mon contexte, avec des instructions précises pour leur mise en œuvre. Inclus également des exemples concrets de formulations, questions ou consignes que je pourrais utiliser en tant que facilitateur.`,
    category: "Leadership - Transformation",
    subcategory: "Intelligence collective",
  },
]

// Tableau des prompts avancés (existant)
const advancedPrompts = [
  {
    title: "Conduite du changement et innovation",
    description: "Développer une approche sophistiquée de transformation organisationnelle",
    level: "Avancé",
    techniques: ["Multi-Prompting", "Generated Knowledge"],
    promptText: `Pour développer une approche sophistiquée de conduite du changement et d'innovation, nous allons explorer ce sujet sous plusieurs angles complémentaires.

ÉTAPE 1: GÉNÉRATION DE CONNAISSANCES FONDAMENTALES
Avant de concevoir ta stratégie, synthétisons les connaissances clés sur:
- L'évolution des modèles de conduite du changement (de Lewin à Kotter aux approches émergentes)
- Les facteurs d'échec des transformations (70% des initiatives de changement échouent selon McKinsey)
- Les mécanismes neuropsychologiques de résistance au changement
- La relation entre innovation et transformation organisationnelle
- Les approches systémiques vs. linéaires du changement
- Les modèles d'innovation les plus efficaces selon le type de transformation

ANGLE 1: DIAGNOSTIC ET CONCEPTION STRATÉGIQUE
Pour ton contexte spécifique de transformation:
- Quelle est la nature profonde du changement nécessaire (technique, adaptatif, transformationnel)?
- Quelles sont les forces motrices et restrictives en présence (analyse de champ de forces)?
- Quel est le niveau de préparation au changement de l'organisation (capacité, volonté, historique)?
- Comment ce changement s'inscrit-il dans l'évolution culturelle et stratégique plus large?
- Quels sont les leviers d'innovation les plus pertinents pour cette transformation?

ANGLE 2: ARCHITECTURE HUMAINE DU CHANGEMENT
Pour engager l'ensemble de l'écosystème dans cette transformation:
- Comment cartographier et engager les différentes parties prenantes selon leur influence et attitude?
- Quels mécanismes permettront de transformer les résistances en ressources?
- Comment créer une coalition de changement efficace et représentative?
- Quelles approches d'apprentissage seront nécessaires pour développer les nouvelles capacités?
- Comment équilibrer la stabilité nécessaire et la disruption créative?

ANGLE 3: INGÉNIERIE DE L'INNOVATION TRANSFORMATIVE
Pour intégrer l'innovation comme moteur du changement:
- Quels espaces et processus d'innovation aligner avec cette transformation?
- Comment orchestrer le continuum exploration-exploitation pendant la transformation?
- Quels mécanismes d'ambidextrie organisationnelle mettre en place?
- Comment capitaliser sur l'intelligence collective pour générer et sélectionner les innovations?
- Quelles approches expérimentales rapides utiliser pour valider les innovations en contexte réel?

SYNTHÈSE INTÉGRÉE:
En combinant ces perspectives, développe:
1. Un modèle de transformation sur mesure pour ton contexte spécifique
2. Une stratégie d'orchestration des différentes phases de changement et d'innovation
3. Un système de gouvernance adaptative pour piloter cette transformation
4. Des mécanismes de mesure d'impact et d'apprentissage continu
5. Une approche de scaling des innovations validées

Conçois cette stratégie en gardant à l'esprit que "la transformation est un voyage, pas une destination" et que l'objectif est de créer une organisation intrinsèquement adaptative plutôt que simplement transformée.`,
    category: "Leadership - Transformation",
    subcategory: "Conduite du changement et innovation",
  },
  {
    title: "Agilité et adaptabilité",
    description: "Transformer son leadership pour une agilité supérieure",
    level: "Avancé",
    techniques: ["Expert Role-Playing", "Contextual Augmentation"],
    promptText: `Tu incarnes aujourd'hui Linda Hill, professeure à Harvard Business School et experte mondialement reconnue en leadership agile et adaptabilité organisationnelle. Tu es notamment connue pour tes recherches sur "le paradoxe de l'innovation collective" et ton livre "Being the Boss".

CONTEXTE ACTUEL DE L'ORGANISATION:
[Description du contexte organisationnel, défis d'adaptabilité spécifiques, culture actuelle]

CONTEXTE SUPPLÉMENTAIRE:
- Les recherches de Harvard montrent que les organisations hautement adaptatives ont 3,2 fois plus de chances de surperformer leurs concurrents (Deloitte, 2023)
- Le "Rapport Adaptabilité" de McKinsey identifie cinq dimensions clés: sensibilité cognitive, flexibilité émotionnelle, optimisme réaliste, résilience et apprentissage continu
- Le paradoxe de l'agilité organisationnelle: plus une organisation devient agile, plus elle crée de complexité qui demande encore plus d'agilité
- Neuroscience de l'adaptabilité: la capacité à tolérer l'inconfort cognitif est prédictive de l'agilité d'un leader
- Le concept de "routines dynamiques" comme fondement d'une adaptabilité systémique

En tant que Linda Hill, tu vas analyser la situation et proposer une stratégie complète pour transformer ce leader et son organisation vers une agilité supérieure:

1. DIAGNOSTIC APPROFONDI
   - Analyse des "rigidités cachées" dans les modèles mentaux actuels
   - Évaluation des capacités d'innovation collective
   - Identification des boucles d'apprentissage existantes et manquantes
   - Cartographie des interactions système-comportement qui limitent l'adaptabilité

2. CRÉATION D'UNE "ORGANISATION AMBIDEXTRE"
   - Stratégie pour équilibrer exploitation (efficience) et exploration (innovation)
   - Design organisationnel favorisant simultanément stabilité et adaptabilité
   - Mécanismes de détection précoce des signaux faibles
   - Architecture décisionnelle permettant rapidité et alignement

3. DÉVELOPPEMENT DU "LEADERSHIP ADAPTATIF"
   - Recadrage du rôle du leader: de "celui qui sait" à "celui qui crée les conditions"
   - Pratiques personnelles pour développer l'agilité cognitive et émotionnelle
   - Techniques pour naviguer les paradoxes inhérents à l'adaptabilité
   - Approches pour développer les capacités adaptatives de l'équipe

4. CULTURE DE "L'APPRENTISSAGE PERMANENT"
   - Transformation des routines pour intégrer l'expérimentation continue
   - Création d'espaces psychologiquement sécurisants pour le risque intelligent
   - Ritualisation de la remise en question constructive
   - Méthodes de capitalisation systématique sur les apprentissages

Utilise ton style distinctif basé sur des exemples concrets et des questions provocantes pour stimuler la réflexion. Conclue par une série de questions puissantes que le leader devrait se poser régulièrement pour maintenir et développer son agilité.`,
    category: "Leadership - Transformation",
    subcategory: "Agilité et adaptabilité",
  },
  {
    title: "Gestion de la complexité",
    description: "Maîtriser les environnements VUCA, BANI et la théorie du chaos",
    level: "Avancé",
    techniques: ["Generated Knowledge", "Multi-Prompting"],
    promptText: `Pour développer une maîtrise sophistiquée de la complexité en tant que leader, nous allons explorer ce sujet à travers plusieurs prismes complémentaires après avoir établi une base de connaissances solide.

ÉTAPE 1: GÉNÉRATION DE CONNAISSANCES FONDAMENTALES
Avant d'élaborer ta stratégie, synthétisons les connaissances essentielles sur:
- L'évolution des modèles de complexité: de VUCA (Volatile, Uncertain, Complex, Ambiguous) à BANI (Brittle, Anxious, Non-linear, Incomprehensible) et au-delà
- Les principes fondamentaux de la théorie du chaos et la pensée systémique
- Les biais cognitifs qui limitent notre capacité à appréhender la complexité
- Les distinctions clés entre problèmes compliqués et problèmes complexes
- Les approches émergentes pour naviguer dans les systèmes adaptatifs complexes
- Le concept de "robuste-et-fragile" (antifragilité) développé par Nassim Taleb

PROMPT 1: PENSÉE SYSTÉMIQUE ET CARTOGRAPHIE DE LA COMPLEXITÉ
Analyse un défi complexe auquel tu es actuellement confronté:
- Comment visualises-tu les interconnexions et dépendances du système?
- Quelles sont les boucles de rétroaction (positives et négatives) en jeu?
- Où se situent les points de levier potentiels dans ce système?
- Comment distingues-tu les causes profondes des symptômes?
- Quels sont les délais et décalages temporels dans ce système?

PROMPT 2: PRISE DE DÉCISION EN CONTEXTE D'INCERTITUDE PROFONDE
Pour ce même défi:
- Comment évalues-tu le type d'incertitude auquel tu fais face (risque connu, incertitude, ignorance, indétermination)?
- Quelle stratégie de prise de décision est la plus adaptée (prédictive, adaptative, visionnaire, transformative)?
- Comment intègres-tu l'optionalité et les stratégies "sans regret"?
- Quelles approches d'expérimentation rapide peux-tu mettre en place?
- Comment crées-tu un portfolio équilibré d'initiatives face à cette complexité?

PROMPT 3: LEADERSHIP COLLECTIF FACE AU CHAOS
À l'échelle organisationnelle:
- Comment développes-tu la capacité collective à percevoir et interpréter la complexité?
- Quelles structures et processus favorisent l'intelligence distribuée face aux défis complexes?
- Comment équilibres-tu l'autonomie locale et la cohérence globale?
- Quels mécanismes de coordination émergente mets-tu en place?
- Comment cultives-tu une culture organisationnelle adaptée aux environnements BANI?

SYNTHÈSE INTÉGRÉE:
À partir de ces explorations, développe:
1. Un cadre personnel pour naviguer dans la complexité qui intègre ces différentes perspectives
2. Une architecture organisationnelle adaptée aux défis systémiques que tu rencontres
3. Des pratiques de leadership qui amplifient la capacité collective à gérer la complexité
4. Une stratégie pour développer continuellement ces capacités chez toi et ton équipe

Inclus dans ta réponse des éléments concrets comme:
- Un rituel personnel quotidien/hebdomadaire pour maintenir une perspective systémique
- Un format de réunion spécifique pour aborder les défis complexes
- Un cadre décisionnel adapté aux différents types de complexité
- Des indicateurs pour évaluer votre progression dans la maîtrise collective de la complexité`,
    category: "Leadership - Transformation",
    subcategory: "Gestion de la complexité (VUCA, BANI, Chaos theory thinking)",
  },
  {
    title: "Intelligence collective",
    description: "Mobiliser la sagesse du groupe et co-construire les solutions",
    level: "Avancé",
    techniques: ["Iterative Prompting", "Expert Role-Playing"],
    promptText: `Je vais incarner Myriam Leggieri, experte en intelligence collective, sociocratie et gouvernance partagée, fondatrice de plusieurs communautés d'apprentissage et consultante internationale en leadership collaboratif. Ensemble, nous allons co-construire une stratégie avancée d'intelligence collective adaptée à ton contexte spécifique.

ÉTAPE 1: ANALYSE DES PATTERNS COLLABORATIFS
Tu es au début d'un voyage transformatif vers une organisation plus intelligente collectivement. Commençons par un diagnostic approfondi:
- Décris ton écosystème organisationnel actuel: taille, structure, culture, défis
- Quelles sont tes expériences passées avec des approches collaboratives?
- Où perçois-tu les plus grands potentiels d'intelligence collective inexploités?
- Quels sont les principaux obstacles à la co-construction authentique?

[Attends ma réponse avant de continuer]

ÉTAPE 2: EXPLORATION DES ARCHITECTURES SOCIALES
Intéressant! Basé sur ton contexte, explorons différentes architectures collaboratives qui pourraient s'adapter à ta situation:
- Quelle combinaison de méthodes formelles et informelles serait la plus appropriée?
- Comment intégrer des pratiques issues de différentes traditions (sociocratie, holacratie, forum ouvert, design thinking collaboratif, etc.)?
- Quels espaces physiques et virtuels pourraient soutenir ces dynamiques?
- Comment équilibrer structure et émergence dans ton approche?

[Attends ma réponse avant de continuer]

ÉTAPE 3: CONCEPTION DES DYNAMIQUES CONVERSATIONNELLES
Passons maintenant à un niveau plus profond - la qualité des interactions qui génère l'intelligence collective:
- Quels types de conversations doivent être facilitées (génératives, décisionnelles, créatives, exploratoires)?
- Comment structurer ces échanges pour maximiser la diversité cognitive et la sécurité psychologique?
- Quelles pratiques dialogiques introduire (écoute profonde, suspension du jugement, ralentissement, etc.)?
- Comment gérer les dynamiques de pouvoir implicites et explicites?

[Attends ma réponse avant de continuer]

ÉTAPE 4: DÉVELOPPEMENT DU LEADERSHIP DISTRIBUÉ
L'intelligence collective nécessite un nouveau type de leadership - plus facilitation que direction:
- Comment redistribuer l'autorité et les responsabilités sans créer de chaos?
- Quelles compétences de méta-leadership développer chez les membres de l'organisation?
- Comment créer des mécanismes d'auto-organisation efficaces?
- Quelles pratiques réflexives instaurer pour développer la conscience collective?

[Attends ma réponse avant de continuer]

ÉTAPE 5: STRATÉGIE D'IMPLÉMENTATION ORGANIQUE
Maintenant, créons une approche d'implémentation qui soit elle-même co-construite:
- Quelles expérimentations pilotes pourraient générer des apprentissages rapides?
- Comment documenter et partager ces apprentissages dans toute l'organisation?
- Quels rituels d'amélioration continue mettre en place?
- Comment équilibrer intention claire et évolution émergente?

[Attends ma réponse avant de continuer]

ÉTAPE 6: MÉTRIQUES HOLISTIQUES DE PROGRESSION
Enfin, développons une approche d'évaluation qui honore la complexité de l'intelligence collective:
- Quels indicateurs qualitatifs et quantitatifs permettraient de mesurer la progression?
- Comment intégrer des boucles de feedback multi-perspectives?
- Quels sont les signes d'une véritable transformation vers plus de co-construction?
- Comment célébrer les réussites tout en valorisant les apprentissages issus des difficultés?

À partir de tous ces éléments, je synthétiserai une stratégie complète et personnalisée d'intelligence collective pour ton organisation, intégrant principes théoriques de pointe et applications pratiques adaptées à ton contexte spécifique.`,
    category: "Leadership - Transformation",
    subcategory: "Intelligence collective",
  },
]

// Regrouper les prompts par niveau et sous-catégorie
const groupPromptsByLevel = (prompts) => {
  return prompts.reduce(
    (acc, prompt) => {
      if (!acc[prompt.subcategory]) {
        acc[prompt.subcategory] = []
      }
      acc[prompt.subcategory].push(prompt)
      return acc
    },
    {} as Record<string, typeof prompts>,
  )
}

const groupedIntermediatePrompts = groupPromptsByLevel(intermediatePrompts)
const groupedAdvancedPrompts = groupPromptsByLevel(advancedPrompts)

export default function LeadershipTransformationPage() {
  const [activeTab, setActiveTab] = useState("intermediate")

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
            <BreadcrumbLink href="/catalogue/leadership">Leadership</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/catalogue/leadership/transformation">Dimension 2: Transformation</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Le Leader Porteur de Transformations</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Maîtrisez l'art de conduire le changement, développer l'agilité et naviguer dans la complexité
        </p>
      </div>

      <Tabs defaultValue="intermediate" value={activeTab} onValueChange={setActiveTab} className="mb-12">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="intermediate">Intermédiaire</TabsTrigger>
          <TabsTrigger value="advanced">Avancé</TabsTrigger>
        </TabsList>
        <TabsContent value="intermediate">
          {Object.entries(groupedIntermediatePrompts).map(([subcategory, prompts]) => (
            <div key={subcategory} className="mb-16">
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">{subcategory}</h2>
              <div className="grid grid-cols-1 gap-8">
                {prompts.map((prompt, index) => (
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
            </div>
          ))}
        </TabsContent>
        <TabsContent value="advanced">
          {Object.entries(groupedAdvancedPrompts).map(([subcategory, prompts]) => (
            <div key={subcategory} className="mb-16">
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">{subcategory}</h2>
              <div className="grid grid-cols-1 gap-8">
                {prompts.map((prompt, index) => (
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
            </div>
          ))}
        </TabsContent>
      </Tabs>

      <div className="mt-12 flex justify-between">
        <Link href="/catalogue/leadership">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour au Leadership
          </Button>
        </Link>
        <Link href="/proposer">
          <Button>
            Proposer un prompt <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
