import Link from "next/link"
import { ArrowRight, Copy, Search, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"

export default function ProfessionnelPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Catalogue", href: "/catalogue" },
          { label: "Professionnel", href: "/catalogue/professionnel", active: true },
        ]}
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Prompts Professionnels</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Des prompts optimisés pour les besoins professionnels et business.
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Analyse SWOT</CardTitle>
            <CardDescription>Analyser forces, faiblesses, opportunités et menaces</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Réalise une analyse SWOT complète pour un projet ou une entreprise. Identifie les forces, faiblesses,
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

        {/* Autres cartes de prompts professionnels */}
        <Card>
          <CardHeader>
            <CardTitle>Plan d'affaires</CardTitle>
            <CardDescription>Créer un business plan structuré</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Génère un plan d'affaires complet pour [type d'entreprise] incluant l'analyse de marché, la stratégie
              commerciale, les projections financières et le plan opérationnel.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Business</Badge>
              <Badge variant="secondary">Finance</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" size="sm">
              <Copy className="h-4 w-4 mr-2" />
              Copier
            </Button>
            <Link href="/catalogue/plan-affaires">
              <Button variant="ghost" size="sm">
                Détails <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Analyse de marché</CardTitle>
            <CardDescription>Évaluer un marché et sa concurrence</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Réalise une analyse de marché détaillée pour [secteur/produit] incluant la taille du marché, les
              tendances, les segments clés et une analyse des principaux concurrents.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Marketing</Badge>
              <Badge variant="secondary">Stratégie</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" size="sm">
              <Copy className="h-4 w-4 mr-2" />
              Copier
            </Button>
            <Link href="/catalogue/analyse-marche">
              <Button variant="ghost" size="sm">
                Détails <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
