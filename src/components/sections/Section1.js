import React, { useState, useEffect, useRef } from "react";
// import useEnterKey from "../../CustomHooks/useEnterKey";
import Error from "../Error/Error";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";

function Section1({ onSetSection1, setFormData }) {
  const [userName, setUserName] = useState("");
  const [nameError, setNameError] = useState(false);
  // const [isEnterKeyPressed, eventObj] = useEnterKey();
  // const nameRef = useRef(null);


  const nameHandler = (event) => {
    setUserName((prevState) => event.target.value);
    if (userName) {
      setNameError(false);
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    setNameError(false);
    if (userName !== "") {
      setNameError(false);
      setFormData(prevState => { return {...prevState, username: userName}})
      onSetSection1();
    } else {
      setNameError(true);
    }
  };

  

  // useEffect(() => {
  //   if (nameRef.current) {
  //     nameRef.current.focus();
  //   }
  // }, []);



  return (
    <div id="section-1" className="section1 section">
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
          <form onSubmit={formHandler}>
            <input
              type="text"
              id="name"
              name="name"
              className="name"
              placeholder="Your Name"
              required
              onChange={nameHandler}
            />
            {!nameError && <div className="button-box-cls">
              <div className="button-box">
                <button type="submit">
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
            </div>}
            {nameError && <Error message="Please Enter your Name." />}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Section1;
