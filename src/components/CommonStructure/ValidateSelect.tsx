import { Box, InputLabel, MenuItem, Select, FormControl } from "@mui/material";
import "../../assests/Scss/customClass.scss";

const ValidateSelect = ({
  name,
  label,
  value,
  error,
  onBlur,
  onChange,
  data,
  nameFieldInData,
}: any) => {
  return (
    <FormControl
      variant="filled"
      className="forBorder muiSelectField"
      id="status"
    >
      <InputLabel className={`${error ? "color-error" : ""}`}>
        {label}
      </InputLabel>
      <Select
        onBlur={onBlur}
        className={`mb16 forBorder ${error ? "status" : ""}`}
        value={value}
        id="SelectStatus"
        name={name}
        onChange={onChange}
      >
        {data
          ? data.map((val: any, index: any) =>
              nameFieldInData ? (
                <MenuItem key={index} value={val.name}>
                  {val.name}
                </MenuItem>
              ) : (
                <MenuItem key={index} value={val}>
                  {val}
                </MenuItem>
              )
            )
          : ""}
      </Select>
      {error && (
        <Box className="position-relative customError">
          <span className="text-danger position-absolute">{error}</span>
        </Box>
      )}
    </FormControl>
  );
};

export default ValidateSelect;
