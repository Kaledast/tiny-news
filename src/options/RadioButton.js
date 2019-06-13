import React, { useState } from "react";
import styled from "styled-components";

const ButtonRadio = styled.input`
  background: url(${props => props.buttonImage}) no-repeat center;
  background-size: cover;
  width: 118px;
  height: 27px;
  margin-top: 20px;
`;

export default function RadioButton({ onClickRadio, radio }) {
  const [selected, setSelected] = useState(false);

  return (
    <ButtonRadio
      type="radio"
      name="amount"
      buttonImage={radio.imgfilled}
      onChange={() => onClickRadio(radio.val)}
    />
  );
}

/*   <ButtonRadio
type="button"
className={classname}
onClick={(event, selected) => {
  toggle();
}}
>
{selected ? "yes" : "no"}
</ButtonRadio>


buttonImage={radio.imgfilled}
*/
