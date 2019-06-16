import styled from 'styled-components';
import { backgroundColor, paperGradient } from '../themes/theme.js';

const NewsWrapperOuter = styled.div`
  display: flex;
  align-self: center;
  max-width: 500px;
  width: auto;
  padding: 20px;
  margin-bottom: 10px;
  box-shadow: 0px -5px 0px 5px ${backgroundColor};
  border: 1px solid ${backgroundColor};
  & > div {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 4px 1px ${backgroundColor};
    background: ${paperGradient};
    padding: 15px;
    & > div:nth-child(2) {
      width: 100px;
      align-self: flex-end;
    }
  }
`;

export default NewsWrapperOuter;
