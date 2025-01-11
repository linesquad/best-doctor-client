import { useQuery } from "@tanstack/react-query";

import { apiGetBlogHero } from "../services/BlogServices";

function useGetBlogHero() {
  return useQuery({
    queryKey: ["blogHeroImage"],
    queryFn: apiGetBlogHero,
  });
}

export default useGetBlogHero;
