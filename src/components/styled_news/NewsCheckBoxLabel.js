import styled from 'styled-components';
import unheart from '../../images/unheart.svg';

const NewsCheckBoxLabel = styled.label`
  background: url(${unheart}) no-repeat center;
  height: 25px;
  width: 25px;
  display: inline-block;
  padding: 0 0 0 0px;
  position: absolute;
  top: 2px;
  left: 4px;
  z-index: 1;
`;

export default NewsCheckBoxLabel;
