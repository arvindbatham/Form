import React, { useEffect, useRef } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const content = `If permanent, write from <current date> to <31-12-9999>
If temporary, write start and end dates.`;

function Section7({
  section,
  nextSection,
  setSection,
  scrollup,
  setScrollup,
  mobileScreen,
}) {
  const sectionRef = useRef(null);

  const formHandler = () => {
    setSection(8);
  };

  useEffect(() => {
    if (section === 7) {
      sectionRef.current.focus();
    }
  }, [section]);

  // useEffect(() => {
  //   if (section === 7) {
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
        setSection(6);
      }, 700);
    }
  };
  return (
    <div
      onWheel={scrollHandler}
      className="section7 section"
      id="section-7"
      ref={sectionRef}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          setScrollup(false);
          formHandler();
        }
      }}
      tabIndex={0} // This is necessary to make the div focusable
    >
      <div className="form-styling" style={{ width: "100%" }}>
        <div className={`main ${scrollup ? "animateDown" : ""}`}>
          <div className="heading">
            <div className="one">
              <p>4</p>
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
                    {/* <CheckIcon
                    style={{
                      fontSize: "28px",
                    }}
                  /> */}
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

export default Section7;
