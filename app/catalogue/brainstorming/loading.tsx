import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <Skeleton className="h-10 w-3/4 mb-4" />
        <Skeleton className="h-6 w-full max-w-3xl mb-2" />
        <Skeleton className="h-6 w-2/3 max-w-2xl" />
      </div>

      <Skeleton className="h-12 w-96 mb-8" />

      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <Skeleton className="h-8 w-64 mb-2" />
                <Skeleton className="h-4 w-48" />
              </div>
              <Skeleton className="h-10 w-24" />
            </div>
            <Skeleton className="h-40 w-full mb-4" />
            <div className="flex justify-end">
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
