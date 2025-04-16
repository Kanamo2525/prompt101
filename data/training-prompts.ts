import type { Prompt } from "@/types/prompt"

export const trainingPrompts: Prompt[] = [
  {
    id: "training-needs-analysis",
    title: "Analyse des besoins de formation",
    description: "Prompt pour analyser les besoins de formation dans une organisation",
    content: `En tant qu'expert en formation et développement, analysez les besoins de formation suivants:
[DESCRIPTION DES COMPÉTENCES ACTUELLES ET OBJECTIFS]

Veuillez fournir:
1. Une analyse des écarts de compétences
2. Les domaines prioritaires pour la formation
3. Les méthodes de formation recommandées
4. Un calendrier suggéré pour le développement des compétences`,
    category: "training",
    difficulty: 2,
    variants: [
      {
        id: "training-needs-analysis-detailed",
        title: "Analyse détaillée des besoins de formation",
        content: `En tant qu'expert en formation et développement, réalisez une analyse approfondie des besoins de formation pour notre équipe:
[DESCRIPTION DÉTAILLÉE DE L'ÉQUIPE, COMPÉTENCES ACTUELLES ET OBJECTIFS]

Veuillez fournir:
1. Une analyse détaillée des écarts de compétences individuels et collectifs
2. Les domaines prioritaires pour la formation à court et long terme
3. Les méthodes de formation recommandées avec justification pour chacune
4. Un calendrier de développement des compétences sur 12 mois
5. Des indicateurs de performance pour mesurer l'efficacité de la formation`,
        difficulty: 3,
      },
    ],
    related: ["learning-path-design", "training-evaluation"],
  },
  {
    id: "learning-path-design",
    title: "Conception de parcours d'apprentissage",
    description: "Prompt pour créer un parcours d'apprentissage personnalisé",
    content: `Concevez un parcours d'apprentissage pour développer les compétences suivantes:
[LISTE DES COMPÉTENCES À DÉVELOPPER]

Pour un apprenant avec le profil suivant:
[DESCRIPTION DU PROFIL DE L'APPRENANT]

Veuillez inclure:
1. Les objectifs d'apprentissage spécifiques
2. Les ressources et activités d'apprentissage recommandées
3. Un calendrier progressif
4. Des points de contrôle pour évaluer les progrès`,
    category: "training",
    difficulty: 3,
    variants: [],
    related: ["training-needs-analysis", "training-evaluation"],
  },
  {
    id: "training-evaluation",
    title: "Évaluation de formation",
    description: "Prompt pour évaluer l'efficacité d'un programme de formation",
    content: `Évaluez l'efficacité du programme de formation suivant:
[DESCRIPTION DU PROGRAMME DE FORMATION]

En utilisant le modèle d'évaluation de Kirkpatrick, analysez:
1. Niveau 1: Réaction - Satisfaction des participants
2. Niveau 2: Apprentissage - Connaissances et compétences acquises
3. Niveau 3: Comportement - Application des apprentissages
4. Niveau 4: Résultats - Impact sur l'organisation

Proposez également des recommandations pour améliorer le programme.`,
    category: "training",
    difficulty: 3,
    variants: [],
    related: ["training-needs-analysis", "learning-path-design"],
  },
]
