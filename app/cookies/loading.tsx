import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <Skeleton className="h-6 w-64 mb-8" />

      <Skeleton className="h-10 w-3/4 mb-4" />
      <Skeleton className="h-4 w-48 mb-8" />

      <div className="space-y-6">
        <div>
          <Skeleton className="h-8 w-64 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        <div>
          <Skeleton className="h-8 w-72 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6" />
        </div>

        <div>
          <Skeleton className="h-8 w-56 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-4/5" />
        </div>

        <div className="mt-8">
          <Skeleton className="h-10 w-48 mx-auto" />
        </div>
      </div>
    </div>
  )
}
