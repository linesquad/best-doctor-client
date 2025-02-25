import { useQuery } from "@tanstack/react-query";

import { apiGetAboutMeExperience } from "../services/AboutMeServices";

function useGetAboutMeExperience() {
  return useQuery({
    queryKey: ["experience"],
    queryFn: apiGetAboutMeExperience,
  });
}

export default useGetAboutMeExperience;
