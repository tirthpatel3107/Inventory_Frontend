import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

// Component
import DebouncedInput from "./DebouncedInput";
import {
  employeeFilterValues,
  hardwareFilterValues,
  softwareFilterValues,
} from "../FilterDetails";

// Context
import { DataContext } from "../../../hooks/context/DataProvider";
import { FrontRoute } from "../../../utils/api/routes/apiRoutes";

const Filter = ({ column, columnFilters }: any) => {
  const { pathname } = useLocation();

  const { setEmpQuery, setHardwareQuery, setSoftwareQuery }: any =
    useContext(DataContext);

  const dropdownChange = (e: any) => {
    column.setFilterValue(e);
  };

  const sortedUniqueValues = React.useMemo(
    () =>
      Array.from(column.getFacetedUniqueValues().keys({ unique: true })).sort(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [column.getFacetedUniqueValues()]
  );

  // ServerSide Filter Functionality

  const [data, setData] = useState(employeeFilterValues);

  useEffect(() => {
    pathname === FrontRoute.EMPLOYEE && setData(employeeFilterValues);
    pathname === FrontRoute.HARDWARE && setData(hardwareFilterValues);
    pathname === FrontRoute.SOFTWARE && setData(softwareFilterValues);
  }, [pathname]);

  // To Set Frontside filters data as per Backend key value pair
  useEffect(() => {
    var result: any = {};

    columnFilters.forEach((val: any) => {
      if (data[`${val?.id}`] !== undefined) {
        let d = data[`${val?.id}`];
        result[`${d}`] = val.value;
      }
    });

    pathname === FrontRoute.EMPLOYEE && setEmpQuery(result);
    pathname === FrontRoute.HARDWARE && setHardwareQuery(result);
    pathname === FrontRoute.SOFTWARE && setSoftwareQuery(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnFilters]);

  return (
    <>
      {/******* For Filters ***********/}
      <datalist id={column.id + "list"}>
        {sortedUniqueValues.slice(0, 5000).map((value: any, index: any) => (
          <option value={value} key={index} />
        ))}
      </datalist>

      <DebouncedInput
        type="text"
        value=""
        onChange={(e: any) => dropdownChange(e)}
        placeholder={column.id}
        list={column.id + "list"}
        columnFilters={columnFilters}
      />
    </>
  );
};

const FilterFields = ({ table, columnFilters, setColumnFilters }: any) => {
  // For close icon - Enable or Disable
  const [closeIcon, setCloseIcon] = useState(false);

  useEffect(() => {
    columnFilters.length === 0 ? setCloseIcon(false) : setCloseIcon(true);
  }, [columnFilters]);

  return (
    <React.Fragment>
      <div className="filterBar">
        <div className="leftside">
          {table.getHeaderGroups().map((headerGroup: any, index: any) => (
            <React.Fragment key={index}>
              {headerGroup.headers.map((header: any, index: any) => {
                return (
                  <React.Fragment key={index}>
                    {header.isPlaceholder ? null : (
                      <>
                        {header.column.getCanFilter() ? (
                          <div id={header.id + "table"} className="test1">
                            <Filter
                              column={header.column}
                              table={table}
                              columnFilters={columnFilters}
                            />
                          </div>
                        ) : null}
                      </>
                    )}
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          ))}
        </div>
        <div className={`rightside ${!closeIcon && "disabled"}`}>
          <img
            src={require("../../../assests/Images/Close.svg").default}
            alt="closeIcon"
            onClick={() => setColumnFilters([])}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FilterFields;
