import type { Prompt } from "@/types/prompt"

export const personalDevelopmentPrompts: Prompt[] = [
  {
    id: "swot-analysis",
    title: "Analyse SWOT personnelle",
    description: "Obtenez une analyse détaillée de vos forces, faiblesses, opportunités et menaces",
    text: `En tant que coach en développement personnel, aide-moi à réaliser une analyse SWOT complète de ma situation actuelle.

Voici des informations sur moi:
- Compétences principales: [liste de compétences]
- Domaine professionnel: [votre domaine]
- Objectifs à court terme: [objectifs]
- Objectifs à long terme: [objectifs]
- Défis actuels: [défis]

Pour chaque quadrant de l'analyse SWOT:
1. Identifie 5 forces que je peux exploiter
2. Analyse 5 faiblesses que je devrais améliorer
3. Suggère 5 opportunités que je pourrais saisir
4. Alerte-moi sur 5 menaces potentielles à surveiller

Pour chaque élément, fournis une explication brève et une suggestion d'action concrète.`,
    difficulty: "Modéré",
    difficultyLevel: 2,
    example: `En tant que coach en développement personnel, aide-moi à réaliser une analyse SWOT complète de ma situation actuelle.

Voici des informations sur moi:
- Compétences principales: programmation Python, analyse de données, communication écrite
- Domaine professionnel: data science dans une startup tech
- Objectifs à court terme: obtenir une promotion dans les 6 mois
- Objectifs à long terme: devenir chef d'équipe data science d'ici 3 ans
- Défis actuels: manque de visibilité sur mes projets, difficulté à communiquer oralement

Pour chaque quadrant de l'analyse SWOT:

## FORCES
1. **Expertise en programmation Python**: Vous maîtrisez un langage essentiel en data science.
   → Action: Créez un projet open source ou un blog technique pour démontrer votre expertise.

2. **Compétences en analyse de données**: Capacité à extraire des insights pertinents.
   → Action: Proposez une analyse de données qui résout un problème business spécifique de votre entreprise.

3. **Communication écrite solide**: Vous pouvez documenter et expliquer clairement vos analyses.
   → Action: Rédigez des rapports d'analyse qui mettent en valeur l'impact business de vos projets.

4. **Connaissance du secteur tech**: Compréhension de l'environnement startup et de ses défis.
   → Action: Participez à des meetups ou conférences pour élargir votre réseau dans le secteur.

5. **Motivation pour progresser**: Ambition claire de progression professionnelle.
   → Action: Établissez un plan de développement professionnel avec des objectifs mensuels.

## FAIBLESSES
1. **Communication orale limitée**: Difficulté à présenter et défendre vos idées verbalement.
   → Action: Rejoignez un club Toastmasters ou suivez un cours de prise de parole en public.

2. **Manque de visibilité sur vos projets**: Votre travail n'est pas suffisamment reconnu.
   → Action: Organisez des sessions de partage régulières avec votre équipe et vos supérieurs.

3. **Réseau professionnel potentiellement limité**: Pas mentionné mais courant dans votre situation.
   → Action: Planifiez un café virtuel hebdomadaire avec différents collègues de l'entreprise.

4. **Possible manque d'expérience en management**: Nécessaire pour votre objectif de chef d'équipe.
   → Action: Demandez à gérer un petit projet impliquant d'autres collègues pour développer ces compétences.

5. **Focus potentiellement trop technique**: Besoin d'élargir vers des compétences business.
   → Action: Suivez un cours en ligne sur la stratégie business ou le product management.

## OPPORTUNITÉS
1. **Environnement startup propice à l'évolution rapide**: Les startups offrent souvent des progressions accélérées.
   → Action: Identifiez les gaps dans votre équipe et proposez-vous pour les combler.

2. **Croissance du secteur data science**: Demande forte pour les professionnels qualifiés.
   → Action: Restez à jour sur les dernières technologies et méthodologies via des formations continues.

3. **Possibilité de mentorat**: Recherchez un mentor senior dans votre entreprise.
   → Action: Identifiez un leader que vous admirez et demandez-lui un mentorat formel.

4. **Projets transversaux**: Occasions de collaboration avec d'autres départements.
   → Action: Proposez un projet d'analyse qui bénéficierait à un autre département (marketing, ventes).

5. **Visibilité externe**: Possibilité de représenter votre entreprise lors d'événements.
   → Action: Proposez-vous pour présenter lors de meetups techniques ou conférences du secteur.

## MENACES
1. **Évolution rapide des technologies**: Risque d'obsolescence des compétences.
   → Action: Consacrez 3-5 heures par semaine à l'apprentissage de nouvelles technologies.

2. **Concurrence forte pour les postes de leadership**: Nombreux data scientists aspirent aux mêmes postes.
   → Action: Différenciez-vous en développant une expertise spécifique ou des compétences complémentaires.

3. **Burnout potentiel**: La pression pour performer peut mener à l'épuisement.
   → Action: Établissez des limites claires entre vie professionnelle et personnelle.

4. **Manque de clarté dans la progression de carrière**: Absence possible de chemin défini dans une startup.
   → Action: Discutez avec votre manager des attentes précises pour une promotion.

5. **Dépendance à un secteur ou technologie spécifique**: Risque si l'entreprise ou le secteur connaît des difficultés.
   → Action: Diversifiez vos compétences et restez informé des opportunités dans d'autres secteurs.`,
    technique: "Analyse",
    tips: [
      "Soyez honnête et précis dans votre auto-évaluation",
      "Incluez des éléments tant professionnels que personnels",
      "Révisez et mettez à jour votre analyse SWOT tous les 3-6 mois",
      "Utilisez cette analyse comme base pour définir des objectifs SMART",
      "Partagez cette analyse avec un mentor pour obtenir une perspective externe",
    ],
    variants: [
      {
        title: "SWOT pour reconversion professionnelle",
        text: `En tant que coach en développement de carrière, aide-moi à réaliser une analyse SWOT complète pour évaluer ma situation actuelle en vue d'une reconversion professionnelle.

Voici des informations sur moi:
- Profession actuelle: [profession actuelle]
- Domaine visé pour la reconversion: [nouveau domaine]
- Compétences transférables: [compétences]
- Formation et qualifications: [formations]
- Contraintes personnelles: [contraintes]

Pour chaque quadrant de l'analyse SWOT:
1. Identifie 5 forces qui faciliteront ma transition
2. Analyse 5 faiblesses qui pourraient entraver ma reconversion
3. Suggère 5 opportunités à saisir dans le nouveau domaine
4. Alerte-moi sur 5 menaces ou risques liés à cette reconversion

Pour chaque élément, fournis une explication et une recommandation d'action spécifique pour maximiser mes chances de réussite.`
      },
      {
        title: "SWOT pour entrepreneur",
        text: `En tant que conseiller en entrepreneuriat, aide-moi à réaliser une analyse SWOT complète pour évaluer mon potentiel entrepreneurial et mon projet d'entreprise.

Voici des informations sur moi et mon projet:
- Idée d'entreprise: [description du projet]
- Expérience professionnelle pertinente: [expérience]
- Ressources disponibles: [ressources financières, réseau, etc.]
- Compétences clés: [compétences]
- Marché cible: [description du marché]

Pour chaque quadrant de l'analyse SWOT:
1. Identifie 5 forces personnelles et du projet qui constituent des avantages
2. Analyse 5 faiblesses ou lacunes qui pourraient compromettre le succès
3. Suggère 5 opportunités de marché ou tendances favorables à exploiter
4. Alerte-moi sur 5 menaces externes ou risques potentiels à anticiper

Pour chaque élément, fournis une explication et une recommandation d'action concrète pour renforcer mon projet entrepreneurial.`
      }
    ],
    relatedPrompts: [
      "goal-setting",
      "skill-development-plan",
      "career-development-plan"
    ],
    category: {
      id: "personal-development",
      title: "Développement personnel",
      description: "Prompts pour votre croissance personnelle et professionnelle",
      color: "#9b59b6",
      icon: "User"
    },
  },
  {
    id: "skill-development-plan",
    title: "Plan d'apprentissage structuré",
    description: "Créez un plan d'action détaillé pour maîtriser une nouvelle compétence",
    text: `Crée un plan d'apprentissage détaillé pour développer la compétence [compétence] en partant du niveau [débutant/intermédiaire/avancé] jusqu'au niveau [objectif].

Le plan doit:
1. Être divisé en phases progressives sur [durée: X semaines/mois]
2. Inclure des ressources spécifiques pour chaque phase (livres, cours en ligne, tutoriels, exercices pratiques)
3. Proposer des projets pratiques de difficulté croissante
4. Définir des jalons mesurables pour évaluer ma progression
5. Suggérer des méthodes pour surmonter les obstacles courants
6. Recommander des communautés ou groupes pour obtenir du soutien

Adapte ce plan à une personne qui:
- Dispose de [X heures] par semaine pour pratiquer
- Apprend mieux par [style d'apprentissage: visuel/auditif/pratique]
- A pour objectif final de [objectif spécifique lié à la compétence]`,
    difficulty: "Complexe",
    difficultyLevel: 3,
    example: `Crée un plan d'apprentissage détaillé pour développer la compétence "prise de parole en public" en partant du niveau débutant jusqu'au niveau avancé.

Le plan doit:
1. Être divisé en phases progressives sur 4 mois
2. Inclure des ressources spécifiques pour chaque phase (livres, cours en ligne, tutoriels, exercices pratiques)
3. Proposer des projets pratiques de difficulté croissante
4. Définir des jalons mesurables pour évaluer ma progression
5. Suggérer des méthodes pour surmonter les obstacles courants
6. Recommander des communautés ou groupes pour obtenir du soutien

Adapte ce plan à une personne qui:
- Dispose de 5 heures par semaine pour pratiquer
- Apprend mieux par la pratique
- A pour objectif final de présenter confortablement lors de conférences professionnelles

# Plan d'apprentissage: Maîtrise de la prise de parole en public
*Durée totale: 4 mois (16 semaines) à raison de 5 heures/semaine*

## PHASE 1: FONDATIONS (Semaines 1-4)
**Objectif**: Comprendre les principes de base et surmonter l'anxiété initiale

### Ressources recommandées:
- Livre: "Parler en public" de Dale Carnegie
- Cours en ligne: "Introduction à l'art oratoire" sur Coursera
- Vidéos: Série TED Talks "The Way We Talk"
- Application: "Orai" pour feedback sur la voix et le débit

### Exercices pratiques (2h/semaine):
- Enregistrez-vous en parlant 2 minutes sur un sujet que vous maîtrisez
- Pratiquez des exercices de respiration diaphragmatique (10 min/jour)
- Récitez des virelangues pour améliorer l'articulation
- Tenez-vous devant un miroir et présentez-vous en 1 minute

### Projet #1: Présentation personnelle (Semaine 4)
Préparez et délivrez une présentation de 3 minutes sur votre parcours professionnel devant 2-3 amis ou collègues de confiance. Demandez un feedback constructif.

### Jalon mesurable:
- Capacité à parler pendant 3 minutes sans notes avec un débit régulier
- Réduction de l'anxiété auto-évaluée de 30%

### Obstacle courant: Anxiété paralysante
**Solution**: Technique de visualisation positive avant chaque prise de parole + exercices de respiration profonde

## PHASE 2: DÉVELOPPEMENT DE LA STRUCTURE (Semaines 5-8)
**Objectif**: Maîtriser la structure d'une présentation efficace

### Ressources recommandées:
- Livre: "Talk Like TED" de Carmine Gallo
- Cours: "Storytelling for Public Speaking" sur Udemy
- Outil: Logiciel Prezi pour créer des présentations dynamiques
- Podcast: "The Public Speaker's Quick and Dirty Tips"

### Exercices pratiques (2h/semaine):
- Analysez 3 TED Talks réussis et identifiez leur structure
- Créez 5 accroches différentes pour un même sujet
- Pratiquez la règle des 3 (message principal + 3 points clés)
- Exercices d'improvisation sur des sujets aléatoires (1 minute)

### Projet #2: Présentation informative (Semaine 8)
Préparez une présentation de 5 minutes sur un sujet de votre expertise professionnelle. Présentez devant un groupe de 4-5 personnes.

### Jalon mesurable:
- Structure claire avec introduction, développement et conclusion
- Capacité à maintenir l'attention de l'audience pendant 5 minutes
- Utilisation efficace de transitions entre les points

### Obstacle courant: Perte de fil conducteur
**Solution**: Créez une carte mentale visuelle de votre présentation + pratiquez avec des mots-clés uniquement

## PHASE 3: ENGAGEMENT ET PRÉSENCE (Semaines 9-12)
**Objectif**: Développer le charisme et l'engagement avec l'audience

### Ressources recommandées:
- Livre: "Confiance Illimitée" de Franck Nicolas
- Atelier: Rejoignez un club Toastmasters local (1 séance/semaine)
- Cours en ligne: "Mastering Stage Presence" sur MasterClass
- Vidéos: Analyses de grands discours historiques

### Exercices pratiques (2h/semaine):
- Pratiquez le contact visuel (exercice du triangle: regardez différentes personnes)
- Exercices de modulation vocale (volume, ton, rythme)
- Travaillez le langage corporel et la gestuelle
- Improvisez des réponses à des questions difficiles

### Projet #3: Présentation persuasive (Semaine 12)
Préparez un discours de 7 minutes visant à convaincre votre audience d'adopter un point de vue ou de prendre une action. Présentez devant un groupe de 8-10 personnes.

### Jalon mesurable:
- Utilisation efficace du langage corporel
- Capacité à répondre aux questions avec assurance
- Feedback positif sur votre présence et charisme

### Obstacle courant: Difficulté à gérer les questions
**Solution**: Préparez à l'avance des réponses aux 5 questions les plus probables + pratiquez l'art de reformuler

## PHASE 4: MAÎTRISE ET PROFESSIONNALISME (Semaines 13-16)
**Objectif**: Affiner vos compétences pour des présentations professionnelles

### Ressources recommandées:
- Livre: "Slide:ology" de Nancy Duarte
- Cours: "Advanced Presentation Skills" sur LinkedIn Learning
- Outil: Logiciel de feedback vidéo comme "Presenter Coach"
- Mentorat: Trouvez un orateur expérimenté pour du coaching personnalisé

### Exercices pratiques (2h/semaine):
- Entraînez-vous avec des contraintes de temps strictes
- Pratiquez l'utilisation efficace de supports visuels
- Exercices de récupération après une erreur ou un blanc
- Adaptez une même présentation pour différents publics

### Projet final: Simulation de conférence (Semaine 16)
Préparez et délivrez une présentation de 15 minutes dans un format conférence, avec support visuel professionnel, devant un public de 15+ personnes.

### Jalon mesurable:
- Présentation fluide et professionnelle de 15 minutes
- Gestion efficace du temps et des transitions
- Utilisation appropriée des supports visuels
- Feedback positif sur le contenu et la livraison

### Obstacle courant: Perfectionnisme paralysant
**Solution**: Adoptez la règle des 80/20 - concentrez-vous sur les 20% d'éléments qui produisent 80% de l'impact

## COMMUNAUTÉS ET SOUTIEN RECOMMANDÉS:
1. **Toastmasters International**: Rejoignez un club local pour des sessions hebdomadaires
2. **Meetup "Public Speaking"**: Groupes de pratique informels dans votre ville
3. **LinkedIn Learning Community**: Forums de discussion avec d'autres apprenants
4. **Groupe Facebook "Speakers' Corner"**: Communauté en ligne pour partager des conseils
5. **Buddy System**: Trouvez un partenaire d'apprentissage pour vous motiver mutuellement

## CONSEILS POUR MAXIMISER VOTRE APPRENTISSAGE PRATIQUE:
1. **Enregistrez-vous régulièrement**: Analysez vos progrès visuellement
2. **Sollicitez activement du feedback**: Après chaque présentation, demandez 3 points positifs et 1 axe d'amélioration
3. **Exposez-vous graduellement**: Augmentez progressivement la taille de votre audience
4. **Célébrez vos victoires**: Reconnaissez chaque progrès, même minime
5. **Apprenez de vos erreurs**: Tenez un journal de vos difficultés et des solutions trouvées

Ce plan est conçu pour vous faire progresser de manière constante tout en respectant votre préférence pour l'apprentissage pratique. Adaptez le rythme selon vos besoins, mais essayez de maintenir une pratique régulière pour des résultats optimaux.`,
    technique: "Structuration",
    tips: [
      "Soyez réaliste sur le temps que vous pouvez consacrer à l'apprentissage",
      "Commencez par des objectifs modestes et augmentez progressivement la difficulté",
      "Intégrez des sessions de révision et de consolidation dans votre plan",
      "Prévoyez des récompenses pour célébrer l'atteinte de vos jalons",
      "Adaptez le plan au fur et à mesure de votre progression",
    ],
    variants: [
      {
        title: "Plan d'apprentissage accéléré",
        text: `Crée un plan d'apprentissage accéléré et intensif pour développer la compétence [compétence] en partant du niveau [débutant/intermédiaire/avancé] jusqu'au niveau [objectif] en seulement 30 jours.

Le plan doit:
1. Être divisé en 4 semaines intensives avec des objectifs clairs pour chaque semaine
2. Inclure uniquement les ressources et exercices à plus fort impact
3. Proposer une méthode d'immersion totale dans l'apprentissage
4. Définir des micro-objectifs quotidiens pour maintenir la motivation
5. Intégrer des techniques d'apprentissage accéléré (chunking, interleaving, spaced repetition)
6. Suggérer des stratégies pour éviter l'épuisement malgré le rythme intensif

Adapte ce plan à une personne qui:
- Peut consacrer 3-4 heures par jour à cet apprentissage
- Est fortement motivée et disciplinée
- A besoin d'acquérir cette compétence rapidement pour une opportunité professionnelle imminente`
      },
      {
        title: "Plan d'apprentissage pour compétence technique",
        text: `Crée un plan d'apprentissage méthodique pour maîtriser la compétence technique [compétence technique] en partant du niveau [débutant/intermédiaire/avancé] jusqu'à un niveau professionnel.

Le plan doit:
1. Être divisé en modules progressifs sur [durée: X semaines/mois]
2. Inclure des ressources spécifiques pour chaque module (documentation officielle, tutoriels, cours en ligne, livres techniques)
3. Proposer des projets pratiques de complexité croissante avec des spécifications précises
4. Définir des tests ou défis techniques pour valider l'acquisition de chaque compétence
5. Suggérer des méthodes pour résoudre les problèmes techniques courants
6. Recommander des forums spécialisés, GitHub repos et communautés techniques pour obtenir du soutien

Adapte ce plan à une personne qui:
- Dispose de [X heures] par semaine pour l'apprentissage et la pratique
- A déjà des connaissances en [domaines connexes]
- Souhaite atteindre un niveau permettant de [objectif professionnel spécifique]`
      }
    ],
    relatedPrompts: [
      "swot-analysis",
      "goal-setting",
      "career-development-plan"
    ],
    category: {
      id: "personal-development",
      title: "Développement personnel",
      description: "Prompts pour votre croissance personnelle et professionnelle",
      color: "#9b59b6",
      icon: "User"
    },
  },
  {
    id: "goal-setting",
    title: "Définition d'objectifs SMART",
    description: "Transformez vos aspirations en objectifs clairs, mesurables et atteignables",
    text: `Aide-moi à transformer mon objectif général "[objectif général]" en objectifs SMART (Spécifiques, Mesurables, Atteignables, Réalistes, Temporellement définis).

Pour chaque objectif SMART:
1. Reformule-le de manière spécifique et claire
2. Propose des indicateurs mesurables pour suivre ma progression
3. Évalue si l'objectif est atteignable et suggère des ajustements si nécessaire
4. Explique pourquoi cet objectif est pertinent pour moi
5. Définis un calendrier réaliste avec des échéances
6. Décompose l'objectif en 3-5 sous-objectifs ou étapes clés
7. Identifie 2-3 obstacles potentiels et propose des stratégies pour les surmonter

Contexte personnel:
- Situation actuelle: [description]
- Ressources disponibles: [temps, argent, soutien, etc.]
- Contraintes: [limitations]
- Motivations: [raisons personnelles]`,
    difficulty: "Modéré",
    difficultyLevel: 2,
    example: `Aide-moi à transformer mon objectif général "améliorer mon équilibre vie professionnelle-vie personnelle" en objectifs SMART.

Contexte personnel:
- Situation actuelle: je travaille 50-60h par semaine, j'ai peu de temps pour ma famille et mes loisirs
- Ressources disponibles: soutien de mon conjoint, possibilité de flexibilité horaire au travail
- Contraintes: responsabilités importantes au travail, deux enfants en bas âge
- Motivations: réduire mon stress, être plus présent pour ma famille, retrouver du temps pour mes passions

# Transformation de votre objectif général en objectifs SMART

## Objectif SMART #1: Réduire mon temps de travail hebdomadaire

### Spécifique
**Reformulation**: Réduire progressivement mon temps de travail hebdomadaire de 50-60 heures à 40-45 heures maximum, sans compromettre ma productivité ou mes responsabilités professionnelles.

### Mesurable
**Indicateurs**:
- Nombre d'heures travaillées par semaine (suivi quotidien)
- Nombre de tâches accomplies par semaine (pour mesurer la productivité)
- Nombre de soirées libérées avant 18h30 (objectif: 3 par semaine)

### Atteignable
Cet objectif semble atteignable car:
- Vous avez mentionné une possibilité de flexibilité horaire
- Une réduction de 15-20% du temps de travail est réaliste avec une meilleure organisation
- Des gains de productivité peuvent compenser partiellement la réduction d'heures

**Ajustements suggérés**: Commencer par réduire de 5 heures par semaine le premier mois, puis augmenter progressivement.

### Réaliste
**Pertinence**: Cet objectif est directement lié à votre motivation de réduire votre stress et d'être plus présent pour votre famille. Travailler des heures excessives nuit à votre bien-être et à vos relations familiales.

### Temporel
**Calendrier**:
- Mois 1: Réduction à 45-50 heures/semaine
- Mois 2: Réduction à 42-47 heures/semaine
- Mois 3: Stabilisation à 40-45 heures/semaine

### Sous-objectifs
1. **Analyse des tâches** (Semaine 1): Documenter toutes vos activités professionnelles pendant une semaine pour identifier les inefficacités et les tâches à déléguer.
2. **Optimisation des réunions** (Semaines 2-3): Réduire la durée des réunions de 25% et décliner celles non essentielles.
3. **Délégation** (Semaines 4-6): Identifier 3-5 tâches à déléguer à des collègues ou subordonnés.
4. **Blocage de temps** (Semaines 7-8): Mettre en place des plages horaires dédiées aux tâches à forte concentration pour éviter les interruptions.
5. **Communication des limites** (Continu): Informer clairement vos collègues et supérieurs de vos nouveaux horaires de disponibilité.

### Obstacles potentiels et stratégies
1. **Pression des supérieurs ou collègues**
   - Stratégie: Préparez un argumentaire basé sur votre productivité maintenue malgré la réduction d'heures. Proposez une période d'essai.
   
2. **Urgences professionnelles imprévues**
   - Stratégie: Créez un système de "budget d'heures supplémentaires" (max 5h/semaine) à utiliser uniquement pour de véritables urgences, avec récupération la semaine suivante.

3. **Difficulté à déléguer**
   - Stratégie: Commencez par déléguer des tâches simples, puis augmentez progressivement. Prévoyez du temps pour former vos collègues.

## Objectif SMART #2: Établir des moments de qualité dédiés à la famille

### Spécifique
**Reformulation**: Instaurer 3 créneaux hebdomadaires fixes et protégés de temps de qualité avec ma famille, totalisant au moins 6 heures par semaine, pendant lesquelles je suis pleinement présent et non distrait par le travail.

### Mesurable
**Indicateurs**:
- Nombre de créneaux familiaux respectés chaque semaine
- Temps total passé en activités familiales de qualité
- Évaluation mensuelle de satisfaction familiale (discussion simple avec conjoint et enfants)

### Atteignable
Cet objectif est atteignable car:
- Même avec un emploi du temps chargé, 6 heures représentent moins de 6% de votre temps hebdomadaire éveillé
- Vous avez le soutien de votre conjoint
- Ces moments peuvent être planifiés à l'avance pour éviter les conflits d'agenda

### Réaliste
**Pertinence**: Cet objectif répond directement à votre motivation d'être plus présent pour votre famille. Des moments de qualité réguliers renforceront vos liens familiaux et réduiront votre sentiment de culpabilité.

### Temporel
**Calendrier**:
- Semaines 1-2: Établir 1 créneau fixe par semaine (2h)
- Semaines 3-4: Ajouter un 2ème créneau fixe (4h total)
- À partir de la semaine 5: Maintenir 3 créneaux fixes (6h total)

### Sous-objectifs
1. **Planification familiale** (Semaine 1): Discuter avec votre famille pour identifier les meilleurs moments et activités.
2. **Ritualisation** (Semaines 2-4): Créer des rituels familiaux spécifiques (ex: soirée jeux le vendredi, petit-déjeuner spécial le dimanche).
3. **Élimination des distractions** (Continu): Mettre en place une politique "zéro écran" pendant les moments familiaux (téléphone en mode avion, notifications désactivées).
4. **Implication des enfants** (Semaines 3-5): Permettre aux enfants de choisir certaines activités à tour de rôle pour renforcer leur engagement.
5. **Évaluation et ajustement** (Mensuel): Faire un point avec la famille pour évaluer la qualité des moments passés ensemble et ajuster si nécessaire.

### Obstacles potentiels et stratégies
1. **Urgences professionnelles pendant les créneaux familiaux**
   - Stratégie: Définir à l'avance ce qui constitue une véritable urgence méritant une interruption. Prévoir un système de "remplacement" si un créneau doit être annulé.
   
2. **Fatigue après une journée de travail intense**
   - Stratégie: Prévoir une courte période de transition (15-20 min) entre le travail et le temps familial pour décompresser. Privilégier des activités moins exigeantes les jours de grande fatigue.

3. **Difficulté à être mentalement présent**
   - Stratégie: Pratiquer des exercices de pleine conscience avant les moments familiaux. Se rappeler régulièrement l'importance de ces moments.

## Objectif SMART #3: Réintégrer une activité personnelle régulière

### Spécifique
**Reformulation**: Consacrer 2 heures par semaine à une activité personnelle qui me passionne (précisez laquelle: sport, hobby, etc.), de manière constante et protégée.

### Mesurable
**Indicateurs**:
- Nombre d'heures hebdomadaires consacrées à l'activité
- Régularité des sessions (objectif: pas plus d'une semaine manquée par mois)
- Niveau de satisfaction personnelle (auto-évaluation mensuelle sur 10)

### Atteignable
Cet objectif est atteignable car:
- 2 heures représentent un investissement minimal mais significatif
- Vous pouvez potentiellement intégrer cette activité tôt le matin ou pendant la pause déjeuner
- Le soutien de votre conjoint peut vous aider à libérer ce temps

**Ajustements suggérés**: Commencer par 1 heure hebdomadaire si 2 heures semblent difficiles à dégager immédiatement.

### Réaliste
**Pertinence**: Cet objectif répond à votre motivation de retrouver du temps pour vos passions. Prendre soin de vos besoins personnels vous permettra d'être plus épanoui et donc plus présent pour votre famille et plus efficace au travail.

### Temporel
**Calendrier**:
- Semaines 1-4: 1 heure par semaine, à jour fixe
- À partir de la semaine 5: 2 heures par semaine, réparties en 1 ou 2 sessions

### Sous-objectifs
1. **Sélection d'activité** (Semaine 1): Choisir une activité qui vous passionne vraiment et qui est réalisable dans votre contexte.
2. **Planification** (Semaine 1): Bloquer des créneaux fixes dans votre agenda pour cette activité.
3. **Préparation logistique** (Semaine 2): Rassembler l'équipement nécessaire, s'inscrire si besoin, éliminer les barrières pratiques.
4. **Engagement social** (Optionnel, semaines 5+): Rejoindre un groupe ou trouver un partenaire d'activité pour renforcer votre engagement.
5. **Évaluation des bénéfices** (Mensuel): Noter les effets positifs de cette activité sur votre bien-être général.

### Obstacles potentiels et stratégies
1. **Sentiment de culpabilité de prendre du temps pour soi**
   - Stratégie: Reconnaître que prendre soin de soi vous rend plus disponible émotionnellement pour les autres. Expliquer les bénéfices à votre famille.
   
2. **Difficulté à maintenir la régularité**
   - Stratégie: Mettre en place un système de suivi visuel (calendrier où vous cochez les sessions). Prévoir des sessions de "rattrapage" si vous manquez un créneau.

3. **Empiètement progressif du travail sur ce temps**
   - Stratégie: Traiter ces créneaux comme des "rendez-vous" non négociables dans votre agenda. Informer vos collègues de votre indisponibilité à ces moments.

## Plan d'action intégré

Pour maximiser vos chances de succès, voici comment intégrer ces trois objectifs SMART:

1. **Semaines 1-2**: Focus sur l'analyse de votre emploi du temps et la réduction initiale des heures de travail. Établir un premier créneau familial fixe et choisir votre activité personnelle.

2. **Semaines 3-4**: Commencer la délégation au travail, ajouter un deuxième créneau familial, et établir la régularité de votre activité personnelle (1h/semaine).

3. **Semaines 5-8**: Stabiliser votre temps de travail avec le blocage de temps, établir le troisième créneau familial, et augmenter votre activité personnelle à 2h/semaine.

4. **Mois 3 et au-delà**: Maintenir les habitudes établies, faire des évaluations mensuelles de chaque objectif, et ajuster si nécessaire.

**Conseil final**: Créez un tableau de bord simple pour suivre visuellement vos progrès sur ces trois objectifs. Célébrez les petites victoires et soyez indulgent avec vous-même lors des semaines plus difficiles.
