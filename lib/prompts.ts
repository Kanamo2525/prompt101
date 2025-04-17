import type { Prompt } from "@/types/prompt"
import { educationPrompts } from "@/data/education-prompts"
import { timeManagementPrompts } from "@/data/time-management-prompts"
import { onboardingPrompts } from "@/data/onboarding-prompts"
import { talentManagementPrompts } from "@/data/talent-management-prompts"
import { recruitmentPrompts } from "@/data/recruitment-prompts"
import { trainingPrompts } from "@/data/training-prompts"

// Combine all prompts
export const allPrompts: Prompt[] = [
  ...educationPrompts,
  ...timeManagementPrompts,
  ...onboardingPrompts,
  ...talentManagementPrompts,
  ...recruitmentPrompts,
  ...trainingPrompts,
]

// Find a prompt by ID
export function findPromptById(id: string): Prompt | undefined {
  return allPrompts.find((prompt) => prompt.id === id)
}

// Get popular prompts
export function getPopularPrompts(limit = 6): Prompt[] {
  // In a real app, this would be based on usage statistics
  // For now, we'll just return a random selection
  return [...allPrompts].sort(() => 0.5 - Math.random()).slice(0, limit)
}

// Get prompts by category
export function getPromptsByCategory(categoryId: string): Prompt[] {
  return allPrompts.filter((prompt) => prompt.category === categoryId)
}

// Get related prompts
export function getRelatedPrompts(promptId: string, limit = 3): Prompt[] {
  const currentPrompt = findPromptById(promptId)
  if (!currentPrompt) return []

  // Get prompts from the same category, excluding the current one
  const categoryPrompts = allPrompts.filter(
    (prompt) => prompt.category === currentPrompt.category && prompt.id !== promptId,
  )

  // If we have enough category prompts, return them
  if (categoryPrompts.length >= limit) {
    return categoryPrompts.slice(0, limit)
  }

  // Otherwise, add some random prompts to reach the limit
  const otherPrompts = allPrompts.filter(
    (prompt) => prompt.category !== currentPrompt.category && prompt.id !== promptId,
  )
  return [...categoryPrompts, ...otherPrompts.slice(0, limit - categoryPrompts.length)]
}
