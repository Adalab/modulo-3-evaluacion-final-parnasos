import React from "react";

const FilterStatus = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "status",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="status">
        Status:
      </label>

      <select
        className="form__input Status"
        name="status"
        id="status"
        value={props.filterStatus}
        onChange={handleChange}
      >
        <option value="">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">unknown</option>
      </select>
    </>
  );
};

export default FilterStatus;
