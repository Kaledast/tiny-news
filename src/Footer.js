import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import StyledFooter from './components/styled_footer/StyledFooter.js';
import FooterHomeButton from './components/styled_footer/FooterHomeButton.js';
import FooterOptionsButton from './components/styled_footer/FooterOptionsButton.js';
import FooterSavedButton from './components/styled_footer/FooterSavedButton.js';
import FooterNewsButton from './components/styled_footer/FooterNewsButton.js';
import FooterNav from './components/styled_footer/FooterNav.js';
import { ThemeProvider, withTheme } from 'styled-components';
import theme from './components/themes/theme.js';

function Footer({ location, isAuthenticated }) {
  function LoginFooter() {
    const returnFooter = isAuthenticated ? (
      <ThemeProvider theme={theme}>
        <StyledFooter>
          <FooterNav>
            {location.pathname === '/saved' ? (
              <Link to='/news'>
                <FooterNewsButton />
              </Link>
            ) : (
              <Link to='/saved'>
                <FooterSavedButton />
              </Link>
            )}
            <Link to='/home'>
              <FooterHomeButton />
            </Link>
            <Link to='/options'>
              <FooterOptionsButton />
            </Link>
          </FooterNav>
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
