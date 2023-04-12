import React, { useEffect } from "react";

const DebouncedInput = ({
  value: initialValue,
  onChange,
  columnFilters,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  columnFilters: any;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) => {
  const [value, setValue] = React.useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (columnFilters.length === 0) {
      setValue(initialValue);
    }
  }, [columnFilters, initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      className="inputFields"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
export default DebouncedInput;
