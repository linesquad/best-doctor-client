import { useQuery } from "@tanstack/react-query";

import { apiGetBanner } from "../services/BannerServices";

export const useGetBanner = () => {
  return useQuery({
    queryKey: ["banner"],
    queryFn: apiGetBanner,
  });
};
