function ChartSkeleton() {
  return (
    <div className="w-full max-w-[90%] md:max-w-[75%] lg:max-w-full mx-auto h-[300px] md:h-[400px] lg:h-[500px] my-40 bg-gray-200 animate-pulse rounded">
      <div className="flex flex-col justify-center items-center h-full space-y-4">
        <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
        <div className="w-full h-[2px] bg-gray-300"></div>
        <div className="flex w-full justify-between px-4">
          {Array(7)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="h-5 w-8 bg-gray-300 rounded"></div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ChartSkeleton;
