import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;
`;

const ContainerFluid = props => {
  return (
    <ThemeProvider theme={theme}>
      <Container {...props}>{props.children}</Container>
    </ThemeProvider>
  );
};
export default ContainerFluid;
