import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; 
import ReusableTitle from "../../ui/ReusableTitle";


function BookingCalendar() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log("Selected Date:", newDate);
  };

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
          className="rounded-lg" 
        />
      </div>
    </div>
  );
}

export default BookingCalendar;
