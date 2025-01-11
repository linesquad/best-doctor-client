function BlogCardSkeleton() {
  return (
    <div className="w-full rounded-[15px] shadow-custom-light">
      <div className="w-full h-[350px] bg-gray-300 bg-left sm:bg-center bg-cover rounded-t-[15px] animate-pulse"></div>
      <div className="text-left bg-white w-full p-4 rounded-b-[15px] border-b border-blog-border">
        <div className="h-[20px] bg-gray-300 w-1/2 mb-2 animate-pulse"></div>
        <div className="h-[32px] bg-gray-300 w-3/4 mb-2 animate-pulse"></div>
        <div className="h-[18px] bg-gray-300 w-full mb-4 animate-pulse"></div>
        <div className="h-[18px] bg-gray-300 w-full mb-4 animate-pulse"></div>
        <div className="h-[32px] bg-gray-300 w-[50px] mb-4 animate-pulse"></div>
      </div>
    </div>
  );
}

export default BlogCardSkeleton;
