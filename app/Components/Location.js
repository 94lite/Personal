import React from "react";

const Location = ({ city, country }) => {
  return (
    <div className="location">
      <hr />
      <span>{city}</span>
      <span>•</span>
      <span>{country}</span>
      <hr />
    </div>
  )
};

export default Location;