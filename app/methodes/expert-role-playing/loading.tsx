import { Skeleton } from "@/components/ui/skeleton"

export default function ExpertRolePlayingLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-12 w-3/4 mb-4" />
      <Skeleton className="h-6 w-full mb-2" />
      <Skeleton className="h-6 w-full mb-2" />
      <Skeleton className="h-6 w-3/4 mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Skeleton className="h-8 w-1/2 mb-4" />
          <Skeleton className="h-24 w-full mb-4" />
          <Skeleton className="h-24 w-full mb-4" />
        </div>
        <div>
          <Skeleton className="h-8 w-1/2 mb-4" />
          <Skeleton className="h-40 w-full mb-4" />
        </div>
      </div>

      <Skeleton className="h-8 w-1/3 my-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    </div>
  )
}
