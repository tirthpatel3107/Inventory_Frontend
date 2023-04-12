import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { FrontRoute } from "./utils/api/routes/apiRoutes";

// Component
import Auth from "./components/Auth/index";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";

import Dashboard from "./components/Dashboard";
import Employee from "./components/Employee";
import Hardware from "./components/Hardware";
import Software from "./components/Software";
import PageNotFound from "./components/PageNotFound/PageNotFound";

import AlertDialog from "./components/Dialog/index";
import Toast from "./components/Toast/Toast";

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const token = localStorage.getItem("MtInventory");

  useEffect(() => {
    if (token === null) {
      navigate(FrontRoute.LOGIN);
      localStorage.removeItem("MtInventory");
    }

    if (token && pathname === FrontRoute.LOGIN) {
      navigate(FrontRoute.DASHBOARD);
    }
  }, [token, navigate, pathname]);

  return (
    <React.Fragment>
      {token ? (
        <>
          <Box className="mainDiv">
            <Header />
            <Box className="spacing"></Box>

            <Routes>
              <Route path={FrontRoute.DASHBOARD} element={<Dashboard />} />
            </Routes>
            <Box className="containerWrapper">
              {(pathname === FrontRoute.EMPLOYEE ||
                pathname === FrontRoute.HARDWARE ||
                pathname === FrontRoute.SOFTWARE) && <Navbar />}
              <Routes>
                <Route path={FrontRoute.EMPLOYEE} element={<Employee />} />
                <Route path={FrontRoute.HARDWARE} element={<Hardware />} />
                <Route path={FrontRoute.SOFTWARE} element={<Software />} />
              </Routes>
            </Box>
            {!(
              pathname === FrontRoute.DASHBOARD ||
              pathname === FrontRoute.EMPLOYEE ||
              pathname === FrontRoute.HARDWARE ||
              pathname === FrontRoute.SOFTWARE
            ) && <PageNotFound />}
            <AlertDialog />
          </Box>
        </>
      ) : (
        <>
          <Routes>
            <Route path={FrontRoute.LOGIN} element={<Auth />} />
            <Route path="*" element={<Navbar />} />
          </Routes>
        </>
      )}
      <Toast />
    </React.Fragment>
  );
};

export default App;
