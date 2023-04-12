import React, { useContext } from "react";
import "./Table.scss";

import { useLocation } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Swal from "sweetalert2";

// Context
import { DataContext } from "../../../hooks/context/DataProvider";

// API
import { deleteEmployee } from "../../../utils/api/service/employeeService";
import { deleteHardware } from "../../../utils/api/service/hardwareService";
import { deleteSoftware } from "../../../utils/api/service/softwareService";
import { FrontRoute } from "../../../utils/api/routes/apiRoutes";

const DataFields = ({ table, allData, flexRender }: any) => {
  const {
    setOpen,
    setDailogBoxName,
    setId,
    employeeTableReload,
    setEmployeeTableReload,
    hardwareTableReload,
    setHardwareTableReload,
    softwareTableReload,
    setSoftwareTableReload,
  }: any = useContext(DataContext);

  const { pathname } = useLocation();

  const swalInit = Swal.mixin({
    customClass: {
      confirmButton: "confirmButton",
      cancelButton: "cancelButton",
    },
    buttonsStyling: false,
  });

  const deleteFunctionality = (e: any) => {
    swalInit
      .fire({
        title: `Are you sure?`,
        text: `Do you want to delete 
        ${
          pathname === FrontRoute.EMPLOYEE
            ? `${e.employeeName} (${e.employeeId})`
            : pathname === FrontRoute.HARDWARE
            ? `${e.hardwareName} (${e.hardwareId})`
            : pathname === FrontRoute.SOFTWARE
            ? `${e.softwareName} (${e.softwareId})`
            : ""
        }?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed && pathname === FrontRoute.EMPLOYEE) {
          await deleteEmployee(e._id);
          setEmployeeTableReload(!employeeTableReload);
          swalInit.fire("Deleted!", "", "success");
        }
        if (result.isConfirmed && pathname === FrontRoute.HARDWARE) {
          await deleteHardware(e._id);
          setHardwareTableReload(!hardwareTableReload);
          swalInit.fire("Deleted!", "", "success");
        }
        if (result.isConfirmed && pathname === FrontRoute.SOFTWARE) {
          await deleteSoftware(e._id);
          setSoftwareTableReload(!softwareTableReload);
          swalInit.fire("Deleted!", "", "success");
        }
      });
  };

  return (
    <React.Fragment>
      <table className="main_table">
        <thead>
          {table.getHeaderGroups().map((headerGroup: any) => (
            <tr key={headerGroup.id} className="trOfTableTh">
              {headerGroup.headers.map((header: any) => {
                return (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "customTableHeading"
                              : "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: "↓",
                            desc: "↑",
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      </>
                    )}
                  </th>
                );
              })}
              <th>Actions</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row: any) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell: any) => {
                  return (
                    <td key={cell.id} className="customtableTd">
                      <span
                        className={`${
                          flexRender(cell.getContext().row.original.notes) ===
                            "Unassign" && "color-error"
                        }`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </span>
                    </td>
                  );
                })}
                <td className="actionsTd customtableTd">
                  <Tooltip title="View">
                    <button
                      id="viewBtn"
                      onClick={() => {
                        setOpen(true);
                        setDailogBoxName(`View${pathname.slice(24)}`);
                        setId(row.original._id);
                      }}
                    >
                      <img
                        src={
                          require("../../../assests/Images/EyeIcon.svg").default
                        }
                        alt="personalDetailIcon"
                      />
                    </button>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <button
                      id="editBtn"
                      onClick={() => {
                        setOpen(true);
                        setDailogBoxName(`Edit${pathname.slice(24)}`);
                        setId(row.original._id);
                      }}
                    >
                      <img
                        src={
                          require("../../../assests/Images/Edit.svg").default
                        }
                        alt="hardwareIcon"
                      />
                    </button>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <button
                      id="deleteBtn"
                      onClick={() => deleteFunctionality(row.original)}
                    >
                      <img
                        src={
                          require("../../../assests/Images/Trash.svg").default
                        }
                        alt="deleteIcon"
                      />
                    </button>
                  </Tooltip>
                  {/* <Tooltip title="Un-assign">
                    <button id="unAssignBtn">
                      <img
                        src={
                          require("../../../assests/Images/Cross-white.svg")
                            .default
                        }
                        alt="unAssignIcon"
                      />
                    </button>
                  </Tooltip> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/************ For No data Available ***************/}
      {allData === 0 && (
        <>
          <h3 className="mt15 mb15 no_data_available fw-300">
            No Data is Available
          </h3>
        </>
      )}
    </React.Fragment>
  );
};

export default DataFields;
