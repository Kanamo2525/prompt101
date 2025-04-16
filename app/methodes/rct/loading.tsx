import { Skeleton } from "@/components/ui/skeleton"

export default function RCTLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <Skeleton className="h-10 w-3/4 mx-auto bg-teal-500/50 mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto bg-teal-500/50" />
        </div>
      </div>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Skeleton className="h-4 w-32 bg-gray-200" />
          <span className="mx-2">›</span>
          <Skeleton className="h-4 w-40 bg-gray-300" />
        </div>

        <Skeleton className="h-6 w-32 rounded-full mb-8 bg-amber-200" />

        <Skeleton className="h-40 w-full rounded-lg mb-10 bg-blue-100" />

        <Skeleton className="h-8 w-64 mb-6 bg-gray-200" />
        <Skeleton className="h-4 w-full mb-8 bg-gray-100" />

        <div className="space-y-6 mb-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-200" />
              <Skeleton className="h-6 w-32 mb-2 ml-4 bg-gray-200" />
              <Skeleton className="h-16 w-full ml-4 bg-gray-100" />
            </div>
          ))}
        </div>

        <Skeleton className="h-64 w-full rounded-lg mb-12 bg-white" />

        <Skeleton className="h-96 w-full rounded-lg mb-12 bg-white" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Skeleton className="h-64 rounded-lg bg-green-50" />
          <Skeleton className="h-64 rounded-lg bg-red-50" />
        </div>

        <Skeleton className="h-8 w-full mb-6 bg-gray-200" />
        <Skeleton className="h-32 w-full rounded-lg mb-12 bg-gray-100" />

        <Skeleton className="h-8 w-full mb-6 bg-gray-200" />
        <Skeleton className="h-4 w-full mb-8 bg-gray-100" />

        <div className="space-y-6 mb-12">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 w-full rounded-lg bg-white" />
          ))}
        </div>

        <Skeleton className="h-48 w-full rounded-lg mb-12 bg-blue-50" />

        <div className="flex justify-between items-center pt-8">
          <Skeleton className="h-8 w-32 bg-gray-200" />
          <Skeleton className="h-8 w-32 bg-gray-200" />
        </div>
      </main>

      <div className="bg-teal-700 py-8 mt-12">
        <Skeleton className="h-4 w-64 mx-auto bg-teal-600/50" />
      </div>
    </div>
  )
}
