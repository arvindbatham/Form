import React, { useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import useEnterKey from "../../CustomHooks/useEnterKey";
import aaysImage from "../../assets/images/banner-image";
function LandingPage({ section, setSection, mobileScreen }) {
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
        {mobileScreen && (
          <div className="right">
            <img src={aaysImage} alt="AAYS" />
          </div>
        )}
        <div className="left">
          <div className="box">
            <form onSubmit={landingPageHandler} className="landing-form">
              <div className="main-heading">
                REMOTE WORK LOCATION DECLARATION
              </div>
              <div className="button-cont">
                {mobileScreen && (
                  <div className="third">
                    <AccessTimeIcon
                      style={{
                        fontSize: "19px",
                      }}
                    />
                    <span> Takes 1 minute 30 secs </span>
                  </div>
                )}
                <div className="button-box-cls">
                  <div className="button-box">
                    <button type="submit">Start</button>
                  </div>
                  {!mobileScreen && (
                    <span>
                      press <strong>Enter ↵</strong>
                    </span>
                  )}
                </div>
                {!mobileScreen && (
                  <div className="third">
                    <AccessTimeIcon
                      style={{
                        fontSize: "19px",
                      }}
                    />
                    <span> Takes 1 minute 30 secs </span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
        {!mobileScreen && (
          <div className="right">
            <img src={aaysImage} alt="AAYS" />
          </div>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
