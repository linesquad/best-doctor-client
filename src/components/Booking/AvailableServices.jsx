import { avaliableService } from "../../lib/avaliableService";
import CustomButton from "../../ui/CustomButton";
import ReusableTitle from "../../ui/ReusableTitle";

function AvailableServices({ date, selectedService, setSelectedService }) {
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
  });

  if (selectedService) {
    var price = selectedService.price;
  }

  return (
    <div>
      <ReusableTitle
        title={"Available Services"}
        size={"text-[2rem]"}
        color={"text-black"}
        fontWeight={"font-bold"}
      />

      <div className="flex flex-wrap gap-4 justify-between mt-6">
        <CustomButton
          name={formattedDate}
          type={"button"}
          color="text-white"
          bg="bg-[#003B73]"
          width="w-full sm:w-auto max-w-[12rem]"
          height="h-[3.5rem]"
          paddingY="py-3 sm:py-4"
          paddingX="px-6 sm:px-10"
          textSize="text-base sm:text-lg"
          font="font-semibold"
          rounded="rounded-full"
          className="flex items-center justify-center shadow-md"
          animation={"transition-transform duration-300 hover:scale-105"}
        />
        <CustomButton
          name={price || "Price"}
          type={"button"}
          color="text-white"
          bg="bg-[#003B73]"
          width="w-full sm:w-auto max-w-[12rem]"
          height="h-[3.5rem]"
          paddingY="py-3 sm:py-4"
          paddingX="px-6 sm:px-16"
          textSize="text-base sm:text-lg"
          font="font-semibold"
          rounded="rounded-full"
          className="flex items-center justify-center shadow-md"
          animation={"transition-transform duration-300 hover:scale-105"}
        />
      </div>

      <div className="flex flex-col gap-4  mt-4 py-4 px-6 bg-[#A3D2FF] rounded-2xl shadow-lg">
        {avaliableService.map((service, index) => (
          <div
            key={index}
            onClick={() => handleServiceClick(service)}
            className="border cursor-pointer bg-[#c2dbfc] flex justify-between items-center gap-4 py-4 rounded-xl transition-transform duration-300 hover:scale-105"
          >
            <div className="py-4 px-6  rounded-[3rem] cursor-pointer transition-transform duration-300 hover:scale-105">
              <span className="text-gray-700 text-[0.9375rem] font-extrabold leading-[135%]">
                {service.name}
              </span>
            </div>
            <div className="py-4 px-6  rounded-[3rem] cursor-pointer transition-transform duration-300 hover:scale-105">
              <span className="text-gray-900 font-bold">{service.price}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-900">Selected Service:</h2>
          <div className="flex gap-6">
            <p className="text-gray-700">{selectedService.name}</p>
            <p className="text-gray-700 font-extrabold">
              {selectedService.price}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AvailableServices;
