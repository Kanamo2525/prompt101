import type { Metadata } from "next"
import { PromptCard } from "@/components/prompt-card"

export const metadata: Metadata = {
  title: "Catalogue de prompts créatifs | Prompt101.fr",
  description:
    "Découvrez notre collection de prompts créatifs pour générer des idées innovantes, réaliser des brainstormings efficaces et stimuler votre créativité avec l'IA.",
}

export default function CreativitePage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Prompts pour la créativité</h1>
        <p className="text-xl text-muted-foreground">
          Explorez notre collection de prompts créatifs pour stimuler l'innovation, générer des idées originales et
          faciliter vos sessions de brainstorming avec l'IA.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Création d'idées innovantes</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PromptCard
            title="Générateur d'idées simple"
            description="Un prompt basique pour générer rapidement des idées innovantes sur n'importe quel sujet."
            level="Débutant"
            techniques={["Zero-Shot"]}
            promptText={`Génère 10 idées innovantes pour résoudre le problème de [décris ton problème].`}
            category="Créativité"
          />
          <PromptCard
            title="Idées innovantes avec contexte"
            description="Un prompt intermédiaire utilisant la technique RCT (Rôle, Contexte, Tâche) pour générer des idées plus ciblées et pertinentes."
            level="Intermédiaire"
            techniques={["RCT"]}
            promptText={`En tant qu'expert en innovation disruptive,

tu travailles avec une équipe pluridisciplinaire qui cherche à révolutionner [secteur/domaine] avec des approches non conventionnelles. Le marché actuel est saturé de solutions similaires et les consommateurs recherchent quelque chose de radicalement différent.

Propose 7 idées véritablement innovantes pour résoudre [problème spécifique], en expliquant pour chacune:
- Le concept central en une phrase
- Le caractère novateur de l'approche
- Un exemple concret d'application
- Le principal obstacle à surmonter pour sa mise en œuvre`}
            category="Créativité"
          />
          <PromptCard
            title="Innovation multi-perspectives"
            description="Un prompt avancé combinant plusieurs techniques pour générer des idées radicalement innovantes à partir de différentes perspectives."
            level="Avancé"
            techniques={["Multi-Prompting", "Generated Knowledge"]}
            promptText={`Pour générer des idées radicalement innovantes, adoptons trois perspectives différentes:

1) PERSPECTIVE DE DISRUPTION
   Commence par identifier les présupposés fondamentaux dans [domaine/problème]:
   - Quelles sont les croyances limitantes actuelles dans ce domaine?
   - Quels paradigmes semblent immuables mais pourraient être renversés?
   - Quelles seraient les 3 innovations les plus improbables mais transformatrices?

2) PERSPECTIVE DE CONVERGENCE TECHNOLOGIQUE
   Analyse comment la combinaison de technologies émergentes pourrait créer des solutions inédites:
   - Identifie 3 technologies en développement rapide susceptibles d'impact ce domaine
   - Pour chacune, projette son évolution probable dans 5-10 ans
   - Propose 3 convergences technologiques créant des solutions impossibles aujourd'hui

3) PERSPECTIVE BIOMIMÉTIQUE
   Recherche des modèles dans la nature qui pourraient inspirer des solutions:
   - Quels organismes ou écosystèmes ont résolu des problèmes similaires?
   - Comment ces solutions naturelles pourraient-elles être adaptées?
   - Propose 3 approches inspirées de principes biologiques

Pour chaque idée générée, évalue:
- Son potentiel transformateur (échelle 1-10)
- Sa faisabilité technique dans les 5 prochaines années (échelle 1-10)
- Son modèle économique potentiel

Conclus par une synthèse des 3 idées les plus prometteuses toutes perspectives confondues.`}
            category="Créativité"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Brainstorming à Six Chapeaux</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PromptCard
            title="Six Chapeaux simplifié"
            description="Une approche simplifiée de la méthode des Six Chapeaux de la Pensée d'Edward de Bono pour analyser un problème sous différents angles."
            level="Débutant"
            techniques={["One-Shot"]}
            promptText={`Exemple: Pour résoudre le problème de la congestion urbaine, je vais analyser la situation avec les Six Chapeaux de la Pensée:

Chapeau blanc (faits): 68% des habitants utilisent leur voiture personnelle pour des trajets inférieurs à 5 km. Les transports publics sont saturés aux heures de pointe.
Chapeau rouge (émotions): Les usagers sont frustrés et stressés par les embouteillages quotidiens.
Chapeau noir (critique): Les solutions actuelles de covoiturage ont échoué car elles manquent de flexibilité.
Chapeau jaune (optimisme): Le développement des micromobilités offre de nouvelles alternatives prometteuses.
Chapeau vert (créativité): On pourrait créer des "corridors intelligents" réservés aux transports partagés.
Chapeau bleu (organisation): Un plan en trois phases permettrait d'implémenter progressivement ces solutions.

Utilise la même méthode des Six Chapeaux de la Pensée pour analyser et trouver des solutions au problème suivant: [décris ton problème]`}
            category="Créativité"
          />
          <PromptCard
            title="Six Chapeaux structuré"
            description="Une approche plus structurée de la méthode des Six Chapeaux avec des étapes guidées pour chaque perspective."
            level="Intermédiaire"
            techniques={["Chain-of-Thought", "Template Filling"]}
            promptText={`Je vais t'aider à réaliser un brainstorming structuré selon la méthode des Six Chapeaux de la Pensée d'Edward de Bono pour résoudre [ton problème].

Procède par étapes successives en changeant de chapeau à chaque fois:

ÉTAPE 1: CHAPEAU BLANC - INFORMATION
Concentre-toi uniquement sur les faits et données objectives liés à [problème]:
- Quelles sont les statistiques pertinentes?
- Quelles informations manquent encore?
- Quelles tendances sont visibles dans les données?

ÉTAPE 2: CHAPEAU ROUGE - ÉMOTIONS
Exprime maintenant les réactions émotionnelles face à ce problème:
- Quels sentiments ce problème génère-t-il chez les personnes concernées?
- Quelles intuitions as-tu sur ce sujet (sans justification rationnelle)?
- Comment les solutions potentielles seraient-elles perçues émotionnellement?

ÉTAPE 3: CHAPEAU NOIR - CRITIQUE
Adopte maintenant une perspective critique:
- Quels sont les risques et obstacles majeurs?
- Pourquoi certaines solutions pourraient échouer?
- Quelles sont les limites des approches conventionnelles?

ÉTAPE 4: CHAPEAU JAUNE - OPTIMISME
Change de perspective pour identifier les opportunités:
- Quels sont les avantages potentiels de résoudre ce problème?
- Quelles sont les forces sur lesquelles s'appuyer?
- Quels scénarios optimistes peuvent être envisagés?

ÉTAPE 5: CHAPEAU VERT - CRÉATIVITÉ
Génère maintenant des idées créatives sans limite:
- Quelles approches radicalement différentes pourraient fonctionner?
- Comment combiner des concepts apparemment incompatibles?
- Si aucune contrainte n'existait, que proposerais-tu?

ÉTAPE 6: CHAPEAU BLEU - ORGANISATION
Enfin, organise la réflexion et les actions:
- Comment structurer les solutions proposées?
- Quel processus de mise en œuvre recommanderais-tu?
- Comment évaluer le succès des solutions retenues?

SYNTHÈSE:
Récapitule les principales perspectives et propose 3-5 solutions concrètes issues de cette réflexion complète.`}
            category="Créativité"
          />
          <PromptCard
            title="Six Chapeaux avec experts"
            description="Une simulation avancée de brainstorming où six experts incarnent chacun un chapeau différent pour une analyse complète et multidimensionnelle."
            level="Avancé"
            techniques={["Expert Role-Playing", "Contextual Augmentation"]}
            promptText={`Imaginons une séance de brainstorming avec six experts, chacun incarnant un des Six Chapeaux de la Pensée pour résoudre [ton problème spécifique].

CONTEXTE SUPPLÉMENTAIRE:
- Tendances actuelles: [ajoute 2-3 tendances pertinentes dans ce domaine]
- Contraintes: [précise les limitations budgétaires, temporelles ou autres]
- Tentatives précédentes: [mentionne les approches déjà essayées]
- Parties prenantes: [indique qui sera impacté par les solutions]

DÉROULEMENT DE LA SÉANCE:

EXPERT 1 - CHAPEAU BLANC (DATA SCIENTIST)
"Permettez-moi d'établir le cadre factuel de notre discussion. Voici ce que nos données révèlent..."
[L'expert présente une analyse approfondie des faits, données mesurables et informations objectives]

EXPERT 2 - CHAPEAU ROUGE (PSYCHOLOGUE COMPORTEMENTAL)
"Si nous considérons la dimension émotionnelle et intuitive de ce problème..."
[L'expert explore les réactions émotionnelles, les perceptions et l'acceptabilité des différentes approches]

EXPERT 3 - CHAPEAU NOIR (ANALYSTE DE RISQUES)
"Je dois attirer votre attention sur plusieurs obstacles potentiels..."
[L'expert examine les difficultés, dangers, inconvénients et points faibles des idées proposées]

EXPERT 4 - CHAPEAU JAUNE (STRATÈGE EN INNOVATION)
"Envisageons maintenant les opportunités que ce défi nous offre..."
[L'expert identifie les avantages, bénéfices et valeurs positives des différentes approches]

EXPERT 5 - CHAPEAU VERT (DESIGNER CRÉATIF)
"Et si nous pensions différemment? Considérons ces pistes inexploitées..."
[L'expert propose des idées radicales, des approches non conventionnelles et des solutions créatives]

EXPERT 6 - CHAPEAU BLEU (CHEF DE PROJET)
"Synthétisons notre réflexion et organisons notre approche..."
[L'expert structure le processus, établit des priorités et propose un plan d'action concret]

INTERACTIONS ENTRE EXPERTS:
[Simule quelques échanges constructifs entre les experts, chacun gardant sa perspective unique]

SYNTHÈSE FINALE:
Présente les 3-5 solutions les plus prometteuses issues de cette discussion multidimensionnelle, en détaillant pour chacune:
- Concept principal
- Avantages comparatifs
- Risques anticipés
- Plan de mise en œuvre
- Indicateurs de succès proposés`}
            category="Créativité"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Méthode SCAMPER</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PromptCard
            title="SCAMPER basique"
            description="Une application simple de la méthode SCAMPER pour améliorer un produit, service ou concept existant."
            level="Débutant"
            techniques={["Zero-Shot"]}
            promptText={`Utilise la méthode SCAMPER pour améliorer [produit/service/concept]:
1. Substituer: Que pourrait-on remplacer?
2. Combiner: Que pourrait-on fusionner?
3. Adapter: Comment l'adapter à un autre contexte?
4. Modifier: Que pourrait-on agrandir, réduire ou changer?
5. Produire: Quelles autres utilisations pourrait-on imaginer?
6. Éliminer: Que pourrait-on supprimer?
7. Réorganiser: Comment pourrait-on réarranger les éléments?`}
            category="Créativité"
          />
          <PromptCard
            title="SCAMPER avec exemple"
            description="Une application de la méthode SCAMPER avec un exemple concret pour guider la réflexion."
            level="Intermédiaire"
            techniques={["Few-Shot"]}
            promptText={`Voici comment la méthode SCAMPER a été appliquée pour réinventer la tasse à café classique:

SUBSTITUER:
- Exemple: Remplacer la céramique par un matériau thermosensible qui change de couleur selon la température
- Résultat: Une tasse qui indique visuellement si le café est trop chaud, à bonne température ou refroidi

COMBINER:
- Exemple: Fusionner la tasse avec un minuteur intégré
- Résultat: Une tasse qui signale quand le café est infusé à point ou rappelle de le boire avant qu'il ne refroidisse

ADAPTER:
- Exemple: Adapter le concept des thermos à double paroi pour une utilisation quotidienne
- Résultat: Une tasse à double paroi sous vide d'air, élégante pour tous les jours mais conservant la chaleur 3h

En suivant cette méthode SCAMPER complète, réinvente [produit/service/concept] en proposant des idées concrètes et innovantes pour chacune des 7 étapes (Substituer, Combiner, Adapter, Modifier, Produire, Éliminer, Réorganiser).`}
            category="Créativité"
          />
          <PromptCard
            title="SCAMPER itératif"
            description="Une approche itérative et approfondie de la méthode SCAMPER pour explorer chaque dimension en détail."
            level="Avancé"
            techniques={["Iterative Prompting"]}
            promptText={`Je vais t'aider à réinventer complètement [produit/service/concept] en utilisant la méthode SCAMPER de manière approfondie et progressive. Nous explorerons chaque dimension l'une après l'autre, en approfondissant progressivement les idées les plus prometteuses.

ÉTAPE 1: SUBSTITUTION
Commençons par identifier tous les éléments/aspects de [produit/service/concept] qui pourraient être substitués.
[Attends ma réponse avant de continuer]

ÉTAPE 2: APPROFONDISSEMENT DES SUBSTITUTIONS
Parmi les substitutions identifiées, explorons plus en détail les 2-3 plus prometteuses.
[Attends ma réponse avant de continuer]

ÉTAPE 3: COMBINAISON
Quels éléments ou concepts pourrions-nous combiner avec [produit/service/concept] pour créer de la valeur?
[Attends ma réponse avant de continuer]

ÉTAPE 4: ADAPTATION
Comment pourrions-nous adapter [produit/service/concept] à d'autres contextes, marchés ou usages?
[Attends ma réponse avant de continuer]

ÉTAPE 5: MODIFICATION
Quels aspects de [produit/service/concept] pourrions-nous accentuer, atténuer ou transformer?
[Attends ma réponse avant de continuer]

ÉTAPE 6: AUTRES USAGES
Quelles utilisations totalement différentes pourrions-nous imaginer pour [produit/service/concept]?
[Attends ma réponse avant de continuer]

ÉTAPE 7: ÉLIMINATION
Quels éléments pourrions-nous éliminer, simplifier ou réduire?
[Attends ma réponse avant de continuer]

ÉTAPE 8: RÉORGANISATION
Comment pourrions-nous réorganiser, inverser ou restructurer [produit/service/concept]?
[Attends ma réponse avant de continuer]

ÉTAPE 9: SYNTHÈSE DES MEILLEURES IDÉES
Suite à notre exploration SCAMPER complète, analysons les 3-5 idées les plus prometteuses et développons-les davantage.
[Attends ma réponse avant de continuer]

ÉTAPE 10: CONCEPT FINAL INNOVANT
Proposons maintenant une version entièrement réinventée de [produit/service/concept] qui intègre les meilleures idées de notre exploration.`}
            category="Créativité"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Autres techniques créatives</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PromptCard
            title="Brainstorming inversé"
            description="Une technique qui consiste à identifier toutes les façons de faire échouer un objectif pour ensuite trouver des solutions."
            level="Intermédiaire"
            techniques={["Chain-of-Thought"]}
            promptText={`Je vais utiliser la technique du brainstorming inversé pour trouver des solutions créatives à [ton objectif/problème]. 

Plutôt que de chercher directement des solutions, je vais d'abord explorer méthodiquement toutes les façons dont [ton objectif] pourrait échouer, puis en déduire des stratégies efficaces.

ÉTAPE 1: DÉFINIR L'ANTI-OBJECTIF
D'abord, clarifions exactement ce que nous voulons éviter. L'anti-objectif serait: "Comment garantir l'échec complet de [ton objectif]?"

ÉTAPE 2: IDENTIFIER LES VOIES D'ÉCHEC
Réfléchissons aux différentes catégories d'échecs possibles:
- Échecs liés aux ressources: Comment pourrait-on mal allouer le temps/budget/personnel?
- Échecs de conception: Quelles erreurs fondamentales de conception garantiraient l'échec?
- Échecs d'exécution: Quelles mauvaises pratiques lors de la mise en œuvre causeraient l'échec?
- Échecs relationnels: Comment les problèmes de communication ou de dynamique d'équipe pourraient saborder le projet?
- Échecs externes: Quels facteurs externes pourraient compromettre le succès?

ÉTAPE 3: DÉTAILLER CHAQUE VOIE D'ÉCHEC
Pour chaque catégorie, je vais maintenant détailler 3-5 façons spécifiques d'échouer.

ÉTAPE 4: INVERSER CHAQUE ÉCHEC
Pour chaque mode d'échec identifié, je vais maintenant formuler la solution préventive ou corrective correspondante.

ÉTAPE 5: PRIORISER LES SOLUTIONS
En analysant l'ensemble des solutions inversées, je vais identifier les plus impactantes selon:
- Leur potentiel à éviter plusieurs modes d'échec simultanément
- Leur faisabilité pratique
- Leur rapport coût/bénéfice

ÉTAPE 6: PLAN D'ACTION
Je vais finaliser avec un plan d'action concret comprenant:
- Les 3-5 solutions prioritaires à mettre en œuvre
- Les indicateurs permettant de vérifier que les risques d'échec sont bien écartés`}
            category="Créativité"
          />
          <PromptCard
            title="Figure Storming"
            description="Une technique qui consiste à aborder un problème en adoptant la perspective de personnalités inspirantes."
            level="Intermédiaire"
            techniques={["One-Shot"]}
            promptText={`Voici un exemple de figure storming pour améliorer l'engagement des employés:

ALBERT EINSTEIN:
Approche: Penser le problème de manière relative et conceptuelle
Perspective: "L'engagement est une question de perception du temps. Quand on est absorbé par une tâche passionnante, 8 heures paraissent 5 minutes."
Solutions proposées:
- Créer des "laboratoires d'idéation" où les employés expérimentent librement pendant 20% de leur temps
- Développer une "théorie de la relativité professionnelle" - adapter les responsabilités en fonction de la perception subjective du temps par chaque employé
- Établir des "paradoxes professionnels stimulants" - défis contre-intuitifs qui poussent à sortir des schémas habituels

Utilise maintenant cette même technique de figure storming pour résoudre [ton problème/défi] en te mettant dans la peau de:
1. [Personnalité historique]
2. [Expert contemporain dans un domaine pertinent]
3. [Personnage fictif connu pour sa créativité/sagesse]

Pour chaque personnage, analyse comment ils percevraient le problème selon leur vision du monde unique, puis développe 3-4 solutions spécifiques qui reflètent authentiquement leur approche distinctive.`}
            category="Créativité"
          />
          <PromptCard
            title="Méthode des 'Et si...'"
            description="Une technique qui remet en question les présupposés fondamentaux pour ouvrir des pistes de réflexion inexplorées."
            level="Intermédiaire"
            techniques={["Chain-of-Thought"]}
            promptText={`Je vais utiliser la méthode des "Et si..." pour explorer [ton problème/idée] sous des angles radicalement nouveaux. Cette technique consiste à remettre en question les présupposés fondamentaux pour ouvrir des pistes inexplorées.

ÉTAPE 1: IDENTIFIER LES PRÉSUPPOSÉS
D'abord, identifions les hypothèses et contraintes implicites que nous tenons pour acquises concernant [ton problème/idée]:
- Présupposé 1: [exemple d'une limitation ou croyance commune dans ce domaine]
- Présupposé 2: [autre limitation apparente]
- [Continuer avec 3-5 présupposés supplémentaires]

ÉTAPE 2: FORMULER DES QUESTIONS "ET SI..."
Pour chaque présupposé identifié, je vais maintenant formuler une question "Et si..." qui le renverse complètement:

Pour le présupposé 1:
- Et si [inversion radicale du présupposé]?
- Conséquences potentielles: [exploration des implications]
- Nouvelles possibilités: [opportunités créées par cette inversion]

[Répéter pour chaque présupposé]

ÉTAPE 3: EXPLORER DES INVERSIONS CONTEXTUELLES
Maintenant, examinons comment le problème changerait dans des contextes totalement différents:

- Et si cela se passait dans 100 ans?
- Et si les ressources étaient illimitées?
- Et si la technologie permettait de [capacité actuellement impossible]?
- Et si les règles sociales/légales étaient inversées?
- Et si nous devions résoudre ce problème pour des enfants? Des personnes âgées? Une autre espèce?

ÉTAPE 4: COMBINER LES PISTES LES PLUS PROMETTEUSES
Parmi toutes ces questions "Et si...", sélectionnons les 3-4 plus disruptives et développons-les en concepts concrets:

Concept 1: [basé sur une question "Et si..." spécifique]
- Description détaillée
- Avantages potentiels
- Défis de mise en œuvre
- Prochaines étapes pour tester cette idée

[Répéter pour chaque concept]

ÉTAPE 5: ÉVALUATION ET RAFFINAGE
Pour finaliser, analysons ces concepts selon leur:
- Potentiel d'innovation
- Faisabilité relative
- Valeur ajoutée`}
            category="Créativité"
          />
          <PromptCard
            title="Crazy 8"
            description="Une technique rapide pour générer 8 idées créatives en un temps limité."
            level="Débutant"
            techniques={["Zero-Shot"]}
            promptText={`Utilise la méthode Crazy 8 pour générer 8 idées en 8 minutes pour [ton problème/opportunité]:
1. Idée 1: [Laisse ce champ vide]
2. Idée 2: [Laisse ce champ vide]
3. Idée 3: [Laisse ce champ vide]
4. Idée 4: [Laisse ce champ vide]
5. Idée 5: [Laisse ce champ vide]
6. Idée 6: [Laisse ce champ vide]
7. Idée 7: [Laisse ce champ vide]
8. Idée 8: [Laisse ce champ vide]

Génère 8 idées créatives, concises et diversifiées. Pour chacune, donne un titre percutant et une brève description.`}
            category="Créativité"
          />
        </div>
      </section>
    </div>
  )
}
