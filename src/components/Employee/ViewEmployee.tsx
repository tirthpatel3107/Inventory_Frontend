import React, { useState, useEffect, useContext } from "react";
import { Box, DialogContent } from "@mui/material";
import { toast } from "react-toastify";

// Component
import MuiTable from "../Tables/MuiTable";
// import ReadonlyTextField from "../CommonStructure/ReadonlyTextField";
import UnassignSelectMenu from "../CommonStructure/UnassignSelectMenu";

// Context
import { DataContext } from "../../hooks/context/DataProvider";

// API
import { getEmployee } from "../../utils/api/service/employeeService";
import {
  hardwareAssign,
  getAllUnassignHardwares,
} from "../../utils/api/service/hardwareService";
import {
  softwareAssign,
  getAllUnassignSoftwares,
} from "../../utils/api/service/softwareService";

const ViewEmployee = () => {
  // Use Context
  const { id, employeePopupTableReload, setEmployeePopupTableReload }: any =
    useContext(DataContext);

  const [singleEmployeeData, setSingleEmployeeData] = useState({});
  const [allUnassignedHardwares, setAllunassignedHardwares] = useState([]);
  const [allUnassignedSoftwares, setAllunassignedSoftwares] = useState([]);

  // Get Single Employee Data
  useEffect(() => {
    (async () => {
      const { data } = await getEmployee(id);
      setSingleEmployeeData(data?.data ?? {});
    })();
  }, [id, employeePopupTableReload]);

  // Get All Unassigned Hardware Data
  useEffect(() => {
    (async () => {
      const { data } = await getAllUnassignHardwares();
      setAllunassignedHardwares(data?.data ?? []);
    })();
  }, [employeePopupTableReload]);

  // Get All Unassigned Software Data
  useEffect(() => {
    (async () => {
      const { data } = await getAllUnassignSoftwares();
      setAllunassignedSoftwares(data?.data ?? []);
    })();
  }, [employeePopupTableReload]);

  const {
    _id,
    employeeId,
    employeeName,
    // department,
    // phone,
    // status,
    // type,
    // rm,
    // pm,
    assignHardwares,
    assignSoftwares,
  }: any = singleEmployeeData;

  const [hardwareId, setHardwareId] = useState("");
  const [softwareId, setSoftwareId] = useState("");

  // Put - Assign Hardware Functionality
  const hardwareAssignFunctionality = async () => {
    await hardwareAssign(hardwareId, { emmployeeID: _id }).then(() => {
      setEmployeePopupTableReload(!employeePopupTableReload);
      setHardwareId("");
      toast.success("Hardware Assigned !!");
    });
  };

  // Put - Assign Software Functionality
  const softwareAssignFunctionality = async () => {
    await softwareAssign(softwareId, { emmployeeID: _id }).then(() => {
      setEmployeePopupTableReload(!employeePopupTableReload);
      setSoftwareId("");
      toast.success("Software Assigned !!");
    });
  };

  return (
    <React.Fragment>
      <Box className="dialogHeading">
        <h3>
          Employee Information -{" "}
          <span className="color-error">
            {employeeName} ({employeeId})
          </span>
        </h3>
      </Box>

      <DialogContent dividers>
        {/* <Box className="ReadOnlyBoxes d-flex">
          <ReadonlyTextField label="Employee ID" value={employeeId} />
          <ReadonlyTextField label="Employee Name" value={employeeName} />
          <ReadonlyTextField label="Department" value={department} />
          <ReadonlyTextField label="Phone Number" value={phone} />
          <ReadonlyTextField label="Type" value={type} />
          <ReadonlyTextField label="Status" value={status} />
          <ReadonlyTextField label="Reporting Manager" value={rm} />
          <ReadonlyTextField label="Project Manager" value={pm} />
        </Box> */}

        <Box className="d-flex align-items-center space-between mb10">
          <h3>Allocated Hardwares</h3>
          <UnassignSelectMenu
            value={hardwareId}
            setValue={setHardwareId}
            data={allUnassignedHardwares}
            allocationFunction={hardwareAssignFunctionality}
            label="Hardware"
          />
        </Box>
        <MuiTable rows={assignHardwares ?? []} title="Hardware" />

        <Box className="d-flex align-items-center space-between mb10 mt-30 ">
          <h3>Allocated Softwares</h3>
          <UnassignSelectMenu
            value={softwareId}
            setValue={setSoftwareId}
            data={allUnassignedSoftwares}
            allocationFunction={softwareAssignFunctionality}
            label="Software"
          />
        </Box>
        <MuiTable rows={assignSoftwares ?? []} title="Software" />
      </DialogContent>
    </React.Fragment>
  );
};

export default ViewEmployee;
