"use client";

import React, { useEffect } from "react";
import axios from "axios";

const Main = props => {
  // react state management
  useEffect(() => {
    axios.get("/API/")
      .then(res => {
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      Hello World
    </div>
  )
}

export default Main;