import React from "react";
import Buttons from "./Buttons.js";
import styled from "styled-components";

const ButtonContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  width: auto;
  height: 50%;
`;

export default function Buttoncontainer({ rubriken, rubrikFunktion }) {
  //console.log("Buttons:", rubriken.map(item => item.val));

  const renderButtons = rubriken.map(rubrik => (
    <Buttons
      key={rubrik.id}
      rubrikItem={rubrik}
      rubrikFunktion={rubrikFunktion}
    />
  ));
  return <ButtonContainer>{renderButtons}</ButtonContainer>;
}
