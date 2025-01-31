import { useQuery } from "@tanstack/react-query";
import { getAvailableTime } from "../services/AvailableTimeApi";

export const useGetAvailableTime = () => {
  return useQuery({
    queryKey: ["doctor_availability"],
    queryFn: getAvailableTime,
  });
};
