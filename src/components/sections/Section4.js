import React, { useEffect, useRef } from "react";
import "./Section4.scss";

function Section4({ section, nextSection, setSection }) {
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
        formHandler();
      }, 500);
    }
  };
  return (
    <div
    onWheel={scrollHandler}
      ref={sectionRef}
      className="section"
      id="section-4"
      onKeyDown={(event) => {
        if (event.key === "Enter") formHandler();
      }}
      tabIndex={0} // This is necessary to make the div focusable
    >
      <div className="form-styling">
        <div className="main">
          <div className="heading">
            <h3 className="heading-text">{content.heading}</h3>
          </div>
          <div className="content">
            <div className="container">
              <div className="description-text">
                <p className="main-text">{content.mainTxt}</p>
              </div>
              <div className="button-box-cls">
                <div className="button-box">
                  <button onClick={formHandler}>
                    <span>Continue</span>{" "}
                  </button>
                </div>
                <span>
                  press <strong>Enter ↵</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
