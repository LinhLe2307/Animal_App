import React from "react";
import classes from "./Header.module.css";

const Header = ({ value, onChange }) => {
  return (
    <div className={`${classes.header}`}>
      <h1>Linh Le</h1>
      {/* <input
        placeholder="Enter Animal Title"
        className={classes.search}
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      /> */}
      <input
        placeholder="Enter Animal Title"
        className={classes.search}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Header;
