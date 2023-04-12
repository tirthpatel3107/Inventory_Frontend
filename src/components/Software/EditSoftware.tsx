import React, { useState, useContext, useEffect } from "react";
import "../../assests/Scss/customClass.scss";

import { Box, Button, DialogContent } from "@mui/material";
import { toast } from "react-toastify";

// Component
import { softwareInitialValues } from "../../utils/form/InitialValue";
import ValidateTextField from "../CommonStructure/ValidateTextField";

// Context
import { DataContext } from "../../hooks/context/DataProvider";

// API
import {
  getSoftware,
  updateSoftware,
} from "../../utils/api/service/softwareService";

const EditSoftware = () => {
  // Use Context
  const { id, setOpen, softwareTableReload, setSoftwareTableReload }: any =
    useContext(DataContext);

  const [error, setError] = useState(softwareInitialValues);
  const [softwareData, setSoftwareData] = useState(softwareInitialValues);

  const handleChange = (e: any) => {
    setSoftwareData({ ...softwareData, [e.target.name]: e.target.value });
  };

  const handlevalidation = (e: any) => {
    e.target.value === ""
      ? setError({ ...error, [e.target.name]: "Required" })
      : setError({ ...error, [e.target.name]: "" });
  };

  // Setting Up Software Data
  useEffect(() => {
    (async () => {
      const { data } = await getSoftware(id);
      setSoftwareData(
        {
          softwareId: data?.data?.softwareId,
          softwareName: data?.data?.softwareName,
          userName: data?.data?.userName,
          password: data?.data?.password,
          status: data?.data?.status,
          notes: data?.data?.notes.replaceAll("\n", " "),
        } ?? {}
      );
    })();
  }, [id]);

  // Submit Functionality
  const onSubmit = async (event: any) => {
    event.preventDefault();

    await updateSoftware(id, {
      ...softwareData,
      softwareId: softwareData.softwareId.toUpperCase(),
      softwareName:
        softwareData.softwareName.charAt(0).toUpperCase() +
        softwareData.softwareName.substring(1),
      notes:
        softwareData.notes.charAt(0).toUpperCase() +
        softwareData.notes.substring(1).replaceAll("\n", " "),
    })
      .then(() => {
        setSoftwareTableReload(!softwareTableReload);
        setOpen(false);
        toast.success("Software Updated !!");
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
    <React.Fragment>
      <Box className="dialogHeading d-flex space-between align-items-center">
        <h3>Edit Software Details</h3>
      </Box>

      <DialogContent dividers>
        <form onSubmit={onSubmit}>
          <Box className="d-flex space-between softwareDetailsGrid">
            <ValidateTextField
              name="softwareId"
              label="Software ID"
              value={softwareData?.softwareId}
              onBlur={handlevalidation}
              onChange={handleChange}
              errortext={error.softwareId}
              textStyle="textuppercase"
            />

            <ValidateTextField
              name="softwareName"
              label="Software Name"
              value={softwareData?.softwareName}
              onBlur={handlevalidation}
              onChange={handleChange}
              errortext={error.softwareName}
              textStyle="textcapitalize"
            />

            <ValidateTextField
              name="userName"
              label="User Name"
              value={softwareData?.userName}
              onBlur={handlevalidation}
              onChange={handleChange}
              errortext={error.userName}
            />

            <ValidateTextField
              name="password"
              label="Password"
              value={softwareData?.password}
              onBlur={handlevalidation}
              onChange={handleChange}
              errortext={error.password}
            />

            <ValidateTextField
              name="notes"
              label="Other Assets"
              value={softwareData?.notes}
              onBlur={() => {}}
              onChange={handleChange}
              errortext=""
              textfield={true}
              textStyle="textcapitalize"
            />
          </Box>

          <Button
            id="SubmitButton"
            variant="contained"
            type="submit"
            disabled={
              softwareData?.softwareId === "" ||
              softwareData?.softwareName === "" ||
              softwareData?.userName === "" ||
              softwareData?.password === ""
            }
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </React.Fragment>
  );
};

export default EditSoftware;
