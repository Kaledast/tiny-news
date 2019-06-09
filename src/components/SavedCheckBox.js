import styled from "styled-components";
import heart from "../news/images/heart.svg";
import CheckBoxLabel from "./CheckBoxLabel.js";

const SavedCheckBox = styled.input`
  &:checked + ${CheckBoxLabel} {
    background: url(${heart}) no-repeat center;
    height: 25px;
    width: 25px;
    display: inline-block;
    padding: 0 0 0 0px;
  }
  opacity: 0;
  height: 25px;
  width: 25px;
  position: absolute;
  top: 2px;
  left: 4px;
  z-index: 2;
`;

export default SavedCheckBox;
