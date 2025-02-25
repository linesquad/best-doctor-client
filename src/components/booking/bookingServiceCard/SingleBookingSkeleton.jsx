function SingleBookingSkeleton() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg animate-pulse">
      <h1 className="text-3xl font-bold text-gray-300 mb-6 text-center">
        &nbsp;
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* User Information Skeleton */}
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        </div>

        {/* Booking Information Skeleton */}
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
        </div>
      </div>
    </div>
  );
}

export default SingleBookingSkeleton;
