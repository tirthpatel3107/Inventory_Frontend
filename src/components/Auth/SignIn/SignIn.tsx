import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FrontRoute } from "../../../utils/api/routes/apiRoutes";
// API
import { login } from "../../../utils/api/service/authService";

const SignIn = () => {
  const navigate = useNavigate();

  const [typePassword, setTypePassword] = useState(true);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const handleChange = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();

    await login(userData)
      .then((data) => {
        toast.success("Login Successfully !!");
        localStorage.setItem("MtInventory", data.data.token);
        navigate(FrontRoute.DASHBOARD);
        setTimeout(() => {
          localStorage.removeItem("MtInventory");
          navigate(FrontRoute.LOGIN);
        }, 86400000);
      })
      .catch((error) => {
        if (error.response.data.error.status === 500) {
          toast.error("Internal Server Error");
        } else {
          toast.error(error.response.data.error.message);
        }
      });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <p className="fw-600 Inputheading">Email</p>
        <TextField
          name="email"
          className="w-100"
          variant="filled"
          autoComplete="off"
          onChange={handleChange}
          value={userData?.email}
        />

        <p className="fw-600 Inputheading">Password</p>
        <Box className="position-relative">
          <TextField
            name="password"
            type={typePassword ? "password" : "text"}
            value={userData?.password}
            className="w-100"
            variant="filled"
            onChange={handleChange}
            autoComplete="off"
          />
          {typePassword ? (
            <img
              className="passwordEye"
              src={require("../../../assests/Images/Visible.svg").default}
              alt="closeIcon"
              onClick={() => setTypePassword(false)}
            />
          ) : (
            <img
              className="passwordEye"
              src={require("../../../assests/Images/Invisible.svg").default}
              alt="closeIcon"
              onClick={() => setTypePassword(true)}
            />
          )}
        </Box>

        <Button className="w-100 AuthButton" type="submit" variant="contained">
          Login
        </Button>
      </form>
    </>
  );
};

export default SignIn;
