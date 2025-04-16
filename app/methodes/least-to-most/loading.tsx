import { Skeleton } from "@/components/ui/skeleton"

export default function LeastToMostLoading() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-10">
        <div className="text-center">
          <Skeleton className="h-6 w-24 mx-auto mb-4" />
          <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto mb-6" />
        </div>
      </div>

      {/* Breadcrumbs Skeleton */}
      <div className="flex items-center mb-8">
        <Skeleton className="h-4 w-16 mr-2" />
        <Skeleton className="h-4 w-4 mx-2" />
        <Skeleton className="h-4 w-20 mr-2" />
        <Skeleton className="h-4 w-4 mx-2" />
        <Skeleton className="h-4 w-32" />
      </div>

      {/* Definition Box Skeleton */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10">
        <Skeleton className="h-6 w-3/4 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-4/5 mb-2" />
        <Skeleton className="h-4 w-5/6" />
      </div>

      {/* How it Works Skeleton */}
      <section className="mb-12">
        <Skeleton className="h-8 w-64 mb-6" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-6" />

        <div className="space-y-6 my-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <Skeleton className="w-10 h-10 rounded-full mr-4" />
                <div className="w-full">
                  <Skeleton className="h-6 w-1/3 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-3" />
                  <Skeleton className="h-16 w-full rounded-md" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Example Skeleton */}
      <section className="mb-12">
        <Skeleton className="h-8 w-48 mb-6" />

        <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
          <Skeleton className="h-12 w-full" />
          <div className="p-6">
            <Skeleton className="h-4 w-5/6 mb-6" />

            <Skeleton className="h-4 w-40 mb-2" />
            <Skeleton className="h-16 w-full mb-4 rounded-md" />

            <Skeleton className="h-4 w-32 mb-2" />
            <Skeleton className="h-24 w-full mb-6 rounded-md" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Skeleton className="h-40 w-full rounded-lg" />
              <Skeleton className="h-40 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons Skeleton */}
      <section className="mb-12">
        <Skeleton className="h-8 w-48 mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="h-64 w-full rounded-lg" />
          <Skeleton className="h-64 w-full rounded-lg" />
        </div>
      </section>

      {/* Use Cases Skeleton */}
      <section className="mb-12">
        <Skeleton className="h-8 w-64 mb-6" />

        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-56 w-full rounded-lg" />
          ))}
        </div>
      </section>

      {/* Tips Skeleton */}
      <Skeleton className="h-64 w-full rounded-lg mb-12" />

      {/* Navigation Skeleton */}
      <div className="flex justify-between items-center py-6 border-t border-gray-200 mt-10">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-48" />
      </div>

      {/* CTA Section Skeleton */}
      <Skeleton className="h-48 w-full rounded-xl mt-12" />
    </div>
  )
}
