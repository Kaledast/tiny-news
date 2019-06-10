import React from "react";
import Icon from "../components/LoadingIcon.js";
import Container from "../components/IconContainer.js";
import { ThemeProvider, withTheme } from "styled-components";
import theme from "../components/themes/theme.js";
import StyledLoadingTitle from "../components/LoadingTitle.js";

function LoadingIcon() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StyledLoadingTitle>loading...</StyledLoadingTitle>
        <Icon />
      </Container>
    </ThemeProvider>
  );
}

export default withTheme(LoadingIcon);
