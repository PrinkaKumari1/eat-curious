import React from "react";
import "./TheButton.scss";

function TheButton({ title }) {
  return (
    <>
      <button className="button">
        <span className="button-text"><a href="!#">{title}</a></span>
        <span className="button-text"><a href="!#">{title}</a></span>
        <span className="button-text"><a href="!#">{title}</a></span>
        <span className="button-text"><a href="!#">{title}</a></span>
      </button>
    
    </>
  );
}

export default TheButton;
