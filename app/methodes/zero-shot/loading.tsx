import { Skeleton } from "@/components/ui/skeleton"

export default function ZeroShotLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Skeleton className="h-10 w-64 bg-white/20 mb-2" />
              <Skeleton className="h-6 w-80 bg-white/20 mb-4" />
              <div className="flex flex-wrap gap-2 mt-4">
                <Skeleton className="h-6 w-20 bg-white/20 rounded-full" />
                <Skeleton className="h-6 w-20 bg-white/20 rounded-full" />
                <Skeleton className="h-6 w-20 bg-white/20 rounded-full" />
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <Skeleton className="h-8 w-32 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Skeleton className="h-4 w-20 bg-gray-200" />
            <span className="mx-2 text-gray-400">/</span>
            <Skeleton className="h-4 w-32 bg-gray-200" />
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Skeleton className="h-40 w-full bg-white rounded-xl mb-8" />

        <Skeleton className="h-8 w-64 bg-gray-200 mb-4" />
        <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
        <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
        <Skeleton className="h-4 w-3/4 bg-gray-200 mb-6" />

        <Skeleton className="h-80 w-full bg-white rounded-xl mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Skeleton className="h-64 w-full bg-white rounded-xl" />
          <Skeleton className="h-64 w-full bg-white rounded-xl" />
        </div>

        <Skeleton className="h-8 w-64 bg-gray-200 mb-4" />
        <div className="space-y-6 mb-8">
          <Skeleton className="h-40 w-full bg-white rounded-xl" />
          <Skeleton className="h-40 w-full bg-white rounded-xl" />
          <Skeleton className="h-40 w-full bg-white rounded-xl" />
        </div>

        <Skeleton className="h-8 w-64 bg-gray-200 mb-4" />
        <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
        <Skeleton className="h-4 w-3/4 bg-gray-200 mb-6" />

        <Skeleton className="h-80 w-full bg-white rounded-xl mb-8" />
        <Skeleton className="h-60 w-full bg-white rounded-xl mb-8" />

        <div className="flex justify-between items-center pt-8">
          <Skeleton className="h-10 w-40 bg-gray-200 rounded" />
          <Skeleton className="h-10 w-40 bg-gray-200 rounded" />
        </div>
      </main>
    </div>
  )
}
