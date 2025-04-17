import { categories } from "@/data/categories"

export function getAllCategories() {
  return categories
}

export function getCategoryById(id: string) {
  return categories.find((category) => category.id === id)
}
