import type { Prompt } from "@/types/prompt"

export const talentManagementPrompts: Prompt[] = [
  {
    id: "skills-development-plan",
    title: "Plan de développement des compétences",
    description:
      "Un prompt pour créer un plan de développement personnalisé pour aider les employés à acquérir de nouvelles compétences.",
    content: `En tant que conseiller en développement professionnel, crée un plan de développement des compétences sur 6 mois pour un employé avec le profil suivant :

Poste actuel : [POSTE]
Niveau d'expérience : [ANNÉES D'EXPÉRIENCE]
Compétences actuelles : [COMPÉTENCES ACTUELLES]
Compétences à développer : [COMPÉTENCES CIBLES]
Objectifs de carrière : [OBJECTIFS]

Pour chaque compétence à développer, inclus :
1. Des objectifs d'apprentissage spécifiques et mesurables
2. Des ressources recommandées (formations, livres, cours en ligne)
3. Des activités pratiques pour renforcer l'apprentissage
4. Des étapes intermédiaires avec des délais
5. Des méthodes pour mesurer les progrès

Termine par un calendrier récapitulatif des actions sur 6 mois.`,
    category: "talent-management",
    difficulty: "Modéré",
    popularity: 87,
    tags: ["développement", "formation", "compétences", "carrière", "RH"],
    variants: [
      {
        id: "technical-skills-plan",
        title: "Plan de développement technique",
        description: "Version spécifique pour les compétences techniques en informatique",
        content: `En tant que conseiller en développement technique, crée un plan de développement des compétences sur 6 mois pour un développeur avec le profil suivant :

Poste actuel : [POSTE TECHNIQUE]
Niveau d'expérience : [ANNÉES D'EXPÉRIENCE]
Stack technique actuelle : [TECHNOLOGIES MAÎTRISÉES]
Technologies à apprendre : [TECHNOLOGIES CIBLES]
Objectifs de carrière : [OBJECTIFS]

Pour chaque technologie à développer, inclus :
1. Des objectifs d'apprentissage spécifiques et mesurables
2. Des ressources recommandées (documentation, tutoriels, cours en ligne, certifications)
3. Des projets pratiques pour appliquer les connaissances
4. Un parcours d'apprentissage progressif avec des jalons
5. Des méthodes pour valider les acquis (code reviews, projets personnels)

Termine par un calendrier récapitulatif des actions sur 6 mois avec une estimation du temps d'apprentissage hebdomadaire nécessaire.`,
      },
      {
        id: "leadership-development-plan",
        title: "Plan de développement du leadership",
        description: "Version axée sur le développement des compétences de leadership",
        content: `En tant que coach exécutif, crée un plan de développement des compétences de leadership sur 6 mois pour un manager avec le profil suivant :

Poste actuel : [POSTE MANAGÉRIAL]
Niveau d'expérience en management : [ANNÉES D'EXPÉRIENCE]
Taille de l'équipe : [NOMBRE DE PERSONNES]
Compétences de leadership actuelles : [FORCES]
Compétences de leadership à développer : [AXES D'AMÉLIORATION]
Objectifs de carrière : [OBJECTIFS]

Pour chaque compétence de leadership à développer, inclus :
1. Des objectifs de développement spécifiques et mesurables
2. Des ressources recommandées (livres, formations, mentoring)
3. Des exercices pratiques et situations d'application
4. Des opportunités de feedback et d'auto-évaluation
5. Des indicateurs de progrès

Termine par un calendrier récapitulatif des actions sur 6 mois et des conseils pour intégrer ce développement dans la pratique quotidienne du management.`,
      },
    ],
  },
  {
    id: "constructive-feedback",
    title: "Feedback constructif",
    description: "Un prompt pour générer un feedback constructif et actionnable pour les évaluations de performance.",
    content: `Aide-moi à formuler un feedback constructif pour un membre de mon équipe. Voici les informations :

Contexte : [CONTEXTE DE L'ÉVALUATION]
Points forts observés : [POINTS FORTS]
Axes d'amélioration : [AXES D'AMÉLIORATION]
Objectifs précédents : [OBJECTIFS FIXÉS]
Résultats atteints : [RÉSULTATS OBTENUS]

Génère un feedback structuré qui :
1. Commence par reconnaître les réussites et points forts spécifiques
2. Aborde les axes d'amélioration de manière constructive et non accusatoire
3. Utilise des exemples concrets pour illustrer les points
4. Propose des actions spécifiques pour progresser
5. Se termine sur une note positive et encourageante

Le ton doit être professionnel, bienveillant et orienté vers la croissance professionnelle.`,
    category: "talent-management",
    difficulty: "Modéré",
    popularity: 92,
    tags: ["feedback", "évaluation", "performance", "management", "communication"],
    variants: [
      {
        id: "performance-review-feedback",
        title: "Feedback d'évaluation annuelle",
        description: "Version spécifique pour les entretiens annuels d'évaluation",
        content: `En tant que responsable RH, aide-moi à rédiger un feedback d'évaluation annuelle complet pour un collaborateur. Voici les informations :

Poste du collaborateur : [POSTE]
Ancienneté : [ANCIENNETÉ]
Objectifs annuels fixés : [OBJECTIFS]
Réalisations principales : [RÉALISATIONS]
Points forts démontrés : [POINTS FORTS]
Axes de développement identifiés : [AXES DE DÉVELOPPEMENT]
Évaluation globale : [ÉVALUATION] (Dépasse les attentes / Répond aux attentes / Partiellement satisfaisant / Insuffisant)

Génère une évaluation structurée qui :
1. Résume la performance globale de l'année
2. Détaille les réalisations principales avec impact mesurable
3. Souligne les compétences et comportements positifs observés
4. Aborde les axes de développement de manière constructive
5. Propose des objectifs SMART pour l'année à venir
6. Inclut un plan de développement avec des actions concrètes
7. Se termine par une conclusion qui reflète l'évaluation globale

Le ton doit être professionnel, factuel et équilibré.`,
      },
      {
        id: "corrective-feedback",
        title: "Feedback de recadrage",
        description: "Version pour aborder un problème de performance ou de comportement",
        content: `En tant que manager, aide-moi à préparer un feedback de recadrage constructif suite à une situation problématique. Voici les informations :

Contexte : [DESCRIPTION DE LA SITUATION]
Comportement/performance problématique : [PROBLÈME OBSERVÉ]
Impact sur l'équipe/l'entreprise : [CONSÉQUENCES]
Attentes non satisfaites : [ATTENTES]
Historique (premier incident ou récurrent) : [HISTORIQUE]

Génère un script de feedback structuré qui :
1. Débute par une ouverture neutre qui pose le cadre de la discussion
2. Décrit factuellement le comportement ou la performance problématique
3. Explique l'impact concret sur l'équipe, les clients ou l'entreprise
4. Clarifie les attentes et standards requis
5. Invite la personne à partager sa perspective
6. Propose un plan d'action correctif clair et des ressources si nécessaire
7. Établit un suivi et des conséquences en cas de non-amélioration
8. Se termine par un encouragement et une expression de confiance

Le ton doit être ferme mais respectueux, axé sur le comportement et non la personne, et orienté vers l'amélioration future.`,
      },
    ],
  },
  {
    id: "recruitment-interview",
    title: "Entretien de recrutement",
    description: "Un prompt pour générer des questions pertinentes et structurées pour un entretien de recrutement.",
    content: `Aide-moi à préparer un guide d'entretien de recrutement pour le poste suivant :

Intitulé du poste : [INTITULÉ]
Niveau d'expérience requis : [NIVEAU]
Compétences techniques recherchées : [COMPÉTENCES TECHNIQUES]
Compétences comportementales importantes : [COMPÉTENCES COMPORTEMENTALES]
Contexte de l'équipe : [CONTEXTE]

Génère un guide d'entretien structuré qui comprend :

1. Une introduction de 2-3 minutes pour présenter l'entreprise et le poste
2. 5 questions techniques pertinentes pour évaluer les compétences clés
3. 5 questions comportementales basées sur la méthode STAR
4. 3 questions pour évaluer l'adéquation culturelle avec l'entreprise
5. 2 questions pour évaluer les motivations du candidat
6. 3 questions à poser en fin d'entretien pour permettre au candidat de s'exprimer

Pour chaque question, inclus :
- La question elle-même
- Ce que tu cherches à évaluer
- Des exemples de bonnes et mauvaises réponses
- Des questions de suivi potentielles`,
    category: "talent-management",
    difficulty: "Facile",
    popularity: 95,
    tags: ["recrutement", "entretien", "sélection", "RH", "questions"],
    variants: [
      {
        id: "technical-interview",
        title: "Entretien technique",
        description: "Version spécifique pour les entretiens techniques en informatique",
        content: `En tant que recruteur technique, aide-moi à préparer un guide d'entretien technique pour le poste suivant :

Intitulé du poste : [POSTE TECHNIQUE]
Niveau d'expérience requis : [NIVEAU]
Technologies principales : [TECHNOLOGIES]
Méthodologies de développement : [MÉTHODOLOGIES]
Contexte du projet/équipe : [CONTEXTE]

Génère un guide d'entretien technique structuré qui comprend :

1. Une brève introduction pour présenter l'équipe technique et les projets
2. 5 questions techniques de base pour vérifier les connaissances fondamentales
3. 3 problèmes de codage ou d'architecture à résoudre (avec différents niveaux de difficulté)
4. 2 questions sur des expériences passées de résolution de problèmes techniques
5. 3 questions sur la collaboration technique et le travail en équipe
6. 2 questions sur l'apprentissage continu et la veille technologique

Pour chaque question ou problème, inclus :
- L'énoncé précis
- Ce que tu cherches à évaluer comme compétence
- Des critères d'évaluation des réponses (débutant/intermédiaire/avancé)
- Des indices à donner si le candidat est bloqué
- Des questions d'approfondissement pour les candidats plus expérimentés

Termine par une section sur la façon d'évaluer globalement les compétences techniques du candidat.`,
      },
    ],
  },
]

export default talentManagementPrompts
