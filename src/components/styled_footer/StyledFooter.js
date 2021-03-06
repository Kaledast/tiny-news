import styled from 'styled-components';
import { backgroundColor } from '../themes/theme.js';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: stretch;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: ${backgroundColor};
  height: 65px;
  padding: 5px;
  z-index: 10;
`;
//#2f1953;
export default StyledFooter;
