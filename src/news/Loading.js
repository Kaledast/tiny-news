import React from 'react';
import LoadingIcon from '../components/styled_loading/LoadingIcon.js';
import LoadingContainer from '../components/styled_loading/LoadingContainer.js';
import { ThemeProvider, withTheme } from 'styled-components';
import theme from '../components/themes/theme.js';
import LoadingTitle from '../components/styled_loading/LoadingTitle.js';

function LoaderIcon() {
  return (
    <ThemeProvider theme={theme}>
      <LoadingContainer>
        <LoadingTitle>loading...</LoadingTitle>
        <LoadingIcon />
      </LoadingContainer>
    </ThemeProvider>
  );
}

export default withTheme(LoaderIcon);
