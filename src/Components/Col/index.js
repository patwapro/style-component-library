import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import { size } from "../Size";

const Block = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  &.xs {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  &.xs-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  &.xs-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  &.xs-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  &.xs-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  &.xs-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  &.xs-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  &.xs-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  &.xs-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  &.xs-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  &.xs-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  &.xs-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  &.xs-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: ${size.mobile}) {
    &.sm {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    &.sm-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    &.sm-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    &.sm-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    &.sm-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    &.sm-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    &.sm-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    &.sm-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    &.sm-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    &.sm-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    &.sm-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    &.sm-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    &.sm-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media (min-width: ${size.tablet}) {
    &.md {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    &.md-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    &.md-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    &.md-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    &.md-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    &.md-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    &.md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    &.md-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    &.md-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    &.md-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    &.md-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    &.md-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    &.md-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media (min-width: ${size.laptop}) {
    &.lg {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    &.lg-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    &.lg-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    &.lg-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    &.lg-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    &.lg-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    &.lg-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    &.lg-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    &.lg-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    &.lg-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    &.lg-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    &.lg-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    &.lg-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media (min-width: ${size.desktop}) {
    &.xl {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    &.xl-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    &.xl-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    &.xl-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    &.xl-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    &.xl-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    &.xl-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    &.xl-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    &.xl-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    &.xl-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    &.xl-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    &.xl-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    &.xl-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
`;

const Col = props => {
  const { size } = props;
  return (
    <ThemeProvider theme={theme}>
      <Block className={size.join(" ")} {...props}>
        {props.children}
      </Block>
    </ThemeProvider>
  );
};
export default Col;
