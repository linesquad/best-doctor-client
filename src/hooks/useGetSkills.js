import { useQuery } from "@tanstack/react-query";

import { getSkills } from "../services/AboutMeServices";

export const useGetSkills = () => {
  return useQuery({
    queryKey: ["skills"],
    queryFn: getSkills,
  });
};
