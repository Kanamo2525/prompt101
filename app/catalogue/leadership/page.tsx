import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/catalogue">Catalogue</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/catalogue/leadership">Leadership</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Leadership</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez nos prompts spécialisés pour développer vos compétences en leadership selon trois dimensions
          essentielles
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Dimension 1: Le Leader Porteur de Performance</CardTitle>
            <CardDescription>Vision stratégique, prise de décision et pilotage de la performance</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Développez votre capacité à définir une vision claire, prendre des décisions stratégiques et piloter la
              performance de manière durable et éthique.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/catalogue/leadership/performance" className="w-full">
              <Button className="w-full">
                Explorer <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Dimension 2: Le Leader Porteur de Transformations</CardTitle>
            <CardDescription>Conduite du changement, agilité et gestion de la complexité</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Maîtrisez l'art de conduire le changement, développer l'agilité organisationnelle et naviguer dans des
              environnements complexes et incertains.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/catalogue/leadership/transformation" className="w-full">
              <Button className="w-full">
                Explorer <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Dimension 3: Le Leader Ouvert sur son Environnement</CardTitle>
            <CardDescription>Communication, développement des talents et intelligence relationnelle</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Perfectionnez votre communication, développez les talents de votre équipe et cultivez une intelligence
              relationnelle et émotionnelle avancée.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/catalogue/leadership/environnement" className="w-full">
              <Button className="w-full">
                Explorer <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Vous avez une idée de prompt pour le leadership?</p>
        <Link href="/proposer">
          <Button>
            Proposer un prompt <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
