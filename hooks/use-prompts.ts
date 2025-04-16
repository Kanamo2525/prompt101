"use client"

import { useState, useEffect } from "react"
import type { Prompt, PromptDetail } from "@/types/prompt"

// Hook pour récupérer les prompts d'une catégorie
export function usePromptsByCategory(categoryId: string) {
  const [prompts, setPrompts] = useState<Prompt[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPrompts() {
      try {
        setLoading(true)
        const response = await fetch(`/api/prompts?category=${categoryId}`)

        if (!response.ok) {
          throw new Error("Failed to fetch prompts")
        }

        const data = await response.json()
        setPrompts(data.prompts)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchPrompts()
  }, [categoryId])

  return { prompts, loading, error }
}

// Hook pour récupérer un prompt spécifique
export function usePromptDetail(promptId: string) {
  const [prompt, setPrompt] = useState<PromptDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPrompt() {
      try {
        setLoading(true)
        const response = await fetch("/api/prompts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ promptId }),
        })

        if (!response.ok) {
          throw new Error("Failed to fetch prompt")
        }

        const data = await response.json()
        setPrompt(data.prompt)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchPrompt()
  }, [promptId])

  return { prompt, loading, error }
}

// Hook pour rechercher des prompts
export function useSearchPrompts(query = "", difficulty: string | null = null) {
  const [prompts, setPrompts] = useState<Prompt[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function searchPrompts() {
      try {
        setLoading(true)
        const params = new URLSearchParams()

        if (query) params.append("query", query)
        if (difficulty) params.append("difficulty", difficulty)

        const response = await fetch(`/api/prompts?${params.toString()}`)

        if (!response.ok) {
          throw new Error("Failed to search prompts")
        }

        const data = await response.json()
        setPrompts(data.prompts)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    searchPrompts()
  }, [query, difficulty])

  return { prompts, loading, error }
}
