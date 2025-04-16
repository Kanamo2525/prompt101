import { categories } from "@/data/categories"
import type { Category } from "@/types/category"

// Fonction pour récupérer une catégorie par son ID
export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id)
}

// Fonction pour récupérer toutes les catégories
export function getAllCategories(): Category[] {
  return categories
}
