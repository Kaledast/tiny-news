import React from "react";
import DropDownSources from "./DropDownSources.js";
import DropDownCountry from "./DropDownCountry.js";
import SepiaToggle from "./SepiaToggle.js";
import OptionsContainer from "../components/OptionsContainer.js";
import StyledContent from "../components/StyledContent.js";

export default function OptionsPage({
  onToggleTheme,
  onCountrySelect,
  onSourcesSelect,
  country,
  source,
  history
}) {
  return (
    <OptionsContainer>
      <StyledContent>
        <DropDownCountry
          history={history}
          country={country}
          onCountrySelect={onCountrySelect}
        />
        <DropDownSources
          source={source}
          history={history}
          onSourcesSelect={onSourcesSelect}
        />
        <SepiaToggle onToggleTheme={onToggleTheme} />
      </StyledContent>
    </OptionsContainer>
  );
}
