function TrendStatistick({
  WeekAppointment,
  Appointments,
  TotalPatients,
  Revenue,
}) {
  return (
    <div className="w-full max-w-[530px] flex flex-col p-7 flex-start gap-3 border border-[#101012] rounded-md">
      <div className="text-[#101012] font-poppinsBold  text-[24px] tracking-[-0.72px] md:text-[36px]">
        <h1 className="font-poppinsMedium">Appointments This Week</h1>
        <h3>{WeekAppointment}</h3>
      </div>
      <div className="text-[#101012] font-poppinsBold  text-[24px] tracking-[-0.72px] md:text-[36px]">
        <h1 className="font-poppinsMedium">Appointments</h1>
        <h3>{Appointments}</h3>
      </div>
      <div className="text-[#101012] font-poppinsBold  text-[24px] tracking-[-0.72px] md:text-[36px]">
        <h1 className="font-poppinsMedium">Total Patients</h1>
        <h3>{TotalPatients}</h3>
      </div>
      <div className="text-[#101012] font-poppinsBold  text-[24px] tracking-[-0.72px] md:text-[36px]">
        <h1 className="font-poppinsMedium">Revenue</h1>
        <h3>{Revenue}</h3>
      </div>
    </div>
  );
}

export default TrendStatistick;
