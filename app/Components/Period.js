import React from "react";

const Period = ({ startMonth, startYear, endMonth, endYear, style }) => {
  const start = (
    <i>{startMonth} {startYear}</i>
  );
  
  let end = <i>Current</i>;
  if (endYear) {
    end = (
      <i>{endMonth} {endYear}</i>
    );
  }

  return (
    <div
      className="period"
      style={style}
    >
      {start} - {end}
    </div>
  );
};

export default Period;