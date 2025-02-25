function TrendCardsFIlter({ selectedDate, setSelectedDate, data }) {
  return (
    <select
      id="date-filter"
      className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#478AEC] text-gray-700"
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
    >
      <option value="">All Dates</option>
      {Array.from(new Set(data.map((item) => item.date))).map((date) => (
        <option key={date} value={date}>
          {date}
        </option>
      ))}
    </select>
  );
}

export default TrendCardsFIlter;
