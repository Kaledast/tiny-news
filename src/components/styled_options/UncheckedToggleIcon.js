import styled from 'styled-components';
import { ToggleBackground } from '../../components/themes/theme.js';

const UncheckedToggleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: '100%';
  font-size: 15;
  color: ${ToggleBackground};
  padding-right: 2px;
  padding-top: 6px;
`;

export default UncheckedToggleIcon;
