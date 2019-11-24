import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import { size } from "../Size";

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;
  @media (min-width: ${size.mobile}) {
    max-width: 540px;
  }
  @media (min-width: ${size.tablet}) {
    max-width: 720px;
  }
  @media (min-width: ${size.laptop}) {
    max-width: 960px;
  }
  @media (min-width: ${size.desktop}) {
    max-width: 1140px;
  }
`;

const ContainerBlock = props => {
  return (
    <ThemeProvider theme={theme}>
      <Container {...props}>{props.children}</Container>
    </ThemeProvider>
  );
};
export default ContainerBlock;
