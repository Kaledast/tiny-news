import React from "react";
import styled from "styled-components";

const SelectOption = styled.select`
  color: white;
  background: black;
  width: 50px;
  border: 1px solid white;
`;

export default function DropDownCountry({ country, handleChangeDropdown }) {
  console.log(country);
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

  return (
    <form>
      <label>
        Change Country:
        <SelectOption
          value={country}
          onChange={event => {
            console.log(event);
            handleChangeDropdown(event.target.value);
          }}
        >
          {countries.map(item => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </SelectOption>
      </label>
    </form>
  );
}
