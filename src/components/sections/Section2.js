import React, { useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import Error from "../Error/Error";

function Section2({ section, nextSection, setSection, setFormData }) {
  const [userPhone, setUserPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [valid, setValid] = useState("");

  const phoneHandler = (event) => {
    setUserPhone((prevState) => event.target.value);
    if (userPhone) {
      setPhoneError(false);
    }
    if (event.key === "Enter") {
      formHandler();
    }
  };

  const formHandler = () => {
    const regex = /^[1-9]\d{9,14}$/;

    if (userPhone === "") {
      setPhoneError(true);
      setValid("Please enter your Phone Number");
    } else if (regex.test(userPhone)) {
      setFormData((prevState) => {
        return { ...prevState, phoneNumber: userPhone };
      });
      setPhoneError(false);
      setValid("");
      setSection(3);
    } else {
      setPhoneError(true);
      setValid("Please enter a valid Phone Number");
    }
  };

  useEffect(() => {
    if (section === 2) {
      formHandler();
    }
  }, [nextSection]);

  useEffect(() => {
    setPhoneError(false);
  }, []);

  return (
    <div className="section2 section" id="section-2">
      <div className="main">
        <div className="heading">
          <div className="one">
            <p>2</p>
            <ArrowForwardIcon
              style={{
                fontSize: "16px",
              }}
            />
          </div>

          <div className="two"> Contant Info* </div>
        </div>
        <div className="content">
          <div>
            <p className="input-text">Phone number *</p>
            <div className="container">
              <div className="input-field">
                <select
                  id="countries"
                  name="countries"
                  className="countries"
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                >
                  <option value="IND">India</option>
                  <option value="USA">USA</option>
                </select>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="phone"
                  placeholder="1234567890"
                  required
                  onChange={phoneHandler}
                  onKeyDown={phoneHandler}
                />
              </div>
              {!phoneError && (
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
              {phoneError && <Error message={valid} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
