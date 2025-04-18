import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-orange-500 to-amber-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <Skeleton className="h-10 w-3/4 mx-auto mb-4 bg-white/20" />
          <Skeleton className="h-6 w-1/2 mx-auto bg-white/20" />
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex mb-6">
          <Skeleton className="h-4 w-20 mr-4 bg-gray-200" />
          <Skeleton className="h-4 w-4 mr-4 bg-gray-200" />
          <Skeleton className="h-4 w-32 bg-gray-200" />
        </div>

        <Skeleton className="h-6 w-32 mb-6 bg-gray-200" />

        <Skeleton className="h-32 w-full mb-8 bg-gray-200" />

        <Skeleton className="h-8 w-64 mb-4 bg-gray-200" />
        <Skeleton className="h-20 w-full mb-6 bg-gray-200" />

        <div className="space-y-4 mb-8">
          <Skeleton className="h-40 w-full bg-gray-200" />
          <Skeleton className="h-40 w-full bg-gray-200" />
          <Skeleton className="h-40 w-full bg-gray-200" />
        </div>

        <Skeleton className="h-96 w-full mb-10 bg-gray-200" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Skeleton className="h-64 w-full bg-gray-200" />
          <Skeleton className="h-64 w-full bg-gray-200" />
        </div>

        <Skeleton className="h-8 w-64 mb-6 bg-gray-200" />
        <div className="space-y-6 mb-10">
          <Skeleton className="h-48 w-full bg-gray-200" />
          <Skeleton className="h-48 w-full bg-gray-200" />
        </div>

        <Skeleton className="h-8 w-64 mb-6 bg-gray-200" />
        <Skeleton className="h-20 w-full mb-6 bg-gray-200" />
        <Skeleton className="h-96 w-full mb-10 bg-gray-200" />

        <Skeleton className="h-64 w-full mb-10 bg-gray-200" />

        <div className="flex justify-between mt-12 pt-6 border-t border-gray-200">
          <Skeleton className="h-10 w-40 bg-gray-200" />
          <Skeleton className="h-10 w-40 bg-gray-200" />
        </div>
      </main>

      <div className="bg-gray-800 py-8 mt-12">
        <Skeleton className="h-6 w-64 mx-auto bg-gray-700" />
      </div>
    </div>
  )
}
