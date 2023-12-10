import React from "react";
import "./TheTicker.scss";

function TheTicker() {
  const imgSource = './logos/ticker.svg'; // Updated image source
  return (
    <div className="ticker">
      <div className="ticker-slide">
        <span>
          100% Plant Based
          <img src={imgSource} alt="ticker"/>
        </span>
        <span>
          Packed with flavour
          <img src={imgSource} alt="ticker" />
        </span>
        <span>
          Dairy Free
          <img src={imgSource} alt="ticker" />
        </span>
        <span>
          100% Plant Based
          <img src={imgSource} alt="ticker" />
        </span>
        <span>
          Packed with flavour
          <img src={imgSource} alt="ticker" />
        </span>
        <span>
          Dairy Free
          <img src={imgSource} alt="ticker" />
        </span>
      </div>
      <div className="ticker-slide">
        <span>
          100% Plant Based
          <img src={imgSource} alt="ticker"/>
        </span>
        <span>
          Packed with flavour
          <img src={imgSource} alt="ticker" />
        </span>
        <span>
          Dairy Free
          <img src={imgSource} alt="ticker" />
        </span>
        <span>
          100% Plant Based
          <img src={imgSource} alt="ticker" />
        </span>
        <span>
          Packed with flavour
          <img src={imgSource} alt="ticker" />
        </span>
        <span>
          Dairy Free
          <img src={imgSource} alt="ticker" />
        </span>
      </div>
    </div>
  );
}

export default TheTicker;
