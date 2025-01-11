import { useQuery } from "@tanstack/react-query";

import { apiGetHeroContent } from "../services/HomeHeroServices";

function useGetHeroContent() {
  return useQuery({
    queryKey: ["headingsData"],
    queryFn: apiGetHeroContent,
  });
}

export default useGetHeroContent;
