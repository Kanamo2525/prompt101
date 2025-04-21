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
  title: "Catalogue de Prompts d'Apprentissage | Prompt101.fr",
  description:
    "Découvrez notre collection de prompts optimisés pour l'apprentissage, de la réflexion métacognitive à l'apprentissage par projet.",
}

// Données des prompts pour la catégorie Apprentissage
const learningPrompts = [
  {
    title: "Apprentissage par l'Expérience Inversée",
    description: "Analyser les erreurs courantes pour mieux enseigner",
    level: "Débutant",
    techniques: ["Zero-Shot"],
    promptText:
      "Choisis une compétence que tu maîtrises bien (cuisine, sport, langue, etc.). Imagine maintenant que tu dois l'enseigner à quelqu'un qui n'a jamais été exposé à ce domaine.\n\n1. Décris 3 erreurs courantes que font les débutants dans cette compétence\n2. Pour chaque erreur, explique:\n   - Pourquoi on commet naturellement cette erreur\n   - Comment tu as toi-même dépassé cette difficulté\n   - Une activité simple que tu proposerais pour éviter cette erreur dès le début\n\nTermine en réfléchissant: qu'est-ce que cet exercice t'a appris sur ton propre processus d'apprentissage?",
    category: "Apprentissage",
  },
  {
    title: "Immersion Imaginaire",
    description: "Créer un plan d'immersion totale",
    level: "Intermédiaire",
    techniques: ["Few-Shot"],
    promptText:
      "Imagine que tu dois apprendre une nouvelle langue en seulement 3 semaines pour un voyage imminent.\n\nCrée un plan d'immersion totale réalisable chez toi qui:\n1. Transforme ton environnement quotidien en outil d'apprentissage\n2. Intègre 5 activités quotidiennes différentes (15-30 minutes chacune)\n3. Utilise au moins 3 sens différents (vue, ouïe, toucher, etc.)\n4. Ne nécessite pas plus de 50€ de budget total\n\nComment adapterais-tu ce plan pour apprendre autre chose qu'une langue (par exemple: programmation, photographie, cuisine)?",
    category: "Apprentissage",
  },
  {
    title: "Autobiographie d'Apprentissage",
    description: "Analyser ses moments-clés d'apprentissage",
    level: "Intermédiaire",
    techniques: ["Chain-of-Thought"],
    promptText:
      "Rédige une courte \"autobiographie d'apprentissage\" en identifiant:\n\n1. Trois moments-clés où tu as appris quelque chose d'important dans ta vie\n2. Pour chaque moment, analyse:\n   - Le contexte (où, quand, avec qui)\n   - La méthode d'apprentissage utilisée (était-ce formel, informel, par essai-erreur?)\n   - Les émotions ressenties pendant cet apprentissage\n   - Ce qui a rendu cet apprentissage particulièrement efficace ou mémorable\n\nQuels patterns remarques-tu dans ces trois expériences? Comment pourrais-tu recréer délibérément ces conditions pour tes futurs apprentissages?",
    category: "Apprentissage",
  },
  {
    title: "Décodage des Obstacles",
    description: "Analyser les blocages d'apprentissage",
    level: "Avancé",
    techniques: ["Chain-of-Thought", "Few-Shot"],
    promptText:
      "Pense à une compétence ou un sujet que tu as essayé d'apprendre mais où tu as rencontré des difficultés persistantes.\n\nAnalyse cette expérience en suivant ces étapes:\n1. Décris précisément où et comment tu bloquais\n2. Identifie 3 hypothèses sur les causes possibles de ce blocage:\n   - Liées à la méthode d'apprentissage utilisée\n   - Liées à des connaissances préalables manquantes\n   - Liées à des facteurs émotionnels ou environnementaux\n3. Pour chaque hypothèse, imagine une approche alternative qui aurait pu fonctionner\n  Pour chaque hypothèse, imagine une approche alternative qui aurait pu fonctionner\n\nQu'est-ce que cette réflexion t'apprend sur ton style d'apprentissage personnel?",
    category: "Apprentissage",
  },
  {
    title: "Chaîne d'Expertise",
    description: "Partager et enseigner des micro-compétences",
    level: "Intermédiaire",
    techniques: ["Expert Role-Playing", "Few-Shot"],
    promptText:
      "Cette activité se fait idéalement en groupe de 3-5 personnes:\n\n1. Chaque personne identifie une micro-compétence qu'elle maîtrise bien (un nœud de cravate particulier, une technique de mémoire, un raccourci informatique...)\n2. En 5 minutes maximum, chacun doit enseigner sa micro-compétence aux autres\n3. Après chaque mini-leçon, les \"élèves\" donnent un feedback sur:\n   - Ce qui a été particulièrement clair dans l'explication\n   - Ce qui aurait pu être amélioré\n   - Une suggestion concrète pour rendre l'apprentissage plus efficace\n\nDiscutez ensuite: quelles techniques d'enseignement ont été les plus efficaces et pourquoi?",
    category: "Apprentissage",
  },
  {
    title: "Jeu de Rôle Pédagogique",
    description: "Adapter son explication à différents publics",
    level: "Intermédiaire",
    techniques: ["Expert Role-Playing", "Few-Shot"],
    promptText:
      "Forme un binôme et choisissez un concept simple à expliquer (comment fonctionne une serrure, pourquoi le ciel est bleu, etc.)\n\nRéalisez cet exercice en 3 rounds de 3 minutes:\n1. Round 1: Personne A explique le concept à Personne B comme si B était un enfant de 6 ans\n2. Round 2: Personne A explique le même concept comme si B était un expert dans un domaine complètement différent\n3. Round 3: Personne A explique le concept sans utiliser les 5 mots les plus évidents liés au sujet\n\nInversez les rôles avec un nouveau concept et répétez l'exercice.\n\nDiscutez ensuite: Comment ces contraintes ont-elles transformé votre façon d'expliquer? Quelles techniques pourriez-vous réutiliser dans d'autres contextes d'apprentissage?",
    category: "Apprentissage",
  },
  {
    title: "Conception de Jeu Éducatif",
    description: "Créer un jeu pour enseigner un concept",
    level: "Avancé",
    techniques: ["Few-Shot", "Chain-of-Thought"],
    promptText:
      "Invente un jeu simple pour enseigner un concept que tu trouves important. Ce jeu doit:\n\n1. Être réalisable avec du matériel courant (papier, stylos, objets du quotidien)\n2. Pouvoir être joué en 15-20 minutes maximum\n3. Impliquer au moins 2 joueurs\n4. Contenir un élément de hasard ET un élément de stratégie\n5. Garantir que les joueurs comprennent le concept cible à la fin de la partie\n\nDécris les règles de ton jeu, le matériel nécessaire, et explique comment il permet l'apprentissage du concept choisi.",
    category: "Apprentissage",
  },
  {
    title: "Défi d'Apprentissage Gamifié",
    description: "Transformer un objectif en jeu sur 30 jours",
    level: "Intermédiaire",
    techniques: ["Few-Shot", "Chain-of-Thought"],
    promptText:
      'Transforme un objectif d\'apprentissage personnel en jeu sur 30 jours:\n\n1. Définis clairement la compétence que tu souhaites développer\n2. Crée un système de points et de niveaux (par exemple: débutant, apprenti, expert...)\n3. Établis 5-7 "défis" différents qui font progresser vers la maîtrise\n4. Ajoute des "boss" à vaincre (obstacles majeurs à surmonter)\n5. Prévois des récompenses pour chaque niveau atteint\n6. Inclus un système de "vie sociale" (comment d\'autres personnes peuvent t\'aider)\n\nN\'hésite pas à t\'inspirer de la structure des jeux vidéo que tu apprécies!',
    category: "Apprentissage",
  },
  {
    title: "Cartographie des Styles d'Apprentissage",
    description: "Identifier son style d'apprentissage dominant",
    level: "Débutant",
    techniques: ["Zero-Shot", "Chain-of-Thought"],
    promptText:
      "Mène une expérience personnelle pour identifier ton style d'apprentissage dominant:\n\n1. Choisis 3 méthodes différentes pour apprendre le même contenu:\n   - Méthode visuelle (vidéos, schémas, cartes mentales)\n   - Méthode auditive (podcasts, explications orales, discussions)\n   - Méthode kinesthésique (pratique, manipulation, mouvement)\n\n2. Consacre exactement 20 minutes à chaque méthode sur un sujet nouveau pour toi\n\n3. Après chaque session, évalue:\n   - Ton niveau de concentration (1-10)\n   - Ta compréhension du sujet (1-10)\n   - Ton plaisir pendant l'apprentissage (1-10)\n   - Ta capacité à te rappeler l'information 24h plus tard (1-10)\n\nQue révèle cette expérience sur ta façon préférée d'apprendre? Comment pourrais-tu mieux adapter tes futures sessions d'apprentissage?",
    category: "Apprentissage",
  },
  {
    title: "Méthode des Itérations Rapides",
    description: "Améliorer une compétence par cycles courts",
    level: "Avancé",
    techniques: ["Least-to-Most", "Chain-of-Thought"],
    promptText:
      "Sélectionne une compétence pratique que tu souhaites améliorer rapidement (dessin, présentation orale, rédaction, etc.).\n\nApplique la méthode des itérations rapides:\n1. Réalise une première version en seulement 10 minutes\n2. Évalue-la selon 3 critères précis que tu auras définis\n3. Identifie UN SEUL aspect à améliorer\n4. Crée une nouvelle version en 10 minutes en te concentrant uniquement sur cet aspect\n5. Répète ce cycle 5 fois\n\nCompare ta première et ta dernière version. Quelles améliorations constates-tu? Qu'as-tu appris sur le processus d'apprentissage par itérations courtes?",
    category: "Apprentissage",
  },
  {
    title: "Projet d'Apprentissage Inversé",
    description: "Apprendre par projet plutôt que par théorie",
    level: "Avancé",
    techniques: ["Generated Knowledge", "Chain-of-Thought"],
    promptText:
      "Au lieu de suivre un parcours d'apprentissage préétabli, inverse le processus:\n\n1. Définis un projet concret que tu souhaites réaliser et qui te passionne (ex: créer un site web, écrire une nouvelle, composer une chanson)\n2. Liste toutes les compétences nécessaires pour réaliser ce projet\n3. Auto-évalue ton niveau actuel pour chaque compétence (débutant/intermédiaire/avancé)\n4. Crée un plan d'apprentissage \"juste à temps\":\n   - Par quelles compétences commencer\n   - Quelles ressources minimales utiliser\n   - Comment tester rapidement tes progrès\n5. Définis des \"mini-livrables\" qui te permettront d'appliquer immédiatement chaque nouvelle compétence\n\nComment cette approche diffère-t-elle de ta façon habituelle d'apprendre?",
    category: "Apprentissage",
  },
  {
    title: "Micro-Apprentissage Quotidien",
    description: "Intégrer une compétence jour après jour",
    level: "Débutant",
    techniques: ["Template Filling", "Chain-of-Thought"],
    promptText:
      'Conçois un système de micro-apprentissage pour intégrer une nouvelle compétence dans ta vie quotidienne:\n\n1. Choisis une compétence que tu veux développer sur 30 jours\n2. Décompose-la en 30 micro-compétences ou concepts (un par jour)\n3. Pour chaque jour, crée:\n   - Une mini-leçon de 5 minutes maximum\n   - Un exercice pratique de 10 minutes maximum\n   - Un moyen simple de vérifier ta compréhension/progression\n4. Identifie un moment précis de ta journée où tu réaliseras systématiquement ce micro-apprentissage\n5. Prévois un système simple pour suivre ta progression visuelle (tableau, application, etc.)\n\nEn quoi cette approche de "petit mais régulier" pourrait-elle être plus efficace qu\'une approche intensive mais sporadique?',
    category: "Apprentissage",
  },
  {
    title: "Journal d'Apprentissage Structuré",
    description: "Documenter et analyser son apprentissage",
    level: "Intermédiaire",
    techniques: ["Template Filling", "Chain-of-Thought"],
    promptText:
      "Commence un journal d'apprentissage pour un sujet ou une compétence que tu étudies actuellement.\n\nPour chaque session d'apprentissage (15-60 minutes), note:\n\nAVANT:\n- Objectif spécifique de la session\n- Ton niveau d'énergie et de motivation (1-10)\n- Une question précise à laquelle tu espères pouvoir répondre après\n\nPENDANT:\n- Les concepts-clés ou insights notés brièvement\n- Les points de confusion ou questions qui émergent\n\nAPRÈS:\n- Ce que tu as réellement appris (en une phrase)\n- Ce qui a bien fonctionné dans ta méthode d'apprentissage\n- Ce que tu ferais différemment la prochaine fois\n- Ton plan pour la prochaine session\n\nAprès une semaine, analyse tes notes: quels patterns émergent sur ton apprentissage optimal?",
    category: "Apprentissage",
  },
  {
    title: 'Entretien avec ton "Futur Moi"',
    description: "Dialoguer avec une version experte de soi-même",
    level: "Avancé",
    techniques: ["Expert Role-Playing", "Iterative Prompting"],
    promptText:
      "Imagine que tu peux avoir une conversation avec ton \"futur moi\" qui a parfaitement maîtrisé la compétence que tu essaies d'apprendre actuellement.\n\nRédige un dialogue imaginaire où tu poses à ton futur moi les questions suivantes:\n1. Quels ont été les moments décisifs dans ton parcours d'apprentissage?\n2. Quelles ressources se sont révélées les plus utiles?\n3. Quelles habitudes ont fait la plus grande différence?\n4. Quels obstacles m'attendent et comment les surmonter?\n5. Quel conseil aurais-tu aimé recevoir au début de ton parcours?\n\nQue t'apprend cet exercice de projection sur ta vision actuelle de l'apprentissage?",
    category: "Apprentissage",
  },
  {
    title: "Apprentissage par l'Expérience Inversée (Avancé)",
    description: "Analyser les erreurs avec Few-Shot et Chain-of-Thought",
    level: "Avancé",
    techniques: ["Few-Shot", "Chain-of-Thought"],
    promptText:
      "Voici deux exemples d'analyse d'erreurs pour un apprentissage efficace:\n\nEXEMPLE 1 - PIANO:\nErreur courante: Positionner incorrectement les mains sur le clavier\nAnalyse: Les débutants placent souvent leurs mains à plat, ce qui limite la mobilité des doigts\nSolution: J'ai surmonté ce problème en m'exerçant avec une balle de tennis sous la paume pour maintenir une position arquée\nActivité recommandée: Exercice des \"5 points de contact\" où seuls les bouts des doigts touchent les touches\n\nEXEMPLE 2 - PHOTOGRAPHIE:\nErreur courante: Surexposer systématiquement les photos en plein soleil\nAnalyse: Cette erreur vient d'une confiance excessive dans le mode automatique qui moyenne toute la scène\nSolution: J'ai appris à identifier les situations à fort contraste et à utiliser la compensation d'exposition\nActivité recommandée: Série comparative de la même scène avec différents réglages pour visualiser l'impact\n\nEn suivant ce modèle d'analyse structurée, choisis une compétence que tu maîtrises bien. Pour cette compétence:\n\nÉTAPE 1: IDENTIFICATION DES ERREURS TYPIQUES\nRéfléchis aux 3 erreurs les plus fondamentales que tu as observées chez les débutants. Note que les erreurs les plus révélatrices ne sont pas toujours les plus évidentes.\n\nÉTAPE 2: ANALYSE CAUSALE DE CHAQUE ERREUR\nPour chaque erreur, examine:\n- Les présupposés incorrects qui conduisent à cette erreur\n- Les habitudes précédentes qui peuvent interférer\n- Les éléments contre-intuitifs qui créent la confusion\n\nÉTAPE 3: TON PROCESSUS DE DÉPASSEMENT\nDétaille comment tu as personnellement surmonté cette difficulté:\n- Quels ont été les déclics cognitifs?\n- Quelles pratiques spécifiques ont accéléré ta progression?\n- Comment ton perception a-t-elle changé avant/après?\n\nÉTAPE 4: CONCEPTION D'ACTIVITÉ PÉDAGOGIQUE\nPour chaque erreur, crée une activité d'apprentissage qui:\n- Rend l'erreur immédiatement perceptible\n- Crée une expérience mémorable qui ancre la bonne pratique\n- Peut être réalisée en moins de 15 minutes\n\nÉTAPE 5: MÉTA-RÉFLEXION\nQuels principes d'apprentissage universels peux-tu extraire de cette analyse? Comment pourrait-on appliquer ces principes à d'autres domaines?",
    category: "Apprentissage",
  },
]

export default function ApprentissagePage() {
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
            <BreadcrumbLink href="/catalogue/apprentissage">Apprentissage</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Prompts d'Apprentissage</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {learningPrompts.length} prompts pour optimiser votre processus d'apprentissage, développer vos compétences et
          maximiser votre potentiel.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {learningPrompts.map((prompt, index) => (
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
        <p className="text-gray-600 mb-4">Vous avez une idée de prompt pour l'apprentissage?</p>
        <Link href="/proposer">
          <Button>
            Proposer un prompt <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
