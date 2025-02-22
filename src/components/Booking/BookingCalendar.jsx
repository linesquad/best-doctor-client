import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ReusableTitle from "../../ui/ReusableTitle";
import "../../CalendarStyles.css";

function BookingCalendar({ date, setDate, setFormatDate }) {
  const handleDateChange = (newDate) => {
    setDate(newDate);
    const formattedDate = newDate.toISOString().split("T")[0];
    setFormatDate(formattedDate);
  };

  const disablePastDates = ({ date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
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
          className="custom-calendar"
          tileDisabled={disablePastDates}
        />
      </div>
    </div>
  );
}

export default BookingCalendar;
