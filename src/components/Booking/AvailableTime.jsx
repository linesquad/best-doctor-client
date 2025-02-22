import { useGetDaysOfWeek } from "../../hooks/useGetDaysOfWeek";
import { useGetPatientsByDate } from "../../hooks/useGetPatientsByDate";
import CustomButton from "../../ui/CustomButton";
import ReusableTitle from "../../ui/ReusableTitle";
import LoadingTime from "./LoadingTime";

function AvailableTime({ selectedDay, setTimeId, formatDate }) {
  const {
    data: daysOfWeek,
    isLoading: weekLoading,
    isError: weekIsError,
  } = useGetDaysOfWeek(selectedDay);

  const {
    data: patientsByDate,
    isLoading: patientsByDateLoading,
    isError: patientsByDateError,
  } = useGetPatientsByDate(formatDate);

  if (weekLoading || patientsByDateLoading)
    return (
      <div>
        <LoadingTime />
      </div>
    );
  if (weekIsError || patientsByDateError)
    return <p>Error: {weekIsError.message}</p>;

  const handleTimeSlotClick = (id) => {
    setTimeId(id);
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    return date
      .toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(/^0/, "");
  };

  const checkIfTimeIsAvailable = (timeSlot) => {
    const isAvailable = patientsByDate.find(
      (time) => time.avaliable_time == timeSlot
    );
    console.log(isAvailable);
    return isAvailable;
  };

  return (
    <div>
      <div className="flex justify-center w-full">
        <ReusableTitle
          title={"Available Time"}
          size={"text-[2rem]"}
          color={"text-black"}
          fontWeight={"font-bold"}
        />
      </div>
      <div className="flex justify-center">
        <div className="flex w-full gap-4 items-center justify-between flex-wrap mt-10 mb-24">
          {daysOfWeek.map((timeSlot) => (
            <CustomButton
              key={timeSlot.id}
              name={`${formatTime(timeSlot.start_time)} - ${formatTime(
                timeSlot.end_time
              )}`}
              type="button"
              width="w-full sm:w-auto"
              height="h-[3.5rem]"
              paddingY="py-3 sm:py-4"
              paddingX="px-6 sm:px-10"
              textSize="text-base sm:text-lg"
              font="font-semibold"
              rounded="rounded-[3.5rem]"
              shadow="shadow-lg"
              disabled={checkIfTimeIsAvailable(timeSlot.id)}
              onClick={() => handleTimeSlotClick(timeSlot.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvailableTime;
