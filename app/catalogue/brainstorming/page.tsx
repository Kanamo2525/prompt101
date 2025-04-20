"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumb } from "@/components/breadcrumb"
import { PromptCard } from "@/components/prompt-card"

export default function BrainstormingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Catalogue", href: "/catalogue" },
          { label: "Brainstorming d'idées", href: "/catalogue/brainstorming", active: true },
        ]}
      />

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Brainstorming d'idées</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Stimulez votre créativité et générez des idées innovantes pour vos projets. Découvrez comment utiliser l'IA
          pour explorer de nouvelles perspectives et solutions originales.
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
            title="Brainstorming simple"
            description="Génération basique d'idées créatives"
            level="Débutant"
            techniques={["Zero-Shot"]}
            promptText={`Propose 10 idées créatives pour une campagne marketing destinée à promouvoir une application de fitness.`}
          />

          {/* Prompt Intermédiaire */}
          <PromptCard
            title="Brainstorming guidé par exemples"
            description="Génération d'idées inspirée par des exemples concrets"
            level="Intermédiaire"
            techniques={["Few-Shot"]}
            promptText={`Voici quelques exemples d'idées créatives pour des campagnes marketing qui ont bien fonctionné:

Exemple 1: "Adoptez un arbre" - Campagne écologique où chaque nouvel abonnement au service de streaming finançait la plantation d'un arbre, avec suivi GPS de "son" arbre pour l'utilisateur.

Exemple 2: "Inversion des rôles" - Campagne pour une marque de vêtements où les clients devenaient mannequins d'un jour, avec séances photo professionnelles et affichage en magasin.

Exemple 3: "Défis communautaires" - Application de livraison qui proposait des réductions collectives si un quartier atteignait un certain nombre de commandes dans la semaine, créant une dynamique d'entraide locale.

En suivant ces exemples d'idées innovantes et engageantes, propose 10 concepts créatifs pour une campagne marketing destinée à promouvoir une application de fitness qui se démarque de la concurrence.`}
          />

          {/* Prompt Avancé */}
          <PromptCard
            title="Brainstorming multi-expert"
            description="Génération d'idées par simulation d'une équipe d'experts"
            level="Avancé"
            techniques={["Multi-Prompting", "Expert Role-Playing"]}
            promptText={`Imagine que tu es une équipe de marketing composée de trois experts aux profils complémentaires:

1) EXPERT EN PSYCHOLOGIE COMPORTEMENTALE
En tant que spécialiste des mécanismes de motivation et d'engagement, propose 5 concepts de campagne pour une application de fitness basés sur:
- Les déclencheurs émotionnels qui poussent à l'action
- Les systèmes de récompense qui maintiennent l'engagement
- Les dynamiques sociales qui encouragent la persistance
- Les approches psychologiques pour surmonter la procrastination

2) EXPERT EN MARKETING DIGITAL INNOVANT
En tant que spécialiste des dernières tendances marketing, propose 5 concepts de campagne pour cette même application, en explorant:
- L'utilisation originale des technologies émergentes (RA, RV, IA)
- Les formats de contenu viraux sur les plateformes actuelles
- Les partenariats non conventionnels avec d'autres marques/influenceurs
- Les expériences utilisateur immersives et participatives

3) EXPERT EN DIFFÉRENCIATION STRATÉGIQUE
En tant que spécialiste du positionnement de marque, propose 5 angles uniques pour cette campagne, en considérant:
- Les segments de marché sous-exploités dans le domaine du fitness
- Les propositions de valeur distinctives face aux concurrents
- Les approches contraires aux conventions du secteur
- Les narratifs de marque qui créent une connexion émotionnelle durable

Pour chaque concept proposé par les trois experts, explique brièvement:
- Le mécanisme psychologique ou marketing sous-jacent
- Une mise en œuvre concrète (format, canaux, timing)
- Le résultat attendu en termes d'acquisition et de rétention

Termine par une synthèse des 3-4 idées les plus prometteuses qui combinent les perspectives des trois experts.`}
          />
        </TabsContent>

        <TabsContent value="debutant" className="space-y-8 mt-6">
          <PromptCard
            title="Brainstorming simple"
            description="Génération basique d'idées créatives"
            level="Débutant"
            techniques={["Zero-Shot"]}
            promptText={`Propose 10 idées créatives pour une campagne marketing destinée à promouvoir une application de fitness.`}
          />
        </TabsContent>

        <TabsContent value="intermediaire" className="space-y-8 mt-6">
          <PromptCard
            title="Brainstorming guidé par exemples"
            description="Génération d'idées inspirée par des exemples concrets"
            level="Intermédiaire"
            techniques={["Few-Shot"]}
            promptText={`Voici quelques exemples d'idées créatives pour des campagnes marketing qui ont bien fonctionné:

Exemple 1: "Adoptez un arbre" - Campagne écologique où chaque nouvel abonnement au service de streaming finançait la plantation d'un arbre, avec suivi GPS de "son" arbre pour l'utilisateur.

Exemple 2: "Inversion des rôles" - Campagne pour une marque de vêtements où les clients devenaient mannequins d'un jour, avec séances photo professionnelles et affichage en magasin.

Exemple 3: "Défis communautaires" - Application de livraison qui proposait des réductions collectives si un quartier atteignait un certain nombre de commandes dans la semaine, créant une dynamique d'entraide locale.

En suivant ces exemples d'idées innovantes et engageantes, propose 10 concepts créatifs pour une campagne marketing destinée à promouvoir une application de fitness qui se démarque de la concurrence.`}
          />
        </TabsContent>

        <TabsContent value="avance" className="space-y-8 mt-6">
          <PromptCard
            title="Brainstorming multi-expert"
            description="Génération d'idées par simulation d'une équipe d'experts"
            level="Avancé"
            techniques={["Multi-Prompting", "Expert Role-Playing"]}
            promptText={`Imagine que tu es une équipe de marketing composée de trois experts aux profils complémentaires:

1) EXPERT EN PSYCHOLOGIE COMPORTEMENTALE
En tant que spécialiste des mécanismes de motivation et d'engagement, propose 5 concepts de campagne pour une application de fitness basés sur:
- Les déclencheurs émotionnels qui poussent à l'action
- Les systèmes de récompense qui maintiennent l'engagement
- Les dynamiques sociales qui encouragent la persistance
- Les approches psychologiques pour surmonter la procrastination

2) EXPERT EN MARKETING DIGITAL INNOVANT
En tant que spécialiste des dernières tendances marketing, propose 5 concepts de campagne pour cette même application, en explorant:
- L'utilisation originale des technologies émergentes (RA, RV, IA)
- Les formats de contenu viraux sur les plateformes actuelles
- Les partenariats non conventionnels avec d'autres marques/influenceurs
- Les expériences utilisateur immersives et participatives

3) EXPERT EN DIFFÉRENCIATION STRATÉGIQUE
En tant que spécialiste du positionnement de marque, propose 5 angles uniques pour cette campagne, en considérant:
- Les segments de marché sous-exploités dans le domaine du fitness
- Les propositions de valeur distinctives face aux concurrents
- Les approches contraires aux conventions du secteur
- Les narratifs de marque qui créent une connexion émotionnelle durable

Pour chaque concept proposé par les trois experts, explique brièvement:
- Le mécanisme psychologique ou marketing sous-jacent
- Une mise en œuvre concrète (format, canaux, timing)
- Le résultat attendu en termes d'acquisition et de rétention

Termine par une synthèse des 3-4 idées les plus prometteuses qui combinent les perspectives des trois experts.`}
          />
        </TabsContent>
      </Tabs>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-12">
        <h2 className="text-2xl font-bold mb-4">À propos du brainstorming d'idées</h2>
        <p className="mb-4">
          Le brainstorming est une technique de créativité qui permet de générer un grand nombre d'idées sur un sujet
          donné. L'IA peut considérablement enrichir ce processus en apportant des perspectives nouvelles et en
          explorant des pistes auxquelles vous n'auriez pas pensé.
        </p>
        <p className="mb-4">
          <strong>Quand utiliser le brainstorming ?</strong> Lors du lancement d'un nouveau projet, pour résoudre un
          problème complexe, pour trouver des approches innovantes, ou simplement pour stimuler votre créativité.
        </p>
        <p>
          <strong>Comment exploiter les résultats ?</strong> Utilisez les idées générées comme point de départ,
          combinez-les, affinez-les et adaptez-les à votre contexte spécifique pour créer des solutions vraiment
          uniques.
        </p>
      </div>
    </div>
  )
}
