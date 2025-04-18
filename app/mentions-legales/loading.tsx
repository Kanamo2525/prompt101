import { Skeleton } from "@/components/ui/skeleton"

export default function MentionsLegalesLoading() {
  return (
    <div className="container max-w-3xl py-10">
      <Skeleton className="h-10 w-3/4 mb-8" />

      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="mb-8">
          <Skeleton className="h-8 w-1/2 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-4 w-5/6 mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
        </div>
      ))}

      <div className="mt-10 border-t pt-6">
        <Skeleton className="h-4 w-1/3" />
      </div>
    </div>
  )
}
