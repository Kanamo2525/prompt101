"use client"

import { Copy } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumb } from "@/components/breadcrumb"

export default function AnalyseSWOTPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Catalogue", href: "/catalogue" },
          { label: "Analyse SWOT", href: "/catalogue/analyse-swot", active: true },
        ]}
      />

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Analyse SWOT</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          L'analyse SWOT (Forces, Faiblesses, Opportunités, Menaces) est un outil stratégique essentiel pour évaluer un
          projet ou une entreprise. Découvrez comment utiliser l'IA générative pour réaliser des analyses SWOT
          pertinentes et détaillées.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">Tous les niveaux</TabsTrigger>
          <TabsTrigger value="debutant">Débutant</TabsTrigger>
          <TabsTrigger value="intermediaire">Intermédiaire</TabsTrigger>
          <TabsTrigger value="avance">Avancé</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-8 mt-6">
          {/* Prompt Débutant */}
          <PromptCard
            title="Analyse SWOT Simple"
            description="Une analyse SWOT basique pour un projet ou une entreprise"
            level="Débutant"
            techniques={["Zero-Shot"]}
            promptText={`Réalise une analyse SWOT (forces, faiblesses, opportunités, menaces) pour mon projet d'ouvrir une petite librairie de quartier.`}
          />

          {/* Prompt Intermédiaire */}
          <PromptCard
            title="Analyse SWOT Structurée"
            description="Une analyse SWOT détaillée avec contexte et paramètres spécifiques"
            level="Intermédiaire"
            techniques={["RCT - Rôle, Contexte, Tâche"]}
            promptText={`En tant que consultant en stratégie d'entreprise,

Je prépare un plan d'affaires pour lancer une librairie indépendante dans un quartier résidentiel avec beaucoup de familles et près d'une université. Mon budget est limité, mais j'ai une solide connaissance en littérature et un réseau d'auteurs locaux.

Réalise une analyse SWOT complète de ce projet en identifiant 3-4 éléments pour chaque catégorie (Forces, Faiblesses, Opportunités, Menaces) et pour chaque point, ajoute une brève explication de son impact potentiel sur le succès du projet.`}
          />

          {/* Prompt Avancé */}
          <PromptCard
            title="Analyse SWOT Professionnelle"
            description="Une analyse SWOT approfondie avec méthodologie étape par étape et recommandations stratégiques"
            level="Avancé"
            techniques={["Chain-of-Thought", "Contextual Augmentation"]}
            promptText={`En tant que conseiller stratégique spécialisé dans le secteur de la distribution et de l'édition,

Analyse le projet d'ouverture d'une librairie indépendante dans le contexte actuel du marché, en considérant les éléments suivants:
- Localisation: quartier résidentiel aisé + campus universitaire à proximité
- Concurrence: une grande chaîne de librairies à 3 km, Amazon
- Ressources: budget de démarrage de 50 000€, expertise littéraire, réseau d'auteurs locaux
- Marché: intérêt croissant pour les événements littéraires locaux, hausse de 12% des ventes de livres indépendants

Procède étape par étape:
1. D'abord, analyse les forces intrinsèques du projet (ressources uniques, avantages compétitifs).
2. Ensuite, identifie les faiblesses structurelles (limitations en ressources, compétences manquantes).
3. Puis, explore les opportunités externes (tendances du marché, besoins non satisfaits).
4. Enfin, évalue les menaces potentielles (risques économiques, technologiques, concurrentiels).

Pour chaque élément identifié, explique:
- Son impact spécifique sur le modèle d'affaires
- Son niveau de priorité/importance (élevé, moyen, faible)
- Une suggestion stratégique pour maximiser/atténuer cet élément

Termine par une évaluation globale de la viabilité du projet avec 3 recommandations prioritaires pour assurer son succès.`}
          />
        </TabsContent>

        <TabsContent value="debutant" className="space-y-8 mt-6">
          <PromptCard
            title="Analyse SWOT Simple"
            description="Une analyse SWOT basique pour un projet ou une entreprise"
            level="Débutant"
            techniques={["Zero-Shot"]}
            promptText={`Réalise une analyse SWOT (forces, faiblesses, opportunités, menaces) pour mon projet d'ouvrir une petite librairie de quartier.`}
          />
        </TabsContent>

        <TabsContent value="intermediaire" className="space-y-8 mt-6">
          <PromptCard
            title="Analyse SWOT Structurée"
            description="Une analyse SWOT détaillée avec contexte et paramètres spécifiques"
            level="Intermédiaire"
            techniques={["RCT - Rôle, Contexte, Tâche"]}
            promptText={`En tant que consultant en stratégie d'entreprise,

Je prépare un plan d'affaires pour lancer une librairie indépendante dans un quartier résidentiel avec beaucoup de familles et près d'une université. Mon budget est limité, mais j'ai une solide connaissance en littérature et un réseau d'auteurs locaux.

Réalise une analyse SWOT complète de ce projet en identifiant 3-4 éléments pour chaque catégorie (Forces, Faiblesses, Opportunités, Menaces) et pour chaque point, ajoute une brève explication de son impact potentiel sur le succès du projet.`}
          />
        </TabsContent>

        <TabsContent value="avance" className="space-y-8 mt-6">
          <PromptCard
            title="Analyse SWOT Professionnelle"
            description="Une analyse SWOT approfondie avec méthodologie étape par étape et recommandations stratégiques"
            level="Avancé"
            techniques={["Chain-of-Thought", "Contextual Augmentation"]}
            promptText={`En tant que conseiller stratégique spécialisé dans le secteur de la distribution et de l'édition,

Analyse le projet d'ouverture d'une librairie indépendante dans le contexte actuel du marché, en considérant les éléments suivants:
- Localisation: quartier résidentiel aisé + campus universitaire à proximité
- Concurrence: une grande chaîne de librairies à 3 km, Amazon
- Ressources: budget de démarrage de 50 000€, expertise littéraire, réseau d'auteurs locaux
- Marché: intérêt croissant pour les événements littéraires locaux, hausse de 12% des ventes de livres indépendants

Procède étape par étape:
1. D'abord, analyse les forces intrinsèques du projet (ressources uniques, avantages compétitifs).
2. Ensuite, identifie les faiblesses structurelles (limitations en ressources, compétences manquantes).
3. Puis, explore les opportunités externes (tendances du marché, besoins non satisfaits).
4. Enfin, évalue les menaces potentielles (risques économiques, technologiques, concurrentiels).

Pour chaque élément identifié, explique:
- Son impact spécifique sur le modèle d'affaires
- Son niveau de priorité/importance (élevé, moyen, faible)
- Une suggestion stratégique pour maximiser/atténuer cet élément

Termine par une évaluation globale de la viabilité du projet avec 3 recommandations prioritaires pour assurer son succès.`}
          />
        </TabsContent>
      </Tabs>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-12">
        <h2 className="text-2xl font-bold mb-4">À propos de l'analyse SWOT</h2>
        <p className="mb-4">
          L'analyse SWOT est un outil stratégique qui permet d'évaluer les forces (Strengths), faiblesses (Weaknesses),
          opportunités (Opportunities) et menaces (Threats) d'un projet, d'une entreprise ou d'une idée.
        </p>
        <p className="mb-4">
          <strong>Quand utiliser l'analyse SWOT ?</strong> Lors du lancement d'un nouveau projet, de l'évaluation d'une
          stratégie existante, avant une prise de décision importante ou pour identifier des axes d'amélioration.
        </p>
        <p>
          <strong>Comment exploiter les résultats ?</strong> Utilisez les forces pour saisir les opportunités,
          travaillez sur les faiblesses pour les réduire, et anticipez les menaces en développant des stratégies
          d'atténuation.
        </p>
      </div>
    </div>
  )
}

interface PromptCardProps {
  title: string
  description: string
  level: "Débutant" | "Intermédiaire" | "Avancé"
  techniques: string[]
  promptText: string
}

function PromptCard({ title, description, level, techniques, promptText }: PromptCardProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(promptText)
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
          <Badge
            variant="outline"
            className={`${
              level === "Débutant"
                ? "bg-green-50 text-green-700 border-green-200"
                : level === "Intermédiaire"
                  ? "bg-blue-50 text-blue-700 border-blue-200"
                  : "bg-purple-50 text-purple-700 border-purple-200"
            }`}
          >
            {level}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">Techniques utilisées:</p>
          <div className="flex flex-wrap gap-2">
            {techniques.map((technique) => (
              <Badge key={technique} variant="secondary">
                {technique}
              </Badge>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200 font-mono text-sm whitespace-pre-wrap">
          {promptText}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={copyToClipboard} className="flex items-center gap-2">
          <Copy className="h-4 w-4" />
          Copier le prompt
        </Button>
      </CardFooter>
    </Card>
  )
}
