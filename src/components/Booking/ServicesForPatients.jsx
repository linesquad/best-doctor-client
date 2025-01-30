import ReusableTitle from "../../ui/ReusableTitle";
import PersonalForm from "./PersonalForm";

function ServicesForPatients() {
  return (
    <div className="mt-[10.19rem]">
      <ReusableTitle
        title={"Services For My Patients"}
        size={"text-[3rem]"}
        color={"text-black"}
        fontWeight={"font-bold"}
      />
      <PersonalForm  />
    </div>
  );
}

export default ServicesForPatients;
