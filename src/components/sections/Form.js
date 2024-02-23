import React, { useState } from "react";
import Section2 from "./Section2";
import Section1 from "./Section1";
import Section4 from "./Section4";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section3 from "./Section3";
import Section5 from "./Section5";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const initialValues = {
  username: "",
  phoneNumber: "",
  address: {
    address: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  },
  startDate: "",
  endDate: "",
  confirmCheck: "",
  todayDate: "",
};

function Form({ section, setSection }) {
  const [formData, setFormData] = useState(initialValues);
  console.log("Form Data: ", formData);

  return (
    <>
      <div id="form">
        {section > 0 && section <= 11 && (
          <div
            style={{
              width:
                section === 2
                  ? "14.28%"
                  : section === 3 ||
                    section === 4 ||
                    section === 5 ||
                    section === 6
                  ? "28.56%"
                  : section === 7 || section === 8
                  ? "42.84%"
                  : section === 9
                  ? "57.12%"
                  : section === 10
                  ? "71.4%"
                  : section === 11
                  ? "85.68%"
                  : "0%",
            }}
            className="progress-bar Header"
          ></div>
        )}
        <Section1
          setFormData={setFormData}
          onSetSection1={() => {
            setSection(2);
          }}
        />
        <Section2
          setFormData={setFormData}
          onSetSection2={() => {
            setSection(3);
          }}
        />
        <Section3
          onSetSection3={() => {
            setSection(4);
          }}
        />
        <Section4
          onSetSection4={() => {
            setSection(5);
          }}
        />
        <Section5
          onSetSection5={() => {
            setSection(6);
          }}
        />
        <Section6
          setFormData={setFormData}
          onSetSection6={() => {
            setSection(7);
          }}
        />
        <Section7
          onSetSection7={() => {
            setSection(8);
          }}
        />
        <Section8
          setFormData={setFormData}
          onSetSection8={() => {
            setSection(9);
          }}
        />
        <Section9
          setFormData={setFormData}
          onSetSection9={() => {
            setSection(10);
          }}
        />
        <Section10
          setFormData={setFormData}
          onSetSection10={() => {
            setSection(11);
          }}
        />
        <Section11
          onSetSection11={() => {
            setSection(12);
          }}
          setFormData={setFormData}
        />

        {section > 0 && section < 11 && (
          <div className="Footer">
            <div className="footer-button-container">
              <button
                disabled={section === 1}
                className="footer-icon border-right-icon"
                onClick={() => setSection((prevState) => prevState - 1)}
              >
                <ExpandLessIcon className="up-icon" />
              </button>

              <button
                disabled={section === 11}
                className="footer-icon border-left-icon"
              >
                <ExpandMoreIcon className="down-icon" />
              </button>
            </div>
            <a href="#" className="brand-container">
              <p className="brand-txt">
                Powered by <span>AAYS</span>
              </p>
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Form;
