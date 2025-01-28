
import DoctorLogo from "/images/Rectangle.png"
function BookingStructure() {
  return (
    <div
      style={{
        backgroundImage: `url(${DoctorLogo})`,
      }}
      className={`bg-no-repeat bg-cover bg-center min-h-[390px] 
   flex items-center max-w-full sm:min-h-[557px]  relative`}
    >
      <div className="flex flex-col gap-2 md:gap-4 ml-11 mt-[12rem]">
      <h1
        className="font-poppinsBold leading-[40px] z-10 text-white  text-[32px]  lg:leading-[110px] 
    bg-clip-text"
      >
        Dreams of life remains till the heart beats
      </h1>
      <h3 className="text-white font-poppinsRegular leading-[25px] text-[16px] lg:text-[36px] lg:leading-[35px] opacity-80 ">
      Dreams of life remains till the heart beats
      </h3>
     
    </div>
    </div>
  )
}

export default BookingStructure