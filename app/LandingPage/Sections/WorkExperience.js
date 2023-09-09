"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";

import Title from "@/Components/ResumeSectionTitle";

const WorkExperienceSection = (props) => {
  // react state management
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/API/resume/Work Experience").then(res => {
      const { status, data } = res;
      if (status === 200) {
        setData(data || []);
      }
    })
  }, []);

  const renderCompanyExperience = item => {
    const {
      Company,
      ["Start Month"]: startMonth, ["Start Year"]: startYear,
      ["End Month"]: endMonth, ["End Year"]: endYear,
      Country, City,
      Roles
    } = item;
    return (
      <div key={Company} className="company">
        <h4 className="company">{Company}</h4>
        <CompanyPeriod
          startMonth={startMonth} startYear={startYear}
          endMonth={endMonth} endYear={endYear}
          style={{ position: "relative", top: "-1rem", height: 0 }}
        />
        <Location city={City} country={Country} />
        <div className="company-content">
          {Roles.toReversed().map((item, i) => renderRole(item, i))}
        </div>
      </div>
    )
  };

  const renderRole = (item, index) => {
    const {
      Role, Level,
      ["Start Month"]: startMonth, ["Start Year"]: startYear,
      ["End Month"]: endMonth, ["End Year"]: endYear,
      Responsibilities
    } = item;
    return (
      <div key={index} className="company-role">
        <div className="company-role-title">
          <span className="company-role-role">
            {Level} {Role}
          </span>
          <CompanyPeriod
            startMonth={startMonth} startYear={startYear}
            endMonth={endMonth} endYear={endYear}
          />
        </div>
        {Object.entries(Responsibilities).map(([key, item]) => renderResponsibility(key, item))}
      </div>
    )
  };

  const renderResponsibility = (key, item) => {
    const {
      Experience,
      Actions,
      Skills,
      ["Soft Skills"]: softSkills
    } = item;
    return (
      <div key={key} className="responsibility">
        <div className="responsibility-identity">
          <div className="responsibility-title">
            {key}
          </div>
          <div className="experience">
            {Experience}
          </div>
        </div>
        <div className="responsibility-content">
          {(Actions && Actions.length > 0)
            ? (
              <div className="skill-list actions">
                <u>Actions</u>
                {renderList(undefined, Actions || [])}
              </div>
            )
            : null
          }
          {(Skills && Skills.length > 0)
            ? (
              <div className="skill-list skills">
                <u>Skills</u>
                {renderList(undefined, Skills || [])}
              </div>
            )
            : null
          }
          {(softSkills && softSkills.length > 0)
            ? (
              <div className="skill-list soft-skills">
                <u>Soft Skills</u>
                {renderList(undefined, softSkills || [])}
              </div>
            )
            : null
          }
        </div>
      </div>
    )
  };

  const renderList = (title, items) => {
    if (title !== undefined) {
      return (
        <li key={title}>
          {title}
          <ul>
            {items.map((item, i) => renderListItem(item, i))}
          </ul>
        </li>
      )
    }
    return (
      <ul>
        {items.map((item, i) => renderListItem(item, i))}
      </ul>
    )
  };

  const renderListItem = (item, index) => {
    if (typeof item === "object") {
      return renderList(
        Object.keys(item)[0],
        Object.values(item)[0]
      );
    }
    return (
      <li key={index}>{item}</li>
    )
  };

  return (
    <div className="section work-experience">
      <Title value="Work Experience" />
      {data.map(item => renderCompanyExperience(item))}
    </div>
  )
};

const Location = ({ city, country }) => {
  return (
    <div className="company-location">
      <hr />
      <span>{city}</span>
      <span>•</span>
      <span>{country}</span>
      <hr />
    </div>
  )
};

const CompanyPeriod = ({ startMonth, startYear, endMonth, endYear, style }) => {
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
      className="company-period"
      style={style}
    >
      {start} - {end}
    </div>
  );
};

export default WorkExperienceSection;