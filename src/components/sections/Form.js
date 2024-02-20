import React from "react";
import Section2 from "./Section2";
import Section1 from "./Section1";
import Section4 from "./Section4";
import Section6 from "./Section6";
import Section7 from "./Section7";

function Form() {
  return (
    <>
      <form id="form">
        <Section1 />
        <Section2 />
        <Section4 />
        <Section6 />
        <Section7 />
      </form>
    </>
  );
}

export default Form;
