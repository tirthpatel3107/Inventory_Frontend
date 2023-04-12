import { TextField } from "@mui/material";

const ReadonlyTextField = ({ label, value }: any) => {
  return (
    <TextField
      className="textField"
      label={label}
      value={value ?? ""}
      InputProps={{
        readOnly: true,
      }}
      variant="filled"
    />
  );
};

export default ReadonlyTextField;
