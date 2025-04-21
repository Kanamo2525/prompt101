"use client"

import Link from "next/link"
import { ArrowLeft, Copy, Check } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LeadershipPerformancePage() {
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
            <BreadcrumbLink href="/catalogue/leadership/performance">Performance</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Le Leader Porteur de Performance</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Développez vos compétences en vision stratégique, prise de décision et pilotage de la performance
        </p>
      </div>

      <Tabs defaultValue="advanced" className="mb-12">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="intermediate">Niveau Intermédiaire</TabsTrigger>
            <TabsTrigger value="advanced">Niveau Avancé</TabsTrigger>
          </TabsList>
        </div>

        {/* Prompts de niveau intermédiaire */}
        <TabsContent value="intermediate">
          <div className="grid grid-cols-1 gap-8 mb-16">
            <PromptCard
              title="Vision stratégique et sens de la mission"
              description="Niveau Intermédiaire - RCT (Rôle, Contexte, Tâche)"
              content={`En tant que leader d'une organisation en transformation,

tu opères dans un environnement concurrentiel en rapide évolution où l'agilité et l'innovation sont essentielles. Ton équipe compte des talents diversifiés mais manque d'une direction claire et d'un sentiment d'unité autour d'objectifs communs.

Élabore une vision stratégique inspirante en suivant ces étapes:
1. Formule une déclaration de vision concise (1-2 phrases) qui décrit l'impact futur de ton organisation
2. Définis 3-5 objectifs stratégiques qui soutiennent cette vision
3. Identifie les valeurs fondamentales qui guideront les comportements et décisions
4. Explique comment tu connecteras cette vision aux motivations personnelles de tes collaborateurs
5. Propose une stratégie de communication pour diffuser et ancrer cette vision à tous les niveaux

Assure-toi que ta vision soit à la fois ambitieuse et réaliste, inspirante et mesurable.`}
            />

            <PromptCard
              title="Prise de décision et responsabilité"
              description="Niveau Intermédiaire - Chain-of-Thought"
              content={`Je vais t'aider à développer un cadre de prise de décision plus structuré et responsable. Pour une décision importante que tu dois prendre actuellement:

1. ÉTAPE D'IDENTIFICATION ET D'ANALYSE
- Définis précisément la décision à prendre
- Identifie les objectifs que cette décision doit servir
- Détermine les contraintes et ressources disponibles
- Établis les critères d'évaluation pour juger du succès de la décision

2. ÉTAPE DE GÉNÉRATION D'ALTERNATIVES
- Énumère toutes les options possibles sans les juger
- Cherche des solutions créatives au-delà des approches évidentes
- Consulte différentes perspectives (équipe, experts, parties prenantes)
- Identifie les combinaisons possibles entre différentes options

3. ÉTAPE D'ÉVALUATION
- Analyse les conséquences potentielles de chaque option
- Évalue chaque alternative selon tes critères établis
- Anticipe les risques et opportunités associés à chaque option
- Identifie qui sera impacté par cette décision et comment

4. ÉTAPE DE DÉCISION
- Choisis l'option qui répond le mieux à tes critères
- Prépare une justification claire de ton choix
- Assume pleinement la responsabilité de cette décision
- Anticipe et prépare des réponses aux objections potentielles

5. ÉTAPE D'IMPLÉMENTATION ET SUIVI
- Définis un plan d'action clair avec des jalons mesurables
- Communique ta décision et ton raisonnement aux parties prenantes
- Mets en place un système de suivi pour évaluer les résultats
- Prévois des mécanismes d'ajustement si nécessaire

Utilise ce cadre d'analyse étape par étape pour structurer ton processus décisionnel, puis évalue comment il améliore ta capacité à prendre des décisions éclairées et à en assumer la responsabilité.`}
            />

            <PromptCard
              title="Pilotage de la performance durable"
              description="Niveau Intermédiaire - Template Filling"
              content={`Je vais t'aider à créer un système complet de pilotage de la performance durable. Complète ce template pour développer ton approche personnalisée:

SYSTÈME DE PILOTAGE DE LA PERFORMANCE DURABLE

1. ANALYSE DE LA SITUATION ACTUELLE
Principaux objectifs de mon organisation/équipe: [À compléter]
Forces actuelles en matière de performance: [À compléter]
Faiblesses actuelles ou angles morts: [À compléter]
Système de mesure existant (si applicable): [À compléter]

2. DÉFINITION D'UN CADRE DE PERFORMANCE ÉQUILIBRÉ
a. Dimension économique et opérationnelle
Indicateurs financiers: [À compléter]
Indicateurs opérationnels: [À compléter]
Fréquence de mesure: [À compléter]
Responsables du suivi: [À compléter]

b. Dimension humaine et sociale
Indicateurs de bien-être: [À compléter]
Indicateurs de développement: [À compléter]
Fréquence de mesure: [À compléter]
Méthode de collecte: [À compléter]

c. Dimension environnementale
Empreinte écologique directe: [À compléter]
Impact indirect: [À compléter]
Objectifs d'amélioration: [À compléter]
Initiatives spécifiques: [À compléter]

d. Dimension sociétale et client
Valeur créée pour les clients/usagers: [À compléter]
Impact sur l'écosystème: [À compléter]
Contribution à la communauté: [À compléter]
Méthodes d'évaluation: [À compléter]

3. GOUVERNANCE ET PROCESSUS DÉCISIONNEL
Fréquence des revues de performance: [À compléter]
Format des réunions de pilotage: [À compléter]
Participants clés: [À compléter]
Mécanisme d'arbitrage entre dimensions: [À compléter]

4. COMMUNICATION ET ENGAGEMENT
Partage interne des résultats: [À compléter]
Communication externe: [À compléter]
Mécanismes d'engagement des équipes: [À compléter]
Célébration des succès: [À compléter]

5. AMÉLIORATION CONTINUE
Processus de révision du système: [À compléter]
Intégration du feedback: [À compléter]
Veille sur les meilleures pratiques: [À compléter]
Expérimentations prévues: [À compléter]

6. PLAN D'IMPLÉMENTATION
Actions immédiates (30 jours): [À compléter]
Actions à moyen terme (90 jours): [À compléter]
Vision à long terme (1 an+): [À compléter]
Ressources nécessaires: [À compléter]`}
            />

            <PromptCard
              title="Leadership éthique"
              description="Niveau Intermédiaire - RCT + Few-Shot"
              content={`En tant que leader responsable de cultiver une culture éthique,

tu évolues dans un environnement professionnel où des pressions contradictoires s'exercent régulièrement: pression pour les résultats à court terme, tensions entre différentes parties prenantes, et zones grises éthiques dans les pratiques du secteur.

Élabore un cadre éthique personnel et actionnable en t'inspirant des exemples suivants:

Exemple 1: La PDG d'une entreprise de santé a établi un "comité d'éthique des décisions" qui examine systématiquement les initiatives stratégiques selon 5 principes: non-malfaisance, bénéfice patient, justice d'accès, respect de l'autonomie, et durabilité. Chaque décision majeure est documentée avec son analyse éthique.

Exemple 2: Le directeur d'une agence publique a créé un "test d'intégrité" en trois questions que tous les managers doivent appliquer avant chaque décision significative: "Serais-je à l'aise si cette décision était publiée en première page d'un journal?", "Comment cette décision affecte-t-elle notre partie prenante la plus vulnérable?", "Cette décision renforce-t-elle ou affaiblit-elle nos valeurs fondamentales?".

Exemple 3: La fondatrice d'une startup technologique a intégré l'éthique dans les processus quotidiens en créant un "budget éthique" qui alloue du temps et des ressources spécifiques pour résoudre les défis éthiques, un système d'alerte anonyme, et des sessions mensuelles de réflexion collective sur les dilemmes rencontrés.

En t'inspirant de ces exemples et en les adaptant à ton contexte, développe:
1. Tes 5 principes éthiques fondamentaux en tant que leader
2. Un processus décisionnel intégrant systématiquement ces principes
3. Des mécanismes concrets pour promouvoir ces valeurs au sein de ton équipe
4. Une stratégie pour naviguer les situations de conflit éthique
5. Un plan de développement personnel pour renforcer ta propre conscience éthique`}
            />
          </div>
        </TabsContent>

        {/* Prompts de niveau avancé */}
        <TabsContent value="advanced">
          <div className="grid grid-cols-1 gap-8 mb-16">
            <PromptCard
              title="Vision stratégique et sens de la mission"
              description="Niveau Avancé - Expert Role-Playing + Generated Knowledge"
              content={`Tu incarnes Jim Collins, auteur de "Good to Great" et expert en leadership visionnaire, consultant auprès d'un leader qui cherche à transformer son organisation.

Avant de formuler tes recommandations, génère d'abord les connaissances critiques suivantes:
- Les 5 caractéristiques des visions qui ont transformé des organisations ordinaires en leaders de marché
- Les erreurs les plus courantes dans la formulation et communication des visions stratégiques
- Comment les meilleures visions équilibrent continuité et transformation
- Les mécanismes qui permettent de traduire une vision abstraite en actions concrètes
- Les indicateurs permettant de mesurer l'alignement entre vision déclarée et décisions quotidiennes

CONTEXTE FOURNI PAR LE LEADER:
[Décrire le secteur d'activité, les défis actuels, la taille de l'organisation et ses enjeux spécifiques]

En tant que Jim Collins, formule maintenant:
1. Une analyse critique de la situation actuelle de l'organisation en termes de clarté de vision
2. Une méthodologie pour découvrir le "Hedgehog Concept" unique de cette organisation (intersection entre passion, excellence et moteur économique)
3. Un cadre pour élaborer une vision "BHAG" (Big Hairy Audacious Goal) alignée avec les capacités réelles
4. Une stratégie de "flywheel" pour transformer cette vision en momentum auto-entretenu
5. Un système de gouvernance pour maintenir l'alignement entre vision stratégique et décisions opérationnelles

Utilise ton style caractéristique basé sur la recherche et les exemples concrets pour illustrer chaque point.`}
            />

            <PromptCard
              title="Prise de décision et responsabilité"
              description="Niveau Avancé - Multi-Prompting + Contextual Augmentation"
              content={`Pour développer une maîtrise avancée de la prise de décision et de la responsabilité, nous allons explorer cette compétence sous trois angles complémentaires.

CONTEXTE SUPPLÉMENTAIRE:
- Les recherches en neurosciences montrent que les décisions sont influencées à 80% par des biais inconscients
- L'étude "Leadership Decision-Making" (Harvard, 2023) révèle que les dirigeants à haut impact révisent leurs processus décisionnels tous les 6-12 mois
- Le "paradoxe de la responsabilité" : plus le leader partage la prise de décision, plus son influence et sa responsabilité perçue augmentent
- 67% des échecs de projets majeurs sont attribués à des défaillances dans la prise de décision plutôt qu'à des facteurs externes
- Le concept de "regret anticipé" comme outil prédictif de la qualité d'une décision

ANGLE 1: CADRE DÉCISIONNEL SOUS INCERTITUDE
Examine une décision stratégique actuelle que tu dois prendre dans un contexte d'incertitude élevée:
- Comment distingues-tu les variables connues, inconnues et inconnaissables?
- Quelle approche utilises-tu pour quantifier l'incertitude?
- Comment intègres-tu les scénarios "black swan" (événements improbables à fort impact)?
- Quels mécanismes de gouvernance mets-tu en place pour adapter ta décision si les conditions changent?

ANGLE 2: ARCHITECTURE DE RESPONSABILITÉ
Pour une décision récente aux conséquences significatives:
- Comment as-tu clarifié et communiqué les différents niveaux de responsabilité (décideur, contributeurs, exécutants)?
- Quels mécanismes as-tu établis pour assumer publiquement les échecs potentiels?
- Comment équilibres-tu la délégation de responsabilité avec la responsabilité ultime?
- Quelle structure as-tu mise en place pour suivre l'impact de ta décision à court, moyen et long terme?

ANGLE 3: ÉTHIQUE DÉCISIONNELLE
Analyse une décision récente avec des implications éthiques:
- Quels cadres éthiques as-tu utilisés pour évaluer les différentes options?
- Comment as-tu géré les conflits entre intérêts à court terme et valeurs à long terme?
- Quelle approche as-tu adoptée pour inclure les voix sous-représentées dans ton processus?
- Comment assumes-tu la responsabilité des conséquences non intentionnelles?

Après avoir exploré ces trois angles, identifie:
1. Les 3 principales forces de ton approche décisionnelle actuelle
2. Les 2 angles morts les plus critiques dans ta prise de décision
3. Une stratégie intégrée pour renforcer ta maîtrise décisionnelle`}
            />

            <PromptCard
              title="Pilotage de la performance durable"
              description="Niveau Avancé - Iterative Prompting + Generated Knowledge"
              content={`Nous allons co-construire un système de pilotage de performance durable avancé en suivant une approche itérative. Je t'accompagnerai pas à pas dans cette réflexion approfondie.

ÉTAPE 1: EXPLORATION DU CONCEPT DE PERFORMANCE INTÉGRÉE
Avant de commencer, générons les connaissances fondamentales suivantes:
- Évolution des modèles de performance: du ROI unidimensionnel aux cadres multidimensionnels
- Les principaux référentiels de performance durable (Triple Bottom Line, Integrated Reporting, B Corp, etc.)
- Les corrélations démontrées entre performance financière et extra-financière
- Les échecs typiques des systèmes de pilotage trop complexes ou déséquilibrés
- Les meilleures pratiques en matière de gouvernance de la performance intégrée

Décris maintenant ton contexte organisationnel et tes enjeux prioritaires en matière de performance.
[Attends ma réponse avant de continuer]

ÉTAPE 2: DIAGNOSTIC DE MATURITÉ
Basé sur ta description, analysons la maturité actuelle de ton organisation selon ces dimensions:
- Sophistication des indicateurs et outils de mesure
- Intégration des différentes dimensions de la performance
- Culture de la mesure et de l'amélioration continue
- Alignement entre indicateurs opérationnels et stratégiques
- Capacité à adapter les objectifs à l'évolution du contexte

Pour chaque dimension, positionnons ton organisation sur une échelle de 1 à 5.
[Attends ma réponse avant de continuer]

ÉTAPE 3: CONCEPTION DE L'ARCHITECTURE D'INDICATEURS
Maintenant, développons une architecture d'indicateurs équilibrée et connectée:
- Quels sont les "North Star Metrics" qui définissent le succès global?
- Quels indicateurs avancés (leading) et retardés (lagging) pour chaque dimension?
- Comment établir une hiérarchie claire entre indicateurs stratégiques et opérationnels?
- Quels mécanismes pour détecter les compromis et synergies entre dimensions?

Proposons une structure visuelle de tableau de bord intégré.
[Attends ma réponse avant de continuer]

ÉTAPE 4: RITUEL DE PILOTAGE ET PRISE DE DÉCISION
Concevons maintenant le processus de gouvernance de ce système:
- Quel rythme et format pour les différents niveaux de revue?
- Comment structurer le dialogue entre parties prenantes avec des intérêts divergents?
- Quels protocoles de décision pour arbitrer entre performances contradictoires?
- Comment éviter les biais courants dans l'interprétation des données?

[Attends ma réponse avant de continuer]

ÉTAPE 5: TRANSFORMATION CULTURELLE ET CONDUITE DU CHANGEMENT
Pour que ce système soit véritablement adopté:
- Quelles compétences développer chez les managers et contributeurs?
- Comment aligner incitations individuelles et performance collective durable?
- Quels narratifs et symboles pour incarner cette vision équilibrée?
- Comment gérer la transition depuis le système actuel?

[Attends ma réponse avant de continuer]

ÉTAPE 6: PLAN D'IMPLÉMENTATION
Finalisons avec un plan d'action concret:
- Actions prioritaires à court terme
- Jalons clés et mécanismes d'évaluation
- Ressources nécessaires
- Stratégie d'adaptation continue

Ce plan sera personnalisé en fonction de toutes tes réponses précédentes pour créer un système parfaitement adapté à ton contexte.`}
            />

            <PromptCard
              title="Leadership éthique"
              description="Niveau Avancé - Expert Role-Playing + Contextual Augmentation"
              content={`Tu incarnes aujourd'hui Damon Horowitz, ancien Philosophe en Résidence chez Google et expert en éthique appliquée aux organisations. Tu es reconnu pour ta capacité à traduire des principes philosophiques complexes en pratiques concrètes de leadership éthique.

CONTEXTE SUPPLÉMENTAIRE:
- Les recherches montrent que 60% des infractions éthiques en entreprise impliquent des managers qui sentaient une pression pour atteindre des objectifs à tout prix
- Le "ethical fading" est un phénomène cognitif où les dimensions éthiques d'une décision deviennent invisibles sous la pression opérationnelle
- Les organisations avec une forte culture éthique ont 40% moins de comportements contre-productifs et une rétention supérieure de 12%
- L'étude "Moral Leadership in Action" (2023) identifie trois piliers: conscience éthique personnelle, systèmes organisationnels éthiques, et courage moral face à l'adversité
- Le concept de "conversation morale" comme pratique centrale d'un leadership éthique mature

En tant que Damon Horowitz, analyse la situation éthique actuelle de cette organisation:
[Description de l'organisation, ses défis éthiques particuliers, sa culture, et son secteur d'activité]

Ta réponse doit inclure:

1. DIAGNOSTIC DU "CLIMATE ÉTHIQUE"
- Analyse des forces et vulnérabilités éthiques visibles
- Identification des "angles morts éthiques" potentiels
- Évaluation des mécanismes existants de délibération morale
- Diagnostic des dissonances entre valeurs affichées et pratiques réelles

2. CADRE PHILOSOPHIQUE ADAPTÉ
- Proposition d'un cadre éthique adapté au contexte spécifique (ex: éthique de la vertu, déontologie, utilitarisme, éthique du care)
- Traduction de principes philosophiques en critères décisionnels pragmatiques
- Résolution des contradictions apparentes entre impératifs éthiques

3. ARCHITECTURE DE LEADERSHIP ÉTHIQUE
- Mécanismes formels: processus décisionnels, systèmes d'alerte, formation
- Mécanismes informels: conversations morales, reconnaissance des dilemmes
- Ritualisation de la délibération éthique dans le quotidien managérial
- Stratégies pour développer le "muscle éthique" organisationnel

4. MISE EN ŒUVRE ET TRANSFORMATION
- Plan de développement du courage moral des leaders
- Intégration de l'éthique dans les systèmes de performance et récompense
- Création d'une communauté de pratique éthique
- Indicateurs de mesure d'une culture éthique vivante

Termine par une réflexion philosophique accessible sur pourquoi l'éthique représente non pas une contrainte mais un avantage stratégique fondamental pour les organisations contemporaines.`}
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center">
        <Link href="/catalogue/leadership">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux dimensions du leadership
          </Button>
        </Link>
      </div>
    </div>
  )
}

// Composant PromptCard avec fonctionnalité de copie
function PromptCard({ title, description, content }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Erreur lors de la copie:", err)
    }
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="prose max-w-none whitespace-pre-line">{content}</div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={copyToClipboard} className="flex items-center gap-2">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copié !" : "Copier le prompt"}
        </Button>
      </CardFooter>
    </Card>
  )
}
