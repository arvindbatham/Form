import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
function LandingPage() {
  return (
    <div id="landingPage">
      <div className="grid-container">
        <div className="left">
          <div className="box">
            <div className="main-heading">REMOTE WORK LOCATION DECLARATION</div>
            <div className="second">
              <button>Start</button>
              <span>
                press <stron>Enter ↵</stron>
              </span>
            </div>
            <div className="third">
              <AccessTimeIcon
                style={{
                  fontSize: "19px",
                }}
              />
              <span> Takes 1 minute 30 seconds </span>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default LandingPage;
