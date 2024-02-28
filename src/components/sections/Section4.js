import React, { useEffect, useRef } from "react";
import "./Section4.scss";

function Section4({
  section,
  nextSection,
  setSection,
  scrollup,
  setScrollup,
  mobileScreen,
}) {
  const sectionRef = useRef(null);
  const content = {
    heading: "Keep us in the Loop Every Quarter",
    mainTxt:
      "Everyone needs to fill out this form every three months, even if there has been no change in remote work location. We'll send you an email reminder.",
  };

  useEffect(() => {
    if (section === 4) {
      sectionRef.current.focus();
    }
  }, [section]);

  const formHandler = () => {
    setSection(5);
  };

  // useEffect(() => {
  //   if (section === 4) {
  //     formHandler();
  //   }
  // }, [nextSection]);
  const scrollHandler = (e) => {
    const delta = e.deltaY;
    if (delta > 0 && section < 12) {
      setTimeout(() => {
        setScrollup(false);
        formHandler();
      }, 700);
    }

    if (delta < 0) {
      setTimeout(() => {
        setScrollup(true);
        setSection(3);
      }, 700);
    }
  };
  return (
    <div
      onWheel={scrollHandler}
      ref={sectionRef}
      className="section"
      id="section-4"
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          setScrollup(false);
          formHandler();
        }
      }}
      tabIndex={0} // This is necessary to make the div focusable
    >
      <div className="form-styling">
        <div className={`main ${scrollup ? "animateDown" : ""}`}>
          <div className="heading">
            <h3 className="heading-text">{content.heading}</h3>
          </div>
          <div className="content">
            <div className="container">
              <div className="description-text">
                <p className="main-text">{content.mainTxt}</p>
              </div>
              {!mobileScreen && (
                <div className="button-box-cls">
                  <div className="button-box">
                    <button
                      onClick={() => {
                        setScrollup(false);
                        formHandler();
                      }}
                    >
                      <span>Continue</span>{" "}
                    </button>
                  </div>
                  <span>
                    press <strong>Enter ↵</strong>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {mobileScreen && (
        <div
          style={{ animationDuration: "0.4s", justifyContent: "flex-end" }}
          className={`button-box-cls mobile-btn ${
            scrollup ? "animateDown" : ""
          }`}
        >
          <div className="button-box" style={{ width: "82%" }}>
            <button onClick={() => {
                setScrollup(false);
                formHandler();
              }}>
              <span>Continue</span>{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Section4;
