import { MatrixComponent } from "./matrix-component"

interface SimpleMatrixProps {
  title?: string
  xAxisLabel?: string
  yAxisLabel?: string
  topLeft?: {
    id: string
    title: string
    description: string
    link?: string
  }
  topRight?: {
    id: string
    title: string
    description: string
    link?: string
  }
  bottomLeft?: {
    id: string
    title: string
    description: string
    link?: string
  }
  bottomRight?: {
    id: string
    title: string
    description: string
    link?: string
  }
}

export const SimpleMatrix = ({
  title = "Matrice de sélection simplifiée",
  xAxisLabel = "Type de tâche",
  yAxisLabel = "Niveau d'expertise",
  topLeft = {
    id: "expert-simple",
    title: "Expert - Tâche simple",
    description: "Zero-Shot ou One-Shot Prompting",
    link: "/methodes/zero-shot",
  },
  topRight = {
    id: "expert-complex",
    title: "Expert - Tâche complexe",
    description: "Chain-of-Thought ou Few-Shot Prompting",
    link: "/methodes/chain-of-thought",
  },
  bottomLeft = {
    id: "novice-simple",
    title: "Novice - Tâche simple",
    description: "Role-Playing ou Contextual Augmentation",
    link: "/methodes/expert-role-playing",
  },
  bottomRight = {
    id: "novice-complex",
    title: "Novice - Tâche complexe",
    description: "Iterative Prompting ou Least-to-Most Prompting",
    link: "/methodes/iterative-prompting",
  },
}: SimpleMatrixProps) => {
  return (
    <MatrixComponent
      title={title}
      xAxisLabel={xAxisLabel}
      yAxisLabel={yAxisLabel}
      topLeft={topLeft}
      topRight={topRight}
      bottomLeft={bottomLeft}
      bottomRight={bottomRight}
    />
  )
}
