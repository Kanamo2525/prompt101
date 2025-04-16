import { BookOpen, Brain, Clock, HeartPulse, Presentation } from "lucide-react"

import { educationPrompts } from "./education-prompts.ts"
import { healthyLifestylePrompts } from "./healthy-lifestyle-prompts.ts"
import { personalDevelopmentPrompts } from "./personal-development-prompts.ts"
import { timeManagementPrompts } from "./time-management-prompts.ts"
import { trainingPrompts } from "./training-prompts.ts"

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
    id: "personal-development",
    title: "Développement personnel",
    description: "Prompts pour favoriser le développement personnel",
    icon: <Brain className="h-5 w-5" />,
    color: "teal",
    prompts: personalDevelopmentPrompts,
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
  {
    id: "healthy-lifestyle",
    title: "Mode de vie sain",
    description: "Prompts pour promouvoir un mode de vie équilibré",
    icon: <HeartPulse className="h-5 w-5" />,
    color: "red",
    prompts: healthyLifestylePrompts,
  },
]
