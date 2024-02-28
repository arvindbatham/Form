import React, { useState, useEffect } from "react";
import Error from "../Error/Error";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";

function Section1({
  section,
  nextSection,
  setSection,
  setFormData,
  scrollup,
  setScrollup,
  mobileScreen,
}) {
  const [userName, setUserName] = useState("");
  const [nameError, setNameError] = useState(false);

  const nameHandler = (event) => {
    const newUserName = event.target.value;
    setUserName(newUserName);
    if (newUserName) {
      setNameError(false);
    }
    if (event.key === "Enter") {
      setScrollup(false);
      formHandler();
    }
  };

  const formHandler = () => {
    setNameError(false);
    if (userName !== "") {
      setNameError(false);
      localStorage.setItem("userName", userName);
      setFormData((prevState) => {
        return { ...prevState, username: userName };
      });
      setSection(2);
    } else {
      setNameError(true);
    }
  };

  useEffect(() => {
    if (section === 1) {
      formHandler();
    }
  }, [nextSection, section]);

  useEffect(() => {
    setNameError(false);
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const scrollHandler = (e) => {
    const delta = e.deltaY;
    if (delta > 0 && section < 12) {
      setTimeout(() => {
        setScrollup(false);
        formHandler();
      }, 700);
    }

    if (delta < 0) {
      return;
    }
  };

  return (
    <div id="section-1" className="section1 section" onWheel={scrollHandler}>
      <div className={`main ${scrollup ? "animateDown" : ""}`}>
        <div className="heading">
          <div className="one">
            <p>1</p>
            <ArrowForwardIcon
              style={{
                fontSize: "16px",
              }}
            />
          </div>
          <div className="two"> Your Name* </div>
        </div>
        <div className="content">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              className="name"
              placeholder="Your Name"
              onChange={nameHandler}
              onKeyDown={nameHandler}
              value={userName}
              autoFocus={true}
            />
            {!nameError && !mobileScreen && (
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
                {!mobileScreen && (
                  <span>
                    press <strong>Enter ↵</strong>
                  </span>
                )}
              </div>
            )}
            {nameError && <Error message="Please Enter your Name." />}
          </div>
        </div>
      </div>
      {mobileScreen && (
        <div
          className={`button-box-cls mobile-btn ${
            scrollup ? "animateDown" : ""
          }`}
        >
          <div className="button-box">
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

export default Section1;
