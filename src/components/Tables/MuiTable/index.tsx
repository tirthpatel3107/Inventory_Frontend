import React from "react";
import "../TanstackTable/Table.scss";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

// Component
import TableDataFields from "./TableDataFields";

const hardwareHeader = [
  "Sr No.",
  "Hardware ID",
  "HardwareName",
  "Type",
  "SV Number",
  "Unassign",
];

const softwareHeader = [
  "Sr No.",
  "Software ID",
  "Software Name",
  "User Name",
  "Password",
  "Unassign",
];

const employeeHeader = [
  "Sr No.",
  "Employee ID",
  "Employee Name",
  "Department",
  "Type",
  "Unassign",
];

const historyHeader = [
  "Sr No.",
  "Employee ID",
  "Employee Name",
  "Department",
  "Assign Date",
  "Unassign Date",
  "Status",
];

const MuiTable = ({ rows, title }: any) => {
  const editTableData = rows.map((entry: any, index: any) => {
    return {
      serialNo: index + 1,
      ...entry,
    };
  });

  return (
    <React.Fragment>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {title === "Hardware" && (
                <>
                  {hardwareHeader.map((value, index) => (
                    <React.Fragment key={index}>
                      <TableCell className="muiTableTh">{value}</TableCell>
                    </React.Fragment>
                  ))}
                </>
              )}
              {title === "Software" && (
                <>
                  {softwareHeader.map((value, index) => (
                    <React.Fragment key={index}>
                      <TableCell className="muiTableTh">{value}</TableCell>
                    </React.Fragment>
                  ))}
                </>
              )}
              {title === "Employee" && (
                <>
                  {employeeHeader.map((value, index) => (
                    <React.Fragment key={index}>
                      <TableCell className="muiTableTh">{value}</TableCell>
                    </React.Fragment>
                  ))}
                </>
              )}
              {title === "History" && (
                <>
                  {historyHeader.map((value, index) => (
                    <React.Fragment key={index}>
                      <TableCell className="muiTableTh">{value}</TableCell>
                    </React.Fragment>
                  ))}
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableDataFields data={editTableData} title={title} />
          </TableBody>
        </Table>
      </TableContainer>

      {/******* No Data Found *******/}
      {editTableData.length === 0 && (
        <h3 className="text-center w-100">
          No {title === "Hardware" && "Hardware"}
          {title === "Software" && "Software"}{" "}
          {title === "Employee" && "Employee"}
          {title === "History" && "Employee History"} Found
        </h3>
      )}
    </React.Fragment>
  );
};

export default MuiTable;
