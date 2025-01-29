import AvailableServices from "./AvailableServices";
import AvailableTime from "./AvailableTime";
import BookingCalendar from "./BookingCalendar";
import BookingTop from "./BookingTop";
import ServicesForPatients from "./ServicesForPatients";

function BookingStructure() {
  return (
    <div>
      <BookingTop />
      <div className="px-8 sm:px-12 md:px-16">
        <ServicesForPatients />
        <div className="flex lg:flex-row flex-col gap-10 lg:gap-0 justify-between my-16">
          <BookingCalendar />
          <AvailableServices />
        </div >
        <AvailableTime />
      </div>
    </div>
  );
}

export default BookingStructure;
