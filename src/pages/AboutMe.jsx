import AboutMeHero from "../components/AboutMe/hero/AboutMeHero";
import AboutMeExperience from "../components/AboutMe/Experience/AboutMeExperience";
import AboutMeEducation from "../components/AboutMe/Education/AboutMeEducation";
function AboutMe() {
  return (
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
        {/* <SkillsStructure />
        <AwardsStructure /> */}
      </div>
    </div>
  );
}

export default AboutMe;
