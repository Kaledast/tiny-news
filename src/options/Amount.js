import React, { useState } from "react";
import { RadioGroup, Radio } from "react-radio-group";
import StyledLabel from "../components/StyledLabel.js";
import { withTheme } from "styled-components";
import { getFromLocal, setToLocal } from "../services.js";
import styled from "styled-components";
import { minYellowUnfilled } from "../news/images/20YellowUnfilled.svg";

const StyledRadio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div > input:nth-child(1) {
    margin: 30px;
    width: 30px;
    height: 10px;
  }

  & > div > input:nth-child(2) {
    margin: 30px;
    width: 30px;
    height: 10px;
  }

  & > div > input:nth-child(3) {
    margin: 30px;
    width: 30px;
    height: 10px;
  }
`;

function AmountNews({ onAmountChange }) {
  function handleChangeRadio(input) {
    onAmountChange(input);
  }
  return (
    <StyledRadio>
      <StyledLabel>Choose amount of news shown per page</StyledLabel>
      <RadioGroup
        name="amount"
        onChange={event => {
          handleChangeRadio(event);
        }}
      >
        <Radio value="20" />
        <Radio value="50" />
        <Radio value="100" />
      </RadioGroup>
    </StyledRadio>
  );
}

export default withTheme(AmountNews);
