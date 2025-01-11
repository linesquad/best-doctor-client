const HeroSkeleton = () => {
  return (
    <div className="w-full h-[80vh] bg-gray-200 animate-pulse flex flex-col justify-center items-center space-y-6">
      <div className="h-10 bg-gray-300 rounded w-2/3"></div>
      <div className="h-8 bg-gray-300 rounded w-1/2"></div>
      <div className="h-8 bg-gray-300 rounded w-3/4"></div>
    </div>
  );
};

export default HeroSkeleton;
