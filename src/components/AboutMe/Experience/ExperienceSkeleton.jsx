

function ExperienceSkeleton({ count = 3 }) {
  return (
    <div className="flex flex-col items-center bg-[#FFF] shadow-[custom-light] py-[40px]">
      {/* Title (Experience) in skeleton mode */}
      <div className="flex justify-start w-full">
        {/* Title Placeholder */}
        <h1 className="font-poppinsBold text-[40px] leading-[130%] tracking-[-0.4px] text-gray-300">
          Experience
        </h1>
      </div>

      {/* Skeleton list */}
      <div className="flex flex-col w-full gap-3 mt-3">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-[16px] border rounded-lg animate-pulse md:gap-[50px]"
          >
            <div className="flex items-start w-full gap-4">
              {/* Placeholder for icon */}
              <div className="bg-gray-300 w-5 h-5 flex justify-center items-center rounded-lg">
                <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
              </div>

              {/* Skeleton content placeholders */}
              <div className="flex flex-col w-full">
                {/* Title Placeholder (Place/Company name) */}
                <div className="bg-gray-300 h-6 w-32 rounded"></div>

                {/* Department and Date placeholders */}
                <div className="flex gap-4 mt-2">
                  <div className="bg-gray-300 w-24 h-5 rounded-md"></div>
                  <div className="bg-gray-300 w-20 h-5 rounded-md"></div>
                </div>

                {/* Position placeholder */}
                <div className="bg-gray-300 w-40 h-5 mt-1 rounded-md"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSkeleton;
