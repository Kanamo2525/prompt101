"use client"

import { Button } from "@/components/ui/button"

interface DifficultyFilterProps {
  selectedDifficulty: string | null
  onChange: (difficulty: string | null) => void
}

export function DifficultyFilter({ selectedDifficulty, onChange }: DifficultyFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedDifficulty === null ? "default" : "outline"}
        size="sm"
        onClick={() => onChange(null)}
        className="text-xs"
      >
        Tous
      </Button>
      <Button
        variant={selectedDifficulty === "Facile" ? "default" : "outline"}
        size="sm"
        onClick={() => onChange("Facile")}
        className="text-xs flex items-center"
      >
        <span className="mr-1">⭐</span>
        Facile
      </Button>
      <Button
        variant={selectedDifficulty === "Modéré" ? "default" : "outline"}
        size="sm"
        onClick={() => onChange("Modéré")}
        className="text-xs flex items-center"
      >
        <span className="mr-1">⭐⭐</span>
        Modéré
      </Button>
      <Button
        variant={selectedDifficulty === "Complexe" ? "default" : "outline"}
        size="sm"
        onClick={() => onChange("Complexe")}
        className="text-xs flex items-center"
      >
        <span className="mr-1">⭐⭐⭐</span>
        Complexe
      </Button>
    </div>
  )
}
