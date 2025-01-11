function BannerSkeleton() {
  return (
    <div className="bg-softBlue py-[4.81rem] px-[3.81rem] mt-[8rem] flex justify-between items-center">
      <div className="w-3/4 ">
        <div className="pl-6 rounded-lg h-[4rem] bg-gray-400 animate-pulse" />
      </div>

      <div className="bg-gray-400 rounded-lg animate-pulse w-[120px] h-[4rem]"></div>
    </div>
  );
}

export default BannerSkeleton;
