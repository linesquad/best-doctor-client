import ReusableTitle from "../../ui/ReusableTitle";
import PersonalForm from "./PersonalForm";

function ServicesForPatients() {
  return (
    <div className="mt-[7.19rem] px-8 sm:px-12 md:px-16">
      <ReusableTitle
        title={"Services For My Patients"}
        size={"text-[3rem]"}
        color={"text-black"}
        fontWeight={"font-bold"}
      />

      <PersonalForm />
    </div>
  );
}

export default ServicesForPatients;
