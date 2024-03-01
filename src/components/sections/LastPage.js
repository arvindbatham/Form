import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import './LastPage.scss'

function LastPage() {
  return (
    <div className="section" id="section-12">
      <div className="main">
        <div className="heading">
          <ThumbUpIcon />
        </div>
        <p className="thanks-txt">Thanks for completing this form</p>
        <p className="aays-txt">Powered by <a href="https://www.aaysanalytics.com/">AAYS</a></p>
      </div>
    </div>
  );
}

export default LastPage;
