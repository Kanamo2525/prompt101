import { Skeleton } from "@/components/ui/skeleton"

export default function ChainOfThoughtLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-8 w-2/3 mx-auto bg-white/20" />
          <Skeleton className="h-6 w-1/2 mx-auto mt-4 bg-white/20" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6">
          <Skeleton className="h-10 w-32 bg-gray-200" />
          <Skeleton className="h-6 w-40 ml-4 bg-gray-200" />
        </div>

        <Skeleton className="h-40 w-full mb-8 bg-gray-200" />
        <Skeleton className="h-8 w-64 mb-4 bg-gray-200" />
        <Skeleton className="h-20 w-full mb-6 bg-gray-200" />

        <Skeleton className="h-60 w-full mb-8 bg-gray-200" />
        <Skeleton className="h-80 w-full mb-8 bg-gray-200" />

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <Skeleton className="h-40 flex-1 bg-gray-200" />
          <Skeleton className="h-40 flex-1 bg-gray-200" />
        </div>

        <Skeleton className="h-20 w-full mb-8 bg-gray-200" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Skeleton className="h-60 bg-gray-200" />
          <Skeleton className="h-60 bg-gray-200" />
        </div>

        <Skeleton className="h-8 w-64 mb-4 bg-gray-200" />
        <div className="space-y-6 mb-8">
          <Skeleton className="h-40 w-full bg-gray-200" />
          <Skeleton className="h-40 w-full bg-gray-200" />
          <Skeleton className="h-40 w-full bg-gray-200" />
        </div>

        <Skeleton className="h-8 w-64 mb-4 bg-gray-200" />
        <Skeleton className="h-20 w-full mb-6 bg-gray-200" />
        <Skeleton className="h-80 w-full mb-8 bg-gray-200" />
        <Skeleton className="h-60 w-full mb-8 bg-gray-200" />

        <div className="flex justify-between">
          <Skeleton className="h-10 w-40 bg-gray-200" />
          <Skeleton className="h-10 w-40 bg-gray-200" />
        </div>
      </div>
    </div>
  )
}
