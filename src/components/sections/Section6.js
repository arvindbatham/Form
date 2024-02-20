import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";

function Section6() {
  return (
    <div className="section6 section" id="section-6">
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
          <div className="two">Remote Work Location Address*</div>
        </div>
        <div className="content">
          <div className="input-boxes">
            <div className="text">
              When you are not working from office premises, what is your remote
              work address?
            </div>
            <div className="one box">
              <label htmlFor="address">Address*</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div className="two box">
              <label htmlFor="secondAddress">Address line 2*</label>
              <input
                type="text"
                id="secondAddress"
                name="secondAddress"
                required
              />
            </div>{" "}
            <div className="three box">
              <label htmlFor="city">City/Town*</label>
              <input type="text" id="city" name="city" required />
            </div>{" "}
            <div className="four box">
              <label htmlFor="state">State/Region/Province *</label>
              <input type="text" id="state" name="state" required />
            </div>{" "}
            <div className="five box">
              <label htmlFor="zip">Zip/Post code*</label>
              <input
                type="number"
                maxLength="6"
                minLength="6"
                id="zip"
                name="zip"
                required
              />
            </div>{" "}
            <div className="six box">
              <label htmlFor="country">Country*</label>
              <input type="text" id="country" name="country" required />
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
              press <stron>Enter ↵</stron>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
