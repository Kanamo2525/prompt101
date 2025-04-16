import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-10 w-2/3 mx-auto bg-cyan-300/30 mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto bg-cyan-300/30" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Skeleton className="h-6 w-40 bg-gray-200 mb-8" />

        <Skeleton className="h-4 w-32 bg-gray-200 mb-2" />
        <Skeleton className="h-24 w-full bg-gray-200 mb-10 rounded-lg" />

        <Skeleton className="h-6 w-64 bg-gray-200 mb-4" />
        <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
        <Skeleton className="h-4 w-5/6 bg-gray-200 mb-2" />
        <Skeleton className="h-4 w-full bg-gray-200 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <Skeleton className="h-6 w-40 bg-gray-200 mb-4" />
            <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
            <Skeleton className="h-4 w-5/6 bg-gray-200 mb-2" />
            <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
          </div>
          <div>
            <Skeleton className="h-6 w-40 bg-gray-200 mb-4" />
            <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
            <Skeleton className="h-4 w-5/6 bg-gray-200 mb-2" />
            <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
          </div>
        </div>

        <Skeleton className="h-6 w-64 bg-gray-200 mb-6" />

        <div className="space-y-6 mb-10">
          <Skeleton className="h-32 w-full bg-gray-200 rounded-lg" />
          <Skeleton className="h-32 w-full bg-gray-200 rounded-lg" />
        </div>

        <Skeleton className="h-6 w-72 bg-gray-200 mb-6" />
        <Skeleton className="h-64 w-full bg-gray-200 rounded-lg mb-10" />

        <Skeleton className="h-40 w-full bg-gray-200 rounded-lg mb-10" />

        <div className="flex justify-between mt-12 pt-6 border-t border-gray-200">
          <Skeleton className="h-10 w-40 bg-gray-200 rounded" />
          <Skeleton className="h-10 w-40 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  )
}
