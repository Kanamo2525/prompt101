import { MatrixComponent } from "./matrix-component"

export const OpportunityMatrix = () => {
  return (
    <MatrixComponent
      title="Matrice d'opportunité des prompts"
      xAxisLabel="Complexité"
      yAxisLabel="Impact"
      topLeft={{
        title: "Impact élevé, Complexité faible",
        description: "Prompts simples avec un grand impact. Priorité maximale.",
        link: "/categories/education",
      }}
      topRight={{
        title: "Impact élevé, Complexité élevée",
        description: "Prompts complexes mais à fort impact. Nécessitent plus d'effort mais valent l'investissement.",
        link: "/categories/time-management",
      }}
      bottomLeft={{
        title: "Impact faible, Complexité faible",
        description: "Prompts simples avec un impact limité. Utiles pour des tâches quotidiennes.",
        link: "/methodes/zero-shot",
      }}
      bottomRight={{
        title: "Impact faible, Complexité élevée",
        description: "Prompts complexes avec un impact limité. À éviter sauf si nécessaire.",
        link: "/methodes/chain-of-thought",
      }}
    />
  )
}
