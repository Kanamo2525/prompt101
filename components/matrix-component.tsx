import Link from "next/link"

interface MatrixQuadrantProps {
  id: string
  title: string
  description: string
  link?: string
}

interface MatrixComponentProps {
  title?: string
  xAxisLabel?: string
  yAxisLabel?: string
  topLeft?: MatrixQuadrantProps
  topRight?: MatrixQuadrantProps
  bottomLeft?: MatrixQuadrantProps
  bottomRight?: MatrixQuadrantProps
}

export const MatrixComponent = ({
  title = "Matrice",
  xAxisLabel = "Axe X",
  yAxisLabel = "Axe Y",
  topLeft = {
    id: "top-left",
    title: "Quadrant supérieur gauche",
    description: "Description du quadrant supérieur gauche",
  },
  topRight = {
    id: "top-right",
    title: "Quadrant supérieur droit",
    description: "Description du quadrant supérieur droit",
  },
  bottomLeft = {
    id: "bottom-left",
    title: "Quadrant inférieur gauche",
    description: "Description du quadrant inférieur gauche",
  },
  bottomRight = {
    id: "bottom-right",
    title: "Quadrant inférieur droit",
    description: "Description du quadrant inférieur droit",
  },
}: MatrixComponentProps) => {
  const renderQuadrant = (quadrant: MatrixQuadrantProps) => {
    const content = (
      <div className="p-4 h-full">
        <h3 className="font-bold text-lg mb-2">{quadrant.title}</h3>
        <p className="text-sm text-gray-600">{quadrant.description}</p>
      </div>
    )

    if (quadrant.link) {
      return (
        <Link href={quadrant.link} className="block h-full hover:bg-gray-50 transition-colors">
          {content}
        </Link>
      )
    }

    return content
  }

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      {title && <h2 className="text-xl font-bold mb-6 text-center">{title}</h2>}

      <div className="relative">
        {/* Y-axis label */}
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 font-medium text-gray-500">
          {yAxisLabel}
        </div>

        <div className="grid grid-cols-2 border border-gray-300 rounded-lg overflow-hidden">
          {/* Top row */}
          <div className="border-b border-r border-gray-300 min-h-[200px]">{renderQuadrant(topLeft)}</div>
          <div className="border-b border-gray-300 min-h-[200px]">{renderQuadrant(topRight)}</div>

          {/* Bottom row */}
          <div className="border-r border-gray-300 min-h-[200px]">{renderQuadrant(bottomLeft)}</div>
          <div className="min-h-[200px]">{renderQuadrant(bottomRight)}</div>
        </div>

        {/* X-axis label */}
        <div className="text-center mt-4 font-medium text-gray-500">{xAxisLabel}</div>
      </div>
    </div>
  )
}
