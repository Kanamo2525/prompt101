import { Skeleton } from "@/components/ui/skeleton"

export default function CreativiteLoading() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-2/3" />
      </div>

      <div className="mb-12">
        <Skeleton className="h-8 w-1/3 mb-6" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border rounded-lg p-6">
                <Skeleton className="h-7 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-1/2 mb-6" />
                <div className="flex gap-2 mb-4">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-24" />
                </div>
                <Skeleton className="h-32 w-full mb-4" />
                <div className="flex justify-end">
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="mb-12">
        <Skeleton className="h-8 w-1/3 mb-6" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border rounded-lg p-6">
                <Skeleton className="h-7 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-1/2 mb-6" />
                <div className="flex gap-2 mb-4">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-24" />
                </div>
                <Skeleton className="h-32 w-full mb-4" />
                <div className="flex justify-end">
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
