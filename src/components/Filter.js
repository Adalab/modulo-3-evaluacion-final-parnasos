import React from "react";
import FilterName from "./FilterName";
import FilterSpecies from "./FilterSpecies";

const Filter = (props) => {
  return (
    <section>
      <form className="form">
        <FilterName
          handleFilter={props.handleFilter}
          filterName={props.filterName}
        />
        <FilterSpecies
          handleFilter={props.handleFilter}
          filterSpecies={props.filterSpecies}
        />
      </form>
    </section>
  );
};

export default Filter;
