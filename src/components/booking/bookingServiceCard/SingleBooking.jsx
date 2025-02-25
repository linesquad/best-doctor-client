import { useParams } from "react-router-dom";

import SingleBookingSkeleton from "./SingleBookingSkeleton";
import { useGetBookingById } from "../../../hooks/useGetBookingById";
import ErrorDisplay from "../../ErrorDisplay";
function SingleBooking() {
  const { id } = useParams();
  const {
    data: bookingData,
    isLoading,
    isError,
    error,
  } = useGetBookingById(id);

  if (isLoading) return <SingleBookingSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;

  const {
    user_name,
    user_email,
    user_phone,
    age,
    condition,
    prescription,
    service_id,
    date,
    start_time,
    end_time,
    status,
  } = bookingData.data;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Booking Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* User Information */}
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            User Information
          </h2>
          <p className="mb-2">
            <span className="font-medium text-gray-600">Name:</span> {user_name}
          </p>
          <p className="mb-2">
            <span className="font-medium text-gray-600">Email:</span>{" "}
            {user_email}
          </p>
          <p className="mb-2">
            <span className="font-medium text-gray-600">Phone:</span>{" "}
            {user_phone}
          </p>
          <p className="mb-2">
            <span className="font-medium text-gray-600">Age:</span> {age}
          </p>
        </div>

        {/* Booking Information */}
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Booking Information
          </h2>
          <p className="mb-2">
            <span className="font-medium text-gray-600">Condition:</span>{" "}
            {condition}
          </p>
          <p className="mb-2">
            <span className="font-medium text-gray-600">Prescription:</span>{" "}
            {prescription}
          </p>
          <p className="mb-2">
            <span className="font-medium text-gray-600">Service ID:</span>{" "}
            {service_id}
          </p>
          <p className="mb-2">
            <span className="font-medium text-gray-600">Date:</span> {date}
          </p>
          <p className="mb-2">
            <span className="font-medium text-gray-600">Start Time:</span>{" "}
            {start_time}
          </p>
          <p className="mb-2">
            <span className="font-medium text-gray-600">End Time:</span>{" "}
            {end_time}
          </p>
          <p className="mb-2">
            <span className="font-medium text-gray-600">Status:</span>{" "}
            <span
              className={`${
                status === "Pending"
                  ? "text-yellow-500"
                  : status === "Completed"
                  ? "text-green-500"
                  : "text-red-500"
              } font-medium`}
            >
              {status}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleBooking;
