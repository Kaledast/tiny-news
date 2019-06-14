import styled from 'styled-components';
import { imageFilter } from '../themes/theme.js';

const NewsImage = styled.img`
  max-width: 95%;
  filter: ${imageFilter};
  mix-blend-mode: multiply;
  align-self: center;
`;

export default NewsImage;
