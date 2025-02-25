

import ReusableTitle from "../../../ui/ReusableTitle";

import vectorIcon from "/images/Vector.svg";

function ExperienceList({ data, handleUpdateModal, handleDelete, circleIcon }) {
  return (
    <>
      <div className="flex justify-start w-full">
        <ReusableTitle
          title={"Experience"}
          size={"text-[3rem]"}
          color={"text-black"}
          fontWeight={"font-bold"}
        />
      </div>

      <div className="flex flex-col w-full gap-3 mt-3">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-[16px] border rounded-lg"
            >
              {/* Container for image and content */}
              <div className="flex items-start w-full gap-4">
                <div className="flex flex-col items-center">
                  {/* Circle Icon */}
                  <div className="bg-softBlue w-5 h-5 flex justify-center items-center rounded-lg">
                    <img src={circleIcon} alt="" />
                  </div>

                  {/* Vector Icon - Positioned below circleIcon */}
                  <img
                    src={vectorIcon}
                    className="max-h-[50px] mt-2"
                    alt="vector"
                  />
                </div>

                {/* Content on the right */}
                <div className="flex flex-col justify-center text-[9px] md:text-[15px] lg:text-[20px]">
                  <h2 className="font-poppinsExtraBold leading-[135%] uppercase">
                    {item.place}
                  </h2>
                  <div className="flex gap-4">
                    <h3 className="font-poppinsExtraBold uppercase">
                      {item.department}
                    </h3>
                    <span className="font-heeboRegular opacity-50">
                      {`${item.from.slice(0, 4)} - ${
                        item.to ? item.to.slice(0, 4) : "Present"
                      }`}
                    </span>
                  </div>
                  <h4 className="font-heeboRegular opacity-50">
                    {item.position}
                  </h4>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ExperienceList;
