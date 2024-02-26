import React, {useEffect} from "react";
import "./Section5.scss";

function Section5({section, nextSection, setSection}) {
  const content = {
    heading:
      "Remote Work Location Security and Reporting Commitments:",
    listItems: [
      "Physical Security: I will ensure that my remote work environment is secure and free from unauthorized access.",
      "Digital Security: I will implement appropriate security measures to protect company data, including using secure networks.",
      "Report Changes: I will promptly notify HR if my remote work location changes. This includes temporary (very short-term, short-term, or long-term) or permanent changes in my work-from-home setup.",
    ],
  };

  const formHandler = () => {
    setSection(6);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (event.target.closest("#section-5")) {
          formHandler(event);
        }
      }
    };
  
    document.addEventListener("keypress", handleKeyPress);
  
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (section === 5) {
      formHandler();
    }
  }, [nextSection]);
  return (
    <div className="section" id="section-5">
      <div className="form-styling">
        <div className="main">
          <div className="heading">
            <h3 className="heading-text">{content.heading}</h3>
          </div>
          <div className="content">
            <div className="container">
              <ul className="list-text">
                {content.listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="button-box-cls">
                <div className="button-box">
                  <button onClick={formHandler}>
                    <span>Continue</span>{" "}
                  </button>
                </div>
                <span>
                  press <strong>Enter ↵</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
