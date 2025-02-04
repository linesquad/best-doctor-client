import { useQuery } from "@tanstack/react-query";
import { getDaysOfWeek } from "../services/daysOfWeek";

export const useGetDaysOfWeek = () => {
  return useQuery({
    queryKey: ["daysOfWeek"],
    queryFn: getDaysOfWeek,
  });
};
