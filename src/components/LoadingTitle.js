import styled from "styled-components";
import { loadingTitleColor } from "../components/themes/theme.js";

const StyledLoadingTitle = styled.h1`
  color: black;
  text-shadow: 2px 2px ${loadingTitleColor};
`;

export default StyledLoadingTitle;
