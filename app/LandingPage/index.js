"use client";

import React, { useEffect } from "react";
import axios from "axios";

import PersonalDetails from "./Sections/PersonalDetails";
import WorkExperience from "./Sections/WorkExperience";
import EducationSection from "./Sections/Education";

const Main = props => {
  // react state management
  useEffect(() => {
    axios.get("/API/resume-sections")
      .then(res => {
        const { status, data } = res;
        if (status === 200) {
          console.log(data);
        }
      });
  }, []);

  return (
    <div className="resume">
      <PersonalDetails />
      <WorkExperience />
      <EducationSection />
    </div>
  )
}

export default Main;