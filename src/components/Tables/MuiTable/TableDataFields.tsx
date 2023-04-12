import React, { useContext } from "react";
import "../TanstackTable/Table.scss";

import { useLocation } from "react-router-dom";
import { TableCell, TableRow, Tooltip } from "@mui/material";
import { toast } from "react-toastify";
import { FrontRoute } from "../../../utils/api/routes/apiRoutes";

// Context
import { DataContext } from "../../../hooks/context/DataProvider";

// API
import { hardwareUnassign } from "../../../utils/api/service/hardwareService";
import { softwareUnassign } from "../../../utils/api/service/softwareService";

// Date
import moment from "moment";

const TableDataFields = ({ data, title }: any) => {
  const {
    id,
    employeePopupTableReload,
    setEmployeePopupTableReload,
    hardwarePopupTableReload,
    setHardwarePopupTableReload,
    softwarePopupTableReload,
    setSoftwarePopupTableReload,
    hardwareTableReload,
    setHardwareTableReload,
    softwareTableReload,
    setSoftwareTableReload,
  }: any = useContext(DataContext);

  const { pathname } = useLocation();

  // Unassign Hardware and Software Functionality
  const unassignFunctionality = async (tableId: any, title: String) => {
    // Maintain Employee Id For Employee Heading
    const gettingEmpIdFromEmployeePage = {
      emmployeeID: id,
    };

    if (pathname === FrontRoute.EMPLOYEE) {
      if (title === "Hardware") {
        await hardwareUnassign(tableId, gettingEmpIdFromEmployeePage)
          .then(() => {
            setEmployeePopupTableReload(!employeePopupTableReload);
            toast.success("Hardware Unassigned !!");
          })
          .catch((error) => {
            if (error.response.data.error.status === 500) {
              toast.error("Internal Server Error");
            } else {
              toast.error(error.response.data.error.message);
            }
          });
      }

      if (title === "Software") {
        await softwareUnassign(tableId, gettingEmpIdFromEmployeePage)
          .then(() => {
            setEmployeePopupTableReload(!employeePopupTableReload);
            toast.success("Software Unassigned !!");
          })
          .catch((error) => {
            if (error.response.data.error.status === 500) {
              toast.error("Internal Server Error");
            } else {
              toast.error(error.response.data.error.message);
            }
          });
      }
    }

    // Maintain Employee Id For Hardware or Software Heading
    const gettingEmpIdFromHardwareOrSoftwarePage = {
      emmployeeID: tableId,
    };

    if (pathname === FrontRoute.HARDWARE) {
      await hardwareUnassign(id, gettingEmpIdFromHardwareOrSoftwarePage)
        .then(() => {
          setHardwarePopupTableReload(!hardwarePopupTableReload);
          setHardwareTableReload(!hardwareTableReload);
          toast.success("Hardware Unassigned !!");
        })
        .catch((error) => {
          if (error.response.data.error.status === 500) {
            toast.error("Internal Server Error");
          } else {
            toast.error(error.response.data.error.message);
          }
        });
    }

    if (pathname === FrontRoute.SOFTWARE) {
      await softwareUnassign(id, gettingEmpIdFromHardwareOrSoftwarePage)
        .then(() => {
          setSoftwarePopupTableReload(!softwarePopupTableReload);
          setSoftwareTableReload(!softwareTableReload);
          toast.success("Software Unassigned !!");
        })
        .catch((error) => {
          if (error.response.data.error.status === 500) {
            toast.error("Internal Server Error");
          } else {
            toast.error(error.response.data.error.message);
          }
        });
    }
  };

  return (
    <React.Fragment>
      {/******* Hardware Details Content *******/}

      {data.map((row: any) => (
        <TableRow key={row.serialNo}>
          {title === "Hardware" && (
            <>
              <TableCell className="muiTableTr">{row.serialNo}</TableCell>
              <TableCell className="muiTableTr">{row.hardwareId}</TableCell>
              <TableCell className="muiTableTr">{row.hardwareName}</TableCell>
              <TableCell className="muiTableTr">{row.type}</TableCell>
              <TableCell className="muiTableTr">{row.svNo}</TableCell>
            </>
          )}
          {title === "Software" && (
            <>
              <TableCell className="muiTableTr">{row.serialNo}</TableCell>
              <TableCell className="muiTableTr">{row.softwareId}</TableCell>
              <TableCell className="muiTableTr">{row.softwareName}</TableCell>
              <TableCell className="muiTableTr">{row.userName}</TableCell>
              <TableCell className="muiTableTr">{row.password}</TableCell>
            </>
          )}

          {title === "Employee" && (
            <>
              <TableCell className="muiTableTr">{row.serialNo}</TableCell>
              <TableCell className="muiTableTr">{row.employeeId}</TableCell>
              <TableCell className="muiTableTr">{row.employeeName}</TableCell>
              <TableCell className="muiTableTr">{row.department}</TableCell>
              <TableCell className="muiTableTr">{row.type}</TableCell>
            </>
          )}

          {title !== "History" && (
            <TableCell className="muiTableTr d-flex justify-center">
              <Tooltip title="Unassign">
                <button
                  id="deleteBtn"
                  onClick={() => unassignFunctionality(row._id, title)}
                >
                  <img
                    src={
                      require("../../../assests/Images/Unassign.svg").default
                    }
                    alt="deleteIcon"
                  />
                </button>
              </Tooltip>
            </TableCell>
          )}
        </TableRow>
      ))}

      {title === "History" && (
        <>
          {data
            ? data.map((value: any) => (
                <TableRow key={value.serialNo}>
                  <TableCell
                    className={`muiTableTr ${
                      value.employee.isDeleted && "color-error"
                    }`}
                  >
                    {value.serialNo}
                  </TableCell>
                  <TableCell
                    className={`muiTableTr ${
                      value.employee.isDeleted && "color-error"
                    }`}
                  >
                    {value.employee.employeeId}
                  </TableCell>
                  <TableCell
                    className={`muiTableTr ${
                      value.employee.isDeleted && "color-error"
                    }`}
                  >
                    {value.employee.employeeName}
                  </TableCell>
                  <TableCell
                    className={`muiTableTr ${
                      value.employee.isDeleted && "color-error"
                    }`}
                  >
                    {value.employee.department}
                  </TableCell>
                  <TableCell
                    className={`muiTableTr ${
                      value.employee.isDeleted && "color-error"
                    }`}
                  >
                    {value.assignDate !== null ? (
                      <>
                        {moment(value.assignDate).format("DD/MM/YYYY")}{" "}
                        {moment(value.assignDate).format("LT")}
                      </>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                  <TableCell
                    className={`muiTableTr ${
                      value.employee.isDeleted && "color-error"
                    }`}
                  >
                    {value.unassignDate !== null ? (
                      <>
                        {moment(value.unassignDate).format("DD/MM/YYYY")}{" "}
                        {moment(value.unassignDate).format("LT")}
                      </>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                  <TableCell
                    className={`muiTableTr ${
                      value.employee.isDeleted && "color-error"
                    }`}
                  >
                    {value.employee.status}
                  </TableCell>
                </TableRow>
              ))
            : ""}
        </>
      )}
    </React.Fragment>
  );
};

export default TableDataFields;
