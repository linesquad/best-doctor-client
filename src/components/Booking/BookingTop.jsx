import DoctorLogo from "/images/Rectangle.png";
import { buttonData } from "../../lib/buttonData";

function BookingTop() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${DoctorLogo})`,
        }}
        className={`bg-no-repeat bg-cover bg-center min-h-[390px] 
   flex items-center max-w-full sm:min-h-[557px] relative`}
      >
        <div className="flex flex-col gap-2  ml-11 mt-[12rem]">
          <h1
            className="font-poppinsBold leading-[40px] z-10 text-white text-[32px] 
               bg-clip-text"
          >
            Dreams of life remains till the heart beats
          </h1>
          <h3 className="text-white font-poppinsRegular leading-[25px] text-[16px]  lg:leading-[35px] opacity-80 ">
            Dreams of life remains till the heart beats
          </h3>
        </div>

        <div className="absolute -bottom-14 md:-bottom-16 lg:-bottom-20 left-0 right-0">
          <div className="flex justify-between gap-4 sm:gap-6 md:gap-8 px-8 sm:px-12 md:px-16">
            {buttonData.map((button) => {
              const Icon = button.icon;
              return (
                <div
                  key={button.id}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <div className="p-1">
                    <button
                      className="bg-white rounded-full flex justify-center items-center 
                    p-3 sm:p-4 md:p-5 lg:p-8 transition-all duration-300
                    group-hover:bg-blue-500"
                    >
                      <Icon
                        className="text-xl sm:text-2xl md:text-3xl lg:text-[50px] 
                    text-blue-500 transition-all duration-300 group-hover:text-white"
                      />
                    </button>
                  </div>
                  <span className="text-lightBlue mt-2 text-xs sm:text-sm font-semibold">
                    {button.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingTop;
