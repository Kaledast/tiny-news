import styled from "styled-components";
import { backgroundColor } from "../components/themes/theme.js";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: ${backgroundColor};
  height: 65px;
`;

export default StyledHeader;
