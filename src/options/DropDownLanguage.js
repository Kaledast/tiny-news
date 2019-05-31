import React from "react";
import styled from "styled-components";

const SelectOption = styled.select`
  color: white;
  background: black;
  width: 50px;
  border: 1px solid white;
`;

const StyledSubmit = styled.input`
  color: white;
`;
export default function DropDownLanguage({ language, handleChangeDropdown }) {
  function handleSubmit(event) {
    alert("Your favorite language is: " + language);
    event.preventDefault();
  }

  const languages = [
    "ar",
    "de",
    "en",
    "es",
    "fr",
    "he",
    "it",
    "nl",
    "no",
    "pt",
    "ru",
    "se",
    "ud",
    "zh"
  ];
  return (
    <form onSubmit={event => handleSubmit(language)}>
      <label>
        Change Language:
        <SelectOption
          value={language}
          onChange={event => handleChangeDropdown(event.target.value)}
        >
          {languages.map(item => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </SelectOption>
      </label>
      <StyledSubmit type="submit" value="Submit" />
    </form>
  );
}
