import circleIcon from "/images/Icon.svg";

import SkillsRender from "./SkillsRender"

function SkillsList({ data, handleUpdateModal, handleDelete }) {
  return (
    <SkillsRender
      title={"Skills"}
      data={data}
      renderItem={(item) => (
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-softBlue w-5 h-5 flex justify-center items-center rounded-lg">
                <img src={circleIcon} alt="" />
              </div>
              <p className="font-bold text-xl">{item.skill}</p>
            </div>
          </div>
          <p className="text-gray-600 text-semiTransparent">
            {item.description}
          </p>
        </div>
      )}
      titleStyles={{
        size: "text-[3rem]",
        color: "text-black",
        fontWeight: "font-bold",
      }}
      listStyles={{
        container: "",
        itemContainer: "",
      }}
    />
  );
}

export default SkillsList;
