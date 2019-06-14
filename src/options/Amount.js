import React from 'react';
import GeneralLabel from '../components/GeneralLabel.js';
import RadioButton from './RadioButton.js';
import RadioMenu from '../components/styled_options/RadioMenu.js';

function AmountNews({ onAmountChange, themeState }) {
  const radioButtons =
    themeState.mode === 'normal'
      ? [
          {
            id: '20',
            val: 20,
            img: require('../news/images/20YellowUnfilled.svg'),
            imgfilled: require('../news/images/20YellowFilled.svg')
          },
          {
            id: '50',
            val: 50,
            img: require('../news/images/50YellowUnfilled.svg'),
            imgfilled: require('../news/images/50YellowFilled.svg')
          },
          {
            id: '100',
            val: 100,
            img: require('../news/images/100YellowUnfilled.svg'),
            imgfilled: require('../news/images/100YellowFilled.svg')
          }
        ]
      : [
          {
            id: '20',
            val: 20,
            img: require('../news/images/20unfilled.svg'),
            imgfilled: require('../news/images/20filled.svg')
          },
          {
            id: '50',
            val: 50,
            img: require('../news/images/50unfilled.svg'),
            imgfilled: require('../news/images/50filled.svg')
          },
          {
            id: '100',
            val: 100,
            img: require('../news/images/100unfilled.svg'),
            imgfilled: require('../news/images/100filled.svg')
          }
        ];

  return (
    <RadioMenu>
      <GeneralLabel>Select amount of news shown per page:</GeneralLabel>
      <div>
        {radioButtons.map(radio => (
          <RadioButton
            key={radio.id}
            onClickRadio={onAmountChange}
            radio={radio}
          />
        ))}
      </div>
    </RadioMenu>
  );
}

export default AmountNews;
