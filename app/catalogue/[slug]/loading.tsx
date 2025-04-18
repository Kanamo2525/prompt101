import { Skeleton } from "@/components/ui/skeleton"

export default function PromptLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Skeleton className="h-6 w-32" />
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <Skeleton className="h-[500px] w-full rounded-lg" />
      </div>
    </div>
  )
}
