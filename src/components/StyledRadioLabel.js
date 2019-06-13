import styled from "styled-components";

const StyledRadioLabel = styled.label`
  background: url(${props => props.image}) no-repeat center;
  width: 118px;
  height: 27px;
  display: inline-block;
  padding: 0 0 0 0px;
  position: absolute;
  top: 2px;
  left: 4px;
  z-index: 1;
`;

export default StyledRadioLabel;
