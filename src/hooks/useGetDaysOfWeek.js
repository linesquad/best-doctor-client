import { useQuery } from "@tanstack/react-query";
import { getdaysOfWeek } from "../services/daysOfWeek";

export const useGetDaysOfWeek = () => {
  return useQuery({
    queryKey: ["daysOfWeek"],
    queryFn: getdaysOfWeek,
  });
};
