import React from "react";
import { withRouter } from "react-router-dom";
import StyledHeader from "./components/StyledHeader.js";
import Div from "./components/Div.js";
import HeaderTitle from "./components/HeaderTitle.js";
import Logo from "./components/Logo.js";
import HeaderForm from "./components/HeaderForm.js";
import { ThemeProvider, withTheme } from "styled-components";
import theme from "./components/themes/theme.js";

function Header({ isAuthenticated, onSearchSelect, history }) {
  const handleSubmit = event => {
    event.preventDefault();
    const [input] = event.target.children;
    onSearchSelect(input.value);
    history.push(`/news/${input.value}`);
    input.value = "";
  };

  function LoginHeader() {
    const returnHeader = isAuthenticated ? (
      <ThemeProvider theme={theme}>
        <StyledHeader>
          <Div data-cy="header-icon-${icon.id}">
            <Logo />
            <HeaderTitle>Tiny News</HeaderTitle>
          </Div>
          <HeaderForm onSubmit={handleSubmit} searchtext="Search topic">
            <input type="text" placeholder="Search..." />
            <button type="submit">go!</button>
          </HeaderForm>
        </StyledHeader>
      </ThemeProvider>
    ) : (
      <ThemeProvider theme={theme}>
        <StyledHeader>
          <Div>
            <Logo />
            <HeaderTitle>Tiny News</HeaderTitle>
          </Div>
        </StyledHeader>
      </ThemeProvider>
    );

    return returnHeader;
  }
  return LoginHeader();
}

export default withTheme(withRouter(Header));
