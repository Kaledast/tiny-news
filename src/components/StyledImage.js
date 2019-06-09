import styled from "styled-components";

const StyledImage = styled.img`
  max-width: 95%;

  filter: sepia(80%) grayscale(1) contrast(1) opacity(0.8);
  mix-blend-mode: multiply;
  align-self: center;
`;
// as Option code!
//filter: sepia(80%) grayscale(1) contrast(1) opacity(0.8);

export default StyledImage;
