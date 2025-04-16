import { Star } from "lucide-react"

import type { DifficultyLevel } from "@/types/prompt"

interface DifficultyStarsProps {
  level: DifficultyLevel
}

export function DifficultyStars({ level }: DifficultyStarsProps) {
  const getStars = () => {
    switch (level) {
      case "Facile":
        return (
          <div className="flex">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <Star className="w-4 h-4 text-gray-300" />
            <Star className="w-4 h-4 text-gray-300" />
          </div>
        )
      case "Modéré":
        return (
          <div className="flex">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <Star className="w-4 h-4 text-gray-300" />
          </div>
        )
      case "Complexe":
        return (
          <div className="flex">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex items-center space-x-1">
      {getStars()}
      <span className="text-xs text-gray-500 ml-1">{level}</span>
    </div>
  )
}
