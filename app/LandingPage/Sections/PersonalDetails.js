import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsPhoneFill, BsEnvelopeOpenFill, BsLinkedin } from "react-icons/bs";

import Title from "@/Components/ResumeSectionTitle";

const PersonalDetailsSection = props => {
  // react state management
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("/API/resume/Personal Details").then(res => {
      const { status, data } = res;
      if (status === 200) {
        setData(data || {});
      }
    })
  }, []);

  const {
    Name,
    City, Country,
    ["Contact Phone"]: contactPhone,
    Email,
    LinkedIn
  } = data;

  return (
    <div className="section personal-details">
      <div className="personal-details-left">
        <Title
          value={Name
            ? (Name || "").toUpperCase()
            : <i>Name</i>
          }
          style={{
            marginBottom: 0,
            textAlign: "left"
          }}
        />
        <Location city={City} country={Country} />
      </div>
      <Contacts
        phone={contactPhone}
        email={Email}
        lIn={LinkedIn}
      />
    </div>
  )
};

const Location = ({ city, country }) => {
  return (
    <div className="personal-location">
      <span>{city || <i>city</i>}</span>
      <span>•</span>
      <span>{country || <i>country</i>}</span>
    </div>
  )
};

const Contacts = ({ phone, email, lIn }) => {
  return (
    <div className="contact">
      <span>
        <BsPhoneFill />
        {phone || <i>phone</i>}
      </span>
      <span>
        <BsEnvelopeOpenFill />
        {email || <i>email</i>}
      </span>
      <a href={`https://${lIn}`}>
        <BsLinkedin />
        {lIn || <i>LinkedIn</i>}
      </a>
    </div>
  )
};

export default PersonalDetailsSection;