import type { ReactNode } from "react"

export type DifficultyLevel = "Facile" | "Modéré" | "Complexe"

export interface Prompt {
  id: string
  title: string
  description: string
  text: string
  difficulty: string
  difficultyLevel: number
  example?: string
  technique?: string
  category?: string
  tips?: string[]
  variants?: PromptVariant[]
  relatedPrompts?: RelatedPrompt[]
  bottomTip?: string
  formattedText?: string
  fullText?: string
  tags?: string[]
}

export interface PromptVariant {
  title: string
  description: string
  text?: string
}

export interface RelatedPrompt {
  id: string
  title: string
  description?: string
  tag?: string
  tagColor?: string
  difficultyLevel?: number
}

export interface PromptDetail extends Prompt {
  category: {
    id: string
    title: string
    color: string
    icon?: ReactNode
  }
}

export interface Category {
  id: string
  title: string
  icon: ReactNode
  color: string
  description: string
  prompts: Prompt[]
}
