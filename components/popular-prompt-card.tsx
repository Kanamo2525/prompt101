import Link from "next/link"
import { Star, BookOpen, Clock, Activity } from "lucide-react"

interface PopularPromptCardProps {
  category: string
  categoryColor: string
  difficulty: "Facile" | "Modéré" | "Complexe"
  title: string
  href: string
}

export function PopularPromptCard({ category, categoryColor, difficulty, title, href }: PopularPromptCardProps) {
  const getIcon = () => {
    switch (category) {
      case "Développement personnel":
        return <Star className={`w-5 h-5 text-${categoryColor}-600`} />
      case "Éducation":
        return <BookOpen className={`w-5 h-5 text-${categoryColor}-600`} />
      case "Gestion du temps":
        return <Clock className={`w-5 h-5 text-${categoryColor}-600`} />
      case "Mode de vie sain":
        return <Activity className={`w-5 h-5 text-${categoryColor}-600`} />
      default:
        return <Star className={`w-5 h-5 text-${categoryColor}-600`} />
    }
  }

  const getDifficultyStars = () => {
    switch (difficulty) {
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
    }
  }

  return (
    <Link href={href}>
      <div
        className={`bg-white p-5 rounded-xl shadow-sm border-l-4 border-${categoryColor}-600 hover:shadow-md transition-shadow`}
      >
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center">
            <div className={`bg-${categoryColor}-100 p-2 rounded-lg mr-3`}>{getIcon()}</div>
            <span className="text-sm font-medium">{category}</span>
          </div>
          {getDifficultyStars()}
        </div>
        <p className="text-gray-800">{title}</p>
      </div>
    </Link>
  )
}
