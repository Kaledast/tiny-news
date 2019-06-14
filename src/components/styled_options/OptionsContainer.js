import styled from 'styled-components';

const OptionsContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  color: white;
  height: 100%;
  padding: 30px;

  & p {
    text-align: justify;
    & > a > span {
      color: #bff2c3;
      font-weight: bold;
      margin-left: 5px;
      text-decoration: underline;
    }
  }
`;

export default OptionsContainer;
