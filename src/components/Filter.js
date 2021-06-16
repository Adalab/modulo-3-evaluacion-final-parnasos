import React from "react";
import FilterN from "./FilterN";

const Filter = (props) => {
  return (
    <section>
      <form>
        <FilterN handleFilter={props.handleFilter} filterName={props.filterName}/>
      </form>
    </section>
  );
};

export default Filter;
