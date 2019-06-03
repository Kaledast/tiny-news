import React from "react";
import styled from "styled-components";
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

const StyledTitle = styled.h1`
  color: white;
`;

const StyledContent = styled.div``;

export default function OptionsPage({ handleCountrySelect, country }) {
  return (
    <Container>
      <StyledTitle>Options</StyledTitle>
      <StyledContent>
        <DropDownCountry
          country={country}
          handleChangeDropdown={handleCountrySelect}
        />
      </StyledContent>
    </Container>
  );
}
