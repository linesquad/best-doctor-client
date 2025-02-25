import ReusableTitle from "../../../ui/ReusableTitle";

function SkillsRender({
  title,
  data,
  renderItem,
  titleStyles = {},
  listStyles = {},
}) {
  return (
    <div className={`flex flex-col gap-4 mt-8 ${listStyles.container || ""}`}>
      <ReusableTitle
        title={title}
        size={titleStyles.size || "text-[3rem]"}
        color={titleStyles.color || "text-black"}
        fontWeight={titleStyles.fontWeight || "font-bold"}
      />
      {data.map((item) => (
        <div
          key={item.id}
          className={`border p-4 rounded-lg flex items-center w-full justify-between ${
            listStyles.itemContainer || ""
          }`}
        >
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}

export default SkillsRender;
