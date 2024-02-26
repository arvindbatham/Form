import React, { useState, useEffect, useRef } from "react";
import Error from "../Error/Error";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";

function Section1({ section, nextSection, setSection, setFormData }) {
  const [userName, setUserName] = useState("");
  const [nameError, setNameError] = useState(false);

  const nameHandler = (event) => {
    setUserName((prevState) => event.target.value);
    if (userName) {
      setNameError(false);
    }
    if (event.key === "Enter") {
      formHandler();
    }
  };

  
  const formHandler = () => {
    setNameError(false);
    if (userName !== "") {
      setNameError(false);
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
  }, []);

  const scrollHandler = (e) => {
    e.preventDefault(); // Prevent the default scroll behavior

    const delta = e.deltaY;
  if (delta > 0 && section < 12) {
     formHandler();
    }
  };

  return (
    <div id="section-1" className="section1 section" onWheel={scrollHandler}>
      <div className="main">
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
            />
            {!nameError && (
              <div className="button-box-cls">
                <div className="button-box">
                  <button onClick={formHandler}>
                    <span>OK</span>{" "}
                    <CheckIcon
                      style={{
                        fontSize: "28px",
                      }}
                    />
                  </button>
                </div>
                <span>
                  press <strong>Enter ↵</strong>
                </span>
              </div>
            )}
            {nameError && <Error message="Please Enter your Name." />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
