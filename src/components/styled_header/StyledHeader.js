import styled from 'styled-components';
import { backgroundColor } from '../../components/themes/theme.js';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 10px;
  background: ${backgroundColor};
  height: 65px;
  width: auto;
`;

export default StyledHeader;
