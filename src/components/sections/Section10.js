import React, { useState, useEffect, useRef } from "react";
import Error from "../Error/Error";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import "./Section10.scss";

const content = {
  primary:
    "I understand that compliance with this policy is essential to maintaining the security and confidentiality of Aays' information and assets. Failure to adhere to these security measures may result in disciplinary action, up to and including termination of employment.",
  secondary:
    "By clicking on 'yes', I acknowledge that I have read, understood, and agree to comply with this Remote Work Location Declaration Policy.",
};

function Section10({
  section,
  nextSection,
  setSection,
  setFormData,
  scrollup,
  setScrollup,
  mobileScreen,
}) {
  const [formValue, setFormValue] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [checkError, setCheckError] = useState(false);

  const sectionRef = useRef(null);

  const changeHandler = (e) => {
    setCheckError(false);
    setFormValue(e.target.id);
    setIsChecked(e.target.checked);
  };

  const formHandler = () => {
    if (!isChecked) {
      setCheckError(true);
    } else {
      setFormData((prevState) => {
        return { ...prevState, confirmCheck: formValue };
      });
      setIsChecked(false);
      setCheckError(false);
      setSection(11);
    }
  };

  useEffect(() => {
    if (section === 10) {
      sectionRef.current.focus();
    }
  }, [section]);

  // useEffect(() => {
  //   if (section === 10) {
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
        setSection(9);
      }, 700);
    }
  };

  return (
    <div
      onWheel={scrollHandler}
      className="section"
      id="section-10"
      ref={sectionRef}
      onKeyDown={(event) => {
        if (event.ctrlKey && event.key === "Enter") {
          formHandler(event);
        }
      }}
      tabIndex={0} // This is necessary to make the div focusable
    >
      <div className={`main ${scrollup ? "animateDown" : ""}`}>
        <div className="heading">
          <div className="one">
            <p>5</p>
            <ArrowForwardIcon
              style={{
                fontSize: "20px",
              }}
            />
          </div>
          <div className="two"> Compliance* </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="desc-txt">
              <p>{content.primary}</p>
              <p>{content.secondary}</p>
            </div>

            <div className="input-cont">
              <div
                className={`input-field ${
                  formValue === "yes" ? "blinking-text" : ""
                }`}
              >
                <input
                  type="radio"
                  id="yes"
                  name="compliance"
                  onChange={changeHandler}
                  checked={formValue === "yes"}
                />
                <label htmlFor="yes" className="label-cont">
                  <div className="label-content">
                    <span>Y</span>
                    <p>Yes</p>
                  </div>
                  {formValue === "yes" && (
                    <CheckIcon
                      style={{
                        fontSize: "24px",
                        color: "#e27bed",
                      }}
                    />
                  )}
                </label>
              </div>
              <div
                className={`input-field ${
                  formValue === "no" ? "blinking-text" : ""
                }`}
              >
                <input
                  type="radio"
                  id="no"
                  name="compliance"
                  onChange={changeHandler}
                  checked={formValue === "no"}
                />
                <label htmlFor="no" className="label-cont">
                  <div className="label-content">
                    <span>N</span>
                    <p>No</p>
                  </div>
                  {formValue === "no" && (
                    <CheckIcon
                      style={{
                        fontSize: "24px",
                        color: "#e27bed",
                      }}
                    />
                  )}
                </label>
              </div>
            </div>
            {!checkError && !mobileScreen && (
              <div className="button-box-cls">
                <div className="button-box">
                  <button
                    onClick={() => {
                      setScrollup(false);
                      formHandler();
                    }}
                  >
                    <span>OK</span>{" "}
                    <CheckIcon
                      style={{
                        fontSize: "28px",
                      }}
                    />
                  </button>
                </div>
                <span>
                  press <strong>Ctrl + Enter ↵</strong>
                </span>
              </div>
            )}
            {checkError && <Error message="Please select an Option" />}
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
              <span>OK</span>{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Section10;
