import { useQuery } from "@tanstack/react-query";
import { getBlog } from "../services/BlogServices";

export const useGetBlog = () => {
  return useQuery({
    queryKey: ["doctor_blog"],
    queryFn: getBlog,
  });
};
