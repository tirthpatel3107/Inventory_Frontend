import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { FrontRoute } from "../../utils/api/routes/apiRoutes";

// Context
import { DataContext } from "../../hooks/context/DataProvider";

const Navbar = () => {
  const { pathname } = useLocation();
  // Context
  const { setOpen, setDailogBoxName }: any = useContext(DataContext);

  return (
    <React.Fragment>
      <Box className="navbar">
        <Box>
          {pathname === FrontRoute.EMPLOYEE && (
            <h3 className="m0">Employee List</h3>
          )}
          {pathname === FrontRoute.HARDWARE && (
            <h3 className="m0">Hardware List</h3>
          )}
          {pathname === FrontRoute.SOFTWARE && (
            <h3 className="m0">Software List</h3>
          )}
        </Box>

        <Box>
          <Button
            className="bg-dark color-light"
            onClick={() => {
              setOpen(true);
              setDailogBoxName(`Add${pathname.slice(24)}`);
            }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
