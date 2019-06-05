import React from "react";
import News from "./News";
import styled from "styled-components";

const StyledSection = styled.section`
  align-self: center;
  overflow: scroll;
  height: 100%;
`;

export default function NewsList({ onArticleSave, news, savedNews }) {
  let cleanedNews = news.filter(article => {
    return (
      article.content !== null &&
      article.urlToImage !== null &&
      article.content.split("%").length < 3
    );
  });

  if (cleanedNews.length < 1) {
    cleanedNews = ["404"];
  }

  return (
    <StyledSection>
      {cleanedNews.map(article => (
        <News
          key={article.id || "404 not found"}
          onSave={onArticleSave}
          article={article}
          saved={Boolean(savedNews.find(item => item.id === article.id))}
        />
      ))}
    </StyledSection>
  );
}
