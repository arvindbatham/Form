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
  const [nextSection, setNextSection] = useState(0);
  console.log("Form Data: ", formData);

//   const sectionChangeHandler = () => {
//     switch (section) {
//         case 0:
//             return  <Section1
//             section={section}
//             nextSection={nextSection}
//             setFormData={setFormData}
//             setSection={setSection}
//           />
//         case 1:
//             return <Section2 />
//         case 2:
//             return <Section3 />
//         case 3:
//             return <Section4 />
//         case 4:
//             return <Section5 />
//       case 5: return <Section6 />
//     }
// }

 

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
          section={section}
          nextSection={nextSection}
          setFormData={setFormData}
          setSection={setSection}
        />
        <Section2
          section={section}
          nextSection={nextSection}
          setFormData={setFormData}
          setSection={setSection}
        />
        <Section3
          section={section}
          nextSection={nextSection}
          setSection={setSection}
        />
        <Section4
          section={section}
          nextSection={nextSection}
          setSection={setSection}
        />
        <Section5
          section={section}
          nextSection={nextSection}
          setSection={setSection}
        />
        <Section6
          section={section}
          nextSection={nextSection}
          setFormData={setFormData}
          setSection={setSection}
        />
        <Section7
          section={section}
          nextSection={nextSection}
          setSection={setSection}
        />
        <Section8
          section={section}
          nextSection={nextSection}
          setFormData={setFormData}
          setSection={setSection}
        />
        <Section9
          section={section}
          nextSection={nextSection}
          setFormData={setFormData}
          setSection={setSection}
        />
        <Section10
          section={section}
          nextSection={nextSection}
          setFormData={setFormData}
          setSection={setSection}
        />
        <Section11
          nextSection={nextSection}
          setSection={setSection}
          setFormData={setFormData}
        />

        {section > 0 && section <= 11 && (
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
                onClick={() => setNextSection((prevState) => prevState + 1)}
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
