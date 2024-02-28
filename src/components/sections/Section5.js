import React, { useEffect, useRef } from "react";
import "./Section5.scss";

function Section5({
  section,
  nextSection,
  setSection,
  scrollup,
  setScrollup,
  mobileScreen,
}) {
  const sectionRef = useRef(null);
  const content = {
    heading: "Remote Work Location Security and Reporting Commitments:",
    listItems: [
      "Physical Security: I will ensure that my remote work environment is secure and free from unauthorized access.",
      "Digital Security: I will implement appropriate security measures to protect company data, including using secure networks.",
      "Report Changes: I will promptly notify HR if my remote work location changes. This includes temporary (very short-term, short-term, or long-term) or permanent changes in my work-from-home setup.",
    ],
  };

  const formHandler = () => {
    setSection(6);
  };

  useEffect(() => {
    if (section === 5) {
      sectionRef.current.focus();
    }
  }, [section]);

  // useEffect(() => {
  //   if (section === 5) {
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
        setSection(4);
      }, 700);
    }
  };
  return (
    <div
      onWheel={scrollHandler}
      className="section"
      id="section-5"
      ref={sectionRef}
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
              <ul className="list-text">
                {content.listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
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
            <button
              onClick={() => {
                setScrollup(false);
                formHandler();
              }}
            >
              <span>Continue</span>{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Section5;
