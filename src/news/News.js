import React from "react";
import styled from "styled-components";
//import { Button, Icon } from "semantic-ui-react";
//import newsButtonHorse from "./images/newsButtonHorse.svg";
import PropTypes from "prop-types";

const NewsWrapperOuter = styled.section`
  display: flex;
  align-self: center;
  max-width: 500px;
  width: auto;
  padding: 13px;
  margin-bottom: 10px;
  border: 1px solid rgba(98, 255, 207, 0.75);
`;
//border: 1px solid rgba(239, 146, 94, 0.75);
//  background: #060606;
const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff7d4;

  border: 13px solid #3c211a;
  background: white;
  overflow-y: scroll;
`;
// #ef925e (orange color) rgba(239, 146, 94, 0.85);
// box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.5);
// box-shadow: 0px 0px 15px 2px #060606;

const ArticleTopic = styled.h2`
  text-align: center;
  color: #060606;
`;

const ContentSection = styled.section`
  margin: 4px;
`;

const DeleteButton = styled.button`
  background: #3c211a;
  margin: 10px;
  width: 25px;
  color: #ef925e;
`;

const AuthorField = styled.a``;

const Saved = styled.input.attrs({ type: "checkbox" })``;

export default function News({ deleteNews, article, handleSave }) {
  const { title, content, url, saved } = article;
  const cleanTitle = title.split("-")[0];
  const cleanContent = content.split("[");

  return (
    <NewsWrapperOuter>
      <NewsWrapper>
        <Saved onChange={() => handleSave(article)} checked={saved} />
        <ArticleTopic>{cleanTitle}</ArticleTopic>

        <ContentSection>
          {cleanContent[0]}
          <AuthorField href={url} />
        </ContentSection>
        <DeleteButton
          onClick={() => {
            deleteNews(article);
          }}
        >
          X
        </DeleteButton>
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
