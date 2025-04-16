import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-green-400">
      <div className="max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl overflow-hidden shadow-xl">
          {/* Header Skeleton */}
          <div className="bg-green-100 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Skeleton className="h-14 w-14 rounded-xl" />
                <div>
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-5 w-20" />
                </div>
              </div>
              <Skeleton className="h-9 w-24" />
            </div>

            <div className="flex items-center">
              <Skeleton className="h-16 w-16 rounded-full" />
              <div className="ml-5 space-y-2">
                <Skeleton className="h-8 w-64 sm:w-96" />
                <Skeleton className="h-4 w-full max-w-md" />
                <div className="flex items-center mt-2">
                  <div className="flex space-x-1">
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="h-5 w-5" />
                  </div>
                  <Skeleton className="h-4 w-16 ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="p-6 sm:p-8 border-t border-gray-200">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-300">
              <Skeleton className="h-4 w-20 mb-4" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <div className="mt-6 flex justify-end">
                <Skeleton className="h-9 w-24" />
              </div>
            </div>

            {/* Examples and Tips Skeleton */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <Skeleton className="h-6 w-40 mb-3" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>

              <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-200">
                <Skeleton className="h-6 w-40 mb-3" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            </div>

            {/* Variations Skeleton */}
            <div className="mt-8">
              <Skeleton className="h-6 w-48 mb-3" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Skeleton className="h-24 w-full rounded-lg" />
                <Skeleton className="h-24 w-full rounded-lg" />
              </div>
            </div>
          </div>

          {/* Related Prompts Skeleton */}
          <div className="bg-gray-50 p-6 sm:p-8 border-t border-gray-200">
            <Skeleton className="h-6 w-40 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Skeleton className="h-24 w-full rounded-lg" />
              <Skeleton className="h-24 w-full rounded-lg" />
              <Skeleton className="h-24 w-full rounded-lg" />
            </div>
          </div>

          {/* Bottom Tip Skeleton */}
          <div className="p-4 bg-amber-50 border-t border-amber-200 flex items-start">
            <Skeleton className="h-6 w-6 mr-3" />
            <Skeleton className="h-4 w-full max-w-2xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
