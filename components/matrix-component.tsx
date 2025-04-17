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
  },
  topRight: {
    title: "Quadrant 2",
    description: "Description du quadrant 2",
    techniques: [],
  },
  bottomLeft: {
    title: "Quadrant 3",
    description: "Description du quadrant 3",
    techniques: [],
  },
  bottomRight: {
    title: "Quadrant 4",
    description: "Description du quadrant 4",
    techniques: [],
  },
}

export function MatrixComponent({
  xAxisLabel = "Axe X",
  yAxisLabel = "Axe Y",
  quadrants = defaultQuadrants,
}: MatrixProps) {
  const [activeQuadrant, setActiveQuadrant] = useState<string | null>(null)

  const handleQuadrantClick = (quadrant: string) => {
    setActiveQuadrant(activeQuadrant === quadrant ? null : quadrant)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full aspect-square">
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
        <div className="absolute top-8 right-8 bottom-8 left-8 grid grid-cols-2 grid-rows-2 gap-1">
          {/* Quadrant supérieur gauche */}
          <div
            className={`bg-white border rounded-tl-lg p-4 cursor-pointer transition-all ${
              activeQuadrant === "topLeft" ? "shadow-lg scale-105 z-10" : "hover:shadow-md hover:scale-[1.02]"
            }`}
            onClick={() => handleQuadrantClick("topLeft")}
          >
            <h3 className="font-bold text-lg mb-2">{quadrants.topLeft?.title}</h3>
            {activeQuadrant === "topLeft" ? (
              <>
                <p className="text-sm text-gray-600 mb-3">{quadrants.topLeft?.description}</p>
                {quadrants.topLeft?.techniques && quadrants.topLeft.techniques.length > 0 && (
                  <div className="mt-2">
                    <h4 className="font-medium text-sm mb-1">Techniques recommandées:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {quadrants.topLeft.techniques.map((technique, index) => (
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
            className={`bg-white border rounded-tr-lg p-4 cursor-pointer transition-all ${
              activeQuadrant === "topRight" ? "shadow-lg scale-105 z-10" : "hover:shadow-md hover:scale-[1.02]"
            }`}
            onClick={() => handleQuadrantClick("topRight")}
          >
            <h3 className="font-bold text-lg mb-2">{quadrants.topRight?.title}</h3>
            {activeQuadrant === "topRight" ? (
              <>
                <p className="text-sm text-gray-600 mb-3">{quadrants.topRight?.description}</p>
                {quadrants.topRight?.techniques && quadrants.topRight.techniques.length > 0 && (
                  <div className="mt-2">
                    <h4 className="font-medium text-sm mb-1">Techniques recommandées:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {quadrants.topRight.techniques.map((technique, index) => (
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
            className={`bg-white border rounded-bl-lg p-4 cursor-pointer transition-all ${
              activeQuadrant === "bottomLeft" ? "shadow-lg scale-105 z-10" : "hover:shadow-md hover:scale-[1.02]"
            }`}
            onClick={() => handleQuadrantClick("bottomLeft")}
          >
            <h3 className="font-bold text-lg mb-2">{quadrants.bottomLeft?.title}</h3>
            {activeQuadrant === "bottomLeft" ? (
              <>
                <p className="text-sm text-gray-600 mb-3">{quadrants.bottomLeft?.description}</p>
                {quadrants.bottomLeft?.techniques && quadrants.bottomLeft.techniques.length > 0 && (
                  <div className="mt-2">
                    <h4 className="font-medium text-sm mb-1">Techniques recommandées:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {quadrants.bottomLeft.techniques.map((technique, index) => (
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
            className={`bg-white border rounded-br-lg p-4 cursor-pointer transition-all ${
              activeQuadrant === "bottomRight" ? "shadow-lg scale-105 z-10" : "hover:shadow-md hover:scale-[1.02]"
            }`}
            onClick={() => handleQuadrantClick("bottomRight")}
          >
            <h3 className="font-bold text-lg mb-2">{quadrants.bottomRight?.title}</h3>
            {activeQuadrant === "bottomRight" ? (
              <>
                <p className="text-sm text-gray-600 mb-3">{quadrants.bottomRight?.description}</p>
                {quadrants.bottomRight?.techniques && quadrants.bottomRight.techniques.length > 0 && (
                  <div className="mt-2">
                    <h4 className="font-medium text-sm mb-1">Techniques recommandées:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {quadrants.bottomRight.techniques.map((technique, index) => (
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
