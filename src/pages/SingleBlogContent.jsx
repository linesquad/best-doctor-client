import { useParams } from "react-router-dom";

import BlogSkeleton from "../components/blog/BlogCards/BlogSkeleton";
import { useGetBlogById } from "../hooks/useGetBlogById";
function SingleBlogContent() {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useGetBlogById(id);

  if (isLoading) return <BlogSkeleton />;
  if (isError) return <p>Error: {error.message}</p>;

  const dataBlog = data.blog;
  const contentParts = dataBlog.content
    ? dataBlog.content.includes("/")
      ? dataBlog.content.split("/")
      : [dataBlog.content]
    : [];

  return (
    <div className="single-blog-content px-4 md:px-16 lg:px-32 mt-10">
      <h1 className="text-4xl font-bold mb-4 text-center break-all">
        {dataBlog.title}
      </h1>

      <p className="text-xs text-gray-500 mb-4">
        Reading Time: {dataBlog.time} minutes
      </p>

      {contentParts
        .slice(0, Math.floor(contentParts.length / 2))
        .map((part, index) => (
          <p
            key={`content-top-${index}`}
            className="text-lg text-gray-700 mb-6 break-words"
          >
            {part.trim()}
          </p>
        ))}

      <img
        src={dataBlog.picture}
        alt={dataBlog.title}
        className="w-full h-[26.5rem] object-fill object-center rounded-md mb-6"
      />

      {contentParts
        .slice(Math.floor(contentParts.length / 2))
        .map((part, index) => (
          <p
            key={`content-bottom-${index}`}
            className="text-lg text-gray-700 mb-6 break-words"
          >
            {part.trim()}
          </p>
        ))}
    </div>
  );
}

export default SingleBlogContent;
