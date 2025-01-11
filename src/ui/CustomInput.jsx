function CustomInput({
  type = "text",
  placeholder,
  width,
  color,
  bg,
  paddingX,
  paddingY,
  val,
  onChange,
  required,
}) {
  return (
    <div className="text-center">
      <input
        type={type}
        placeholder={placeholder}
        className={`${width} ${color} ${bg} ${paddingX} ${paddingY} w-full 
            outline-none border-none rounded-2xl font-Nunnito text-2xl leading-[32.4px]`}
        value={val}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default CustomInput;
