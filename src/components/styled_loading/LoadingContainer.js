import styled from 'styled-components';
import { loadingTitleColor } from '../../components/themes/theme.js';

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & > h1 {
    color: black;
    text-shadow: 2px 2px ${loadingTitleColor};
  }
`;
export default LoadingContainer;
