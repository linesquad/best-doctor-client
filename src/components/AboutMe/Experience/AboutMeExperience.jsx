import circleIcon from "/images/Icon.svg";
import ExperienceSkeleton from "./ExperienceSkeleton.jsx";
import useGetAboutMeExperience from "../../../hooks/useGetAboutMeExperience.js";
import ErrorDisplay from "../../ErrorDisplay.jsx";
import ExperienceList from "./ExperienceList.jsx";

function AboutMeExperience() {
  const { data, error, isLoading, isError } = useGetAboutMeExperience();
  if (isLoading) return <ExperienceSkeleton count={5} />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;

  return (
    <div className="flex flex-col items-center bg-[#FFF] shadow-[custom-light] py-[40px]">
      <ExperienceList
        data={data}
        circleIcon={circleIcon}
      />
    </div>
  );
}

export default AboutMeExperience;
