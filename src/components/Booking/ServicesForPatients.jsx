import ReusableTitle from "../../ui/ReusableTitle";
import PersonalForm from "./PersonalForm";

function ServicesForPatients({formErrors}) {
  return (
    <div className="mt-[10.19rem]">
      <ReusableTitle
        title={"Services For My Patients"}
        size={"text-[3rem]"}
        color={"text-black"}
        fontWeight={"font-bold"}
      />
      <PersonalForm formErrors={formErrors}/>
    </div>
  );
}

export default ServicesForPatients;
