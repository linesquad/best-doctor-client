import ServiceGrid from "./ServiceGrid";
import ServiceSkeleton from "./ServiceSkeleton";
import { useGetServicesCard } from "../../../hooks/useGetServicesCard";
function ServiceCard() {
  const { data, isLoading, isError, error } = useGetServicesCard();

  if (isLoading) return <ServiceSkeleton />;
  if (isError) return <p>{error.message}</p>;

  return (
    <div className="mt-20">
      <ServiceGrid isLoading={isLoading} services={data.services} />
    </div>
  );
}

export default ServiceCard;
