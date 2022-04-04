import React from "react";

const Search = ({ className, value, onChange }) => {
  return (
    <form>
      <input
        placeholder="Enter Animal Title"
        className={className}
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </form>
  );
};

export default Search;
