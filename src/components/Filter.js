import React from "react";
import FilterN from "./FilterN";
import FilterSpecies from "./FilterSpecies";

const Filter = (props) => {
  return (
    <section>
      <form>
        <FilterN
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
