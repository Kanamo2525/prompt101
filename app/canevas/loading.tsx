import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <Loader2 className="h-12 w-12 animate-spin text-purple-500" />
        <h2 className="mt-4 text-xl font-semibold text-gray-700">Chargement du canevas...</h2>
        <p className="text-gray-500 mt-2">Préparation des outils de création de prompts</p>
      </div>
    </div>
  )
}
