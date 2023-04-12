import React, { useState, useContext } from "react";
import "../../assests/Scss/customClass.scss";

import { Box, Button, TextField, DialogContent } from "@mui/material";
import { toast } from "react-toastify";

// For Date
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// Component
import { hardwareInitialValues } from "../../utils/form/InitialValue";
import ValidateTextField from "../CommonStructure/ValidateTextField";
import ValidateSelect from "../CommonStructure/ValidateSelect";

// Context
import { DataContext } from "../../hooks/context/DataProvider";

//API
import { createHardware } from "../../utils/api/service/hardwareService";

const AddHardware = () => {
  // Use Context
  const { setOpen, hardwareTableReload, setHardwareTableReload }: any =
    useContext(DataContext);

  const [error, setError] = useState<any>({
    ...hardwareInitialValues,
    date: "",
  });
  const [hardwareData, setHardwareData] = useState<any>(hardwareInitialValues);

  const handleChange = (e: any) => {
    setHardwareData({ ...hardwareData, [e.target.name]: e.target.value });
  };

  const handlevalidation = (e: any) => {
    e.target.value === ""
      ? setError({ ...error, [e.target.name]: "Required" })
      : setError({ ...error, [e.target.name]: "" });
  };

  // Submit Functionality
  const onSubmit = async (event: any) => {
    event.preventDefault();

    await createHardware({
      ...hardwareData,
      hardwareId: hardwareData.hardwareId.toUpperCase(),
      hardwareName:
        hardwareData.hardwareName.charAt(0).toUpperCase() +
        hardwareData.hardwareName.substring(1),
      notes:
        hardwareData.notes.charAt(0).toUpperCase() +
        hardwareData.notes.substring(1).replace("\n", " "),
      date: hardwareData?.date !== null ? new Date(hardwareData?.date) : null,
      status: "Unassign",
    })
      .then(() => {
        setHardwareTableReload(!hardwareTableReload);
        setOpen(false);
        toast.success("Hardware Added !!");
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
        <h3>Add Hardware Details</h3>
      </Box>
      <DialogContent dividers>
        <form onSubmit={onSubmit}>
          <Box className="d-flex space-between hardwareDetailsGrid">
            <ValidateTextField
              name="hardwareId"
              label="Hardware ID"
              value={hardwareData?.hardwareId}
              onBlur={handlevalidation}
              onChange={handleChange}
              errortext={error.hardwareId}
              textStyle="textuppercase"
            />

            <ValidateTextField
              name="hardwareName"
              label="Hardware Name"
              value={hardwareData?.hardwareName}
              onBlur={handlevalidation}
              onChange={handleChange}
              errortext={error.hardwareName}
              textStyle="textcapitalize"
            />

            <ValidateTextField
              name="svNo"
              label="SV Number"
              value={hardwareData?.svNo}
              onBlur={handlevalidation}
              onChange={handleChange}
              errortext={error.svNo}
            />

            <ValidateSelect
              name="type"
              label="Type"
              value={hardwareData?.type}
              error={error.type}
              onBlur={handlevalidation}
              onChange={handleChange}
              data={[
                "Laptop",
                "Desktop",
                "Keyboard",
                "Mouse",
                "Headphone",
                "Tablet",
                "Mobile",
                "Ethernet Convertor",
                "HDD",
                "SSD",
                "Adaptor",
                "AR/VR",
                "Testing Device",
              ]}
            />

            <ValidateSelect
              name="condition"
              label="Condition"
              value={hardwareData?.condition}
              error={false}
              onBlur={() => {}}
              onChange={handleChange}
              data={["Working", "Damaged"]}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Purchase Date"
                className="uniqueDate"
                inputFormat="DD/MM/YYYY"
                value={hardwareData?.date}
                onChange={(newValue: any) => {
                  if (newValue == null) {
                    setHardwareData({ ...hardwareData, date: null });
                    // setError({ ...error, date: "Required" });
                  } else {
                    setHardwareData({
                      ...hardwareData,
                      date: newValue?.$d,
                    });
                    // setError({ ...error, date: "" });
                  }
                }}
                renderInput={(params) => (
                  <TextField
                    id="date"
                    variant="filled"
                    className="mb16"
                    {...params}
                    error={Boolean(error.date)}
                    helperText={String(error.date)}
                  />
                )}
              />
            </LocalizationProvider>

            <ValidateTextField
              name="notes"
              label="Other Assets "
              value={hardwareData?.notes}
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
              hardwareData?.hardwareId === "" ||
              hardwareData?.hardwareName === "" ||
              hardwareData?.svNo === "" ||
              hardwareData?.type === ""
            }
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </React.Fragment>
  );
};

export default AddHardware;
