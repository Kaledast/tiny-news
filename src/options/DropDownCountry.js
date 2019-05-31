import React from "react";

export default function DropDownCountry({ country, handleChangeDropdown }) {
  function handleSubmit(event) {
    alert("Your favorite country is: " + country);
    event.preventDefault();
  }

  const countries = [
    "all",
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
    <form onSubmit={handleSubmit}>
      <label>
        Change Country:
        <select
          value={country}
          onChange={event => handleChangeDropdown(event.target.value)}
        >
          {countries.map(item => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
