import { useQuery } from "@tanstack/react-query";

import { getServices } from "../services/ServiceCardServices";

export const useGetServicesCard = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
};
