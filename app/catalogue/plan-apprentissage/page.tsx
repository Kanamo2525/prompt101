"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumb } from "@/components/breadcrumb"
import { PromptCard } from "@/components/prompt-card"

export default function PlanApprentissagePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Catalogue", href: "/catalogue" },
          { label: "Plan d'apprentissage", href: "/catalogue/plan-apprentissage", active: true },
        ]}
      />

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Plan d'apprentissage</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Créez des parcours d'apprentissage structurés et personnalisés pour maîtriser de nouvelles compétences.
          Découvrez comment utiliser l'IA pour élaborer des plans d'étude efficaces adaptés à vos objectifs.
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
            title="Plan d'apprentissage simple"
            description="Un plan basique pour acquérir une nouvelle compétence"
            level="Débutant"
            techniques={["Zero-Shot"]}
            promptText={`Crée un plan d'apprentissage pour maîtriser le développement web en 3 mois.`}
          />

          {/* Prompt Intermédiaire */}
          <PromptCard
            title="Plan d'apprentissage contextualisé"
            description="Un plan personnalisé avec contexte et objectifs spécifiques"
            level="Intermédiaire"
            techniques={["RCT - Rôle, Contexte, Tâche"]}
            promptText={`En tant que formateur spécialisé en développement de compétences numériques,

Je souhaite aider une personne qui possède des connaissances de base en HTML/CSS mais aucune expérience en JavaScript à devenir développeur web front-end junior en 3 mois. Elle peut consacrer 15 heures par semaine à cette formation et souhaite être capable de construire des interfaces interactives modernes.

Élabore un plan d'apprentissage semaine par semaine avec:
- Des objectifs hebdomadaires clairs et mesurables
- Des ressources gratuites ou peu coûteuses (tutoriels, documentation, projets pratiques)
- Des mini-projets progressifs pour mettre en pratique chaque compétence acquise
- Des points de contrôle pour évaluer sa progression`}
          />

          {/* Prompt Avancé */}
          <PromptCard
            title="Plan d'apprentissage complet et stratégique"
            description="Un plan d'apprentissage approfondi avec méthodologie et préparation professionnelle"
            level="Avancé"
            techniques={["Multi-Prompting", "Generated Knowledge"]}
            promptText={`Pour créer un plan d'apprentissage optimal en développement web front-end:

1) D'abord, génère les connaissances essentielles sur le marché actuel:
   - Quelles sont les compétences front-end les plus demandées en 2025?
   - Quelle est la progression logique d'apprentissage pour un débutant?
   - Quels sont les écueils fréquents et les facteurs de réussite dans cet apprentissage?
   - Quelles sont les meilleures ressources d'apprentissage (gratuites et payantes)?

2) En te basant sur ces connaissances, crée un plan d'apprentissage sur 12 semaines qui:
   - Commence par les fondamentaux et progresse vers les frameworks modernes
   - Alterne théorie (30%) et pratique (70%)
   - Intègre des projets concrets de complexité croissante
   - Prévoit des moments de révision et consolidation

3) Pour chaque semaine du plan, définis:
   - Objectifs d'apprentissage spécifiques et mesurables
   - Compétences techniques à acquérir
   - Ressources précises (cours, documentation, exercices)
   - Projet concret à réaliser
   - Critères d'auto-évaluation

4) Ajoute une section sur la méthodologie d'apprentissage efficace:
   - Techniques de gestion du temps et de maintien de motivation
   - Approche pour résoudre les problèmes techniques
   - Méthodes pour éviter la surcharge d'information
   - Stratégies pour intégrer cet apprentissage dans une vie déjà occupée

5) Termine par des conseils pour préparer la transition vers l'emploi:
   - Construction d'un portfolio
   - Préparation aux entretiens techniques
   - Ressources pour continuer à progresser après ce plan initial`}
          />
        </TabsContent>

        <TabsContent value="debutant" className="space-y-8 mt-6">
          <PromptCard
            title="Plan d'apprentissage simple"
            description="Un plan basique pour acquérir une nouvelle compétence"
            level="Débutant"
            techniques={["Zero-Shot"]}
            promptText={`Crée un plan d'apprentissage pour maîtriser le développement web en 3 mois.`}
          />
        </TabsContent>

        <TabsContent value="intermediaire" className="space-y-8 mt-6">
          <PromptCard
            title="Plan d'apprentissage contextualisé"
            description="Un plan personnalisé avec contexte et objectifs spécifiques"
            level="Intermédiaire"
            techniques={["RCT - Rôle, Contexte, Tâche"]}
            promptText={`En tant que formateur spécialisé en développement de compétences numériques,

Je souhaite aider une personne qui possède des connaissances de base en HTML/CSS mais aucune expérience en JavaScript à devenir développeur web front-end junior en 3 mois. Elle peut consacrer 15 heures par semaine à cette formation et souhaite être capable de construire des interfaces interactives modernes.

Élabore un plan d'apprentissage semaine par semaine avec:
- Des objectifs hebdomadaires clairs et mesurables
- Des ressources gratuites ou peu coûteuses (tutoriels, documentation, projets pratiques)
- Des mini-projets progressifs pour mettre en pratique chaque compétence acquise
- Des points de contrôle pour évaluer sa progression`}
          />
        </TabsContent>

        <TabsContent value="avance" className="space-y-8 mt-6">
          <PromptCard
            title="Plan d'apprentissage complet et stratégique"
            description="Un plan d'apprentissage approfondi avec méthodologie et préparation professionnelle"
            level="Avancé"
            techniques={["Multi-Prompting", "Generated Knowledge"]}
            promptText={`Pour créer un plan d'apprentissage optimal en développement web front-end:

1) D'abord, génère les connaissances essentielles sur le marché actuel:
   - Quelles sont les compétences front-end les plus demandées en 2025?
   - Quelle est la progression logique d'apprentissage pour un débutant?
   - Quels sont les écueils fréquents et les facteurs de réussite dans cet apprentissage?
   - Quelles sont les meilleures ressources d'apprentissage (gratuites et payantes)?

2) En te basant sur ces connaissances, crée un plan d'apprentissage sur 12 semaines qui:
   - Commence par les fondamentaux et progresse vers les frameworks modernes
   - Alterne théorie (30%) et pratique (70%)
   - Intègre des projets concrets de complexité croissante
   - Prévoit des moments de révision et consolidation

3) Pour chaque semaine du plan, définis:
   - Objectifs d'apprentissage spécifiques et mesurables
   - Compétences techniques à acquérir
   - Ressources précises (cours, documentation, exercices)
   - Projet concret à réaliser
   - Critères d'auto-évaluation

4) Ajoute une section sur la méthodologie d'apprentissage efficace:
   - Techniques de gestion du temps et de maintien de motivation
   - Approche pour résoudre les problèmes techniques
   - Méthodes pour éviter la surcharge d'information
   - Stratégies pour intégrer cet apprentissage dans une vie déjà occupée

5) Termine par des conseils pour préparer la transition vers l'emploi:
   - Construction d'un portfolio
   - Préparation aux entretiens techniques
   - Ressources pour continuer à progresser après ce plan initial`}
          />
        </TabsContent>
      </Tabs>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-12">
        <h2 className="text-2xl font-bold mb-4">À propos des plans d'apprentissage</h2>
        <p className="mb-4">
          Un plan d'apprentissage bien structuré est la clé pour acquérir efficacement de nouvelles compétences. Il
          permet d'organiser votre parcours, de maintenir votre motivation et d'atteindre vos objectifs dans un délai
          défini.
        </p>
        <p className="mb-4">
          <strong>Quand utiliser un plan d'apprentissage ?</strong> Lorsque vous souhaitez acquérir une nouvelle
          compétence, changer de carrière, approfondir vos connaissances dans un domaine, ou vous préparer à une
          certification.
        </p>
        <p>
          <strong>Comment exploiter les résultats ?</strong> Utilisez le plan comme feuille de route, adaptez-le à votre
          rythme et à vos contraintes, et n'hésitez pas à le réviser régulièrement en fonction de votre progression.
        </p>
      </div>
    </div>
  )
}
