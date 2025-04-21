"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SearchSuggestionsProps {
  value: string
  onChange: (value: string) => void
  suggestions: string[]
  placeholder?: string
  className?: string
}

export function SearchSuggestions({
  value,
  onChange,
  suggestions,
  placeholder = "Rechercher...",
  className,
}: SearchSuggestionsProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  // Filtrer les suggestions en fonction de la valeur de recherche
  useEffect(() => {
    if (!value) {
      setFilteredSuggestions([])
      return
    }

    const filtered = suggestions.filter((suggestion) => suggestion.toLowerCase().includes(value.toLowerCase()))
    setFilteredSuggestions(filtered.slice(0, 5)) // Limiter à 5 suggestions
    setActiveSuggestionIndex(-1)
  }, [value, suggestions])

  // Gérer la navigation au clavier
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Flèche bas
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveSuggestionIndex((prevIndex) => (prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : prevIndex))
    }
    // Flèche haut
    else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveSuggestionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : -1))
    }
    // Entrée
    else if (e.key === "Enter" && activeSuggestionIndex >= 0) {
      e.preventDefault()
      onChange(filteredSuggestions[activeSuggestionIndex])
      inputRef.current?.blur()
    }
    // Échap
    else if (e.key === "Escape") {
      setFilteredSuggestions([])
      inputRef.current?.blur()
    }
  }

  // Fermer les suggestions en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current !== event.target
      ) {
        setFilteredSuggestions([])
        setIsFocused(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="pl-10 pr-10"
          autoComplete="off"
        />
        {value && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2"
            onClick={() => onChange("")}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isFocused && filteredSuggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-950"
        >
          <ul className="py-1">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className={cn(
                  "px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800",
                  index === activeSuggestionIndex && "bg-gray-100 dark:bg-gray-800",
                )}
                onClick={() => {
                  onChange(suggestion)
                  setFilteredSuggestions([])
                }}
              >
                {highlightMatch(suggestion, value)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

// Fonction pour mettre en évidence les correspondances
function highlightMatch(text: string, query: string) {
  if (!query) return text

  const regex = new RegExp(`(${escapeRegExp(query)})`, "gi")
  const parts = text.split(regex)

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span key={i} className="font-semibold bg-yellow-100 dark:bg-yellow-900">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  )
}

// Échapper les caractères spéciaux pour la regex
function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
