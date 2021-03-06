import styled from 'styled-components';

const OptionsContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: black;
  color: white;
  height: 100%;
  padding: 30px;
  margin-bottom: 45px;
  overflow: scroll;

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
