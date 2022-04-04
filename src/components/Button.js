import React from "react";
// import classes from "./Button.module.css";

const Button = ({ className, click, animalsName, btnName }) => {
  return (
    <button
      className={className}
      onClick={() => {
        // console.log(animalsName);
        click(animalsName);
      }}
    >
      {btnName}
    </button>
  );
};

export default Button;
