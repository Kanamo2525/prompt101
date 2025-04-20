import { Skeleton } from "@/components/ui/skeleton"

export default function ApprentissageLoading() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <Skeleton className="h-10 w-3/4 mb-4" />
        <Skeleton className="h-6 w-full" />
      </div>

      <div className="mb-12">
        <Skeleton className="h-8 w-1/3 mb-6" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {Array(2)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border rounded-lg p-6">
                <Skeleton className="h-7 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-6" />
                <div className="mb-4">
                  <Skeleton className="h-4 w-1/4 mb-2" />
                  <div className="flex flex-wrap gap-2">
                    {Array(3)
                      .fill(0)
                      .map((_, j) => (
                        <Skeleton key={j} className="h-6 w-20" />
                      ))}
                  </div>
                </div>
                <Skeleton className="h-40 w-full mb-4" />
                <div className="flex justify-end">
                  <Skeleton className="h-9 w-32" />
                </div>
              </div>
            ))}
        </div>
      </div>

      <div>
        <Skeleton className="h-8 w-1/3 mb-6" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border rounded-lg p-6">
                <Skeleton className="h-7 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-6" />
                <div className="mb-4">
                  <Skeleton className="h-4 w-1/4 mb-2" />
                  <div className="flex flex-wrap gap-2">
                    {Array(3)
                      .fill(0)
                      .map((_, j) => (
                        <Skeleton key={j} className="h-6 w-20" />
                      ))}
                  </div>
                </div>
                <Skeleton className="h-40 w-full mb-4" />
                <div className="flex justify-end">
                  <Skeleton className="h-9 w-32" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
