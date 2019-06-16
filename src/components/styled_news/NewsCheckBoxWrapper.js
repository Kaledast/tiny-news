import styled from 'styled-components';
import unheart from '../../images/unheart.svg';
import heart from '../../images/heart.svg';

const NewsCheckBoxWrapper = styled.div`
  position: relative;
  height: 25px;
  width: 25px;
  margin-bottom: 4px;
  & > label {
    background: url(${unheart}) no-repeat center;
    height: 25px;
    width: 25px;
    display: inline-block;
    padding: 0 0 0 0px;
    position: absolute;
    top: 2px;
    left: 4px;
    z-index: 1;
  }
  & > input {
    &:checked + label {
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
  }
`;
export default NewsCheckBoxWrapper;
