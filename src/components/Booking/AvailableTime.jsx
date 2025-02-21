import { useGetAvailableTime } from "../../hooks/useGetAvailableTime";
import { useGetDaysOfWeek } from "../../hooks/useGetDaysOfWeek";
import { useGetPatients } from "../../hooks/useGetPatients";
// import { useGetPatientsByDate } from "../../hooks/useGetPatientsByDate";
// import { useUpdateDaysOfWeek } from "../../hooks/useUpdateDateOfWeek";
import CustomButton from "../../ui/CustomButton";
import ReusableTitle from "../../ui/ReusableTitle";
import LoadingTime from "./LoadingTime";

function AvailableTime({ selectedDay,setTimeId,bookingLength }) {
  
  const { data, isError, isLoading, error } = useGetAvailableTime();
  // const { mutate: updateDaysOfWeek } = useUpdateDaysOfWeek();
  const {
    data: daysOfWeek,
    isLoading: weekLoading,
    isError: weekIsError,
  } = useGetDaysOfWeek(selectedDay);
  const {
    data: getPatients,
    isError: patientsError,
    isLoading: patientsLoading,
  } = useGetPatients();
  console.log(getPatients?.map(item => item.avaliable_time));
  
  
  if (isLoading || weekLoading || patientsLoading) return <div><LoadingTime /></div>;
  if (isError || weekIsError || patientsError) return <p>Error: {error.message}</p>;
  if (!data?.length) return <p>No available time slots</p>;

  
  const fetchClickedWeekDay = daysOfWeek.filter(
    (item) => item.doctor_availability.id == selectedDay
  );
  
  let weekDayIds = fetchClickedWeekDay?.map(item => item.id); // Array of IDs
  let bookingIds = bookingLength?.map(item => item.id); // Array of booking IDs
  
  // Find common IDs between weekDayIds and bookingIds
  let findWeekId = weekDayIds?.filter(id => bookingIds?.includes(id));
  
  console.log(bookingLength);
  console.log(findWeekId);
  
  

  const handleTimeSlotClick = (id) => {
    const timeSlot = fetchClickedWeekDay.find((slot) => slot.id == id);
    setTimeId(id)
    console.log(timeSlot);
    
    // if (timeSlot) {
    //   timeSlot.is_avaliable = false;
    //   updateDaysOfWeek({ id, is_avaliable: false });
    //   // setSelectedTimeSlot({
    //   //   start_time: timeSlot.start_time,
    //   //   end_time: timeSlot.end_time,
    //   // });
    // }
  };
  
  // console.log(data);

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
          {fetchClickedWeekDay.map((timeSlot) => (
            <CustomButton
              key={timeSlot.id}
              name={`${formatTime(timeSlot.start_time)} - ${formatTime(
                timeSlot.end_time
              )}`}
              type="button"
              color={bookingLength > 0 ? "text-black" : "text-gray-400"}
              bg={bookingLength > 0 ? "bg-gray-300" : "bg-gray-100"}
              width="w-full sm:w-auto"
              height="h-[3.5rem]"
              paddingY="py-3 sm:py-4"
              paddingX="px-6 sm:px-10"
              textSize="text-base sm:text-lg"
              font="font-semibold"
              rounded="rounded-[3.5rem]"
              shadow="shadow-lg"
              animation={
                bookingLength > 0
                  ? "transition-transform duration-300 hover:scale-105"
                  : ""
              }
              hover={
                bookingLength > 0
                  ? "hover:bg-[#004682] hover:text-white"
                  : ""
              }
              disabled={bookingLength > 0}
              onClick={() => handleTimeSlotClick(timeSlot.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvailableTime;
