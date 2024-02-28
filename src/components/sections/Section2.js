import React, { useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import Error from "../Error/Error";
import Select from "react-select";
import countryCodes from "../../Data/CountryCodes";
const options = countryCodes.map((country) => ({
  value: country.code,
  label: `${country.country}`,
}));

const defaultCountryCode = "United States";
let defaultOption = {};

const { code, country } = countryCodes.find(
  (country) => country.country === defaultCountryCode
);

defaultOption = {
  ...defaultOption,
  value: code,
  label: `${country}`,
};

function Section2({ section, nextSection, setSection, setFormData }) {
  const [userPhone, setUserPhone] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState(defaultOption);
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

  console.log("Select country: ", selectedCountryCode);

  const formHandler = () => {
    const regex = /^[1-9]\d{9,14}$/;

    if (userPhone === "") {
      setPhoneError(true);
      setValid("Please enter your Phone Number");
    } else if (regex.test(userPhone)) {
      localStorage.setItem("userPhone", userPhone);
      setFormData((prevState) => {
        return {
          ...prevState,
          phoneNumber: userPhone,
          countryCode: selectedCountryCode,
        };
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
    const storedPhone = localStorage.getItem("userPhone");
    const storedCountryCode = JSON.parse(localStorage.getItem("countryCode"));
    if (storedPhone) {
      setUserPhone(storedPhone);
    }
    if (storedCountryCode) {
      setSelectedCountryCode(storedCountryCode);
    }
  }, []);

  const scrollHandler = (e) => {
    const delta = e.deltaY;
    if (delta > 0 && section < 12) {
      setTimeout(() => {
        formHandler();
      }, 500);
    }
  };

  return (
    <div className="section2 section" id="section-2" onWheel={scrollHandler}>
      <div className={`main`}>
        <div className="heading">
          <div className="one">
            <p>2</p>
            <ArrowForwardIcon
              style={{
                fontSize: "16px",
              }}
            />
          </div>

          <div className="two"> Contact Info* </div>
        </div>
        <div className="content">
          <div>
            <p className="input-text">Phone number *</p>
            <div className="container">
              <div className="input-field">
                <Select
                  className="country-code"
                  options={options}
                  value={selectedCountryCode}
                  onChange={(selectedOption) => {
                    setSelectedCountryCode(selectedOption);
                    localStorage.setItem("countryCode", JSON.stringify(selectedOption));
                  }}
                  // menuIsOpen={true}
                />
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="phone"
                  placeholder="1234567890"
                  value={userPhone}
                  onChange={phoneHandler}
                  onKeyDown={phoneHandler}
                  autoFocus={true}
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
