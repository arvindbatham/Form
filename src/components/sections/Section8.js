import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import './Section8.scss'

function Section8() {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
    }
  };

  return (
    <div className="section-date section" id="section-8">
      <div className="header">
        <div className="header-content">
          <span>
            4{" "}
            <ArrowForwardIcon
              style={{
                fontSize: "24px",
              }}
            />
          </span>
        </div>
        <h3 className="header-text">Timeline for the mentioned Remote Work Location</h3>
      </div>
      <div className="main">
        <div className="heading">
          <div className="one">
            <p>a.</p>
          </div>
          <div className="two"> Start Date* </div>
        </div>
        <div className="content">
          <div className="container">
          <div className="input-container">
            <div className="input-field day">
              <label htmlFor="day">Day</label>
              <input type="text" id="day" placeholder="DD" name="day" maxlength={2} />
            </div>
            <div className="date-dot">.</div>
            <div className="input-field month">
              <label htmlFor="month">Month</label>
              <input type="text" id="month" placeholder="MM" name="month" maxlength={2} />
            </div>
            <div className="date-dot">.</div>
            <div className="input-field year">
              <label htmlFor="year">Year</label>
              <input type="text" id="year" placeholder="YYYY" name="year" maxlength={4} />
            </div>
          </div>
            <div className="button-box-cls">
              <div className="button-box">
                <button>
                  <span>OK</span>{" "}
                  <CheckIcon
                    style={{
                      fontSize: "28px",
                    }}
                  />
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

export default Section8;
