import styled from "styled-components";

const Button = styled.div`
  background: url(${props => props.buttonIcon}) no-repeat center;
  width: 80px;
  height: 60px;
  border-radius: 10%;
`;
export default Button;
