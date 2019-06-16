import styled from 'styled-components';
import linkToOriginal from '../../images/EarthIcon.png';
import {
  paperColor,
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
  width: 118px;
  border-radius: 4%;
  box-shadow: 2px 2px 2px ${backgroundColor};
  padding: 4px;

  &:active :hover :visited {
    color: black;
    box-shadow: 2px 2px 2px ${paperColor};
  }

  & > div {
    background: url(${linkToOriginal}) no-repeat center;
    background-size: cover;
    margin: 5px;
    height: 22px;
    width: 22px;
    border-radius: 50%;
  }
`;

export default NewsAuthorField;
