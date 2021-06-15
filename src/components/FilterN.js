import React from "react";
import "../stylesheets/FilterN.scss";

const FilterN = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="name">
        Filter by name:
      </label>
      <input
        className="form__input"
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
      />
    </>
  );
};
export default FilterN;
