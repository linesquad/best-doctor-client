import SkillsList from "./SkillsList";
import SkillsSkeleton from "./SkillsSkeleton";
import ErrorDisplay from "../../ErrorDisplay";
import { useGetSkills } from "../../../hooks/useGetSkills";

function SkillsStructure() {
  const { data, isLoading, error, isError } = useGetSkills();

  if (isLoading) return <SkillsSkeleton />;

  if (isError) return <ErrorDisplay errorMsg={error.message} />;

  return (
    <div>
      <SkillsList
        data={data.skill}
      />
    </div>
  );
}

export default SkillsStructure;
