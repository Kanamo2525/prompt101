const MatrixComponent = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">MATRICE D'OPPORTUNITÉ POUR L'IA GÉNÉRATIVE</h3>
      </div>

      <div className="relative">
        {/* Axis labels */}
        <div className="flex justify-between mb-2 px-8">
          <div className="text-sm font-medium text-gray-600">Optimisation de l'existant</div>
          <div className="text-sm font-medium text-gray-600">Innovation / Création</div>
        </div>

        <div className="flex mb-8">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between pr-4 py-8">
            <div className="text-sm font-medium text-gray-600">Intervention humaine minimale</div>
            <div className="text-sm font-medium text-gray-600">Collaboration forte avec l'humain</div>
          </div>

          {/* Matrix grid */}
          <div className="flex-1">
            <div
              className="grid grid-cols-2 border-2 border-gray-300 rounded-lg overflow-hidden"
              style={{ height: "500px" }}
            >
              {/* Top-left: Automatisation */}
              <div className="border-r border-b border-gray-300 bg-blue-50 p-4">
                <h4 className="text-lg font-bold text-blue-700">AUTOMATISATION</h4>
                <p className="text-sm font-medium text-blue-600 mb-2">Remplacement de processus existants</p>
                <p className="text-sm text-gray-600 mb-3">
                  Utiliser l'IA pour effectuer des tâches répétitives ou standardisées avec peu d'intervention humaine.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <div className="bg-blue-400 rounded-full w-3 h-3 mt-1 mr-2"></div>
                    <span>Automatisation de processus et workflows</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-400 rounded-full w-3 h-3 mt-1 mr-2"></div>
                    <span>Systèmes de réponse automatique</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-400 rounded-full w-3 h-3 mt-1 mr-2"></div>
                    <span>Traitement de données à grande échelle</span>
                  </li>
                </ul>
              </div>

              {/* Top-right: Génération */}
              <div className="border-b border-gray-300 bg-purple-50 p-4">
                <h4 className="text-lg font-bold text-purple-700">AVANT-GARDE</h4>
                <p className="text-sm font-medium text-purple-600 mb-2">Création autonome de nouvelles solutions</p>
                <p className="text-sm text-gray-600 mb-3">
                  Utiliser l'IA pour produire du contenu original ou des solutions innovantes avec supervision minimale.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <div className="bg-purple-400 rounded-full w-3 h-3 mt-1 mr-2"></div>
                    <span>Création automatisée de contenu</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-400 rounded-full w-3 h-3 mt-1 mr-2"></div>
                    <span>Conception générative et prototypage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-400 rounded-full w-3 h-3 mt-1 mr-2"></div>
                    <span>Découverte de nouvelles solutions</span>
                  </li>
                </ul>
              </div>

              {/* Bottom-left: Amplification */}
              <div className="border-r border-gray-300 bg-amber-50 p-4">
                <h4 className="text-lg font-bold text-amber-700">ASSISTANCE</h4>
                <p className="text-sm font-medium text-amber-600 mb-2">Amélioration des capacités humaines</p>
                <p className="text-sm text-gray-600 mb-3">
                  Utiliser l'IA comme assistant pour renforcer l'efficacité ou la qualité du travail humain existant.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <div className="bg-amber-400 rounded-full w-3 h-3 mt-1 mr-2"></div>
                    <span>Outils d'aide à la décision</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-400 rounded-full w-3 h-3 mt-1 mr-2"></div>
                    <span>Assistants intelligents augmentés</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-400 rounded-full w-3 h-3 mt-1 mr-2"></div>
                    <span>Amélioration de l'analyse</span>
                  </li>
                </ul>
              </div>

              {/* Bottom-right: Exploration */}
              <div className="bg-green-50 p-4">
                <h4 className="text-lg font-bold text-green-700">AUGMENTATION</h4>
                <p className="text-sm font-medium text-green-600 mb-2">Co-création et découverte</p>
                <p className="text-sm text-gray-600 mb-3">
                  Utiliser l'IA comme partenaire créatif pour explorer de nouvelles possibilités et innover ensemble.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <div className="bg-green-400 rounded-full w-3 h-3 mt-1 mr-2"></div>
                    <span>Brainstorming augmenté et idéation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-400 rounded-full w-3 h-3 mt-1 mr-2"></div>
                    <span>Recherche collaborative</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-400 rounded-full w-3 h-3 mt-1 mr-2"></div>
                    <span>Développement de concepts novateurs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-4 mt-8 p-4 bg-white rounded-lg border border-gray-300">
          <div className="flex items-start">
            <div className="bg-blue-100 w-3 h-3 rounded-sm mt-1 mr-2"></div>
            <span className="text-sm">
              <strong>Automatisation :</strong> Pour optimiser des processus existants sans nécessiter beaucoup
              d'intervention humaine
            </span>
          </div>
          <div className="flex items-start">
            <div className="bg-purple-100 w-3 h-3 rounded-sm mt-1 mr-2"></div>
            <span className="text-sm">
              <strong>Avant-Garde :</strong> Pour créer de nouvelles solutions de manière autonome
            </span>
          </div>
          <div className="flex items-start">
            <div className="bg-amber-100 w-3 h-3 rounded-sm mt-1 mr-2"></div>
            <span className="text-sm">
              <strong>Assistance :</strong> Pour aider les humains à être plus efficaces dans leurs tâches actuelles
            </span>
          </div>
          <div className="flex items-start">
            <div className="bg-green-100 w-3 h-3 rounded-sm mt-1 mr-2"></div>
            <span className="text-sm">
              <strong> Augmentation :</strong> Pour co-créer et découvrir de nouvelles possibilités avec l'humain
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatrixComponent
