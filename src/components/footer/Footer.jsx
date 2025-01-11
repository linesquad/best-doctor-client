import { ContactUs } from "./ContactUs";
import ReusableTitle from "../../ui/ReusableTitle";
import SupportInfo from "./SupportInfo";

function Footer({ title, size, color, fontWeight }) {
  return (
    <footer>
      <div className="px-[4.19rem] py-[3.15rem] bg-lightSkyBlue">
        <div className="flex flex-col gap-[5.86rem]">
          <ReusableTitle
            title={title}
            size={size}
            color={color}
            fontWeight={fontWeight}
          />
          <div className="flex flex-col gap-[4.5rem] md:flex-row md:justify-between md:gap-[8.19rem]">
            <div className="md:w-1/2">
              <ContactUs />
            </div>
            <div className="md:w-1/2">
              <SupportInfo />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
