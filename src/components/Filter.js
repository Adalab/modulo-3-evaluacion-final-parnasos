import React from "react";
import FilterN from "./FilterN";

const Filter = (props) => {
  return (
    <section>
      <form>
        <FilterN handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};

export default Filter;
