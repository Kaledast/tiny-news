import styled from "styled-components";

const Appdiv = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.background};

  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`;

export default Appdiv;
