import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";

// Component
import Table from "../Tables/TanstackTable/index";
import { HardwareDetails } from "../Tables/FilterDetails";
import { ObjectToQueryParams } from "../../utils/ObjectToQueryParams";

// API
import { getAllHardwares } from "../../utils/api/service/hardwareService";

// Conetxt
import { DataContext } from "../../hooks/context/DataProvider";

const Hardware = () => {
  // Use Context
  const { hardwareTableReload, hardwareQuery }: any = useContext(DataContext);

  const [globalHardwaresData, setGlobalHardwaresData] = useState([]);

  const objString = ObjectToQueryParams(hardwareQuery);

  // Getting Global Hardwares Data
  useEffect(() => {
    (async () => {
      const { data } = await getAllHardwares(
        objString.length > 1 ? objString : ""
      );
      setGlobalHardwaresData(data?.data ?? []);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hardwareTableReload, objString.length]);

  return (
    <React.Fragment>
      <Box className="hardwareTable">
        <Table
          data={globalHardwaresData ?? []}
          FilterDetails={HardwareDetails}
        />
      </Box>
    </React.Fragment>
  );
};

export default Hardware;
