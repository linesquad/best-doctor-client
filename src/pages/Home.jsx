import HomeCarousel from "../components/home/Carousel/HomeCarousel";
import DoctorBio from "../components/home/DoctorBiography/DoctorBio";
import HomeHero from "../components/home/Hero/HomeHero";
import BannerStructure from "../components/home/Banner/BannerStructure";
import Services from "../components/home/ServiceCard/Services";
function Home() {
  return (
    <div>
      <HomeHero />
      <Services />
      <BannerStructure />
      <HomeCarousel />
      <DoctorBio />
    </div>
  );
}

export default Home;
