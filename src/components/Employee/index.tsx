import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";

// Component
import Table from "../Tables/TanstackTable/index";
import { EmployeeDetails } from "../Tables/FilterDetails";
import { ObjectToQueryParams } from "../../utils/ObjectToQueryParams";

// Conetxt
import { DataContext } from "../../hooks/context/DataProvider";

// API
import { getAllEmployees } from "../../utils/api/service/employeeService";

const Employee = () => {
  // Use Context
  const { employeeTableReload, empQuery }: any = useContext(DataContext);

  const [globalEmployeesData, setGlobalEmployeesData] = useState([]);

  const objString = ObjectToQueryParams(empQuery);

  // Getting Global Employees Data
  useEffect(() => {
    (async () => {
      const { data } = await getAllEmployees(
        objString.length > 1 ? objString : ""
      );
      setGlobalEmployeesData(data?.data ?? []);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeTableReload, objString.length]);

  return (
    <React.Fragment>
      <Box className="employeeTable">
        <Table
          data={globalEmployeesData ?? []}
          FilterDetails={EmployeeDetails}
        />
      </Box>
    </React.Fragment>
  );
};

export default Employee;
