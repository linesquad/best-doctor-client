function ReusableTitle({ title, size, color, fontWeight }) {
  return <h2 className={`${size} ${color} ${fontWeight}`}>{title}</h2>;
}

export default ReusableTitle;
