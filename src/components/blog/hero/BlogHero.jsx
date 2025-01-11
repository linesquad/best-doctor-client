import BlogHeroContent from "./BlogHeroContent";
import BlogHeroSkeleton from "./BlogHeroSkeleton";
import useGetBlogHero from "../../../hooks/useGetBlogHero";
import ErrorDisplay from "../../ErrorDisplay";
function BlogHero() {
  const { data, isLoading, isError, error } = useGetBlogHero();
  if (isLoading) return <BlogHeroSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;

  return (
    <div>
      {data.map((blogHero) => (
        <BlogHeroContent
          BlogHeroSubTitle={blogHero.subtitle}
          blogHeroImg={blogHero.image}
          blogHeroTitle={blogHero.title}
          id={blogHero.id}
          key={blogHero.id}
        />
      ))}
    </div>
  );
}

export default BlogHero;
