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
  const formRef = useRef(null)

   const { mutate: addPatient } = useAddPatient();
   const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    return `${day}-${month}`; 
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const patient = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      user_phone: formData.get("user_phone"),
      age: formData.get("age"),
      condition: formData.get("condition"),
      date: date,
      price: selectedService.price,
      procedure: selectedService.name,
      booked_day: formatDate(date),
    };
    console.log(patient);
    
    addPatient(patient);
    formRef.current.reset();
    setDate(new Date());
    setSelectedService(null);
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <BookingTop />
      <div className="px-8 sm:px-12 md:px-16">
        <ServicesForPatients />
        <div className="flex lg:flex-row flex-col gap-10 lg:gap-6 justify-between my-16">
          <BookingCalendar date={date} setDate={setDate} />
          <AvailableServices date={date} selectedService={selectedService} setSelectedService={setSelectedService}/>
        </div >
        <AvailableTime selectedDay={date.getDay()} />
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
