import React from 'react';
import DropDownSources from './DropDownSources.js';
import DropDownCountry from './DropDownCountry.js';
import AmountNews from './Amount.js';
import ThemeToggle from './ThemeToggle.js';
import OptionsContainer from '../components/styled_options/OptionsContainer.js';
import OptionsWrapper from '../components/styled_options/OptionsWrapper.js';
import PropTypes from 'prop-types';

export default function OptionsPage({
  onToggleTheme,
  onCountrySelect,
  onSourcesSelect,
  onAmountChange,
  themeState,
  country,
  source,
  history
}) {
  return (
    <OptionsContainer>
      <OptionsWrapper>
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
        <ThemeToggle onToggleTheme={onToggleTheme} />
      </OptionsWrapper>
      <AmountNews themeState={themeState} onAmountChange={onAmountChange} />
      <p>
        Ps: you cannot mix choices of country or search with sources, for
        further information visit
        <a href={'https://newsapi.org/docs/endpoints/top-headlines'}>
          <span>newsapi.org request parameters</span>
        </a>
      </p>
    </OptionsContainer>
  );
}

// ------- proptypes --------
OptionsPage.propTypes = {
  country: PropTypes.string,
  source: PropTypes.string,
  onToggleTheme: PropTypes.func,
  onCountrySelect: PropTypes.func,
  onSourcesSelect: PropTypes.func
};
