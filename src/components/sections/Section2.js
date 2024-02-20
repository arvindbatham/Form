import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";

function Section2() {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
    }
  };

  return (
    <div className="section2" id="section2">
      <div className="main">
        <div className="heading">
          <div className="one">
            <p>2</p>
            <ArrowForwardIcon
              style={{
                fontSize: "16px",
              }}
            />
          </div>

          <div className="two"> Contant Info* </div>
        </div>
        <div className="content">
          <p className="input-text">Phone number *</p>
          <div className="container">
            <div className="input-field">
              <select id="countries" name="countries" className="countries">
                <option value="IND">India</option>
                <option value="USA">USA</option>
              </select>
              <input
                type="text"
                id="phone"
                name="phone"
                className="phone"
                placeholder="1234567890"
                required
                onKeyPress={handleKeyPress}
              />
            </div>
            <div className="second">
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
    </div>
  );
}

export default Section2;
