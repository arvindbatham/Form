import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import Error from "../Error/Error";

const initialValues = {
  address: "",
  line2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
};

function Section6({ section, nextSection, setSection, setFormData }) {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const errorCondition = Object.keys(formErrors).length;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formHandler = () => {
    const errorObj = validateFrom(formValues);
    setFormErrors(errorObj);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (errorCondition === 0 && isSubmit && section === 6) {
      localStorage.setItem("formValues", JSON.stringify(formValues));
      setFormData((prevState) => {
        return { ...prevState, address: { ...formValues } };
      });
      setIsSubmit(false);
      setFormErrors({});
      setSection(7);
    }
  }, [formErrors, nextSection, section]);

  useEffect(() => {
    const errorObj = validateFrom(formValues);
    setFormErrors(errorObj);
  }, [
    formValues.address,
    formValues.city,
    formValues.state,
    formValues.zip,
    formValues.country,
  ]);

  const validateFrom = (values) => {
    let errors = {};
    const regex = /^[0-9A-Za-z\s-]{1,10}$/i;
    if (!values.address) {
      errors.address = "Please fill in the Address";
    }
    if (!values.city) {
      errors.city = "Please fill in the City";
    }
    if (!values.state) {
      errors.state = "Please fill in the State";
    }
    if (!values.zip) {
      errors.zip = "Please fill in the Zip Code";
    } else if (!regex.test(values.zip)) {
      errors.zip = "Invalid Zip Code";
    }
    if (!values.country) {
      errors.country = "Please fill in the Country";
    }
    setIsSubmit(false);
    return errors;
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      formHandler();
    }
  };

  // useEffect(() => {
  //   if (section === 6) {
  //     formHandler();
  //   }
  // }, [nextSection, section]);

  useEffect(() => {
    const storedFormValues = JSON.parse(localStorage.getItem("formValues"));
    if (storedFormValues) {
      setFormValues(storedFormValues);
    }
    setFormErrors({});
  }, []);

  const scrollHandler = (e) => {
    const delta = e.deltaY;
    if (delta > 0 && section < 12) {
      setTimeout(() => {
        formHandler();
      }, 500);
    }
  };

  const buttonShow =
    isSubmit &&
    (formErrors.address ||
      formErrors.city ||
      formErrors.state ||
      formErrors.zip ||
      formErrors.country);

  return (
    <div className="section6 section" id="section-6" onWheel={scrollHandler}>
      <div className="main">
        <div className="heading">
          <div className="one">
            <p>3</p>
            <ArrowForwardIcon
              style={{
                fontSize: "16px",
              }}
            />
          </div>
          <div className="two">Remote Work Location Address*</div>
        </div>
        <div className="content">
          <div className="input-boxes">
            <div className="text">
              When you are not working from office premises, what is your remote
              work address?
            </div>
            <div className="one box">
              <label htmlFor="address">Address*</label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={changeHandler}
                onKeyDown={handleKeyDown}
                autoFocus={true}
                value={formValues.address}
              />
              {isSubmit && formErrors.address && (
                <Error message={formErrors.address} />
              )}
            </div>
            <div className="two box">
              <label htmlFor="line2">Address line 2</label>
              <input
                type="text"
                id="line2"
                name="line2"
                onChange={changeHandler}
                onKeyDown={handleKeyDown}
                value={formValues.line2}
              />
            </div>{" "}
            <div className="three box">
              <label htmlFor="city">City/Town*</label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={changeHandler}
                onKeyDown={handleKeyDown}
                value={formValues.city}
              />
              {isSubmit && formErrors.city && (
                <Error message={formErrors.city} />
              )}
            </div>{" "}
            <div className="four box">
              <label htmlFor="state">State/Region/Province *</label>
              <input
                type="text"
                id="state"
                name="state"
                onChange={changeHandler}
                onKeyDown={handleKeyDown}
                value={formValues.state}
              />
              {isSubmit && formErrors.state && (
                <Error message={formErrors.state} />
              )}
            </div>{" "}
            <div className="five box">
              <label htmlFor="zip">Zip/Post code*</label>
              <input
                type="text"
                id="zip"
                name="zip"
                onChange={changeHandler}
                onKeyDown={handleKeyDown}
                value={formValues.zip}
              />
              {isSubmit && formErrors.zip && <Error message={formErrors.zip} />}
            </div>{" "}
            <div className="six box">
              <label htmlFor="country">Country*</label>
              <input
                type="text"
                id="country"
                name="country"
                onChange={changeHandler}
                onKeyDown={handleKeyDown}
                value={formValues.country}
              />
              {isSubmit && formErrors.country && (
                <Error message={formErrors.country} />
              )}
            </div>
          </div>
          {!buttonShow && (
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
        </div>
      </div>
    </div>
  );
}

export default Section6;
