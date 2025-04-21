export default function Loading() {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <div className="h-6 w-64 bg-muted rounded animate-pulse mb-8"></div>

      <div className="h-10 w-3/4 bg-muted rounded animate-pulse mb-4"></div>
      <div className="h-4 w-40 bg-muted rounded animate-pulse mb-8"></div>

      <div className="space-y-6">
        <div>
          <div className="h-8 w-64 bg-muted rounded animate-pulse mb-4"></div>
          <div className="h-4 w-full bg-muted rounded animate-pulse mb-2"></div>
          <div className="h-4 w-full bg-muted rounded animate-pulse mb-2"></div>
          <div className="h-4 w-3/4 bg-muted rounded animate-pulse mb-6"></div>
        </div>

        <div>
          <div className="h-8 w-72 bg-muted rounded animate-pulse mb-4"></div>
          <div className="h-4 w-full bg-muted rounded animate-pulse mb-2"></div>
          <div className="h-4 w-full bg-muted rounded animate-pulse mb-4"></div>

          <div className="h-4 w-1/2 bg-muted rounded animate-pulse mb-2"></div>
          <div className="h-4 w-1/2 bg-muted rounded animate-pulse mb-2"></div>
          <div className="h-4 w-1/2 bg-muted rounded animate-pulse mb-2"></div>
          <div className="h-4 w-1/2 bg-muted rounded animate-pulse mb-6"></div>
        </div>

        <div>
          <div className="h-8 w-56 bg-muted rounded animate-pulse mb-4"></div>
          <div className="h-4 w-full bg-muted rounded animate-pulse mb-2"></div>
          <div className="h-4 w-full bg-muted rounded animate-pulse mb-4"></div>

          <div className="overflow-hidden rounded-lg bg-muted h-40 mb-6"></div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="h-10 w-40 bg-muted rounded animate-pulse"></div>
      </div>
    </div>
  )
}
