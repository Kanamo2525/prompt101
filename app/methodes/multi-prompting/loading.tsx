import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-8">
        <div className="flex justify-center mb-4">
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
        <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
        <Skeleton className="h-6 w-1/2 mx-auto" />
      </div>

      {/* Breadcrumbs Skeleton */}
      <div className="flex items-center mb-8">
        <Skeleton className="h-4 w-16 mr-2" />
        <Skeleton className="h-4 w-4 mx-1" />
        <Skeleton className="h-4 w-24 mr-2" />
        <Skeleton className="h-4 w-4 mx-1" />
        <Skeleton className="h-4 w-32" />
      </div>

      {/* Definition Box Skeleton */}
      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-10">
        <Skeleton className="h-7 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-4/5" />
      </div>

      {/* How it Works Skeleton */}
      <div className="mb-12">
        <Skeleton className="h-8 w-64 mb-6" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-4/5 mb-6" />

        {/* Flow Diagram Skeleton */}
        <Skeleton className="h-80 w-full rounded-lg mb-6" />
      </div>

      {/* Example Skeleton */}
      <div className="mb-12">
        <Skeleton className="h-8 w-48 mb-6" />
        <div className="border rounded-lg p-6 mb-6">
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-40 w-full mb-4" />
          <Skeleton className="h-40 w-full mb-4" />
          <Skeleton className="h-40 w-full" />
        </div>
      </div>

      {/* Pros and Cons Skeleton */}
      <div className="mb-12">
        <Skeleton className="h-8 w-56 mb-6" />
        <div className="grid md:grid-cols-2 gap-6">
          <Skeleton className="h-64 rounded-lg" />
          <Skeleton className="h-64 rounded-lg" />
        </div>
      </div>

      {/* Use Cases Skeleton */}
      <div className="mb-12">
        <Skeleton className="h-8 w-64 mb-6" />
        <div className="space-y-6">
          <Skeleton className="h-48 rounded-lg" />
          <Skeleton className="h-48 rounded-lg" />
          <Skeleton className="h-48 rounded-lg" />
        </div>
      </div>

      {/* Tips Skeleton */}
      <div className="mb-12">
        <Skeleton className="h-8 w-48 mb-6" />
        <Skeleton className="h-64 rounded-lg" />
      </div>

      {/* Navigation Skeleton */}
      <div className="flex justify-between items-center py-6 border-t border-gray-200 mt-8">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-32" />
      </div>

      {/* CTA Section Skeleton */}
      <Skeleton className="h-48 rounded-xl mt-12" />
    </div>
  )
}
