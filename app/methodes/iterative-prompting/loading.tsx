import { Skeleton } from "@/components/ui/skeleton"

export default function IterativePromptingLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <Skeleton className="h-10 w-64 bg-white/20 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 max-w-full bg-white/20 mx-auto" />
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex text-sm text-gray-500 mb-6">
          <Skeleton className="h-4 w-20 bg-gray-200" />
          <span className="mx-2">›</span>
          <Skeleton className="h-4 w-32 bg-gray-200" />
        </div>

        <Skeleton className="h-6 w-32 bg-orange-200 rounded-full mb-6" />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
          <Skeleton className="h-6 w-72 bg-blue-100 mb-4" />
          <Skeleton className="h-4 w-full bg-blue-100 mb-2" />
          <Skeleton className="h-4 w-full bg-blue-100 mb-2" />
          <Skeleton className="h-4 w-3/4 bg-blue-100" />
        </div>

        <Skeleton className="h-8 w-64 bg-gray-200 mt-10 mb-4" />
        <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
        <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
        <Skeleton className="h-4 w-3/4 bg-gray-200 mb-6" />

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 my-8">
          <div className="flex flex-col space-y-8">
            {/* Étape 1 */}
            <div className="flex flex-col md:flex-row gap-4">
              <Skeleton className="h-32 md:w-1/2 bg-gray-100 rounded-lg" />
              <div className="flex items-center justify-center md:w-[10%]">
                <Skeleton className="h-6 w-6 bg-gray-100 rounded-full" />
              </div>
              <Skeleton className="h-32 md:w-1/2 bg-gray-100 rounded-lg" />
            </div>

            {/* Flèche vers le bas */}
            <div className="flex justify-center">
              <Skeleton className="h-6 w-6 bg-gray-100 rounded-full" />
            </div>

            {/* Étape 2 */}
            <div className="flex flex-col md:flex-row gap-4">
              <Skeleton className="h-32 md:w-1/2 bg-gray-100 rounded-lg" />
              <div className="flex items-center justify-center md:w-[10%]">
                <Skeleton className="h-6 w-6 bg-gray-100 rounded-full" />
              </div>
              <Skeleton className="h-32 md:w-1/2 bg-gray-100 rounded-lg" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Skeleton className="h-64 bg-green-50 rounded-xl" />
          <Skeleton className="h-64 bg-red-50 rounded-xl" />
        </div>

        <Skeleton className="h-8 w-64 bg-gray-200 mt-10 mb-6" />

        <div className="space-y-6 mb-10">
          <Skeleton className="h-48 bg-white rounded-xl shadow-sm" />
          <Skeleton className="h-48 bg-white rounded-xl shadow-sm" />
        </div>

        <Skeleton className="h-8 w-72 bg-gray-200 mt-10 mb-6" />
        <Skeleton className="h-4 w-full bg-gray-200 mb-6" />

        <Skeleton className="h-96 bg-white rounded-xl shadow-sm mb-10" />

        <Skeleton className="h-48 bg-blue-50 rounded-xl mb-10" />

        <div className="flex justify-between mt-12 pt-6 border-t border-gray-200">
          <Skeleton className="h-10 w-40 bg-gray-200 rounded-md" />
          <Skeleton className="h-10 w-40 bg-blue-200 rounded-md" />
        </div>
      </main>
    </div>
  )
}
