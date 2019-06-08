import React from "react";
import Switch from "react-switch";
import styled from "styled-components";

const StyledLabel = styled.label`
  margin-right: 5px;
  font-size: 1.2em;
`;

const StyledSwitch = styled.div`
  display: flex;
  align-self: start;
  justify-content: center;
  align-items: center;
`;

export default function SepiaToggle({}) {
  return (
    <StyledSwitch>
      <StyledLabel htmlFor="sepia-switch">Change color theme: </StyledLabel>
      <Switch
        checked={false}
        onChange={event => {
          console.log(event);
        }}
        handleDiameter={28}
        offColor="#08f"
        onColor="#0ff"
        offHandleColor="#0ff"
        onHandleColor="#08f"
        height={32}
        width={70}
        className="react-switch"
        id="sepia-switch"
      />
    </StyledSwitch>
  );
}
