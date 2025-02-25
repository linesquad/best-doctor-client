import EducationList from "./EducationList.jsx";
import EducationSkeleton from "./EducationSkeleton.jsx";
import useGetAboutMeEducation from "../../../hooks/useGetAboutMeEducation.js"
import ErrorDisplay from "../../ErrorDisplay.jsx";

function AboutMeEducation() {
  const { data, error, isLoading, isError } = useGetAboutMeEducation();

  if (isLoading) return <EducationSkeleton count={5} />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;

  return (
    <div className="flex flex-col items-center bg-[#FFF] shadow-[custom-light] py-[40px]">
      <EducationList data={data?.data || []} />
    </div>
  );
}

export default AboutMeEducation;
