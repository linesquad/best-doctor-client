import BookingStructure from "../components/Booking/BookingStructure";
import { Helmet } from "react-helmet-async";

function Booking() {
  return (
    <>
      <Helmet>
        <title>Booking</title>
        <meta name="description" content="This is the Booking of my website." />
        <link rel="canonical" href="https://www.mywebsite.com/booking" />
      </Helmet>
      <div>
        <BookingStructure />
      </div>
    </>
  );
}

export default Booking;
