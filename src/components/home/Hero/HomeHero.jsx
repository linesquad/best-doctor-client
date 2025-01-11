import HomeContent from "./HeroContent";
import HeroSkeleton from "./HeroSkeleton";
import useGetHomeHeroContent from "../../../hooks/useGetHomeHeroContent";
import useGetHomeHero from "../../../hooks/useGetHomeHero";
import ErrorDisplay from "../../ErrorDisplay";
function HomeHero() {
  const { data, isLoading, isError, error } = useGetHomeHeroContent();

  const {
    data: heroImage,
    isLoading: heroImageLoading,
    isError: heroImageError,
    error: heroImageErrorMSG,
  } = useGetHomeHero();

  if (isLoading || heroImageLoading) return <HeroSkeleton />;
  if (isError || heroImageError)
    return (
      <ErrorDisplay errorMsg={error?.message || heroImageErrorMSG?.message} />
    );

  return (
    <section>
      {heroImage.map((images) => (
        <div
          key={images.id}
          onClick={() => setSelectedId(images.id)}
          style={{
            backgroundImage: `url(${images.top_pic})`,
          }}
          className={`bg-no-repeat bg-cover bg-center min-h-[390px] 
            flex items-center max-w-full sm:min-h-[557px] lg:min-h-[80vh] relative`}
        >
          <div className=" pl-[37px] md:pl-[123px] lg:pl-[212px]">
            {data.map((items) => (
              <div key={items.id}>
                <HomeContent
                  subHeading={items.sub_heading}
                  mainHeading={items.main_heading}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default HomeHero;
