import React, {useEffect} from "react";
import "./Section4.scss";

function Section4({section, nextSection, setSection}) {
  const content = {
    heading:
      "Keep us in the Loop Every Quarter",
    mainTxt:
      "Everyone needs to fill out this form every three months, even if there has been no change in remote work location. We'll send you an email reminder.",
    
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (event.target.closest("#section-4")) {
         formHandler(event);
        }
      }
    };
  
    document.addEventListener("keypress", handleKeyPress);
  
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  const formHandler = () => {
    setSection(5);
  };

  useEffect(() => {
    if (section === 4) {
      formHandler();
    }
  }, [nextSection]);
  return (
    <div className="section" id="section-4">
      <div className="form-styling">
        <div className="main">
          <div className="heading">
            <h3 className="heading-text">{content.heading}</h3>
          </div>
          <div className="content">
            <div className="container">
              <div className="description-text">
                <p className="main-text">{content.mainTxt}</p>
              </div>
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

export default Section4;
