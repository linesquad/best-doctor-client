import { useQuery } from "@tanstack/react-query";
import { apiGetFooterData } from "../services/FooterServices";

export function useGetFooter() {
  return useQuery({
    queryFn: apiGetFooterData,
    queryKey: ["footerData"],
  });
}
