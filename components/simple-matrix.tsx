export default function SimpleMatrix() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-2 gap-4">
        {/* Top row */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-bold text-blue-800">AUTOMATISATION</h3>
          <p className="text-sm text-gray-600">Remplacement de processus existants</p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h3 className="text-lg font-bold text-purple-800">GÉNÉRATION</h3>
          <p className="text-sm text-gray-600">Création autonome de nouvelles solutions</p>
        </div>

        {/* Bottom row */}
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
          <h3 className="text-lg font-bold text-amber-800">AMPLIFICATION</h3>
          <p className="text-sm text-gray-600">Amélioration des capacités humaines</p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-bold text-green-800">EXPLORATION</h3>
          <p className="text-sm text-gray-600">Co-création et découverte</p>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Niveau d'intervention humaine (axe vertical) × Nature de la valeur (axe horizontal)</p>
      </div>
    </div>
  )
}
