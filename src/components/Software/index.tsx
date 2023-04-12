import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";

// Component
import Table from "../Tables/TanstackTable/index";
import { SoftwareDetails } from "../Tables/FilterDetails";
import { ObjectToQueryParams } from "../../utils/ObjectToQueryParams";

// API
import { getAllSoftwares } from "../../utils/api/service/softwareService";

// Conetxt
import { DataContext } from "../../hooks/context/DataProvider";

const Software = () => {
  // Use Context
  const { softwareTableReload, softwareQuery }: any = useContext(DataContext);

  const [globalSoftwaresData, setGlobalSoftwaresData] = useState([]);

  const objString = ObjectToQueryParams(softwareQuery);

  // Getting Global Softwares Data
  useEffect(() => {
    (async () => {
      const { data } = await getAllSoftwares(
        objString.length > 1 ? objString : ""
      );
      setGlobalSoftwaresData(data?.data ?? []);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [softwareTableReload, objString.length]);

  return (
    <React.Fragment>
      <Box className="softwareTable">
        <Table
          data={globalSoftwaresData ?? []}
          FilterDetails={SoftwareDetails}
        />
      </Box>
    </React.Fragment>
  );
};

export default Software;
