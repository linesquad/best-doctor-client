import { useQuery } from "@tanstack/react-query";

import { apiGetDoctorBioImage } from "../services/DoctorBIoServices";

function useGetDoctorBioImage() {
  return useQuery({
    queryFn: apiGetDoctorBioImage,
    queryKey: ["doctorImage"],
  });
}

export default useGetDoctorBioImage;
