import styled from "styled-components";
import { imageFilter } from "../components/themes/theme.js";

const StyledImage = styled.img`
  max-width: 95%;
  filter: ${imageFilter};
  mix-blend-mode: multiply;
  align-self: center;
`;

export default StyledImage;
