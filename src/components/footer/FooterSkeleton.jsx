import React from "react";

function FooterSkeleton() {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-gray-300 animate-pulse rounded-lg">
        <div className="h-24 bg-gray-400 mb-2"></div>
        <div className="h-6 bg-gray-400 mb-3"></div>
        <div className="h-6 bg-gray-400 mb-3"></div>
        <div className="h-6 bg-gray-400 mb-3"></div>
      </div>
    </div>
  );
}

export default FooterSkeleton;
