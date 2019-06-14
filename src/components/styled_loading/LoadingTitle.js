import styled from 'styled-components';
import { loadingTitleColor } from '../../components/themes/theme.js';

const LoadingTitle = styled.h1`
  color: black;
  text-shadow: 2px 2px ${loadingTitleColor};
`;

export default LoadingTitle;
