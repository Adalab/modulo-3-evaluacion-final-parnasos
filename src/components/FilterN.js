import React from "react";
import "../stylesheets/FilterN.scss";

const FilterN = (props) => {
  return (
    <>
      <label className="form__label" htmlFor="name">
        Filter by name:
      </label>
      <input className="form__input" type="text" name="name" id="name" />
    </>
  );
};
export default FilterN;
