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
      procedure: selectedService.name
    };
    console.log(patient);
    
    addPatient(patient);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <BookingTop />
      <div className="px-8 sm:px-12 md:px-16">
        <ServicesForPatients />
        <div className="flex lg:flex-row flex-col gap-10 lg:gap-0 justify-between my-16">
          <BookingCalendar date={date} setDate={setDate} />
          <AvailableServices date={date} selectedService={selectedService} setSelectedService={setSelectedService}/>
        </div >
        <AvailableTime />
      </div>
      <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
        >
          Submit
        </button>
    </form>
  );
}

export default BookingStructure;
