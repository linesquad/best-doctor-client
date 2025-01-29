import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Default CSS for the calendar

function BookingCalendar() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log("Selected Date:", newDate);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Calendar</h2>
      <div>
        <Calendar
          onChange={handleDateChange}
          value={date}
          className=" rounded-lg"
        />
      </div>
    </div>
  );
}

export default BookingCalendar;
