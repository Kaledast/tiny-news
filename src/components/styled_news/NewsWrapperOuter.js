import styled from 'styled-components';
import { backgroundColor } from '../themes/theme.js';

const NewsWrapperOuter = styled.div`
  display: flex;
  align-self: center;
  max-width: 500px;
  width: auto;
  padding: 20px;
  margin-bottom: 10px;
  box-shadow: 0px -5px 0px 5px ${backgroundColor};
  border: 1px solid ${backgroundColor};
`;

export default NewsWrapperOuter;
