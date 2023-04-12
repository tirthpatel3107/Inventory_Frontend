import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Table.scss";

// Component
// import SearchField from "./SearchField";
import FilterFields from "./FilterFields";
import DataFields from "./DataFields";
import Pagination from "./Pagination";

// Import Csv
import { CSVLink } from "react-csv";

// Date
import moment from "moment";

import {
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel,
  FilterFn,
  flexRender,
} from "@tanstack/react-table";

import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";
import { FrontRoute } from "../../../utils/api/routes/apiRoutes";

declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export default function TanstackTable({ data, FilterDetails }: any) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const columns = useMemo(() => FilterDetails, [FilterDetails]);

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
      // sorting,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  // whole table data which is showing
  const allData = Object.keys(table.getRowModel().rowsById).length;

  const { pathname } = useLocation();

  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    if (pathname === FrontRoute.HARDWARE) {
      const newArr = data?.map(
        ({
          hardwareId,
          hardwareName,
          svNo,
          status,
          employeesWithAccess,
          type,
          condition,
          notes,
        }: any) => {
          return {
            hardwareId,
            hardwareName,
            svNo,
            status,
            Assignee: employeesWithAccess.length
              ? employeesWithAccess[0].employeeName
              : "",
            type,
            condition,
            "Other Assets": notes,
          };
        }
      );

      setCsvData(newArr);
    }

    if (pathname === FrontRoute.SOFTWARE) {
      const newArr = data?.map(
        ({
          softwareId,
          softwareName,
          userName,
          password,
          status,
          employeesWithAccess,
          notes,
        }: any) => {
          return {
            softwareId,
            softwareName,
            userName,
            password,
            status,
            Assignee: employeesWithAccess.length
              ? employeesWithAccess[0].employeeName
              : "",
            "Other Assets": notes,
          };
        }
      );

      setCsvData(newArr);
    }
  }, [data, pathname]);

  return (
    <div className="TanstackTable">
      {/************ For Search Field ***************/}

      {/* <div className="d-flex space-between align-items-center mb20"> */}
      {/* <SearchField
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
          columnFilters={columnFilters}
        /> */}
      {pathname !== FrontRoute.EMPLOYEE && (
        <CSVLink
          data={csvData}
          className="DownloadCsv"
          filename={`${
            pathname === FrontRoute.HARDWARE
              ? `HardwareInfo (${moment(new Date()).format("Do MMMM YYYY")})`
              : `SoftwareInfo (${moment(new Date()).format("Do MMMM YYYY")})`
          }`}
        >
          <img
            src={require("../../../assests/Images/Download.svg").default}
            alt="downloadIcon"
          />
        </CSVLink>
      )}
      {/* </div> */}

      {/************ For Filter Field ***************/}
      <FilterFields
        table={table}
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />

      {/************ For Table's Data Display ***************/}
      <DataFields table={table} allData={allData} flexRender={flexRender} />

      {/************ For Pagination ***************/}
      <Pagination allData={allData} table={table} />
    </div>
  );
}
