import { useQuery } from "@tanstack/react-query"

import { getPatientsByDate } from "../services/bookinginformation"

export const useGetPatientsByDate = (formattedDate) => {
  return useQuery({
    queryFn: () => getPatientsByDate(formattedDate), // <-- Remove the argument from here
    queryKey: ["patientsByDate", formattedDate], // <-- Include date in the queryKey
    enabled: !!formattedDate,
  });
};
