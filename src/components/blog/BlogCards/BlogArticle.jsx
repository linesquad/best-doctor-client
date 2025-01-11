
import BlogCardSkeleton from "./BlogCardSkeleton";
import BlogList from "./BlogList";
import { useGetBlog } from "../../../hooks/useGetBlog";
function BlogArticle() {
  const { data, isError, isLoading, error, isPending } = useGetBlog();

  if (isPending) {
    return <p>Pending...</p>;
  }

  if (isLoading) {
    const skeletonCount = data?.blog?.length || 5;
    return (
      <div className="grid grid-cols-1 gap-[8rem] justify-items-center w-full mt-[10rem] mb-[10rem] md:p-[40px]">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <BlogList dataList={data.blog} />
    </div>
  );
}

export default BlogArticle;
