import React, { useState } from "react";
import StyledLabel from "../components/StyledLabel.js";
import { withTheme } from "styled-components";
import RadioButton from "./RadioButton.js";
import styled from "styled-components";

const StyledRadio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    justify-content: center;
    align-content: space-around;
    align-items: space-around;
  }
`;

function AmountNews({ onAmountChange }) {
  const radioButtonsYellow = [
    {
      id: "20",
      val: 20,
      img: require("../news/images/20YellowUnfilled.svg"),
      imgfilled: require("../news/images/20YellowFilled.svg")
    },
    {
      id: "50",
      val: 50,
      img: require("../news/images/50YellowUnfilled.svg"),
      imgfilled: require("../news/images/50YellowFilled.svg")
    },
    {
      id: "100",
      val: 100,
      img: require("../news/images/100YellowUnfilled.svg"),
      imgfilled: require("../news/images/100YellowFilled.svg")
    }
  ];
  const radioButtonsGreen = [
    {
      id: "20",
      val: 20,
      img: require("../news/images/20unfilled.svg"),
      imgfilled: require("../news/images/20filled.svg")
    },
    {
      id: "50",
      val: 50,
      img: require("../news/images/50unfilled.svg"),
      imgfilled: require("../news/images/50filled.svg")
    },
    {
      id: "100",
      val: 100,
      img: require("../news/images/100unfilled.svg"),
      imgfilled: require("../news/images/100filled.svg")
    }
  ];

  return (
    <StyledRadio>
      <StyledLabel>Select amount of news shown per page:</StyledLabel>
      {radioButtonsYellow.map(radio => (
        <RadioButton
          key={radio.id}
          onClickRadio={onAmountChange}
          radio={radio}
        />
      ))}
    </StyledRadio>
  );
}

export default withTheme(AmountNews);

/*         {radioButtonsYellow.map(radio => (
          <RadioButton
            key={radio.id}
            onClickRadio={handleChangeRadio}
            radio={radio}
          />
        ))}*/
