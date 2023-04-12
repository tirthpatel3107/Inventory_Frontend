import React, { useState, useEffect, useContext } from "react";
import "../../assests/Scss/customClass.scss";

import { Box, Button, DialogContent } from "@mui/material";
import { toast } from "react-toastify";

// Component
import { employeeInitialValues } from "../../utils/form/InitialValue";
import ValidateTextField from "../CommonStructure/ValidateTextField";
import ValidateSelect from "../CommonStructure/ValidateSelect";

// API
import {
  getEmployeeList,
  createEmployee,
} from "../../utils/api/service/employeeService";

// Context
import { DataContext } from "../../hooks/context/DataProvider";

const AddEmployee = () => {
  // Use Context
  const { setOpen, employeeTableReload, setEmployeeTableReload }: any =
    useContext(DataContext);

  const [error, setError] = useState(employeeInitialValues);
  const [employeeData, setEmployeeData] = useState(employeeInitialValues);
  const [employeesList, setEmployeesList] = useState([]);

  const handleChange = (e: any) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  const handlevalidation = (e: any) => {
    e.target.value === ""
      ? setError({ ...error, [e.target.name]: "Required" })
      : setError({ ...error, [e.target.name]: "" });
  };

  // Getting Employee List Dropdown Details - RM / PM
  useEffect(() => {
    (async () => {
      const { data } = await getEmployeeList();
      setEmployeesList(data?.data ?? []);
    })();
  }, []);

  // Submit Functionality
  const onSubmit = async (event: any) => {
    event.preventDefault();

    await createEmployee({
      ...employeeData,
      employeeId: employeeData.employeeId.toUpperCase(),
      employeeName:
        employeeData.employeeName.charAt(0).toUpperCase() +
        employeeData.employeeName.substring(1),
    })
      .then(() => {
        setEmployeeTableReload(!employeeTableReload);
        setOpen(false);
        toast.success("Employee Added !!");
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
      <Box className="dialogHeading">
        <h3>Add Employee Details</h3>
      </Box>

      <DialogContent dividers>
        <form onSubmit={onSubmit}>
          <Box className="d-flex space-between personalDetailsGrid">
            <ValidateTextField
              name="employeeId"
              label="Employee ID"
              value={employeeData?.employeeId}
              onBlur={handlevalidation}
              onChange={handleChange}
              errortext={error.employeeId}
              textStyle="textuppercase"
            />

            <ValidateTextField
              name="employeeName"
              label="Employee Name"
              value={employeeData?.employeeName}
              onBlur={handlevalidation}
              onChange={handleChange}
              errortext={error.employeeName}
              textStyle="textcapitalize"
            />

            <ValidateSelect
              name="department"
              label="Department"
              value={employeeData?.department}
              error={error.department}
              onBlur={handlevalidation}
              onChange={handleChange}
              data={[
                "PHP",
                "DotNet",
                "Mobile",
                "Business Development",
                "HR",
                "Account",
              ]}
            />

            <ValidateTextField
              name="phone"
              label="Phone Number"
              value={employeeData?.phone}
              onBlur={() => {}}
              onChange={handleChange}
              errortext={error.phone}
              error={false}
              type={true}
            />

            <ValidateSelect
              name="status"
              label="Status"
              value={employeeData?.status}
              error={false}
              onBlur={() => {}}
              onChange={handleChange}
              data={["Active", "Inactive"]}
            />

            <ValidateSelect
              name="type"
              label="Type"
              value={employeeData?.type}
              error={error.type}
              onBlur={handlevalidation}
              onChange={handleChange}
              data={["WFH", "WFO"]}
            />

            <ValidateSelect
              name="rm"
              label="Reporting Manager"
              value={employeeData?.rm}
              error={false}
              onBlur={() => {}}
              onChange={handleChange}
              data={employeesList}
              nameFieldInData={true}
            />

            <ValidateSelect
              name="pm"
              label="Project Manager"
              value={employeeData?.pm}
              error={false}
              onBlur={() => {}}
              onChange={handleChange}
              data={employeesList}
              nameFieldInData={true}
            />
          </Box>

          <Button
            id="SubmitButton"
            variant="contained"
            type="submit"
            disabled={
              employeeData?.employeeId === "" ||
              employeeData?.employeeName === "" ||
              employeeData?.department === "" ||
              employeeData?.type === ""
            }
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </React.Fragment>
  );
};

export default AddEmployee;
