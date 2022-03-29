import React from "react";
import classes from "./Image.module.css";

const Image = ({ title }) => {
  return (
    <div>
      <img src={`https://source.unsplash.com/1600x900/?${title}`} />
    </div>
  );
};

export default Image;
