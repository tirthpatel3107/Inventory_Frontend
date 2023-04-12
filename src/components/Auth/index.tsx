import "./Auth.scss";

import { Box } from "@mui/material";

// Component
import SignIn from "./SignIn/SignIn";

const Auth = () => {
  return (
    <Box className="AuthWrapper">
      <Box className="Box">
        <Box className="ImageWrapper">
          <img
            src={require("../../assests/Images/MtLogo.svg").default}
            alt="closeIcon"
          />
        </Box>
        <SignIn />

        <p className="text-center fs-18 copyRight">
          Copyright © {new Date().getFullYear()} ManekTech. All rights reserved.
        </p>
      </Box>
    </Box>
  );
};

export default Auth;

