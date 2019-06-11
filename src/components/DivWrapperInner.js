import styled from "styled-components";
import { backgroundColor, paperGradient } from "../components/themes/theme.js";

const DivWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  background: ${paperGradient};
  box-shadow: 0px 0px 4px 1px ${backgroundColor};
  padding: 15px;
  & > div:nth-child(2) {
    width: 100px;
    align-self: flex-end;
  }
`;

export default DivWrapperInner;
