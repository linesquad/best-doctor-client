function BlogHeroContent({ blogHeroImg, blogHeroTitle, BlogHeroSubTitle }) {
  return (
    <div
      style={{
        backgroundImage: `url(${blogHeroImg})`,
      }}
      className={`bg-no-repeat bg-cover bg-center min-h-[390px] 
   flex items-center max-w-full sm:min-h-[557px] lg:min-h-[80vh] relative`}
    >
      <div className="flex flex-col justify-end gap-3 px-[36px] h-full">
        <h1 className="text-white font-poppinsRegular text-[48px] leading-[40px]">
          {blogHeroTitle}
        </h1>
        <h3 className="text-white font-heeboRegular text-[24px] leading-[24px]">
          {BlogHeroSubTitle}
        </h3>
      </div>
    </div>
  );
}

export default BlogHeroContent;
