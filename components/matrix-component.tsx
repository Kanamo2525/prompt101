"use client"

import Link from "next/link"
import { useState } from "react"

interface QuadrantContent {
  title: string
  description: string
  techniques?: Array<{
    name: string
    path: string
  }>
  color?: string
}

interface MatrixProps {
  xAxisLabel?: string
  yAxisLabel?: string
  quadrants?: {
    topLeft?: QuadrantContent
    topRight?: QuadrantContent
    bottomLeft?: QuadrantContent
    bottomRight?: QuadrantContent
  }
}

// Valeurs par défaut pour éviter les erreurs
const defaultQuadrants = {
  topLeft: {
    title: "Quadrant 1",
    description: "Description du quadrant 1",
    techniques: [],
    color: "bg-blue-50",
  },
  topRight: {
    title: "Quadrant 2",
    description: "Description du quadrant 2",
    techniques: [],
    color: "bg-green-50",
  },
  bottomLeft: {
    title: "Quadrant 3",
    description: "Description du quadrant 3",
    techniques: [],
    color: "bg-yellow-50",
  },
  bottomRight: {
    title: "Quadrant 4",
    description: "Description du quadrant 4",
    techniques: [],
    color: "bg-purple-50",
  },
}

export function MatrixComponent({
  xAxisLabel = "Axe X",
  yAxisLabel = "Axe Y",
  quadrants = defaultQuadrants,
}: MatrixProps) {
  const [activeQuadrant, setActiveQuadrant] = useState<string | null>(null)

  // Assigner des couleurs par défaut si elles ne sont pas spécifiées
  const quadrantsWithColors = {
    topLeft: {
      ...defaultQuadrants.topLeft,
      ...quadrants.topLeft,
      color: quadrants.topLeft?.color || "bg-blue-50",
    },
    topRight: {
      ...defaultQuadrants.topRight,
      ...quadrants.topRight,
      color: quadrants.topRight?.color || "bg-green-50",
    },
    bottomLeft: {
      ...defaultQuadrants.bottomLeft,
      ...quadrants.bottomLeft,
      color: quadrants.bottomLeft?.color || "bg-yellow-50",
    },
    bottomRight: {
      ...defaultQuadrants.bottomRight,
      ...quadrants.bottomRight,
      color: quadrants.bottomRight?.color || "bg-purple-50",
    },
  }

  const handleQuadrantClick = (quadrant: string) => {
    setActiveQuadrant(activeQuadrant === quadrant ? null : quadrant)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full aspect-square max-h-[600px]">
        {/* Axe Y (vertical) */}
        <div className="absolute left-0 top-0 h-full flex items-center">
          <div className="transform -rotate-90 origin-center whitespace-nowrap text-sm font-medium text-gray-600">
            {yAxisLabel}
          </div>
        </div>

        {/* Axe X (horizontal) */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <div className="text-sm font-medium text-gray-600">{xAxisLabel}</div>
        </div>

        {/* Grille de la matrice */}
        <div className="absolute top-8 right-8 bottom-8 left-8 grid grid-cols-2 grid-rows-2 gap-2">
          {/* Quadrant supérieur gauche */}
          <div
            className={`${quadrantsWithColors.topLeft.color} border rounded-tl-lg p-4 cursor-pointer transition-all ${
              activeQuadrant === "topLeft" ? "shadow-lg scale-105 z-10" : "hover:shadow-md hover:scale-[1.02]"
            }`}
            onClick={() => handleQuadrantClick("topLeft")}
          >
            <h3 className="font-bold text-lg mb-2">{quadrantsWithColors.topLeft.title}</h3>
            {activeQuadrant === "topLeft" ? (
              <>
                <p className="text-sm text-gray-600 mb-3">{quadrantsWithColors.topLeft.description}</p>
                {quadrantsWithColors.topLeft.techniques && quadrantsWithColors.topLeft.techniques.length > 0 && (
                  <div className="mt-2">
                    <h4 className="font-medium text-sm mb-1">Techniques recommandées:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {quadrantsWithColors.topLeft.techniques.map((technique, index) => (
                        <li key={index} className="mb-1">
                          <Link href={technique.path} className="text-blue-600 hover:underline">
                            {technique.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <p className="text-xs text-gray-500">Cliquez pour plus d'infos</p>
            )}
          </div>

          {/* Quadrant supérieur droit */}
          <div
            className={`${quadrantsWithColors.topRight.color} border rounded-tr-lg p-4 cursor-pointer transition-all ${
              activeQuadrant === "topRight" ? "shadow-lg scale-105 z-10" : "hover:shadow-md hover:scale-[1.02]"
            }`}
            onClick={() => handleQuadrantClick("topRight")}
          >
            <h3 className="font-bold text-lg mb-2">{quadrantsWithColors.topRight.title}</h3>
            {activeQuadrant === "topRight" ? (
              <>
                <p className="text-sm text-gray-600 mb-3">{quadrantsWithColors.topRight.description}</p>
                {quadrantsWithColors.topRight.techniques && quadrantsWithColors.topRight.techniques.length > 0 && (
                  <div className="mt-2">
                    <h4 className="font-medium text-sm mb-1">Techniques recommandées:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {quadrantsWithColors.topRight.techniques.map((technique, index) => (
                        <li key={index} className="mb-1">
                          <Link href={technique.path} className="text-blue-600 hover:underline">
                            {technique.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <p className="text-xs text-gray-500">Cliquez pour plus d'infos</p>
            )}
          </div>

          {/* Quadrant inférieur gauche */}
          <div
            className={`${quadrantsWithColors.bottomLeft.color} border rounded-bl-lg p-4 cursor-pointer transition-all ${
              activeQuadrant === "bottomLeft" ? "shadow-lg scale-105 z-10" : "hover:shadow-md hover:scale-[1.02]"
            }`}
            onClick={() => handleQuadrantClick("bottomLeft")}
          >
            <h3 className="font-bold text-lg mb-2">{quadrantsWithColors.bottomLeft.title}</h3>
            {activeQuadrant === "bottomLeft" ? (
              <>
                <p className="text-sm text-gray-600 mb-3">{quadrantsWithColors.bottomLeft.description}</p>
                {quadrantsWithColors.bottomLeft.techniques && quadrantsWithColors.bottomLeft.techniques.length > 0 && (
                  <div className="mt-2">
                    <h4 className="font-medium text-sm mb-1">Techniques recommandées:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {quadrantsWithColors.bottomLeft.techniques.map((technique, index) => (
                        <li key={index} className="mb-1">
                          <Link href={technique.path} className="text-blue-600 hover:underline">
                            {technique.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <p className="text-xs text-gray-500">Cliquez pour plus d'infos</p>
            )}
          </div>

          {/* Quadrant inférieur droit */}
          <div
            className={`${quadrantsWithColors.bottomRight.color} border rounded-br-lg p-4 cursor-pointer transition-all ${
              activeQuadrant === "bottomRight" ? "shadow-lg scale-105 z-10" : "hover:shadow-md hover:scale-[1.02]"
            }`}
            onClick={() => handleQuadrantClick("bottomRight")}
          >
            <h3 className="font-bold text-lg mb-2">{quadrantsWithColors.bottomRight.title}</h3>
            {activeQuadrant === "bottomRight" ? (
              <>
                <p className="text-sm text-gray-600 mb-3">{quadrantsWithColors.bottomRight.description}</p>
                {quadrantsWithColors.bottomRight.techniques &&
                  quadrantsWithColors.bottomRight.techniques.length > 0 && (
                    <div className="mt-2">
                      <h4 className="font-medium text-sm mb-1">Techniques recommandées:</h4>
                      <ul className="list-disc list-inside text-sm">
                        {quadrantsWithColors.bottomRight.techniques.map((technique, index) => (
                          <li key={index} className="mb-1">
                            <Link href={technique.path} className="text-blue-600 hover:underline">
                              {technique.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </>
            ) : (
              <p className="text-xs text-gray-500">Cliquez pour plus d'infos</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
