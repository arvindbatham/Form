import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const content = `If permanent, write from <current date> to <31-12-9999>
If temporary, write start and end dates.`;

function Section7() {
  return (
    <div className="section7 section" id="section-7">
      <div className="main">
        <div className="heading">
          <div className="one">
            <p>3</p>
            <ArrowForwardIcon
              style={{
                fontSize: "16px",
              }}
            />
          </div>
          <div className="two">
            Timeline for the mentioned Remote Work Location*
          </div>
        </div>
        <div className="content">
          <div className="text">{content}</div>{" "}
          <div className="button-box-cls">
            <div className="button-box">
              <button>
                <span>Continue</span>{" "}
                {/* <CheckIcon
                  style={{
                    fontSize: "28px",
                  }}
                /> */}
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

export default Section7;
