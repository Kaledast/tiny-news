import styled from 'styled-components';
import { backgroundImage } from '../components/themes/theme.js';

const Appdiv = styled.div`
  display: flex;
  flex-direction: column;
  background: ${backgroundImage};
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`;

export default Appdiv;
