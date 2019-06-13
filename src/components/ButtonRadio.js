import styled from "styled-components";
import StyledRadioLabel from "./StyledRadioLabel.js";
import testfill from "../news/images/20YellowFilled.svg";

const ButtonRadio = styled.input`
  &:checked + ${StyledRadioLabel} {
    background: url(${testfill}) no-repeat center;
    box-shadow: 0 0 0 3px yellow;
    display: inline-block;
    padding: 0 0 0 0px;
    width: 118px;
    height: 27px;
    z-index: 3;
  }
  opacity: 40;
  background: url(${testfill}) no-repeat center;
  width: 118px;
  height: 27px;
  position: absolute;
  top: 2px;
  left: 4px;
`;

/*  
const ButtonRadio = styled.input`
  &:checked + ${StyledRadioLabel} {
    background-image: url(${props => props.checkedImg}) no-repeat center;

  */

export default ButtonRadio;
