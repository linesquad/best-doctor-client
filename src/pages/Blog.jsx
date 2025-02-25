import BlogArticle from "../components/blog/BlogCards/BlogArticle";
import BlogHero from "../components/blog/hero/BlogHero";
import { Helmet } from "react-helmet-async";

function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta
          name="description"
          content="This is the Blog of my website."
        />
        <link rel="canonical" href="https://www.mywebsite.com/blog" />
      </Helmet>
      <div>
        <BlogHero />
        <BlogArticle />
      </div>
    </>
  );
}

export default Blog;
