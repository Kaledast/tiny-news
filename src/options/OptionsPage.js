import React from "react";

import DropDownCountry from "./DropDownCountry.js";
import SepiaToggle from "./SepiaToggle.js";
import OptionsContainer from "../components/OptionsContainer.js";
import StyledContent from "../components/StyledContent.js";

export default function OptionsPage({ onCountrySelect, country, history }) {
  return (
    <OptionsContainer>
      <h1>Options</h1>
      <StyledContent>
        <DropDownCountry
          history={history}
          country={country}
          onCountrySelect={onCountrySelect}
        />
        <SepiaToggle />
      </StyledContent>
    </OptionsContainer>
  );
}
