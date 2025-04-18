import Link from "next/link"
import { ArrowRight, Copy, Search, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function CataloguePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Catalogue de Prompts</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explorez notre collection de prompts prêts à l'emploi pour différents cas d'usage.
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
            Tous
          </Link>
          <Link
            href="/catalogue/productivite"
            className="inline-flex h-10 items-center justify-center border-r border-gray-200 px-4 font-medium transition-colors hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
          >
            Productivité
          </Link>
          <Link
            href="/catalogue/creativite"
            className="inline-flex h-10 items-center justify-center border-r border-gray-200 px-4 font-medium transition-colors hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
          >
            Créativité
          </Link>
          <Link
            href="/catalogue/apprentissage"
            className="inline-flex h-10 items-center justify-center border-r border-gray-200 px-4 font-medium transition-colors hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
          >
            Apprentissage
          </Link>
          <Link
            href="/catalogue/professionnel"
            className="inline-flex h-10 items-center justify-center rounded-r-md px-4 font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Professionnel
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Prompt Cards */}
        <Card>
          <CardHeader>
            <CardTitle>Résumé d'article</CardTitle>
            <CardDescription>Créer un résumé concis d'un article</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Résume l'article suivant en 3-5 points clés, en conservant les informations essentielles et en éliminant
              les détails superflus.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Productivité</Badge>
              <Badge variant="secondary">Lecture</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" size="sm">
              <Copy className="h-4 w-4 mr-2" />
              Copier
            </Button>
            <Link href="/catalogue/resume-article">
              <Button variant="ghost" size="sm">
                Détails <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Plan d'apprentissage</CardTitle>
            <CardDescription>Créer un plan d'apprentissage personnalisé</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Crée un plan d'apprentissage détaillé pour maîtriser [sujet] en [durée]. Inclus des ressources, des étapes
              progressives et des objectifs mesurables.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Éducation</Badge>
              <Badge variant="secondary">Planification</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" size="sm">
              <Copy className="h-4 w-4 mr-2" />
              Copier
            </Button>
            <Link href="/catalogue/plan-apprentissage">
              <Button variant="ghost" size="sm">
                Détails <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Brainstorming d'idées</CardTitle>
            <CardDescription>Générer des idées créatives</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Propose 10 idées créatives et innovantes pour [projet/problème]. Assure-toi que les idées soient variées,
              réalisables et originales.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Créativité</Badge>
              <Badge variant="secondary">Innovation</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" size="sm">
              <Copy className="h-4 w-4 mr-2" />
              Copier
            </Button>
            <Link href="/catalogue/brainstorming">
              <Button variant="ghost" size="sm">
                Détails <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Amélioration de texte</CardTitle>
            <CardDescription>Améliorer la qualité d'un texte</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Améliore ce texte en le rendant plus clair, plus concis et plus engageant. Corrige les erreurs
              grammaticales et améliore la structure.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Rédaction</Badge>
              <Badge variant="secondary">Communication</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" size="sm">
              <Copy className="h-4 w-4 mr-2" />
              Copier
            </Button>
            <Link href="/catalogue/amelioration-texte">
              <Button variant="ghost" size="sm">
                Détails <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Analyse SWOT</CardTitle>
            <CardDescription>Analyser forces, faiblesses, opportunités et menaces</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Réalise une analyse SWOT complète pour [projet/entreprise/idée]. Identifie les forces, faiblesses,
              opportunités et menaces de manière détaillée.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Business</Badge>
              <Badge variant="secondary">Stratégie</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" size="sm">
              <Copy className="h-4 w-4 mr-2" />
              Copier
            </Button>
            <Link href="/catalogue/analyse-swot">
              <Button variant="ghost" size="sm">
                Détails <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Explication simplifiée</CardTitle>
            <CardDescription>Expliquer un concept complexe simplement</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Explique [concept complexe] comme si tu parlais à un enfant de 10 ans. Utilise des analogies simples et un
              langage accessible.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Éducation</Badge>
              <Badge variant="secondary">Communication</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" size="sm">
              <Copy className="h-4 w-4 mr-2" />
              Copier
            </Button>
            <Link href="/catalogue/explication-simplifiee">
              <Button variant="ghost" size="sm">
                Détails <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="text-center">
        <Button>
          Voir plus de prompts <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
