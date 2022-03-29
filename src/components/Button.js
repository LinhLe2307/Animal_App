import React from "react";

const Button = ({ add, animalsName }) => {

  return (
    <button
      onClick={() => {
        console.log(animalsName);
        add(animalsName);
      }}
    >
      Add like
    </button>
  );
};

export default Button;
