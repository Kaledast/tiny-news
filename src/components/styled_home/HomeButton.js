import styled from 'styled-components';

const HomeButton = styled.div`
  background: url(${props => props.buttonIcon}) no-repeat center;
  background-size: cover;
  width: 95px;
  height: 65px;
  margin: 20px;
  &:hover {
    box-shadow: 0px 0px 10px white;
  }
`;
export default HomeButton;
