import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useTheme } from "@emotion/react";

interface CustomTextFieldI{
    label: string;
    id: string;
    [x: string]: unknown
}

export default function CustomTextField({label, id, ...props}: CustomTextFieldI) {
  const theme = useTheme();
  const [value, setValue] = useState();

  const handlerChangeValue = (e) => {
    const text = e.target.value;
    setValue(text);
  };

  return (
    <TextField
      id={id}
      label={label}
      value={value}
      onChange={handlerChangeValue}
      sx={{
        width: "100%",
        fontSize: "2rem",
        color: theme.palette.background.default,
      }}
      {...props}
    />
  );
}
