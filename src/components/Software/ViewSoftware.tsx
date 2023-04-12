import React, { useState, useEffect, useContext } from "react";

import { Box, DialogContent } from "@mui/material";

// Component
import MuiTable from "../Tables/MuiTable";
// import ReadonlyTextField from "../CommonStructure/ReadonlyTextField";

// Context
import { DataContext } from "../../hooks/context/DataProvider";

// API
import { getSoftware } from "../../utils/api/service/softwareService";

const ViewSoftware = () => {
  // Use Context
  const { id, softwarePopupTableReload }: any = useContext(DataContext);

  const [singleSoftwareData, setSingleSoftwareData] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await getSoftware(id);
      setSingleSoftwareData(data?.data ?? []);
    })();
  }, [id, softwarePopupTableReload]);

  const {
    softwareId,
    softwareName,
    // userName,
    // password,
    // notes,
    // status,
    employeesWithAccess,
    employeeHistory,
  }: any = singleSoftwareData;

  return (
    <React.Fragment>
      <Box className="dialogHeading">
        <h3>
          Software Information -{" "}
          <span className="color-error">
            {softwareName} ({softwareId})
          </span>
        </h3>
      </Box>

      <DialogContent dividers>
        {/* <Box className="ReadOnlyBoxes d-flex">
          <ReadonlyTextField label="Software ID" value={softwareId} />
          <ReadonlyTextField label="Software Name" value={softwareName} />
          <ReadonlyTextField label="Username" value={userName} />
          <ReadonlyTextField label="Password" value={password} />
          <ReadonlyTextField label="Status" value={status} />
          <ReadonlyTextField label="Notes" value={notes} />
        </Box> */}

        <h3 className="m0 mb10">Employee Details</h3>
        <MuiTable rows={employeesWithAccess ?? []} title="Employee" />

        <h3 className="m0 mt10 mb10">Allocation History</h3>
        <MuiTable rows={employeeHistory ?? []} title="History" />
      </DialogContent>
    </React.Fragment>
  );
};

export default ViewSoftware;
