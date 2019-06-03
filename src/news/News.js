import React from "react";
import styled from "styled-components";
import heart from "./images/heart.svg";
import unheart from "./images/unheart.svg";
import linkToOriginal from "./images/linkOrig.svg";
import PropTypes from "prop-types";

const DivWrapperOuter = styled.div`
  display: flex;
  align-self: center;
  max-width: 500px;
  width: auto;
  padding: 20px;
  margin-bottom: 10px;
  box-shadow: 0px -5px 0px 5px #2f1953;
  border: 1px solid #2f1953;
`;

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(0deg, #d8d8d8, #e1dad3, white);
  box-shadow: 0px 0px 4px 1px #2f1953;
  padding: 10px;
`;

const ArticleTopic = styled.div`
  text-align: center;
  line-height: 1.2;
  font-family: "Playfair Display", "Times New Roman", serif;
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 5px;
  color: #060606;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`;

const ContentSection = styled.section`
  font-family: "Times New Roman", Times, serif;
  margin: 4px;
`;

const LinkButton = styled.div`
  background-color: white;
  background: url(${linkToOriginal}) no-repeat center;
  margin-bottom: 2px;
  height: 32px;
  width: 62px;
`;

const AuthorField = styled.a`
  background: white;
  margin-top: 4px;
  height: 32px;
  width: 62px;
  border: 1px solid turquoise;
`;

const CheckBoxwrapper = styled.div`
  position: relative;
  height: 25px;
  width: 25px;
  margin-bottom: 4px;
`;

const CheckBoxLabel = styled.label`
  background: url(${unheart}) no-repeat center;
  height: 25px;
  width: 25px;
  display: inline-block;
  padding: 0 0 0 0px;
  position: absolute;
  top: 2px;
  left: 4px;
  z-index: 1;
`;

const SavedCheckBox = styled.input`
  &:checked + ${CheckBoxLabel} {
    background: url(${heart}) no-repeat center;
    height: 25px;
    width: 25px;
    display: inline-block;
    padding: 0 0 0 0px;
  }

  opacity: 0;
  height: 25px;
  width: 25px;
  position: absolute;
  top: 2px;
  left: 4px;
  z-index: 2;
`;

const StyledImage = styled.img`
  max-width: 95%;
  -webkit-filter: sepia(80%) contrast(1) opacity(0.8);
  filter: sepia(80%) grayscale(1) contrast(1) opacity(0.8);
  mix-blend-mode: multiply;
  align-self: center;
`;

export default function News({ article, onSave, saved }) {
  const { title, content, description, url, urlToImage } = article;
  const cleanTitle = title && title.split("-")[0];
  const cleanContent = (content && content.split("[")[0]) || description;

  return (
    <DivWrapperOuter>
      <DivWrapper>
        <CheckBoxwrapper>
          <SavedCheckBox
            onChange={() => onSave(article)}
            checked={Boolean(saved)}
            id="input"
            type="checkbox"
          />
          <CheckBoxLabel htmlfor="input" />
        </CheckBoxwrapper>

        <ArticleTopic>{cleanTitle}</ArticleTopic>

        {urlToImage ? <StyledImage src={urlToImage} alt="" /> : ""}

        <ContentSection>{cleanContent}</ContentSection>
        <AuthorField href={url}>
          <LinkButton />
        </AuthorField>
      </DivWrapper>
    </DivWrapperOuter>
  );
}

News.propTypes = {
  title: PropTypes.string, //isRequired erfüllt irgendwie nicht seinen Zweck
  content: PropTypes.string,
  handleSave: PropTypes.func,
  saved: PropTypes.bool
};
