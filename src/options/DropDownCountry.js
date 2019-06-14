import React from 'react';
import GeneralLabel from '../components/GeneralLabel.js';
import GeneralDropDownContainer from '../components/styled_options/GeneralDropDownContainer.js';
import { Dropdown } from 'semantic-ui-react';

export default function DropDownCountry({ country, onCountrySelect, history }) {
  const countries = [
    'ae',
    'ar',
    'at',
    'au',
    'be',
    'bg',
    'br',
    'ca',
    'ch',
    'cn',
    'co',
    'cu',
    'cz',
    'de',
    'eg',
    'fr',
    'gb',
    'gr',
    'hk',
    'hu',
    'id',
    'ie',
    'il',
    'in',
    'it',
    'lt',
    'lv',
    'ma',
    'mx',
    'my',
    'ng',
    'nl',
    'no',
    'nz',
    'ph',
    'pl',
    'pt',
    'ro',
    'rs',
    'ru',
    'sa',
    'se',
    'sg',
    'si',
    'sk',
    'th',
    'tr',
    'tw',
    'ua',
    'us',
    've',
    'za'
  ];

  const stateOptions = countries.map(state => ({
    key: state,
    text: state,
    value: state
  }));

  return (
    <GeneralDropDownContainer>
      <GeneralLabel htmlFor='country'>Change country:</GeneralLabel>
      <Dropdown
        onChange={(event, data) => {
          onCountrySelect(data.value);
          history.replace('/news/:topic?');
        }}
        placeholder='country'
        search
        selection
        value={country}
        options={stateOptions}
      />
    </GeneralDropDownContainer>
  );
}
