import React from "react";
// import classes from "./Button.module.css";

const Button = ({ className, click, animalsName, btnName }) => {
  if (click) {
    return (
      <button
        className={className}
        onClick={() => {
          click(animalsName);
        }}
      >
        {btnName}
      </button>
    );
  } else {
    return <button className={className}>{btnName}</button>;
  }
};

export default Button;
