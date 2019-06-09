import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: ${props => props.theme.backgroundColor};
  height: 65px;
`;

export default StyledHeader;
