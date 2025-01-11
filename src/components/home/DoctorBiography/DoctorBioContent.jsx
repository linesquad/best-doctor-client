function DoctorBioContent({ fullname, status, degree }) {
  return (
    <div className="flex flex-col  gap-[6px]">
      <h1 className="font-poppinsBold text-[#000] text-[20px] md:text-[40px] leading-10">
        {fullname}
      </h1>
      <h3 className="text-oceanBlue text-[12px] md:text-[26px] leading-normal font-poppinsRegular">
        {status}
      </h3>
      <h5 className="text-oceanBlue text-[6px] md:text-[18px] leading-normal font-poppinsRegular">
        {degree}
      </h5>
    </div>
  );
}

export default DoctorBioContent;
