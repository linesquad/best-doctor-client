import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import BlogCard from "./BlogCard";
import BlogListPagination from "./BlogListPagination";
import useBlogPagination from "../../../hooks/useBlogPagination";
import HomeCarousel from "../../home/Carousel/HomeCarousel";

function BlogList({ dataList }) {
  const itemsPerPage = 5;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const {
    data: doctor_blog,
    error,
    isLoading,
  } = useBlogPagination(currentPage, itemsPerPage);

  const totalPages =
    dataList && dataList.length > 0
      ? Math.ceil(dataList.length / itemsPerPage)
      : 1;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      navigate(`/blog?page=${currentPage + 1}`);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      navigate(`/blog?page=${currentPage - 1}`);
    }
  };

  const handlePageChange = (page) => {
    navigate(`/blog?page=${page}`);
  };

  // Scroll to top whenever the current page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="md:p-[40px]">
        <h1 className="md:text-left md:text-[64px] text-[44px] text-center font-bold text-[#000] font-poppins mb-[3rem] mt-[1rem]">
          Suggested For You
        </h1>

        <div className="w-full mb-[10rem]">
          <div className="grid grid-cols-1 gap-[8rem] justify-items-center w-full mt-8">
            {doctor_blog.map((item) => (
              <BlogCard
                data={item}
                key={item.id}
                handlePrevPage={handlePrevPage}
                handlePageChange={handlePageChange}
              />
            ))}
          </div>
        </div>
      </div>

      <BlogListPagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handlePageChange={handlePageChange}
      />

      <div className="md:p-[40px]">
        <h3 className="md:text-left md:text-[64px] text-[44px] text-center font-bold text-[#000] font-poppins mb-[5rem] mt-[10rem]">
          Suggested For You
        </h3>

        <HomeCarousel />
      </div>
    </>
  );
}

export default BlogList;