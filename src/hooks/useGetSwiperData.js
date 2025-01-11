import { useQuery } from "@tanstack/react-query";

import apiGetSwiperItems from "../services/CarouselServices";

function useGetSwiperData() {
  return useQuery({
    queryFn: apiGetSwiperItems,
    queryKey: ["SwiperData"],
  });
}

export default useGetSwiperData;
