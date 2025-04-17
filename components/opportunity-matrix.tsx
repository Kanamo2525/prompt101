import { MatrixComponent } from "./matrix-component"

interface MatrixQuadrantProps {
  id: string
  title: string
  description: string
  link?: string
}

interface OpportunityMatrixProps {
  title?: string
  xAxisLabel?: string
  yAxisLabel?: string
  topLeft?: MatrixQuadrantProps
  topRight?: MatrixQuadrantProps
  bottomLeft?: MatrixQuadrantProps
  bottomRight?: MatrixQuadrantProps
}

export const OpportunityMatrix = ({
  title = "Matrice d'opportunité des prompts",
  xAxisLabel = "Complexité",
  yAxisLabel = "Impact",
  topLeft = {
    id: "high-impact-low-complexity",
    title: "Impact élevé, Complexité faible",
    description: "Prompts simples avec un grand impact. Priorité maximale.",
    link: "/categories/education",
  },
  topRight = {
    id: "high-impact-high-complexity",
    title: "Impact élevé, Complexité élevée",
    description: "Prompts complexes mais à fort impact. Nécessitent plus d'effort mais valent l'investissement.",
    link: "/categories/time-management",
  },
  bottomLeft = {
    id: "low-impact-low-complexity",
    title: "Impact faible, Complexité faible",
    description: "Prompts simples avec un impact limité. Utiles pour des tâches quotidiennes.",
    link: "/methodes/zero-shot",
  },
  bottomRight = {
    id: "low-impact-high-complexity",
    title: "Impact faible, Complexité élevée",
    description: "Prompts complexes avec un impact limité. À éviter sauf si nécessaire.",
    link: "/methodes/chain-of-thought",
  },
}: OpportunityMatrixProps) => {
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
