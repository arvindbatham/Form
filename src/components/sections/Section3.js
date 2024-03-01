import React, { useEffect, useRef } from "react";
import "./Section3.scss";

function Section3({
  section,
  nextSection,
  setSection,
  scrollup,
  setScrollup,
  mobileScreen,
}) {
  const content = {
    heading:
      "We mandate all team members to re-fill this form whenever there is a change in their work location for more than 4 hours.",
    mainTxt:
      "This includes various types of changes in remote work locations, including temporary (ranging from very short-term to long-term) and permanent changes. These changes can include:",
    listItems: [
      "- Change in the residence address previously provided in the work location declaration form.",
      "- Temporary stays, like staycations or other non-permanent arrangements.",
      "- Utilizing a co-working space not arranged or booked by the company.",
    ],
  };

  const formHandler = () => {
    setSection(4);
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    if (section === 3) {
      sectionRef.current.focus();
    }
  }, [section]);

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
        setSection(2);
      }, 700);
    }
  };

  return (
    <div
      onWheel={scrollHandler}
      className="section"
      id="section-3"
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
              <div className="description-text">
                <p className="main-text">{content.mainTxt}</p>
              </div>
              <ul className="list-text">
                {content.listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {!mobileScreen && (
                <div className="button-box-cls">
                  <div className="button-box">
                    <button
                      type="button"
                      onClick={() => {
                        setScrollup(false);
                        formHandler();
                      }}
                    >
                      <span>Continue</span>{" "}
                    </button>
                  </div>
                  <span className="press-enter">
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

export default Section3;
