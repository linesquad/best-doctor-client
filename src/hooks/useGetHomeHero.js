import { useQuery } from "@tanstack/react-query";

import { apiGetHeroImage } from "../services/HomeHeroServices";

function useGetHomeHero() {
  return useQuery({
    queryKey: ["HeroImage"],
    queryFn: apiGetHeroImage,
  });
}

export default useGetHomeHero;
