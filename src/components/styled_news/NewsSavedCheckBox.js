import styled from 'styled-components';
import heart from '../../images/heart.svg';
import NewsCheckBoxLabel from './NewsCheckBoxLabel.js';

const NewsSavedCheckBox = styled.input`
  &:checked + ${NewsCheckBoxLabel} {
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

export default NewsSavedCheckBox;
