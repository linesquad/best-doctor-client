import { useRef, useState } from "react";
import AvailableServices from "./AvailableServices";
import AvailableTime from "./AvailableTime";
import BookingCalendar from "./BookingCalendar";
import BookingTop from "./BookingTop";
import ServicesForPatients from "./ServicesForPatients";
import { useAddPatient } from "../../hooks/useAddPatient";

function BookingStructure() {
  const [selectedService, setSelectedService] = useState(null);
  const [date, setDate] = useState(new Date());
  const [timeId, setTimeId] = useState(null);
  const [bookingLength, setBookingLength] = useState([]);
  const [formatDate, setFormatDate] = useState(null);

  const formRef = useRef(null);
  const { mutate: addPatient } = useAddPatient();

  const dayIndex = (date.getDay() + 7) % 7;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const formattedDate = date.toISOString().split("T")[0];
    console.log(formattedDate);

    const patient = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      user_phone: formData.get("user_phone"),
      age: formData.get("age"),
      condition: formData.get("condition"),
      date: formattedDate,
      status: "Pending",
      price: selectedService?.price,
      procedure: selectedService?.name,
      avaliable_time: timeId,
    };

    addPatient(patient);
    formRef.current.reset();
    setDate(new Date());
    setSelectedService(null);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mb-20">
      <BookingTop />
      <div className="px-8 sm:px-12 md:px-16">
        <ServicesForPatients />
        <div className="flex lg:flex-row flex-col gap-10 lg:gap-6 justify-between my-16">
          <BookingCalendar
            date={date}
            setDate={setDate}
            setBookingLength={setBookingLength}
            formatDate={formatDate}
            setFormatDate={setFormatDate}
          />
          <AvailableServices
            date={date}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        </div>
        <AvailableTime
          selectedDay={dayIndex}
          setTimeId={setTimeId}
          bookingLength={bookingLength}
          formatDate={formatDate}
        />
      </div>
      <div className="flex justify-center items-center px-2">
        <button
          type="submit"
          className="w-full max-w-[400px] bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
        >
          Book
        </button>
      </div>
    </form>
  );
}

export default BookingStructure;
