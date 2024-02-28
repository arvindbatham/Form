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

function Section8({
  section,
  nextSection,
  setSection,
  setFormData,
  scrollup,
  setScrollup,
  mobileScreen,
}) {
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
    if (!formErrors && isSubmit && section === 8) {
      localStorage.setItem("formValuesStartDate", JSON.stringify(formValues));
      const dateStr =
        formValues.year + "-" + formValues.month + "-" + formValues.day;
      const dateObject = new Date(dateStr);
      setFormData((prevState) => {
        return { ...prevState, startDate: dateObject };
      });
      setIsSubmit(false);
      setFormErrors(null);
      setSection(9);
    }
  }, [formErrors, isSubmit, nextSection, section]);

  useEffect(() => {
    const errorStr = validateFrom(formValues);
    setFormErrors(errorStr);
  }, [formValues.day, formValues.month, formValues.year]);

  useEffect(() => {
    setFormErrors("");
    const storedFormValues = JSON.parse(
      localStorage.getItem("formValuesStartDate")
    );
    if (storedFormValues) {
      setFormValues(storedFormValues);
    }
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
      setScrollup(false)
      formHandler();
    }
  };

  // useEffect(() => {
  //   if (section === 8) {
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
        setSection(7);
      }, 700);
    }
  };

  return (
    <div
      className="section-date section"
      id="section-8"
      onWheel={scrollHandler}
    >
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

      <div className={`main ${scrollup ? "animateDown" : ""}`}>
        <div className="heading">
          <div className="one">
            <p>a.</p>
          </div>
          <div className="two"> Start Date* </div>
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
                  value={formValues.day}
                  autoFocus={true}
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
                  value={formValues.month}
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
                  value={formValues.year}
                />
              </div>
            </div>
            {!formErrors && !mobileScreen && (
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
                  press <strong>Enter ↵</strong>
                </span>
              </div>
            )}
            {formErrors && <Error message={formErrors} />}
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

export default Section8;
