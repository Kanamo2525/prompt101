import Link from "next/link"
import { Search, Brain, BookOpen, Clock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import MatrixComponent from "@/components/matrix-component"
// Ajouter l'import du composant PDFDownloadButton
import { PDFDownloadButton } from "@/components/pdf-download-button"

export default function HomePage() {
  // Hardcoded categories for the homepage to avoid database issues
  const categories = [
    {
      id: "personal-development",
      title: "Développement personnel",
      icon: <Brain className="w-5 h-5 text-purple-600" />,
      color: "border-purple-600",
      description:
        "Prompts pour analyser vos finances, surmonter des défis, fixer des objectifs personnels et développer vos compétences.",
      promptCount: 17,
    },
    {
      id: "education",
      title: "Éducation",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
      color: "border-blue-600",
      description:
        "Prompts pour améliorer vos stratégies d'apprentissage, analyser vos besoins éducatifs et planifier vos études efficacement.",
      promptCount: 15,
    },
    {
      id: "time-management",
      title: "Gestion du temps",
      icon: <Clock className="w-5 h-5 text-green-600" />,
      color: "border-green-600",
      description:
        "Prompts pour optimiser vos routines quotidiennes, automatiser les tâches répétitives et améliorer votre productivité.",
      promptCount: 15,
    },
    {
      id: "healthy-lifestyle",
      title: "Mode de vie sain",
      icon: <Heart className="w-5 h-5 text-red-600" />,
      color: "border-red-600",
      description:
        "Prompts pour créer des plans de remise en forme, recommander des plans de repas sains et améliorer votre bien-être général.",
      promptCount: 17,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Optimisez votre utilisation de l'IA générative</h1>
            <p className="text-xl mb-8">
              Découvrez notre catalogue de prompts spécialisés et transformez votre approche de l'intelligence
              artificielle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/catalogue">Explorer le catalogue</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/methodes">Apprendre le prompting</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white shadow-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Rechercher un prompt par mot-clé, catégorie ou difficulté..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Matrix Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Matrice d'opportunité de l'IA générative</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Découvrez comment l'IA générative peut être utilisée dans différents contextes, de l'automatisation à
            l'exploration créative. Cette matrice vous aide à identifier les meilleures opportunités selon vos besoins.
          </p>
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
            <MatrixComponent />
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/methodes">En savoir plus sur les méthodes de prompting</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Thématiques de prompts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/categories/${category.id}`} className="block h-full">
                <div className={`h-full rounded-xl shadow-md overflow-hidden border-l-4 ${category.color}`}>
                  <div className="bg-white p-5 h-full flex flex-col">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-${category.color.split("-")[1]}-100`}>{category.icon}</div>
                        <h3 className="font-bold text-lg text-gray-800">{category.title}</h3>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500">{category.promptCount} prompts</span>
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600 text-sm flex-grow">{category.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#ia</span>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#prompts</span>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#template</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/catalogue">Voir toutes les thématiques</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Prompts Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Prompts les plus utilisés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Hardcoded popular prompts */}
            <Link href="/categories/personal-development/financial-analysis">
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-purple-600 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-lg mr-3">
                      <Brain className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium">Développement personnel</span>
                  </div>
                  <div className="flex">
                    <Search className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>
                <p className="text-gray-800">Analyser vos finances personnelles</p>
              </div>
            </Link>

            <Link href="/categories/education/learning-strategies">
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-blue-600 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium">Éducation</span>
                  </div>
                  <div className="flex">
                    <Search className="w-4 h-4 text-yellow-400" />
                    <Search className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>
                <p className="text-gray-800">Recommander des stratégies d'apprentissage</p>
              </div>
            </Link>

            <Link href="/categories/healthy-lifestyle/fitness-program">
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-red-600 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-lg mr-3">
                      <Heart className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-sm font-medium">Mode de vie sain</span>
                  </div>
                  <div className="flex">
                    <Search className="w-4 h-4 text-yellow-400" />
                    <Search className="w-4 h-4 text-yellow-400" />
                    <Search className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>
                <p className="text-gray-800">Créer un plan de remise en forme personnalisé</p>
              </div>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/catalogue">Explorer tous les prompts</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Ajouter le bouton de téléchargement dans une section appropriée */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8 flex justify-center">
            <PDFDownloadButton
              pdfUrl="/pdf/guide-prompting.pdf"
              fileName="Guide-Art-du-Prompting.pdf"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Next-ai.fr</h3>
              <p className="text-gray-400">Optimisez votre utilisation de l'intelligence artificielle générative</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Ressources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/catalogue" className="text-gray-400 hover:text-white">
                    Catalogue
                  </Link>
                </li>
                <li>
                  <Link href="/methodes" className="text-gray-400 hover:text-white">
                    Méthodes de prompting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contribuer</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/proposer" className="text-gray-400 hover:text-white">
                    Proposer un prompt
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Légal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/mentions-legales" className="text-gray-400 hover:text-white">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link href="/confidentialite" className="text-gray-400 hover:text-white">
                    Politique de confidentialité
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 Next-ai.fr. Guide des prompts pour l'IA générative.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
