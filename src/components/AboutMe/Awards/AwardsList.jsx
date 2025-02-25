import SkillsRender from "../skill/SkillsRender";

function AwardsList({ data }) {
  return (
    <SkillsRender
      title="Awards"
      data={data}
      renderItem={(item) => (
        <div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <p className="font-bold text-xl">{item.name}</p>
            </div>
          </div>
          <p className="text-gray-600 text-semiTransparent">{item.date}</p>
          <p className="text-gray-800 text-semiTransparent text-[1.15rem] font-bold break-all">
            {item.awardedBy}
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

export default AwardsList;
