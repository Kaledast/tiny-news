import styled from 'styled-components';
import {
  backgroundColor,
  paperGradient
} from '../../components/themes/theme.js';

const NewsAuthorField = styled.a`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-weight: bold;
  background: ${paperGradient};
  color: ${backgroundColor};
  margin-top: 4px;
  height: 32px;
  width: 112px;
  border-radius: 4%;
  box-shadow: 2px 2px 2px ${backgroundColor};
`;

export default NewsAuthorField;
