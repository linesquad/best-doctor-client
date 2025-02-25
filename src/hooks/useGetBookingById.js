import { useQuery } from "@tanstack/react-query";

import { getBookingById } from "../services/TrendServices";

export function useGetBookingById(id) {
  return useQuery({
    queryKey: ["bookingsById", id],
    queryFn: () => getBookingById(id),
    enabled: !!id,
  });
}
