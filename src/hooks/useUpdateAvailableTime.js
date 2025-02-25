import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAvailableTime } from "../services/AvailableTimeApi";

export function useUpdateAvailableTime() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAvailableTime,
    mutationKey: ["availableTime"],
    onSuccess: () => {
      queryClient.invalidateQueries("availableTime");
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
