"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumb } from "@/components/breadcrumb"
import { PromptCard } from "@/components/prompt-card"

export default function ResumeArticlePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Catalogue", href: "/catalogue" },
          { label: "Résumé d'articles", href: "/catalogue/resume-article", active: true },
        ]}
      />

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Résumé d'articles</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Utilisez l'IA pour créer des résumés concis et pertinents de vos articles, rapports ou documents. Découvrez
          différentes techniques de prompting pour obtenir des résumés de qualité adaptés à vos besoins.
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
            title="Résumé Simple"
            description="Un résumé basique en quelques points clés"
            level="Débutant"
            techniques={["Zero-Shot"]}
            promptText={`Résume l'article suivant en 3-5 points clés :
[Insérer l'article ici]`}
          />

          {/* Prompt Intermédiaire */}
          <PromptCard
            title="Résumé Guidé par l'Exemple"
            description="Un résumé basé sur un exemple de format"
            level="Intermédiaire"
            techniques={["One-Shot"]}
            promptText={`Voici un exemple de résumé efficace d'un article:

Article original: "L'étude menée par l'Université de Stanford sur 1200 participants pendant 3 ans montre que l'exercice quotidien de 30 minutes réduit le risque de maladies cardiovasculaires de 45%, améliore la qualité du sommeil de 60% et diminue les symptômes de dépression de 30%. Les chercheurs recommandent particulièrement la marche, la natation et le cyclisme pour des bénéfices optimaux."

Résumé: 
- Une étude de Stanford sur 1200 personnes démontre que 30 minutes d'exercice quotidien réduisent significativement les risques cardiovasculaires (-45%)
- Les bienfaits s'étendent à la qualité du sommeil (+60%) et à la santé mentale (symptômes dépressifs -30%)
- Marche, natation et cyclisme sont les activités les plus recommandées par les chercheurs

En utilisant ce format concis et informatif, résume l'article suivant en 3-5 points clés :
[Insérer l'article ici]`}
          />

          {/* Prompt Avancé */}
          <PromptCard
            title="Résumé Structuré et Analytique"
            description="Un résumé méthodique avec analyse approfondie"
            level="Avancé"
            techniques={["Chain-of-Thought", "Template Filling"]}
            promptText={`Réalise un résumé structuré de l'article ci-dessous en suivant ces étapes précises :

ARTICLE:
[Insérer l'article ici]

INSTRUCTIONS:
1. Analyse d'abord la structure de l'article et identifie :
   - Le sujet principal et l'angle d'approche
   - Les arguments/données clés (chiffres, statistiques, citations importantes)
   - Les conclusions ou implications principales

2. Élabore ensuite un résumé en respectant ce modèle :
   [TITRE] : Crée un titre de 8-10 mots capturant l'essence de l'article
   
   [CONTEXTE] : En 1-2 phrases, situe le sujet dans son contexte plus large
   
   [POINTS CLÉS] : Présente 3-5 points essentiels de l'article, classés par ordre d'importance (non par ordre d'apparition)
   
   [CONCLUSION] : En 1 phrase, résume la conclusion principale ou l'implication future

3. Veille à ce que ton résumé :
   - Soit objectif et fidèle au contenu original sans introduire de biais
   - Préserve les nuances importantes du texte source
   - Conserve les données chiffrées précises si elles sont centrales à l'argumentation
   - Ne dépasse pas 200 mots au total

Fournis enfin une estimation de la réduction en taille (%) par rapport au texte original.`}
          />
        </TabsContent>

        <TabsContent value="debutant" className="space-y-8 mt-6">
          <PromptCard
            title="Résumé Simple"
            description="Un résumé basique en quelques points clés"
            level="Débutant"
            techniques={["Zero-Shot"]}
            promptText={`Résume l'article suivant en 3-5 points clés :
[Insérer l'article ici]`}
          />
        </TabsContent>

        <TabsContent value="intermediaire" className="space-y-8 mt-6">
          <PromptCard
            title="Résumé Guidé par l'Exemple"
            description="Un résumé basé sur un exemple de format"
            level="Intermédiaire"
            techniques={["One-Shot"]}
            promptText={`Voici un exemple de résumé efficace d'un article:

Article original: "L'étude menée par l'Université de Stanford sur 1200 participants pendant 3 ans montre que l'exercice quotidien de 30 minutes réduit le risque de maladies cardiovasculaires de 45%, améliore la qualité du sommeil de 60% et diminue les symptômes de dépression de 30%. Les chercheurs recommandent particulièrement la marche, la natation et le cyclisme pour des bénéfices optimaux."

Résumé: 
- Une étude de Stanford sur 1200 personnes démontre que 30 minutes d'exercice quotidien réduisent significativement les risques cardiovasculaires (-45%)
- Les bienfaits s'étendent à la qualité du sommeil (+60%) et à la santé mentale (symptômes dépressifs -30%)
- Marche, natation et cyclisme sont les activités les plus recommandées par les chercheurs

En utilisant ce format concis et informatif, résume l'article suivant en 3-5 points clés :
[Insérer l'article ici]`}
          />
        </TabsContent>

        <TabsContent value="avance" className="space-y-8 mt-6">
          <PromptCard
            title="Résumé Structuré et Analytique"
            description="Un résumé méthodique avec analyse approfondie"
            level="Avancé"
            techniques={["Chain-of-Thought", "Template Filling"]}
            promptText={`Réalise un résumé structuré de l'article ci-dessous en suivant ces étapes précises :

ARTICLE:
[Insérer l'article ici]

INSTRUCTIONS:
1. Analyse d'abord la structure de l'article et identifie :
   - Le sujet principal et l'angle d'approche
   - Les arguments/données clés (chiffres, statistiques, citations importantes)
   - Les conclusions ou implications principales

2. Élabore ensuite un résumé en respectant ce modèle :
   [TITRE] : Crée un titre de 8-10 mots capturant l'essence de l'article
   
   [CONTEXTE] : En 1-2 phrases, situe le sujet dans son contexte plus large
   
   [POINTS CLÉS] : Présente 3-5 points essentiels de l'article, classés par ordre d'importance (non par ordre d'apparition)
   
   [CONCLUSION] : En 1 phrase, résume la conclusion principale ou l'implication future

3. Veille à ce que ton résumé :
   - Soit objectif et fidèle au contenu original sans introduire de biais
   - Préserve les nuances importantes du texte source
   - Conserve les données chiffrées précises si elles sont centrales à l'argumentation
   - Ne dépasse pas 200 mots au total

Fournis enfin une estimation de la réduction en taille (%) par rapport au texte original.`}
          />
        </TabsContent>
      </Tabs>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-12">
        <h2 className="text-2xl font-bold mb-4">À propos du résumé d'articles</h2>
        <p className="mb-4">
          Le résumé d'articles est une compétence essentielle pour traiter efficacement de grandes quantités
          d'informations. Un bon résumé capture l'essence d'un texte tout en réduisant considérablement sa longueur.
        </p>
        <p className="mb-4">
          <strong>Quand utiliser le résumé d'articles ?</strong> Pour la veille informationnelle, la recherche
          documentaire, la préparation de rapports, ou simplement pour gagner du temps dans votre consommation
          d'informations.
        </p>
        <p>
          <strong>Comment exploiter les résultats ?</strong> Utilisez les résumés comme point de départ pour approfondir
          les sujets qui vous intéressent, pour partager des informations clés avec vos collègues, ou pour créer des
          bases de connaissances synthétiques.
        </p>
      </div>
    </div>
  )
}
