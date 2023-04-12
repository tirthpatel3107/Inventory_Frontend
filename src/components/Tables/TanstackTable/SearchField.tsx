import React from "react";

import DebouncedInput from "./DebouncedInput";

const SearchField = ({ globalFilter, setGlobalFilter, columnFilters }: any) => {
  return (
    <React.Fragment>
      <div className="searchAndAdd">
        <div className="globalSearch">
          <DebouncedInput
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            placeholder="Search..."
            columnFilters={columnFilters}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchField;
