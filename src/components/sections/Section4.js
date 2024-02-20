import React from "react";
import "./Section4.scss";

function Section4() {
  const content = {
    heading:
      "Keep us in the Loop Every Quarter",
    mainTxt:
      "Everyone needs to fill out this form every three months, even if there has been no change in remote work location. We'll send you an email reminder.",
    
  };
  return (
    <div className="section" id="section-4">
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
                <button>
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
  );
}

export default Section4;
