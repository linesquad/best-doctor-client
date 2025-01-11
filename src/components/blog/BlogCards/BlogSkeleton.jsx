import React from "react";

function BlogSkeleton() {
  return (
    <div className="single-blog-content px-4 md:px-16 lg:px-32 mt-10 animate-pulse">
      <div className="h-8 bg-gray-300 rounded-md mb-4 mx-auto w-3/4"></div>

      <div className="h-4 bg-gray-200 rounded-md mb-4 w-1/4 mx-auto"></div>

      <div className="space-y-4 mb-6">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="h-5 bg-gray-200 rounded-md"></div>
        ))}
      </div>

      <div className="w-full h-[26.5rem] bg-gray-300 rounded-md mb-6"></div>

      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="h-5 bg-gray-200 rounded-md"></div>
        ))}
      </div>
    </div>
  );
}

export default BlogSkeleton;
