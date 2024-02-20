import React from "react";
import "./Section3.scss";

function Section3() {
  const content = {
    heading:
      "We mandate all team members to re-fill this form whenever there is a change in their work location for more than 4 hours.",
    mainTxt:
      "This includes various types of changes in remote work locations, including temporary (ranging from very short-term to long-term) and permanent changes. These changes can include:",
    listItems: [
      "- Change in the residence address previously provided in the work location declaration form.",
      "- Temporary stays, like staycations or other non-permanent arrangements.",
      "- Utilizing a co-working space not arranged or booked by the company.",
    ],
  };
  return (
    <div className="section" id="section-3">
      <div className="main">
        <div className="heading">
          <h3 className="heading-text">{content.heading}</h3>
        </div>
        <div className="content">
          <div className="container">
            <div className="description-text">
              <p className="main-text">{content.mainTxt}</p>
            </div>
            <ul className="list-text">
              {content.listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
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

export default Section3;
