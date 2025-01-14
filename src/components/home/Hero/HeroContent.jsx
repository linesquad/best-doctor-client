import CustomButton from "../../../ui/CustomButton";
function HeroContent({ mainHeading, subHeading }) {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <h1
        className="font-poppinsBold leading-[40px] z-[1]  text-[32px] lg:text-[80px]  lg:leading-[110px] capitalize
  text-transparent bg-gradient-to-b from-[#07D] to-[#004077] bg-clip-text"
      >
        {mainHeading}
      </h1>
      <h3 className="text-white font-poppinsRegular leading-[25px] text-[16px] lg:text-[36px] lg:leading-[35px] capitalize ">
        {subHeading}
      </h3>
      <CustomButton
        name={"BOOK APPOINTMENT"}
        color={"text-white"}
        bg={"bg-[#004682]"}
        width={"w-fit"}
        paddingX={"px-[14px]"}
        paddingY={"py-[16px]"}
        textSize={"text-[10px]"}
        font={"font-robotoBold"}
        weight={"font-bold"}
        rounded={"rounded-[8px]"}
      />
    </div>
  );
}

export default HeroContent;
