import React, { useState } from "react";
import Section1 from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";
import Section4 from "../Section4";
import Section5 from "../Section5";
import './Form.scss';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function Form() {
    const [section, setSection] =useState(0);
    const numberOfSections = 5;

    const prevHandler = () => {
        setSection(prevState => prevState - 1)
    }
    const nextHandler = () => {
        setSection(prevState => prevState + 1)
    }

    const sectionChangeHandler = () => {
        switch (section) {
            case 0:
                return <Section1 />
            case 1:
                return <Section2 />
            case 2:
                return <Section3 />
            case 3:
                return <Section4 />
            case 4:
                return <Section5 />
            default:
                return <Section1 />
        }
    }

    const scrollHandler = (e) => {
        const delta = e.deltaY;
        if (delta < 0 && section > 0) {
            prevHandler();
        } else if (delta > 0 && section < numberOfSections - 1) {
            nextHandler();
        }
    }
    
  return (
    <div id="form-page" className="form-page-container" onWheel={scrollHandler}>
      <div className="form-page-header">Progress Bar</div>
      <div className="form-page-body" style={{ scrollSnapType: 'y mandatory' }}>
        {sectionChangeHandler()}
      </div>
      <div className="form-page-footer">
        <div className="action">
          <button className="action-button" disabled={section === 0} onClick={prevHandler }><ArrowCircleUpIcon className="arrow-icon"/></button>
          <button className="action-button" disabled={section === numberOfSections - 1 } onClick={nextHandler}><ArrowCircleDownIcon className="arrow-icon"/></button>
        </div>
      </div>
    </div>
  );
}

export default Form;
