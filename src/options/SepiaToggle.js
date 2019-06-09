import React, { useState } from "react";
import Switch from "react-switch";
import StyledSwitch from "../components/StyledSwitch.js";
import StyledLabel from "../components/StyledLabel.js";
import { withTheme } from "styled-components";
import { getFromLocal, setToLocal } from "../services.js";

//const StyledOffIcon = styled.div``;

function SepiaToggle({ onToggleTheme }) {
  const [checked, setChecked] = useState(getFromLocal("checked") || false);

  return (
    <StyledSwitch>
      <StyledLabel htmlFor="sepia-switch">Sepia skin: </StyledLabel>
      <Switch
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          setToLocal("checked", !checked);
          onToggleTheme();
        }}
        handleDiameter={25}
        offColor="#486C5F"
        onColor="#FFF29A"
        offHandleColor="#bff2c3"
        onHandleColor="#2f1953"
        height={30}
        width={73}
        uncheckedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
              color: "#bff2c3",
              paddingRight: 2
            }}
          >
            Off
          </div>
        }
        checkedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
              color: "#2f1953",
              paddingRight: 2
            }}
          >
            On
          </div>
        }
        className="react-switch"
        id="sepia-switch"
      />
    </StyledSwitch>
  );
}

export default withTheme(SepiaToggle);
