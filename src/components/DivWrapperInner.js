import styled from "styled-components";
import { backgroundColor } from "../components/themes/theme.js";

const DivWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(0deg, #d8d8d8, #e1dad3, white);
  box-shadow: 0px 0px 4px 1px ${backgroundColor};
  padding: 10px;
`;

export default DivWrapperInner;
