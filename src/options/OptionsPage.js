import React from "react";
import styled from "styled-components";
import DropDownLanguage from "./DropDownLanguage.js";
import DropDownCountry from "./DropDownCountry.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  color: white;
  height: 100%;
  padding: 30px;
`;

const StyledContent = styled.h1`
  color: white;
`;

export default function OptionsPage({
  handleLanguageSelect,
  handleCountrySelect,
  language,
  country
}) {
  return (
    <Container>
      <StyledContent>Choose your Options here...</StyledContent>
      <DropDownLanguage
        language={language}
        handleChangeDropdown={handleLanguageSelect}
      />
      <DropDownCountry
        country={country}
        handleChangeDropdown={handleCountrySelect}
      />
    </Container>
  );
}
