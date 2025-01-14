import { useGetFooter } from "../../hooks/useGetFooter";
import ErrorDisplay from "../ErrorDisplay";
import FooterSkeleton from "./FooterSkeleton";
import SupportInfoContent from "./SupportInfoContent";
function SupportInfo() {
  const { data, isLoading, isError, error } = useGetFooter();

  if (isLoading) return <FooterSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;
  return (
    <>
      {data.map((item) => (
        <SupportInfoContent
          key={item.id}
          address={item.address}
          email={item.email}
          id={item.id}
          linkedin={item.linkedin}
          text={item.text}
          phone={item.phone}
        />
      ))}
    </>
  );
}

export default SupportInfo;
