import { MatrixComponent } from "./matrix-component"

export function OpportunityMatrix() {
  const quadrants = {
    topLeft: {
      title: "Tâches simples pour débutants",
      description:
        "Pour les tâches simples et les utilisateurs débutants, privilégiez des techniques de prompting directes et faciles à mettre en œuvre.",
      techniques: [
        { name: "Zero-Shot Prompting", path: "/methodes/zero-shot" },
        { name: "One-Shot Prompting", path: "/methodes/one-shot" },
      ],
      color: "bg-green-50",
    },
    topRight: {
      title: "Tâches simples pour experts",
      description:
        "Même pour des tâches simples, les experts peuvent utiliser des techniques plus avancées pour obtenir des résultats plus précis et personnalisés.",
      techniques: [
        { name: "Few-Shot Prompting", path: "/methodes/few-shot" },
        { name: "Expert Role-Playing", path: "/methodes/expert-role-playing" },
      ],
      color: "bg-blue-50",
    },
    bottomLeft: {
      title: "Tâches complexes pour débutants",
      description:
        "Pour les tâches complexes, même les débutants peuvent obtenir de bons résultats en utilisant des techniques qui guident le modèle étape par étape.",
      techniques: [
        { name: "Chain-of-Thought", path: "/methodes/chain-of-thought" },
        { name: "Least-to-Most Prompting", path: "/methodes/least-to-most" },
      ],
      color: "bg-yellow-50",
    },
    bottomRight: {
      title: "Tâches complexes pour experts",
      description:
        "Les tâches les plus complexes nécessitent des techniques avancées et une bonne compréhension du fonctionnement des modèles d'IA.",
      techniques: [
        { name: "Contextual Augmentation", path: "/methodes/contextual-augmentation" },
        { name: "Iterative Prompting", path: "/methodes/iterative-prompting" },
        { name: "Multi-Prompting", path: "/methodes/multi-prompting" },
      ],
      color: "bg-purple-50",
    },
  }

  return (
    <MatrixComponent
      xAxisLabel="Niveau d'expertise de l'utilisateur"
      yAxisLabel="Complexité de la tâche"
      quadrants={quadrants}
    />
  )
}
