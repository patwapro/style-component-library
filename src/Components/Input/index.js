import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { variant } from "styled-system";
import theme from "./theme";

const Input = styled("input")({
  backgroundColor: "transparent",
  width: "100%",
  boxSizing: "border-box",
  height: "auto",
  position: "relative",
  borderRadius: "5px",
  outline: "none",
  color: "#7C8894",
  border: "1px solid #C0C9D2",
  fontSize: "16px",
  fontWeight: "400",
  padding: "10px 12px",
  "&:focus": {
    border: "1px solid #04B3C0"
  },
  "&::placeholder": {
    color: "#C0C9D2"
  },
  "&:disabled": {
    border: "1px solid rgba(124, 136, 148, 0.2)",
    color: "rgba(124, 136, 148, 0.8)",
    backgroundColor: "rgba(192, 201, 210, 0.2)"
  }
});

const InputField = props => {
  return (
    <ThemeProvider theme={theme}>
      <Input {...props} />
    </ThemeProvider>
  );
};
export default InputField;
