import React, { useState, useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Section8.scss";
import Error from "../Error/Error";

const initialValues = {
  day: "",
  month: "",
  year: "",
};

function Section9({ section, nextSection, setSection, setFormData }) {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formHandler = () => {
    const errorStr = validateFrom(formValues);
    setFormErrors((prevState) => errorStr);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (!formErrors && isSubmit) {
      const dateStr =
        formValues.year + "-" + formValues.month + "-" + formValues.day;
      const dateObject = new Date(dateStr);
      setFormData((prevState) => {
        return { ...prevState, endDate: dateObject };
      });
      setIsSubmit(false);
      setFormErrors(null)
      setSection(10);
    }
  }, [formErrors, isSubmit]);

  useEffect(() => {
    const errorStr = validateFrom(formValues);
    setFormErrors(errorStr);
  }, [formValues.day, formValues.month, formValues.year]);

  useEffect(() => {
    setFormErrors("");
  }, []);

  const validateFrom = (values) => {
    let error = "";
    const { day, month, year } = values;

    // Check if day, month, and year are not empty
    if (!day && !month && !year) {
      error = "Please Enter a Date";
    }

    // Check if day, month, and year are numbers
    if (isNaN(day) || isNaN(month) || isNaN(year) || !day || !month || !year) {
      error = "That date doesn't look valid—it's incomplete or doesn't exist";
    }

    // Convert day, month, and year to numbers
    const dayNum = parseInt(day);
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);

    // Check if day, month, and year are within valid ranges
    if (dayNum < 1 || dayNum > 31) {
      error = "Day must be between 1 and 31";
    }
    if (monthNum < 1 || monthNum > 12) {
      error = "Month must be between 1 and 12";
    }
    if (yearNum < 2024 || yearNum > 2100) {
      error = "Please Enter a valid year";
    }

    // Check if the year is a leap year
    if ((yearNum % 4 === 0 && yearNum % 100 !== 0) || yearNum % 400 === 0) {
      const daysInMonth = [
        31,
        yearNum % 4 === 0 ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
      ];
      if (dayNum > daysInMonth[monthNum - 1]) {
        error = `Day must be between 1 and ${daysInMonth[monthNum - 1]}.`;
      }
    }

    setIsSubmit(false);

    return error;
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      formHandler();
    }
  };

  useEffect(() => {
    if (section === 9) {
      formHandler();
    }
  }, [nextSection]);

  return (
    <div className="section-date section" id="section-9">
      <div className="main">
        <div className="header">
          <div className="header-content">
            <span>
              4{" "}
              <ArrowForwardIcon
                style={{
                  fontSize: "24px",
                }}
              />
            </span>
          </div>
          <h3 className="header-text">
            Timeline for the mentioned Remote Work Location
          </h3>
        </div>
        <div className="main">
          <div className="heading">
            <div className="one">
              <p>b.</p>
            </div>
            <div className="two"> End Date* </div>
          </div>
          <div className="content">
            <div className="container">
              <div className="input-container">
                <div className="input-field day">
                  <label htmlFor="day">Day</label>
                  <input
                    type="number"
                    id="day"
                    placeholder="DD"
                    name="day"
                    maxLength={2}
                    onChange={changeHandler}
                    onKeyDown={handleKeyDown}
                  />
                </div>
                <div className="date-dot">.</div>
                <div className="input-field month">
                  <label htmlFor="month">Month</label>
                  <input
                    type="number"
                    id="month"
                    placeholder="MM"
                    name="month"
                    maxLength={2}
                    onChange={changeHandler}
                    onKeyDown={handleKeyDown}
                  />
                </div>
                <div className="date-dot">.</div>
                <div className="input-field year">
                  <label htmlFor="year">Year</label>
                  <input
                    type="number"
                    id="year"
                    placeholder="YYYY"
                    name="year"
                    maxLength={4}
                    onChange={changeHandler}
                    onKeyDown={handleKeyDown}
                  />
                </div>
              </div>
              {!formErrors && (
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
              {formErrors && <Error message={formErrors} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section9;
