"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumb } from "@/components/breadcrumb"
import { PromptCard } from "@/components/prompt-card"

export default function AmeliorationTextePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Catalogue", href: "/catalogue" },
          { label: "Amélioration de texte", href: "/catalogue/amelioration-texte", active: true },
        ]}
      />

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Amélioration de texte</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Transformez vos écrits en textes clairs, professionnels et engageants. Découvrez comment utiliser l'IA pour
          améliorer la qualité de vos contenus écrits.
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
            title="Amélioration simple"
            description="Une amélioration basique pour plus de clarté et de professionnalisme"
            level="Débutant"
            techniques={["Zero-Shot"]}
            promptText={`Améliore ce texte pour le rendre plus clair et professionnel :
[Insérer le texte ici]`}
          />

          {/* Prompt Intermédiaire */}
          <PromptCard
            title="Amélioration guidée par l'exemple"
            description="Une amélioration basée sur un exemple de transformation"
            level="Intermédiaire"
            techniques={["One-Shot"]}
            promptText={`Voici un exemple d'amélioration de texte:

Texte original:
"Notre logiciel fait plein de trucs utiles pour les entreprises. Il aide à faire les tâches plus vite et les gens l'aiment bien car c'est pas compliqué. On a beaucoup de clients qui disent que c'est super."

Texte amélioré:
"Notre solution logicielle offre de nombreuses fonctionnalités essentielles pour optimiser les processus opérationnels des entreprises. Elle permet d'accélérer significativement l'exécution des tâches quotidiennes tout en garantissant une interface intuitive appréciée par l'ensemble des utilisateurs. De nombreux témoignages clients attestent de la satisfaction et des bénéfices concrets apportés par notre outil."

En utilisant le même niveau d'amélioration, révise le texte suivant pour le rendre plus clair, professionnel et engageant :
[Insérer le texte ici]`}
          />

          {/* Prompt Avancé */}
          <PromptCard
            title="Amélioration progressive et analytique"
            description="Une amélioration méthodique avec analyse et transformation par étapes"
            level="Avancé"
            techniques={["Iterative Prompting", "Template Filling"]}
            promptText={`Je vais t'aider à améliorer ce texte en procédant par étapes successives. Pour chaque étape, je t'expliquerai les modifications apportées avant de passer à l'étape suivante.

TEXTE ORIGINAL:
[Insérer le texte ici]

PROCESSUS D'AMÉLIORATION:

ÉTAPE 1: ANALYSE STRUCTURELLE
Analysons d'abord la structure actuelle du texte:
- Objectif principal: [À identifier]
- Public cible: [À identifier]
- Ton actuel: [À identifier]
- Forces: [À identifier]
- Faiblesses: [À identifier]

ÉTAPE 2: CLARIFICATION DU CONTENU
Voici une première version améliorée qui clarifie les idées principales:
[Premier texte amélioré]

Modifications apportées:
- Organisation logique: [Explication]
- Précision du vocabulaire: [Explication]
- Clarification des concepts: [Explication]

ÉTAPE 3: AMÉLIORATION STYLISTIQUE
Voici une deuxième version qui améliore le style et l'engagement:
[Deuxième texte amélioré]

Modifications apportées:
- Dynamisme des phrases: [Explication]
- Variété syntaxique: [Explication]
- Ton professionnel: [Explication]

ÉTAPE 4: OPTIMISATION FINALE
Voici la version finale optimisée:
[Texte final]

Modifications apportées:
- Cohésion et transitions: [Explication]
- Impact et mémorabilité: [Explication]
- Adaptations spécifiques au public cible: [Explication]

RÉSUMÉ DES TRANSFORMATIONS:
- Réduction/Augmentation de longueur: [X%]
- Amélioration principale: [Point clé]
- Indice de lisibilité: [Avant/Après]`}
          />
        </TabsContent>

        <TabsContent value="debutant" className="space-y-8 mt-6">
          <PromptCard
            title="Amélioration simple"
            description="Une amélioration basique pour plus de clarté et de professionnalisme"
            level="Débutant"
            techniques={["Zero-Shot"]}
            promptText={`Améliore ce texte pour le rendre plus clair et professionnel :
[Insérer le texte ici]`}
          />
        </TabsContent>

        <TabsContent value="intermediaire" className="space-y-8 mt-6">
          <PromptCard
            title="Amélioration guidée par l'exemple"
            description="Une amélioration basée sur un exemple de transformation"
            level="Intermédiaire"
            techniques={["One-Shot"]}
            promptText={`Voici un exemple d'amélioration de texte:

Texte original:
"Notre logiciel fait plein de trucs utiles pour les entreprises. Il aide à faire les tâches plus vite et les gens l'aiment bien car c'est pas compliqué. On a beaucoup de clients qui disent que c'est super."

Texte amélioré:
"Notre solution logicielle offre de nombreuses fonctionnalités essentielles pour optimiser les processus opérationnels des entreprises. Elle permet d'accélérer significativement l'exécution des tâches quotidiennes tout en garantissant une interface intuitive appréciée par l'ensemble des utilisateurs. De nombreux témoignages clients attestent de la satisfaction et des bénéfices concrets apportés par notre outil."

En utilisant le même niveau d'amélioration, révise le texte suivant pour le rendre plus clair, professionnel et engageant :
[Insérer le texte ici]`}
          />
        </TabsContent>

        <TabsContent value="avance" className="space-y-8 mt-6">
          <PromptCard
            title="Amélioration progressive et analytique"
            description="Une amélioration méthodique avec analyse et transformation par étapes"
            level="Avancé"
            techniques={["Iterative Prompting", "Template Filling"]}
            promptText={`Je vais t'aider à améliorer ce texte en procédant par étapes successives. Pour chaque étape, je t'expliquerai les modifications apportées avant de passer à l'étape suivante.

TEXTE ORIGINAL:
[Insérer le texte ici]

PROCESSUS D'AMÉLIORATION:

ÉTAPE 1: ANALYSE STRUCTURELLE
Analysons d'abord la structure actuelle du texte:
- Objectif principal: [À identifier]
- Public cible: [À identifier]
- Ton actuel: [À identifier]
- Forces: [À identifier]
- Faiblesses: [À identifier]

ÉTAPE 2: CLARIFICATION DU CONTENU
Voici une première version améliorée qui clarifie les idées principales:
[Premier texte amélioré]

Modifications apportées:
- Organisation logique: [Explication]
- Précision du vocabulaire: [Explication]
- Clarification des concepts: [Explication]

ÉTAPE 3: AMÉLIORATION STYLISTIQUE
Voici une deuxième version qui améliore le style et l'engagement:
[Deuxième texte amélioré]

Modifications apportées:
- Dynamisme des phrases: [Explication]
- Variété syntaxique: [Explication]
- Ton professionnel: [Explication]

ÉTAPE 4: OPTIMISATION FINALE
Voici la version finale optimisée:
[Texte final]

Modifications apportées:
- Cohésion et transitions: [Explication]
- Impact et mémorabilité: [Explication]
- Adaptations spécifiques au public cible: [Explication]

RÉSUMÉ DES TRANSFORMATIONS:
- Réduction/Augmentation de longueur: [X%]
- Amélioration principale: [Point clé]
- Indice de lisibilité: [Avant/Après]`}
          />
        </TabsContent>
      </Tabs>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-12">
        <h2 className="text-2xl font-bold mb-4">À propos de l'amélioration de texte</h2>
        <p className="mb-4">
          L'amélioration de texte est une compétence essentielle pour toute communication écrite efficace. Un texte bien
          rédigé est plus clair, plus persuasif et plus engageant pour votre audience.
        </p>
        <p className="mb-4">
          <strong>Quand utiliser l'amélioration de texte ?</strong> Pour des emails professionnels, des rapports, des
          présentations, des articles de blog, des descriptions de produits, ou tout autre contenu écrit important.
        </p>
        <p>
          <strong>Comment exploiter les résultats ?</strong> Utilisez le texte amélioré comme version finale ou comme
          base pour vos propres modifications. Analysez les changements pour améliorer progressivement votre propre
          style d'écriture.
        </p>
      </div>
    </div>
  )
}
