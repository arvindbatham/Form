import React, { useState } from "react";
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

function Section10({onSetSection10, setFormData}) {
  const [formValue, setFormValue] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [checkError, setCheckError] = useState(false);

  const changeHandler = (e) => {
    setCheckError(false);
    setFormValue(e.target.id);
    setIsChecked(e.target.checked);
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (!isChecked) {
      setCheckError(true);
    } else {
      setFormData(prevState => { return {...prevState, confirmCheck: formValue}})
      setIsChecked(false)
      setCheckError(false)
      onSetSection10();     
    }
  };

  return (
    <div className="section" id="section-10">
      <div className="main">
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
              <div className="input-field">
                <input
                  type="radio"
                  id="yes"
                  name="compliance"
                  onChange={changeHandler}
                  checked={formValue === 'yes'}
                />
                <label htmlFor="yes" className="label-cont">
                  <div className="label-content">
                    <span>Y</span>
                    <p>Yes</p>
                  </div>
                  <CheckIcon
                    style={{
                      fontSize: "24px",
                      color: "#f1e2ec",
                    }}
                  />
                </label>
              </div>
              <div className="input-field">
                <input
                  type="radio"
                  id="no"
                  name="compliance"
                  onChange={changeHandler}
                  checked={formValue === 'no'}
                />
                <label htmlFor="no" className="label-cont">
                  <div className="label-content">
                    <span>N</span>
                    <p>No</p>
                  </div>
                  <CheckIcon
                    style={{
                      fontSize: "24px",
                      color: "#f1e2ec",
                    }}
                  />
                </label>
              </div>
            </div>
            { !checkError && <div className="button-box-cls">
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
            </div> }
            {checkError && <Error message='Please select an Option' />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section10;
