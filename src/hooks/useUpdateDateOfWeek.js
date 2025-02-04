import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateDaysOfWeek } from "../services/daysOfWeek";

export function useUpdateDaysOfWeek() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateDaysOfWeek,
    mutationKey: ["daysOfWeek"],
    onSuccess: () => {
      queryClient.invalidateQueries("daysOfWeek");
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
