import TrendBookingCard from "./TrendBookingCard";
import TrendBookingCardSkeleton from "./TrendBookingCardSkeleton";
import TrendStatistick from "./TrendStatistic";
import { useGetBooking } from "../../hooks/useGetBooking";
import ErrorDisplay from "../ErrorDisplay";
import ReusableTitle from "../../ui/ReusableTitle";
function TrendAppointments() {
  const { data, isLoading, isError, error } = useGetBooking();
  if (isLoading) {
    return <TrendBookingCardSkeleton />;
  }
  if (isError) {
    return <ErrorDisplay errorMsg={error.message} />;
  }
  return (
    <div>
      <ReusableTitle
        color={"text-[#000]"}
        fontWeight={"font-poppinsBold"}
        size={"text-[25px] md:text-[36px]"}
        title={"Today's Appointment "}
      />
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="grid grid-cols-1 gap-3">
          {data.slice(0, 3).map((item) => (
            <TrendBookingCard
              key={item.id}
              age={item.age}
              endTime={item.end_time}
              startTime={item.start_time}
              presctiption={item.prescription}
              subTitle={item.user_name}
              type={"Camera"}
            />
          ))}
        </div>
        <TrendStatistick
          Appointments={567}
          Revenue={`$${(45, 678)}`}
          TotalPatients={"1,234"}
          WeekAppointment={15}
        />
      </div>
    </div>
  );
}

export default TrendAppointments;
