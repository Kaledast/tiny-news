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

export default function Buttoncontainer({ topics }) {
  //console.log("Buttons:", rubriken.map(item => item.val));

  return (
    <ButtonContainer>
      {topics.map(topic => (
        <Buttons key={topic.id} topic={topic} />
      ))}
    </ButtonContainer>
  );
}
