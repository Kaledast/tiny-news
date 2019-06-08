import React from "react";
import styled from "styled-components";
import { Dropdown } from "semantic-ui-react";

const StyledLabel = styled.label`
  margin-right: 5px;
  font-size: 1.2em;
`;

const StyledContainer = styled.div`
  margin-bottom: 30px;
`;

export default function DropDownCountry({ country, onCountrySelect, history }) {
  const countries = [
    "ae",
    "ar",
    "at",
    "au",
    "be",
    "bg",
    "br",
    "ca",
    "ch",
    "cn",
    "co",
    "cu",
    "cz",
    "de",
    "eg",
    "fr",
    "gb",
    "gr",
    "hk",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "it",
    "lt",
    "lv",
    "ma",
    "mx",
    "my",
    "ng",
    "nl",
    "no",
    "nz",
    "ph",
    "pl",
    "pt",
    "ro",
    "rs",
    "ru",
    "sa",
    "se",
    "sg",
    "si",
    "sk",
    "th",
    "tr",
    "tw",
    "ua",
    "us",
    "ve",
    "za"
  ];

  const stateOptions = countries.map(state => ({
    key: state,
    text: state,
    value: state
  }));

  return (
    <StyledContainer>
      <StyledLabel htmlFor="country">Change country:</StyledLabel>
      <Dropdown
        onChange={event => {
          const selectedCountry = event.target.querySelector("span").innerHTML;
          onCountrySelect(selectedCountry);
          history.replace("/news/:topic?");
        }}
        placeholder="country"
        search
        selection
        value={country}
        options={stateOptions}
      />
    </StyledContainer>
  );
}
