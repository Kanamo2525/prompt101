import type { Prompt } from "@/types/prompt"

export const recruitmentPrompts: Prompt[] = [
  {
    id: "job-description-optimization",
    title: "Optimisation de description de poste",
    description: "Prompt pour optimiser une description de poste afin d'attirer les meilleurs candidats",
    content: `Optimisez la description de poste suivante pour la rendre plus attractive et inclusive:
[DESCRIPTION DE POSTE ACTUELLE]

Veuillez:
1. Clarifier les responsabilités principales
2. Mettre en évidence les avantages uniques du poste
3. Utiliser un langage inclusif
4. Inclure des mots-clés pertinents pour le référencement
5. Structurer la description de manière claire et engageante`,
    category: "recruitment",
    difficulty: 2,
    variants: [
      {
        id: "job-description-optimization-tech",
        title: "Optimisation de description de poste tech",
        content: `Optimisez cette description de poste technique pour attirer des talents diversifiés dans le domaine de la technologie:
[DESCRIPTION DE POSTE TECHNIQUE ACTUELLE]

Veuillez:
1. Clarifier les responsabilités techniques principales sans jargon excessif
2. Distinguer clairement les compétences requises des compétences souhaitées
3. Mettre en évidence la culture d'entreprise et les opportunités de développement
4. Utiliser un langage inclusif évitant les biais de genre ou d'âge
5. Inclure des mots-clés techniques pertinents pour le référencement
6. Structurer la description de manière claire et engageante pour les profils techniques`,
        difficulty: 3,
      },
    ],
    related: ["interview-questions-generator", "candidate-evaluation"],
  },
  {
    id: "interview-questions-generator",
    title: "Générateur de questions d'entretien",
    description: "Prompt pour générer des questions d'entretien pertinentes basées sur un poste",
    content: `Générez une liste de questions d'entretien pour le poste suivant:
[TITRE ET DESCRIPTION DU POSTE]

Veuillez inclure:
1. 5 questions techniques spécifiques au poste
2. 3 questions comportementales pour évaluer l'adéquation culturelle
3. 2 questions basées sur des scénarios pour évaluer la résolution de problèmes
4. 2 questions pour évaluer les compétences en communication et travail d'équipe
5. 1 question pour évaluer la motivation du candidat`,
    category: "recruitment",
    difficulty: 2,
    variants: [],
    related: ["job-description-optimization", "candidate-evaluation"],
  },
  {
    id: "candidate-evaluation",
    title: "Évaluation de candidat",
    description: "Prompt pour analyser objectivement les forces et faiblesses d'un candidat",
    content: `Analysez les forces et faiblesses du candidat suivant par rapport au poste:
[RÉSUMÉ DU CANDIDAT]

Pour le poste:
[DESCRIPTION DU POSTE]

Veuillez fournir:
1. Une analyse des compétences techniques correspondantes
2. Une évaluation de l'expérience pertinente
3. Une analyse de l'adéquation culturelle potentielle
4. Des domaines potentiels de développement
5. Une recommandation globale (Très recommandé / Recommandé / À considérer / Non recommandé)`,
    category: "recruitment",
    difficulty: 3,
    variants: [],
    related: ["job-description-optimization", "interview-questions-generator"],
  },
]
