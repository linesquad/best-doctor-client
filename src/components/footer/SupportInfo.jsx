import { useGetFooter } from "../../hooks/useGetFooter";
function SupportInfo() {
  const { data, isLoading, isError } = useGetFooter();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <p className="text-black mb-[1rem]">{item.text}</p>

          <div className="mb-[1rem] lg:flex lg:gap-4">
            <p className="text-black font-bold">Phone Number:</p>
            <p className="break-words overflow-x-auto">{item.phone}</p>
          </div>
          <div className="mb-[1rem] lg:flex lg:gap-4">
            <p className="text-black font-bold">Email Address:</p>
            <p className="break-words overflow-x-auto">{item.email}</p>
          </div>
          <div className="mb-[1rem] lg:flex lg:gap-4">
            <p className="text-black font-bold">Linkedin:</p>
            <p className="break-words overflow-x-auto">{item.linkedin}</p>
          </div>
          <div className="mb-[1rem] lg:flex lg:gap-4">
            <p className="text-black font-bold">Permanent Address:</p>
            <p className="break-words overflow-x-auto">{item.address}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default SupportInfo;
