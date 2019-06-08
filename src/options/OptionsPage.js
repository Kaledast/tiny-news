import React from "react";
import styled from "styled-components";
import DropDownCountry from "./DropDownCountry.js";
import SepiaToggle from "./SepiaToggle.js";

const Container = styled.form`
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

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
`;

export default function OptionsPage({ onCountrySelect, country, history }) {
  return (
    <Container>
      <StyledTitle>Options</StyledTitle>
      <StyledContent>
        <DropDownCountry
          history={history}
          country={country}
          onCountrySelect={onCountrySelect}
        />
        <SepiaToggle />
      </StyledContent>
    </Container>
  );
}
