import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { addPatient } from "../services/bookinginformation";

export const useAddPatient = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addPatient,
    onSuccess: () => {
      queryClient.invalidateQueries(["patients"]);
      toast.success("Your information Succesfully added!");
    },
    onError: (error) => {
      toast.error(`Failed to add information: ${error.message}`);
    },
  });
};
