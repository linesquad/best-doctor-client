import { useQuery } from "@tanstack/react-query";
import { getServicesById } from "../services/ServiceCardServices";

export const useGetServicesById = (id) => {
  return useQuery({
    queryKey: ["services", id],
    queryFn: () => getServicesById(id),
    enabled: !!id,
  });
};
