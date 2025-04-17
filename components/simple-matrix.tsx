import { MatrixComponent } from "./matrix-component"

export const SimpleMatrix = () => {
  return (
    <MatrixComponent
      title="Matrice de sélection simplifiée"
      xAxisLabel="Type de tâche"
      yAxisLabel="Niveau d'expertise"
      topLeft={{
        title: "Expert - Tâche simple",
        description: "Zero-Shot ou One-Shot Prompting",
        link: "/methodes/zero-shot",
      }}
      topRight={{
        title: "Expert - Tâche complexe",
        description: "Chain-of-Thought ou Few-Shot Prompting",
        link: "/methodes/chain-of-thought",
      }}
      bottomLeft={{
        title: "Novice - Tâche simple",
        description: "Role-Playing ou Contextual Augmentation",
        link: "/methodes/expert-role-playing",
      }}
      bottomRight={{
        title: "Novice - Tâche complexe",
        description: "Iterative Prompting ou Least-to-Most Prompting",
        link: "/methodes/iterative-prompting",
      }}
    />
  )
}
