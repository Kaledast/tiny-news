import React from 'react';
import ButtonRadio from '../components/styled_options/ButtonRadio.js';
import RadioLabel from '../components/styled_options/RadioLabel.js';
import RadioWrapper from '../components/styled_options/RadioWrapper.js';

function RadioButton({ onClickRadio, radio }) {
  return (
    <RadioWrapper>
      <ButtonRadio
        id={radio.id}
        type='radio'
        name='amount'
        checkedImg={radio.imgfilled}
        onChange={() => onClickRadio(radio.val)}
      />
      <RadioLabel image={radio.img} htmlFor={radio.id} />
    </RadioWrapper>
  );
}

export default RadioButton;