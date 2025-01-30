import CustomButton from "../../ui/CustomButton";
import ReusableTitle from "../../ui/ReusableTitle";

function AvailableTime() {
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
          <CustomButton
            name="08:30 AM - 12:00 AM"
            type={"button"}
            color="text-black"
            bg="bg-gray-300"
            width="w-full sm:w-auto"
            height="h-[3.5rem]"
            paddingY="py-3 sm:py-4"
            paddingX="px-6 sm:px-10"
            textSize="text-base sm:text-lg"
            font="font-semibold"
            rounded="rounded-[3.5rem]"
            shadow={"shadow-lg"}
            animation="transition-transform duration-300 hover:scale-105"
            hover={"hover:bg-[#004682] hover:text-white"}
          />
          <CustomButton
            name="12:00 AM - 16:00 PM"
            type={"button"}
            color="text-black"
            bg="bg-gray-300"
            width="w-full sm:w-auto"
            height="h-[3.5rem]"
            paddingY="py-3 sm:py-4"
            paddingX="px-6 sm:px-16"
            textSize="text-base sm:text-lg"
            font="font-semibold"
            rounded="rounded-[3.5rem]"
            shadow={"shadow-lg"}
            animation="transition-transform duration-300 hover:scale-105"
            hover={"hover:bg-[#004682] hover:text-white"}
          />
          <CustomButton
            name="16:00 PM - 20:00 PM"
            type={"button"}
            color="text-black"
            bg="bg-gray-300"
            width="w-full sm:w-auto"
            height="h-[3.5rem]"
            paddingY="py-3 sm:py-4"
            paddingX="px-6 sm:px-16"
            textSize="text-base sm:text-lg"
            font="font-semibold"
            rounded="rounded-[3.5rem]"
            shadow={"shadow-lg"}
            animation="transition-transform duration-300 hover:scale-105"
            hover={"hover:bg-[#004682] hover:text-white"}
          />
        </div>
      </div>
    </div>
  );
}

export default AvailableTime;
