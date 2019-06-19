import styled from 'styled-components';

const StyledWeatherContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > section {
    margin: 50px 0px 0px 10px;
    color: black;
    font-weight: bold;
    font-size: 2em;
    text-shadow: 0px 0px 3px white;
  }

  & > form {
    margin-top: 20px;
  }
`;

export default StyledWeatherContainer;
