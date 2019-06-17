import React from 'react';
import LoadingIcon from '../components/styled_loading/LoadingIcon.js';
import LoadingContainer from '../components/styled_loading/LoadingContainer.js';
import { ThemeProvider, withTheme } from 'styled-components';
import theme from '../components/themes/theme.js';

function LoaderIcon() {
  return (
    <ThemeProvider theme={theme}>
      <LoadingContainer>
        <h1>loading...</h1>
        <LoadingIcon />
      </LoadingContainer>
    </ThemeProvider>
  );
}

export default withTheme(LoaderIcon);
