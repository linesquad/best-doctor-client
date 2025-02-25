import ReusableTitle from "../../../ui/ReusableTitle";


function SkillsSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <ReusableTitle
        title={"Skills"}
        size={"text-[3rem]"}
        color={"text-gray-300"}
        fontWeight={"font-bold"}
      />
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="border p-4 rounded-lg flex items-center w-full justify-between animate-pulse"
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-300 w-5 h-5 flex justify-center items-center rounded-lg">
                  <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                </div>
                <div className="bg-gray-300 h-6 w-32 rounded"></div>
              </div>
            </div>
            <div className="bg-gray-200 h-4 w-60 mt-2 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsSkeleton;
