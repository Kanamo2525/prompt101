import type { ReactNode } from "react"
import type { Prompt } from "./prompt"

export interface Category {
  id: string
  title: string
  icon: ReactNode
  color: string
  description: string
  prompts: Prompt[]
}
