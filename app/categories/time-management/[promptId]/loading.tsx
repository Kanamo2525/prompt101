export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
        <div className="h-64 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded mb-2.5"></div>
        <div className="h-4 bg-gray-200 rounded mb-2.5"></div>
        <div className="h-4 bg-gray-200 rounded mb-2.5"></div>
        <div className="h-4 bg-gray-200 rounded mb-2.5"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}
