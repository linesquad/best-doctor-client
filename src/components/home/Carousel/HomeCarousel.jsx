import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import CarouselContent from "./CarouselContent";
import CarouselSkeleton from "./CarouselSkeleton";

import ErrorDisplay from "../../ErrorDisplay";
import useGetSwiperData from "../../../hooks/useGetSwiperData";

function HomeCarousel() {
  const { data, isLoading, isError, error } = useGetSwiperData();

  if (isError) return <ErrorDisplay errorMsg={error?.message} />;

  return (
    <div className="mt-10 mb-32">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1.1,
          },
          475: {
            slidesPerView: 1.4,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {isLoading
          ? Array.from({ length: 9 }).map((_, index) => (
              <SwiperSlide key={index}>
                <CarouselSkeleton />
              </SwiperSlide>
            ))
          : data.map((item) => (
              <SwiperSlide key={item.id}>
                <CarouselContent
                  img={item.picture}
                  reading={item.time}
                  title={item.title}
                  content={item.content}
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}

export default HomeCarousel;
