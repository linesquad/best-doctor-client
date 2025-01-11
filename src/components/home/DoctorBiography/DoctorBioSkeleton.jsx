function DoctorBioSkeleton() {
  return (
    <div className="flex justify-end items-end py-5">
      <div className="w-full max-w-[700px] h-[600px] bg-gray-200 rounded-lg p-6 flex flex-col justify-center space-y-4 animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded w-2/4"></div>
        <div className="h-6 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
}

export default DoctorBioSkeleton;
