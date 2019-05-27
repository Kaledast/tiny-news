import React from "react";
import styled from "styled-components";
//import { Button, Icon } from "semantic-ui-react";
import heart from "./images/heart.svg";
import unheart from "./images/unheart.svg";
import delHorse from "./images/deletehorse.svg";
import linkToOriginal from "./images/linkOrig.svg";
import PropTypes from "prop-types";

const NewsWrapperOuter = styled.section`
  display: flex;
  align-self: center;
  max-width: 500px;
  width: auto;
  padding: 20px;
  margin-bottom: 10px;
  box-shadow: 0px -5px 0px 5px #2f1953;
  border: 1px solid #2f1953;
`;
//
const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(0deg, #d8d8d8, #e1dad3, white);
  box-shadow: 0px 0px 4px 1px #2f1953;
  padding: 10px;
`;

const ArticleTopic = styled.div`
  text-align: center;
  line-height: 1.2;
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 5px;
  color: #060606;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`;

const ContentSection = styled.section`
  margin: 4px;
`;

const DeleteButton = styled.button`
  background-color: white;
  background: url(${delHorse}) no-repeat center;
  margin-bottom: 2px;
  height: 32px;
  width: 32px;
  border-radius: 50%;
`;

const LinkButton = styled.button`
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

const CBwrapper = styled.div`
  position: relative;
  height: 25px;
  width: 25px;
  margin-bottom: 4px;
`;

const CBLabel = styled.label`
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

const SavedCB = styled.input`
  &:checked + ${CBLabel} {
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

const IconField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function News({ deleteNews, article, handleSave }) {
  const { title, content, url, saved } = article;
  const cleanTitle = title && title.split("-")[0];
  const cleanContent = content && content.split("[")[0];

  return (
    <NewsWrapperOuter>
      <NewsWrapper>
        <IconField>
          <CBwrapper>
            <SavedCB
              onChange={() => handleSave(article)}
              checked={saved}
              id="input"
              type="checkbox"
            />
            <CBLabel htmlfor="input" />
          </CBwrapper>
          <DeleteButton
            onClick={() => {
              deleteNews(article);
            }}
          />
        </IconField>

        <ArticleTopic>{cleanTitle}</ArticleTopic>

        <ContentSection>{cleanContent}</ContentSection>
        <AuthorField href={url}>
          <LinkButton />
        </AuthorField>
      </NewsWrapper>
    </NewsWrapperOuter>
  );
}

News.propTypes = {
  title: PropTypes.string, //isRequired erfüllt irgendwie nicht seinen Zweck
  content: PropTypes.string,
  handleSave: PropTypes.func,
  deleteNews: PropTypes.func,
  saved: PropTypes.bool
};
