import styled from "styled-components";

const Button = styled.div`
  background: url(${props => props.buttonIcon}) no-repeat center;
  background-size: cover;
  width: 95px;
  height: 65px;
  margin: 20px;
`;
export default Button;
