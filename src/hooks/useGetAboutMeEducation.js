import { useQuery } from "@tanstack/react-query";

import { getEducation } from "../services/AboutMeServices";


function useGetAboutMeEducation() {
  return useQuery({
    queryKey: ["education"],
    queryFn: getEducation,
  });
}

export default useGetAboutMeEducation;
