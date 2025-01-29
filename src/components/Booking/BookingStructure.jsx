import AvailableServices from "./AvailableServices"
import BookingCalendar from "./BookingCalendar"
import BookingTop from "./BookingTop"
import ServicesForPatients from "./ServicesForPatients"


function BookingStructure() {
 return (
  <div>
    <BookingTop />
    <div className="px-8 sm:px-12 md:px-16">

    <ServicesForPatients />
    <div className="flex justify-between my-16">
    <BookingCalendar />
    <AvailableServices />
    </div>
    </div>
  </div>
 )
}

export default BookingStructure