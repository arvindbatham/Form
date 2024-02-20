import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Section11.scss";

function Section11() {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
    }
  };

  return (
    <div className="section-date section" id="section-11">
      <div className="main">
        <div className="heading">
          <div className="one">
            <p>6</p>
            <ArrowForwardIcon
              style={{
                fontSize: "24px",
              }}
            />
          </div>
          <div className="two"> Date* </div>
        </div>
        <p className="date-desc">(Today's Date)</p>
        <div className="content">
          <div className="container">
            <div className="input-container">
              <div className="input-field day">
                <label htmlFor="day">Day</label>
                <input
                  type="text"
                  id="day"
                  placeholder="DD"
                  name="day"
                  maxlength={2}
                />
              </div>
              <div className="date-dot">.</div>
              <div className="input-field month">
                <label htmlFor="month">Month</label>
                <input
                  type="text"
                  id="month"
                  placeholder="MM"
                  name="month"
                  maxlength={2}
                />
              </div>
              <div className="date-dot">.</div>
              <div className="input-field year">
                <label htmlFor="year">Year</label>
                <input
                  type="text"
                  id="year"
                  placeholder="YYYY"
                  name="year"
                  maxlength={4}
                />
              </div>
            </div>
            <div className="button-box-cls">
              <div className="button-box">
                <button>
                  <span>Submit</span>
                </button>
              </div>
              <span>
                press <strong>Ctrl + Enter ↵</strong>
              </span>
            </div>
            <p className="password-txt">
                Never submit passwords! -{" "}
                <a href="https://www.typeform.com/help/a/report-abuse-360034113252/">
                  Report abuse
                </a>{" "}
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section11;
