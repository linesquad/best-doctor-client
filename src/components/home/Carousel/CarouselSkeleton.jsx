function CarouselSkeleton() {
  return (
    <div className="flex gap-2 py-5 flex-col">
      <div className="w-full max-w-[427px] h-[337px] bg-gray-200 rounded-lg p-6 flex flex-col justify-center space-y-4 animate-pulse"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      <div className="h-6 bg-gray-300 rounded w-2/4"></div>
      <div className="h-6 bg-gray-300 rounded w-full"></div>
    </div>
  );
}

export default CarouselSkeleton;
