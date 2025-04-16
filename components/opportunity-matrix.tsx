const OpportunityMatrix = () => {
  return (
    <div className="w-full font-sans">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        MATRICE D'OPPORTUNITÉ UNIVERSELLE POUR L'IA GÉNÉRATIVE
      </h2>

      <div className="relative mx-auto" style={{ maxWidth: "900px" }}>
        {/* Horizontal axis label */}
        <div className="absolute left-0 right-0 text-center -top-10">
          <span className="font-bold text-gray-700 text-lg">NATURE DE LA VALEUR</span>
        </div>

        {/* Top axis legend */}
        <div className="absolute left-0 right-0 -top-6 flex justify-between px-4">
          <span className="font-semibold text-gray-600">Optimisation de l'existant</span>
          <span className="font-semibold text-gray-600">Innovation / Création</span>
        </div>

        {/* Vertical axis label */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 transform origin-center whitespace-nowrap">
          <span className="font-bold text-gray-700 text-lg">NIVEAU D'INTERVENTION HUMAINE</span>
        </div>

        {/* Left axis legend */}
        <div className="absolute -left-6 h-full flex flex-col justify-between py-4">
          <span className="font-semibold text-gray-600 -translate-x-4">Intervention humaine minimale</span>
          <span className="font-semibold text-gray-600 -translate-x-4">Collaboration forte avec l'humain</span>
        </div>

        {/* Main matrix grid */}
        <div className="grid grid-cols-2 border-2 border-gray-300 rounded-lg" style={{ height: "500px" }}>
          {/* Quadrant 1: Top-Left - AUTOMATISATION */}
          <div className="border-r border-b border-gray-300 bg-blue-50 p-4">
            <h3 className="text-xl font-bold text-blue-800 mb-1">AUTOMATISATION</h3>
            <p className="text-sm text-blue-700 mb-3 font-medium">Remplacement de processus existants</p>
            <p className="text-sm text-gray-600 mb-4">
              Utiliser l'IA pour effectuer des tâches répétitives ou standardisées avec peu d'intervention humaine.
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex items-start">
                <div className="bg-blue-400 rounded-full w-3 h-3 flex-shrink-0 mt-1 mr-2"></div>
                <span>Automatisation de processus et workflows</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-400 rounded-full w-3 h-3 flex-shrink-0 mt-1 mr-2"></div>
                <span>Systèmes de réponse automatique</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-400 rounded-full w-3 h-3 flex-shrink-0 mt-1 mr-2"></div>
                <span>Traitement de données à grande échelle</span>
              </li>
            </ul>
          </div>

          {/* Quadrant 2: Top-Right - GÉNÉRATION */}
          <div className="border-b border-gray-300 bg-purple-50 p-4">
            <h3 className="text-xl font-bold text-purple-800 mb-1">GÉNÉRATION</h3>
            <p className="text-sm text-purple-700 mb-3 font-medium">Création autonome de nouvelles solutions</p>
            <p className="text-sm text-gray-600 mb-4">
              Utiliser l'IA pour produire du contenu original ou des solutions innovantes avec supervision minimale.
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex items-start">
                <div className="bg-purple-400 rounded-full w-3 h-3 flex-shrink-0 mt-1 mr-2"></div>
                <span>Création automatisée de contenu</span>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-400 rounded-full w-3 h-3 flex-shrink-0 mt-1 mr-2"></div>
                <span>Conception générative et prototypage</span>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-400 rounded-full w-3 h-3 flex-shrink-0 mt-1 mr-2"></div>
                <span>Découverte de nouvelles solutions</span>
              </li>
            </ul>
          </div>

          {/* Quadrant 3: Bottom-Left - AMPLIFICATION */}
          <div className="border-r border-gray-300 bg-amber-50 p-4">
            <h3 className="text-xl font-bold text-amber-800 mb-1">AMPLIFICATION</h3>
            <p className="text-sm text-amber-700 mb-3 font-medium">Amélioration des capacités humaines</p>
            <p className="text-sm text-gray-600 mb-4">
              Utiliser l'IA comme assistant pour renforcer l'efficacité ou la qualité du travail humain existant.
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex items-start">
                <div className="bg-amber-400 rounded-full w-3 h-3 flex-shrink-0 mt-1 mr-2"></div>
                <span>Outils d'aide à la décision</span>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-400 rounded-full w-3 h-3 flex-shrink-0 mt-1 mr-2"></div>
                <span>Assistants intelligents augmentés</span>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-400 rounded-full w-3 h-3 flex-shrink-0 mt-1 mr-2"></div>
                <span>Amélioration de l'analyse</span>
              </li>
            </ul>
          </div>

          {/* Quadrant 4: Bottom-Right - EXPLORATION */}
          <div className="bg-green-50 p-4">
            <h3 className="text-xl font-bold text-green-800 mb-1">EXPLORATION</h3>
            <p className="text-sm text-green-700 mb-3 font-medium">Co-création et découverte</p>
            <p className="text-sm text-gray-600 mb-4">
              Utiliser l'IA comme partenaire créatif pour explorer de nouvelles possibilités et innover ensemble.
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex items-start">
                <div className="bg-green-400 rounded-full w-3 h-3 flex-shrink-0 mt-1 mr-2"></div>
                <span>Brainstorming augmenté et idéation</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-400 rounded-full w-3 h-3 flex-shrink-0 mt-1 mr-2"></div>
                <span>Recherche collaborative</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-400 rounded-full w-3 h-3 flex-shrink-0 mt-1 mr-2"></div>
                <span>Développement de concepts novateurs</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Value orientation indicators */}
        <div className="mt-12 flex justify-center gap-24">
          <div className="text-center">
            <div className="bg-gray-200 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-700">↑</span>
            </div>
            <p className="text-sm text-gray-600 font-medium">
              Efficacité et
              <br />
              optimisation
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gray-200 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-700">↗</span>
            </div>
            <p className="text-sm text-gray-600 font-medium">
              Créativité et
              <br />
              innovation
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 p-4 bg-white rounded-lg border border-gray-300 shadow-sm">
          <h3 className="font-bold text-sm text-gray-700 mb-3 border-b pb-2 text-center">COMMENT UTILISER</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
            <div className="flex items-start">
              <div className="bg-blue-100 w-3 h-3 rounded-sm mt-1 mr-2"></div>
              <span>
                <strong>Automatisation :</strong> Pour optimiser des processus existants sans nécessiter beaucoup
                d'intervention humaine
              </span>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 w-3 h-3 rounded-sm mt-1 mr-2"></div>
              <span>
                <strong>Génération :</strong> Pour créer de nouvelles solutions de manière autonome
              </span>
            </div>
            <div className="flex items-start">
              <div className="bg-amber-100 w-3 h-3 rounded-sm mt-1 mr-2"></div>
              <span>
                <strong>Amplification :</strong> Pour aider les humains à être plus efficaces dans leurs tâches
                actuelles
              </span>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 w-3 h-3 rounded-sm mt-1 mr-2"></div>
              <span>
                <strong>Exploration :</strong> Pour co-créer et découvrir de nouvelles possibilités avec l'humain
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpportunityMatrix
