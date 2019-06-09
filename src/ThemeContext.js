import React, { useState, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { backgroundColor, backgroundImage } from "./components/themes/theme.js";

export const ThemeToggleContext = React.createContext();

export const useTheme = () => useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({
    mode: "normal"
  });

  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    background-image: ${backgroundImage};
  `;

  const toggle = () => {
    const mode = themeState.mode === "normal" ? `sepia` : `normal`;
    setThemeState({ mode: mode });
  };

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode
        }}
      >
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
