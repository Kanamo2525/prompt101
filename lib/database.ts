// Modifier les catégories et les prompts dans la base de données
import { Star, BookOpen, Clock, Activity } from "lucide-react"
import type { Category, Prompt, PromptDetail, RelatedPrompt } from "@/types/prompt"

// Définition des catégories
const initialCategories: Category[] = [
  {
    id: "personal-development",
    title: "Développement personnel",
    icon: <Star className="w-5 h-5 text-blue-600" />,
    color: "border-blue-600",
    description: "Prompts pour vous aider à progresser dans votre vie personnelle et professionnelle.",
    prompts: [
      {
        id: "analyze-finances",
        title: "Analyser les finances",
        description: "Obtenez une analyse détaillée de votre situation financière",
        text: "Analyse ma situation financière actuelle avec [revenus], [dépenses] et [objectifs financiers].",
        difficulty: "Modéré",
        difficultyLevel: 2,
        example:
          "Analyse ma situation financière actuelle avec un revenu mensuel de 2500€, des dépenses mensuelles de 2000€ et l'objectif d'acheter un appartement dans 3 ans.",
        technique: "Analyse",
        tips: [
          "Soyez précis sur vos revenus et dépenses",
          "Mentionnez vos objectifs à court et long terme",
          "Incluez vos dettes actuelles si vous en avez",
          "Précisez votre tolérance au risque pour les investissements",
          "Indiquez votre horizon temporel pour chaque objectif",
        ],
      },
      {
        id: "overcome-challenges",
        title: "Surmonter les défis",
        description: "Stratégies pour surmonter les obstacles personnels",
        text: "Propose des stratégies pour surmonter [défi spécifique] dans ma vie personnelle ou professionnelle.",
        difficulty: "Modéré",
        difficultyLevel: 2,
        example:
          "Propose des stratégies pour surmonter ma procrastination chronique qui affecte mes projets professionnels.",
        technique: "Stratégie",
        tips: [
          "Décrivez précisément le défi que vous rencontrez",
          "Mentionnez les solutions que vous avez déjà essayées",
          "Indiquez votre contexte personnel ou professionnel",
          "Précisez si vous préférez des solutions à court ou long terme",
          "Soyez ouvert aux approches non conventionnelles",
        ],
      },
    ],
  },
  {
    id: "education",
    title: "Éducation",
    icon: <BookOpen className="w-5 h-5 text-green-600" />,
    color: "border-green-600",
    description: "Prompts pour améliorer votre apprentissage et développer de nouvelles compétences.",
    prompts: [
      {
        id: "learning-strategies",
        title: "Recommander des stratégies d'apprentissage",
        description: "Obtenez des conseils personnalisés pour apprendre efficacement",
        text: "Suggère des stratégies d'apprentissage efficaces pour [sujet] adapté à mon style d'apprentissage [style].",
        difficulty: "Facile",
        difficultyLevel: 1,
        example:
          "Suggère des stratégies d'apprentissage efficaces pour la programmation Python adapté à mon style d'apprentissage visuel.",
        technique: "Personnalisation",
        tips: [
          "Précisez le sujet que vous souhaitez apprendre",
          "Indiquez votre style d'apprentissage préféré (visuel, auditif, kinesthésique)",
          "Mentionnez votre niveau actuel dans le sujet",
          "Précisez le temps que vous pouvez consacrer à l'apprentissage",
          "Indiquez vos objectifs d'apprentissage spécifiques",
        ],
      },
    ],
  },
  {
    id: "time-management",
    title: "Gestion du temps",
    icon: <Clock className="w-5 h-5 text-purple-600" />,
    color: "border-purple-600",
    description: "Prompts pour optimiser votre temps et augmenter votre productivité au quotidien.",
    prompts: [
      {
        id: "email-templates",
        title: "Envoyer des e-mails pré-rédigés",
        description: "Gagnez du temps avec des modèles d'emails efficaces",
        text: "Rédige un email [type d'email] à [destinataire] concernant [sujet] avec un ton [style souhaité].",
        difficulty: "Facile",
        difficultyLevel: 1,
        example:
          "Rédige un email de suivi à un client potentiel concernant notre dernière proposition commerciale avec un ton professionnel mais chaleureux.",
        technique: "Rédaction",
        tips: [
          "Précisez le type d'email (suivi, demande, information)",
          "Indiquez clairement le destinataire et sa relation avec vous",
          "Détaillez le sujet et le contexte de l'email",
          "Précisez le ton souhaité (formel, amical, direct)",
          "Mentionnez les points clés à inclure dans l'email",
        ],
      },
    ],
  },
  {
    id: "healthy-lifestyle",
    title: "Mode de vie sain",
    icon: <Activity className="w-5 h-5 text-amber-600" />,
    color: "border-amber-600",
    description: "Prompts pour améliorer votre santé physique et mentale au quotidien.",
    prompts: [
      {
        id: "lifestyle-changes",
        title: "Recommander des changements de mode de vie",
        description: "Conseils personnalisés pour un mode de vie plus sain",
        text: "Suggère des changements de mode de vie adaptés à [situation actuelle] pour améliorer [objectif de santé].",
        difficulty: "Modéré",
        difficultyLevel: 2,
        example:
          "Suggère des changements de mode de vie adaptés à mon travail sédentaire de bureau pour améliorer mon énergie quotidienne et réduire mes douleurs de dos.",
        technique: "Personnalisation",
        tips: [
          "Décrivez précisément votre situation actuelle",
          "Indiquez clairement vos objectifs de santé",
          "Mentionnez vos contraintes (temps, budget, condition physique)",
          "Précisez les habitudes que vous avez déjà essayées",
          "Indiquez si vous avez des conditions médicales particulières",
        ],
      },
    ],
  },
]

class Database {
  private categories: Category[]
  private prompts: Map<string, PromptDetail>

  constructor() {
    this.categories = initialCategories
    this.prompts = new Map()

    // Initialiser la base de données avec les prompts existants
    this.initializePrompts()
  }

  private initializePrompts() {
    // Pour chaque catégorie, transformer les prompts en PromptDetail et les stocker dans la map
    this.categories.forEach((category) => {
      category.prompts.forEach((promptBase) => {
        const promptDetail: PromptDetail = {
          ...promptBase,
          title: promptBase.title || "Titre par défaut",
          description: promptBase.description || "Description par défaut",
          category: {
            id: category.id,
            title: category.title,
            color: category.color,
            icon: category.icon,
          },
          tags: ["IA", "Prompt", category.title.split(" ")[0]],
          difficultyLevel: promptBase.difficulty === "Facile" ? 1 : promptBase.difficulty === "Modéré" ? 2 : 3,
          formattedText: promptBase.text,
          fullText: promptBase.text,
          tips: promptBase.tips || [],
          variants: [
            {
              title: "Version simplifiée",
              description: "Une version plus concise du prompt",
            },
            {
              title: "Version détaillée",
              description: "Une version plus complète avec plus de contexte",
            },
          ],
          relatedPrompts: this.getRelatedPrompts(promptBase.id, category.id, 3),
          bottomTip: "Pour plus de pertinence, adaptez ce prompt à votre contexte spécifique.",
        }

        this.prompts.set(promptBase.id, promptDetail)
      })
    })
  }

  // Récupérer un prompt par son ID
  getPromptById(id: string): PromptDetail | null {
    return this.prompts.get(id) || null
  }

  // Récupérer tous les prompts d'une catégorie
  getPromptsByCategory(categoryId: string): Prompt[] {
    const category = this.categories.find((c) => c.id === categoryId)
    return category ? category.prompts : []
  }

  // Récupérer une catégorie par son ID
  getCategoryById(id: string): Category | undefined {
    return this.categories.find((category) => category.id === id)
  }

  // Récupérer toutes les catégories
  getAllCategories(): Category[] {
    return this.categories
  }

  // Récupérer des prompts associés
  private getRelatedPrompts(currentPromptId: string, categoryId: string, count = 3): RelatedPrompt[] {
    const category = this.categories.find((c) => c.id === categoryId)
    if (!category) return []

    // Créer une liste de prompts associés simplifiée
    const relatedPrompts: RelatedPrompt[] = []

    // Ajouter quelques prompts fictifs pour éviter les erreurs
    relatedPrompts.push({
      id: "related-1",
      title: "Prompt associé 1",
      tag: category.title.split(" ")[0],
      tagColor: categoryId,
      difficultyLevel: 1,
    })

    relatedPrompts.push({
      id: "related-2",
      title: "Prompt associé 2",
      tag: category.title.split(" ")[0],
      tagColor: categoryId,
      difficultyLevel: 2,
    })

    return relatedPrompts
  }

  // Rechercher des prompts
  searchPrompts(query: string, difficulty: string | null = null): Prompt[] {
    const results: Prompt[] = []

    this.categories.forEach((category) => {
      category.prompts.forEach((prompt) => {
        if (
          (query === "" ||
            (prompt.title && prompt.title.toLowerCase().includes(query.toLowerCase())) ||
            prompt.text.toLowerCase().includes(query.toLowerCase()) ||
            prompt.example.toLowerCase().includes(query.toLowerCase())) &&
          (difficulty === null || prompt.difficulty === difficulty)
        ) {
          results.push(prompt)
        }
      })
    })

    return results
  }
}

// Singleton instance
const db = new Database()
export default db
