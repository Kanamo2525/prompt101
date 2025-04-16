import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Fonction pour obtenir la couleur d'une catégorie sans le préfixe "border-"
export function getCategoryColor(colorClass: string): string {
  const colorMap: Record<string, string> = {
    "border-blue-600": "blue",
    "border-green-600": "green",
    "border-purple-600": "purple",
    "border-amber-600": "amber",
    "border-red-600": "red",
    "border-teal-600": "teal",
    "border-pink-600": "pink",
    "border-indigo-600": "indigo",
  }

  return colorMap[colorClass] || "orange"
}

// Fonction pour générer des classes Tailwind sécurisées
export function getColorClasses(colorName: string) {
  // Liste des couleurs autorisées pour éviter les injections
  const safeColors = ["blue", "green", "purple", "amber", "red", "teal", "pink", "indigo", "orange", "gray"]

  // Si la couleur n'est pas dans la liste, utiliser orange par défaut
  const safeColor = safeColors.includes(colorName) ? colorName : "orange"

  return {
    gradient: `bg-gradient-to-br from-${safeColor}-500 to-${safeColor}-400`,
    header: `bg-${safeColor}-100`,
    headerIcon: `bg-${safeColor}-50 text-${safeColor}-500`,
    categoryTitle: `text-${safeColor}-700`,
    tag: `bg-${safeColor}-500`,
    button: `text-${safeColor}-600 hover:text-${safeColor}-800 border-${safeColor}-200 bg-${safeColor}-50 hover:bg-${safeColor}-100`,
    technique: `text-${safeColor}-500 bg-${safeColor}-50`,
    icon: `bg-${safeColor}-500`,
    pageNumber: `text-${safeColor}-500`,
    watermark: `bg-${safeColor}-200 text-${safeColor}-500`,
  }
}

// Fonction pour formater le texte du prompt avec des spans colorés
export function formatPromptText(text: string, colorName = "orange"): string {
  // Vérifier que la couleur est sécurisée
  const safeColors = ["blue", "green", "purple", "amber", "red", "teal", "pink", "indigo", "orange"]
  const safeColor = safeColors.includes(colorName) ? colorName : "orange"

  // Remplacer les variables entre crochets par des spans colorés
  return text.replace(/\[([^\]]+)\]/g, `<span class="text-${safeColor}-500">[$1]</span>`)
}
