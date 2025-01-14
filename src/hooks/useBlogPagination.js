import { useQuery } from "@tanstack/react-query";

import { apiBlogPagination } from "../services/BlogServices";

const useBlogPagination = (pageNumber, itemsPerPage) => {
  const start = (pageNumber - 1) * itemsPerPage;
  const end = start + itemsPerPage - 1;

  return useQuery({
    queryKey: ["doctor_blog", pageNumber],
    queryFn: () => apiBlogPagination({ start, end }),
    keepPreviousData: true,
  });
};

export default useBlogPagination;
