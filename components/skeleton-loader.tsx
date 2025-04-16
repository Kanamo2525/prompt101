import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonLoader() {
  return (
    <div className="animate-pulse">
      <Skeleton className="h-4 w-full bg-gray-200" />
      <Skeleton className="h-4 w-3/4 bg-gray-200" />
      <Skeleton className="h-4 w-1/2 bg-gray-200" />
    </div>
  )
}
