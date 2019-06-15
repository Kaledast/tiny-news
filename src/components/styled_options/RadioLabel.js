import styled from 'styled-components';

const RadioLabel = styled.label`
  background: url(${props => props.image}) no-repeat center;
  width: 118px;
  height: 27px;
  display: inline-block;
  padding: 0 0 0 0px;
  position: absolute;
  left: 4px;
  z-index: 1;
`;

export default RadioLabel;
