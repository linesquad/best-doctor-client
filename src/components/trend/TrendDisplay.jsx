import { useState } from "react";

import TrendAppointments from "./TrendAppointments";
import TrendBookingCard from "./TrendBookingCard"
import TrendFilterCardSkeleton from "./TrendFilterCardSkeleton"
import ErrorDisplay from "../ErrorDisplay";
import TrendCardsFIlter from "./TrendCardsFilter"
import { useGetBooking } from "../../hooks/useGetBooking";
import BookingServiceCards from "../booking/bookingServiceCard/BookingServiceCards"
import ChartDisplay from "./ChartDisplay";
import ReusableTitle from "../../ui/ReusableTitle";

function TrendDisplay() {
  const { data, isLoading, isError, error } = useGetBooking();
  const [selectedDate, setSelectedDate] = useState("");

  if (isLoading) {
    return <TrendFilterCardSkeleton />;
  }
  if (isError) {
    return <ErrorDisplay errorMsg={error.message} />;
  }

  const filteredData =
    selectedDate === ""
      ? data
      : data.filter((item) => item.date === selectedDate);

  return (
    <div className="">
      <ReusableTitle
        color={"text-[#000]"}
        fontWeight={"font-poppinsBold"}
        size={"text-[38px] md:text-[64px]"}
        title={"Patient trend over months"}
      />
      <ChartDisplay />
      <TrendAppointments />
      <div className="my-32">
        <label htmlFor="date-filter" className="block text-lg font-medium mb-2">
          Filter by Date
        </label>
        <TrendCardsFIlter
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          data={data}
        />

        {/* Booking Cards */}
        <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredData.slice(0, 6).map((item) => (
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
          {filteredData.length === 0 && (
            <p className="col-span-full text-gray-500 text-center">
              No bookings available for the selected date.
            </p>
          )}
        </div>
      </div>
      <div className="my-32">
        <BookingServiceCards />
      </div>
    </div>
  );
}

export default TrendDisplay;
