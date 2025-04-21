import type { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "Catalogue de prompts créatifs | Prompt101.fr",
  description:
    "Découvrez notre collection de prompts créatifs pour générer des idées innovantes, réaliser des brainstormings efficaces et stimuler votre créativité avec l'IA.",
}

// Données des prompts pour la catégorie Créativité
const creativityPrompts = [
  {
    title: "Brainstorming d'idées",
    description: "Générer des idées créatives",
    level: "Débutant",
    techniques: ["Zero-Shot", "Few-Shot"],
    promptText:
      "Propose 10 idées créatives et innovantes pour [projet/problème]. Assure-toi que les idées soient variées, réalisables et originales.",
    category: "Créativité",
  },
  {
    title: "Développement de personnage",
    description: "Créer un personnage complexe",
    level: "Intermédiaire",
    techniques: ["Chain-of-Thought", "Few-Shot"],
    promptText:
      "Crée un personnage complexe et nuancé pour une histoire se déroulant dans [setting/univers]. Développe sa personnalité, son apparence, son histoire personnelle, ses motivations, ses conflits internes et ses relations avec d'autres personnages.",
    category: "Créativité",
  },
  {
    title: "Création de métaphores",
    description: "Générer des métaphores originales",
    level: "Avancé",
    techniques: ["Few-Shot", "Chain-of-Thought"],
    promptText:
      "Génère 5 métaphores originales et évocatrices pour décrire [concept/émotion/situation]. Les métaphores doivent être fraîches (évite les clichés), visuellement riches et adaptées au ton [ton souhaité].",
    category: "Créativité",
  },
  {
    title: "Scénario alternatif",
    description: "Explorer des histoires alternatives",
    level: "Intermédiaire",
    techniques: ["Chain-of-Thought", "Few-Shot"],
    promptText:
      "Imagine un scénario alternatif où [événement historique/fictif] s'est déroulé différemment. Décris comment cela aurait changé le cours des événements, les conséquences à court et long terme, et comment le monde serait différent aujourd'hui.",
    category: "Créativité",
  },
  {
    title: "Design de concept",
    description: "Créer un concept visuel unique",
    level: "Avancé",
    techniques: ["Few-Shot", "Chain-of-Thought"],
    promptText:
      "Crée un concept visuel détaillé pour [objet/lieu/créature] qui combine des éléments de [style 1] et [style 2]. Décris son apparence, ses fonctionnalités, ses matériaux, ses couleurs et ce qui le rend unique et mémorable.",
    category: "Créativité",
  },
  {
    title: "Création de titre",
    description: "Générer des titres accrocheurs",
    level: "Débutant",
    techniques: ["Zero-Shot", "Few-Shot"],
    promptText:
      "Génère 10 titres accrocheurs pour [contenu: article/livre/vidéo] sur le thème de [thème]. Les titres doivent être concis, intrigants, et donner envie de découvrir le contenu. Varie les approches (question, chiffre, provocation, etc.).",
    category: "Créativité",
  },
  {
    title: "Fusion de concepts",
    description: "Combiner des idées disparates",
    level: "Intermédiaire",
    techniques: ["Chain-of-Thought", "Few-Shot"],
    promptText:
      "Combine ces deux concepts apparemment sans rapport: [concept 1] et [concept 2]. Explore comment ils pourraient s'intégrer pour créer quelque chose de nouveau et intéressant. Développe cette idée hybride en détaillant ses caractéristiques, applications potentielles et ce qui la rend unique.",
    category: "Créativité",
  },
  {
    title: "Création de monde",
    description: "Développer un univers cohérent",
    level: "Avancé",
    techniques: ["Chain-of-Thought", "Few-Shot"],
    promptText:
      "Crée un monde fictif original avec ses propres règles, cultures et histoire. Décris:\n- L'environnement physique et ses particularités\n- 2-3 cultures/civilisations principales et leurs relations\n- Les systèmes de croyance ou de magie\n- Les conflits centraux qui animent ce monde\n- Les aspects qui rendent ce monde unique",
    category: "Créativité",
  },
]

export default function CreativitePage() {
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
            <BreadcrumbLink href="/catalogue/creativite">Créativité</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Prompts de Créativité</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {creativityPrompts.length} prompts pour stimuler votre imagination, générer des idées originales et explorer
          de nouveaux concepts.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {creativityPrompts.map((prompt, index) => (
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
        <p className="text-gray-600 mb-4">Vous avez une idée de prompt pour la créativité?</p>
        <Link href="/proposer">
          <Button>
            Proposer un prompt <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
