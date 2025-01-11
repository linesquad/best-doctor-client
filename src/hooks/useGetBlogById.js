import { useQuery } from "@tanstack/react-query";
import { getBlogId } from "../services/BlogServices";

export const useGetBlogById = (id) => {
  return useQuery({
    queryKey: ["doctor_blog", id],
    queryFn: () => getBlogId(id),
    enabled: !!id,
  });
};
