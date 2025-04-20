import type { Metadata } from "next"
import { PromptCard } from "@/components/prompt-card"

export const metadata: Metadata = {
  title: "Prompts de Productivité | Prompt101.fr",
  description:
    "Découvrez notre collection de prompts avancés pour améliorer votre productivité et optimiser votre workflow.",
}

export default function ProductivitePage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Prompts de Productivité</h1>
        <p className="text-lg text-muted-foreground">
          Découvrez notre collection de prompts avancés pour améliorer votre productivité et optimiser votre workflow.
          Ces prompts vous aideront à appliquer des méthodes éprouvées comme la loi de Pareto, la méthode GTD, le Deep
          Work et bien d'autres.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        <PromptCard
          title="Loi de Pareto - Chain-of-Thought Prompting"
          description="Appliquez le principe 80/20 à vos activités quotidiennes pour maximiser votre impact"
          level="Avancé"
          techniques={["Chain-of-Thought"]}
          promptText={`En tant que consultant en productivité, analyse la façon dont je pourrais appliquer la loi de Pareto (principe 80/20) à mon travail actuel. 

Voici mes principales activités quotidiennes:
[Liste de tes 10 activités professionnelles quotidiennes]

Pour résoudre ce problème, suis ces étapes de raisonnement:
1. Analyse chaque activité en termes de temps investi et de valeur produite
2. Identifie les 20% d'activités susceptibles de générer 80% des résultats
3. Examine les activités à faible rendement et détermine lesquelles pourraient être déléguées, automatisées ou éliminées
4. Propose une réorganisation de ma journée type qui maximise l'impact des activités à haute valeur
5. Suggère des indicateurs concrets pour mesurer l'efficacité de cette nouvelle organisation

Détaille ton raisonnement étape par étape avant de formuler tes recommandations finales.`}
          category="Productivité"
        />

        <PromptCard
          title="Méthode GTD - RCT (Rôle, Contexte, Tâche)"
          description="Implémentez la méthode Getting Things Done de David Allen pour gérer efficacement vos tâches et projets"
          level="Avancé"
          techniques={["RCT"]}
          promptText={`En tant que coach certifié en méthode GTD (Getting Things Done) de David Allen,

tu travailles avec un cadre dirigeant submergé par plus de 200 emails quotidiens, des dizaines de réunions hebdomadaires et de multiples projets stratégiques simultanés. Cette personne se sent constamment débordée et a l'impression de toujours courir après le temps. Elle utilise actuellement un mélange de notes papier, emails marqués et rappels sur téléphone, sans système cohérent.

Conçois un plan d'implémentation personnalisé de la méthode GTD en 5 phases (Collecter, Clarifier, Organiser, Réfléchir, Engager) qui:
1. Commence par un audit de son système actuel de gestion d'informations
2. Propose un processus de traitement quotidien de sa boîte email
3. Établit une architecture précise de listes et de dossiers
4. Intègre une méthode de revue hebdomadaire efficace
5. Recommande des outils numériques/physiques spécifiques adaptés à son profil

Inclus des solutions pour les obstacles psychologiques courants et des scripts précis pour les moments de décision difficiles.`}
          category="Productivité"
        />

        <PromptCard
          title="Deep Work - Expert Role-Playing + Contextual Augmentation"
          description="Maximisez votre capacité de concentration profonde selon les principes de Cal Newport"
          level="Professionnel"
          techniques={["Expert Role-Playing", "Contextual Augmentation"]}
          promptText={`Tu es Cal Newport, professeur d'informatique à Georgetown University et auteur du livre "Deep Work". Tu es reconnu mondialement comme l'expert de référence sur la concentration profonde et le travail cognitif de haute performance.

CONTEXTE SUPPLÉMENTAIRE:
- Études récentes (2023): Les travailleurs du savoir sont interrompus en moyenne toutes les 3 minutes, et il faut 23 minutes pour retrouver une concentration optimale
- Le collaborateur moyen consulte ses emails/messages 74 fois par jour
- Les personnes capables de sessions régulières de deep work de 2h+ sont 34% plus productives et rapportent une satisfaction professionnelle supérieure de 42%
- La capacité d'attention soutenue a diminué de 25% depuis 2000
- Les environnements de travail ouverts réduisent la productivité cognitive de 15-28%

En tant que Cal Newport, analyse mon environnement de travail actuel et mes habitudes, puis recommande une transformation complète pour maximiser ma capacité de deep work:

[Description de mon environnement professionnel, horaires, distractions courantes, et type de travail intellectuel]

Dans ta réponse:
1. Diagnostique précisément les obstacles au deep work dans ma situation
2. Propose une "règle du deep work" personnalisée (philosophie d'engagement)
3. Conçois un rituel de début/fin de session adapté à mon contexte
4. Recommande des modifications spécifiques à mon environnement physique et numérique
5. Établis un programme progressif sur 30 jours pour transformer mes habitudes`}
          category="Productivité"
        />

        <PromptCard
          title="Technique Pomodoro - Few-Shot Prompting"
          description="Adaptez la technique Pomodoro à différents types de tâches professionnelles"
          level="Intermédiaire"
          techniques={["Few-Shot"]}
          promptText={`J'aimerais adapter la technique Pomodoro à différents types de tâches professionnelles. Voici quelques exemples d'adaptations réussies:

EXEMPLE 1 - RÉDACTION DE CONTENU:
Objectif: Rédiger un article de blog de 1500 mots
Adaptation Pomodoro: Sessions de 25 minutes avec objectif de 300-400 mots par session
Outil: Minuteur Focus Booster + Désactivation des notifications
Résultat: Complétion en 5 pomodoros, productivité augmentée de 30% par rapport aux sessions non-chronométrées

EXEMPLE 2 - DÉVELOPPEMENT LOGICIEL:
Objectif: Coder une nouvelle fonctionnalité
Adaptation Pomodoro: Sessions de 35 minutes pour respecter le flow state spécifique au code
Outil: Extension VS Code "Pomodoro Timer"
Résultat: Moins d'erreurs et meilleure documentation du code, réduction du temps de débogage ultérieur

EXEMPLE 3 - ANALYSE DE DONNÉES:
Objectif: Analyser des données marketing trimestrielles
Adaptation Pomodoro: Alternance de sessions de 20 minutes (analyse intensive) et sessions de 40 minutes (recherche de patterns)
Outil: Technique "timeboxing" dans Google Calendar
Résultat: Identification de 3 insights critiques manqués lors des analyses précédentes sans structure temporelle

En suivant ces modèles, crée une adaptation Pomodoro optimisée pour mes tâches principales:
[Liste de 3-4 types de tâches que tu effectues régulièrement]`}
          category="Productivité"
        />

        <PromptCard
          title="Batching - Contextual Augmentation + Chain-of-Thought"
          description="Regroupez vos tâches similaires pour minimiser les coûts de changement de contexte"
          level="Avancé"
          techniques={["Contextual Augmentation", "Chain-of-Thought"]}
          promptText={`Je souhaite mettre en place une stratégie de batching (regroupement de tâches similaires) pour optimiser ma productivité.

INFORMATIONS CONTEXTUELLES IMPORTANTES:
- Études cognitives récentes: Le coût de changement de contexte réduit la productivité de 20-40%
- Le temps moyen pour atteindre une concentration optimale après un changement de tâche: 23 minutes
- Le batching est particulièrement efficace pour: emails, appels, tâches administratives, création de contenu
- Variantes efficaces: batching thématique, batching temporel, batching par énergie requise
- Outils complémentaires recommandés: timeboxing, blocage de calendrier, modes "ne pas déranger"
- Contre-indications: services d'urgence, rôles nécessitant une disponibilité constante

Pour créer ma stratégie de batching personnalisée, suis cette méthode pas à pas:

1. Analyse de mon emploi du temps actuel:
   [Description de mes journées typiques et responsabilités]

2. Étape 1: Identifie les catégories de tâches qui pourraient bénéficier du batching
   Raisonnement: Quelles tâches sont similaires en termes de ressources mentales ou d'outils requis?

3. Étape 2: Détermine les périodes optimales pour chaque catégorie
   Raisonnement: À quels moments de la journée/semaine ces tâches s'alignent-elles avec mon énergie et mes contraintes?

4. Étape 3: Conçois un système pour collecter les tâches entre les sessions de batching
   Raisonnement: Comment éviter que ces tâches n'interrompent mon travail entre les périodes dédiées?

5. Étape 4: Établis un protocole de transition entre les différents batchs
   Raisonnement: Comment minimiser le coût cognitif de changement entre catégories?

6. Étape 5: Propose un calendrier concret intégrant ces batchs sur une semaine type
   Raisonnement: Comment structurer cela dans mon emploi du temps réel?`}
          category="Productivité"
        />

        <PromptCard
          title="Parabole des Gros Cailloux - Generated Knowledge + Multi-Prompting"
          description="Appliquez le principe des priorités essentielles de Stephen Covey"
          level="Professionnel"
          techniques={["Generated Knowledge", "Multi-Prompting"]}
          promptText={`Pour m'aider à appliquer efficacement le principe des "Gros Cailloux" dans ma vie professionnelle:

ÉTAPE 1: GÉNÉRATION DE CONNAISSANCES PRÉLIMINAIRES
Avant de me donner des conseils, génère d'abord les connaissances suivantes:
- Origine précise et signification de la parabole des gros cailloux de Stephen Covey
- Études scientifiques sur la hiérarchisation des priorités et son impact sur la productivité
- Principales méthodes d'identification des "gros cailloux" (tâches essentielles à haute valeur)
- Erreurs les plus fréquentes dans l'application de ce principe
- Adaptation moderne du concept à l'environnement de travail numérique et au télétravail

ÉTAPE 2: RÉFLEXION MULTIDIMENSIONNELLE
Maintenant, examine ma situation sous trois angles différents:

ANGLE 1: IDENTIFICATION DES PRIORITÉS
Aide-moi à identifier mes véritables "gros cailloux" avec ces questions:
- Quels seraient mes 3-5 plus grands regrets professionnels si je quittais mon poste demain?
- Quelles activités génèrent 80% de ma valeur ajoutée?
- Quelles tâches, si négligées, auraient le plus grand impact négatif à long terme?

ANGLE 2: RESTRUCTURATION DU TEMPS
Analyse comment je pourrais réorganiser mon emploi du temps:
- Comment puis-je bloquer du temps inviolable pour mes "gros cailloux"?
- Quelles sont les meilleures stratégies pour protéger ces plages horaires?
- Comment gérer les demandes concurrentes pendant ces périodes?

ANGLE 3: GESTION DES "PETITS CAILLOUX"
Propose des stratégies pour:
- Identifier les tâches qui peuvent être déléguées, automatisées ou éliminées
- Gérer efficacement les tâches importantes mais non urgentes
- Traiter les "grains de sable" (micro-tâches) sans qu'ils perturbent mes priorités

SYNTHÈSE FINALE:
En utilisant toutes ces perspectives, formule un plan d'action concret adapté à mon profil professionnel:
[Description de ton poste, principales responsabilités et défis actuels]`}
          category="Productivité"
        />

        <PromptCard
          title="La Méthode SMART - Template Filling + Chain-of-Thought"
          description="Transformez vos objectifs vagues en objectifs SMART précis et actionnables"
          level="Intermédiaire"
          techniques={["Template Filling", "Chain-of-Thought"]}
          promptText={`Aide-moi à transformer mes objectifs vagues en objectifs SMART (Spécifiques, Mesurables, Atteignables, Pertinents, Temporellement définis).

Pour chacun de mes objectifs actuels, je te demande de suivre ce processus de réflexion détaillé et de compléter le template fourni:

OBJECTIF INITIAL:
[Insère ton objectif professionnel ou personnel actuel, formulé de façon générale]

PROCESSUS DE TRANSFORMATION:

1. ANALYSE DE LA SPÉCIFICITÉ:
   - Problème de spécificité identifié: [À compléter]
   - Raisonnement: [À compléter]
   - Reformulation spécifique: [À compléter]

2. ÉTABLISSEMENT DES MESURES:
   - Indicateurs de performance clés: [À compléter]
   - Méthode de suivi proposée: [À compléter]
   - Fréquence d'évaluation recommandée: [À compléter]

3. ÉVALUATION DE L'ATTEIGNABILITÉ:
   - Ressources nécessaires: [À compléter]
   - Compétences requises: [À compléter]
   - Obstacles potentiels: [À compléter]
   - Stratégies d'atténuation: [À compléter]

4. ALIGNEMENT AVEC LA PERTINENCE:
   - Lien avec mes objectifs à long terme: [À compléter]
   - Valeur/impact attendu: [À compléter]
   - Justification de priorité: [À compléter]

5. DÉFINITION TEMPORELLE:
   - Date limite finale: [À compléter]
   - Jalons intermédiaires: [À compléter]
   - Calendrier de révision: [À compléter]

OBJECTIF SMART FINAL:
[À compléter - formulation complète selon le format SMART]

PLAN D'ACTION IMMÉDIAT (PREMIERS PAS):
1. [À compléter]
2. [À compléter]
3. [À compléter]`}
          category="Productivité"
        />

        <PromptCard
          title="L'État de Flow - Iterative Prompting"
          description="Optimisez vos conditions de travail pour atteindre l'état de flow décrit par Mihaly Csikszentmihalyi"
          level="Avancé"
          techniques={["Iterative Prompting"]}
          promptText={`Je souhaite optimiser mes conditions de travail pour atteindre plus régulièrement l'état de flow décrit par Mihaly Csikszentmihalyi. Guidons cette exploration par étapes successives.

ÉTAPE 1: DIAGNOSTIC DE MON EXPÉRIENCE ACTUELLE DU FLOW
Pour commencer, analyse mon expérience actuelle avec l'état de flow:
- À quelle fréquence j'atteins cet état
- Dans quelles circonstances précises cela se produit
- Combien de temps dure généralement cet état
- Ce qui déclenche habituellement la sortie de cet état

[Je répondrai à ces questions avant que tu continues]

ÉTAPE 2: ANALYSE DES CONDITIONS FAVORABLES
Maintenant, identifie les facteurs spécifiques qui semblent favoriser mon entrée en état de flow, en considérant:
- Environnement physique
- Moment de la journée
- Type de tâches
- État psychologique préalable
- Rituels ou routines

[Je fournirai ces informations après ta réponse]

ÉTAPE 3: CONCEPTION D'UN ENVIRONNEMENT OPTIMISÉ
En fonction de mon profil flow, propose:
- Modifications à apporter à mon espace de travail
- Ajustements de mon emploi du temps
- Stratégies de gestion des interruptions
- Techniques de préparation mentale

[J'attendrai tes recommandations avant de continuer]

ÉTAPE 4: ÉLABORATION D'UN PROTOCOLE D'ENTRÉE EN FLOW
Conçois un rituel personnalisé en 3-5 étapes pour faciliter mon entrée en état de flow:
- Séquence d'actions préparatoires
- Durée estimée de chaque étape
- Indicateurs de progression vers l'état de flow

[J'évaluerai ton protocole avant la prochaine étape]

ÉTAPE 5: PLAN D'EXTENSION DE LA DURÉE DE FLOW
Propose des stratégies pour prolonger mes périodes de flow une fois qu'elles sont établies:
- Techniques de maintien de la concentration
- Gestion optimale des ressources physiologiques (énergie, hydratation, etc.)
- Méthodes pour noter les idées périphériques sans briser l'état de flow

[Continue après ma réponse]`}
          category="Productivité"
        />

        <PromptCard
          title="Effet Cumulé - Expert Role-Playing + Contextual Augmentation"
          description="Appliquez les principes de Darren Hardy pour créer des résultats extraordinaires par de petites actions quotidiennes"
          level="Professionnel"
          techniques={["Expert Role-Playing", "Contextual Augmentation"]}
          promptText={`Tu es Darren Hardy, auteur du best-seller "L'Effet Cumulé" et ancien éditeur du magazine SUCCESS. Tu es spécialiste des petites actions quotidiennes qui, répétées régulièrement, produisent des résultats extraordinaires sur le long terme.

CONTEXTE SUPPLÉMENTAIRE:
- Le principe mathématique de l'intérêt composé appliqué au développement personnel
- Études neurologiques sur la formation d'habitudes (21-66 jours pour automatiser un comportement)
- Recherches récentes sur l'impact des micro-habitudes sur les changements comportementaux durables
- Méthodologies de tracking d'habitudes les plus efficaces en 2023
- Statistiques sur les taux d'échec des changements comportementaux (92% des résolutions du Nouvel An)

En tant que Darren Hardy, analyse mon objectif de productivité et crée un plan d'effet cumulé personnalisé:

[Description de ton objectif de productivité/performance et des défis que tu rencontres]

Ta réponse doit inclure:
1. Une analyse des "choix apparemment insignifiants" quotidiens qui pourraient avoir l'impact le plus significatif
2. Un système précis pour traquer ces micro-actions (avec template concret)
3. Une stratégie d'amplification progressive sur 6 mois
4. Des mécanismes de responsabilisation et de célébration des jalons
5. Un plan pour surmonter le "plateau du désespoir" (période où les résultats semblent stagner)

Utilise ton style authentique de communication, incluant des métaphores percutantes et questions provocantes comme dans tes livres et conférences.`}
          category="Productivité"
        />

        <PromptCard
          title="Systèmes de Gestion de Tâches - Multi-Prompting + Generated Knowledge"
          description="Choisissez et configurez le système de gestion de tâches idéal pour votre profil professionnel"
          level="Professionnel"
          techniques={["Multi-Prompting", "Generated Knowledge"]}
          promptText={`Pour m'aider à choisir et configurer le système de gestion de tâches idéal pour mon profil professionnel, j'ai besoin d'une analyse approfondie sous plusieurs angles:

ÉTAPE 1: GÉNÉRER DES CONNAISSANCES FONDAMENTALES
Avant de répondre, synthétise les informations essentielles sur:
- Évolution récente des principaux systèmes de gestion de tâches (monday.com, Todoist, Trello, etc.)
- Études comparatives sur leur efficacité selon différents profils cognitifs et professionnels
- Tendances émergentes en matière d'intégration entre outils de productivité
- Principaux facteurs d'abandon des systèmes de gestion de tâches
- Critères objectifs pour évaluer l'adéquation d'un système à un profil utilisateur

PROMPT 1: ANALYSE DE MON PROFIL UTILISATEUR
Basé sur ces informations, analyse mon profil pour identifier mes besoins spécifiques:
[Description de mon rôle, style de travail, défis actuels de gestion de tâches, outils déjà utilisés]
- Quels sont mes modes de pensée dominants (linéaire, visuel, contextuel)?
- Quels types de tâches composent principalement mon travail?
- Quels sont mes principaux points de friction actuels?
- Quel niveau de complexité de système puis-je gérer efficacement?

PROMPT 2: ÉVALUATION COMPARATIVE DES SYSTÈMES
Crée une matrice d'évaluation des 5 outils les plus pertinents pour mon profil, notant chacun sur:
- Adéquation avec mon style cognitif (1-10)
- Capacité à gérer mes types de tâches spécifiques (1-10)
- Courbe d'apprentissage vs bénéfices attendus (1-10)
- Intégration avec mon écosystème d'outils existant (1-10)
- Fonctionnalités de motivation/gamification adaptées à mon profil (1-10)

PROMPT 3: STRATÉGIE D'IMPLÉMENTATION
Pour les 2 systèmes les mieux classés dans ton analyse:
- Propose un plan d'implémentation progressif sur 30 jours
- Crée une architecture de tâches/projets adaptée à mon flux de travail
- Identifie les automatisations potentielles pour maximiser l'efficacité
- Suggère une routine quotidienne/hebdomadaire d'utilisation
- Développe une stratégie pour maintenir l'engagement à long terme`}
          category="Productivité"
        />
      </div>
    </div>
  )
}
