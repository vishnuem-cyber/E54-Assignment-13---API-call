import React from "react";

const Dropdown = ({ setDataType }) => {
  return (
    <div>
      <label>Select Data Type: </label>
      <select onChange={(e) => setDataType(e.target.value)}>
        <option value="character">Characters</option>
        <option value="episode">Episodes</option>
        <option value="location">Locations</option>
      </select>
    </div>
  );
};

export default Dropdown;
