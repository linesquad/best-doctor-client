import AwardsList from "./AwardsList";
import AwardsSkeleton from "./AwardsSkeleton";
import { useGetAwards } from "../../../hooks/useGetAwards";
import ErrorDisplay from "../../ErrorDisplay";

function AwardsStructure() {
  const { data, isError, isLoading, error } = useGetAwards();

  if (isLoading) return <AwardsSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;

  return (
    <div className="mb-20">
      <AwardsList data={data.award} />
    </div>
  );
}

export default AwardsStructure;
