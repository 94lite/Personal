import React from "react";

const ResumeSectionTitle = props => {
  const { value } = props;
  return (
    <h3 className="resume-section-title">
      {value}
    </h3>
  )
};

export default ResumeSectionTitle;