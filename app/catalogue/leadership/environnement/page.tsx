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

// Structure des prompts avancés pour la dimension 3
const environnementPrompts = [
  {
    title: "Communication influente",
    description: "Développer un discours impactant et persuasif",
    level: "Avancé",
    techniques: ["Multi-Prompting", "Contextual Augmentation"],
    promptText: `Pour développer une maîtrise exceptionnelle de la communication influente, explorons cette compétence sous plusieurs angles complémentaires.

CONTEXTE SUPPLÉMENTAIRE:
- Les recherches en neurosciences montrent que le cerveau traite les histoires différemment des faits, activant jusqu'à 7 fois plus de zones cérébrales
- L'étude "Persuasion in Leadership" (2023) révèle que la crédibilité perçue d'un leader dépend à 55% de la cohérence entre ses communications et ses actions
- Le "paradoxe de l'authenticité": les communications perçues comme spontanées sont souvent les mieux préparées
- Les leaders hautement influents consacrent en moyenne 25-30% de leur temps à la préparation de leurs communications stratégiques
- Le concept de "résonance émotionnelle" est identifié comme le principal différenciateur entre les communications oubliées et mémorables

ANGLE 1: ARCHITECTURE DE MESSAGES À FORT IMPACT
Pour une communication stratégique que tu dois préparer:
- Comment structures-tu ton message selon les principes de la psychologie cognitive?
- Quelle combinaison optimale de logos (logique), pathos (émotion) et ethos (crédibilité) utilises-tu?
- Comment adaptes-tu ton message aux différents modèles mentaux présents dans ton audience?
- Quelles techniques narratives emploies-tu pour rendre ton message mémorable et actable?
- Comment intègres-tu des éléments visuels et symboliques pour renforcer ton message verbal?

ANGLE 2: DYNAMIQUE D'INFLUENCE INTERPERSONNELLE
Analyse ton approche de communication en situation d'influence directe:
- Quelles techniques d'écoute active et d'observation utilises-tu pour calibrer ton message?
- Comment adaptes-tu ton style selon les préférences de communication de tes interlocuteurs?
- Quelles stratégies emploies-tu pour surmonter les résistances sans créer de confrontation?
- Comment utilises-tu le langage non-verbal pour amplifier l'impact de tes messages?
- Quelles questions puissantes intègres-tu pour engager l'autre dans un dialogue constructif?

ANGLE 3: STRATÉGIE DE COMMUNICATION TRANSFORMATIONNELLE
Pour une transformation que tu souhaites conduire:
- Comment élabores-tu un narratif cohérent qui soutient le changement sur la durée?
- Quelle architecture de communication multi-canaux développes-tu?
- Comment orchestres-tu la séquence et le rythme des messages pour créer un momentum?
- Quelles approches utilises-tu pour transformer les messagers clés en amplificateurs?
- Comment mesures-tu l'impact et ajustes-tu ta stratégie de communication en continu?

Pour chacun de ces angles, propose une analyse détaillée ainsi que des actions concrètes applicables à ton contexte spécifique. Conclue avec un plan d'action intégré pour développer systématiquement ta maîtrise de la communication influente dans les 90 prochains jours.`,
    category: "Leadership - Environnement",
    subcategory: "Communication influente",
  },
  {
    title: "Développement des talents",
    description: "Faire grandir les membres de son équipe",
    level: "Avancé",
    techniques: ["Expert Role-Playing", "Generated Knowledge"],
    promptText: `Tu incarnes aujourd'hui Herminia Ibarra, professeure à la London Business School et experte mondiale en développement des talents, connue pour ses recherches pionnières sur l'apprentissage par l'action et l'identité professionnelle. Tu as notamment écrit "Act Like a Leader, Think Like a Leader" et étudié les pratiques des organisations les plus performantes en matière de développement du potentiel humain.

Avant de formuler tes recommandations, génère d'abord les connaissances fondamentales suivantes:
- Les découvertes récentes en neurosciences de l'apprentissage adulte et leurs implications
- Les différences entre développement vertical (complexité cognitive) et horizontal (compétences)
- Le concept de "stretch assignments" et son impact sur le développement accéléré
- Les pratiques de développement des talents des organisations les plus admirées
- Les approches contemporaines pour stimuler l'agentivité et l'auto-direction des collaborateurs
- Les facteurs psychologiques qui favorisent ou limitent l'empowerment authentique

CONTEXTE ORGANISATIONNEL À ANALYSER:
[Description de ton organisation, de ton équipe, des défis actuels et des opportunités de développement]

En tant qu'Herminia Ibarra, analyse ce contexte et développe une stratégie complète de développement des talents et d'empowerment qui intègre:

1. ARCHITECTURE DE DÉVELOPPEMENT TRANSFORMATIONNEL
   - Une approche pour équilibrer expériences, relations et formation formelle (modèle 70-20-10)
   - Un cadre pour aligner aspirations individuelles et besoins organisationnels
   - Une stratégie de "développement en mouvement" plutôt que planification statique
   - Des mécanismes d'apprentissage par l'expérimentation et la réflexion

2. ÉCOSYSTÈME D'ÉPANOUISSEMENT DES TALENTS
   - Organisation des rôles et responsabilités pour maximiser le développement
   - Création d'une culture de feedback multidirectionnel
   - Intégration de la diversité cognitive comme accélérateur d'apprentissage
   - Conditions organisationnelles qui stimulent la prise d'initiative

3. LEADERSHIP CATALYSEUR
   - Transformation de ton propre rôle de manager à "développeur de talents"
   - Pratiques quotidiennes qui stimulent l'autonomie et la prise de responsabilité
   - Équilibre entre structure habilitante et liberté responsabilisante
   - Modélisation de l'apprentissage continu et de la vulnérabilité constructive

4. GOUVERNANCE DU DÉVELOPPEMENT
   - Mesures d'impact multidimensionnelles (performance, engagement, innovation)
   - Systèmes de reconnaissance qui valorisent croissance et contribution
   - Approche pour identifier et adresser les freins systémiques à l'empowerment
   - Intégration du développement des talents dans la stratégie globale

Utilise des exemples concrets, des questions provocantes et des métaphores puissantes comme le ferait Herminia Ibarra. Conclue par une réflexion sur comment le développement des talents transforme non seulement l'organisation mais aussi le leader lui-même.`,
    category: "Leadership - Environnement",
    subcategory: "Développement des talents et empowerment",
  },
  {
    title: "Intelligence émotionnelle",
    description: "Comprendre et gérer les émotions",
    level: "Avancé",
    techniques: ["Iterative Prompting", "Contextual Augmentation"],
    promptText: `Je vais t'accompagner dans le développement d'une maîtrise avancée de l'intelligence émotionnelle et relationnelle adaptée aux défis spécifiques du leadership contemporain.

CONTEXTE ACTUEL:
- Les recherches en neurosciences affectives révèlent que les émotions sont contagieuses dans les organisations - le phénomène de "résonance limbique" amplifie l'impact émotionnel des leaders
- Les environnements VUCA/BANI intensifient la charge émotionnelle et cognitive, réduisant les ressources disponibles pour la régulation émotionnelle
- 83% des décisions inefficaces impliquent des biais émotionnels non identifiés selon la dernière étude du Center for Creative Leadership
- Le concept d'"agility emotionnelle" développé par Susan David démontre que la flexibilité dans la gestion des émotions prédit mieux la performance que l'intelligence émotionnelle traditionnelle
- L'étude "Leading with Emotional Intelligence" (2023) identifie une corrélation directe entre l'intelligence relationnelle des leaders et la rétention des talents

ÉTAPE 1: CARTOGRAPHIE DE TON ÉCOLOGIE ÉMOTIONNELLE
Commençons par une exploration approfondie de ton paysage émotionnel en tant que leader:
- Quels sont tes patterns émotionnels récurrents dans différents contextes professionnels?
- Comment tes émotions influencent-elles tes décisions stratégiques et ton énergie quotidienne?
- Quelles émotions te sont plus difficiles à accepter ou exprimer en tant que leader?
- Comment ton histoire personnelle a-t-elle façonné ton rapport aux émotions?

[Attends ma réponse avant de continuer]

ÉTAPE 2: DÉVELOPPEMENT D'UNE CONSCIENCE ÉMOTIONNELLE SOPHISTIQUÉE
Basé sur ta cartographie, explorons des pratiques avancées:
- Comment pourrais-tu développer une "métacognition émotionnelle" - l'observation de tes émotions sans fusion avec elles?
- Quelles pratiques contemplatives pourraient renforcer ta capacité à percevoir les émotions subtiles avant qu'elles n'influencent ton comportement?
- Comment créer des "déclencheurs de conscience" dans ton environnement quotidien?
- Quelles routines pourraient t'aider à intégrer conscience corporelle et conscience émotionnelle?

[Attends ma réponse avant de continuer]

ÉTAPE 3: MAÎTRISE DE LA RÉGULATION ÉMOTIONNELLE CONTEXTUELLE
Approfondissons les stratégies de régulation adaptées à ton profil et contexte:
- Quelles techniques de régulation cognitive, physique et sociale seraient les plus efficaces pour toi?
- Comment pourrais-tu développer une "agilité émotionnelle" - la capacité à ajuster ta stratégie de régulation selon le contexte?
- Quelles approches permettraient de transformer des émotions difficiles en ressources pour ton leadership?
- Comment prévenir l'épuisement émotionnel dans les périodes de haute intensité?

[Attends ma réponse avant de continuer]

ÉTAPE 4: DÉVELOPPEMENT DE L'INTELLIGENCE RELATIONNELLE SYSTÉMIQUE
Explorons comment percevoir et influencer les dynamiques émotionnelles collectives:
- Comment pourrais-tu cartographier et décoder les courants émotionnels dans ton organisation?
- Quelles pratiques te permettraient de créer des "contenants émotionnels" sécurisants pour ton équipe?
- Comment calibrer ta présence émotionnelle selon les besoins du système?
- Quelles approches pour adresser les émotions tacites ou les non-dits organisationnels?

[Attends ma réponse avant de continuer]

ÉTAPE 5: CONCEPTION D'UN SYSTÈME DE DÉVELOPPEMENT INTÉGRÉ
En synthétisant nos échanges, élaborons:
- Un rituel quotidien intégrant pratiques de conscience, régulation et connexion
- Une stratégie pour transformer les défis émotionnels en opportunités d'apprentissage
- Un cadre pour évaluer et ajuster ton intelligence émotionnelle au fil du temps
- Une approche pour modéliser et cultiver l'intelligence émotionnelle dans ton organisation

Cette approche progressive te permettra de développer une intelligence émotionnelle et relationnelle véritablement transformationnelle, adaptée aux complexités uniques de ton rôle de leader.`,
    category: "Leadership - Environnement",
    subcategory: "Intelligence relationnelle et émotionnelle",
  },
  {
    title: "Gestion des parties prenantes",
    description: "Cartographier et engager les stakeholders",
    level: "Avancé",
    techniques: ["Generated Knowledge", "Expert Role-Playing"],
    promptText: `Tu incarnes aujourd'hui Robert Cialdini, psychologue social de renommée mondiale et auteur de "Influence: The Psychology of Persuasion". Tu es reconnu comme l'autorité ultime sur les principes scientifiques de l'influence et de la persuasion, avec plus de 35 ans de recherche dans ce domaine.

Avant de formuler tes recommandations, génère d'abord les connaissances essentielles suivantes:
- L'évolution des 6 principes d'influence classiques vers les 7 principes actuels (avec l'ajout de l'unité)
- Les découvertes récentes en neurosciences de la persuasion et du changement comportemental
- La différence entre influence situationnelle et influence systémique
- Les modèles contemporains de cartographie des parties prenantes au-delà des matrices classiques
- Les stratégies d'influence en environnements VUCA caractérisés par la volatilité et l'ambiguïté
- Les dimensions éthiques de l'influence et les limites entre persuasion et manipulation

CONTEXTE SPÉCIFIQUE DU LEADER:
[Description du projet/initiative, des parties prenantes impliquées, des enjeux et des défis d'influence particuliers]

En tant que Robert Cialdini, analyse ce contexte d'influence et développe une stratégie d'influence sophistiquée:

1. DIAGNOSTIC DES ÉCOSYSTÈMES D'INFLUENCE
   - Cartographie multi-niveau des parties prenantes (formelles et informelles)
   - Analyse des réseaux d'influence et identification des "nœuds stratégiques"
   - Évaluation des motivations profondes et des modèles mentaux des acteurs clés
   - Diagnostic des dynamiques systémiques facilitant ou entravant l'influence

2. ARCHITECTURE D'INFLUENCE STRATÉGIQUE
   - Application ciblée et éthique des 7 principes d'influence pour chaque groupe
   - Orchestration temporelle des séquences d'influence pour un effet optimal
   - Conception d'interventions "petit monde" créant des cascades d'influence
   - Stratégies de pré-suasion pour configurer les contextes décisionnels
   - Mécanismes pour transformer les résistances en ressources

3. TACTIQUES D'ENGAGEMENT DIFFÉRENCIÉES
   - Approches spécifiques pour les différents archétypes de parties prenantes
   - Techniques de cadrage et recadrage adaptées aux différents modèles mentaux
   - Stratégies de négociation intégrative pour les situations à intérêts divergents
   - Méthodes pour créer des coalitions d'influence transcendant les silos
   - Applications du concept d'unité pour créer des identités partagées

4. SYSTÈMES D'INFLUENCE DURABLE
   - Création d'une infrastructure d'influence au-delà des interactions ponctuelles
   - Mécanismes d'autorenforcement pour pérenniser les changements
   - Équilibre entre influence visible et invisible
   - Approche éthique garantissant la durabilité de ton capital d'influence

Utilise ton style caractéristique de Robert Cialdini, en illustrant chaque point par des exemples concrets, des résultats de recherche et des métaphores mémorables. Intègre notamment les concepts avancés d'influence que tu as développés dans tes ouvrages "Pre-Suasion" et "The Small Big".

Termine par une section "Sagesse pratique" qui propose 3-5 principes directeurs pour exercer une influence éthique et efficace dans les environnements complexes contemporains.`,
    category: "Leadership - Environnement",
    subcategory: "Influence et gestion des parties prenantes",
  },
  {
    title: "Leadership responsable",
    description: "Intégrer les enjeux RSE dans sa stratégie",
    level: "Avancé",
    techniques: ["Multi-Prompting", "Contextual Augmentation"],
    promptText: `Pour développer un leadership transformationnel en matière de responsabilité sociétale et environnementale (RSE), nous allons explorer cette dimension sous trois angles complémentaires, enrichis par les connaissances les plus récentes.

CONTEXTE ACTUEL:
- L'évolution des cadres réglementaires (CSRD en Europe, SEC aux USA) impose une transparence accrue sur les impacts ESG
- Les attentes des parties prenantes (investisseurs, talents, clients) concernant la responsabilité des organisations s'intensifient
- La "double matérialité" devient le standard: considérer à la fois l'impact du monde sur l'organisation et de l'organisation sur le monde
- Le concept de "régénération" remplace progressivement celui de "durabilité" dans les approches les plus avancées
- Le "purpose washing" est de plus en plus scruté et critiqué, créant un risque réputationnel majeur
- L'émergence des modèles de "business régénératif" et d'"économie régénérative" offre de nouvelles perspectives

ANGLE 1: STRATÉGIE RSE INTÉGRÉE ET TRANSFORMATIVE
Analyse ton approche actuelle et future de la RSE sous l'angle stratégique:
- Comment évoluer d'une RSE périphérique (CSR 1.0) vers une RSE intégrée (CSR 2.0) puis transformative (CSR 3.0)?
- Comment aligner la RSE avec le cœur de métier pour créer une véritable valeur partagée?
- Quels modèles de business pourriez-vous transformer pour qu'ils deviennent intrinsèquement régénératifs?
- Comment passer d'une approche de réduction des impacts négatifs à la création d'impacts positifs nets?
- Quelle gouvernance mettre en place pour intégrer les considérations ESG dans toutes les décisions stratégiques?

ANGLE 2: CULTURE ORGANISATIONNELLE ET LEADERSHIP RSE
Explore la dimension humaine et culturelle de la transformation:
- Comment faire évoluer les mindsets individuels et collectifs vers une conscience systémique?
- Quelles compétences développer à tous les niveaux pour intégrer les considérations RSE?
- Comment transformer les résistances en énergie de changement?
- Quels rituels et pratiques instaurer pour ancrer cette responsabilité dans le quotidien?
- Comment créer des systèmes d'incitation alignés avec une performance multidimensionnelle?

ANGLE 3: ÉCOSYSTÈME D'IMPACT ET INFLUENCE ÉLARGIE
Élargis ta perspective à l'influence systémique:
- Comment cartographier et activer les leviers d'influence au-delà des frontières de l'organisation?
- Quelles coalitions et partenariats stratégiques développer pour amplifier l'impact?
- Comment engager la chaîne de valeur étendue dans une démarche de responsabilité partagée?
- Quels nouveaux modèles de collaboration intersectorielle pourrais-tu initier?
- Comment exercer une influence constructive sur les cadres réglementaires et normatifs?

SYNTHÈSE STRATÉGIQUE:
À partir de ces trois explorations, développe:
1. Une vision régénérative adaptée à ton contexte organisationnel
2. Une stratégie d'intégration systémique de la RSE à tous les niveaux
3. Un plan de transformation échelonné avec des objectifs ambitieux mais réalistes
4. Une approche de mesure d'impact multi-capital et en double matérialité
5. Une stratégie de communication authentique et mobilisatrice

Ta stratégie doit refléter une compréhension approfondie des enjeux d'avenir, tout en étant solidement ancrée dans les réalités économiques et opérationnelles de ton organisation. Elle doit également démontrer comment tu incarneras personnellement ces engagements dans ton leadership quotidien.`,
    category: "Leadership - Environnement",
    subcategory: "Responsabilité sociétale et environnementale",
  },
  {
    title: "Management interculturel",
    description: "Diriger des équipes diverses et inclusives",
    level: "Avancé",
    techniques: ["Expert Role-Playing", "Generated Knowledge"],
    promptText: `Tu incarnes aujourd'hui Fons Trompenaars, expert mondial de renommée internationale en management interculturel, auteur de "Riding the Waves of Culture" et créateur du modèle des 7 dimensions culturelles. Tu apportes plus de 30 ans d'expérience dans l'accompagnement de leaders et d'organisations pour naviguer dans la complexité interculturelle et créer des environnements véritablement inclusifs.

Avant de formuler tes recommandations, génère d'abord les connaissances essentielles suivantes:
- L'évolution des modèles d'interculturalité: des approches statiques (Hofstede, Hall) aux modèles dynamiques contemporains
- Le concept d'intelligence culturelle (CQ) dans ses quatre dimensions: motivation, connaissance, stratégie et action
- Les dernières recherches sur la "diversité profonde" au-delà des caractéristiques visibles
- Le paradoxe de l'inclusion: comment créer une culture commune tout en valorisant les différences
- Les découvertes récentes sur les conditions de l'innovation interculturelle
- L'impact de la diversité cognitive sur la performance et la prise de décision collective

CONTEXTE ORGANISATIONNEL:
[Description du contexte de leadership: composition de l'équipe, défis interculturels spécifiques, objectifs organisationnels]

En tant que Fons Trompenaars, analyse cette situation et développe une stratégie transformationnelle pour créer une culture inclusive qui valorise et capitalise sur la diversité:

1. DIAGNOSTIC DES DYNAMIQUES INTERCULTURELLES
   - Analyse des dimensions culturelles en présence et leurs interactions
   - Cartographie des "dilemmes réconciliables" spécifiques à ce contexte
   - Identification des freins systémiques à l'inclusion
   - Évaluation de la maturité interculturelle actuelle de l'organisation

2. DÉVELOPPEMENT DU LEADERSHIP TRANSCULTUREL
   - Transformation de la conscience interculturelle: au-delà de la sensibilisation
   - Maîtrise des compétences de "reconciliation" des différences
   - Approches pour naviguer dans les paradoxes interculturels
   - Techniques pour créer des espaces psychologiquement sécurisants pour toutes les identités

3. ARCHITECTURE ORGANISATIONNELLE INCLUSIVE
   - Conception de processus qui intègrent les différentes perspectives culturelles
   - Création de systèmes qui valorisent diverses expressions de l'excellence
   - Développement d'une communication inclusive multi-modale
   - Stratégies pour l'émergence d'une "troisième culture" transcendante

4. TRANSFORMATION DES ÉQUIPES MULTICULTURELLES EN ÉQUIPES INTERCULTURELLES
   - Pratiques pour dépasser la juxtaposition vers la véritable intégration
   - Méthodologies de co-création transculturelle
   - Techniques de facilitation des conversations courageuses sur la diversité
   - Approches pour développer une intelligence culturelle collective

Utilise ton style caractéristique de Fons Trompenaars, en partageant des anecdotes interculturelles révélatrices, en utilisant des métaphores mémorables et en illustrant tes points par des dilemmes interculturels classiques. Conclue par une réflexion profonde sur la façon dont l'inclusion véritable exige non pas la tolérance passive de la différence, mais sa valorisation active comme source d'innovation et de résilience.`,
    category: "Leadership - Environnement",
    subcategory: "Vision interculturelle et inclusive",
  },
  {
    title: "Équilibre vie pro/perso",
    description: "Gérer son énergie et prévenir le burnout",
    level: "Avancé",
    techniques: ["Iterative Prompting", "Contextual Augmentation"],
    promptText: `Je vais t'accompagner dans le développement d'un système sophistiqué de gestion personnelle et d'équilibre adapté aux défis spécifiques du leadership contemporain.

CONTEXTE ACTUEL:
- Les recherches en neurosciences démontrent que la "surcharge allostasique" (stress chronique) réduit significativement les capacités cognitives essentielles au leadership
- L'étude "Leadership Sustainability" (2023) révèle que 76% des leaders expérimentent un niveau préoccupant d'épuisement
- Le concept de "résilience adaptative" remplace progressivement celui de "work-life balance", reconnaissant la nécessité d'une approche dynamique plutôt que statique
- Les recherches sur les "peak performers" identifient le rythme oscillatoire (alternance stratégique d'engagement intense et récupération complète) comme facteur clé de performance durable
- Le phénomène du "stress contagieux" montre que l'état du leader influence physiologiquement l'ensemble de son équipe via des mécanismes de résonance neuronale

ÉTAPE 1: CARTOGRAPHIE DE TON ÉCOSYSTÈME ÉNERGÉTIQUE
Commençons par une analyse systémique de ta situation actuelle:
- Quelles sont les principales demandes énergétiques de ton rôle de leadership?
- Comment s'articulent tes différents rôles professionnels et personnels?
- Quelles sont tes sources et tes drains d'énergie spécifiques?
- Comment fluctue ton énergie à différentes échelles (jour, semaine, mois, saison)?
- Quels sont tes signes avant-coureurs d'épuisement ou de déséquilibre?

[Attends ma réponse avant de continuer]

ÉTAPE 2: DESIGN DE TON ARCHITECTURE ÉNERGÉTIQUE
Basé sur cette cartographie, développons une stratégie intégrée:
- Comment pourrais-tu structurer tes cycles de performance-récupération à différentes échelles temporelles?
- Quels rituels pourraient créer des frontières psychologiques efficaces entre tes différents rôles?
- Comment organiser ton environnement physique et numérique pour soutenir ton énergie?
- Quelles pratiques de récupération correspondent le mieux à tes besoins spécifiques?
- Comment aligner ton agenda avec tes rythmes énergétiques naturels?

[Attends ma réponse avant de continuer]

ÉTAPE 3: GESTION COGNITIVE AVANCÉE
Approfondissons les stratégies de gestion de ta charge mentale:
- Quelles approches pourrais-tu développer pour établir une "écologie attentionnelle" saine?
- Comment pourrais-tu mettre en place un système de "pensée distribuée" qui réduit la charge cognitive?
- Quelles pratiques contemplatives correspondent à ton profil et pourraient renforcer ta clarté mentale?
- Comment optimiser tes processus décisionnels pour réduire la fatigue décisionnelle?
- Quelles stratégies métacognitives pourrais-tu développer pour naviguer dans la complexité?

[Attends ma réponse avant de continuer]

ÉTAPE 4: INTELLIGENCE ÉMOTIONNELLE RÉSILIENTE
Explorons le développement d'une résilience émotionnelle avancée:
- Quelles pratiques pourraient renforcer ta capacité à naviguer dans les émotions difficiles sans être submergé?
- Comment cultiver des états émotionnels régénératifs de manière intentionnelle?
- Quelles approches pour transformer les émotions réactives en réponses adaptatives?
- Comment développer une plus grande flexibilité émotionnelle face aux défis?
- Quelles pratiques de self-compassion pourrais-tu intégrer dans ton quotidien?

[Attends ma réponse avant de continuer]

ÉTAPE 5: CONNEXION ET SENS PROFOND
Approfondissons la dimension existentielle de ton équilibre:
- Comment renforcer l'alignement entre tes actions quotidiennes et tes valeurs fondamentales?
- Quelles pratiques pourraient nourrir ta connexion à un sens plus large?
- Comment cultiver une perspective qui transcende les défis immédiats?
- Quelles sources d'inspiration pourrais-tu intégrer plus consciemment?
- Comment traduire ta mission personnelle en pratiques quotidiennes?

[Attends ma réponse avant de continuer]

ÉTAPE 6: LEADERSHIP RÉGÉNÉRATIF
Enfin, transformons ton approche personnelle en culture de leadership:
- Comment modéliser un équilibre sain sans compromettre les exigences de performance?
- Quelles normes et pratiques pourrais-tu instaurer pour créer une culture d'équilibre?
- Comment développer la capacité collective de ton équipe à naviguer dans l'intensité?
- Quelles structures pourrais-tu mettre en place pour soutenir la résilience organisationnelle?
- Comment mesurer et valoriser la durabilité humaine dans ton système de performance?

À partir de cette exploration progressive, nous élaborerons un système intégré et personnalisé qui soutiendra non seulement ton équilibre personnel, mais transformera également ton impact en tant que leader.`,
    category: "Leadership - Environnement",
    subcategory: "Gestion personnelle et équilibre",
  },
]

// Regrouper les prompts par sous-catégorie
const groupedPrompts = environnementPrompts.reduce(
  (acc, prompt) => {
    if (!acc[prompt.subcategory]) {
      acc[prompt.subcategory] = []
    }
    acc[prompt.subcategory].push(prompt)
    return acc
  },
  {} as Record<string, typeof environnementPrompts>,
)

export default function LeadershipEnvironnementPage() {
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
            <BreadcrumbLink href="/catalogue/leadership/environnement">Dimension 3: Environnement</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Le Leader Ouvert sur son Environnement</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Perfectionnez votre communication, développez les talents et cultivez une intelligence relationnelle avancée
        </p>
      </div>

      {Object.entries(groupedPrompts).map(([subcategory, prompts]) => (
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
