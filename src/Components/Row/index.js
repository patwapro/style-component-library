import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const Row = props => {
  return (
    <ThemeProvider theme={theme}>
      <Block {...props}>{props.children}</Block>
    </ThemeProvider>
  );
};
export default Row;
