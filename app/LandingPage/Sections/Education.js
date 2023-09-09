import React, { useState, useEffect } from "react";
import axios from "axios";

import Title from "@/Components/ResumeSectionTitle";
import Period from "@/Components/Period";
import Location from "@/Components/Location";

const EducationSection = props => {
  // react state management
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/API/resume/Education").then(res => {
      const { status, data } = res;
      if (status === 200) {
        setData(data || []);
      }
    })
  }, []);

  const renderQualification = (item, index) => {
    const {
      Institute,
      City, Country,
      ["Start Month"]: startMonth, ["Start Year"]: startYear,
      ["End Month"]: endMonth, ["End Year"]: endYear,
      Qualification, Specialization,
      GPA
    } = item;
    return (
      <div key={index} className="qualification">
        <h4>{Qualification}</h4>
        <Period
          startMonth={startMonth} startYear={startYear}
          endMonth={endMonth} endYear={endYear}
          style={{ position: "relative", top: "-1rem", height: 0 }}
        />
        <Location city={City} country={Country} />
        <div className="qualification-content">
          <div className="qualification-specialization">
            In {Specialization}
          </div>
          <div className="qualification-institute">
            From {Institute}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="section education">
      <Title value="Education" />
      {data.toReversed().map((item, i) => renderQualification(item, i))}
    </div>
  )
};

export default EducationSection;