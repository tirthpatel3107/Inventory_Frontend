import { TextField } from "@mui/material";

const ValidateTextField = ({
  name,
  label,
  value,
  onBlur,
  onChange,
  errortext,
  textfield,
  type,
  textStyle,
}: any) => {
  return (
    <TextField
      name={name}
      label={label}
      value={value}
      className={`mb16 muiTextField ${textStyle}`}
      variant="filled"
      autoComplete="off"
      type={type ? "number" : "text"}
      multiline={textfield}
      rows={textfield ? 2 : 1}
      onBlur={onBlur}
      onChange={onChange}
      error={Boolean(errortext)}
      helperText={String(errortext)}
    />
  );
};

export default ValidateTextField;
