
import educationIcon from "/images/education_Icon.svg";
import ReusableTitle from "../../../ui/ReusableTitle";
import vectorIcon from "/images/Vector.svg";

function EducationList({ data,  }) {
  return (
    <>
      <div className="flex justify-start w-full">
        <ReusableTitle
          title={"Education"}
          size={"text-[3rem]"}
          color={"text-black"}
          fontWeight={"font-bold"}
        />
      </div>

      <div className="flex flex-col w-full gap-3 mt-3">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-[16px] border rounded-lg"
            >
              {/* Container for image and content */}
              <div className="flex items-start w-full gap-4">
                {/* Icons on the left */}
                <div className="flex flex-col items-center gap-1">
                  <div className="bg-softBlue w-5 h-5 flex justify-center items-center rounded-lg">
                    <img src={educationIcon} alt="educationIcon" />
                  </div>
                  <img
                    src={vectorIcon}
                    className="max-h-[50px]"
                    alt="vector icon"
                  />
                </div>

                {/* Content on the right */}
                <div className="flex flex-col  text-[9px] md:text-[15px] lg:text-[20px]">
                  <h2 className="font-poppinsExtraBold leading-[135%] ">
                    {item.uni}
                  </h2>
                  <div className="flex gap-4">
                    <h3 className="font-poppinsExtraBold">Timeline</h3>
                    <span className="font-heeboRegular opacity-50">{`${item.from.slice(
                      0,
                      4
                    )} - ${item.to ? item.to.slice(0, 4) : "Present"}`}</span>
                  </div>
                  <h3 className="font-poppinsExtraBold ">{item.degree}</h3>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No education records found.</p>
        )}
      </div>
    </>
  );
}

export default EducationList;
