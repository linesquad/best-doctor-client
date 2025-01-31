import { useGetAvailableTime } from "../../hooks/useGetAvailableTime";
import { useGetDaysOfWeek } from "../../hooks/useGetDaysOfWeek";
import { useUpdateAvailableTime } from "../../hooks/useUpdateAvailableTime";
import CustomButton from "../../ui/CustomButton";
import ReusableTitle from "../../ui/ReusableTitle";

function AvailableTime() {
  const { data, isError, isLoading, error } = useGetAvailableTime();
  const { mutate: updateTimeSlot } = useUpdateAvailableTime();
  const {data: daysOfWeek, isLoading: weekLoading, isError: weekIsError} = useGetDaysOfWeek()
  console.log(daysOfWeek);
  
  const handleTimeSlotClick = (id) => {
    const timeSlot = data.find(slot => slot.id == id);
    if (timeSlot) {
      timeSlot.is_avaliable = false;
      updateTimeSlot({ id, is_avaliable: false });
    }
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: true ,
    }).replace(/^0/, '');
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  if (weekLoading) return <p>Loading...</p>;
  if (weekIsError) return <p>Error: {error.message}</p>;
  if (!data?.length) return <p>No available time slots</p>;

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
          {daysOfWeek.filter(item => item.week_day == 2).map((timeSlot) => (  
            <CustomButton
              key={timeSlot.id}
              name={`${formatTime(timeSlot.start_time)} - ${formatTime(timeSlot.end_time)}`}
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
              animation={timeSlot.is_avaliable ? "transition-transform duration-300 hover:scale-105" : ""}
              hover={timeSlot.is_avaliable ? "hover:bg-[#004682] hover:text-white" : ""}
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