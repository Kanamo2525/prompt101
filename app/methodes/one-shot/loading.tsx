import { Skeleton } from "@/components/ui/skeleton"

export default function OneShotLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <Skeleton className="h-10 w-64 bg-green-500/50 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 max-w-full bg-green-500/50 mx-auto" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Skeleton className="h-4 w-20 bg-gray-200" />
          <span className="mx-2">›</span>
          <Skeleton className="h-4 w-32 bg-gray-200" />
        </div>

        <Skeleton className="h-6 w-24 bg-gray-200 rounded-full mb-8" />

        <Skeleton className="h-40 w-full bg-gray-200 rounded-lg mb-10" />

        <Skeleton className="h-8 w-64 bg-gray-200 mb-6" />
        <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
        <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
        <Skeleton className="h-4 w-3/4 bg-gray-200 mb-8" />

        <Skeleton className="h-60 w-full bg-gray-200 rounded-lg mb-10" />

        <Skeleton className="h-80 w-full bg-gray-200 rounded-lg mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Skeleton className="h-60 w-full bg-gray-200 rounded-lg" />
          <Skeleton className="h-60 w-full bg-gray-200 rounded-lg" />
        </div>

        <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
        <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
        <Skeleton className="h-4 w-3/4 bg-gray-200 mb-10" />

        <Skeleton className="h-8 w-64 bg-gray-200 mb-6" />
        <div className="space-y-6 mb-10">
          <Skeleton className="h-60 w-full bg-gray-200 rounded-lg" />
          <Skeleton className="h-60 w-full bg-gray-200 rounded-lg" />
          <Skeleton className="h-60 w-full bg-gray-200 rounded-lg" />
        </div>

        <Skeleton className="h-8 w-64 bg-gray-200 mb-6" />
        <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
        <Skeleton className="h-4 w-full bg-gray-200 mb-6" />

        <Skeleton className="h-80 w-full bg-gray-200 rounded-lg mb-10" />

        <Skeleton className="h-60 w-full bg-gray-200 rounded-lg mb-10" />

        <div className="flex justify-between pt-6">
          <Skeleton className="h-10 w-40 bg-gray-200 rounded" />
          <Skeleton className="h-10 w-40 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  )
}
