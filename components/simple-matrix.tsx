import { MatrixComponent } from "./matrix-component"

export function SimpleMatrix() {
  const quadrants = {
    topLeft: {
      title: "Génération de contenu",
      description: "Techniques adaptées pour créer du contenu original comme des textes, des idées ou des concepts.",
      techniques: [
        { name: "Zero-Shot Prompting", path: "/methodes/zero-shot" },
        { name: "Expert Role-Playing", path: "/methodes/expert-role-playing" },
      ],
    },
    topRight: {
      title: "Analyse et raisonnement",
      description:
        "Techniques pour résoudre des problèmes complexes nécessitant une analyse approfondie et un raisonnement logique.",
      techniques: [
        { name: "Chain-of-Thought", path: "/methodes/chain-of-thought" },
        { name: "Least-to-Most Prompting", path: "/methodes/least-to-most" },
      ],
    },
    bottomLeft: {
      title: "Transformation et adaptation",
      description:
        "Techniques pour modifier, adapter ou reformuler du contenu existant selon des critères spécifiques.",
      techniques: [
        { name: "One-Shot Prompting", path: "/methodes/one-shot" },
        { name: "Few-Shot Prompting", path: "/methodes/few-shot" },
      ],
    },
    bottomRight: {
      title: "Tâches spécialisées",
      description:
        "Techniques avancées pour des tâches spécifiques nécessitant une expertise ou une approche personnalisée.",
      techniques: [
        { name: "Contextual Augmentation", path: "/methodes/contextual-augmentation" },
        { name: "Multi-Prompting", path: "/methodes/multi-prompting" },
      ],
    },
  }

  return <MatrixComponent xAxisLabel="Type d'approche" yAxisLabel="Type de tâche" quadrants={quadrants} />
}
