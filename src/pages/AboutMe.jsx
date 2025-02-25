import AboutMeHero from "../components/AboutMe/hero/AboutMeHero";
import AboutMeExperience from "../components/AboutMe/Experience/AboutMeExperience";
import AboutMeEducation from "../components/AboutMe/Education/AboutMeEducation";
import SkillsStructure from "../components/AboutMe/skill/SkillsStructure";
import AwardsStructure from "../components/AboutMe/Awards/AwardsStrucutre";
import { Helmet } from "react-helmet-async";

function AboutMe() {
  return (
    <>
      <Helmet>
        <title>About Me</title>
        <meta
          name="description"
          content="This is the about me of my website."
        />
        <link rel="canonical" href="https://www.mywebsite.com/aboutme" />
      </Helmet>
      <div className="px-10">
        <div className="block">
          <div>
            <div>
              <AboutMeHero />
            </div>
            <div>
              <AboutMeExperience />
            </div>
            <div>
              <AboutMeEducation />
            </div>
          </div>
        </div>
        <div>
          <SkillsStructure />
          <AwardsStructure />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
