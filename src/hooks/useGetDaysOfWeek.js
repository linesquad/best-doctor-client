import { useQuery } from "@tanstack/react-query";
import { getDaysOfWeek } from "../services/daysOfWeek";

export const useGetDaysOfWeek = (selectedDay) => {
  return useQuery({
    queryKey: ["daysOfWeek", selectedDay],
    queryFn: () => getDaysOfWeek(selectedDay),
  });
};