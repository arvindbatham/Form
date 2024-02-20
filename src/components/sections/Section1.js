import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";

function Section1() {
  return (
    <div id="section-1" className="section1 section">
      <div className="main">
        <div className="heading">
          <div className="one">
            <p>1</p>
            <ArrowForwardIcon
              style={{
                fontSize: "16px",
              }}
            />
          </div>
          <div className="two"> Your Name* </div>
        </div>
        <div className="content">
          <input
            type="text"
            id="name"
            name="name"
            className="name"
            placeholder="Your Name"
            required
          />

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
              press <stron>Enter ↵</stron>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
