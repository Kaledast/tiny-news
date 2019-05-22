import React from "react";
import styled from "styled-components";
//mport PropTypes from "prop-types";
const NewsWrapperOuter = styled.section`
  display: flex;
  align-self: center;
  max-width: 500px;
  width: auto;
  padding: 13px;
  margin-bottom: 10px;
  border-radius: 1%;
  border: 1px solid rgba(98, 255, 207, 0.75);
`;
//border: 1px solid rgba(239, 146, 94, 0.75);
//  background: #060606;
const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff7d4;

  border: 13px solid rgba(239, 146, 94, 0.85);
  background: white;
  border-radius: 1%;
  overflow-y: scroll;
`;
// #ef925e (orange color)
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

export default function News({ deleteNews, article, title, content }) {
  return (
    <NewsWrapperOuter>
      <NewsWrapper>
        <ArticleTopic>{title}</ArticleTopic>
        <ContentSection>{content}</ContentSection>
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
//
/*
   getArticles()
      .then(data => {
        const parsedData = data.map(item => {
          const id = item.url;

          return {
            id,
            ...data
          };
        });
        console.log(parsedData);
        setNews(parsedData);
        // createApiNews(data);
      })
      .catch(error => {
        console.log(error);
      });*/
