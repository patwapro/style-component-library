import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { variant } from "styled-system";
import theme from "./theme";

const Heading = styled("div")(
  {
    margin: "0rem",
    fontFamily: "inherit",
    padding: "0rem"
  },
  variant({
    prop: "variant",
    scale: "text"
  })
);

const Typography = props => {
  const { variant } = props;
  return (
    <ThemeProvider theme={theme}>
      <Heading as={variant} {...props}>
        {props.children}
      </Heading>
    </ThemeProvider>
  );
};
export default Typography;
