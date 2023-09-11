"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsLinkedin, BsInstagram } from "react-icons/bs";

const Connect = props => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    axios.get("/API/connect")
      .then(res => setLinks(res.data))
      .catch(err => console.error(err));
  }, []);

  const getLink = (platform, href) => {
    return (
      <a
        key={href}
        href={href}
        target="_blank"
      >
        {getIcon(platform)}
        {platform}
      </a>
    )
  }

  return (
    <div className="connect-page">
      <div className="connect-page-content">
        {links.map(({ platform, href }) => getLink(platform, href))}
      </div>
    </div>
  )
}

const getIcon = platform => {
  switch (platform) {
    case "LinkedIn":
      return <BsLinkedin />
    case "Instagram":
      return <BsInstagram />
    default:
      return null;
  }
}

export default Connect;