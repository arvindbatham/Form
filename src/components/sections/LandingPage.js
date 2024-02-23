import React, { useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import useEnterKey from "../../CustomHooks/useEnterKey";
function LandingPage({ section, setSection }) {
  const [isEnterKeyPressed, eventObj] = useEnterKey();

  const landingPageHandler = (event) => {
    event.preventDefault();
    setSection(1);
  };

  useEffect(() => {
    if (isEnterKeyPressed) landingPageHandler(eventObj);
  }, [isEnterKeyPressed]);

  return (
    <div id="landingPage">
      <div className="grid-container">
        <div className="left">
          <div className="box">
            <form onSubmit={landingPageHandler}>
              <div className="main-heading">
                REMOTE WORK LOCATION DECLARATION
              </div>
              <div className="button-box-cls">
                <div className="button-box">
                  <button type="submit">Start</button>
                </div>
                <span>
                  press <strong>Enter ↵</strong>
                </span>
              </div>
              <div className="third">
                <AccessTimeIcon
                  style={{
                    fontSize: "19px",
                  }}
                />
                <span> Takes 1 minute 30 secs </span>
              </div>
            </form>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default LandingPage;
