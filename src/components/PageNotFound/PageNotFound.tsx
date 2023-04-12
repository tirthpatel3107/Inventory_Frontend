import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";
import { Box, Button } from "@mui/material";
import { FrontRoute } from "../../utils/api/routes/apiRoutes";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Box className="pageNotFound">
        <h1 className="mb-5">Oops... Page Not Found</h1>
        <Button
          variant="contained"
          className="bg-dark plr20 ptb15 mt-30"
          onClick={() => navigate(FrontRoute.DASHBOARD)}
        >
          Back To Dashboard
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default PageNotFound;
