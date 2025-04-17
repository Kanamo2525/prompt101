export const MatrixComponent = ({
  title = "Matrice",
  xAxisLabel = "Axe X",
  yAxisLabel = "Axe Y",
  topLeft = { title: "Haut Gauche", description: "Description", link: "" },
  topRight = { title: "Haut Droite", description: "Description", link: "" },
  bottomLeft = { title: "Bas Gauche", description: "Description", link: "" },
  bottomRight = { title: "Bas Droite", description: "Description", link: "" },
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <h2 className="text-xl font-bold mb-6 text-center">{title}</h2>

      <div className="relative">
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 font-medium text-gray-500">
          {yAxisLabel}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-bold">{topLeft.title}</h3>
            <p className="text-sm">{topLeft.description}</p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-bold">{topRight.title}</h3>
            <p className="text-sm">{topRight.description}</p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="font-bold">{bottomLeft.title}</h3>
            <p className="text-sm">{bottomLeft.description}</p>
          </div>

          <div className="bg-red-100 p-4 rounded-lg">
            <h3 className="font-bold">{bottomRight.title}</h3>
            <p className="text-sm">{bottomRight.description}</p>
          </div>
        </div>

        <div className="text-center mt-4 font-medium text-gray-500">{xAxisLabel}</div>
      </div>
    </div>
  )
}
