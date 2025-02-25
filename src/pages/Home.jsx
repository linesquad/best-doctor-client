import HomeCarousel from "../components/home/Carousel/HomeCarousel";
import DoctorBio from "../components/home/DoctorBiography/DoctorBio";
import HomeHero from "../components/home/Hero/HomeHero";
import BannerStructure from "../components/home/Banner/BannerStructure";
import Services from "../components/home/ServiceCard/Services";
import { Helmet } from 'react-helmet-async';
function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="This is the homepage of my website." />
        <link rel="canonical" href="https://www.mywebsite.com/home" />
      </Helmet>
      <HomeHero />
      <Services />
      <BannerStructure />
      <HomeCarousel />
      <DoctorBio />
    </div>
  );
}

export default Home;
