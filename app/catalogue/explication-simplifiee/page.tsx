"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumb } from "@/components/breadcrumb"
import { PromptCard } from "@/components/prompt-card"

export default function ExplicationSimplifiee() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Catalogue", href: "/catalogue" },
          { label: "Explication simplifiée", href: "/catalogue/explication-simplifiee", active: true },
        ]}
      />

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Explication simplifiée</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Transformez des concepts complexes en explications claires et accessibles. Découvrez comment utiliser l'IA
          pour rendre compréhensible même les sujets les plus techniques.
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
            title="Explication simple"
            description="Une explication basique adaptée à un public non-technique"
            level="Débutant"
            techniques={["Zero-Shot"]}
            promptText={`Explique le concept de blockchain comme si tu parlais à quelqu'un qui n'a aucune connaissance technique.`}
          />

          {/* Prompt Intermédiaire */}
          <PromptCard
            title="Explication structurée par étapes"
            description="Une explication progressive avec raisonnement explicite"
            level="Intermédiaire"
            techniques={["Chain-of-Thought"]}
            promptText={`Explique le concept de blockchain à quelqu'un qui n'a aucune connaissance technique en suivant ces étapes de raisonnement:

1. Commence par identifier le problème fondamental que la blockchain résout (la confiance entre inconnus)
2. Utilise une analogie simple et quotidienne pour représenter ce concept abstrait
3. Explique progressivement les caractéristiques essentielles:
   - Comment l'information est stockée et partagée
   - Pourquoi elle est difficile à falsifier
   - Comment les participants valident les informations
4. Illustre avec un exemple concret et simple
5. Termine en expliquant pourquoi cette technologie est considérée comme importante

Assure-toi d'éviter tout jargon technique, et si tu dois utiliser un terme spécialisé, explique-le immédiatement avec des mots simples.`}
          />

          {/* Prompt Avancé */}
          <PromptCard
            title="Explication personnalisée et contextualisée"
            description="Une explication sur mesure adaptée à un profil spécifique"
            level="Avancé"
            techniques={["Generated Knowledge", "Contextual Augmentation"]}
            promptText={`Pour créer une explication parfaitement adaptée de la blockchain:

ÉTAPE 1: GÉNÈRE D'ABORD CES CONNAISSANCES DE BASE
- Quelles sont les principales difficultés conceptuelles que rencontrent les novices face au concept de blockchain?
- Quelles analogies se sont avérées les plus efficaces pour expliquer ce concept?
- Quelles sont les idées fausses les plus communes à éviter?
- Quels exemples quotidiens concrets peuvent illustrer chaque aspect-clé?

CONTEXTE: L'explication est destinée à une personne de 65 ans qui:
- Utilise internet principalement pour les emails et les appels vidéo
- Comprend le concept de compte bancaire en ligne
- S'intéresse aux nouvelles technologies par curiosité
- A entendu parler de Bitcoin aux informations mais trouve le sujet confus
- Apprend mieux par des exemples concrets et des histoires

CONSIGNES D'EXPLICATION:
1. Commence par une accroche reliant le concept à quelque chose de familier pour cette personne
2. Utilise une métaphore principale basée sur un système que cette personne comprend déjà (ex: système qu'elle utilisait dans sa vie professionnelle ou quotidienne)
3. Décompose l'explication en 3-4 mini-concepts maximum
4. Pour chaque concept:
   - Explique d'abord "pourquoi" c'est important avant le "comment"
   - Utilise un langage visuel et concret
   - Relie à une expérience quotidienne
5. Anticipe 1-2 questions que cette personne pourrait se poser et réponds-y
6. Termine par une application pratique qui pourrait l'intéresser personnellement

CONTRAINTES:
- N'utilise aucun mot technique sans l'expliquer immédiatement
- Phrases de 15 mots maximum
- Évite toute référence à la cryptographie ou aux mécanismes de consensus complexes
- N'utilise pas d'exemples liés aux cryptomonnaies pour commencer`}
          />
        </TabsContent>

        <TabsContent value="debutant" className="space-y-8 mt-6">
          <PromptCard
            title="Explication simple"
            description="Une explication basique adaptée à un public non-technique"
            level="Débutant"
            techniques={["Zero-Shot"]}
            promptText={`Explique le concept de blockchain comme si tu parlais à quelqu'un qui n'a aucune connaissance technique.`}
          />
        </TabsContent>

        <TabsContent value="intermediaire" className="space-y-8 mt-6">
          <PromptCard
            title="Explication structurée par étapes"
            description="Une explication progressive avec raisonnement explicite"
            level="Intermédiaire"
            techniques={["Chain-of-Thought"]}
            promptText={`Explique le concept de blockchain à quelqu'un qui n'a aucune connaissance technique en suivant ces étapes de raisonnement:

1. Commence par identifier le problème fondamental que la blockchain résout (la confiance entre inconnus)
2. Utilise une analogie simple et quotidienne pour représenter ce concept abstrait
3. Explique progressivement les caractéristiques essentielles:
   - Comment l'information est stockée et partagée
   - Pourquoi elle est difficile à falsifier
   - Comment les participants valident les informations
4. Illustre avec un exemple concret et simple
5. Termine en expliquant pourquoi cette technologie est considérée comme importante

Assure-toi d'éviter tout jargon technique, et si tu dois utiliser un terme spécialisé, explique-le immédiatement avec des mots simples.`}
          />
        </TabsContent>

        <TabsContent value="avance" className="space-y-8 mt-6">
          <PromptCard
            title="Explication personnalisée et contextualisée"
            description="Une explication sur mesure adaptée à un profil spécifique"
            level="Avancé"
            techniques={["Generated Knowledge", "Contextual Augmentation"]}
            promptText={`Pour créer une explication parfaitement adaptée de la blockchain:

ÉTAPE 1: GÉNÈRE D'ABORD CES CONNAISSANCES DE BASE
- Quelles sont les principales difficultés conceptuelles que rencontrent les novices face au concept de blockchain?
- Quelles analogies se sont avérées les plus efficaces pour expliquer ce concept?
- Quelles sont les idées fausses les plus communes à éviter?
- Quels exemples quotidiens concrets peuvent illustrer chaque aspect-clé?

CONTEXTE: L'explication est destinée à une personne de 65 ans qui:
- Utilise internet principalement pour les emails et les appels vidéo
- Comprend le concept de compte bancaire en ligne
- S'intéresse aux nouvelles technologies par curiosité
- A entendu parler de Bitcoin aux informations mais trouve le sujet confus
- Apprend mieux par des exemples concrets et des histoires

CONSIGNES D'EXPLICATION:
1. Commence par une accroche reliant le concept à quelque chose de familier pour cette personne
2. Utilise une métaphore principale basée sur un système que cette personne comprend déjà (ex: système qu'elle utilisait dans sa vie professionnelle ou quotidienne)
3. Décompose l'explication en 3-4 mini-concepts maximum
4. Pour chaque concept:
   - Explique d'abord "pourquoi" c'est important avant le "comment"
   - Utilise un langage visuel et concret
   - Relie à une expérience quotidienne
5. Anticipe 1-2 questions que cette personne pourrait se poser et réponds-y
6. Termine par une application pratique qui pourrait l'intéresser personnellement

CONTRAINTES:
- N'utilise aucun mot technique sans l'expliquer immédiatement
- Phrases de 15 mots maximum
- Évite toute référence à la cryptographie ou aux mécanismes de consensus complexes
- N'utilise pas d'exemples liés aux cryptomonnaies pour commencer`}
          />
        </TabsContent>
      </Tabs>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-12">
        <h2 className="text-2xl font-bold mb-4">À propos de l'explication simplifiée</h2>
        <p className="mb-4">
          L'art d'expliquer des concepts complexes de manière simple est une compétence précieuse. Une bonne explication
          simplifiée rend accessible des idées difficiles sans les dénaturer.
        </p>
        <p className="mb-4">
          <strong>Quand utiliser l'explication simplifiée ?</strong> Pour la vulgarisation scientifique, l'éducation, la
          communication avec des clients non-techniques, ou pour vous assurer que vous-même comprenez bien un concept.
        </p>
        <p>
          <strong>Comment exploiter les résultats ?</strong> Utilisez ces explications pour créer du contenu éducatif,
          pour préparer des présentations, ou pour améliorer votre propre compréhension d'un sujet complexe.
        </p>
      </div>
    </div>
  )
}
