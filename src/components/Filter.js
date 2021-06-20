import React from "react";
import FilterName from "./FilterName";
import FilterSpecies from "./FilterSpecies";
import FilterStatus from "./FilterStatus";

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
        <FilterStatus
          handleFilter={props.handleFilter}
          filterStatus={props.filterStatus}
        />
      </form>
    </section>
  );
};

export default Filter;
