import React, { useState, useEffect, useContext } from "react";
import "../../assests/Scss/customClass.scss";

import { Box, DialogContent } from "@mui/material";

// Component
import MuiTable from "../Tables/MuiTable";
// import ReadonlyTextField from "../CommonStructure/ReadonlyTextField";

// Context
import { DataContext } from "../../hooks/context/DataProvider";

// API
import { getHardware } from "../../utils/api/service/hardwareService";

const ViewHardware = () => {
  // Use Context
  const { id, hardwarePopupTableReload }: any = useContext(DataContext);

  const [singleHardwareData, setSingleHardwareData] = useState({});

  // Get Single Hardware Data
  useEffect(() => {
    (async () => {
      const { data } = await getHardware(id);
      setSingleHardwareData(data?.data ?? []);
    })();
  }, [id, hardwarePopupTableReload]);

  const {
    hardwareId,
    hardwareName,
    // svNo,
    date,
    // notes,
    // status,
    type,
    // condition,
    employeesWithAccess,
    employeeHistory,
  }: any = singleHardwareData;

  const dateConverter = (date: any) => {
    date.setDate(date.getDate() + 1);

    const stringDate = date.toISOString();

    const day = stringDate.slice(8, 10);
    const month = stringDate.slice(5, 7);
    const year = stringDate.slice(0, 4);

    const result = `${day}/${month}/${year}`;
    return result;
  };

  return (
    <React.Fragment>
      <Box className="dialogHeading d-flex space-between">
        <h3>
          Hardware Information -{" "}
          <span className="color-error">
            {hardwareName} {type} ({hardwareId})
          </span>
        </h3>
        <h3>
          Purchase Date :{" "}
          <span className="color-error">
            {typeof date !== "string" ? "-" : dateConverter(new Date(date))}
          </span>
        </h3>
      </Box>

      <DialogContent dividers>
        {/* <Box className="ReadOnlyBoxes d-flex">
          <ReadonlyTextField label="Hardware ID" value={hardwareId} />
          <ReadonlyTextField label="Hardware Name" value={hardwareName} />
          <ReadonlyTextField label="SV Number" value={svNo} />
          <ReadonlyTextField label="Status" value={status} />
          <ReadonlyTextField
            label="Date"
            value={
              typeof date !== "string" ? "" : dateConverter(new Date(date))
            }
          />
          <ReadonlyTextField label="Notes" value={notes} />
        </Box> */}

        <h3 className="m0 mb10">Employee Details</h3>
        <MuiTable rows={employeesWithAccess ?? []} title="Employee" />

        <h3 className="m0 mt10 mb10">Allocation History</h3>
        <MuiTable rows={employeeHistory ?? []} title="History" />

        <br />
      </DialogContent>
    </React.Fragment>
  );
};

export default ViewHardware;
