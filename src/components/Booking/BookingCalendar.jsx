import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ReusableTitle from "../../ui/ReusableTitle";
import "../../CalendarStyles.css"
import { useState } from "react";
import { useGetPatientsByDate } from "../../hooks/useGetPatientsByDate";

function BookingCalendar({ date, setDate, setBookingLength }) {
  const [formatDate, setFormatDate] = useState(null);
  const {data,isLoading,isError,error} = useGetPatientsByDate(formatDate)
  
  console.log(data);
  
  const handleDateChange = (newDate) => {
    setDate(newDate);
    const formattedDate = newDate.toISOString().split("T")[0];
    setFormatDate(formattedDate)
    setBookingLength(data?.length)
    console.log(data?.length);
    
  }
  
  const disablePastDates = ({ date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  if(isLoading) return <p>Loading</p>
  if(isError) return <p>{error.message}</p>

  return (
    <div>
      <ReusableTitle
        title={"Calendar"}
        size={"text-[2rem]"}
        color={"text-black"}
        fontWeight={"font-bold"}
      />

      <div className="mt-6">
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="custom-calendar"
          tileDisabled={disablePastDates}
        />
      </div>
    </div>
  );
}

export default BookingCalendar;
