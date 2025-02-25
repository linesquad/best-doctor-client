import { useQuery } from "@tanstack/react-query";
import { apiGetBookings } from "../services/TrendServices";
export function useGetBooking() {
  return useQuery({
    queryFn: apiGetBookings,
    queryKey: ["bookingsData"],
  });
}
