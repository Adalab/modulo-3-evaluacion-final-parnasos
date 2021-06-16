import React from "react";
import "../stylesheets/FilterN.scss";

const FilterSpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="species">
        Género:
      </label>

      <select
        className="form__input species"
        name="species"
        id="species"
        value={props.filterSpecies}
        onChange={handleChange}
      >
        <option value="">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};

export default FilterSpecies;
