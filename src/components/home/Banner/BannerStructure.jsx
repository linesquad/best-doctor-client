import BannerSkeleton from "./BannerSkeleton";
import { useGetBanner } from "../../../hooks/useGetBanner";

function BannerStructure() {
  const { data, error, isError, isLoading } = useGetBanner();

  if (isLoading) {
    return <BannerSkeleton />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <div className="bg-softBlue py-[3.81rem] mb-28 px-[3.81rem] break-words mt-[8rem] flex justify-between items-center">
        {data.description.map((banner) => (
          <div className="w-3/4" key={banner.id}>
            <h1 className="font-semibold text-[4rem]">{banner.description}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default BannerStructure;
