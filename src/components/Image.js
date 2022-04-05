import React from "react";
// import classes from "./Image.module.css";

const Image = ({ className, title }) => {
  return (
    <>
      <img
        src={`https://source.unsplash.com/1600x900/?${title}`}
        className={className}
      />
    </>
  );
};

export default Image;
