import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { variant } from "styled-system";
import theme from "./theme";

const Button = styled("button")(
  {
    border: 0,
    outline: 0,
    position: "relative",
    userSelect: "none",
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: "5px",
    padding: "0px 30px",
    minWidth: "300px",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "40px",
    boxSizing: "border-box",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  },
  variant({
    prop: "variant",
    scale: "buttons"
  })
);

const ButtonStyle = props => {
  return (
    <ThemeProvider theme={theme}>
      <Button {...props}>{props.children}</Button>
    </ThemeProvider>
  );
};
export default ButtonStyle;
