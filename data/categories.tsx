import { BookOpen, Clock, Presentation } from "lucide-react"

import { educationPrompts } from "./education-prompts"
import { timeManagementPrompts } from "./time-management-prompts"
import { trainingPrompts } from "./training-prompts"

export const categories = [
  {
    id: "training",
    title: "Formation",
    description: "Prompts pour créer et améliorer vos programmes de formation",
    icon: <Presentation className="h-5 w-5" />,
    color: "green",
    prompts: trainingPrompts,
  },
  {
    id: "education",
    title: "Éducation",
    description: "Prompts pour améliorer l'apprentissage et l'enseignement",
    icon: <BookOpen className="h-5 w-5" />,
    color: "green",
    prompts: educationPrompts,
  },
  {
    id: "time-management",
    title: "Gestion du temps",
    description: "Prompts pour optimiser votre gestion du temps",
    icon: <Clock className="h-5 w-5" />,
    color: "blue",
    prompts: timeManagementPrompts,
  },
]
