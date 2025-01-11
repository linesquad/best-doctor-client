function CarouselContent({ img, reading, title, content }) {
  return (
    <div className="border rounded-md border-[#0000001F] p-3">
      <img
        src={img}
        alt="image"
        className="h-[337px] object-cover object-center bg-no-repeat w-full max-w-[427px]"
      />
      <h3 className="font-heeboBold text-[15px] leading-[135%] text-[#00000080] pt-4">
        Reading time {reading} minutes
      </h3>
      <h1 className="font-poppinsSemiBold text-[20px] text-[#000]">{title}</h1>
      <p className="font-heeboRegular text-[12px] leading-[15px]">
        {content.length > 50 ? `${content.slice(0, 50)}...` : content}
      </p>
    </div>
  );
}

export default CarouselContent;
