import styled from 'styled-components';
import { loadingTitleColor } from '../../components/themes/theme.js';

const LoginForm = styled.form`
  display: flex;
  font-size: 1.2em;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;

  & > h1 {
    color: black;
    text-shadow: 2px 2px ${loadingTitleColor};
  }
`;

export default LoginForm;
