import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const UnassignSelectMenu = ({
  value,
  setValue,
  data,
  allocationFunction,
  label,
}: any) => {
  return (
    <Box className="d-flex align-items-center ">
      <FormControl variant="filled" className="assignDropdown">
        <InputLabel>{label} Name (ID)</InputLabel>
        <Select
          value={value}
          id="SelectStatus"
          name="status"
          onChange={(e) => setValue(e.target.value)}
        >
          {data
            ? data.map((val: any) => (
                <MenuItem value={val.ObjectId} key={val.ObjectId}>
                  {label === "Hardware" &&
                    `${val.hardwareName} (${val.hardwareId})`}
                  {label === "Software" &&
                    `${val.softwareName} (${val.softwareId})`}
                </MenuItem>
              ))
            : ""}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        className="Navbutton ml-5"
        id={`${value === "" ? "SubmitButtonDisable" : "SubmitButton"}`}
        onClick={allocationFunction}
      >
        Assign
      </Button>
    </Box>
  );
};

export default UnassignSelectMenu;
