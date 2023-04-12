import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FrontRoute } from "../../utils/api/routes/apiRoutes";

const Header = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const logoutFunctionality = () => {
    navigate(FrontRoute.LOGIN);
    localStorage.removeItem("MtInventory");
  };

  return (
    <React.Fragment>
      <Box className="header">
        <Box className="imageDiv">
          <Box className="d-flex align-items-center">
            <img
              className="mtLogo"
              src={require("../../assests/Images/MtLogo.svg").default}
              alt="closeIcon"
              onClick={() => navigate(FrontRoute.DASHBOARD)}
            />
            <Link to={FrontRoute.EMPLOYEE} style={{ textDecoration: "none" }}>
              <p
                className={`${
                  pathname === FrontRoute.EMPLOYEE && "active"
                } headerLink`}
              >
                Employee
              </p>
            </Link>
            <Link to={FrontRoute.HARDWARE} style={{ textDecoration: "none" }}>
              <p
                className={`${
                  pathname === FrontRoute.HARDWARE && "active"
                } headerLink`}
              >
                Hardware
              </p>
            </Link>
            <Link to={FrontRoute.SOFTWARE} style={{ textDecoration: "none" }}>
              <p
                className={`${
                  pathname === FrontRoute.SOFTWARE && "active"
                } headerLink`}
              >
                Software
              </p>
            </Link>
          </Box>
          <Button
            variant="contained"
            className="bg-dark"
            onClick={logoutFunctionality}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Header;
