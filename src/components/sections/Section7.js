import React, {useEffect} from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const content = `If permanent, write from <current date> to <31-12-9999>
If temporary, write start and end dates.`;

function Section7({ section, nextSection, setSection}) {

  const formHandler = () => {
    setSection(8);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (event.target.closest("#section-7")) {
          formHandler();
        }
      }
    };
  
    document.addEventListener("keypress", handleKeyPress);
  
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (section === 7) {
      formHandler();
    }
  }, [nextSection]);
  return (
    <div className="section7 section" id="section-7">
      <div className="form-styling">
        <div className="main" style={{width: '60%'}}>
          <div className="heading">
            <div className="one">
              <p>4</p>
              <ArrowForwardIcon
                style={{
                  fontSize: "16px",
                }}
              />
            </div>
            <div className="two">
              Timeline for the mentioned Remote Work Location*
            </div>
          </div>
          <div className="content">
            <div className="text">{content}</div>{" "}
            <div className="button-box-cls">
              <div className="button-box">
                <button onClick={formHandler}>
                  <span>Continue</span>{" "}
                  {/* <CheckIcon
                    style={{
                      fontSize: "28px",
                    }}
                  /> */}
                </button>
              </div>
              <span>
                press <strong>Enter ↵</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
