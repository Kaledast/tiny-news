import React, { useState } from "react";
import Switch from "react-switch";
import StyledSwitch from "../components/StyledSwitch.js";
import StyledLabel from "../components/StyledLabel.js";

export default function SepiaToggle({}) {
  const [checked, setChecked] = useState(false);

  return (
    <StyledSwitch>
      <StyledLabel htmlFor="sepia-switch">Change color theme: </StyledLabel>
      <Switch
        checked={checked}
        onChange={event => {
          console.log(event);
          setChecked(!checked);
        }}
        handleDiameter={28}
        offColor="#2f1953"
        onColor="#FFF29A"
        offHandleColor="#FFF29A"
        onHandleColor="#2f1953"
        height={32}
        width={70}
        uncheckedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
              color: "#FFF29A",
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
