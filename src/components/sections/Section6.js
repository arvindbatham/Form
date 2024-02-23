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

function Section6({ onSetSection6, setFormData }) {
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

  const formHandler = (event) => {
    event.preventDefault();
    const errorObj = validateFrom(formValues);
    setFormErrors(errorObj);   
    setIsSubmit(true); 
  };

  useEffect(() => {
    if (errorCondition === 0 && isSubmit) {
      setFormData(prevState => { return {...prevState, address: {...formValues}}})
      setIsSubmit(false)
      setFormErrors({})
      onSetSection6();
    }
  }, [formErrors]);

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

  const buttonShow =
    isSubmit &&
    (formErrors.address ||
      formErrors.city ||
      formErrors.state ||
      formErrors.zip ||
      formErrors.country);

  return (
    <div className="section6 section" id="section-6">
      <form className="main">
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
              />
            </div>{" "}
            <div className="three box">
              <label htmlFor="city">City/Town*</label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={changeHandler}
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
              />
              {isSubmit && formErrors.zip && (
                <Error message={formErrors.zip} />
              )}
            </div>{" "}
            <div className="six box">
              <label htmlFor="country">Country*</label>
              <input
                type="text"
                id="country"
                name="country"
                onChange={changeHandler}
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
      </form>
    </div>
  );
}

export default Section6;
