import React from "react";
import "../stylesheets/FilterN.scss";

const FilterN = (props) => {
  return (
    <>
      <label className="form__label" htmlfor="name">
        Filtrar por nombre
      </label>
      <input className="form__input" type="text" name="name" id="name" />
    </>
  );
};
export default FilterN;
