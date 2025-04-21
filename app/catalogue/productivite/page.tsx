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
import { PromptCard } from "@/components/prompt-card"

// Données des prompts pour la catégorie Productivité
const productivityPrompts = [
  {
    title: "Résumé d'article",
    description: "Créer un résumé concis d'un article",
    level: "Débutant",
    techniques: ["Zero-Shot", "One-Shot"],
    promptText:
      "Résume l'article suivant en 3-5 points clés, en conservant les informations essentielles et en éliminant les détails superflus:\n\n[Coller l'article ici]",
    category: "Productivité",
  },
  {
    title: "Plan de projet",
    description: "Créer un plan de projet structuré",
    level: "Intermédiaire",
    techniques: ["Few-Shot", "Chain-of-Thought"],
    promptText:
      "Aide-moi à créer un plan de projet détaillé pour [description du projet]. Inclus les phases principales, les jalons, les livrables, les ressources nécessaires et un calendrier estimatif.",
    category: "Productivité",
  },
  {
    title: "Automatisation de tâches",
    description: "Identifier les opportunités d'automatisation",
    level: "Avancé",
    techniques: ["Expert Role-Playing", "Chain-of-Thought"],
    promptText:
      "Agis comme un expert en automatisation des processus. Analyse mon flux de travail quotidien ci-dessous et identifie 5 opportunités d'automatisation qui me feraient gagner le plus de temps. Pour chaque opportunité, suggère des outils spécifiques et une approche étape par étape pour implémenter cette automatisation.\n\nMon flux de travail:\n[Description du flux de travail]",
    category: "Productivité",
  },
  {
    title: "Priorisation des tâches",
    description: "Organiser et prioriser une liste de tâches",
    level: "Débutant",
    techniques: ["Zero-Shot", "Chain-of-Thought"],
    promptText:
      "Voici ma liste de tâches pour aujourd'hui:\n\n[Liste de tâches]\n\nAide-moi à les organiser selon la matrice d'Eisenhower (Urgent/Important). Pour chaque tâche, indique sa catégorie et justifie brièvement ton choix. Ensuite, propose un ordre d'exécution optimal.",
    category: "Productivité",
  },
  {
    title: "Amélioration de processus",
    description: "Optimiser un processus existant",
    level: "Intermédiaire",
    techniques: ["Few-Shot", "Chain-of-Thought"],
    promptText:
      "Analyse le processus suivant et identifie les goulots d'étranglement, les redondances ou les étapes qui pourraient être optimisées. Propose ensuite une version améliorée du processus avec des justifications pour chaque modification.\n\nProcessus actuel:\n[Description du processus]",
    category: "Productivité",
  },
  {
    title: "Création de templates",
    description: "Générer des templates réutilisables",
    level: "Débutant",
    techniques: ["Zero-Shot"],
    promptText:
      "Crée un template réutilisable pour [type de document] qui inclut toutes les sections essentielles, des instructions pour chaque section, et des exemples de formulation. Le template doit être adapté pour [contexte/industrie].",
    category: "Productivité",
  },
  {
    title: "Analyse de données",
    description: "Extraire des insights de données",
    level: "Avancé",
    techniques: ["Few-Shot", "Chain-of-Thought"],
    promptText:
      "Agis comme un analyste de données. Examine les données suivantes et identifie les tendances principales, les anomalies et les insights actionnables. Présente ton analyse de façon structurée avec des recommandations concrètes.\n\nDonnées:\n[Données à analyser]",
    category: "Productivité",
  },
  {
    title: "Checklist de projet",
    description: "Créer une checklist exhaustive",
    level: "Intermédiaire",
    techniques: ["Few-Shot"],
    promptText:
      "Crée une checklist exhaustive pour [type de projet]. La checklist doit couvrir toutes les étapes de la préparation à la finalisation, inclure des points de contrôle qualité, et anticiper les problèmes potentiels.",
    category: "Productivité",
  },
  {
    title: "Rédaction d'emails",
    description: "Générer des emails professionnels",
    level: "Débutant",
    techniques: ["Zero-Shot", "One-Shot"],
    promptText:
      "Rédige un email professionnel pour [contexte/situation]. L'email doit être [ton souhaité: formel/amical/persuasif], inclure [éléments spécifiques], et se terminer par un appel à l'action clair.",
    category: "Productivité",
  },
  {
    title: "Prise de décision",
    description: "Analyser les options pour une décision",
    level: "Avancé",
    techniques: ["Chain-of-Thought", "Few-Shot"],
    promptText:
      "Je dois prendre une décision concernant [description de la décision]. Voici les options que j'envisage:\n\n[Liste des options]\n\nPour chaque option, analyse les avantages, les inconvénients, les risques et les opportunités. Utilise une approche structurée et logique. Termine par une recommandation justifiée.",
    category: "Productivité",
  },
  {
    title: "Préparation de réunion",
    description: "Structurer une réunion efficace",
    level: "Intermédiaire",
    techniques: ["Zero-Shot", "Few-Shot"],
    promptText:
      "Aide-moi à préparer une réunion efficace sur [sujet de la réunion] avec [nombre] participants. Crée un agenda structuré avec des durées estimées, des objectifs clairs pour chaque section, des questions à poser, et des techniques pour maintenir l'engagement et la productivité.",
    category: "Productivité",
  },
  {
    title: "Feedback constructif",
    description: "Formuler un feedback efficace",
    level: "Intermédiaire",
    techniques: ["Few-Shot", "Chain-of-Thought"],
    promptText:
      "Je dois donner un feedback à [personne/équipe] concernant [situation/projet]. Aide-moi à structurer ce feedback de manière constructive en utilisant le modèle SBI (Situation-Behavior-Impact). Le feedback doit être spécifique, actionnable et équilibré entre points positifs et axes d'amélioration.",
    category: "Productivité",
  },
]

export default function ProductivitePage() {
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
            <BreadcrumbLink href="/catalogue/productivite">Productivité</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Prompts de Productivité</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {productivityPrompts.length} prompts pour optimiser votre temps, améliorer votre organisation et maximiser
          votre efficacité.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {productivityPrompts.map((prompt, index) => (
          <PromptCard
            key={index}
            title={prompt.title}
            description={prompt.description}
            level={prompt.level as any}
            techniques={prompt.techniques}
            promptText={prompt.promptText}
            category={prompt.category}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Vous avez une idée de prompt pour la productivité?</p>
        <Link href="/proposer">
          <Button>
            Proposer un prompt <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
