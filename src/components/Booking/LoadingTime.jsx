function LoadingTime() {
  return (
    <div className="p-4">
      <div className="flex justify-center w-full mb-8">
        <div className="h-10 w-64 bg-gray-300 rounded-md animate-pulse"></div>
      </div>

      <div className="flex justify-center">
        <div className="flex w-full gap-4 items-center justify-between flex-wrap mt-10 mb-24">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-[3.5rem] w-[200px] bg-gray-300 rounded-[3.5rem] animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoadingTime;
