"use client";

import React, { useEffect } from "react";
import axios from "axios";

import WorkExperience from "./Sections/WorkExperience";

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
      <WorkExperience />
    </div>
  )
}

export default Main;