import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Stratégie SEO | Prompt101.fr",
  description: "Découvrez notre stratégie d'optimisation pour les moteurs de recherche pour prompt101.fr",
  keywords: "SEO, référencement, optimisation moteurs de recherche, prompt engineering, IA générative",
}

export default function SEOPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à l'accueil
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Stratégie d'optimisation SEO</h1>
        <p className="text-xl text-gray-600 mb-8">
          Notre approche pour améliorer la visibilité de prompt101.fr dans les résultats de recherche.
        </p>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Optimisation technique</CardTitle>
              <CardDescription>
                Améliorations techniques pour faciliter l'indexation par les moteurs de recherche
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Métadonnées optimisées</span>
                    <p className="text-sm text-gray-600">
                      Balises title et description personnalisées pour chaque page avec des mots-clés pertinents.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Structure des URL</span>
                    <p className="text-sm text-gray-600">
                      URLs courtes, descriptives et contenant des mots-clés pertinents.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Sitemap XML</span>
                    <p className="text-sm text-gray-600">
                      Sitemap complet pour aider les moteurs de recherche à découvrir et indexer toutes les pages.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Fichier robots.txt</span>
                    <p className="text-sm text-gray-600">Instructions claires pour les robots d'indexation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Responsive design</span>
                    <p className="text-sm text-gray-600">
                      Site entièrement adapté aux appareils mobiles, un facteur de classement important pour Google.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Performance optimisée</span>
                    <p className="text-sm text-gray-600">
                      Temps de chargement rapide grâce à l'optimisation des images et du code.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Optimisation du contenu</CardTitle>
              <CardDescription>
                Stratégies pour créer un contenu de qualité qui répond aux attentes des utilisateurs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Recherche de mots-clés</span>
                    <p className="text-sm text-gray-600">
                      Identification des termes de recherche pertinents dans le domaine du prompt engineering et de l'IA
                      générative.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Contenu de qualité</span>
                    <p className="text-sm text-gray-600">
                      Articles détaillés, guides pratiques et exemples concrets pour chaque technique de prompting.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Structure hiérarchique</span>
                    <p className="text-sm text-gray-600">
                      Utilisation appropriée des balises de titre (H1, H2, H3) pour organiser le contenu de manière
                      logique.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Interliens</span>
                    <p className="text-sm text-gray-600">
                      Liens internes entre les pages pour créer une structure cohérente et faciliter la navigation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Images optimisées</span>
                    <p className="text-sm text-gray-600">
                      Images compressées avec des attributs alt descriptifs pour améliorer l'accessibilité et le
                      référencement.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Mise à jour régulière</span>
                    <p className="text-sm text-gray-600">
                      Contenu actualisé régulièrement pour rester pertinent et encourager les visites répétées.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Optimisation externe</CardTitle>
              <CardDescription>Stratégies pour développer la notoriété et l'autorité du site</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Backlinks de qualité</span>
                    <p className="text-sm text-gray-600">
                      Développement de liens entrants depuis des sites pertinents et autoritaires dans le domaine de
                      l'IA.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Présence sur les réseaux sociaux</span>
                    <p className="text-sm text-gray-600">
                      Partage actif du contenu sur les plateformes sociales pertinentes pour augmenter la visibilité.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Guest blogging</span>
                    <p className="text-sm text-gray-600">
                      Rédaction d'articles invités sur des blogs spécialisés en IA pour atteindre un public plus large.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Communauté</span>
                    <p className="text-sm text-gray-600">
                      Engagement avec la communauté francophone intéressée par l'IA générative et le prompt engineering.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Suivi et analyse</CardTitle>
              <CardDescription>Outils et méthodes pour mesurer et améliorer les performances SEO</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Google Search Console</span>
                    <p className="text-sm text-gray-600">
                      Suivi des performances dans les résultats de recherche, identification des problèmes d'indexation
                      et des opportunités d'amélioration.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Google Analytics</span>
                    <p className="text-sm text-gray-600">
                      Analyse du comportement des utilisateurs, des sources de trafic et des pages les plus
                      performantes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Audit SEO régulier</span>
                    <p className="text-sm text-gray-600">
                      Évaluation périodique des performances SEO pour identifier les points à améliorer.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">
            Cette stratégie SEO est en constante évolution pour s'adapter aux changements des algorithmes de recherche
            et aux besoins des utilisateurs.
          </p>
          <Button asChild>
            <Link href="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
