import React from "react";
import classes from "./Header.module.css";

import Search from "./Search";

const Header = ({ value, onChange }) => {
  return (
    <div className={`${classes.header}`}>
      <h1>Linh Le</h1>
      <Search
        className={`${classes.search}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Header;
