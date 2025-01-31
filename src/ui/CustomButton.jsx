function CustomButton({
  width,
  name,
  color,
  bg,
  paddingX,
  paddingY,
  type,
  marginT,
  disabled,
  loading,
  textSize,
  weight,
  maxW,
  rounded,
  font,
  leading,
  centered,
  animation,
  hover,
  shadow,
  onClick, 
}) {
  return (
    <div className={`${centered}`}>
      <button
        type={type}
        disabled={disabled || loading}
        className={`${color} ${width} ${bg} ${paddingX} ${paddingY} ${marginT} ${maxW} ${weight} ${animation} ${hover} ${shadow}
          transition-all duration-500 ease-in-out ${rounded} cursor-pointer ${font} ${textSize} font-extrabold ${leading}
          ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={onClick} 
      >
        {loading ? <div className="main-loader mx-auto"></div> : name}
      </button>
    </div>
  );
}

export default CustomButton;
