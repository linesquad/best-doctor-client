import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ReusableTitle from "../../ui/ReusableTitle";

function BookingCalendar({date, setDate}) {

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
    }));
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
        <p>
          {date.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
          })}
        </p>
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
