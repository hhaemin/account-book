import React, { useState } from "react";

const DateFilter = ({ setStartDate, setEndDate }) => {
  const [startDate, updateStartDate] = useState("");
  const [endDate, updateEndDate] = useState("");

  const handleDateChange = () => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <div className="date-filter">
      <input
        type="date"
        value={startDate}
        onChange={(e) => updateStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => updateEndDate(e.target.value)}
      />
      <button onClick={handleDateChange}>필터 적용</button>
    </div>
  );
};

export default DateFilter;
