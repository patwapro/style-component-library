import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

const Card = styled("div")({
  borderRadius: "5px",
  backgroundColor: "#fff",
  border: "1px solid #d8d8d8",
  padding: "15px"
});

const BasicCard = props => {
  return (
    <ThemeProvider theme={theme}>
      <Card {...props}>{props.children}</Card>
    </ThemeProvider>
  );
};
export default BasicCard;
