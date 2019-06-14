import React from 'react';
import { withRouter } from 'react-router-dom';
import StyledHeader from './components/styled_header/StyledHeader.js';
import HeaderLogoContainer from './components/styled_header/HeaderLogoContainer.js';
import HeaderTitle from './components/styled_header/HeaderTitle.js';
import HeaderLogo from './components/styled_header/HeaderLogo.js';
import HeaderForm from './components/styled_header/HeaderForm.js';
import { ThemeProvider, withTheme } from 'styled-components';
import theme from './components/themes/theme.js';

function Header({ isAuthenticated, onSearchSelect, history }) {
  const handleSubmit = event => {
    event.preventDefault();
    const [input] = event.target.children;
    onSearchSelect(input.value);
    history.push(`/news/${input.value}`);
    input.value = '';
  };

  function LoginHeader() {
    const returnHeader = isAuthenticated ? (
      <ThemeProvider theme={theme}>
        <StyledHeader>
          <HeaderLogoContainer data-cy={`headerIcon`}>
            <HeaderLogo />
            <HeaderTitle>Tiny News</HeaderTitle>
          </HeaderLogoContainer>
          <HeaderForm onSubmit={handleSubmit} searchtext='Search topic'>
            <input type='text' placeholder='Search...' />
            <button type='submit'>go!</button>
          </HeaderForm>
        </StyledHeader>
      </ThemeProvider>
    ) : (
      <ThemeProvider theme={theme}>
        <StyledHeader>
          <HeaderLogoContainer>
            <HeaderLogo />
            <HeaderTitle>Tiny News</HeaderTitle>
          </HeaderLogoContainer>
        </StyledHeader>
      </ThemeProvider>
    );

    return returnHeader;
  }
  return LoginHeader();
}

export default withTheme(withRouter(Header));
