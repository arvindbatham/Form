import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import "./Loader.scss";

const Loader = ({ loading }) => {
  const [brandHide, setBrandHide] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setBrandHide(true);
    }, 1700);
  },[]);
  return (
    <div className={`loader-container`}>
      <div>
        <div className={`text-container ${brandHide ? "animate-hide" : ""} `}>
          <p className="power-txt">powered by</p>
          <h3 className="brand-name">AAYS</h3>
        </div>
        <BarLoader
          className="brand-loader"
          color={"#bb1ccc"}
          loading={loading}
          height={6}
          width={150}
        />
      </div>
    </div>
  );
};

export default Loader;
