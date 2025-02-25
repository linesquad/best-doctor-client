function TrendFilterCardSkeleton() {
  return (
    <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse max-w-[366px] w-full flex flex-col gap-3 p-7 border border-gray-200 shadow-custom-light bg-gray-100"
        >
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4 mt-2"></div>
          <div className="h-8 bg-gray-300 rounded w-3/4 mt-4"></div>
          <div className="h-8 bg-gray-300 rounded w-full mt-2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 mt-4"></div>
        </div>
      ))}
    </div>
  );
}

export default TrendFilterCardSkeleton;
