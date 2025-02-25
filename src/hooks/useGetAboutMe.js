import { useQuery } from "@tanstack/react-query";

import { apiGetAboutMe } from "../services/AboutMeServices";

function useGetAboutMe() {
  return useQuery({
    queryKey: ["about"],
    queryFn: apiGetAboutMe,
  });
}

export default useGetAboutMe;
