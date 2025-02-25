function AboutMeImg({ dataHeroImg }) {
  const backgroundImageStyle = dataHeroImg
    ? { backgroundImage: `url(${dataHeroImg})` }
    : { backgroundColor: "#e0e0e0" };

  return (
    <div
      style={backgroundImageStyle}
      className={`bg-no-repeat bg-cover bg-center min-h-[390px]
      flex items-center max-w-full sm:min-h-[557px] lg:min-h-screen relative mt-[50px]`}
    ></div>
  );
}

export default AboutMeImg;
