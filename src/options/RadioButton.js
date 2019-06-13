import React from "react";
import ButtonRadio from "../components/ButtonRadio.js";
import StyledRadioLabel from "../components/StyledRadioLabel.js";
import RadioWrapper from "../components/RadioWrapper.js";

export default function RadioButton({ onClickRadio, radio }) {
  return (
    <RadioWrapper>
      <StyledRadioLabel image={radio.img} htmlFor={radio.id} />

      <ButtonRadio
        id={radio.id}
        type="radio"
        name="amount"
        checkedImg={radio.imgfilled}
        onChange={() => onClickRadio(radio.val)}
      />
    </RadioWrapper>
  );
}
