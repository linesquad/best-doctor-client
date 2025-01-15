import DoctorLogo from "/images/doctorLogo.jpg";
import menuLogo from "/images/dots.png";
import { useNavigate } from "react-router-dom";
function ServiceCardItem({ service }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/service/${service.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col items-center rounded-lg p-4 shadow-custom-light  hover:scale-110 transition-transform duration-500">
      <img
        src={service.image || DoctorLogo}
        alt="Service"
        className="w-full object-cover object-center h-[14rem] rounded-lg mb-2 cursor-pointer"
        onClick={handleCardClick}
      />
      <p className="text-xl font-medium text-lightBlue cursor-pointer overflow-hidden text-ellipsis max-w-full">
        {service.title}
      </p>
    </div>
  );
}

export default ServiceCardItem;
