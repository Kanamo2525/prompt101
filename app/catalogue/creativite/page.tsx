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
  // 1. Création d'idées innovantes
  {
    title: "Création d'idées innovantes - Niveau débutant",
    description: "Générer des idées créatives avec Zero-Shot Prompting",
    level: "Débutant",
    techniques: ["Zero-Shot"],
    promptText: "Génère 10 idées innovantes pour résoudre le problème de [décris ton problème].",
    category: "Créativité",
  },
  {
    title: "Création d'idées innovantes - Niveau intermédiaire",
    description: "Générer des idées créatives avec RCT (Rôle, Contexte, Tâche)",
    level: "Intermédiaire",
    techniques: ["RCT"],
    promptText:
      "En tant qu'expert en innovation disruptive,\n\ntu travailles avec une équipe pluridisciplinaire qui cherche à révolutionner [secteur/domaine] avec des approches non conventionnelles. Le marché actuel est saturé de solutions similaires et les consommateurs recherchent quelque chose de radicalement différent.\n\nPropose 7 idées véritablement innovantes pour résoudre [problème spécifique], en expliquant pour chacune:\n- Le concept central en une phrase\n- Le caractère novateur de l'approche\n- Un exemple concret d'application\n- Le principal obstacle à surmonter pour sa mise en œuvre",
    category: "Créativité",
  },
  {
    title: "Création d'idées innovantes - Niveau avancé",
    description: "Générer des idées créatives avec Multi-Prompting + Generated Knowledge",
    level: "Avancé",
    techniques: ["Multi-Prompting", "Generated Knowledge"],
    promptText:
      "Pour générer des idées radicalement innovantes, adoptons trois perspectives différentes:\n\n1) PERSPECTIVE DE DISRUPTION\n   Commence par identifier les présupposés fondamentaux dans [domaine/problème]:\n   - Quelles sont les croyances limitantes actuelles dans ce domaine?\n   - Quels paradigmes semblent immuables mais pourraient être renversés?\n   - Quelles seraient les 3 innovations les plus improbables mais transformatrices?\n\n2) PERSPECTIVE DE CONVERGENCE TECHNOLOGIQUE\n   Analyse comment la combinaison de technologies émergentes pourrait créer des solutions inédites:\n   - Identifie 3 technologies en développement rapide susceptibles d'impact ce domaine\n   - Pour chacune, projette son évolution probable dans 5-10 ans\n   - Propose 3 convergences technologiques créant des solutions impossibles aujourd'hui\n\n3) PERSPECTIVE BIOMIMÉTIQUE\n   Recherche des modèles dans la nature qui pourraient inspirer des solutions:\n   - Quels organismes ou écosystèmes ont résolu des problèmes similaires?\n   - Comment ces solutions naturelles pourraient-elles être adaptées?\n   - Propose 3 approches inspirées de principes biologiques\n\nPour chaque idée générée, évalue:\n- Son potentiel transformateur (échelle 1-10)\n- Sa faisabilité technique dans les 5 prochaines années (échelle 1-10)\n- Son modèle économique potentiel\n\nConclus par une synthèse des 3 idées les plus prometteuses toutes perspectives confondues.",
    category: "Créativité",
  },

  // 2. Brainstorming à Six Chapeaux
  {
    title: "Brainstorming à Six Chapeaux - Niveau débutant",
    description: "Analyser un problème avec la méthode des Six Chapeaux",
    level: "Débutant",
    techniques: ["One-Shot"],
    promptText:
      'Exemple: Pour résoudre le problème de la congestion urbaine, je vais analyser la situation avec les Six Chapeaux de la Pensée:\n\nChapeau blanc (faits): 68% des habitants utilisent leur voiture personnelle pour des trajets inférieurs à 5 km. Les transports publics sont saturés aux heures de pointe.\nChapeau rouge (émotions): Les usagers sont frustrés et stressés par les embouteillages quotidiens.\nChapeau noir (critique): Les solutions actuelles de covoiturage ont échoué car elles manquent de flexibilité.\nChapeau jaune (optimisme): Le développement des micromobilités offre de nouvelles alternatives prometteuses.\nChapeau vert (créativité): On pourrait créer des "corridors intelligents" réservés aux transports partagés.\nChapeau bleu (organisation): Un plan en trois phases permettrait d\'implémenter progressivement ces solutions.\n\nUtilise la même méthode des Six Chapeaux de la Pensée pour analyser et trouver des solutions au problème suivant: [décris ton problème]',
    category: "Créativité",
  },
  {
    title: "Brainstorming à Six Chapeaux - Niveau intermédiaire",
    description: "Analyser un problème avec Chain-of-Thought + Template Filling",
    level: "Intermédiaire",
    techniques: ["Chain-of-Thought", "Template Filling"],
    promptText:
      "Je vais t'aider à réaliser un brainstorming structuré selon la méthode des Six Chapeaux de la Pensée d'Edward de Bono pour résoudre [ton problème].\n\nProcède par étapes successives en changeant de chapeau à chaque fois:\n\nÉTAPE 1: CHAPEAU BLANC - INFORMATION\nConcentre-toi uniquement sur les faits et données objectives liés à [problème]:\n- Quelles sont les statistiques pertinentes?\n- Quelles informations manquent encore?\n- Quelles tendances sont visibles dans les données?\n\nÉTAPE 2: CHAPEAU ROUGE - ÉMOTIONS\nExprime maintenant les réactions émotionnelles face à ce problème:\n- Quels sentiments ce problème génère-t-il chez les personnes concernées?\n- Quelles intuitions as-tu sur ce sujet (sans justification rationnelle)?\n- Comment les solutions potentielles seraient-elles perçues émotionnellement?\n\nÉTAPE 3: CHAPEAU NOIR - CRITIQUE\nAdopte maintenant une perspective critique:\n- Quels sont les risques et obstacles majeurs?\n- Pourquoi certaines solutions pourraient échouer?\n- Quelles sont les limites des approches conventionnelles?\n\nÉTAPE 4: CHAPEAU JAUNE - OPTIMISME\nChange de perspective pour identifier les opportunités:\n- Quels sont les avantages potentiels de résoudre ce problème?\n- Quelles sont les forces sur lesquelles s'appuyer?\n- Quels scénarios optimistes peuvent être envisagés?\n\nÉTAPE 5: CHAPEAU VERT - CRÉATIVITÉ\nGénère maintenant des idées créatives sans limite:\n- Quelles approches radicalement différentes pourraient fonctionner?\n- Comment combiner des concepts apparemment incompatibles?\n- Si aucune contrainte n'existait, que proposerais-tu?\n\nÉTAPE 6: CHAPEAU BLEU - ORGANISATION\nEnfin, organise la réflexion et les actions:\n- Comment structurer les solutions proposées?\n- Quel processus de mise en œuvre recommanderais-tu?\n- Comment évaluer le succès des solutions retenues?\n\nSYNTHÈSE:\nRécapitule les principales perspectives et propose 3-5 solutions concrètes issues de cette réflexion complète.",
    category: "Créativité",
  },
  {
    title: "Brainstorming à Six Chapeaux - Niveau avancé",
    description: "Analyser un problème avec Expert Role-Playing + Contextual Augmentation",
    level: "Avancé",
    techniques: ["Expert Role-Playing", "Contextual Augmentation"],
    promptText:
      'Imaginons une séance de brainstorming avec six experts, chacun incarnant un des Six Chapeaux de la Pensée pour résoudre [ton problème spécifique].\n\nCONTEXTE SUPPLÉMENTAIRE:\n- Tendances actuelles: [ajoute 2-3 tendances pertinentes dans ce domaine]\n- Contraintes: [précise les limitations budgétaires, temporelles ou autres]\n- Tentatives précédentes: [mentionne les approches déjà essayées]\n- Parties prenantes: [indique qui sera impacté par les solutions]\n\nDÉROULEMENT DE LA SÉANCE:\n\nEXPERT 1 - CHAPEAU BLANC (DATA SCIENTIST)\n"Permettez-moi d\'établir le cadre factuel de notre discussion. Voici ce que nos données révèlent..."\n[L\'expert présente une analyse approfondie des faits, données mesurables et informations objectives]\n\nEXPERT 2 - CHAPEAU ROUGE (PSYCHOLOGUE COMPORTEMENTAL)\n"Si nous considérons la dimension émotionnelle et intuitive de ce problème..."\n[L\'expert explore les réactions émotionnelles, les perceptions et l\'acceptabilité des différentes approches]\n\nEXPERT 3 - CHAPEAU NOIR (ANALYSTE DE RISQUES)\n"Je dois attirer votre attention sur plusieurs obstacles potentiels..."\n[L\'expert examine les difficultés, dangers, inconvénients et points faibles des idées proposées]\n\nEXPERT 4 - CHAPEAU JAUNE (STRATÈGE EN INNOVATION)\n"Envisageons maintenant les opportunités que ce défi nous offre..."\n[L\'expert identifie les avantages, bénéfices et valeurs positives des différentes approches]\n\nEXPERT 5 - CHAPEAU VERT (DESIGNER CRÉATIF)\n"Et si nous pensions différemment? Considérons ces pistes inexploitées..."\n[L\'expert propose des idées radicales, des approches non conventionnelles et des solutions créatives]\n\nEXPERT 6 - CHAPEAU BLEU (CHEF DE PROJET)\n"Synthétisons notre réflexion et organisons notre approche..."\n[L\'expert structure le processus, établit des priorités et propose un plan d\'action concret]\n\nINTERACTIONS ENTRE EXPERTS:\n[Simule quelques échanges constructifs entre les experts, chacun gardant sa perspective unique]\n\nSYNTHÈSE FINALE:\nPrésente les 3-5 solutions les plus prometteuses issues de cette discussion multidimensionnelle, en détaillant pour chacune:\n- Concept principal\n- Avantages comparatifs\n- Risques anticipés\n- Plan de mise en œuvre\n- Indicateurs de succès proposés',
    category: "Créativité",
  },

  // 3. Méthode SCAMPER
  {
    title: "Méthode SCAMPER - Niveau débutant",
    description: "Améliorer un concept avec la méthode SCAMPER",
    level: "Débutant",
    techniques: ["Zero-Shot"],
    promptText:
      "Utilise la méthode SCAMPER pour améliorer [produit/service/concept]:\n1. Substituer: Que pourrait-on remplacer?\n2. Combiner: Que pourrait-on fusionner?\n3. Adapter: Comment l'adapter à un autre contexte?\n4. Modifier: Que pourrait-on agrandir, réduire ou changer?\n5. Produire: Quelles autres utilisations pourrait-on imaginer?\n6. Éliminer: Que pourrait-on supprimer?\n7. Réorganiser: Comment pourrait-on réarranger les éléments?",
    category: "Créativité",
  },
  {
    title: "Méthode SCAMPER - Niveau intermédiaire",
    description: "Améliorer un concept avec Few-Shot Prompting",
    level: "Intermédiaire",
    techniques: ["Few-Shot"],
    promptText:
      "Voici comment la méthode SCAMPER a été appliquée pour réinventer la tasse à café classique:\n\nSUBSTITUER:\n- Exemple: Remplacer la céramique par un matériau thermosensible qui change de couleur selon la température\n- Résultat: Une tasse qui indique visuellement si le café est trop chaud, à bonne température ou refroidi\n\nCOMBINER:\n- Exemple: Fusionner la tasse avec un minuteur intégré\n- Résultat: Une tasse qui signale quand le café est infusé à point ou rappelle de le boire avant qu'il ne refroidisse\n\nADAPTER:\n- Exemple: Adapter le concept des thermos à double paroi pour une utilisation quotidienne\n- Résultat: Une tasse à double paroi sous vide d'air, élégante pour tous les jours mais conservant la chaleur 3h\n\nEn suivant cette méthode SCAMPER complète, réinvente [produit/service/concept] en proposant des idées concrètes et innovantes pour chacune des 7 étapes (Substituer, Combiner, Adapter, Modifier, Produire, Éliminer, Réorganiser).",
    category: "Créativité",
  },
  {
    title: "Méthode SCAMPER - Niveau avancé",
    description: "Améliorer un concept avec Iterative Prompting",
    level: "Avancé",
    techniques: ["Iterative Prompting"],
    promptText:
      "Je vais t'aider à réinventer complètement [produit/service/concept] en utilisant la méthode SCAMPER de manière approfondie et progressive. Nous explorerons chaque dimension l'une après l'autre, en approfondissant progressivement les idées les plus prometteuses.\n\nÉTAPE 1: SUBSTITUTION\nCommençons par identifier tous les éléments/aspects de [produit/service/concept] qui pourraient être substitués.\n[Attends ma réponse avant de continuer]\n\nÉTAPE 2: APPROFONDISSEMENT DES SUBSTITUTIONS\nParmi les substitutions identifiées, explorons plus en détail les 2-3 plus prometteuses.\n[Attends ma réponse avant de continuer]\n\nÉTAPE 3: COMBINAISON\nQuels éléments ou concepts pourrions-nous combiner avec [produit/service/concept] pour créer de la valeur?\n[Attends ma réponse avant de continuer]\n\nÉTAPE 4: ADAPTATION\nComment pourrions-nous adapter [produit/service/concept] à d'autres contextes, marchés ou usages?\n[Attends ma réponse avant de continuer]\n\nÉTAPE 5: MODIFICATION\nQuels aspects de [produit/service/concept] pourrions-nous accentuer, atténuer ou transformer?\n[Attends ma réponse avant de continuer]\n\nÉTAPE 6: AUTRES USAGES\nQuelles utilisations totalement différentes pourrions-nous imaginer pour [produit/service/concept]?\n[Attends ma réponse avant de continuer]\n\nÉTAPE 7: ÉLIMINATION\nQuels éléments pourrions-nous éliminer, simplifier ou réduire?\n[Attends ma réponse avant de continuer]\n\nÉTAPE 8: RÉORGANISATION\nComment pourrions-nous réorganiser, inverser ou restructurer [produit/service/concept]?\n[Attends ma réponse avant de continuer]\n\nÉTAPE 9: SYNTHÈSE DES MEILLEURES IDÉES\nSuite à notre exploration SCAMPER complète, analysons les 3-5 idées les plus prometteuses et développons-les davantage.\n[Attends ma réponse avant de continuer]\n\nÉTAPE 10: CONCEPT FINAL INNOVANT\nProposons maintenant une version entièrement réinventée de [produit/service/concept] qui intègre les meilleures idées de notre exploration.",
    category: "Créativité",
  },

  // 4. Brainstorming Inversé
  {
    title: "Brainstorming Inversé - Niveau débutant",
    description: "Trouver des solutions en inversant le problème",
    level: "Débutant",
    techniques: ["Zero-Shot"],
    promptText:
      "Utilise la technique du brainstorming inversé pour [ton objectif]:\n1. Liste toutes les façons possibles de faire échouer [ton objectif]\n2. Pour chacune de ces façons, propose une solution pour éviter cet échec",
    category: "Créativité",
  },
  {
    title: "Brainstorming Inversé - Niveau intermédiaire",
    description: "Trouver des solutions avec Chain-of-Thought",
    level: "Intermédiaire",
    techniques: ["Chain-of-Thought"],
    promptText:
      "Je vais utiliser la technique du brainstorming inversé pour trouver des solutions créatives à [ton objectif/problème]. \n\nPlutôt que de chercher directement des solutions, je vais d'abord explorer méthodiquement toutes les façons dont [ton objectif] pourrait échouer, puis en déduire des stratégies efficaces.\n\nÉTAPE 1: DÉFINIR L'ANTI-OBJECTIF\nD'abord, clarifions exactement ce que nous voulons éviter. L'anti-objectif serait: \"Comment garantir l'échec complet de [ton objectif]?\"\n\nÉTAPE 2: IDENTIFIER LES VOIES D'ÉCHEC\nRéfléchissons aux différentes catégories d'échecs possibles:\n- Échecs liés aux ressources: Comment pourrait-on mal allouer le temps/budget/personnel?\n- Échecs de conception: Quelles erreurs fondamentales de conception garantiraient l'échec?\n- Échecs d'exécution: Quelles mauvaises pratiques lors de la mise en œuvre causeraient l'échec?\n- Échecs relationnels: Comment les problèmes de communication ou de dynamique d'équipe pourraient saborder le projet?\n- Échecs externes: Quels facteurs externes pourraient compromettre le succès?\n\nÉTAPE 3: DÉTAILLER CHAQUE VOIE D'ÉCHEC\nPour chaque catégorie, je vais maintenant détailler 3-5 façons spécifiques d'échouer.\n\nÉTAPE 4: INVERSER CHAQUE ÉCHEC\nPour chaque mode d'échec identifié, je vais maintenant formuler la solution préventive ou corrective correspondante.\n\nÉTAPE 5: PRIORISER LES SOLUTIONS\nEn analysant l'ensemble des solutions inversées, je vais identifier les plus impactantes selon:\n- Leur potentiel à éviter plusieurs modes d'échec simultanément\n- Leur faisabilité pratique\n- Leur rapport coût/bénéfice\n\nÉTAPE 6: PLAN D'ACTION\nJe vais finaliser avec un plan d'action concret comprenant:\n- Les 3-5 solutions prioritaires à mettre en œuvre\n- Les indicateurs permettant de vérifier que les risques d'échec sont bien écartés",
    category: "Créativité",
  },
  {
    title: "Brainstorming Inversé - Niveau avancé",
    description: "Trouver des solutions avec Multi-Prompting + Generated Knowledge",
    level: "Avancé",
    techniques: ["Multi-Prompting", "Generated Knowledge"],
    promptText:
      "Pour générer des solutions vraiment originales à [ton problème/objectif], nous allons utiliser trois approches de brainstorming inversé complémentaires:\n\nÉTAPE PRÉLIMINAIRE: CARTOGRAPHIE DES CONNAISSANCES\nAvant de commencer, identifions:\n- Les principales causes d'échec statistiquement documentées dans ce domaine\n- Les biais cognitifs qui affectent habituellement la prise de décision dans ce contexte\n- Les leçons tirées d'échecs notoires similaires dans l'histoire récente\n\nAPPROCHE 1: SABOTAGE ACTIF HYPOTHÉTIQUE\nSi un concurrent malveillant ou un saboteur interne voulait délibérément faire échouer [ton objectif]:\n- Quelles seraient les 5 actions les plus dévastatrices qu'il pourrait entreprendre?\n- À quels moments critiques interviendrait-il pour maximiser les dommages?\n- Quelles vulnérabilités exploiterait-il en priorité?\n- Comment masquerait-il ses actions pour qu'elles passent inaperçues?\n\nAPPROCHE 2: ANALYSE PRÉMORTEM DÉTAILLÉE\nImaginons que 6 mois après le lancement, [ton projet/initiative] est un échec total:\n- Rédige un rapport d'autopsie détaillé expliquant les causes de l'échec\n- Identifie les signes avant-coureurs qui auraient pu être détectés\n- Explore les facteurs aggravants qui ont amplifié les problèmes initiaux\n- Analyse comment les tentatives de correction ont pu empirer la situation\n\nAPPROCHE 3: CONCEPTION ANTI-PERSONA\nCréons le profil des personnes pour qui cette initiative serait un désastre complet:\n- Quelles caractéristiques auraient ces \"anti-utilisateurs\"?\n- Pourquoi détesteraient-ils absolument cette solution?\n- Comment contourneraient-ils ou saboteraient-ils son utilisation?\n- Quelles alternatives préféreraient-ils et pourquoi?\n\nINTÉGRATION ET SYNTHÈSE:\nPour chaque problème potentiel identifié par ces trois approches:\n1. Évalue sa probabilité et son impact potentiel\n2. Conçois une stratégie préventive\n3. Développe un plan de contingence\n4. Identifie les indicateurs d'alerte précoce à surveiller\n\nCONCLUSION:\nFormule un plan d'action holistique qui:\n- Intègre les protections contre les 5-7 principaux risques identifiés\n- Propose une refonte de l'approche initiale pour éliminer les vulnérabilités structurelles\n- Inclut un système de détection précoce des signes d'échec",
    category: "Créativité",
  },

  // 5. Figure Storming
  {
    title: "Figure Storming - Niveau débutant",
    description: "Résoudre un problème en adoptant différentes perspectives",
    level: "Débutant",
    techniques: ["Zero-Shot"],
    promptText:
      "Utilise la technique du figure storming pour résoudre [ton problème/défi]:\nImagine comment ces 3 personnalités aborderaient ce problème:\n1. Elon Musk\n2. Marie Curie\n3. Steve Jobs\n\nPour chacune, fournis leur approche probable, leurs idées principales et leurs solutions innovantes.",
    category: "Créativité",
  },
  {
    title: "Figure Storming - Niveau intermédiaire",
    description: "Résoudre un problème avec One-Shot Prompting",
    level: "Intermédiaire",
    techniques: ["One-Shot"],
    promptText:
      'Voici un exemple de figure storming pour améliorer l\'engagement des employés:\n\nALBERT EINSTEIN:\nApproche: Penser le problème de manière relative et conceptuelle\nPerspective: "L\'engagement est une question de perception du temps. Quand on est absorbé par une tâche passionnante, 8 heures paraissent 5 minutes."\nSolutions proposées:\n- Créer des "laboratoires d\'idéation" où les employés expérimentent librement pendant 20% de leur temps\n- Développer une "théorie de la relativité professionnelle" - adapter les responsabilités en fonction de la perception subjective du temps par chaque employé\n- Établir des "paradoxes professionnels stimulants" - défis contre-intuitifs qui poussent à sortir des schémas habituels\n\nUtilise maintenant cette même technique de figure storming pour résoudre [ton problème/défi] en te mettant dans la peau de:\n1. [Personnalité historique]\n2. [Expert contemporain dans un domaine pertinent]\n3. [Personnage fictif connu pour sa créativité/sagesse]\n\nPour chaque personnage, analyse comment ils percevraient le problème selon leur vision du monde unique, puis développe 3-4 solutions spécifiques qui reflètent authentiquement leur approche distinctive.',
    category: "Créativité",
  },
  {
    title: "Figure Storming - Niveau avancé",
    description: "Résoudre un problème avec Expert Role-Playing + Few-Shot",
    level: "Avancé",
    techniques: ["Expert Role-Playing", "Few-Shot"],
    promptText:
      "Le Figure Storming est une technique puissante pour générer des solutions en empruntant la perspective de personnalités inspirantes. Pour résoudre [ton problème complexe], je vais incarner successivement cinq penseurs exceptionnels, chacun avec une approche radicalement différente.\n\nExemples de perspectives inspirantes:\n\nLEONARDO DA VINCI sur la conception d'un espace de travail collaboratif:\n\"Je vois ce défi comme une composition où l'harmonie naît de l'équilibre entre besoins opposés. Un espace idéal doit respirer comme un organisme vivant.\"\n→ Solution: Espaces modulaires inspirés des proportions naturelles, transformables selon les besoins\n→ Solution: Zones de travail disposées en spirale autour d'un atrium central, favorisant les rencontres spontanées\n→ Solution: Intégration d'éléments naturels et mécaniques en symbiose, stimulant à la fois créativité et productivité\n\nEn m'inspirant de cet exemple, je vais maintenant explorer [ton problème] à travers ces cinq perspectives:\n\n1. ARISTOTE - PERSPECTIVE PHILOSOPHIQUE ANALYTIQUE\nJe vais examiner le problème selon les principes de logique aristotélicienne, en décomposant systématiquement le sujet en ses causes formelles, matérielles, efficientes et finales.\n\n2. ADA LOVELACE - PERSPECTIVE ALGORITHMIQUE VISIONNAIRE\nJ'adopterai l'approche de la première programmeuse de l'histoire, combinant rigueur mathématique et imagination poétique pour concevoir des systèmes innovants.\n\n3. RICHARD FEYNMAN - PERSPECTIVE CURIEUSE ET LUDIQUE\nJ'incarnerai l'esprit du célèbre physicien, utilisant la simplification radicale, l'expérimentation mentale et l'humour pour rendre l'impossible accessible.\n\n4. FRIDA KAHLO - PERSPECTIVE ÉMOTIONNELLE TRANSFORMATIVE\nJ'aborderai le défi à travers le prisme de l'expérience humaine brute, transformant les contraintes et les souffrances en expressions créatives puissantes.\n\n5. BUCKMINSTER FULLER - PERSPECTIVE SYSTÉMIQUE FUTURISTE\nJ'adopterai la vision d'un futur souhaitable selon ce designer visionnaire, cherchant des solutions qui font \"plus avec moins\" et qui bénéficient à l'humanité entière.\n\nPour chaque personnalité, je fournirai:\n- Leur analyse unique du problème\n- Leurs principes directeurs pour l'aborder\n- 3-4 solutions distinctives\n- Une citation imaginée capturant l'essence de leur approche\n\nÀ la fin, je proposerai une synthèse intégrant les perspectives les plus complémentaires pour créer une solution véritablement innovante.",
    category: "Créativité",
  },

  // 6. Méthode des "Et si..."
  {
    title: 'Méthode des "Et si..." - Niveau débutant',
    description: "Explorer des solutions créatives avec des questions hypothétiques",
    level: "Débutant",
    techniques: ["Zero-Shot"],
    promptText:
      'Utilise la méthode des "Et si..." pour explorer des solutions créatives à [ton problème/défi].\n\nPose au moins 10 questions commençant par "Et si..." qui remettent en question les hypothèses fondamentales de la situation, puis sélectionne les 3 plus prometteuses et développe-les en solutions concrètes.',
    category: "Créativité",
  },
  {
    title: 'Méthode des "Et si..." - Niveau intermédiaire',
    description: "Explorer des solutions créatives avec Chain-of-Thought",
    level: "Intermédiaire",
    techniques: ["Chain-of-Thought"],
    promptText:
      'Je vais utiliser la méthode des "Et si..." pour explorer [ton problème/idée] sous des angles radicalement nouveaux. Cette technique consiste à remettre en question les présupposés fondamentaux pour ouvrir des pistes inexplorées.\n\nÉTAPE 1: IDENTIFIER LES PRÉSUPPOSÉS\nD\'abord, identifions les hypothèses et contraintes implicites que nous tenons pour acquises concernant [ton problème/idée]:\n- Présupposé 1: [exemple d\'une limitation ou croyance commune dans ce domaine]\n- Présupposé 2: [autre limitation apparente]\n- [Continuer avec 3-5 présupposés supplémentaires]\n\nÉTAPE 2: FORMULER DES QUESTIONS "ET SI..."\nPour chaque présupposé identifié, je vais maintenant formuler une question "Et si..." qui le renverse complètement:\n\nPour le présupposé 1:\n- Et si [inversion radicale du présupposé]?\n- Conséquences potentielles: [exploration des implications]\n- Nouvelles possibilités: [opportunités créées par cette inversion]\n\n[Répéter pour chaque présupposé]\n\nÉTAPE 3: EXPLORER DES INVERSIONS CONTEXTUELLES\nMaintenant, examinons comment le problème changerait dans des contextes totalement différents:\n\n- Et si cela se passait dans 100 ans?\n- Et si les ressources étaient illimitées?\n- Et si la technologie permettait de [capacité actuellement impossible]?\n- Et si les règles sociales/légales étaient inversées?\n- Et si nous devions résoudre ce problème pour des enfants? Des personnes âgées? Une autre espèce?\n\nÉTAPE 4: COMBINER LES PISTES LES PLUS PROMETTEUSES\nParmi toutes ces questions "Et si...", sélectionnons les 3-4 plus disruptives et développons-les en concepts concrets:\n\nConcept 1: [basé sur une question "Et si..." spécifique]\n- Description détaillée\n- Avantages potentiels\n- Défis de mise en œuvre\n- Prochaines étapes pour tester cette idée\n\n[Répéter pour chaque concept]\n\nÉTAPE 5: ÉVALUATION ET RAFFINAGE\nPour finaliser, analysons ces concepts selon leur:\n- Potentiel d\'innovation\n- Faisabilité relative\n- Valeur ajoutée',
    category: "Créativité",
  },
  {
    title: 'Méthode des "Et si..." - Niveau avancé',
    description: "Explorer des solutions créatives avec Generated Knowledge + Contextual Augmentation",
    level: "Avancé",
    techniques: ["Generated Knowledge", "Contextual Augmentation"],
    promptText:
      'Pour une exploration radicalement créative de [ton problème/opportunité], nous allons utiliser une version augmentée de la méthode des "Et si...". Cette approche combine pensée contrefactuelle, cognitive et spéculative pour générer des pistes d\'innovation disruptive.\n\nPHASE PRÉLIMINAIRE - EXPLORATION DU DOMAINE\nAvant de commencer l\'exercice des "Et si...", identifions:\n- Les axiomes fondamentaux considérés immuables dans ce domaine\n- Les innovations récentes qui ont déjà bousculé certains présupposés\n- Les tendances émergentes susceptibles de transformer ce domaine dans les 5-10 prochaines années\n- Les contraintes perçues comme insurmontables actuellement\n\nCONTEXTE SPÉCIFIQUE À CONSIDÉRER:\n- Contexte technologique: [ajoute les technologies pertinentes]\n- Contexte socioculturel: [ajoute les tendances sociales pertinentes]\n- Contexte économique: [ajoute les facteurs économiques pertinents]\n- Limitations actuelles: [ajoute les obstacles majeurs]\n\nCATÉGORIES DE QUESTIONS "ET SI..."\n\n1. INVERSIONS FONDAMENTALES\n- Et si le problème était en réalité la solution?\n- Et si nous faisions exactement l\'inverse de ce que l\'industrie considère comme "meilleures pratiques"?\n- Et si les contraintes actuelles disparaissaient complètement?\n- Et si nous devions créer une solution sans utiliser [ressource/technologie actuellement centrale]?\n\n2. TRANSFERTS INTERDISCIPLINAIRES\n- Et si nous appliquions les principes de [domaine non relié] à cette situation?\n- Et si nous abordions ce défi comme un problème de [discipline éloignée]?\n- Et si nous utilisions les méthodologies de [industrie sans rapport apparent]?\n- Et si les experts de [domaine inattendu] prenaient en charge ce problème?\n\n3. MODIFICATIONS D\'ÉCHELLE EXTRÊMES\n- Et si nous devions résoudre ce problème pour 100 fois plus de personnes?\n- Et si nous disposions d\'un millième du budget actuel?\n- Et si le délai était réduit à 24 heures?\n- Et si la solution devait fonctionner pendant 100 ans sans maintenance?\n\n4. PERTURBATIONS TEMPORELLES\n- Et si nous avions résolu ce problème il y a 50 ans?\n- Et si nous devions le résoudre pour la société de 2075?\n- Et si la solution devait être implémentée instantanément?\n- Et si nous pouvions revenir en arrière et modifier un élément historique clé?\n\n5. CHANGEMENTS DE PERSPECTIVE RADICAUX\n- Et si ce problème était abordé par [groupe habituellement non consulté]?\n- Et si nous devions le résoudre pour une culture aux valeurs opposées aux nôtres?\n- Et si ce défi était considéré comme une opportunité extraordinaire?\n- Et si nous adoptions la perspective de [entité non-humaine]?\n\nPour chaque question "Et si..." particulièrement provocante, je vais:\n1. Explorer les implications systémiques\n2. Identifier les nouvelles possibilités ouvertes\n3. Conceptualiser une solution concrète inspirée par cette perspective\n4. Analyser comment des éléments de cette vision pourraient être adaptés à la réalité actuelle\n\nSYNTHÈSE FINALE:\nJe proposerai 3-5 concepts particulièrement prometteurs qui:\n- Combinent plusieurs perspectives "Et si..."\n- Sont suffisamment disruptifs pour créer un avantage distinctif\n- Conservent un potentiel de faisabilité moyennant certaines adaptations',
    category: "Créativité",
  },

  // 7. Crazy 8
  {
    title: "Crazy 8 - Niveau débutant",
    description: "Générer 8 idées créatives rapidement",
    level: "Débutant",
    techniques: ["Zero-Shot"],
    promptText:
      "Utilise la méthode Crazy 8 pour générer 8 idées en 8 minutes pour [ton problème/opportunité]:\n1. Idée 1: [Laisse ce champ vide]\n2. Idée 2: [Laisse ce champ vide]\n3. Idée 3: [Laisse ce champ vide]\n4. Idée 4: [Laisse ce champ vide]\n5. Idée 5: [Laisse ce champ vide]\n6. Idée 6: [Laisse ce champ vide]\n7. Idée 7: [Laisse ce champ vide]\n8. Idée 8: [Laisse ce champ vide]\n\nGénère 8 idées créatives, concises et diversifiées. Pour chacune, donne un titre percutant et une brève description.",
    category: "Créativité",
  },
  {
    title: "Crazy 8 - Niveau intermédiaire",
    description: "Générer 8 idées créatives avec Few-Shot Prompting",
    level: "Intermédiaire",
    techniques: ["Few-Shot"],
    promptText:
      "Voici un exemple de Crazy 8 pour \"améliorer l'expérience d'attente dans un restaurant\":\n\n1. MINUTEUR INTERACTIF\nUne tablette à table qui montre exactement où en est votre commande avec un compte à rebours ludique.\n\n2. ZONE DE MICRO-EXPÉRIENCES\nDes stations de 2 minutes avec dégustations surprise, jeux sensoriels ou démonstrations culinaires.\n\n3. MENU-QUIZ PERSONNALISÉ\nUn questionnaire ludique qui vous recommande des plats basés sur vos réponses et offre une réduction si le temps d'attente dépasse l'estimation.\n\n4. CUISINE TRANSPARENTE EN RA\nUne application de réalité augmentée permettant de voir votre plat en préparation en temps réel.\n\n5. CARTE CONNECTÉE ÉVOLUTIVE\nUn menu qui change de prix à la baisse proportionnellement à votre temps d'attente.\n\n6. COMMUNAUTÉ DE TABLE\nSystème d'appariement optionnel qui vous met en relation avec d'autres clients aux intérêts similaires pendant l'attente.\n\n7. PRÉLUDE GASTRONOMIQUE\nUne séquence de micro-amuse-bouches créatifs servis individuellement toutes les 3-4 minutes d'attente.\n\n8. PERSONNALISATION EN DIRECT\nUn chef vient brièvement à votre table pour ajuster votre plat selon vos préférences pendant que vous attendez.\n\nÀ ton tour! Réalise un Crazy 8 pour [ton sujet] en générant 8 idées radicalement différentes, chacune avec un titre accrocheur et une description concise mais impactante d'une ou deux phrases.",
    category: "Créativité",
  },
  {
    title: "Crazy 8 - Niveau avancé",
    description: "Générer 8 idées créatives avec Template Filling + Multi-Prompting",
    level: "Avancé",
    techniques: ["Template Filling", "Multi-Prompting"],
    promptText:
      "Je vais t'aider à réaliser un exercice de Crazy 8 extrêmement productif pour [ton problème/opportunité]. Cette méthode design sprint nous permettra de générer 8 concepts innovants en structurant notre réflexion selon différentes perspectives.\n\nPour maximiser la diversité et la qualité des idées, je vais aborder chaque concept selon une approche distincte:\n\nCONCEPT 1: APPROCHE MINIMALISTE\n[TITRE]: [À compléter]\n[DESCRIPTION CONCISE]: [À compléter]\n[ESQUISSE CONCEPTUELLE]: Ce concept se concentre sur la simplification extrême en éliminant tout sauf l'essentiel. Il vise à résoudre le problème avec un minimum d'éléments et d'interactions.\n[AVANTAGE DISTINCTIF]: [À compléter]\n\nCONCEPT 2: APPROCHE BIOMIMÉTIQUE\n[TITRE]: [À compléter]\n[DESCRIPTION CONCISE]: [À compléter]\n[ESQUISSE CONCEPTUELLE]: Cette solution s'inspire directement d'un principe, organisme ou système naturel pour résoudre le problème de manière élégante et éprouvée par l'évolution.\n[AVANTAGE DISTINCTIF]: [À compléter]\n\nCONCEPT 3: APPROCHE HIGH-TECH\n[TITRE]: [À compléter]\n[DESCRIPTION CONCISE]: [À compléter]\n[ESQUISSE CONCEPTUELLE]: Ce concept intègre les technologies émergentes (IA, IoT, réalité augmentée, etc.) pour créer une solution futuriste mais réalisable.\n[AVANTAGE DISTINCTIF]: [À compléter]\n\nCONCEPT 4: APPROCHE LOW-TECH\n[TITRE]: [À compléter]\n[DESCRIPTION CONCISE]: [À compléter]\n[ESQUISSE CONCEPTUELLE]: Cette solution privilégie la simplicité technologique, l'accessibilité et la durabilité, en utilisant des mécanismes éprouvés et largement disponibles.\n[AVANTAGE DISTINCTIF]: [À compléter]\n\nCONCEPT 5: APPROCHE COMMUNAUTAIRE\n[TITRE]: [À compléter]\n[DESCRIPTION CONCISE]: [À compléter]\n[ESQUISSE CONCEPTUELLE]: Ce concept s'appuie sur les dynamiques sociales, la collaboration et l'intelligence collective pour résoudre le problème.\n[AVANTAGE DISTINCTIF]: [À compléter]\n\nCONCEPT 6: APPROCHE GAMIFIÉE\n[TITRE]: [À compléter]\n[DESCRIPTION CONCISE]: [À compléter]\n[ESQUISSE CONCEPTUELLE]: Cette solution transforme le problème en expérience ludique, en intégrant des mécaniques de jeu pour motiver et engager les utilisateurs.\n[AVANTAGE DISTINCTIF]: [À compléter]\n\nCONCEPT 7: APPROCHE CONTRAIRE\n[TITRE]: [À compléter]\n[DESCRIPTION CONCISE]: [À compléter]\n[ESQUISSE CONCEPTUELLE]: Ce concept prend délibérément le contre-pied des solutions conventionnelles, en inversant les hypothèses fondamentales du problème.\n[AVANTAGE DISTINCTIF]: [À compléter]\n\nCONCEPT 8: APPROCHE HYBRIDE\n[TITRE]: [À compléter]\n[DESCRIPTION CONCISE]: [À compléter]\n[ESQUISSE CONCEPTUELLE]: Cette solution combine de manière inattendue deux domaines ou concepts habituellement distincts pour créer quelque chose de nouveau.\n[AVANTAGE DISTINCTIF]: [À compléter]\n\nÉVALUATION ET PROCHAINES ÉTAPES:\n1. Identification des 2-3 concepts les plus prometteurs\n2. Critères d'évaluation appliqués\n3. Suggestions pour le prototypage rapide\n4. Plan de test avec des utilisateurs réels",
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
