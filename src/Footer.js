import React from "react";
import { Link, withRouter } from "react-router-dom";
import StyledFooter from "./components/StyledFooter.js";
import HomeButton from "./components/HomeButton.js";
import OptionsButton from "./components/OptionsButton.js";
import SavedButton from "./components/SavedButtonFooter.js";
import NewsButton from "./components/NewsButton.js";
import StyledNav from "./components/StyledNav.js";
import { ThemeProvider, withTheme } from "styled-components";
import theme from "./components/themes/theme.js";

function Footer({ location, isAuthenticated }) {
  function LoginFooter() {
    const returnFooter = isAuthenticated ? (
      <ThemeProvider theme={theme}>
        <StyledFooter>
          <StyledNav>
            {location.pathname === "/saved" ? (
              <Link to="/news">
                <NewsButton />
              </Link>
            ) : (
              <Link to="/saved">
                <SavedButton />
              </Link>
            )}
            <Link to="/home">
              <HomeButton />
            </Link>
            <Link to="/options">
              <OptionsButton />
            </Link>
          </StyledNav>
        </StyledFooter>
      </ThemeProvider>
    ) : (
      <ThemeProvider theme={theme}>
        <StyledFooter />
      </ThemeProvider>
    );

    return returnFooter;
  }
  return LoginFooter();
}

export default withTheme(withRouter(Footer));
