import React from "react";
import "./Error.scss";
import WarningIcon from "@mui/icons-material/Warning";

function Error({message}) {
  return (
    <div className="error-container">
      <WarningIcon className="warning-icon" />
      <p className="warning-text"><span>Oops! </span>{message}</p>
    </div>
  );
}

export default Error;
