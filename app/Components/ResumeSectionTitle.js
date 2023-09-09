import React from "react";

const ResumeSectionTitle = props => {
  const { value, style } = props;
  return (
    <h3
      className="resume-section-title"
      style={style}
    >
      {value}
    </h3>
  )
};

export default ResumeSectionTitle;