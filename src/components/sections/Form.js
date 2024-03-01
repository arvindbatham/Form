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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const today = new Date();
const dateString = today.toISOString().split('T')[0];

const initialValues = {
  username: "",
  countryCode: "",
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
  todayDate: dateString,
};

function Form({ section, setSection, mobileScreen }) {
  const [formData, setFormData] = useState(initialValues);
  const [nextSection, setNextSection] = useState("");
  const [scrollup, setScrollup] = useState(false);

  console.log('Form Data: ', formData);
  

  const sectionChangeHandler = () => {
    const commonProps = {
      section,
      nextSection,
      setFormData,
      setSection,
      scrollup,
      setScrollup,
      mobileScreen,
    };

    switch (section) {
      case 1:
        return <Section1 {...commonProps} />;
      case 2:
        return <Section2 {...commonProps} />;
      case 3:
        return <Section3 {...commonProps} />;
      case 4:
        return <Section4 {...commonProps} />;
      case 5:
        return <Section5 {...commonProps} />;
      case 6:
        return <Section6 {...commonProps} />;
      case 7:
        return <Section7 {...commonProps} />;
      case 8:
        return <Section8 {...commonProps} />;
      case 9:
        return <Section9 {...commonProps} />;
      case 10:
        return <Section10 {...commonProps} />;
      default:
        return <Section1 {...commonProps} />;
    }
  };

  // const scrollHandler = (e) => {
  //   const delta = e.deltaY;
  //   if (delta < 0 && section > 1) {
  //     setTimeout(() => {
  //       if( section !== 1) {
  //       setSection((prevState) => prevState - 1);
  //       }
  //     }, 500);

  //   }
  // };

  return (
    <>
      <div id="form">
        {section > 0 && section <= 11 && (
          <div
            style={{
              width:
                section === 2
                  ? "16.67%"
                  : section === 3 ||
                    section === 4 ||
                    section === 5 ||
                    section === 6
                  ? "33.34%"
                  : section === 7 || section === 8
                  ? "50.01%"
                  : section === 9
                  ? "66.68%"
                  : section === 10
                  ? "83.34%"
                  : section === 11
                  ? "100%"
                  : "0%",
            }}
            className="progress-bar Header"
          ></div>
        )}
        {sectionChangeHandler()}

        {section > 0 && section <= 10 && !mobileScreen && (
          <div className="Footer">
            <div className="footer-button-container">
              <button
                disabled={section === 1}
                className="footer-icon border-right-icon"
                onClick={() => {
                  setScrollup(true);
                  setSection((prevState) => prevState - 1);
                }}
              >
                <ExpandLessIcon className="up-icon" />
              </button>

              <button
                disabled={section === 10}
                className="footer-icon border-left-icon"
                onClick={() => {
                  setScrollup(false);
                  if (
                    section === 1 ||
                    section === 2 ||
                    section === 6 ||
                    section === 8 ||
                    section === 9 ||
                    section === 10
                  ) {
                    setNextSection((prevState) => prevState + 1);
                  } else {
                    setSection((prevState) => prevState + 1);
                  }
                }}
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
        {mobileScreen && section > 1 && (
          <button
            className="mobile-footer-icon"
            onClick={() => {
              setScrollup(true);
              setSection((prevState) => prevState - 1);
            }}
          >
            <ArrowBackIcon className="left-icon" />
          </button>
        )}

        {mobileScreen && (
          <div className="Footer">
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
