import React from "react";

const FilterN = (props) => {
  return (
    <>
      <label className="from__label" htmlfor="name">
        Filtrar por nombre
      </label>
      <input className="form__input" type="text" name="name" id="name" />
    </>
  );
};
export default FilterN;
