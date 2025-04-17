import type { Prompt } from "@/types/prompt"

export const recruitmentPrompts: Prompt[] = [
  {
    id: "recruitment-1",
    title: "Description de poste attractive",
    description: "Générer une description de poste qui attire les meilleurs talents",
    text: `En tant qu'expert en recrutement, rédige une description de poste attractive pour le poste de [POSTE] dans le secteur de [SECTEUR].

Le candidat idéal doit avoir:
- Expérience: [ANNÉES D'EXPÉRIENCE]
- Compétences: [COMPÉTENCES PRINCIPALES]
- Qualités: [QUALITÉS RECHERCHÉES]

La description doit inclure:
1. Un titre accrocheur
2. Une présentation de l'entreprise
3. Une description du poste et des responsabilités
4. Une liste des compétences et qualités requises
5. Une proposition de valeur pour le candidat (avantages, culture, etc.)`,
    category: "recruitment",
    difficulty: 2,
    popularity: 95,
    tags: ["recrutement", "description de poste", "attractivité"],
    variants: [
      {
        id: "recruitment-1-v1",
        title: "Version courte",
        content: `Rédige une description de poste concise et percutante pour un [POSTE] avec [ANNÉES] d'expérience.`,
      },
      {
        id: "recruitment-1-v2",
        title: "Version détaillée",
        content: `En tant que spécialiste du recrutement, élabore une description de poste détaillée pour un [POSTE] en mettant en avant les opportunités de carrière et les avantages offerts par notre entreprise.`,
      },
    ],
  },
  {
    id: "recruitment-2",
    title: "Questions d'entretien pertinentes",
    description: "Suggérer des questions d'entretien pour évaluer les candidats",
    content: `Propose une liste de questions d'entretien pertinentes pour évaluer un candidat au poste de [POSTE].

Les questions doivent permettre d'évaluer:
- Les compétences techniques
- L'expérience
- Les qualités personnelles
- La motivation
- L'adéquation avec la culture de l'entreprise

Organise les questions par catégorie et indique le but de chaque question.`,
    category: "recruitment",
    difficulty: 3,
    popularity: 90,
    tags: ["entretien", "questions", "évaluation"],
    variants: [
      {
        id: "recruitment-2-v1",
        title: "Questions comportementales",
        content: `Propose une série de questions comportementales pour évaluer les compétences interpersonnelles et le leadership d'un candidat au poste de [POSTE].`,
      },
      {
        id: "recruitment-2-v2",
        title: "Questions techniques",
        content: `Élabore une liste de questions techniques pointues pour évaluer l'expertise d'un candidat senior au poste de [POSTE] dans le domaine de [DOMAINE TECHNIQUE].`,
      },
    ],
  },
]
