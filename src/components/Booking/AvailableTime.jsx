import { useGetAvailableTime } from "../../hooks/useGetAvailableTime";
import { useGetDaysOfWeek } from "../../hooks/useGetDaysOfWeek";
import { useGetPatients } from "../../hooks/useGetPatients";
import { useUpdateDaysOfWeek } from "../../hooks/useUpdateDateOfWeek";
import CustomButton from "../../ui/CustomButton";
import ReusableTitle from "../../ui/ReusableTitle";
import LoadingTime from "./LoadingTime";

function AvailableTime({ selectedDay,setSelectedTimeSlot }) {
  const { data, isError, isLoading, error } = useGetAvailableTime();
  const { mutate: updateDaysOfWeek } = useUpdateDaysOfWeek();
  const {
    data: daysOfWeek,
    isLoading: weekLoading,
    isError: weekIsError,
  } = useGetDaysOfWeek(selectedDay);
  const {
    // data: getPatients,
    isError: patientsError,
    isLoading: patientsLoading,
  } = useGetPatients();
  
  if (isLoading || weekLoading || patientsLoading) return <div><LoadingTime /></div>;
  if (isError || weekIsError || patientsError) return <p>Error: {error.message}</p>;
  if (!data?.length) return <p>No available time slots</p>;
  // console.log(daysOfWeek);

  const fetchClickedWeekDay = daysOfWeek.filter(
    (item) => item.doctor_availability.day_of_week == selectedDay
  );
  console.log(fetchClickedWeekDay);

  const handleTimeSlotClick = (id) => {
    const timeSlot = fetchClickedWeekDay.find((slot) => slot.id == id);
    if (timeSlot) {
      timeSlot.is_avaliable = false;
      updateDaysOfWeek({ id, is_avaliable: false });
      setSelectedTimeSlot({
        start_time: timeSlot.start_time,
        end_time: timeSlot.end_time,
      });
    }
  };
  
  console.log(data);

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
              color={timeSlot.is_avaliable ? "text-black" : "text-gray-400"}
              bg={timeSlot.is_avaliable ? "bg-gray-300" : "bg-gray-100"}
              width="w-full sm:w-auto"
              height="h-[3.5rem]"
              paddingY="py-3 sm:py-4"
              paddingX="px-6 sm:px-10"
              textSize="text-base sm:text-lg"
              font="font-semibold"
              rounded="rounded-[3.5rem]"
              shadow="shadow-lg"
              animation={
                timeSlot.is_avaliable
                  ? "transition-transform duration-300 hover:scale-105"
                  : ""
              }
              hover={
                timeSlot.is_avaliable
                  ? "hover:bg-[#004682] hover:text-white"
                  : ""
              }
              disabled={!timeSlot.is_avaliable}
              onClick={() => handleTimeSlotClick(timeSlot.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvailableTime;
