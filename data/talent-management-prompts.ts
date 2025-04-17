import type { Prompt } from "@/types/prompt"

export const talentManagementPrompts: Prompt[] = [
  {
    id: "talent-1",
    title: "Plan de développement des compétences",
    description: "Créer un plan de développement personnalisé pour un employé",
    content: `En tant que responsable du développement des talents, crée un plan de développement personnalisé pour un employé avec le profil suivant:
- Poste actuel: [POSTE]
- Expérience: [ANNÉES D'EXPÉRIENCE]
- Compétences fortes: [COMPÉTENCES FORTES]
- Compétences à développer: [COMPÉTENCES À DÉVELOPPER]
- Objectifs de carrière: [OBJECTIFS]

Le plan doit inclure:
1. Des objectifs d'apprentissage spécifiques
2. Des ressources et formations recommandées
3. Des projets ou missions pour mettre en pratique
4. Un calendrier sur 6 mois
5. Des indicateurs de progrès mesurables`,
    category: "talent-management",
    difficulty: 3,
    popularity: 92,
    tags: ["développement", "compétences", "carrière"],
    variants: [
      {
        id: "talent-1-v1",
        title: "Version leadership",
        content: `Crée un plan de développement axé sur les compétences de leadership pour un [POSTE] qui souhaite évoluer vers un rôle de management.`,
      },
    ],
  },
  {
    id: "talent-2",
    title: "Feedback constructif",
    description: "Formuler un feedback constructif pour un collaborateur",
    content: `Aide-moi à formuler un feedback constructif pour un collaborateur concernant [SITUATION/COMPORTEMENT]. 

Le feedback doit:
- Être spécifique et factuel
- Se concentrer sur le comportement, pas la personne
- Inclure l'impact de ce comportement
- Proposer des pistes d'amélioration concrètes
- Se terminer sur une note positive

Propose-moi deux versions: une pour un échange oral et une pour un email.`,
    category: "talent-management",
    difficulty: 2,
    popularity: 88,
    tags: ["feedback", "communication", "management"],
    variants: [
      {
        id: "talent-2-v1",
        title: "Feedback de performance",
        content: `Aide-moi à rédiger un feedback équilibré pour une évaluation annuelle de performance, mettant en lumière à la fois les réussites et les axes d'amélioration de [NOM] au poste de [POSTE].`,
      },
      {
        id: "talent-2-v2",
        title: "Feedback de recadrage",
        content: `Aide-moi à formuler un feedback de recadrage constructif suite à [SITUATION PROBLÉMATIQUE] avec un collaborateur, tout en préservant la relation de travail et en l'encourageant à s'améliorer.`,
      },
    ],
  },
]
