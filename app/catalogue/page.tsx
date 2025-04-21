"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Copy, X, SlidersHorizontal, ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Importez la bibliothèque Fuse.js pour la recherche fuzzy
import Fuse from "fuse.js"

// Importez le nouveau composant SearchSuggestions
import { SearchSuggestions } from "@/components/search-suggestions"

// Types
type Niveau = "Débutant" | "Intermédiaire" | "Avancé" | "Professionnel" | "Tous"
type Categorie = "Productivité" | "Créativité" | "Apprentissage" | "Leadership" | "Tous"
type TriOption = "recent" | "populaire" | "alphabetique" | "niveau"

interface Prompt {
  title: string
  description: string
  content: string
  tags: string[]
  slug: string
  niveau?: Niveau
  categorie?: Categorie
  techniques?: string[]
}

interface CategoryData {
  name: string
  slug: string
  count: number
}

// Données des catégories avec le nombre de prompts
const categories: CategoryData[] = [
  { name: "Productivité", slug: "productivite", count: 22 },
  { name: "Créativité", slug: "creativite", count: 21 },
  { name: "Apprentissage", slug: "apprentissage", count: 15 },
  { name: "Leadership", slug: "leadership", count: 23 },
]

// Données des prompts pour la page d'accueil du catalogue
const featuredPrompts: Prompt[] = [
  {
    title: "Résumé d'article",
    description: "Créer un résumé concis d'un article",
    content:
      "Résume l'article suivant en 3-5 points clés, en conservant les informations essentielles et en éliminant les détails superflus.",
    tags: ["Productivité", "Lecture"],
    slug: "resume-article",
    niveau: "Débutant",
    categorie: "Productivité",
    techniques: ["Zero-Shot"],
  },
  {
    title: "Plan d'apprentissage",
    description: "Créer un plan d'apprentissage personnalisé",
    content:
      "Crée un plan d'apprentissage détaillé pour maîtriser [sujet] en [durée]. Inclus des ressources, des étapes progressives et des objectifs mesurables.",
    tags: ["Éducation", "Planification"],
    slug: "plan-apprentissage",
    niveau: "Intermédiaire",
    categorie: "Apprentissage",
    techniques: ["Few-Shot", "Chain-of-Thought"],
  },
  {
    title: "Brainstorming d'idées",
    description: "Générer des idées créatives",
    content:
      "Propose 10 idées créatives et innovantes pour [projet/problème]. Assure-toi que les idées soient variées, réalisables et originales.",
    tags: ["Créativité", "Innovation"],
    slug: "brainstorming",
    niveau: "Débutant",
    categorie: "Créativité",
    techniques: ["Zero-Shot"],
  },
  {
    title: "Amélioration de texte",
    description: "Améliorer la qualité d'un texte",
    content:
      "Améliore ce texte en le rendant plus clair, plus concis et plus engageant. Corrige les erreurs grammaticales et améliore la structure.",
    tags: ["Rédaction", "Communication"],
    slug: "amelioration-texte",
    niveau: "Intermédiaire",
    categorie: "Productivité",
    techniques: ["Chain-of-Thought"],
  },
  {
    title: "Analyse SWOT",
    description: "Analyser forces, faiblesses, opportunités et menaces",
    content:
      "Réalise une analyse SWOT complète pour un projet ou une entreprise. Identifie les forces, faiblesses, opportunités et menaces de manière détaillée.",
    tags: ["Business", "Stratégie"],
    slug: "analyse-swot",
    niveau: "Avancé",
    categorie: "Leadership",
    techniques: ["Template Filling", "Chain-of-Thought"],
  },
  {
    title: "Explication simplifiée",
    description: "Expliquer un concept complexe simplement",
    content:
      "Explique [concept complexe] comme si tu parlais à un enfant de 10 ans. Utilise des analogies simples et un langage accessible.",
    tags: ["Éducation", "Communication"],
    slug: "explication-simplifiee",
    niveau: "Débutant",
    categorie: "Apprentissage",
    techniques: ["Zero-Shot"],
  },
  {
    title: "Loi de Pareto",
    description: "Appliquer le principe 80/20 à votre travail",
    content:
      "En tant que consultant en productivité, analyse la façon dont je pourrais appliquer la loi de Pareto (principe 80/20) à mon travail actuel...",
    tags: ["Productivité", "Optimisation"],
    slug: "loi-pareto",
    niveau: "Avancé",
    categorie: "Productivité",
    techniques: ["Chain-of-Thought"],
  },
  {
    title: "Méthode GTD",
    description: "Implémenter Getting Things Done",
    content: "En tant que coach certifié en méthode GTD (Getting Things Done) de David Allen...",
    tags: ["Productivité", "Organisation"],
    slug: "methode-gtd",
    niveau: "Avancé",
    categorie: "Productivité",
    techniques: ["RCT"],
  },
  {
    title: "Deep Work",
    description: "Maximiser votre concentration profonde",
    content: 'Tu es Cal Newport, professeur d\'informatique à Georgetown University et auteur du livre "Deep Work"...',
    tags: ["Productivité", "Concentration"],
    slug: "deep-work",
    niveau: "Avancé",
    categorie: "Productivité",
    techniques: ["Expert Role-Playing", "Contextual Augmentation"],
  },
  {
    title: "Analyse inversée",
    description: "Analyser un problème en inversant la perspective",
    content:
      "Utilise la technique de pensée inversée pour analyser ce problème: [décrire le problème]. Au lieu de chercher comment le résoudre, identifie d'abord toutes les façons dont on pourrait l'empirer. Ensuite, inverse ces idées pour trouver des solutions potentielles.",
    tags: ["Résolution de problèmes", "Créativité"],
    slug: "analyse-inversee",
    niveau: "Intermédiaire",
    categorie: "Productivité",
    techniques: ["Chain-of-Thought", "Contextual Augmentation"],
  },
  {
    title: "Matrice de décision inversée",
    description: "Prendre des décisions en éliminant les mauvaises options",
    content:
      "Crée une matrice de décision inversée pour m'aider à choisir entre ces options: [liste d'options]. Au lieu d'évaluer les meilleures options, identifie d'abord les raisons d'éliminer chaque option, puis classe les options restantes.",
    tags: ["Prise de décision", "Leadership"],
    slug: "matrice-decision-inversee",
    niveau: "Avancé",
    categorie: "Leadership",
    techniques: ["Template Filling", "Chain-of-Thought"],
  },
  {
    title: "Brainstorming inversé",
    description: "Générer des idées en inversant le problème",
    content:
      "Pour ce défi: [décrire le défi], utilise la technique du brainstorming inversé. D'abord, identifie comment causer délibérément le problème que nous essayons de résoudre. Ensuite, inverse ces idées pour trouver des solutions créatives.",
    tags: ["Créativité", "Innovation"],
    slug: "brainstorming-inverse",
    niveau: "Intermédiaire",
    categorie: "Créativité",
    techniques: ["Chain-of-Thought", "Expert Role-Playing"],
  },
  {
    title: "Processus d'apprentissage inversé",
    description: "Apprendre en enseignant un concept",
    content:
      "Imagine que tu dois enseigner [concept] à quelqu'un qui n'y connaît rien. Crée un plan de cours détaillé qui explique ce concept de manière simple et engageante. Inclus des exemples, des analogies et des exercices pratiques.",
    tags: ["Éducation", "Communication"],
    slug: "apprentissage-inverse",
    niveau: "Intermédiaire",
    categorie: "Apprentissage",
    techniques: ["Expert Role-Playing", "Chain-of-Thought"],
  },
]

// Techniques de prompting disponibles
const techniques = [
  "Zero-Shot",
  "One-Shot",
  "Few-Shot",
  "Chain-of-Thought",
  "RCT",
  "Multi-Prompting",
  "Generated Knowledge",
  "Contextual Augmentation",
  "Template Filling",
  "Iterative Prompting",
  "Expert Role-Playing",
]

// Niveaux disponibles
const niveaux: Niveau[] = ["Débutant", "Intermédiaire", "Avancé", "Professionnel", "Tous"]

export default function CataloguePage() {
  // États pour les filtres, le tri et la recherche
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategorie, setSelectedCategorie] = useState<Categorie>("Tous")
  const [selectedNiveau, setSelectedNiveau] = useState<Niveau>("Tous")
  const [selectedTechniques, setSelectedTechniques] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [triOption, setTriOption] = useState<TriOption>("recent")
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false)
  const [filteredPrompts, setFilteredPrompts] = useState<Prompt[]>(featuredPrompts)

  // Ajoutez cet état après les autres états (vers la ligne 190)
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([])

  // Nombre total de prompts
  const totalPrompts = categories.reduce((sum, category) => sum + category.count, 0)

  // Extraire tous les tags uniques des prompts
  const allTags = Array.from(new Set(featuredPrompts.flatMap((prompt) => prompt.tags)))

  // Effet pour filtrer et trier les prompts
  useEffect(() => {
    let result = [...featuredPrompts]

    // Filtrer par recherche avec Fuse.js (recherche fuzzy)
    if (searchQuery) {
      const fuseOptions = {
        includeScore: true,
        threshold: 0.4, // Plus la valeur est basse, plus la correspondance doit être précise
        keys: [
          { name: "title", weight: 2 },
          { name: "description", weight: 1.5 },
          { name: "content", weight: 1 },
          { name: "tags", weight: 1 },
          { name: "techniques", weight: 0.5 },
        ],
        ignoreLocation: true,
        findAllMatches: true,
      }

      const fuse = new Fuse(featuredPrompts, fuseOptions)
      const searchResults = fuse.search(searchQuery)
      result = searchResults.map((result) => result.item)
    }

    // Filtrer par catégorie
    if (selectedCategorie !== "Tous") {
      result = result.filter((prompt) => prompt.categorie === selectedCategorie)
    }

    // Filtrer par niveau
    if (selectedNiveau !== "Tous") {
      result = result.filter((prompt) => prompt.niveau === selectedNiveau)
    }

    // Filtrer par techniques
    if (selectedTechniques.length > 0) {
      result = result.filter(
        (prompt) => prompt.techniques && selectedTechniques.some((tech) => prompt.techniques?.includes(tech)),
      )
    }

    // Filtrer par tags
    if (selectedTags.length > 0) {
      result = result.filter((prompt) => prompt.tags && selectedTags.some((tag) => prompt.tags.includes(tag)))
    }

    // Trier les prompts
    switch (triOption) {
      case "alphabetique":
        result.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "niveau":
        const niveauOrdre: Record<string, number> = {
          Débutant: 1,
          Intermédiaire: 2,
          Avancé: 3,
          Professionnel: 4,
        }
        result.sort((a, b) => {
          const niveauA = a.niveau ? niveauOrdre[a.niveau] : 0
          const niveauB = b.niveau ? niveauOrdre[b.niveau] : 0
          return niveauA - niveauB
        })
        break
      case "populaire":
        // Simuler un tri par popularité (dans une vraie application, cela viendrait de la base de données)
        result.sort(() => Math.random() - 0.5)
        break
      case "recent":
      default:
        // Garder l'ordre actuel (dans une vraie application, cela serait trié par date)
        break
    }

    setFilteredPrompts(result)
  }, [searchQuery, selectedCategorie, selectedNiveau, selectedTechniques, selectedTags, triOption])

  // Ajoutez cet effet après les autres effets (vers la ligne 260)
  // Générer des suggestions de recherche basées sur les prompts
  useEffect(() => {
    // Extraire tous les mots uniques des titres, descriptions et tags
    const allWords = new Set<string>()

    featuredPrompts.forEach((prompt) => {
      // Ajouter le titre complet
      allWords.add(prompt.title)

      // Ajouter les mots individuels du titre
      prompt.title.split(/\s+/).forEach((word) => {
        if (word.length > 3) allWords.add(word)
      })

      // Ajouter les mots clés de la description
      prompt.description.split(/\s+/).forEach((word) => {
        if (word.length > 3) allWords.add(word)
      })

      // Ajouter les tags
      prompt.tags.forEach((tag) => allWords.add(tag))

      // Ajouter les techniques
      prompt.techniques?.forEach((technique) => allWords.add(technique))
    })

    setSearchSuggestions(Array.from(allWords))
  }, [])

  // Gérer le changement de technique
  const handleTechniqueChange = (technique: string) => {
    setSelectedTechniques((prev) =>
      prev.includes(technique) ? prev.filter((t) => t !== technique) : [...prev, technique],
    )
  }

  // Gérer le changement de tag
  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  // Réinitialiser tous les filtres
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategorie("Tous")
    setSelectedNiveau("Tous")
    setSelectedTechniques([])
    setSelectedTags([])
    setTriOption("recent")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Catalogue de Prompts</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explorez notre collection de {totalPrompts} prompts prêts à l'emploi pour différents cas d'usage.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Remplacez la partie du champ de recherche (vers la ligne 300-320) par celle-ci */}
        <SearchSuggestions
          value={searchQuery}
          onChange={setSearchQuery}
          suggestions={searchSuggestions}
          placeholder="Rechercher un prompt..."
          className="flex-grow"
        />
        <div className="flex gap-2">
          <Dialog open={isFilterDialogOpen} onOpenChange={setIsFilterDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filtrer
                {(selectedNiveau !== "Tous" || selectedTechniques.length > 0 || selectedTags.length > 0) && (
                  <Badge variant="secondary" className="ml-2">
                    {selectedNiveau !== "Tous" && selectedTechniques.length === 0 && selectedTags.length === 0
                      ? "1"
                      : selectedNiveau !== "Tous" && (selectedTechniques.length > 0 || selectedTags.length > 0)
                        ? 1 + (selectedTechniques.length > 0 ? 1 : 0) + (selectedTags.length > 0 ? 1 : 0)
                        : (selectedTechniques.length > 0 ? 1 : 0) + (selectedTags.length > 0 ? 1 : 0)}
                  </Badge>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Filtrer les prompts</DialogTitle>
                <DialogDescription>Affinez votre recherche en utilisant les filtres ci-dessous.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="niveau">Niveau</Label>
                  <Select value={selectedNiveau} onValueChange={(value) => setSelectedNiveau(value as Niveau)}>
                    <SelectTrigger id="niveau">
                      <SelectValue placeholder="Sélectionner un niveau" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Niveaux</SelectLabel>
                        {niveaux.map((niveau) => (
                          <SelectItem key={niveau} value={niveau}>
                            {niveau}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Techniques de prompting</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {techniques.map((technique) => (
                      <div key={technique} className="flex items-center space-x-2">
                        <Checkbox
                          id={`technique-${technique}`}
                          checked={selectedTechniques.includes(technique)}
                          onCheckedChange={() => handleTechniqueChange(technique)}
                        />
                        <Label htmlFor={`technique-${technique}`} className="text-sm">
                          {technique}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Tags</Label>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => handleTagChange(tag)}
                      >
                        {tag}
                        {selectedTags.includes(tag) && <X className="ml-1 h-3 w-3" />}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <DialogFooter className="flex justify-between">
                <Button variant="outline" onClick={resetFilters}>
                  Réinitialiser
                </Button>
                <Button onClick={() => setIsFilterDialogOpen(false)}>Appliquer</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Trier par
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Options de tri</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  className={triOption === "recent" ? "bg-accent" : ""}
                  onClick={() => setTriOption("recent")}
                >
                  Plus récents
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={triOption === "populaire" ? "bg-accent" : ""}
                  onClick={() => setTriOption("populaire")}
                >
                  Plus populaires
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={triOption === "alphabetique" ? "bg-accent" : ""}
                  onClick={() => setTriOption("alphabetique")}
                >
                  Ordre alphabétique
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={triOption === "niveau" ? "bg-accent" : ""}
                  onClick={() => setTriOption("niveau")}
                >
                  Par niveau
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <Link
            href="/catalogue"
            className={`inline-flex h-10 items-center justify-center rounded-l-md border-r border-gray-200 px-4 font-medium transition-colors hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 ${
              selectedCategorie === "Tous" ? "bg-accent" : ""
            }`}
            onClick={() => setSelectedCategorie("Tous")}
          >
            Tous{" "}
            <span className="ml-1 text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded-full">{totalPrompts}</span>
          </Link>
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/catalogue/${category.slug}`}
              className={`inline-flex h-10 items-center justify-center border-r border-gray-200 px-4 font-medium transition-colors hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 ${
                index === categories.length - 1 ? "rounded-r-md border-r-0" : ""
              } ${selectedCategorie === category.name ? "bg-accent" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                setSelectedCategorie(category.name as Categorie)
              }}
            >
              {category.name}{" "}
              <span className="ml-1 text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded-full">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Affichage des filtres actifs */}
      {(selectedNiveau !== "Tous" || selectedTechniques.length > 0 || selectedTags.length > 0) && (
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="text-sm text-gray-500 mr-2 flex items-center">Filtres actifs:</div>
          {selectedNiveau !== "Tous" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Niveau: {selectedNiveau}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedNiveau("Tous")} />
            </Badge>
          )}
          {selectedTechniques.map((tech) => (
            <Badge key={tech} variant="secondary" className="flex items-center gap-1">
              {tech}
              <X className="h-3 w-3 cursor-pointer" onClick={() => handleTechniqueChange(tech)} />
            </Badge>
          ))}
          {selectedTags.map((tag) => (
            <Badge key={tag} variant="secondary" className="flex items-center gap-1">
              {tag}
              <X className="h-3 w-3 cursor-pointer" onClick={() => handleTagChange(tag)} />
            </Badge>
          ))}
          {(selectedNiveau !== "Tous" || selectedTechniques.length > 0 || selectedTags.length > 0) && (
            <Button variant="ghost" size="sm" onClick={resetFilters} className="h-6 text-xs">
              Effacer tout
            </Button>
          )}
        </div>
      )}

      {/* Affichage des catégories */}
      {selectedCategorie === "Tous" &&
        searchQuery === "" &&
        selectedNiveau === "Tous" &&
        selectedTechniques.length === 0 &&
        selectedTags.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category) => (
              <Link key={category.slug} href={`/catalogue/${category.slug}`} className="no-underline">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      {category.name}
                      <Badge variant="outline" className="text-sm font-normal">
                        {category.count} prompts
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      Explorez notre collection de prompts pour {category.name.toLowerCase()}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" className="ml-auto">
                      Voir tous <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        )}

      {/* Résultats de recherche ou filtres */}
      {(searchQuery !== "" ||
        selectedNiveau !== "Tous" ||
        selectedTechniques.length > 0 ||
        selectedTags.length > 0 ||
        selectedCategorie !== "Tous") && (
        <>
          <h2 className="text-2xl font-bold mb-6">
            {filteredPrompts.length > 0 ? `${filteredPrompts.length} prompts trouvés` : "Aucun prompt trouvé"}
          </h2>
          {filteredPrompts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredPrompts.map((prompt) => (
                <Card key={prompt.slug}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{prompt.title}</CardTitle>
                      {prompt.niveau && (
                        <Badge variant="outline" className="text-xs">
                          {prompt.niveau}
                        </Badge>
                      )}
                    </div>
                    <CardDescription>{prompt.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{prompt.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {prompt.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="cursor-pointer"
                          onClick={() => handleTagChange(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {prompt.techniques && prompt.techniques.length > 0 && (
                      <div className="mt-3">
                        <p className="text-xs text-gray-500 mb-1">Techniques:</p>
                        <div className="flex flex-wrap gap-1">
                          {prompt.techniques.map((technique) => (
                            <Badge
                              key={technique}
                              variant="outline"
                              className="text-xs cursor-pointer"
                              onClick={() => handleTechniqueChange(technique)}
                            >
                              {technique}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm">
                      <Copy className="h-4 w-4 mr-2" />
                      Copier
                    </Button>
                    <Link href={`/catalogue/${prompt.slug}`}>
                      <Button variant="ghost" size="sm">
                        Détails <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">Aucun prompt ne correspond à vos critères de recherche.</p>
              <Button onClick={resetFilters}>Réinitialiser les filtres</Button>
            </div>
          )}
        </>
      )}

      {/* Prompts populaires (affichés uniquement si aucun filtre n'est actif) */}
      {searchQuery === "" &&
        selectedNiveau === "Tous" &&
        selectedTechniques.length === 0 &&
        selectedTags.length === 0 &&
        selectedCategorie === "Tous" && (
          <>
            <h2 className="text-2xl font-bold mb-6">Prompts populaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPrompts.slice(0, 6).map((prompt) => (
                <Card key={prompt.slug}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{prompt.title}</CardTitle>
                      {prompt.niveau && (
                        <Badge variant="outline" className="text-xs">
                          {prompt.niveau}
                        </Badge>
                      )}
                    </div>
                    <CardDescription>{prompt.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{prompt.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {prompt.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="cursor-pointer"
                          onClick={() => handleTagChange(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {prompt.techniques && prompt.techniques.length > 0 && (
                      <div className="mt-3">
                        <p className="text-xs text-gray-500 mb-1">Techniques:</p>
                        <div className="flex flex-wrap gap-1">
                          {prompt.techniques.map((technique) => (
                            <Badge
                              key={technique}
                              variant="outline"
                              className="text-xs cursor-pointer"
                              onClick={() => handleTechniqueChange(technique)}
                            >
                              {technique}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm">
                      <Copy className="h-4 w-4 mr-2" />
                      Copier
                    </Button>
                    <Link href={`/catalogue/${prompt.slug}`}>
                      <Button variant="ghost" size="sm">
                        Détails <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button onClick={() => setSelectedCategorie("Tous")}>
                Voir plus de prompts <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </>
        )}
    </div>
  )
}
