import BookingServiceContent from "./BookingServiceContent"
import { useGetBooking } from "../../../hooks/useGetBooking";
import ErrorDisplay from "../../ErrorDisplay";
import BookingServiceSkeleton from "./BookingServiceSkeleton";
function BookingServiceCards() {
  const { data, isLoading, isError, error } = useGetBooking();
  if (isLoading) return <BookingServiceSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;

  return (
    <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 place-items-center sm:place-items-start ">
      {data.slice(0, 6).map((services) => (
        <BookingServiceContent
          key={services.id}
          id={services.id}
          count={5}
          image={"./images/newbooking.svg"}
          status={services.condition}
          type={services.prescription}
        />
      ))}
    </div>
  );
}

export default BookingServiceCards;
