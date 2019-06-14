import styled from 'styled-components';
import RadioLabel from './RadioLabel.js';

const ButtonRadio = styled.input`
  &:checked + ${RadioLabel} {
    background: url(${props => props.checkedImg}) no-repeat center;
    display: inline-block;
    padding: 0 0 0 0px;
    width: 118px;
    height: 27px;
  }
  opacity: 0;
  width: 118px;
  height: 27px;
  position: absolute;
  top: 2px;
  left: 4px;
  z-index: 2;
`;

export default ButtonRadio;
