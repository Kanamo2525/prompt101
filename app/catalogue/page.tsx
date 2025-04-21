import Link from "next/link"
import { ArrowRight, Copy, Search, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Données des catégories avec le nombre de prompts
const categories = [
  { name: "Productivité", slug: "productivite", count: 12 },
  { name: "Créativité", slug: "creativite", count: 21 },
  { name: "Apprentissage", slug: "apprentissage", count: 15 },
  { name: "Leadership", slug: "leadership", count: 23 },
]

// Données des prompts pour la page d'accueil du catalogue
const featuredPrompts = [
  {
    title: "Résumé d'article",
    description: "Créer un résumé concis d'un article",
    content:
      "Résume l'article suivant en 3-5 points clés, en conservant les informations essentielles et en éliminant les détails superflus.",
    tags: ["Productivité", "Lecture"],
    slug: "resume-article",
  },
  {
    title: "Plan d'apprentissage",
    description: "Créer un plan d'apprentissage personnalisé",
    content:
      "Crée un plan d'apprentissage détaillé pour maîtriser [sujet] en [durée]. Inclus des ressources, des étapes progressives et des objectifs mesurables.",
    tags: ["Éducation", "Planification"],
    slug: "plan-apprentissage",
  },
  {
    title: "Brainstorming d'idées",
    description: "Générer des idées créatives",
    content:
      "Propose 10 idées créatives et innovantes pour [projet/problème]. Assure-toi que les idées soient variées, réalisables et originales.",
    tags: ["Créativité", "Innovation"],
    slug: "brainstorming",
  },
  {
    title: "Amélioration de texte",
    description: "Améliorer la qualité d'un texte",
    content:
      "Améliore ce texte en le rendant plus clair, plus concis et plus engageant. Corrige les erreurs grammaticales et améliore la structure.",
    tags: ["Rédaction", "Communication"],
    slug: "amelioration-texte",
  },
  {
    title: "Analyse SWOT",
    description: "Analyser forces, faiblesses, opportunités et menaces",
    content:
      "Réalise une analyse SWOT complète pour un projet ou une entreprise. Identifie les forces, faiblesses, opportunités et menaces de manière détaillée.",
    tags: ["Business", "Stratégie"],
    slug: "analyse-swot",
  },
  {
    title: "Explication simplifiée",
    description: "Expliquer un concept complexe simplement",
    content:
      "Explique [concept complexe] comme si tu parlais à un enfant de 10 ans. Utilise des analogies simples et un langage accessible.",
    tags: ["Éducation", "Communication"],
    slug: "explication-simplifiee",
  },
]

// Nombre total de prompts
const totalPrompts = categories.reduce((sum, category) => sum + category.count, 0)

export default function CataloguePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Catalogue de Prompts</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explorez notre collection de {totalPrompts} prompts prêts à l'emploi pour différents cas d'usage.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Rechercher un prompt..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Tag className="mr-2 h-4 w-4" />
            Filtrer
          </Button>
          <Button variant="outline">Trier par</Button>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <Link
            href="/catalogue"
            className="inline-flex h-10 items-center justify-center rounded-l-md border-r border-gray-200 px-4 font-medium transition-colors hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
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
              }`}
            >
              {category.name}{" "}
              <span className="ml-1 text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded-full">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

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

      <h2 className="text-2xl font-bold mb-6">Prompts populaires</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredPrompts.map((prompt) => (
          <Card key={prompt.slug}>
            <CardHeader>
              <CardTitle>{prompt.title}</CardTitle>
              <CardDescription>{prompt.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{prompt.content}</p>
              <div className="flex flex-wrap gap-2">
                {prompt.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
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
        <Button>
          Voir plus de prompts <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
