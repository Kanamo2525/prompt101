import { Skeleton } from "@/components/ui/skeleton"

export default function GeneratedKnowledgeLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Skeleton className="h-4 w-24 mb-4" />
        <div className="flex items-center mb-2">
          <Skeleton className="h-10 w-10 rounded-lg mr-3" />
          <Skeleton className="h-8 w-64" />
        </div>
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-full max-w-md mt-4" />
      </div>

      <Skeleton className="h-10 w-full mb-8" />

      <div className="space-y-6">
        <Skeleton className="h-32 w-full rounded-lg" />

        <div>
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-20 w-full mb-4" />

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 my-6">
            <Skeleton className="h-6 w-64 mb-4" />
            <div className="flex flex-col items-center">
              <Skeleton className="h-16 w-full max-w-md mb-4" />
              <Skeleton className="h-8 w-2 mb-4" />
              <Skeleton className="h-20 w-full max-w-lg mb-4" />
              <Skeleton className="h-8 w-2 mb-4" />
              <Skeleton className="h-20 w-full max-w-lg mb-4" />
              <Skeleton className="h-8 w-2 mb-4" />
              <Skeleton className="h-16 w-full max-w-md" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Skeleton className="h-64 w-full rounded-lg" />
          <Skeleton className="h-64 w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}
