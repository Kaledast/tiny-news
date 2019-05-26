import React from "react";
import styled from "styled-components";
//import { Button, Icon } from "semantic-ui-react";
import heart from "./images/heart.svg";
import unheart from "./images/unheart.svg";
import delHorse from "./images/deletehorse.svg";
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
`;

const ArticleTopic = styled.div`
  text-align: center;
  line-height: 1.2;
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 5px;
  color: #060606;
`;

const ContentSection = styled.section`
  margin: 4px;
`;

const DeleteButton = styled.button`
  background-color: white;
  background: url(${delHorse}) no-repeat center;
  margin: 4px;
  height: 32px;
  width: 32px;
`;

const AuthorField = styled.a``;

const CBwrapper = styled.div`
  position: relative;
  height: 25px;
  width: 25px;
`;

const CBLabel = styled.label`
  background: url(${unheart}) no-repeat center;
  height: 25px;
  width: 25px;
  display: inline-block;
  padding: 0 0 0 0px;
  position: absolute;
  top: 4px;
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
  top: 4px;
  left: 4px;
  z-index: 2;
`;

export default function News({ deleteNews, article, handleSave }) {
  const { title, content, url, saved } = article;
  const cleanTitle = title.split("-")[0];
  const cleanContent = content.split("[");
  //<Saved onChange={() => handleSave(article)} checked={saved} />
  return (
    <NewsWrapperOuter>
      <NewsWrapper>
        <CBwrapper>
          <SavedCB
            onChange={() => handleSave(article)}
            checked={saved}
            id="input"
            type="checkbox"
          />
          <CBLabel htmlfor="input" />
        </CBwrapper>
        <ArticleTopic>{cleanTitle}</ArticleTopic>

        <ContentSection>
          {cleanContent[0]}
          <AuthorField href={url} />
        </ContentSection>

        <DeleteButton
          onClick={() => {
            deleteNews(article);
          }}
        />
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
/*
   <Button animated="vertical">
              <Button.Content hidden>Original</Button.Content>
              <Button.Content visible>
                <Icon>
                  <img src={newsButtonHorse} />
                </Icon>
              </Button.Content>
            </Button>
            */
