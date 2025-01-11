const ErrorDisplay = ({ errorMsg }) => {
  return (
    <div className="text-center">
      <h1 className="font-poppinsSemiBold text-[25px] text-red-500 py-10">
        {errorMsg}
      </h1>
    </div>
  );
};

export default ErrorDisplay;
