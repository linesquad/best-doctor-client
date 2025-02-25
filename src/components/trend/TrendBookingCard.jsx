function TrendBookingCard({
  subTitle,
  startTime,
  endTime,
  type,
  age,
  presctiption,
}) {
  return (
    <div className="max-w-[366px] w-full flex flex-col gap-3 p-7 border border-[#000] shadow-custom-light bg-[#FAFFFF]">
      <div>
        <h3 className="text-[#101012] text-[18px] font-poppinsSemiBold">
          Patient:
          <br />
          {subTitle}
        </h3>
        <div className="text-[#478AEC] text-[24px] ">
          <h2>
            Time: {startTime} - {endTime}
          </h2>
          <h2>Time: {type}</h2>
        </div>
        <div className="font-heeboRegular text-[24px] text-[#2E18149E]">
          <h2>Age: {age}</h2>
          <h2>Last Prescription: {presctiption}</h2>
        </div>
      </div>
    </div>
  );
}

export default TrendBookingCard;
